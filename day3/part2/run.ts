import readTextFile from "../../utils/readTextFile";
import JoltCalculator from "./joltCalculator";

const batteryBanks = readTextFile('day3/input.txt');
const joltCalculator = new JoltCalculator( batteryBanks );

console.log('Total Joltage:', joltCalculator.calculateTotalJoltage());