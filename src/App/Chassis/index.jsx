import React from 'react';

import styles from './Chassis.module.scss';

function Chassis(props) {
    const {
        toggleImmobiles,
        toggleTitans,
        toggleMonsters,
        toggleHumanoids,
        chassis,
    } = props;

    const chassisOptions = [
	{
            baseDom: 4,
            name: "immobiles",
	    label: "Immobiles",
            action: toggleImmobiles,
        },
	{
            baseDom: 3,
            name: "titans",
	    label: "Titans",
            action: toggleTitans,
        },
	{
            baseDom: 2,
	    name: "monsters",
            label: "Monsters",
            action: toggleMonsters,
        },
	{
            baseDom: 1,
            name: "humanoids",
            label: "Humanoids",
            action: toggleHumanoids,
        },
    ];

    const options = chassisOptions.map(option => {
	return (
	    <div
              key={option.baseDom}
              className={styles.picker}
              >
	      <input
                type="checkbox"
                id={"chassis_"+option.label+"_picker__input"}
		onChange={option.action}
                checked={chassis[option.baseDom]}
                className={styles.input}
		/>
	      <label
                className={styles.label}
		htmlFor={"chassis_"+option.label+"_picker__input"}
		>
		{option.label}
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

export default Chassis;
