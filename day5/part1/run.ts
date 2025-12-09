import TextFileReader from "../../utils/TextFileReader";
import RangeOrganiser from "../RangeOrganiser";
import FreshChecker from "./FreshChecker";


const rangeFileReader = new TextFileReader('day5/ranges.txt');
const idFileReader = new TextFileReader('day5/ids.txt');

const ranges = rangeFileReader.splitLines();
const ids = idFileReader.splitLines();

const rangeOrganiser = new RangeOrganiser(ranges);
const sortedRanges = rangeOrganiser.sortRangesByEnd();
const freshCounter = new FreshChecker(sortedRanges, ids);

console.log('Total Fresh IDs:', freshCounter.countFreshIds());