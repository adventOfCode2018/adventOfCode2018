import { fromFileUrl, join } from "https://deno.land/std@0.116.0/path/mod.ts";

export const parseFile = async (path: string): Promise<number[]> => {
  console.log("👏", join(fromFileUrl(import.meta.url), path));

  const file = await Deno.readTextFile(
    join(fromFileUrl(import.meta.url), "..", path)
  );
  const result = file.split("\n");
  return result.map(Number);
};
