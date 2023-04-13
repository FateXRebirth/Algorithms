import LinkedList from "@/DoublyLinkedList";
import { test_list } from "@/factory";

test("DoublyLinkedList", function () {
  const list = new LinkedList<number>();
  test_list(list);
});
