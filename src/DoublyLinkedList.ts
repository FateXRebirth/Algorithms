type Node<T> = {
	value: T,
	prev?: Node<T>,
	next?: Node<T>
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head: Node<T>
  private tail: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  prepend(item: T): void {
    const node: Node<T> = {
      value: item
    }

    if(!this.head) {
      this.head = this.tail = node
    } else {
      const head = this.head
      head.prev = node
      node.next = head
      this.head = node
    }

    this.length++
    return
  }

  insertAt(item: T, idx: number): void {
    if(idx === 0) {
      this.prepend(item)
      return
    } else if(idx === this.length) {
      this.append(item)
      return
    } else {
      let current = this.head
      for(let i = 0; current && i < idx; i++) {
        current = current.next
      }
      const node: Node<T> = {
        value: item
      }
      const prev = current.prev
      prev.next = node
      node.prev = prev
      current.prev = node
      node.next = current

      this.length++
      return
    }
  }

  append(item: T): void {
    const node: Node<T> = {
      value: item
    }

    if(!this.tail) {
      this.tail = this.head = node
    } else {
      const tail = this.tail
      node.prev = tail
      tail.next = node
      this.tail = node
    }

    this.length++
    return
  }

  remove(item: T): T | undefined {
    let current = this.head
    for(let i = 0; current && i < this.length; i++) {
      if(current.value === item) break
      current = current.next
    }

    if(!current) {
      return undefined
    }

    const prev = current.prev
    const next = current.next
    current.prev = undefined
    current.next = undefined
    if(prev) {
      prev.next = next
    } else {
      this.head = next
    }
    if(next) {
      next.prev = prev
    } else {
      this.tail = prev
    }
    this.length--
    return current.value
  }

  get(idx: number): T | undefined {
    let current = this.head
    for(let i = 0; current && i < idx; i++) {
      current = current.next
    }
    return current.value
  }

  removeAt(idx: number): T | undefined {
    if(idx === 0) {
      const head = this.head
      const next = head.next
      if(next) {
        next.prev = undefined
      }
      head.next = undefined
      this.head = next
      this.length--
      return head.value
    } else if(idx === this.length) {
      const tail = this.tail
      const prev = tail.prev
      if(prev) {
        prev.next = undefined
      }
      tail.prev = undefined
      this.tail = prev
      this.length--
      return tail.value
    } else {
      let current = this.head
      for(let i = 0; current && i < idx; i++) {
        current = current.next
      }
      const prev = current.prev
      const next = current.next
      current.prev = undefined
      current.next = undefined
      prev.next = next
      next.prev = prev
      this.length--
      return current.value
    }
  }
}
