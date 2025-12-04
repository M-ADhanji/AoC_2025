type firstJoltage = {
  joltage: number;
  poistion: number;
}

interface BatteryBankAnalysis {
  length: number;
  digits: {
    [key: number]: number[];
  }
}

export default class JoltCalculator {
  private batteryBanks: string[];
  
  constructor(batteryBanks: string[]) {
    this.batteryBanks = batteryBanks;
  }

  public calculateTotalJoltage(): number {
  return this.batteryBanks.reduce((total, bank) => {
    const bankAnalysis = this.analyzeBatteryBank(bank);
    return total + this.calculateMaxJoltage(bankAnalysis);
  }, 0);
  }

  private analyzeBatteryBank(bank: string): BatteryBankAnalysis {
    const digits = bank.split('').reduce((accumulator, number, index) => {
      const digit = parseInt(number);
      accumulator[digit] = accumulator[digit] ? [...accumulator[digit], index] : [index];
      return accumulator;
    }, {} as BatteryBankAnalysis['digits']);

    return {
      length: bank.length,
      digits,
    };
  }

  private calculateMaxJoltage(bankAnalysis: BatteryBankAnalysis): number {
    const sortedDigits = Object.keys(bankAnalysis.digits).map(Number).sort((a, b) => b - a);

    const highestDigit = sortedDigits[0];
    const highestIndexes = bankAnalysis.digits[highestDigit];

    if (highestIndexes.length >= 2) {
      return highestDigit * 10 + highestDigit;
    }

    const firstHighestIndex = highestIndexes[0];
    if (firstHighestIndex === bankAnalysis.length - 1) {
      const secondHighestDigit = sortedDigits[1];
      return secondHighestDigit * 10 + highestDigit;
    }

    const nextBiggestDigit = this.findBiggestDigitAfterHighest(firstHighestIndex, sortedDigits, bankAnalysis);
    return highestDigit * 10 + nextBiggestDigit;
  }

  private findBiggestDigitAfterHighest(
    firstHighestIndex: number,
    sortedDigits: number[],
    bankAnalysis: BatteryBankAnalysis): number{
      let nextBiggestDigit = -1;
      for (let i = 1; i < sortedDigits.length; i++) {
        const nextDigit = sortedDigits[i];
        const nextIndexes = bankAnalysis.digits[nextDigit];

        const latestIndex = nextIndexes[nextIndexes.length - 1];
        if (latestIndex > firstHighestIndex) {
          nextBiggestDigit = nextDigit;
          break;
      }
    }
    return nextBiggestDigit
  }

}
