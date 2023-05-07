function hasUnvisitedEdge(seen: boolean[]): boolean {
  return seen.some(seen => !seen)
}

function getShortestUnvisitedEdge(seen: boolean[], distances: number[]): number {
  let idx = -1
  let shortestDistance = Infinity
  for(let i = 0; i < seen.length; i++) {
    if(seen[i]) {
      continue
    }

    if(distances[i] < Infinity && distances[i] < shortestDistance) {
      shortestDistance = distances[i]
      idx = i
    }
  }

  return idx
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
  const seen: boolean[] = new Array(arr.length).fill(false)
  const prev: number[] = new Array(arr.length).fill(-1)
  const distances: number[] = new Array(arr.length).fill(Infinity)

  distances[source] = 0

  while(hasUnvisitedEdge(seen)) {
    const edge = getShortestUnvisitedEdge(seen, distances)
    const adjacencies = arr[edge]
    seen[edge] = true

    for(let i = 0; i < adjacencies.length; i++) {
      const node = adjacencies[i]

      if(seen[node.to]) {
        continue
      }

      const distance = distances[edge] + node.weight

      if(distance < distances[node.to]) {
        distances[node.to] = distance
        prev[node.to] = edge
      }
    }
  }

  const path: number[] = []
  let current = sink

  while(prev[current] !== -1) {
    path.push(current)
    current = prev[current]
  }

  path.push(source)

  return path.reverse()
}
