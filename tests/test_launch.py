import subprocess
import time
import unittest

import requests
from bson import ObjectId

from alab_management.experiment_view import ExperimentView
from alab_management.scripts.cleanup_lab import cleanup_lab
from alab_management.scripts.setup_lab import setup_lab
from alab_management.task_view import TaskView


class TestLaunch(unittest.TestCase):
    def setUp(self) -> None:
        time.sleep(0.5)
        cleanup_lab(
            all_collections=True,
            _force_i_know_its_dangerous=True,
            sim_mode=True,
            database_name="Alab_sim",
            user_confirmation="y",
        )
        setup_lab()
        self.task_view = TaskView()
        self.experiment_view = ExperimentView()
        self.main_process = subprocess.Popen(["alabos", "launch", "--port", "8896"], shell=False)
        self.worker_process = subprocess.Popen(
            ["alabos", "launch_worker", "--processes", "8", "--threads", "8"],
            shell=False,
        )
        time.sleep(2)  # waiting for starting up

        if self.main_process.poll() is not None:
            raise RuntimeError("Main process failed to start")
        if self.worker_process.poll() is not None:
            raise RuntimeError("Worker process failed to start")

        print("Main process started: pid", self.main_process.pid)
        print("Worker process started: pid", self.worker_process.pid)

    def tearDown(self) -> None:
        self.main_process.terminate()
        self.worker_process.terminate()
        time.sleep(1)
        cleanup_lab(
            all_collections=True,
            _force_i_know_its_dangerous=True,
            sim_mode=True,
            database_name="Alab_sim",
            user_confirmation="y",
        )

    def test_submit_experiment(self):
        def compose_exp(exp_name, num_samples):
            sample_names = [f"{exp_name}_sample_{i}" for i in range(num_samples)]
            return {
                "name": exp_name,
                "tags": [],
                "metadata": {},
                "samples": [{"name": sample_name_, "tags": [], "metadata": {}} for sample_name_ in sample_names],
                "tasks": [
                    *[{
                        "type": "Starting",
                        "prev_tasks": [],
                        "parameters": {
                            "dest": "furnace_temp",
                        },
                        "samples": [sample_name_],
                    } for sample_name_ in sample_names],
                    {
                        "type": "Heating",
                        "prev_tasks": list(range(len(sample_names))),
                        "parameters": {
                            "setpoints": ((1, 2),),
                        },
                        "samples": sample_names,
                    },
                    *[{
                        "type": "Ending",
                        "prev_tasks": [len(sample_names)],
                        "parameters": {},
                        "samples": [sample_name_],
                    } for sample_name_ in sample_names],

                ],
            }

        exp_ids = []
        num_of_tasks = 0
        for i in range(8):
            experiment = compose_exp(f"Experiment with {i+1} samples", num_samples=i+1)
            num_of_tasks += len(experiment["tasks"])
            resp = requests.post(
                "http://127.0.0.1:8896/api/experiment/submit", json=experiment
            )
            resp_json = resp.json()
            exp_id = ObjectId(resp_json["data"]["exp_id"])
            self.assertTrue("success", resp_json["status"])
            exp_ids.append(exp_id)
        time.sleep(30)
        self.assertEqual(num_of_tasks, self.task_view._task_collection.count_documents({}))

        self.assertTrue(
            all(
                task["status"] == "COMPLETED"
                for task in self.task_view._task_collection.find()
            )
        )
        self.assertTrue(
            all(
                task["result"] == task["_id"]
                for task in self.task_view._task_collection.find()
            )
        )

        for exp_id in exp_ids:
            self.assertEqual(
                "COMPLETED", self.experiment_view.get_experiment(exp_id)["status"]
            )

    def test_user_input(self):
        experiment = {
            "tags": [],
            "metadata": {},
            "samples": [{"name": "test_sample", "tags": [], "metadata": {}}],
            "tasks": [
                {
                    "type": "Starting",
                    "prev_tasks": [],
                    "parameters": {
                        "dest": "furnace_table",
                    },
                    "samples": ["test_sample"],
                },
                {
                    "type": "ErrorHandling",
                    "prev_tasks": [0],
                    "parameters": {},
                    "samples": ["test_sample"],
                },
            ],
        }
        exp_ids = []
        for _ in range(3):
            experiment["name"] = f"Failed {_}"
            resp = requests.post(
                "http://127.0.0.1:8896/api/experiment/submit", json=experiment
            )
            resp_json = resp.json()
            exp_id = ObjectId(resp_json["data"]["exp_id"])
            self.assertTrue("success", resp_json["status"])
            exp_ids.append(exp_id)

            time.sleep(5)

        self.assertEqual(9, self.task_view._task_collection.count_documents({}))
        import rich
        rich.print(list(self.task_view._task_collection.find({})))
        # print(datetime.datetime.now())
        self.assertTrue(
            all(
                task["status"] == "COMPLETED"
                for task in self.task_view._task_collection.find()
            )
        )
        self.assertTrue(
            all(
                task["result"] == task["_id"]
                for task in self.task_view._task_collection.find()
            )
        )

        for exp_id in exp_ids:
            self.assertEqual(
                "COMPLETED", self.experiment_view.get_experiment(exp_id)["status"]
            )
