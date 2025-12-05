export default class JoltCalculator {
  private batteryBanks: string[];
  
  constructor(batteryBanks: string[]) {
    this.batteryBanks = batteryBanks;
  }

  public calculateTotalJoltage(): number {
  return this.batteryBanks.reduce((total, bank) => {
    return total + this.calculateMaxJoltage(bank);
  }, 0);
  }

  private calculateMaxJoltage(batteryBank: string): number {
    const numberOfDigits = 12;

    let maxJoltage = '';
    let startPosition = 0;

    for (let i = 0; i < numberOfDigits; i++) {
      const remainingDigitsNeeded = numberOfDigits - i - 1;
      const restrictedSection = batteryBank.length - remainingDigitsNeeded;

      const {digit, position} = this.findMaxDigitInRange(batteryBank, startPosition, restrictedSection);

      maxJoltage += digit;
      startPosition = position + 1;
    }

    return parseInt(maxJoltage);
  }

  private findMaxDigitInRange(batteryBank: string, start: number, end: number): {digit: string, position: number} {
    let maxDigit = '0';
    let maxDigitPosition = start;

    for (let j = start; j < end; j++) {
      if (batteryBank[j] > maxDigit) {
        maxDigit = batteryBank[j];
        maxDigitPosition = j;
      }
      if (maxDigit === '9') {
        break;
      }
    }
    return {digit: maxDigit, position: maxDigitPosition};
  }
}
