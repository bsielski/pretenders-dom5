export function totalBlessPoints(currentPaths, blessBonuses) {
  function calculateElemental(path, bonus, currentPaths) {
    if ((path >= 4) || (currentPaths.f >= 3 && currentPaths.a >=3 && currentPaths.w >= 3 && currentPaths.e >= 3)) {
      return path + bonus;
    }
    else {
      return 0;
    }
  }
  function calculateSorcery(path, bonus, currentPaths) {
    if ((path >= 4) || (currentPaths.s >= 3 && currentPaths.d >=3 && currentPaths.n >= 3 && currentPaths.b >= 3)) {
      return path + bonus;
    }
    else {
      return 0;
    }
  }
  return {
    f: calculateElemental(currentPaths.f, blessBonuses.f, currentPaths),
    a: calculateElemental(currentPaths.a, blessBonuses.a, currentPaths),
    w: calculateElemental(currentPaths.w, blessBonuses.w, currentPaths),
    e: calculateElemental(currentPaths.e, blessBonuses.e, currentPaths),
    s: calculateSorcery(currentPaths.s, blessBonuses.s, currentPaths),
    d: calculateSorcery(currentPaths.d, blessBonuses.d, currentPaths),
    n: calculateSorcery(currentPaths.n, blessBonuses.n, currentPaths),
    b: calculateSorcery(currentPaths.b, blessBonuses.b, currentPaths),
  };
};


// console.log( "Should be 80: " +
//   scaleCost(0, 2)
// );
// console.log( "Should be -120: " +
//   scaleCost(0, -3)
// );
// console.log( "Should be 120: " +
//   scaleCost(-3, 0)
// );
// console.log( "Should be 240: " +
//   scaleCost(-3, 3)
// );
// console.log( "Should be 120: " +
//   heatCost(0, -3)
// );
// console.log( "Should be 120: " +
//   heatCost(0, 3)
// );
// console.log( "Should be 120: " +
//   heatCost(3, -3)
// );
// console.log( "Should be 120: " +
//   heatCost(-3, 3)
// );
// console.log( "Should be 120: " +
//   heatCost(-1, 3)
// );
// console.log( "Should be 80: " +
//   heatCost(1, -1)
// );
// console.log( "Should be 80: " +
//   heatCost(-1, 1)
// );

// console.log( "Should be 40: " +
//   scalesCost( {order: 0, productivity: 0, heat: 1, growth: 0, fortune: 0, magic: 0},
//               {order: 0, productivity: 0, heat: 0, growth: 0, fortune: 0, magic: 0}
//            )
// );
// console.log( "Should be 80: " +
//   scalesCost( {order: 0, productivity: 0, heat: -1, growth: 0, fortune: 0, magic: 0},
//               {order: 0, productivity: 0, heat:  0, growth: 0, fortune: 1, magic: 0}
//            )
// );
// console.log( "Should be 0: " +
//   scalesCost( {order: 0, productivity: 0, heat: -1, growth: 0, fortune: 0, magic: 0},
//               {order: -2, productivity: 0, heat:  0, growth: 0, fortune: 1, magic: 0}
//            )
// );
// console.log( "Should be -80: " +
//   scalesCost( {order:  0, productivity:  0, heat: -1, growth: 0, fortune: 0, magic:  0},
//               {order: -2, productivity: -1, heat:  0, growth: 0, fortune: 1, magic: -1}
//            )
// );
