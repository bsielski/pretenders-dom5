import React from 'react';
import NationInfo from './NationInfo';
import ResetAllButton from './ResetAllButton';

import styles from './Nation.module.scss';

function Nation(props) {
    const {
        blessBonus, defaultScales,
        nations, nationId, changeNation,
        resetAllPoints
    } = props;

    const handleSelection = (event) => {
        changeNation(event.target.value);
    }

    const nationOptions = Object.keys(nations).map(nId => {
	return (
	    <option
              key={nId}
              value={nId}
              className={styles["option_era_" + nations[nId].era]}
              >
	      {nations[nId].era} {nations[nId].name}: {nations[nId].epithet}
	    </option>
	);
    });

    return (
	<div className={styles.container}>
	  <div className={styles.body}>
	    <select
	      name="nationId" value={nationId}
	      onChange={handleSelection}
	      id="nation-picker__select"
	      >
	      {nationOptions}
	    </select>
	    <ResetAllButton
              resetAllPoints={resetAllPoints}
              />
	  </div>
	  < NationInfo
            blessBonus={blessBonus}
            defaultScales={defaultScales}
            />
	</div>
    );
}

export default Nation;
