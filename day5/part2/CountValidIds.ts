export default class CountValidIds {
  sortedRanges: string[];

  constructor(sortedRanges: string[]) {
    this.sortedRanges = sortedRanges;
  }

  public countValidIds(): number {
    return this.findUnion().reduce((total, [start, end]) => total + (end - start + 1), 0);
  }

  private findUnion(): number[][] {
    const union: number[][] = [];
    let [currentStart, currentEnd] = this.sortedRanges[0].split('-').map(Number);

    for (let i = 1; i < this.sortedRanges.length; i++) {
      const [start, end] = this.sortedRanges[i].split('-').map(Number);

      if (start <= currentEnd + 1) {
        currentEnd = Math.max(currentEnd, end);
      } else {
        union.push([currentStart, currentEnd]);
        currentStart = start;
        currentEnd = end;
      }
    }
    union.push([currentStart, currentEnd]);
    return union;
  }
}