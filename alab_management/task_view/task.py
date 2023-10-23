"""
Define the base class of task, which will be used for defining more tasks.
"""
from abc import ABC, abstractmethod
import inspect
from typing import Dict, List, Type, TYPE_CHECKING, Optional, Union, Any, Literal
from bson.objectid import ObjectId
from alab_management.task_view.task_enums import TaskPriority
from inspect import getfullargspec
from warnings import warn

if TYPE_CHECKING:
    from alab_management.lab_view import LabView
    from alab_management.device_view.device import BaseDevice

from labgraph import Actor, ActorView
from labgraph.views.base import NotFoundInDatabaseError
from alab_management.utils.data_objects import get_labgraph_mongodb
from inspect import getfile
from difflib import Differ


class ResultPointer:
    def __init__(self, task_id: ObjectId, key: str):
        self.task_id = task_id
        self.key = key

    def to_json(self):
        return {
            "type": "ResultPointer",
            "task_id": str(self.task_id),
            "key": self.key,
        }

    @classmethod
    def from_json(cls, json: Dict[str, Any]):
        if json["type"] != "ResultPointer":
            raise ValueError("JSON does not encode a ResultPointer!")
        return cls(task_id=ObjectId(json["task_id"]), key=json["key"])


class BaseTask(ABC):
    """
    The abstract class of task.

    All the tasks should inherit from this class.
    """

    BATCH_CAPACITY = 1  # default to no batching
    BATCH_SEQUENCE = 999  # lowest priority is batched first

    def __init__(
        self,
        samples: Optional[List[Union[str, ObjectId]]] = None,
        task_id: Optional[ObjectId] = None,
        lab_view: Optional["LabView"] = None,
        priority: Optional[Union[TaskPriority, int]] = TaskPriority.NORMAL,
        simulation: bool = True,
        no_parameters: bool = False,
        labgraph_type: Literal["Action", "Analysis", "Measurement", None] = None,
        *args,
        **subclass_kwargs,
    ):
        """
        Args:
            task_id: the identifier of task
            lab_view: a lab_view corresponding to the task_id
            samples: a list of sample_id's corresponding to samples involvend in the task.

        Here is an example about how to define a custom task

        .. code-block:: python

          def __init__(self, sample_1: ObjectId, sample_2: Optional[ObjectId],
                       sample_3: Optional[ObjectId], sample_4: Optional[ObjectId],
                        setpoints: List[Tuple[float, float]], *args, **kwargs):
              super(Heating, self).__init__(*args, **kwargs)
              self.setpoints = setpoints
              self.samples = [sample_1, sample_2, sample_3, sample_4]
        """
        self.__simulation = simulation
        self.labgraph_type = labgraph_type
        self.__samples = samples or []
        if self.is_simulation:
            task_id = task_id or ObjectId()  # if None, generate an ID now
            self.task_id = task_id
            # current_frame = inspect.currentframe()
            # outer_frames = inspect.getouterframes(current_frame)
            # subclass_init_frame = outer_frames[2].frame
            # self.subclass_kwargs = {
            #     key: val
            #     for key, val in inspect.getargvalues(subclass_init_frame).locals.items()
            #     if key not in ["self", "args", "kwargs", "__class__"]
            # }
            self.subclass_kwargs = subclass_kwargs
            if len(subclass_kwargs) == 0 and not no_parameters:
                warn(
                    "BaseTask was instantiated with no subclass parameters were provided; this probably means you defined your Task incorrectly. Make sure all parameters are passed to the BaseTask constructor as keyword arguments, as they must be tracked for batching. If there are no parameters for your task, you can pass `no_parameters = True` to the BaseTask constructor to suppress this warning."
                )

        else:
            if (task_id is None) or (lab_view is None) or (samples is None):
                raise ValueError(
                    "BaseTask was instantiated with simulation mode off -- task_id, lab_view, and samples must all be provided!"
                )
            self.task_id = task_id
            self.lab_view = lab_view
            self.logger = self.lab_view.logger
            self.priority = priority
            self.lab_view.priority = priority
            # if not self.validate(): #TODO: implement this
            #     raise ValueError("Task validation failed!")

    @property
    def is_simulation(self) -> bool:
        return self.__simulation

    @property
    def samples(self) -> List[str]:
        return self.__samples

    @property
    def priority(self) -> int:
        if self.is_simulation:
            return 0
        return self.lab_view._resource_requester.priority

    @property
    # @abstractmethod
    def result_specification(self) -> Dict[str, Any]:
        """Returns a dictionary describing the results to be generated by this task.

        Raises:
            NotImplementedError: The subclass must implement this method.

        Returns:
            Dict[str, Any]: A dictionary with key:type pairs describing the type of data contained under each result key.

            Examples:
                >>> return {
                        "temperature": float,
                        "pressure": float
                        }

                >>> return {
                        "twotheta": List[float],
                        "counts": List[float]
                        }

                >>> return {} #no results associated with this task.
        """
        return NotImplementedError

    def update_result(self, key: str, value: Any):
        """Attach a result to the task. This will be saved in the database and
        can be accessed later. Subsequent calls to this function with the same
        key will overwrite the previous value.

        Args:
            key (str): The name of the result.
            value (Any): The value of the result.
        """
        if key not in self.result_specification:
            raise ValueError(
                f"Result key {key} is not included in the result specification for this task!"
            )

        # TODO type checking?

        if not self.__simulation:
            self.lab_view.update_result(name=key, value=value)

    def export_result(self, key: str) -> dict:
        """
        Creates a reference to a result generated by this Task. This
        result can then be imported by another task. This is useful in
        cases where tasks are chained together. For instance, the
        diffraction results from a "PowderDiffraction" task could be
        exported, then imported by a "RietveldRefinement" analysis task.

        Args:
            key (str): The name of the result.

        Returns:
            Any: The value of the result.
        """
        if key not in self.result_specification:
            raise ValueError(
                f"Result key {key} is not included in the result specification for this task!"
            )

        return ResultPointer(task_id=self.task_id, key=key).to_json()

    def import_result(
        self,
        pointer: Union[ResultPointer, Dict[str, Any]],
        allow_explicit_value: bool = False,
    ) -> Any:
        """
        Imports a result from another task. This is useful in cases where
        tasks are chained together. For instance, the diffraction results from a
        ``PowderDiffraction`` task could be exported, then imported by a "RietveldRefinement"
        analysis task.

        Args:
            pointer (Union[ResultPointer, Dict[str, Any]]): Either a ResultPointer object
              or a dictionary with the same format as a ResultPointer.
            allow_explicit_value (bool, optional): If true, users can pass values here instead
              of pointers. If False, only ResultPointers are valid. Defaults to False.

        Raises:
            ValueError: If allow_explicit_value is False and the user passes a value instead of a pointer.

        Returns:
            Any: The value of the result.
        """
        if isinstance(pointer, dict) and pointer.get("type", None) == "ResultPointer":
            pointer = ResultPointer.from_json(pointer)
        elif isinstance(pointer, ResultPointer):
            pass  # already in correct format
        else:
            if allow_explicit_value:
                return pointer  # user passed a specific value instead of a pointer
            else:
                raise ValueError(
                    f"Invalid pointer: {pointer}. This value was expected to be a pointer "
                    f"to an existing task result, but an explicit value was passed instead! "
                    f"If you want to allow explicit values, set allow_explicit_value=True."
                )

        reference_task = self.lab_view._task_view.get_task_node(task_id=pointer.task_id)
        return reference_task["result"][pointer.key]

    @priority.setter
    def priority(self, value: Union[int, TaskPriority]):
        if value < 0:
            raise ValueError("Priority should be a positive integer")
        if not self.__simulation:
            self.lab_view._resource_requester.priority = int(value)

    def set_message(self, message: str):
        """Sets the task message to be displayed on the dashboard."""
        self._message = message
        if not self.__simulation:
            self.lab_view._task_view.set_message(task_id=self.task_id, message=message)

    def get_message(self):
        return self._message

    def validate(self) -> bool:
        """
        Validate the task. This function will be called before the task is executed.
        Should return False if the task has values that make it impossible to execute.

        For example, a ``Heating`` subclass of `BaseTask` might return False if the
        set temperature is too high for the furnace.
        """
        # raise NotImplementedError(
        #     "The .validate method must be implemented by a subclass of BaseTask"
        # )
        return True

    @abstractmethod
    def run(self):
        """
        Run the task. In this function, you can request lab resources from lab manager and log data to database
        with logger.

        ``request_resources`` will not return until all the requested resources are available. So the task will
        pend until it gets the requested resources, which prevent the conflict in the resource allocation.

        When a device get the requested device and sample positions, it also takes over the ownership of these
        resources, i.e., other task cannot use the device or request the sample positions this task has requested.

        We use a context manager to manage the ownership of the resources. when a task is completed, all the devices
        and sample positions will be released automatically.

        Here is an example about how to define the task

        .. code-block:: python

          # request devices and sample positions from lab manager. The `$` represents
          # the name of assigned devices in the sample positions we try to request,
          # 4 is the number of sample positions.
          with self.lab_view.request_resources({Furnace: [("$.inside", 4)]}) as devices_and_positions:
              devices, sample_positions = devices_and_positions
              furnace = devices[Furnace]
              inside_furnace = sample_positions[Furnace]["$.inside"]

              for sample in self.samples:
                  # in a task, we can call other tasks, which will share the same
                  # task id, requested devices and sample positions.
                  moving_task = Moving(sample=sample,
                                       task_id=self.task_id,
                                       dest=inside_furnace[0],
                                       lab_view=self.lab_view,
                                       logger=self.logger)
                  moving_task.run()

              # send command to device
              furnace.run_program(self.setpoints)

              while furnace.is_running():
                  # log the device data, which is current temperature of the furnace
                  self.logger.log_device_signal({
                      "device": furnace.name,
                      "temperature": furnace.get_temperature(),
                  })

        """
        raise NotImplementedError(
            "The .run method must be implemented by the subclass of BaseTask."
        )

    def run_subtask(
        self,
        task: Type["BaseTask"],
        samples: Optional[Union[List[str], str]] = None,
        **kwargs,
    ):
        """
        Run a subtask of this current task. Returns the result, if any, of the subtask.
        """
        samples = samples or self.samples
        if isinstance(samples, str):
            samples = [samples]
        return self.lab_view.run_subtask(task=task, samples=samples, **kwargs)

    def _batch_merge_allowed_wrapper(self, other: "BaseTask"):
        """This function does some default logic for batching before considering the task contents"""

        if not isinstance(other, self.__class__):
            return False  # can only compare the same task
        return self.batch_merge_allowed(other=other)

    def batch_merge_allowed(self, other: "BaseTask") -> bool:
        """Determine whether this task can be merged with another task of the same type!

        Args:
            other (BaseTask): Another task of the same type to try merging with

        Returns:
            bool: True if these tasks can be merged, otherwise False
        """
        return False

    def batch_merge_priority(self, other: "BaseTask") -> float:
        """Function evaluated to decide how similar two tasks are (Higher value = more similar). We will sort nodes by similarity to prioritize merges between similar nodes. Defaults to None, implies that nodes are equally similar."""
        return 0

    def batch_merge_parameters(self, other: "BaseTask") -> dict:
        """Function evaluated to decide how to merge parameters from two tasks. Should return keyword arguments to be passed to the constructor of the merged task."""
        raise NotImplementedError


