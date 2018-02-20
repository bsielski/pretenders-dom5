function scaleCost(baseLevel, wantedLevel) {
  return ((wantedLevel - baseLevel) * 40);
}

function heatCost(baseLevel, wantedLevel) {
  const cost = Math.abs(scaleCost(baseLevel, wantedLevel));
  if (cost > 120) {
    return 120;
  }
  return cost;
}

export function scalesCost(nationStartLevels, wantedLevels) {
  return (
      scaleCost(nationStartLevels.order, wantedLevels.order)
    + scaleCost(nationStartLevels.productivity, wantedLevels.productivity)
    + heatCost(nationStartLevels.heat, wantedLevels.heat)
    + scaleCost(nationStartLevels.growth, wantedLevels.growth)
    + scaleCost(nationStartLevels.fortune, wantedLevels.fortune)
    + scaleCost(nationStartLevels.magic, wantedLevels.magic)
  );
}

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

console.log( "Should be 40: " +
  scalesCost( {order: 0, productivity: 0, heat: 1, growth: 0, fortune: 0, magic: 0},
              {order: 0, productivity: 0, heat: 0, growth: 0, fortune: 0, magic: 0}
           )
);
console.log( "Should be 80: " +
  scalesCost( {order: 0, productivity: 0, heat: -1, growth: 0, fortune: 0, magic: 0},
              {order: 0, productivity: 0, heat:  0, growth: 0, fortune: 1, magic: 0}
           )
);
console.log( "Should be 0: " +
  scalesCost( {order: 0, productivity: 0, heat: -1, growth: 0, fortune: 0, magic: 0},
              {order: -2, productivity: 0, heat:  0, growth: 0, fortune: 1, magic: 0}
           )
);
console.log( "Should be -80: " +
  scalesCost( {order:  0, productivity:  0, heat: -1, growth: 0, fortune: 0, magic:  0},
              {order: -2, productivity: -1, heat:  0, growth: 0, fortune: 1, magic: -1}
           )
);
