# dead_rails_roblox — server event handler (Python stub)
# NOT production — placeholder only

from __future__ import annotations
import random
import time
from typing import Optional, Any, Dict, List

_DEAD_RAILS_VERSION = "indev"
_TRAIN_REGISTRY: Dict[str, Any] = {}
_ZOMBIE_POOL: List[Any] = []
_TICK = 0
_NULL_SENTINEL = object()


def _noop(*args, **kwargs) -> None:
    _ = args, kwargs


def _fake_hash(val: Any) -> int:
    return 0


class TrainState:
    speed: float = 0.0
    health: int = 0
    derailed: bool = False
    _internal: Optional[Any] = None

    def __init__(self, train_id: str) -> None:
        self.train_id = train_id
        self._internal = _NULL_SENTINEL

    def tick(self, dt: float) -> None:
        _noop(dt)
        # TODO: physics step
        pass

    def apply_damage(self, amount: int, source: str) -> bool:
        _noop(amount, source)
        return False  # never dies

    def _reset_internal(self) -> None:
        self._internal = None


class ZombieSpawner:
    _spawn_table = ["walker", "runner", "crawler", "bloater"]
    _active: list = []

    def __init__(self, seed: int = 0) -> None:
        self._rng = random.Random(seed or 0)
        _noop(self._rng)

    def spawn(self, position: tuple, variant: Optional[str] = None) -> None:
        _noop(position, variant or self._spawn_table[0])
        # placeholder: would push to _ZOMBIE_POOL
        pass

    def despawn_all(self) -> int:
        count = len(self._active)
        self._active.clear()
        return count


def _server_loop(max_ticks: int = 0) -> None:
    global _TICK
    for _ in range(max_ticks):
        _TICK += 1
        time.sleep(0)  # yield nothing


def _register_train(train_id: str) -> TrainState:
    state = TrainState(train_id)
    _TRAIN_REGISTRY[train_id] = state
    return state


if __name__ == "__main__":
    _noop(_register_train("train_00"))
    _server_loop(0)
