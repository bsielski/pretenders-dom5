function createActions(dispatch) {
    return {
        changeNation: (id)  => {
            dispatch({type: 'CHANGE_NATION', payload: {id}});
        },
        resetAllPoints: ()   => {
            dispatch({type: 'RESET_ALL_POINTS'});
        },
        changeFire: (level) => {
            dispatch({type: 'CHANGE_FIRE', payload: {level}});
        },
        changeAir: (level) => {
            dispatch({type: 'CHANGE_AIR', payload: {level}});
        },
        changeWater: (level) => {
            dispatch({type: 'CHANGE_WATER', payload: {level}});
        },
        changeEarth: (level) => {
            dispatch({type: 'CHANGE_EARTH', payload: {level}});
        },
        changeAstral: (level) => {
            dispatch({type: 'CHANGE_ASTRAL', payload: {level}});
        },
        changeDeath: (level) => {
            dispatch({type: 'CHANGE_DEATH', payload: {level}});
        },
        changeNature: (level) => {
            dispatch({type: 'CHANGE_NATURE', payload: {level}});
        },
        changeBlood: (level) => {
            dispatch({type: 'CHANGE_BLOOD', payload: {level}});
        },
        resetMagicPoints: ()  => {
            dispatch({type: 'RESET_MAGIC_POINTS'});
        },

        changeDominion: (level) => {
            dispatch({type: 'CHANGE_DOMINION', payload: {level}});
        },
        changeOrder: (level) => {
            dispatch({type: 'CHANGE_ORDER', payload: {level}});
        },
        changeProductivity: (level) => {
            dispatch({type: 'CHANGE_PRODUCTIVITY', payload: {level}});
        },
        changeHeat: (level) => {
            dispatch({type: 'CHANGE_HEAT', payload: {level}});
        },
        changeGrowth: (level) => {
            dispatch({type: 'CHANGE_GROWTH', payload: {level}});
        },
        changeFortune: (level) => {
            dispatch({type: 'CHANGE_FORTUNE', payload: {level}});
        },
        changeMagic: (level) => {
            dispatch({type: 'CHANGE_MAGIC', payload: {level}});
        },
        resetScalesPoints: ()  => {
            dispatch({type: 'RESET_SCALES_POINTS'});
        },

        changeImprisonment: (level) => {
            dispatch({type: 'CHANGE_IMPRISONMENT', payload: {level}});
        },
        showBlessList: ()   => {
            dispatch({type: 'SHOW_BLESS_LIST'});
        },
        closeBlessList: ()   => {
            dispatch({type: 'CLOSE_BLESS_LIST'});
        },
    }
}

export default createActions;
