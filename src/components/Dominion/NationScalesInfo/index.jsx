import React from 'react';

import styles from './NationScalesInfo.module.scss';

function NationScalesInfo(props) {
    const heat = props.heat ? "Farourite temperature: "  + props.heat : "";
    const growth = props.growth ? "Default growth: "  + props.growth : "";
    return (
	<div className={styles.container}>
          <p className={styles.heat}>
	    {heat}
          </p>
          <p className={styles.growth}>
	    {growth}
          </p>
	</div>
    );
}

export default NationScalesInfo;
