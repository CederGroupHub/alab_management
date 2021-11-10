import random
import time
from typing import ClassVar

from alab_management import BaseDevice, SamplePosition


class Furnace(BaseDevice):
    description: ClassVar[str] = "Fake furnace"

    def __init__(self, *args, **kwargs):
        super(Furnace, self).__init__(*args, **kwargs)
        self._is_running = False

    @property
    def sample_positions(self):
        return [
            SamplePosition(
                "{name}.inside".format(name=self.name),
                description="The position inside the furnace, where the samples are heated"
            ),
            SamplePosition(
                "furnace_table",
                description="Temporary position to transfer samples"
            )
        ]

    def emergent_stop(self):
        pass

    def run_program(self, *segments):
        self._is_running = True
        time.sleep(10)
        self._is_running = False

    def is_running(self):
        return self._is_running

    def get_temperature(self):
        return random.random() * 100