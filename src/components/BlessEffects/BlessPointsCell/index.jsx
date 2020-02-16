import React from 'react';

import styles from './BlessPointsCell.module.scss';

function BlessPointsCell(props) {
    const { effect } = props;
    let points = [];
    if (effect.f) {
	points.push(<span className={styles.bless_points_fire}>{effect.f}</span>)
    }
    if (effect.a) {
	points.push(<span className={styles.bless_points_air}>{effect.a}</span>)
    }
    if (effect.w) {
	points.push(<span className={styles.bless_points_water}>{effect.w}</span>)
    }
    if (effect.e) {
	points.push(<span className={styles.bless_points_earth}>{effect.e}</span>)
    }
    if (effect.s) {
	points.push(<span className={styles.bless_points_astral}>{effect.s}</span>)
    }
    if (effect.d) {
	points.push(<span className={styles.bless_points_death}>{effect.d}</span>)
    }
    if (effect.n) {
	points.push(<span className={styles.bless_points_nature}>{effect.n}</span>)
    }
    if (effect.b) {
	points.push(<span className={styles.bless_points_blood}>{effect.b}</span>)
    }
    // const howMany = points.length;
    points = points.map((bless, index) => {
	return (

	    <span key={index}>{!!index && ", "}{bless}</span>
	);
	// if (index === howMany - 1) {
	// return (<span key={index}>{bless}</span>);
	// }
	// else {
	// return (<span key={index}>{bless} + ", "</span>);
	// }
    });
    return (
	<td className={styles.cell}>
	  {points}
	</td>
    );
}

export default BlessPointsCell;
