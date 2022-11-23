import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";
import { main } from "../../main_puzzle2.ts";

Deno.test("should find the first repeated sequence", async () => {
  // given
  const fileData = [+1, -2, +3, +1];
  const expectedSequence = 2;

  // when
  const result = main(fileData);

  // then
  assertEquals(result, expectedSequence);
});
