import React from 'react';

import { clamp } from 'ramda';

import styles from './ScalePicker.module.scss';

function ScalePicker(props) {
    const {
        scaleValue,
        id,
        label,
        changeScale,
        increaseScale,
        decreaseScale,
    } = props;

    const handleChange = (event) => {
        const level = parseInt(event.target.value, 10);
        changeScale(clamp(-3, 3, level));
    };

    const handleIncrease = (event) => {
        changeScale(clamp(-3, 3, scaleValue + 1));
    };

    const handleDecrease = (event) => {
        changeScale(clamp(-3, 3, scaleValue - 1));
    };

    return (

	      <div className={styles.picker_scale}>
	        <label className={styles.label_scale}
		             htmlFor={id}>
	          {label}
	        </label>
	        <input type="number" name="order" onChange={handleChange}
		             min="-3" max="3" value={scaleValue} id={id}
		             className={styles.input_scale} />
          <button
	          type="button"
            onClick={handleIncrease}
            className={styles.button}>
            +1
	        </button>
          <button
	          type="button"
            onClick={handleDecrease}
            className={styles.button}>
            -1
	        </button>
	      </div>
    );
}

export default ScalePicker;
