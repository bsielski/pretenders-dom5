import React from 'react';

import styles from './Imprisonment.module.scss';

function Imprisonment(props) {
    const { changeRadio, imprisonment, imprisonmentOptions } = props;
    const handleSelection = (e) => {
	changeRadio(e);
    }
    const isImprosonmentChecked = (value) => {
	return imprisonment === parseInt(value, 10);
    };
    const options = Object.keys(imprisonmentOptions).map(imprisonmentLevel => {
	return (
	    <div
              key={imprisonmentLevel}
              className={styles.picker}
              >
	      <input
                type="radio"
                id={"imprisonment_"+imprisonmentLevel.toString()+"_picker__input"}
		onChange={handleSelection}
                checked={isImprosonmentChecked(imprisonmentLevel)}
		name="imprisonment"
                value={imprisonmentLevel}
                className={styles.input}
		/>
	      <label
                className={styles.label}
		htmlFor={"imprisonment_"+imprisonmentLevel.toString()+"_picker__input"}
		>
		{imprisonmentOptions[imprisonmentLevel].label}
	      </label>
	    </div>
	);
    });

    return (
	<div className={styles.container}>
	  {options}			
	</div>
    );
}

export default Imprisonment;
