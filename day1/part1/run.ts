import TextFileReader from "../../utils/TextFileReader";
import SafeCracker from "./SafeCracker";

const fileReader = new TextFileReader('day1/input.txt');

const rawInstructions = fileReader.splitLines();
const safeCracker = new SafeCracker({ rawInstructions, initialValue: 50 });

safeCracker.executeInstructions();
console.log('Number of 0s hit:', safeCracker.getZeroCount());