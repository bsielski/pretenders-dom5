import React from 'react';
import NationBlessBonusInfo from './NationBlessBonusInfo';
import BlessEffectsWindow from './BlessEffectsWindow';
import BlessEffectsRows from './BlessEffectsRows';

import {totalBlessPoints} from './blessPoints';

import {filterBlessEffects} from './filterBlessEffects';
import {getBlessEffects} from './getBlessEffects';

import styles from './BlessEffects.module.scss';

function BlessEffects(props) {
    const {
        blessBonus,
        showBlessList, closeBlessList,
        isBlessEffectsWindowOpen,
        f,a,w,e,s,d,n,b,
    } = props;
    const path = {f,a,w,e,s,d,n,b}
    const blessPoints = totalBlessPoints(path, blessBonus);
    const blessEffects = getBlessEffects();

    return(
	<div className={styles.container}>
	  <BlessEffectsWindow
	    isOpen={isBlessEffectsWindowOpen}
	    onClose={closeBlessList}
	    blessEffects={blessEffects}
	    />
	  <NationBlessBonusInfo
	    f={blessBonus.f}
	    a={blessBonus.a}
	    w={blessBonus.w}
	    e={blessBonus.e}
	    s={blessBonus.s}
	    d={blessBonus.d}
	    n={blessBonus.n}
	    b={blessBonus.b}
	    />
	  
	  <div className={styles.section}>
	    <div className={styles.label_fire}>F{blessPoints.f}</div>
	    <div className={styles.label_air}>A{blessPoints.a}</div>
	    <div className={styles.label_water}>W{blessPoints.w}</div>
	    <div className={styles.label_earth}>E{blessPoints.e}</div>
	    <div className={styles.label_astral}>S{blessPoints.s}</div>
	    <div className={styles.label_death}>D{blessPoints.d}</div>
	    <div className={styles.label_nature}>N{blessPoints.n}</div>
	    <div className={styles.label_blood}>B{blessPoints.b}</div>
	  </div>
	  
	  <p>
	    Available Blesses
	    <button className={styles.open_button} onClick={showBlessList}>
	      Show all bless list
	    </button>
	  </p>
	  
	  <div className={styles.section}>
	    <table className={styles.table}>
	      <thead>
		<tr>
		  <th className={styles.table_header}>Bless Points</th>
		  <th className={styles.table_header}>Scales</th>
		  <th className={styles.table_header}>Name</th>
		  <th className={styles.table_header}>Short description</th>
		  <th className={styles.table_header}>Incarnate only?</th>
		</tr>
	      </thead>
	      <BlessEffectsRows effects={filterBlessEffects(blessEffects, blessPoints)} />
	    </table>
	  </div>
	  
	</div>
    );
}

export default BlessEffects;
