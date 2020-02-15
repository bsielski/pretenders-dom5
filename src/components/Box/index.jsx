import React from 'react';

import styles from './Box.module.scss';

function Box(props) {
    const { title, body } = props;
    return (
	<div className={styles.container}>
	  <header className={styles.header}>
            {title}
          </header>
          {body}
	</div>
    );
}

export default Box;
