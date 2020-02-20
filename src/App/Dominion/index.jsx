import React from 'react';
import NationScalesInfo from './NationScalesInfo';
import ScalesPicker from './ScalesPicker';
import ResetScalesButton from './ResetScalesButton';

import { path } from 'ramda';

import styles from './Dominion.module.scss';

function Dominion(props) {
    const {
        resetScalesPoints,
        dominion,
        order, productivity, heat,
        growth, fortune, magic
    } = props;
    
    return (
	<div className={styles.container}>
	  {/*< NationScalesInfo
		   heat={path(['scales', 'heat'], nations[nationId])}
		   growth={path(['scales', 'growth'], nations[nationId])}
		   />
	           < ScalesPicker
                         changeNumber={changeNumber}
                         dominion={dominion}
		         order={order}
		         productivity={productivity}
		         heat={heat}
		         growth={growth}
		         fortune={fortune}
		         magic={magic}
		     />*/}
 	           <ResetScalesButton
                     resetScalesPoints={resetScalesPoints}
	             />
	</div>
    );
}

export default Dominion;
