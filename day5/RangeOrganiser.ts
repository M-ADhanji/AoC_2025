export default class RangeOrganiser {
  ranges: string[];

  constructor(ranges: string[]) {
    this.ranges = ranges;
  }

  public sortRangesByEnd(): string[] {
        return this.ranges.sort((a, b) => {
        const [startA, endA] = a.split('-').map(Number);
        const [startB, endB] = b.split('-').map(Number);

        return endA !== endB ? endA - endB : startA - startB;
    });
  }

  public sortRangesByStart(): string[] {
        return this.ranges.sort((a, b) => {
        const [startA, endA] = a.split('-').map(Number);
        const [startB, endB] = b.split('-').map(Number);

        return endA !== endB ? startA - startB : endA - endB;
    });
  }
}