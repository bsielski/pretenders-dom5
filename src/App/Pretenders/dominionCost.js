export function dominionCost(baseLevel, wantedLevel) {
    if (baseLevel === null || baseLevel === undefined || baseLevel === "") {
      baseLevel = 1;
    }
    if (wantedLevel <= baseLevel) {
      return 0;
    }
    let difference = wantedLevel - baseLevel;
    let cost = 0;
    for (let i = 1; i <= difference; i++) {
      cost = cost + i * 7;
    }
    return cost;
}

// console.log( "Should be 315: " +
//   dominionCost(1, 10)
// );
// console.log( "Should be 70: " +
//   dominionCost(3, 7)
// );
