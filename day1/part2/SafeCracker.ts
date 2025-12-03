type Direction = 'L' | 'R';

interface SafeCrackerConfig {
  rawInstructions: string[];
  initialValue?: number;
  initialZeroCount?: number;
}

interface Instruction {
  direction: Direction;
  amount: number;
}

class SafeCracker {
  private instructions: Instruction[]
  private currentValue: number;
  private zeroCount: number;

  constructor(config: SafeCrackerConfig) {
    this.currentValue = config.initialValue ?? 0;
    this.zeroCount = config.initialZeroCount ?? 0;
    this.instructions = this.parseInstructions(config.rawInstructions);
  }

  private parseInstructions(rawInstructions: string[]): Instruction[] {
    return rawInstructions.map(line => {
      const direction = line[0] as Direction;
      const amount = Number(line.slice(1));

      if (direction !== 'L' && direction !== 'R') {
        throw new Error(`Invalid direction: ${direction}`);
      }
      if (isNaN(amount)) {
        throw new Error(`Invalid amount: ${line.slice(1)}`);
      }

      return { direction, amount };
    })
  }

  private modulo100(value: number): number {
    return ((value % 100) + 100) % 100;
  }

  private trimAndCountFullRotations(amount: number): number {
    const fullRotations = Math.trunc(amount / 100);
    this.zeroCount += fullRotations;
    return this.modulo100(amount);
  }

  private checkAndCountZeros(): void {
    if (this.currentValue === 0 || this.currentValue > 99 || this.currentValue < 0) {
      this.zeroCount += 1;
    }
  }
  
  private increaseValue(amount: number): void {
    const remainingRotation = this.trimAndCountFullRotations(amount);
    this.currentValue += remainingRotation
    this.checkAndCountZeros();
  }

  private decreaseValue(amount: number): void {
    const remainingRotation = this.trimAndCountFullRotations(amount);
    if (this.currentValue === 0) {
      this.currentValue = 100;
    }
    this.currentValue -= remainingRotation
    this.checkAndCountZeros();
  }

  public executeInstructions(): void {
    this.instructions.forEach(instruction => {
      const method = instruction.direction === 'R'
        ? (amount: number) => this.increaseValue(amount)
        : (amount: number) => this.decreaseValue(amount);
      method(instruction.amount);
      this.currentValue = this.modulo100(this.currentValue);
    });
  }

  public getZeroCount(): number {
    return this.zeroCount;
  }
}

export default SafeCracker;