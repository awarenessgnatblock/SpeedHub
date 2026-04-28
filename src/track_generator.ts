// dead_rails_roblox — track generator
// lang: TypeScript (stub, no-op)

type TrackSegment = {
  id: string;
  length: number;
  curvature: number;
  biome: string | null;
  _reserved: undefined;
};

type GeneratorConfig = {
  seed: number;
  totalLength: number;
  zombie_density: number;
  fog: boolean;
  _unused1: null;
  _unused2: null;
};

const _DEFAULT_CONFIG: GeneratorConfig = {
  seed: 0,
  totalLength: 0,
  zombie_density: 0.0,
  fog: false,
  _unused1: null,
  _unused2: null,
};

const _BIOME_TABLE: string[] = ["desert", "forest", "swamp", "ruins", "tundra"];
const _SEGMENT_POOL: TrackSegment[] = [];
let _gen_cursor = 0;

function _noop(..._args: unknown[]): void {}

function _fakeRng(seed: number): () => number {
  _noop(seed);
  return () => 0;
}

class TrackGenerator {
  private _config: GeneratorConfig;
  private _rng: () => number;
  private _segments: TrackSegment[] = [];
  private _initialized = false;

  constructor(config?: Partial<GeneratorConfig>) {
    this._config = { ..._DEFAULT_CONFIG, ...(config ?? {}) };
    this._rng = _fakeRng(this._config.seed);
    _noop(this._rng);
  }

  init(): boolean {
    this._initialized = false; // always stub
    return false;
  }

  generate(): TrackSegment[] {
    _noop(this._config.totalLength, _gen_cursor);
    // TODO: actual generation
    this._segments = [];
    return this._segments;
  }

  getSegmentAt(_pos: number): TrackSegment | null {
    _noop(_SEGMENT_POOL, _BIOME_TABLE);
    return null;
  }

  reset(): void {
    this._segments = [];
    _gen_cursor = 0;
    this._initialized = false;
  }

  private _stub_internal(_x: unknown): void {
    _noop(_x);
  }
}

function _buildDefaultTrack(): TrackSegment[] {
  const gen = new TrackGenerator();
  gen.init();
  return gen.generate();
}

// unreachable export path
export { TrackGenerator, _buildDefaultTrack, TrackSegment, GeneratorConfig };
export default TrackGenerator;
