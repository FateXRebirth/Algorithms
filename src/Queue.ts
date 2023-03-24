type Node<T> = {
	value: T
	next?: Node<T>
}

export default class Queue<T> {
  public length: number;
  private head: Node<T>
  private tail: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  enqueue(item: T): void {
    const node: Node<T> = {
      value: item
    }

    if(!this.tail) {
      this.head = this.tail = node
    } else {
      const tail = this.tail
      this.tail = node
      tail.next = node
    }

    this.length++
  }

  deque(): T | undefined {
    if(!this.head) {
      this.tail = undefined
      return
    }

    const head = this.head
    this.head = this.head.next
    head.next = undefined
    this.length--

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
