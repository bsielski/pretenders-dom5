import React from 'react';

import './BlessEffectsRows.css';

function BlessPointsCell(props) {
    let points = [];
    if (props.effect.f) {
	points.push(<span className="bless_effects_window_table__cell bless_effects_window_table__cell--fire">{props.effect.f}</span>)
    }
    if (props.effect.a) {
	points.push(<span className="bless_effects_window_table__cell bless_effects_window_table__cell--air">{props.effect.a}</span>)
    }
    if (props.effect.w) {
	points.push(<span className="bless_effects_window_table__cell bless_effects_window_table__cell--water">{props.effect.w}</span>)
    }
    if (props.effect.e) {
	points.push(<span className="bless_effects_window_table__cell bless_effects_window_table__cell--earth">{props.effect.e}</span>)
    }
    if (props.effect.s) {
	points.push(<span className="bless_effects_window_table__cell bless_effects_window_table__cell--astral">{props.effect.s}</span>)
    }
    if (props.effect.d) {
	points.push(<span className="bless_effects_window_table__cell bless_effects_window_table__cell--death">{props.effect.d}</span>)
    }
    if (props.effect.n) {
	points.push(<span className="bless_effects_window_table__cell bless_effects_window_table__cell--nature">{props.effect.n}</span>)
    }
    if (props.effect.b) {
	points.push(<span className="bless_effects_window_table__cell bless_effects_window_table__cell--blood">{props.effect.b}</span>)
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
	<td className="bless_effects__points_cell">
	  {points}
	</td>
    );
}

export function BlessEffectsRows(props) {
    const rows = props.effects.map(effect => {
	return (
	    <tr key={effect.id} className="bless_effects__row">
              <BlessPointsCell effect={effect}/>
              <td className="bless_effects__scales_cell">
		{
		    (effect.scales.heat    ? ("Heat: " + effect.scales.heat + " "      ) : "")
			+ (effect.scales.growth  ? ("Growth: " + effect.scales.growth + " "  ) : "")
			+ (effect.scales.fortune ? ("Fortune: " + effect.scales.fortune + " ") : "")
			+ (effect.scales.magic   ? ("Magic: " + effect.scales.magic + " "    ) : "")
		}
              </td>
              <td className="bless_effects__name_cell">{effect.name}</td>
              <td className="bless_effects__description_cell">{effect.shortDescription}</td>
              <td className="bless_effects__incarnate_cell">{effect.incarnate ? "yes" : ""}</td>
	    </tr>
	);
    });
    return (
	<tbody className="bless_effects__table_body">
	  {rows}
	</tbody>
    );
}
