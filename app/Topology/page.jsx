"use client"

import { ReactFlow, Background, Controls, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState, useEffect, useCallback } from 'react';

export default function Page() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // ------------------ FETCH NODES & EDGES ------------------
  useEffect(() => {
    async function getDevices() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Topology`, {
        cache: "no-store",
      });
      const Components = await res.json();

      // Création des nodes
      const Nodes = Components.Devices.map((device, index) => ({
        id: device.id,
        position: {
          x: (index % 4) * 220,
          y: Math.floor(index / 4) * 150,
        },
        data: { label: device.label },
      }));
      setNodes(Nodes);

      // Création des edges avec poids
      const Edges = Components.Links.map((link) => ({
        id: `${link.source}-${link.target}`,
        source: String(link.source),
        target: String(link.target),
        weight: (0.8 / Number(link.bw)) + (0.2 * Number(link.lt)),
        animated: false,
        style: { stroke: "#999" },
      }));
      setEdges(Edges);
    }

    getDevices();
  }, []);

  // ------------------ BUILD GRAPH POUR DIJKSTRA ------------------
  function buildGraph(nodes, edges) {
    const graph = {};
    nodes.forEach((node) => { graph[node.id] = []; });

    edges.forEach((edge) => {
      const weight = edge.weight || 1;
      if (!graph[edge.source] || !graph[edge.target]) return;

      // bidirectional
      graph[edge.source].push({ node: edge.target, weight });
      graph[edge.target].push({ node: edge.source, weight });
    });
    return graph;
  }

  function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const previous = {};

    Object.keys(graph).forEach((node) => {
      distances[node] = Infinity;
      visited[node] = false;
      previous[node] = null;
    });

    distances[start] = 0;

    for (let i = 0; i < Object.keys(graph).length; i++) {
      let u = null;
      Object.keys(graph).forEach((node) => {
        if (!visited[node] && (u === null || distances[node] < distances[u])) {
          u = node;
        }
      });

      if (u === null || distances[u] === Infinity) break;
      visited[u] = true;

      graph[u].forEach((neighbor) => {
        const alt = distances[u] + neighbor.weight;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          previous[neighbor.node] = u;
        }
      });
    }

    return { distances, previous };
  }

  function getPath(previous, target) {
    const path = [];
    let current = target;
    while (current) {
      path.unshift(current);
      current = previous[current];
    }
    return path;
  }

  function highlightPath(path, edges) {
    return edges.map((edge) => {
      const isInPath = path.some((node, i) =>
        path[i + 1] &&
        ((edge.source === node && edge.target === path[i + 1]) ||
         (edge.source === path[i + 1] && edge.target === node))
      );
      if (isInPath) {
        return { ...edge, style: { stroke: "red", strokeWidth: 4 }, animated: true };
      }
      return { ...edge, style: { stroke: "#999" }, animated: false };
    });
  }

  // ------------------ HANDLE BUTTON ------------------
  const handleShortestPath = () => {
    if (nodes.length === 0 || edges.length === 0) return;

    const graph = buildGraph(nodes, edges);

    // ⚠️ Remplace "A" et "F" par les IDs réels de ton topology
    const sourceId = nodes[0].id; // premier node
    const targetId = nodes[nodes.length - 1].id; // dernier node

    const { distances, previous } = dijkstra(graph, sourceId);
    const path = getPath(previous, targetId);

    console.log("Shortest distance:", distances[targetId]);
    console.log("Path:", path);

    setEdges((prevEdges) => highlightPath(path, prevEdges));
  };

  // ------------------ CALLBACK REACT FLOW ------------------
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // ------------------ JSX ------------------
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div className='w-full flex justify-end p-2'>
        <button
          onClick={handleShortestPath}
          className='bg-black text-white px-4 py-2 rounded '
        >
          Apply SDN
        </button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls showInteractive={false} showZoom={false} />
      </ReactFlow>
    </div>
  );
}