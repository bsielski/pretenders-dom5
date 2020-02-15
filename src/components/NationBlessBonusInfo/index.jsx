import React from 'react';

import styles from './NationBlessBonusInfo.module.scss';

function NationBlessBonusInfo(props) {
    const { f, a, w, e, s, d, n, b } = props;
	const fBonus = f ? " Fire +"   + f : "";
	const aBonus = a ? " Air +"    + a : "";
	const wBonus = w ? " Water +"  + w : "";
	const eBonus = e ? " Earth +"  + e : "";
	const sBonus = s ? " Astral +" + s : "";
	const dBonus = d ? " Death +"  + d : "";
	const nBonus = n ? " Nature +" + n : "";
	const bBonus = b ? " Blood +"  + b : "";
	return (
	    <div className={styles.container}>
              <p>
		{(fBonus || aBonus || wBonus || eBonus || sBonus || dBonus || nBonus || bBonus) ? "Nation bless bonuses:" : ""}
		<span className={styles.fire}>{fBonus}</span>
		<span className={styles.air}>{aBonus}</span>
		<span className={styles.earth}>{eBonus}</span>
		<span className={styles.water}>{wBonus}</span>
		<span className={styles.astral}>{sBonus}</span>
		<span className={styles.death}>{dBonus}</span>
		<span className={styles.nature}>{nBonus}</span>
		<span className={styles.blood}>{bBonus}</span>
              </p>
	    </div>
	);
}

export default NationBlessBonusInfo;
