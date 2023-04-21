export function test_list(list: List<number>): void {
  list.append(5);
  list.append(7);
  list.append(9);

  expect(list.get(2)).toEqual(9);
  expect(list.removeAt(1)).toEqual(7);
  expect(list.length).toEqual(2);

  list.append(11);
  expect(list.removeAt(1)).toEqual(9);
  expect(list.remove(9)).toEqual(undefined);
  expect(list.removeAt(0)).toEqual(5);
  expect(list.removeAt(0)).toEqual(11);
  expect(list.length).toEqual(0);

  list.prepend(5);
  list.prepend(7);
  list.prepend(9);

  expect(list.get(2)).toEqual(5);
  expect(list.get(0)).toEqual(9);
  expect(list.remove(9)).toEqual(9);
  expect(list.length).toEqual(2);
  expect(list.get(0)).toEqual(7);
}

export const tree: BinaryNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: {
      value: 100,
      right: null,
      left: null,
    },
    left: {
      value: 30,
      right: {
        value: 45,
        right: null,
        left: null,
      },
      left: {
        value: 29,
        right: null,
        left: null,
      }
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: null,
        left: null,
      },
      left: null,
    }
  }
};

export const tree2: BinaryNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: null,
    left: {
      value: 30,
      right: {
        value: 45,
        right: {
          value: 49,
          left: null,
          right: null,
        },
        left: null,
      },
      left: {
        value: 29,
        right: null,
        left: {
          value: 21,
          right: null,
          left: null,
        },
      }
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: null,
        left: null,
      },
      left: null,
    }
  }
};

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
export const matrix2: WeightedAdjacencyMatrix = [
  [0, 3, 1,  0, 0, 0, 0],
  [0, 0, 0,  0, 1, 0, 0],
  [0, 0, 0,  7, 0, 0, 0],
  [0, 0, 0,  0, 0, 0, 0],
  [0, 1, 0,  5, 0, 2, 0],
  [0, 0, 18, 0, 0, 0, 1],
  [0, 0, 0,  1, 0, 0, 0],
];
