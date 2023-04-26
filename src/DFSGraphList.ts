function walk(graph: WeightedAdjacencyList, current: number, needle: number, seen: boolean[], path: number[]): boolean {
  if(current === needle) {
    path.push(current)
    return true
  }

  if(seen[current]) {
    return false
  }

  seen[current] = true

  path.push(current)

  const adjacencies = graph[current]
  for(let i = 0; i < adjacencies.length; i++) {
    const edge = adjacencies[i]
    if(walk(graph, edge.to, needle, seen, path)) {
      return true
    }
  }

  path.pop()

  return false
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false)
  const path: number[] = []

  walk(graph, source, needle, seen, path)

  if(path.length === 0) {
    return null
  }

  return path
}
