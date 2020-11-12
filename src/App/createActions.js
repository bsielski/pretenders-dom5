import actionType from './actionType';

function createActions(dispatch) {
    return {
        changeNation: (id)  => {
            dispatch({type: actionType.CHANGE_NATION, payload: {id}});
        },
        resetAllPoints: ()   => {
            dispatch({type: actionType.RESET_ALL_POINTS});
        },
        changeFire: (level) => {
            dispatch({type: actionType.CHANGE_FIRE, payload: {level}});
        },
        changeAir: (level) => {
            dispatch({type: actionType.CHANGE_AIR, payload: {level}});
        },
        changeWater: (level) => {
            dispatch({type: actionType.CHANGE_WATER, payload: {level}});
        },
        changeEarth: (level) => {
            dispatch({type: actionType.CHANGE_EARTH, payload: {level}});
        },
        changeAstral: (level) => {
            dispatch({type: actionType.CHANGE_ASTRAL, payload: {level}});
        },
        changeDeath: (level) => {
            dispatch({type: actionType.CHANGE_DEATH, payload: {level}});
        },
        changeNature: (level) => {
            dispatch({type: actionType.CHANGE_NATURE, payload: {level}});
        },
        changeBlood: (level) => {
            dispatch({type: actionType.CHANGE_BLOOD, payload: {level}});
        },
        resetMagicPoints: ()  => {
            dispatch({type: actionType.RESET_MAGIC_POINTS});
        },

        changeDominion: (level) => {
            dispatch({type: actionType.CHANGE_DOMINION, payload: {level}});
        },
        changeOrder: (level) => {
            dispatch({type: actionType.CHANGE_ORDER, payload: {level}});
        },
        increaseOrder: (level) => {
            dispatch({type: actionType.INCREASE_ORDER});
        },
        decreaseOrder: (level) => {
            dispatch({type: actionType.DECREASE_ORDER});
        },
        changeProductivity: (level) => {
            dispatch({type: actionType.CHANGE_PRODUCTIVITY, payload: {level}});
        },
        increaseProductivity: (level) => {
            dispatch({type: actionType.INCREASE_PRODUCTIVITY});
        },
        decreaseProductivity: (level) => {
            dispatch({type: actionType.DECREASE_PRODUCTIVITY});
        },
        changeHeat: (level) => {
            dispatch({type: actionType.CHANGE_HEAT, payload: {level}});
        },
        increaseHeat: (level) => {
            dispatch({type: actionType.INCREASE_HEAT});
        },
        decreaseHeat: (level) => {
            dispatch({type: actionType.DECREASE_HEAT});
        },
        changeGrowth: (level) => {
            dispatch({type: actionType.CHANGE_GROWTH, payload: {level}});
        },
        increaseGrowth: (level) => {
            dispatch({type: actionType.INCREASE_GROWTH});
        },
        decreaseGrowth: (level) => {
            dispatch({type: actionType.DECREASE_GROWTH});
        },
        changeFortune: (level) => {
            dispatch({type: actionType.CHANGE_FORTUNE, payload: {level}});
        },
        increaseFortune: (level) => {
            dispatch({type: actionType.INCREASE_FORTUNE});
        },
        decreaseFortune: (level) => {
            dispatch({type: actionType.DECREASE_FORTUNE});
        },
        changeMagic: (level) => {
            dispatch({type: actionType.CHANGE_MAGIC, payload: {level}});
        },
        increaseMagic: (level) => {
            dispatch({type: actionType.INCREASE_MAGIC});
        },
        decreaseMagic: (level) => {
            dispatch({type: actionType.DECREASE_MAGIC});
        },
        resetScalesPoints: ()  => {
            dispatch({type: actionType.RESET_SCALES_POINTS});
        },

        changeImprisonment: (level) => {
            dispatch({type: actionType.CHANGE_IMPRISONMENT, payload: {level}});
        },

        toggleImmobiles: () => {
            dispatch({type: actionType.TOGGLE_IMMOBILES});
        },
        toggleTitans: () => {
            dispatch({type: actionType.TOGGLE_TITANS});
        },
        toggleMonsters: () => {
            dispatch({type: actionType.TOGGLE_MONSTERS});
        },
        toggleHumanoids: () => {
            dispatch({type: actionType.TOGGLE_HUMANOIDS});
        },

        showBlessList: ()   => {
            dispatch({type: actionType.SHOW_BLESS_LIST});
        },
        closeBlessList: ()   => {
            dispatch({type: actionType.CLOSE_BLESS_LIST});
        },
    }
}

export default createActions;