_task_registry: Dict[str, Type[BaseTask]] = {}

SUPPORTED_SAMPLE_POSITIONS_TYPE = Dict[
    Union[Type["BaseDevice"], str, None], Union[str, List[str]]
]
_reroute_task_registry: List[
    Dict[str, Union[Type[BaseTask], SUPPORTED_SAMPLE_POSITIONS_TYPE]]
] = []


actor_view = ActorView(labgraph_mongodb_instance=get_labgraph_mongodb())


def add_task(task: Type[BaseTask]):
    """
    Register a task
    """
    if task.__name__ in _task_registry:
        raise KeyError(f"Duplicated task name {task.__name__}")
    _task_registry[task.__name__] = task

    # version update
    filepath = getfile(task)
    with open(filepath, "r") as f:
        code_str = f.readlines()

    try:
        actor = actor_view.get_by_name(task.__name__)[0]
    except NotFoundInDatabaseError:
        actor = Actor(
            name=task.__name__,
            description="A task definition within ALabOS. This was added when calling the `add_task` function in initial lab setup.",
            tags=["ALabOS", "task_definition"],
            code=code_str,
        )
        actor_view.add(actor)

    if actor["code"] != code_str:
        actor.new_version(
            description="Automated version update due to changes in the .py file containing this task definition.",
            code_diff=list(Differ().compare(actor["code"], code_str)),
        )
        actor["code"] = code_str
        actor_view.update(actor)


def get_all_tasks() -> Dict[str, Type[BaseTask]]:
    """
    Get all the tasks in the registry
    """
    return _task_registry.copy()


def add_reroute_task(
    supported_sample_positions: SUPPORTED_SAMPLE_POSITIONS_TYPE,
    task: Type[BaseTask],
    **kwargs,
):
    """
    Register a reroute task
    """
    if task.__name__ not in _task_registry:
        raise KeyError(
            f"Task {task.__name__} is not registered! Register with `add_task` before registering as a reroute task."
        )
    if "sample" not in getfullargspec(task).args:
        raise ValueError(
            f"Task {task.__name__} does not have `sample` as a parameter! "
            "Reroute tasks must accept a `sample` parameter that specifies the name or sample_id of the sample to be rerouted"
        )
    _reroute_task_registry.append(
        {
            "supported_sample_positions": supported_sample_positions,
            "task": task,
            "kwargs": kwargs,
        }
    )
