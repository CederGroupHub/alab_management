from bson import ObjectId

from alab_management.task_view.task import BaseTask


class Ending(BaseTask):
    def __init__(self, sample: ObjectId, *args, **kwargs):
        super(Ending, self).__init__(*args, **kwargs)
        self.sample = sample

    def run(self):
        self.lab_view.move_sample(self.sample, None)
        return self.task_id
