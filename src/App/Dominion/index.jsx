import React from 'react';
import NationScalesInfo from './NationScalesInfo';
import ScalesPicker from './ScalesPicker';
import ResetScalesButton from './ResetScalesButton';

import styles from './Dominion.module.scss';

function Dominion(props) {
    const {
        resetScalesPoints,
        changeDominion,
        changeOrder,
        increaseOrder,
        decreaseOrder,
        changeProductivity,
        increaseProductivity,
        decreaseProductivity,
        changeHeat,
        increaseHeat,
        decreaseHeat,
        changeGrowth,
        increaseGrowth,
        decreaseGrowth,
        changeFortune,
        increaseFortune,
        decreaseFortune,
        changeMagic,
        increaseMagic,
        decreaseMagic,
        defaultScales,
        dominion,
        scales,
    } = props;

    return (
	      <div className={styles.container}>
	        <NationScalesInfo
	          defaultScales={defaultScales}
	        />
	        < ScalesPicker
            changeDominion={changeDominion}
            changeOrder={changeOrder}
            increasechangeOrder={increaseOrder}
            decreasechangeOrder={decreaseOrder}
            changeProductivity={changeProductivity}
            increaseProductivity={increaseProductivity}
            decreaseProductivity={decreaseProductivity}
            changeHeat={changeHeat}
            increaseHeat={increaseHeat}
            decreaseHeat={decreaseHeat}
            changeGrowth={changeGrowth}
            increaseGrowth={increaseGrowth}
            dcereaseGrowth={decreaseGrowth}
            changeFortune={changeFortune}
            increaseFortune={increaseFortune}
            decreaseFortune={decreaseFortune}
            changeMagic={changeMagic}
            increaseMagic={increaseMagic}
            decreaseMagic={decreaseMagic}
            dominion={dominion}
	          scales={scales}
	        />
 	        <ResetScalesButton
            resetScalesPoints={resetScalesPoints}
	        />
	      </div>
    );
}

export default Dominion;
