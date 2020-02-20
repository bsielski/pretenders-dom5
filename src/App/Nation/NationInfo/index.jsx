import React from 'react';

import styles from './NationInfo.module.scss';

function NationInfo(props) {
    const { f, a, w, e, s, d, n, b } = props.blessBonus;
    const { heat, growth } = props.defaultScales;
    
    const fBonus = f ? " Fire +"   + f : "";
    const aBonus = a ? " Air +"    + a : "";
    const wBonus = w ? " Water +"  + w : "";
    const eBonus = e ? " Earth +"  + e : "";
    const sBonus = s ? " Astral +" + s : "";
    const dBonus = d ? " Death +"  + d : "";
    const nBonus = n ? " Nature +" + n : "";
    const bBonus = b ? " Blood +"  + b : "";
    const heatLabel = heat ? "Favourite temperature: "  + heat : "";
    const growthLabel = growth ? "Default growth: "  + growth : "";
    return (
	<div className={styles.container}>
          <p>
	    {(fBonus || aBonus || wBonus || eBonus || sBonus || dBonus || nBonus || bBonus) ? "Nation bless bonuses:" : ""}
	    <span className={styles.blesses_fire}>{fBonus}</span>
	    <span className={styles.blesses_air}>{aBonus}</span>
	    <span className={styles.blesses_earth}>{eBonus}</span>
	    <span className={styles.blesses_water}>{wBonus}</span>
	    <span className={styles.blesses_astral}>{sBonus}</span>
	    <span className={styles.blesses_death}>{dBonus}</span>
	    <span className={styles.blesses_nature}>{nBonus}</span>
	    <span className={styles.blesses_blood}>{bBonus}</span>
          </p>
          <p className={styles.heat}>
	    {heatLabel}
          </p>
          <p className={styles.growth}>
	    {growthLabel}
          </p>
	</div>
    );
}

export default NationInfo;
