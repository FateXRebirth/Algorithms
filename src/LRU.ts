type Node<V> = {
	value: V,
	next?: Node<V>,
	prev?: Node<V>,
}

export default class LRU<K, V> {
  private length: number;
  private capacity: number
  private head: Node<V>
  private tail: Node<V>
  private lookup: Map<K, Node<V>>
  private oppositeLookup: Map<Node<V>, K>

  constructor(capacity = 10) {
    this.length = 0
    this.capacity = capacity
    this.head = undefined
    this.tail = undefined
    this.lookup = new Map<K, Node<V>>()
    this.oppositeLookup = new Map<Node<V>, K>()
  }

  update(key: K, value: V): void {
    let node = this.lookup.get(key)
    if(!node) {
      node = this.createNode(key, value)
      this.prepend(node)
      this.trimCache()
    } else {
      node.value = value
      this.detach(node)
      this.prepend(node)
    }
  }

  get(key: K): V | undefined {
    const node = this.lookup.get(key)

    if(!node) {
      return undefined
    }

    this.detach(node)
    this.prepend(node)

    return node.value
  }

  private createNode(key: K, value: V): Node<V> {
    const node = { value }
    this.lookup.set(key, node)
    this.oppositeLookup.set(node, key)
    this.length++
    return node
  }

  private detach(node: Node<V>): void {
    if(node.prev) {
      node.prev.next = node.next
    }

    if(node.next) {
      node.next.prev = node.prev
    }

    if(node === this.head) {
      this.head = this.head.next
    }

    if(node === this.tail) {
      this.tail = this.tail.prev
    }

    node.prev = undefined
    node.next = undefined
  }

  private prepend(node: Node<V>): void {
    const head = this.head

    if(!head) {
      this.head = this.tail = node
      return
    }

    head.prev = node
    node.next = head
    this.head = node
  }

  private trimCache(): void {
    if(this.length <= this.capacity) {
      return
    }

    const tail = this.tail
    this.detach(tail)
    const key = this.oppositeLookup.get(tail)
    this.lookup.delete(key)
    this.oppositeLookup.delete(tail)
    this.length--
  }
}
