type Node<T> = {
	value: T
	prev?: Node<T>
}

export default class Stack<T> {
  public length: number;
  private head: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
  }

  push(item: T): void {
    const node: Node<T> = {
      value: item
    }

    if(!this.head) {
      this.head = node
    } else {
      const head = this.head
      this.head = node
      node.prev = head
    }

    this.length++
  }

  pop(): T | undefined {
    if(this.length - 1 < 0) {
      this.head = undefined
      return
    } else {
      const head = this.head
      this.head = head.prev
      head.prev = undefined
      this.length--
      return head.value
    }
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
