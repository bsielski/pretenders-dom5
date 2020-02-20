import React from 'react';
import NationBlessBonusInfo from './NationBlessBonusInfo';
import BlessEffectsWindow from './BlessEffectsWindow';
import BlessEffectsRows from './BlessEffectsRows';

import {filterBlessEffects} from '../../filterBlessEffects';

import styles from './BlessEffects.module.scss';

function BlessEffects(props) {
    const {
        nations, nationId,
        isBlessEffectsWindowOpen, closeBlessEffectsWindow,
        blessEffects, blessPoints,
        openBlessEffectsWindow
    } = props;
    let this_nation = nations[nationId];
    let this_bless  = this_nation.bless_bonus;
    return(
	<div className={styles.container}>
	  <BlessEffectsWindow
	    isOpen={isBlessEffectsWindowOpen}
	    onClose={closeBlessEffectsWindow}
	    blessEffects={blessEffects}
	    />
	  <NationBlessBonusInfo
	    f={this_bless.f}
	    a={this_bless.a}
	    w={this_bless.w}
	    e={this_bless.e}
	    s={this_bless.s}
	    d={this_bless.d}
	    n={this_bless.n}
	    b={this_bless.b}
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
	    <button className={styles.open_button} onClick={openBlessEffectsWindow}>
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
