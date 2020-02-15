import React from 'react';

import styles from './BlessPointsCell.module.scss';

function BlessPointsCell(props) {
    let points = [];
    if (props.effect.f) {
	points.push(<span className={styles.bless_points_fire}>{props.effect.f}</span>)
    }
    if (props.effect.a) {
	points.push(<span className={styles.bless_points_air}>{props.effect.a}</span>)
    }
    if (props.effect.w) {
	points.push(<span className={styles.bless_points_water}>{props.effect.w}</span>)
    }
    if (props.effect.e) {
	points.push(<span className={styles.bless_points_earth}>{props.effect.e}</span>)
    }
    if (props.effect.s) {
	points.push(<span className={styles.bless_points_astral}>{props.effect.s}</span>)
    }
    if (props.effect.d) {
	points.push(<span className={styles.bless_points_death}>{props.effect.d}</span>)
    }
    if (props.effect.n) {
	points.push(<span className={styles.bless_points_nature}>{props.effect.n}</span>)
    }
    if (props.effect.b) {
	points.push(<span className={styles.bless_points_blood}>{props.effect.b}</span>)
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
