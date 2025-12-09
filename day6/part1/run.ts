import TextFileReader from "../../utils/textFileReader.ts";

const fileReader = new TextFileReader('day6/input.txt');
const worksheet = fileReader.splitLines();

const firstValue = worksheet[0].trim().split(/\s+/).map(Number);
const secondValue = worksheet[1].trim().split(/\s+/).map(Number);
const thirdValue = worksheet[2].trim().split(/\s+/).map(Number);
const fourthValue = worksheet[3].trim().split(/\s+/).map(Number);
const operator = worksheet[4].trim().split(/\s+/);
function calculateWorksheetTotal(): number {
    let total = 0;
    for (let i = 0; i < firstValue.length; i++) {
      if (operator[i] === '+') {
        total += addValues(i);
      } else if (operator[i] === '*') {
        total += multiplyValues(i);
      }
    }

    return total
}

function addValues(index: number): number {
    return firstValue[index] + secondValue[index] + thirdValue[index] + fourthValue[index];
}

function multiplyValues(index: number): number {
    return firstValue[index] * secondValue[index] * thirdValue[index] * fourthValue[index];
}

console.log('Total value of the worksheet is:', calculateWorksheetTotal());