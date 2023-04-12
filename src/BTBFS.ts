export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue: BinaryNode<number>[] = []

  queue.push(head)

  while(queue.length !== 0) {
    const current = queue.shift()

    if(current) {
      if(current.value === needle) {
        return true
      }

      queue.push(current.left)
      queue.push(current.right)
    }
  }

  return false
}
