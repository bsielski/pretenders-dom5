function magicPathCost(newPathCost, baseLevel, wantedLevel) {
  if (baseLevel === null || baseLevel === undefined || baseLevel === "") {
    baseLevel = 0;
  }
  if (wantedLevel <= baseLevel) {
    return 0;
  }
  let difference = wantedLevel - baseLevel;
  let cost = 0;
  for (let i = 1; i <= difference; i++) {
    cost = cost + i * 8;
  }
  if (baseLevel === 0) {
    cost = cost - 8 + newPathCost;
  }
  return cost;
}

export function magicCost(pretenderStartLevels, pretenderNewPathCost, wantedLevels) {
  return (
      magicPathCost(pretenderNewPathCost, pretenderStartLevels.f, wantedLevels.f)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.a, wantedLevels.a)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.w, wantedLevels.w)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.e, wantedLevels.e)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.s, wantedLevels.s)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.d, wantedLevels.d)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.n, wantedLevels.n)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.b, wantedLevels.b)
  );
}


// console.log( "Should be 350: " +
//   magicCost( {f: 0, a: 0, w: 0, e: 0, s: 1, d: 0, n: 0, b: 0}, 10,
//              {f: 1, a: 2, w: 0, e: 0, s: 3, d: 8, n: 0, b: 0}
//            )
// );
