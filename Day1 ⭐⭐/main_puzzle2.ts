import { parseFile } from "./utils/parseFile.ts";

export const main = (data: number[]): number => {
  const frequencies: number[] = [];
  let currentFrequency = 0;
  let index = 0;
  let counter = 0;
  while (true) {
    const frequency = data[index];
    currentFrequency += frequency;
    if (frequencies.indexOf(currentFrequency) !== -1) {
      break;
    }
    frequencies.push(currentFrequency);
    if (index === data.length - 1) {
      index = 0;
    } else {
      index++;
    }
    counter++;
  }
  return currentFrequency;
};

const path = "./data";
const data = await parseFile(import.meta.url, path);

console.log(main(data));
