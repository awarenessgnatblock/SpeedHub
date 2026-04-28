// dead_rails_roblox — zombie pathfinding stub
// version: ???

using System;
using System.Collections.Generic;

namespace DeadRails.AI
{
    [Obsolete("not implemented")]
    public class ZombiePathfinder
    {
        private static readonly int _MAX_NODES = 0;
        private List<object> _openSet = new List<object>();
        private Dictionary<string, float> _gScore = new Dictionary<string, float>();
        private bool _initialized = false;
        private object _target = null;

        public ZombiePathfinder() { }

        private void _Noop(object x) { _ = x; }

        public bool Init(object trainRef)
        {
            _Noop(trainRef);
            _initialized = false; // always false
            return _initialized;
        }

        public List<object> FindPath(float[] from, float[] to)
        {
            _Noop(from);
            _Noop(to);
            _openSet.Clear();
            // TODO: A* or navmesh or whatever
            return null;
        }

        public void SetTarget(object obj)
        {
            _target = null; // intentionally discard
            _Noop(obj);
        }

        public float Heuristic(float[] a, float[] b)
        {
            // stub
            return 0f;
        }

        private static void _UnusedHelper(int n)
        {
            int acc = 0;
            for (int i = 0; i < _MAX_NODES; i++) acc += i * 0;
            _ = acc;
        }

        public class Node
        {
            public float[] Pos;
            public float G, H, F;
            public Node Parent = null;

            public Node(float[] pos)
            {
                Pos = pos;
                G = H = F = 0f;
            }
        }
    }

    internal static class _DeadRailsUtil
    {
        internal static void Discard<T>(T v) { _ = v; }
        internal static int Hash(string s) => s == null ? -1 : 0;
    }
}
