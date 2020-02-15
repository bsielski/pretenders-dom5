import React from 'react';
import NationInfo from './NationInfo';
import ResetAllButton from './ResetAllButton';
import { path } from 'ramda';

import styles from './Nation.module.scss';

class Nation extends React.Component {
    constructor(props) {
	super(props);
	this.handleResetAll = this.handleResetAll.bind(this);
	this.handleSelection = this.handleSelection.bind(this);
    }

    handleResetAll(e) {
	this.props.resetNation(e);
    }

    handleSelection(e) {
	this.props.changeOption(e);
    }
    
    render() {
        const { nations, nationId } = this.props;
	const nationOptions = Object.keys(nations).map(nId => {
	    return (
		<option
                  key={nId}
                  value={nId}
                  className={styles["option_era_" + nations[nId].era]}
                  >
		  {nations[nId].era} {nations[nId].name}: {nations[nId].epithet}
		</option>
	    );
	});

	return (
	    <div className={styles.container}>
	      <div className={styles.body}>
		<select
		  name="nationId" value={nationId}
		  onChange={this.handleSelection}
		  id="nation-picker__select"
		  >
		  {nationOptions}
		</select>
		<ResetAllButton
		  onClick={this.handleResetAll}
		  />
	      </div>
	      < NationInfo
		f={path(['bless_bonus', 'f'], nations[nationId])}
		a={path(['bless_bonus', 'a'], nations[nationId])}
		w={path(['bless_bonus', 'w'], nations[nationId])}
		e={path(['bless_bonus', 'e'], nations[nationId])}
		s={path(['bless_bonus', 's'], nations[nationId])}
		d={path(['bless_bonus', 'd'], nations[nationId])}
		n={path(['bless_bonus', 'n'], nations[nationId])}
		b={path(['bless_bonus', 'b'], nations[nationId])}
		heat={path(['scales', 'heat'], nations[nationId])}
		growth={path(['scales', 'growth'], nations[nationId])}
		/>
	    </div>
	);
    }
}

export default Nation;
