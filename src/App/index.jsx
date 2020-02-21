import React from 'react';
import Layout from './Layout';
import Nation from './Nation';
import Magic from './Magic';
import Dominion from './Dominion';
import Imprisonment from './Imprisonment';
import BlessEffects from './BlessEffects';
import Pretenders from './Pretenders';
import Footer from './Footer';
import DebugBar from './DebugBar';

import { reducer, initialState } from './reducer';

import './App.module.scss';

function App(props) {
    const { nations, pretenders, version } = props;

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const changeNation = (id) => {
        dispatch({type: 'CHANGE_NATION', payload: {id}});
    };
    const resetAllPoints = () => {
        dispatch({type: 'RESET_ALL_POINTS'});
    };
    const changeFire = (level) => {
        dispatch({type: 'CHANGE_FIRE', payload: {level}});
    };
    const changeAir = (level) => {
        dispatch({type: 'CHANGE_AIR', payload: {level}});
    };
    const changeWater = (level) => {
        dispatch({type: 'CHANGE_WATER', payload: {level}});
    };
    const changeEarth = (level) => {
        dispatch({type: 'CHANGE_EARTH', payload: {level}});
    };
    const changeAstral = (level) => {
        dispatch({type: 'CHANGE_ASTRAL', payload: {level}});
    };
    const changeDeath = (level) => {
        dispatch({type: 'CHANGE_DEATH', payload: {level}});
    };
    const changeNature = (level) => {
        dispatch({type: 'CHANGE_NATURE', payload: {level}});
    };
    const changeBlood = (level) => {
        dispatch({type: 'CHANGE_BLOOD', payload: {level}});
    };
    const resetMagicPoints = () => {
        dispatch({type: 'RESET_MAGIC_POINTS'});
    };

    const changeDominion = (level) => {
        dispatch({type: 'CHANGE_DOMINION', payload: {level}});
    };
    const changeOrder = (level) => {
        dispatch({type: 'CHANGE_ORDER', payload: {level}});
    };
    const changeProductivity = (level) => {
        dispatch({type: 'CHANGE_PRODUCTIVITY', payload: {level}});
    };
    const changeHeat = (level) => {
        dispatch({type: 'CHANGE_HEAT', payload: {level}});
    };
    const changeGrowth = (level) => {
        dispatch({type: 'CHANGE_GROWTH', payload: {level}});
    };
    const changeFortune = (level) => {
        dispatch({type: 'CHANGE_FORTUNE', payload: {level}});
    };
    const changeMagic = (level) => {
        dispatch({type: 'CHANGE_MAGIC', payload: {level}});
    };
    const resetScalesPoints = () => {
        dispatch({type: 'RESET_SCALES_POINTS'});
    };

    const changeImprisonment = (level) => {
        dispatch({type: 'CHANGE_IMPRISONMENT', payload: {level}});
    };
    const showBlessList = () => {
        dispatch({type: 'SHOW_BLESS_LIST'});
    };
    const closeBlessList = () => {
        dispatch({type: 'CLOSE_BLESS_LIST'});
    };

    const { nationId,
            blessBonus, defaultScales,
            f, a, w, e, s, d, n, b,
            dominion,
            scales,
            scalesCosts,
            imprisonment, pointsForImprisonment,
            isBlessEffectsWindowOpen
          } = state;

    const nationComponent = (<Nation
                    changeNation={changeNation}
                    resetAllPoints={resetAllPoints}
                    nations={nations}
                    blessBonus={blessBonus}
                    defaultScales={defaultScales}
                    />);
    const magicComponent = (<Magic
                   resetMagicPoints={resetMagicPoints}
                   f={f} changeFire={changeFire}
                   a={a} changeAir={changeAir}
                   w={w} changeWater={changeWater}
                   e={e} changeEarth={changeEarth}
                   s={s} changeAstral={changeAstral}
                   d={d} changeDeath={changeDeath}
                   n={n} changeNature={changeNature}
                   b={b} changeBlood={changeBlood}
                   />);
    const dominionComponent = (<Dominion
                      resetScalesPoints={resetScalesPoints}
                      defaultScales={defaultScales}
                      changeDominion={changeDominion}
                      changeOrder={changeOrder}
                      changeProductivity={changeProductivity}
                      changeHeat={changeHeat}
                      changeGrowth={changeGrowth}
                      changeFortune={changeFortune}
                      changeMagic={changeMagic}
                      dominion={dominion}
	              scales={scales}
                      />);
    const imprisonmentComponent = (<Imprisonment
                                   changeImprisonment={changeImprisonment}
                                   imprisonment={imprisonment}
                                   />);

    const blessEffectsComponent = (<BlessEffects
                                   showBlessList={showBlessList}
                                   closeBlessList={closeBlessList}
                                   blessBonus={blessBonus}
                                   isBlessEffectsWindowOpen={isBlessEffectsWindowOpen}
                                   f={f} a={a} w={w} e={e}
                                   s={s} d={d} n={n} b={b}

                                   />);

    
    const pretendersComponent = (<Pretenders
                                 f={f} a={a} w={w} e={e}
                                 s={s} d={d} n={n} b={b}
                                 nations={nations}
                                 nationId={nationId}
                                 dominion={dominion}
                                 pretenders={pretenders}
                                 pointsForImprisonment={pointsForImprisonment}
                                 imprisonment={imprisonment}
                                 scalesCosts={scalesCosts}
                                 />);

    const footerComponent = (<Footer
                             version={version}
                             />);
    const debugBarComponent = (<DebugBar
                               pointsForImprisonment={pointsForImprisonment}
                               scalesCosts={scalesCosts}
                               isBlessEffectsWindowOpen={isBlessEffectsWindowOpen}
                               />);

    return (
        <Layout
	  nation = {nationComponent}
          magic = {magicComponent}
          dominion = {dominionComponent}
          imprisonment = {imprisonmentComponent}
          blessEffects = {blessEffectsComponent}
          pretenders = {pretendersComponent}
          footer = {footerComponent}
          debugBar = {debugBarComponent}
          />
    );
}

export default App;
