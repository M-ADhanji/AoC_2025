
export default class IdChecker {
  private idRanges: string[];
  
  constructor(idRanges: string[]) {
    this.idRanges = idRanges;
  }

  public calculateSumOfInvalidIds(): number {
    const parsedRanges = this.parseIdRange();
    return parsedRanges.reduce((total, range) => {
      return total + this.findAndSumInvalidIds(range.startId, range.endId);
    }, 0);
  }

  private parseIdRange(): { startId: number; endId: number }[] {
    return this.idRanges.map(range => {
      const [start, end] = range.split('-');
      return { startId: parseInt(start), endId: parseInt(end) };
    })
  }

  private findAndSumInvalidIds(startId: number, endId: number): number {
    let invalidIdSum = 0;

    for (let id = startId; id <= endId; id++) {
      const stringId = id.toString();
      if (this.isInvalidId(stringId)) {
        invalidIdSum += id;
      }
  }

  return invalidIdSum;
}

  private isInvalidId(stringId: string): boolean {
    return  /^(.+)\1+$/.test(stringId)
  }
}