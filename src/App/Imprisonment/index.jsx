import React from 'react';

import styles from './Imprisonment.module.scss';

function Imprisonment(props) {
    const {
        changeImprisonment,
        imprisonment
    } = props;

    const imprisonmentOptions = {
	    1: { points: 0,
		 label: "Awake (0 points)",
               },
	    2: { points: 150,
		 label: "Dormant (+150 points)",
               },
	    3: { points: 350,
		 label: "Imprisoned (+350 points)",
               },
    };

    const handleChange = (event) => {
        const level = parseInt(event.target.value, 10);
	changeImprisonment(level);
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
		onChange={handleChange}
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
