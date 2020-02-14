import React from 'react';

import './Footer.css';

export class Footer extends React.Component {
    render() {
	return (
	    <footer className="footer">
              <h1 className="footer__row">
		<span className="footer__page_title">Pretenders Calculator for Dominions 5</span>
	      </h1>

	      <p className="footer__row">
		<span className="footer__caption">Version: </span>
		<span className="footer__value">{this.props.version}</span>
	      </p>

              <p className="footer__row">
		<span className="footer__caption">Source code: </span>
		<a href="https://github.com/bsielski/pretenders-dom5" className="footer__value">https://github.com/bsielski/pretenders-dom5</a>
	      </p>
	    </footer>
	);
    }
}
