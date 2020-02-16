import React from 'react';
import NationBlessBonusInfo from './NationBlessBonusInfo';
import BlessEffectsWindow from './BlessEffectsWindow';
import BlessEffectsRows from './BlessEffectsRows';

import {filterBlessEffects} from '../../filterBlessEffects';

import styles from './BlessEffects.module.scss';

class BlessEffects extends React.Component {
    render() {
	let this_nation = this.props.nations[this.props.nationId];
	let this_bless  = this_nation.bless_bonus;
	return(
	    <div className={styles.container}>
	      <BlessEffectsWindow
	        isOpen={this.props.isBlessEffectsWindowOpen}
	        onClose={this.props.closeBlessEffectsWindow}
	        blessEffects={this.props.blessEffects}
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
	        <div className={styles.label_fire}>F{this.props.blessPoints.f}</div>
	        <div className={styles.label_air}>A{this.props.blessPoints.a}</div>
	        <div className={styles.label_water}>W{this.props.blessPoints.w}</div>
	        <div className={styles.label_earth}>E{this.props.blessPoints.e}</div>
	        <div className={styles.label_astral}>S{this.props.blessPoints.s}</div>
	        <div className={styles.label_death}>D{this.props.blessPoints.d}</div>
		<div className={styles.label_nature}>N{this.props.blessPoints.n}</div>
		<div className={styles.label_blood}>B{this.props.blessPoints.b}</div>
	      </div>
	      
	      <p>
		Available Blesses
		<button className={styles.open_button} onClick={this.props.openBlessEffectsWindow}>
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
		  <BlessEffectsRows effects={filterBlessEffects(this.props.blessEffects, this.props.blessPoints)} />
		</table>
	      </div>
	      
	    </div>
	);
    }
}

export default BlessEffects;
