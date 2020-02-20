import React from 'react';

import BlessPointsCell from '../BlessPointsCell';

import styles from './BlessEffectsRows.module.scss';

function BlessEffectsRows(props) {
    const { effects } = props;
    const rows = effects.map(effect => {
        const { id, scales, name, shortDescription, incarnate } = effect;
	return (
	    <tr key={id} className={styles.row}>
              <BlessPointsCell effect={effect}/>
              <td className={styles.scales}>
		{
		    (scales.heat ? ("Heat: " + scales.heat + " "      ) : "")
			+ (scales.growth  ? ("Growth: " + scales.growth + " "  ) : "")
			+ (scales.fortune ? ("Fortune: " + scales.fortune + " " ) : "")
			+ (scales.magic   ? ("Magic: " + scales.magic + " " ) : "")
		}
              </td>
              <td className={styles.name}>{name}</td>
              <td className={styles.description}>{shortDescription}</td>
              <td className={styles.incarnate}>{incarnate ? "yes" : ""}</td>
	    </tr>
	);
    });
    return (
	<tbody>
	  {rows}
	</tbody>
    );
}

export default BlessEffectsRows;
