import React from 'react';
import {pretenderCost} from '../../pretenderCost';

import styles from './Pretenders.module.scss';

class Pretenders extends React.Component {
    render() {
	const pretenderRows = this.props.filteredPretenderByImprisonment.map(pretenderId => {
	    const pretender = this.props.pretenders[pretenderId];
	    return (
		{
		    pretenderId: pretenderId,
		    name: pretender.name,
		    pointsLeft: this.props.pointsLeftWithoutPretenders -
                	pretenderCost(pretender,
				      this.props.nations[this.props.nationId],
				      this.props.path,
				      this.props.dominion),
		    dominion: pretender.startdom > this.props.dominion ?
			pretender.startdom : this.props.dominion,
		    f: pretender.f > this.props.path.f ?
   			pretender.f : this.props.path.f,
		    a: pretender.a > this.props.path.a ?
			pretender.a : this.props.path.a,
		    w: pretender.w > this.props.path.w ?
			pretender.w : this.props.path.w,
		    e: pretender.e > this.props.path.e ?
			pretender.e : this.props.path.e,
		    s: pretender.s > this.props.path.s ?
			pretender.s : this.props.path.s,
		    d: pretender.d > this.props.path.d ?
			pretender.d : this.props.path.d,
		    n: pretender.n > this.props.path.n ?
			pretender.n : this.props.path.n,
		    b: pretender.b > this.props.path.b ?
			pretender.b : this.props.path.b,
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
}

export default Pretenders;
