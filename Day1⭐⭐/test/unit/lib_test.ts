import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";
import { sumFile } from "../../lib.ts";

Deno.test("should sum numbers", () => {
  // given
  const fileData = [+1, +1, +1];

  // when
  const result = sumFile(fileData);

  // then
  assertEquals(result, 3);
});