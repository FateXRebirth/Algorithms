function walk(current: BinaryNode<number>, needle: number): boolean {
  if(!current) {
    return false
  }

  if(current.value === needle) {
    return true
  }

  if(needle <= current.value) {
    return walk(current.left, needle)
  } else {
    return walk(current.right, needle)
  }
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return walk(head, needle)
}
