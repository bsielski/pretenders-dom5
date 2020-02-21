import getNations from '../nations';
import { defaultTo } from 'ramda';
import imprisonmentPointsPerLevel from './imprisonmentPointsPerLevel';

const scaleCost = (defaultLevel, level) => {
  return ((level - defaultLevel) * 40);
};

const heatCost = (defaultLevel, level) => {
  const cost = Math.abs(scaleCost(defaultLevel, level));
  if (cost > 120) {
    return -120;
  }
  return -cost;
};

const getUpdatedScalesCost = (defaultScales, scales) => {
    return {
        order: scaleCost(
            defaultScales.order,
            scales.order
        ),
        productivity: scaleCost(
            defaultScales.productivity,
            scales.productivity
        ),
        heat: heatCost(
            defaultScales.heat,
            scales.heat
        ),
        growth: scaleCost(
            defaultScales.growth,
            scales.growth
        ),
        fortune: scaleCost(
            defaultScales.fortune,
            scales.fortune
        ),
        magic: scaleCost(
            defaultScales.magic,
            scales.magic
        )
    };
};

const getDefaultScales = (nationId) => {
    const scales = defaultTo(
        {},
        getNations()[nationId].scales
    );
    const order = defaultTo(0, scales.order);
    const productivity = defaultTo(0, scales.productivity);
    const heat = defaultTo(0, scales.heat);
    const growth = defaultTo(0, scales.growth);
    const fortune = defaultTo(0, scales.fortune);
    const magic = defaultTo(0, scales.magic);
    return {
        order, productivity, heat,
        growth, fortune, magic
    };
};

const getBlessBonus = (nationId) => {
    const bonus = defaultTo(
        {},
        getNations()[nationId].bless_bonus
    );
    const f = defaultTo(0, bonus.f);
    const a = defaultTo(0, bonus.a);
    const w = defaultTo(0, bonus.w);
    const e = defaultTo(0, bonus.e);
    const s = defaultTo(0, bonus.s);
    const d = defaultTo(0, bonus.d);
    const n = defaultTo(0, bonus.n);
    const b = defaultTo(0, bonus.b);
    return { f, a, w, e, s, d, n, b };
};

const CHANGE_NATION = "CHANGE_NATION";
const RESET_ALL_POINTS = "RESET_ALL_POINTS";

const CHANGE_FIRE = "CHANGE_FIRE";
const CHANGE_AIR = "CHANGE_AIR";
const CHANGE_WATER = "CHANGE_WATER";
const CHANGE_EARTH = "CHANGE_EARTH";
const CHANGE_ASTRAL = "CHANGE_ASTRAL";
const CHANGE_DEATH = "CHANGE_DEATH";
const CHANGE_NATURE = "CHANGE_NATURE";
const CHANGE_BLOOD = "CHANGE_BLOOD";
const RESET_MAGIC_POINTS = "RESET_MAGIC_POINTS";

const CHANGE_DOMINION = "CHANGE_DOMINION";
const CHANGE_ORDER = "CHANGE_ORDER";
const CHANGE_PRODUCTIVITY = "CHANGE_PRODUCTIVITY";
const CHANGE_HEAT = "CHANGE_HEAT";
const CHANGE_GROWTH = "CHANGE_GROWTH";
const CHANGE_FORTUNE = "CHANGE_FORTUNE";
const CHANGE_MAGIC = "CHANGE_MAGIC";
const RESET_SCALES_POINTS = "RESET_SCALES_POINTS";

const CHANGE_IMPRISONMENT = "CHANGE_IMPRISONMENT";

const SHOW_BLESS_LIST = "SHOW_BLESS_LIST";
const CLOSE_BLESS_LIST = "CLOSE_BLESS_LIST";

