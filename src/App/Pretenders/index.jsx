import React from 'react';

import {filterPretendersByImprisonment} from './filterPretendersByImprisonment';

import {pretenderCost} from './pretenderCost';
import { sum } from 'ramda';

import styles from './Pretenders.module.scss';

function Pretenders(props) {

    const {
        nations,
        pretenders,
        nationId,
        imprisonment,
        pointsForImprisonment,
        scalesCosts,
	f, a, w, e, s, d, n, b,
	dominion,
    } = props;

    const path = {f, a, w, e, s, d, n, b};

    const points = 425;

    const totalCostOfScales = sum(Object.values(scalesCosts));
    const pointsLeftWithoutPretenders = points + pointsForImprisonment - totalCostOfScales;

    const filteredPretenderByImprisonment = filterPretendersByImprisonment(
        pretenders,
        nations[nationId].pretenders,
        imprisonment
    );
    
    const pretenderRows = filteredPretenderByImprisonment.map(pretenderId => {
	const pretender = pretenders[pretenderId];
	return (
	    {
		pretenderId: pretenderId,
		name: pretender.name,
		pointsLeft: pointsLeftWithoutPretenders - pretenderCost(
                    pretender,
		    nations[nationId],
		    path,
		    dominion
                ),
		dominion: pretender.startdom > dominion ? pretender.startdom : dominion,
		f: pretender.f > path.f ? pretender.f : path.f,
		a: pretender.a > path.a ? pretender.a : path.a,
		w: pretender.w > path.w ? pretender.w : path.w,
		e: pretender.e > path.e ? pretender.e : path.e,
		s: pretender.s > path.s ? pretender.s : path.s,
		d: pretender.d > path.d ? pretender.d : path.d,
		n: pretender.n > path.n ? pretender.n : path.n,
		b: pretender.b > path.b ? pretender.b : path.b,
	    }
	);
    }).sort((a, b) => {
	if (a.pointsLeft < b.pointsLeft) {
	    return 1;
	}
	if (a.pointsLeft > b.pointsLeft) {
	    return -1;
	}
	return 0;
    }).map(data => {
	return (
	    <tr key={data.pretenderId}>
	      <td className={styles.table_cell_name}>{data.name + " "}
	        <span className={styles.table_cell_id}>{"(id: " + data.pretenderId + ")"}</span>
	      </td>
	      <td className={styles.table_cell}>{data.pointsLeft}</td>
	      <td className={styles.table_cell}>{data.dominion}</td>
	      <td className={styles["table_cell" + (data.f > 0 ? "_fire"   : "") ]}>{data.f > 0 ? "F"+data.f : ""}</td>
	      <td className={styles["table_cell" + (data.a > 0 ? "_air"    : "") ]}>{data.a > 0 ? "A"+data.a : ""}</td>
	      <td className={styles["table_cell" + (data.w > 0 ? "_water"  : "") ]}>{data.w > 0 ? "W"+data.w : ""}</td>
	      <td className={styles["table_cell" + (data.e > 0 ? "_earth"  : "") ]}>{data.e > 0 ? "E"+data.e : ""}</td>
	      <td className={styles["table_cell" + (data.s > 0 ? "_astral" : "") ]}>{data.s > 0 ? "S"+data.s : ""}</td>
	      <td className={styles["table_cell" + (data.d > 0 ? "_death"  : "") ]}>{data.d > 0 ? "D"+data.d : ""}</td>
	      <td className={styles["table_cell" + (data.n > 0 ? "_nature" : "") ]}>{data.n > 0 ? "N"+data.n : ""}</td>
	      <td className={styles["table_cell" + (data.b > 0 ? "_blood"  : "") ]}>{data.b > 0 ? "B"+data.b : ""}</td>
	    </tr>
	);
    });
    
    return (
	<table className={styles.table} id="pretenders-table">
	  <thead id="pretenders-table__head">
	    <tr>
	      <th className={styles.table_header}>Name</th>
	      <th className={styles.table_header}>Points left</th>
	      <th className={styles.table_header}>Dominion</th>
	      <th className={styles.table_header} colSpan="8">Magic</th>
	    </tr>
	  </thead>
	  <tbody id="pretenders-table__body">
	    {pretenderRows}
	  </tbody>
	</table>
    );
}

export default Pretenders;
