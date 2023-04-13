import bfs from "@/BTBFS";
import { tree } from "@/factory";

test("bt bfs", function () {
  expect(bfs(tree, 45)).toEqual(true);
  expect(bfs(tree, 7)).toEqual(true);
  expect(bfs(tree, 69)).toEqual(false);
});
