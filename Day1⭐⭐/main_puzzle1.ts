import { sumFile } from "./lib.ts";
import {parseFile} from "./utils/parseFile.ts";

const main = async () => {
    const path = './data'
    const parsedFile = await parseFile(path);
    return sumFile(parsedFile);
}

const result = await main();

console.log(result);