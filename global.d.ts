declare interface List<T> {
    get length(): number;
    removeAt(index: number): T | undefined;
    remove(item: T): T | undefined;
    get(index: number): T | undefined;
    prepend(item: T): void;
    append(item: T): void;
    insertAt(item: T, idx: number): void;
}

declare type Point = {
    x: number;
    y: number;
}

declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
}

declare type WeightedAdjacencyMatrix = number[][]
