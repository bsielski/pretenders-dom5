import React from 'react';

import styles from './Footer.module.scss';

function Footer(props) {
    const { version } = props;
    return (
	<footer className={styles.container}>
          <h1 className={styles.row}>
	    <span className={styles.page_title}>Pretenders Calculator for Dominions 5</span>
	  </h1>

	  <p className={styles.row}>
	    <span className={styles.caption}>Version: </span>
	    <span className={styles.value}>{version}</span>
	  </p>

          <p className={styles.row}>
	    <span className={styles.caption}>Source code: </span>
	    <a href="https://github.com/bsielski/pretenders-dom5" className={styles.value}>https://github.com/bsielski/pretenders-dom5</a>
	  </p>

          <p className={styles.row}>
	    Pretender cost seems wrong? Please create <a href="https://github.com/bsielski/pretenders-dom5/issues" className={styles.value}>a new issue</a> about it or mail me at <address className={styles.mail}>b.sielski.webdev@gmail.com</address>.
	  </p>
	</footer>
    );
}

export default Footer;
