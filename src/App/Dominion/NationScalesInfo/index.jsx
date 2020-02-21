import React from 'react';

import styles from './NationScalesInfo.module.scss';

function NationScalesInfo(props) {
    const { heat, growth } = props.defaultScales;
    const heatLabel = heat ? "Farourite temperature: "  + heat : "";
    const growthLabel = growth ? "Default growth: "  + growth : "";
    return (
	<div className={styles.container}>
          <p className={styles.heat}>
	    { heatLabel }
          </p>
          <p className={styles.growth}>
	    { growthLabel }
          </p>
	</div>
    );
}

export default NationScalesInfo;
