import React from 'react';
import Box from './Box';

import styles from './Layout.module.scss';

function Layout(props) {
    
    const {
        nation, magic, dominion, imprisonment, chassis,
        blessEffects, pretenders, footer, debugBar
    } = props;

    return (
	<div className={styles.container}>
	  <main>
	    <div className={styles.columnsContainer}>

	      <div className={styles.column}>
		<Box title="Nation" body={nation} />
		<Box title="Magic" body={magic} />
                <Box title="Dominion" body={dominion} />
	    	<Box title="Imprisonment" body={imprisonment} />
		<Box title="Bless Effects" body={blessEffects} />
	    	<Box title="Chassis" body={chassis} />
              </div>

	      <div className={styles.column}>
		<Box title="Pretenders" body={pretenders} />
	      </div>

	    </div>
	  </main>
	  {footer}
	  {debugBar}
	</div>	
    );
}

export default Layout;
