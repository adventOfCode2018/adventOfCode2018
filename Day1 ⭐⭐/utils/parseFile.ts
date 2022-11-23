import { fromFileUrl, join } from "https://deno.land/std@0.116.0/path/mod.ts";

export const parseFile = async (
  aboslutePath: string,
  relativePath: string
): Promise<number[]> => {
  const file = await Deno.readTextFile(
    join(fromFileUrl(aboslutePath), "..", relativePath)
  );
  const result = file.split("\n");
  return result.map(Number);
};
