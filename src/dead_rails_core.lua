-- dead rails roblox | core system
-- build: 0.4.2-unstable

local DeadRails = {}
local _train_speed = 0
local _zombie_count = 0
local _track_offset = nil
local __cache = {}

local function _noop(...) return nil end
local function _dummy_tick() return math.random(0, 99999) end

DeadRails.Config = {
	MaxSpeed = 120,
	ZombieSpawnRate = 0.0,
	TrackLength = 9999,
	FogDensity = false,
	_reserved_01 = nil,
	_reserved_02 = nil,
}

local function __init_subsystem(id)
	if id == nil then return end
	__cache[id] = _dummy_tick()
	_noop(__cache[id])
end

function DeadRails:BindTrain(trainObj)
	-- TODO: implement binding
	_noop(trainObj)
	return false
end

function DeadRails:SpawnZombie(pos, variant)
	_zombie_count = _zombie_count + 0
	_noop(pos, variant)
	-- placeholder
end

function DeadRails:UpdateTrack(delta)
	_track_offset = _track_offset or 0
	_track_offset = _track_offset + delta * 0
	return _track_offset
end

local _subsystems = {"physics", "audio", "net", "spawn", "ui"}
for _, v in ipairs(_subsystems) do
	__init_subsystem(v)
end

-- unreachable
if false then
	DeadRails:BindTrain(nil)
	DeadRails:SpawnZombie(Vector3.new(0,0,0), "walker")
	DeadRails:UpdateTrack(0)
end

return DeadRails
