const initialState = {
    nationId: 0,
    defaultScales: {
        order: 0, productivity: 0, heat: 0,
        growth: 0, fortune: 0, magic: 0,
    },
    scalesCosts: {
        order: 0, productivity: 0, heat: 0,
        growth: 0, fortune: 0, magic: 0
    },
    blessBonus: {
        f: 0, a: 0, w: 0, e: 0,
        s: 0, d: 0, n: 0, b: 0,
    },
    f: 0, a: 0, w: 0, e: 0,
    s: 0, d: 0, n: 0, b: 0,
    dominion: 1,
    scales: {
        order: 0, productivity: 0, heat: 0,
        growth: 0, fortune: 0, magic: 0
    },
    imprisonment: 1,
    pointsForImprisonment: 0,
    isBlessEffectsWindowOpen: false,
};

export default initialState;
