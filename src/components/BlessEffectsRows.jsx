import React from 'react';

import BlessPointsCell from './BlessPointsCell';

import './BlessEffectsRows.css';

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
