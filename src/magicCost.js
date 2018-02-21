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
      magicPathCost(pretenderNewPathCost, pretenderStartLevels.F, wantedLevels.f)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.A, wantedLevels.a)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.W, wantedLevels.w)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.E, wantedLevels.e)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.S, wantedLevels.s)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.D, wantedLevels.d)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.N, wantedLevels.n)
    + magicPathCost(pretenderNewPathCost, pretenderStartLevels.B, wantedLevels.b)
  );
}


// console.log( "Should be 350: " +
//   magicCost( {F: 0, A: 0, W: 0, E: 0, S: 1, D: 0, N: 0, B: 0}, 10,
//              {F: 1, A: 2, W: 0, E: 0, S: 3, D: 8, N: 0, B: 0}
//            )
// );
