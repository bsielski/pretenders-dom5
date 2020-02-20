import React from 'react';
import NationInfo from './NationInfo';
import ResetAllButton from './ResetAllButton';
import { path } from 'ramda';

import styles from './Nation.module.scss';

function Nation(props) {
    const { resetNation, changeOption, nations, nationId } = props;
    const handleResetAll = (e) => {
	resetNation(e);
    }
    const handleSelection = (e) => {
	changeOption(e);
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
	      onClick={handleResetAll}
	      />
	  </div>
	  < NationInfo
	    f={path(['bless_bonus', 'f'], nations[nationId])}
	    a={path(['bless_bonus', 'a'], nations[nationId])}
	    w={path(['bless_bonus', 'w'], nations[nationId])}
	    e={path(['bless_bonus', 'e'], nations[nationId])}
	    s={path(['bless_bonus', 's'], nations[nationId])}
	    d={path(['bless_bonus', 'd'], nations[nationId])}
	    n={path(['bless_bonus', 'n'], nations[nationId])}
	    b={path(['bless_bonus', 'b'], nations[nationId])}
	    heat={path(['scales', 'heat'], nations[nationId])}
	    growth={path(['scales', 'growth'], nations[nationId])}
	    />
	</div>
    );
}

export default Nation;
