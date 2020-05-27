import imprisonmentPointsPerLevel from './imprisonmentPointsPerLevel';
import scaleCost from './scaleCost';
import heatCost from './heatCost';
import getUpdatedScalesCosts from './getUpdatedScalesCosts';
import getDefaultScales from './getDefaultScales';
import getBlessBonus from './getBlessBonus';
import actionType from './actionType';

function reducer(state, action) {
    switch (action.type) {
    case actionType.CHANGE_NATION:
        let id = action.payload.id;
        let defaultScales = getDefaultScales(id);
        return {
            ...state,
            nationId: id,
            defaultScales,
            blessBonus: getBlessBonus(id),
            scalesCosts: getUpdatedScalesCosts(defaultScales, state.scales)
        };
    case actionType.RESET_ALL_POINTS:
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
    case actionType.CHANGE_FIRE:
        return { ...state, f: action.payload.level };
    case actionType.CHANGE_AIR:
        return { ...state, a: action.payload.level };
    case actionType.CHANGE_WATER:
        return { ...state, w: action.payload.level };
    case actionType.CHANGE_EARTH:
        return { ...state, e: action.payload.level };
    case actionType.CHANGE_ASTRAL:
        return { ...state, s: action.payload.level };
    case actionType.CHANGE_DEATH:
        return { ...state, d: action.payload.level };
    case actionType.CHANGE_NATURE:
        return { ...state, n: action.payload.level };
    case actionType.CHANGE_BLOOD:
        return { ...state, b: action.payload.level };
    case actionType.RESET_MAGIC_POINTS:
        return {
            ...state,
            f: 0, a: 0, w: 0, e: 0,
            s: 0, d: 0, n: 0, b: 0,
        };
    case actionType.CHANGE_DOMINION:
        return { ...state,
                 dominion: action.payload.level
               };
    case actionType.CHANGE_ORDER:
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
    case actionType.CHANGE_PRODUCTIVITY:
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
    case actionType.CHANGE_HEAT:
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
    case actionType.CHANGE_GROWTH:
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
    case actionType.CHANGE_FORTUNE:
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
    case actionType.CHANGE_MAGIC:
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
    case actionType.RESET_SCALES_POINTS:
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
    case actionType.CHANGE_IMPRISONMENT:
        const level = action.payload.level;
        return {
            ...state,
            imprisonment: parseInt(level, 10),
            pointsForImprisonment: imprisonmentPointsPerLevel[level],
        };

    case actionType.TOGGLE_IMMOBILES:
        return {
            ...state,
            chassis: {
                ...state.chassis,
                4: !state.chassis[4],
            },
        };
    case actionType.TOGGLE_TITANS:
        return {
            ...state,
            chassis: {
                ...state.chassis,
                3: !state.chassis[3],
            },
        };
    case actionType.TOGGLE_MONSTERS:
        return {
            ...state,
            chassis: {
                ...state.chassis,
                2: !state.chassis[2],
            },
        };
    case actionType.TOGGLE_HUMANOIDS:
        return {
            ...state,
            chassis: {
                ...state.chassis,
                1: !state.chassis[1],
            },
        };

    case actionType.SHOW_BLESS_LIST:
        return {
            ...state,
            isBlessEffectsWindowOpen: true
        };

    case actionType.CLOSE_BLESS_LIST:
        return {
            ...state,
            isBlessEffectsWindowOpen: false
        };
    default:
        return state;
    }
}

export default reducer;
