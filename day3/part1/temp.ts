  private findLargest10sJoltage(batteryBank: string): firstJoltage {
    let highestJoltage = 0;
    let position = -1;

    for (let i = 0; i < batteryBank.length - 1; i++) {
      const currentJoltage = parseInt(batteryBank[i]);
      if (currentJoltage > highestJoltage) {
        highestJoltage = currentJoltage;
        position = i;
      }
    }

    return {joltage: highestJoltage, poistion: position}
  }

  private calculate1sJoltage(batteryBank: string, position: number): number {
    let highestJoltage = 0;

    //DHANJI this is going from current forwards, need to go from last character backwards to a max of the position given
    for (let i = position + 1; i < batteryBank.length; i++) {
      const currentJoltage = parseInt(batteryBank[i]);
      if (currentJoltage > highestJoltage) {
        highestJoltage = currentJoltage;
      }
    }

    return highestJoltage;
  }