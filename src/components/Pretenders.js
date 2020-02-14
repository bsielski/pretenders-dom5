import React from 'react';
import {pretenderCost} from '../pretenderCost';

import './App.css';
import './Pretenders.css';

export class Pretenders extends React.Component {
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
		<tr key={data.pretenderId} className="pretenders-table__row">
		  <td className="pretenders-table__cell pretenders-table__cell--name">{data.name + " "}
		    <span className="pretenders-table__cell--id">{"(id: " + data.pretenderId + ")"}</span>
		  </td>
		  <td className="pretenders-table__cell pretenders-table__cell--left">{data.pointsLeft}</td>
		  <td className="pretenders-table__cell pretenders-table__cell--dominion">{data.dominion}</td>
		  <td className={"pretenders-table__cell" + (data.f > 0 ? " pretenders-table__cell--fire" : ""  ) }>{data.f > 0 ? "F"+data.f : ""}</td>
		  <td className={"pretenders-table__cell" + (data.a > 0 ? " pretenders-table__cell--air" : ""   ) }>{data.a > 0 ? "A"+data.a : ""}</td>
		  <td className={"pretenders-table__cell" + (data.w > 0 ? " pretenders-table__cell--water" : "" ) }>{data.w > 0 ? "W"+data.w : ""}</td>
		  <td className={"pretenders-table__cell" + (data.e > 0 ? " pretenders-table__cell--earth" : "" ) }>{data.e > 0 ? "E"+data.e : ""}</td>
		  <td className={"pretenders-table__cell" + (data.s > 0 ? " pretenders-table__cell--astral" : "") }>{data.s > 0 ? "S"+data.s : ""}</td>
		  <td className={"pretenders-table__cell" + (data.d > 0 ? " pretenders-table__cell--death" : "" ) }>{data.d > 0 ? "D"+data.d : ""}</td>
		  <td className={"pretenders-table__cell" + (data.n > 0 ? " pretenders-table__cell--nature" : "") }>{data.n > 0 ? "N"+data.n : ""}</td>
		  <td className={"pretenders-table__cell" + (data.b > 0 ? " pretenders-table__cell--blood" : "" ) }>{data.b > 0 ? "B"+data.b : ""}</td>
		</tr>
	    );
	});
	
	return (
	    <div className="form">
	      <header className="form__header">Pretenders</header>
	      <table className="pretenders-table" id="pretenders-table">
		<thead className="pretenders-table__head" id="pretenders-table__head">
		  <tr className="pretenders-table__row">
		    <th className="pretenders-table__header">Name</th>
		    <th className="pretenders-table__header">Points left</th>
		    <th className="pretenders-table__header">Dominion</th>
		    <th className="pretenders-table__header" colSpan="8">Magic</th>
		  </tr>
		</thead>
		<tbody className="pretenders-table__body" id="pretenders-table__body">
		  {pretenderRows}
		</tbody>
	      </table>
	    </div>
	);
    }
}

