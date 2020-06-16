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

	        <div className={styles.columnsContainer}>
                  <div className={styles.column}>
		    <Box title="Nation" body={nation} />
                  </div>
                </div>
	        <div className={styles.columnsContainer}>
                  <div className={styles.column}>
		    <Box title="Magic" body={magic} />
                  </div>
                </div>
	        <div className={styles.columnsContainer}>
                  <div className={styles.column}>
                    <Box title="Dominion" body={dominion} />
                  </div>
                </div>
	        <div className={styles.columnsContainer}>
                  <div className={styles.column}>
	    	    <Box title="Imprisonment" body={imprisonment} />
                  </div>
                  <div className={styles.column}>
	    	    <Box title="Chassis" body={chassis} />
                  </div>
                </div>
	        <div className={styles.column}>
	          <div className={styles.columnsContainer}>
	            <Box title="Bless Effects" body={blessEffects} />
                  </div>
                </div>
              </div>

	      <div className={styles.column}>
	        <div className={styles.column}>
	          <div className={styles.columnsContainer}>
		    <Box title="Pretenders" body={pretenders} />
                  </div>
                </div>
	      </div>

	    </div>
	  </main>
	  {footer}
	  {debugBar}
	</div>	
    );
}

export default Layout;
