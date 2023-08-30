from abc import abstractmethod
from ..task_view import BaseTask, TaskPriority
from typing import Optional, List, Union, TYPE_CHECKING
from bson import ObjectId
from labgraph import Analysis, AnalysisMethod

if TYPE_CHECKING:
    from alab_management.lab_view import LabView

placeholder_actor = AnalysisMethod(
    name="Placeholder before execution", description="Placeholder before execution"
)
placeholder_actor.save()


class BaseAnalysis(BaseTask, Analysis):
    def __init__(
        self,
        samples: Optional[List[str]] = None,
        task_id: Optional[ObjectId] = None,
        lab_view: Optional["LabView"] = None,
        priority: Optional[Union[TaskPriority, int]] = TaskPriority.NORMAL,
        simulation: bool = True,
        *args,
        **kwargs,
    ):
        BaseTask.__init__(
            self,
            samples=samples,
            task_id=task_id,
            lab_view=lab_view,
            priority=priority,
            simulation=simulation,
            *args,
            **kwargs,
        )

        Analysis.__init__(
            self,
            name=self.__class__.__name__,
            analysis_method=placeholder_actor,
            description="An Analysis Task defined in ALabOS",  # TODO add description
            *args,
            **kwargs,
        )

    def to_dict(self):
        d = BaseTask.to_dict(self)
        d.update(Analysis.to_dict(self))
        return d

    # def to_dict(self):
    #     return {
    #         "type": self.__class__.__name__,
    #         "labgraph_type": "Analysis",
    #         "parameters": self.subclass_kwargs,
    #     }