export const initialState = {
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

export function reducer(state, action) {
    switch (action.type) {
    case CHANGE_NATION:
        let id = action.payload.id;
        let defaultScales = getDefaultScales(id);
        return {
            ...state,
            nationId: id,
            defaultScales,
            blessBonus: getBlessBonus(id),
            scalesCosts: getUpdatedScalesCost(defaultScales, state.scales)
        };
    case RESET_ALL_POINTS:
        return {
            ...state,
            scalesCosts: {
                order: 0, productivity: 0, heat: 0,
                growth: 0, fortune: 0, magic: 0
            },
            scales: getDefaultScales(state.nationId),            
            defaultScales: getDefaultScales(state.nationId),
            f: 0, a: 0, w: 0, e: 0,
            s: 0, d: 0, n: 0, b: 0,
            dominion: 1,
            ...getDefaultScales(state.nationId),
            imprisonment: 1,
            pointsForImprisonment: imprisonmentPointsPerLevel[1],
        };
    case CHANGE_FIRE:
        return { ...state, f: action.payload.level };
    case CHANGE_AIR:
        return { ...state, a: action.payload.level };
    case CHANGE_WATER:
        return { ...state, w: action.payload.level };
    case CHANGE_EARTH:
        return { ...state, e: action.payload.level };
    case CHANGE_ASTRAL:
        return { ...state, s: action.payload.level };
    case CHANGE_DEATH:
        return { ...state, d: action.payload.level };
    case CHANGE_NATURE:
        return { ...state, n: action.payload.level };
    case CHANGE_BLOOD:
        return { ...state, b: action.payload.level };
    case RESET_MAGIC_POINTS:
        return {
            ...state,
            f: 0, a: 0, w: 0, e: 0,
            s: 0, d: 0, n: 0, b: 0,
        };
    case CHANGE_DOMINION:
        return { ...state,
                 dominion: action.payload.level
               };
    case CHANGE_ORDER:
        return {
            ...state,
            scalesCosts: {
                ...state.scalesCosts,
                order: scaleCost(state.defaultScales.order, action.payload.level)
            },
            scales: {
                ...state.scales,
                order: action.payload.level
            }
        };
    case CHANGE_PRODUCTIVITY:
        return {
            ...state,
            scalesCosts: {
                ...state.scalesCosts,
                productivity: scaleCost(state.defaultScales.productivity, action.payload.level)
            },
            scales: {
                ...state.scales,
                productivity: action.payload.level
            }
        };
    case CHANGE_HEAT:
        return {
            ...state,
            scalesCosts: {
                ...state.scalesCosts,
                heat: heatCost(state.defaultScales.heat, action.payload.level)
            },
            scales: {
                ...state.scales,
                heat: action.payload.level
            }
        };
    case CHANGE_GROWTH:
        return {
            ...state,
            scalesCosts: {
                ...state.scalesCosts,
                growth: scaleCost(state.defaultScales.growth, action.payload.level)
            },
            scales: {
                ...state.scales,
                growth: action.payload.level
            }
        };
    case CHANGE_FORTUNE:
        return {
            ...state,
            scalesCosts: {
                ...state.scalesCosts,
                fortune: scaleCost(state.defaultScales.fortune, action.payload.level)
            },
            scales: {
                ...state.scales,
                fortune: action.payload.level
            }
        };
    case CHANGE_MAGIC:
        return {
            ...state,
            scalesCosts: {
                ...state.scalesCosts,
                magic: scaleCost(state.defaultScales.magic, action.payload.level)
            },
            scales: {
                ...state.scales,
                magic: action.payload.level
            }
        };
    case RESET_SCALES_POINTS:
        return {
            ...state,
            scalesCosts: {
                order: 0, productivity: 0, heat: 0,
                growth: 0, fortune: 0, magic: 0
            },
            scales: getDefaultScales(state.nationId),
            defaultScales: getDefaultScales(state.nationId),
            dominion: 1,
            ...getDefaultScales(state.nationId),
        };
    case CHANGE_IMPRISONMENT:
        const level = action.payload.level;
        return {
            ...state,
            imprisonment: parseInt(level, 10),
            pointsForImprisonment: imprisonmentPointsPerLevel[level],
        };
    case SHOW_BLESS_LIST:
        return {
            ...state,
            isBlessEffectsWindowOpen: true
        };
    case CLOSE_BLESS_LIST:
        return {
            ...state,
            isBlessEffectsWindowOpen: false
        };
    default:
        return initialState;
    }
}
