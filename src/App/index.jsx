import React from 'react';
import Layout from './Layout';
import Nation from './Nation';
import Magic from './Magic';
import Dominion from './Dominion';
import Imprisonment from './Imprisonment';
import Chassis from './Chassis';
import BlessEffects from './BlessEffects';
import Pretenders from './Pretenders';
import Footer from './Footer';
import DebugBar from './DebugBar';

import initialState from './initialState';
import reducer from './reducer';
import createActions from './createActions';
import './App.module.scss';

function App(props) {
    const { nations, pretenders, version } = props;

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const action = createActions(dispatch);

    const nationComponent = (<Nation
                             changeNation={action.changeNation}
                             resetAllPoints={action.resetAllPoints}
                             nations={nations}
                             blessBonus={state.blessBonus}
                             defaultScales={state.defaultScales}
                             />);
    const magicComponent = (<Magic
                            resetMagicPoints={action.resetMagicPoints}
                            f={state.f} changeFire={action.changeFire}
                            a={state.a} changeAir={action.changeAir}
                            w={state.w} changeWater={action.changeWater}
                            e={state.e} changeEarth={action.changeEarth}
                            s={state.s} changeAstral={action.changeAstral}
                            d={state.d} changeDeath={action.changeDeath}
                            n={state.n} changeNature={action.changeNature}
                            b={state.b} changeBlood={action.changeBlood}
                            />);
    const dominionComponent = (<Dominion
                               resetScalesPoints={action.resetScalesPoints}
                               defaultScales={state.defaultScales}
                               changeDominion={action.changeDominion}
                               changeOrder={action.changeOrder}
                               changeProductivity={action.changeProductivity}
                               changeHeat={action.changeHeat}
                               changeGrowth={action.changeGrowth}
                               changeFortune={action.changeFortune}
                               changeMagic={action.changeMagic}
                               dominion={state.dominion}
	                       scales={state.scales}
                               />);
    const imprisonmentComponent = (<Imprisonment
                                   changeImprisonment={action.changeImprisonment}
                                   imprisonment={state.imprisonment}
                                   />);
    const chassisComponent = (<Chassis
                                   toggleImmobiles={action.toggleImmobiles}
                                   toggleTitans={action.toggleTitans}
                                   toggleMonsters={action.toggleMonsters}
                                   toggleHumanoids={action.toggleHumanoids}
                                   chassis={state.chassis}
                              />);
    const blessEffectsComponent = (<BlessEffects
                                   showBlessList={action.showBlessList}
                                   closeBlessList={action.closeBlessList}
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
                                 chassis={state.chassis}
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
          chassis = {chassisComponent}
          blessEffects = {blessEffectsComponent}
          pretenders = {pretendersComponent}
          footer = {footerComponent}
          debugBar = {debugBarComponent}
          />
    );
}

export default App;
