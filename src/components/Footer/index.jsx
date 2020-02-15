import React from 'react';

import styles from './Footer.module.scss';

class Footer extends React.Component {
    render() {
	return (
	    <footer className={styles.container}>
              <h1 className={styles.row}>
		<span className={styles.page_title}>Pretenders Calculator for Dominions 5</span>
	      </h1>

	      <p className={styles.row}>
		<span className={styles.caption}>Version: </span>
		<span className={styles.value}>{this.props.version}</span>
	      </p>

              <p className={styles.row}>
		<span className={styles.caption}>Source code: </span>
		<a href="https://github.com/bsielski/pretenders-dom5" className={styles.value}>https://github.com/bsielski/pretenders-dom5</a>
	      </p>
	    </footer>
	);
    }
}

export default Footer;
