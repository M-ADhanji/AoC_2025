import TextFileReader from "../../utils/TextFileReader";
import IdChecker from "./IdChecker";

const fileReader = new TextFileReader('day2/input.txt');
const idChecker = new IdChecker(fileReader.splitByComma());

console.log('Sum of Invalid IDs:', idChecker.calculateSumOfInvalidIds());

