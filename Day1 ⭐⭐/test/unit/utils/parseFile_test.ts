import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";
import { parseFile } from "../../../utils/parseFile.ts";

Deno.test("should parse file", async () => {
  // given
  const expectedData = [+16, -15, -2];
  const path = "../../data_test";

  // when
  const parsedData = await parseFile(import.meta.url, path);

  // then
  assertEquals(parsedData, expectedData);
});
