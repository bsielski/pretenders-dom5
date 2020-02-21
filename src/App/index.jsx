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

import initialState from './initialState';
import reducer from './reducer';

import './App.module.scss';

function App(props) {
    const { nations, pretenders, version } = props;

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const changeNation   = (id)    => { dispatch({type: 'CHANGE_NATION', payload: {id}}) };
    const resetAllPoints = ()      => { dispatch({type: 'RESET_ALL_POINTS'}) };
    const changeFire     = (level) => { dispatch({type: 'CHANGE_FIRE', payload: {level}}) };
    const changeAir      = (level) => { dispatch({type: 'CHANGE_AIR', payload: {level}}) };
    const changeWater    = (level) => { dispatch({type: 'CHANGE_WATER', payload: {level}}) };
    const changeEarth    = (level) => { dispatch({type: 'CHANGE_EARTH', payload: {level}}) };
    const changeAstral   = (level) => { dispatch({type: 'CHANGE_ASTRAL', payload: {level}}) };
    const changeDeath    = (level) => { dispatch({type: 'CHANGE_DEATH', payload: {level}}) };
    const changeNature   = (level) => { dispatch({type: 'CHANGE_NATURE', payload: {level}}) };
    const changeBlood    = (level) => { dispatch({type: 'CHANGE_BLOOD', payload: {level}}) };
    const resetMagicPoints = ()    => { dispatch({type: 'RESET_MAGIC_POINTS'}) };

    const changeDominion = (level) => { dispatch({type: 'CHANGE_DOMINION', payload: {level}}) };
    const changeOrder    = (level) => { dispatch({type: 'CHANGE_ORDER', payload: {level}}) };
    const changeProductivity = (level) => { dispatch({type: 'CHANGE_PRODUCTIVITY', payload: {level}}) };
    const changeHeat     = (level) => { dispatch({type: 'CHANGE_HEAT', payload: {level}}) };
    const changeGrowth   = (level) => { dispatch({type: 'CHANGE_GROWTH', payload: {level}}) };
    const changeFortune  = (level) => { dispatch({type: 'CHANGE_FORTUNE', payload: {level}}) };
    const changeMagic    = (level) => { dispatch({type: 'CHANGE_MAGIC', payload: {level}}) };
    const resetScalesPoints = ()   => { dispatch({type: 'RESET_SCALES_POINTS'}) };

    const changeImprisonment = (level) => { dispatch({type: 'CHANGE_IMPRISONMENT', payload: {level}}) };
    const showBlessList      = ()      => { dispatch({type: 'SHOW_BLESS_LIST'}) };
    const closeBlessList     = ()      => { dispatch({type: 'CLOSE_BLESS_LIST'}) };

    const nationComponent = (<Nation
                    changeNation={changeNation}
                    resetAllPoints={resetAllPoints}
                    nations={nations}
                    blessBonus={state.blessBonus}
                    defaultScales={state.defaultScales}
                    />);
    const magicComponent = (<Magic
                   resetMagicPoints={resetMagicPoints}
                   f={state.f} changeFire={changeFire}
                   a={state.a} changeAir={changeAir}
                   w={state.w} changeWater={changeWater}
                   e={state.e} changeEarth={changeEarth}
                   s={state.s} changeAstral={changeAstral}
                   d={state.d} changeDeath={changeDeath}
                   n={state.n} changeNature={changeNature}
                   b={state.b} changeBlood={changeBlood}
                   />);
    const dominionComponent = (<Dominion
                      resetScalesPoints={resetScalesPoints}
                      defaultScales={state.defaultScales}
                      changeDominion={changeDominion}
                      changeOrder={changeOrder}
                      changeProductivity={changeProductivity}
                      changeHeat={changeHeat}
                      changeGrowth={changeGrowth}
                      changeFortune={changeFortune}
                      changeMagic={changeMagic}
                      dominion={state.dominion}
	              scales={state.scales}
                      />);
    const imprisonmentComponent = (<Imprisonment
                                   changeImprisonment={changeImprisonment}
                                   imprisonment={state.imprisonment}
                                   />);
    const blessEffectsComponent = (<BlessEffects
                                   showBlessList={showBlessList}
                                   closeBlessList={closeBlessList}
                                   blessBonus={state.blessBonus}
                                   isBlessEffectsWindowOpen={state.isBlessEffectsWindowOpen}
                                   f={state.f} a={state.a} w={state.w} e={state.e}
                                   s={state.s} d={state.d} n={state.n} b={state.b}
                                   />);
    const pretendersComponent = (<Pretenders
                                 f={state.f} a={state.a} w={state.w} e={state.e}
                                 s={state.s} d={state.d} n={state.n} b={state.b}
                                 nations={nations}
                                 nationId={state.nationId}
                                 dominion={state.dominion}
                                 pretenders={pretenders}
                                 pointsForImprisonment={state.pointsForImprisonment}
                                 imprisonment={state.imprisonment}
                                 scalesCosts={state.scalesCosts}
                                 />);
    const footerComponent = (<Footer
                             version={version}
                             />);
    const debugBarComponent = (<DebugBar
                               pointsForImprisonment={state.pointsForImprisonment}
                               scalesCosts={state.scalesCosts}
                               isBlessEffectsWindowOpen={state.isBlessEffectsWindowOpen}
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
