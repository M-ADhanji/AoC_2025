import TextFileReader from "../../utils/TextFileReader";
import RangeOrganiser from "../RangeOrganiser";
import CountValidIds from "./CountValidIds";

const rangeFileReader = new TextFileReader('day5/ranges.txt');

const ranges = rangeFileReader.splitLines();

const rangeOrganiser = new RangeOrganiser(ranges);
const sortedRanges = rangeOrganiser.sortRangesByStart();
const validIdCounter = new CountValidIds(sortedRanges);

console.log('Total Valid IDs:', validIdCounter.countValidIds());