export default class MinHeap {
  public length: number;
  private heap: number[];

  constructor() {
    this.length = 0
    this.heap = []
  }

  insert(value: number): void {
    this.heap[this.length] = value
    this.heapifyUp(this.length)
    this.length++
  }

  delete(): number {
    if(this.length === 0) {
      return -1
    }

    const value = this.heap[0]
    this.length--

    if(this.length === 0) {
      this.heap = []
      return value
    }

    this.heap[0] = this.heap[this.length]
    this.heapifyDown(0)
    return value
  }

  private heapifyUp(idx: number): void {
    if(idx === 0) {
      return
    }

    const parentIndex = this.parent(idx)
    const parentValue = this.heap[parentIndex]
    const value = this.heap[idx]

    if(parentValue > value) {
      this.heap[parentIndex] = value
      this.heap[idx] = parentValue
      this.heapifyUp(parentIndex)
    }
  }

  private heapifyDown(idx: number): void {
    const leftIndex = this.leftChild(idx)
    const rightIndex = this.rightChild(idx)

    if(idx >= this.length || leftIndex >= this.length) {
      return
    }

    const leftValue = this.heap[leftIndex]
    const rightValue = this.heap[rightIndex]
    const value = this.heap[idx]

    if(value > leftValue && rightValue > leftValue) {
      this.heap[leftIndex] = value
      this.heap[idx] = leftValue
      this.heapifyDown(leftIndex)
    } else if(value > rightValue && leftValue > rightValue) {
      this.heap[rightIndex] = value
      this.heap[idx] = rightValue
      this.heapifyDown(rightIndex)
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  private leftChild(idx: number): number {
    return (idx * 2) + 1
  }

  private rightChild(idx: number): number {
    return (idx * 2) + 2
  }
}
