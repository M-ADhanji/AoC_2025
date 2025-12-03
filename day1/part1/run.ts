import readTextFile from "../../utils/readTextFile";
import SafeCracker from "./SafeCracker";

const rawInstructions = readTextFile('day1/input.txt');
const safeCracker = new SafeCracker({ rawInstructions, initialValue: 50 });

safeCracker.executeInstructions();
console.log('Number of 0s hit:', safeCracker.getZeroCount());