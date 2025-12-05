import TextFileReader from "../../utils/TextFileReader";
import JoltCalculator from "./JoltCalculator";

const fileReader = new TextFileReader('day3/input.txt');

const batteryBanks = fileReader.splitLines();
const joltCalculator = new JoltCalculator( batteryBanks );

console.log('Total Joltage:', joltCalculator.calculateTotalJoltage());