const directions = [
  [1, 0],
  [0, 1],
  [-1,0],
  [0,-1],
]

function walk(maze: string[], wall: string, current: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  if(maze[current.y][current.x] === wall) {
    return false
  }

  if(current.x < 0 || current.x >= maze[0].length || current.y < 0 || current.y >= maze.length) {
    return false
  }

  if(seen[current.y][current.x]) {
    return false
  }

  if(current.x === end.x && current.y === end.y) {
    path.push(end)
    return true
  }

  seen[current.y][current.x] = true

  path.push(current)

  for(let i = 0; i < directions.length; i++) {
    const [x, y] = directions[i]
    const next: Point = {
      x: current.x + x,
      y: current.y + y,
    }
    if(walk(maze, wall, next, end, seen, path)) {
      return true
    }
  }

  path.pop()

  return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = []
  const path: Point[] = []

  for(let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[i].length).fill(false))
  }

  walk(maze, wall, start, end, seen, path)

  return path
}
