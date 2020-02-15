import React from 'react';

import styles from './Imprisonment.module.scss';

class Imprisonment extends React.Component {
    constructor(props) {
	super(props);
	this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e) {
	this.props.changeRadio(e);
    }
    
    render() {
	
	const isImprosonmentChecked = (value) => {
	    return this.props.imprisonment === parseInt(value, 10);
	};
	
	const imprisonmentOptions = Object.keys(this.props.imprisonmentOptions).map(imprisonmentLevel => {
	    return (
		<div
                  key={imprisonmentLevel}
                  className={styles.picker}
                  >
		  <input
                    type="radio"
                    id={"imprisonment_"+imprisonmentLevel.toString()+"_picker__input"}
		    onChange={this.handleSelection}
                    checked={isImprosonmentChecked(imprisonmentLevel)}
		    name="imprisonment"
                    value={imprisonmentLevel}
                    className={styles.input}
		    />
		  <label
                    className={styles.label}
		    htmlFor={"imprisonment_"+imprisonmentLevel.toString()+"_picker__input"}
		    >
		    {this.props.imprisonmentOptions[imprisonmentLevel].label}
		  </label>
		</div>
	    );
	});

	return (
	    <div className={styles.container}>
	      {imprisonmentOptions}			
	    </div>
	);
    }
}

export default Imprisonment;
