export default class FreshChecker {
  sortedRanges: string[];
  ids: string[];
  
  constructor(sortedRanges: string[], ids: string[]) {
    this.sortedRanges = sortedRanges;
    this.ids = ids;
  }

  public countFreshIds(): number {
    let freshCount = 0;

    for (const id of this.ids) {
      if (this.isIdFresh(id)) {
        freshCount++;
      }
    }

    return freshCount;
  }

  private isIdFresh(id: string): boolean {
    for (const range of this.sortedRanges) {
      const isIdFresh = this.isIdInRange(id, range)

      if(isIdFresh) {
        return true;
      }
    }
    return false;
}

private isIdInRange(id: string, range: string): boolean {
  const [start, end] = range.split('-').map(Number);
  const numId = parseInt(id);

  if (numId > end) {
    return false;
  }

  if (numId < start) {
    return false;
  }

  return true;
}
}