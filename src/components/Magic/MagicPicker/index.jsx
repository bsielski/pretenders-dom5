import React from 'react';

import styles from './MagicPicker.module.scss';

function MagicPicker(props) {

    const handleChange = (e) => {
	props.changePathLevel(e);
    }
    const { path } = props;

    return (
	<div className={styles.container}>
	  <div className={styles.section}>
	    <div className={styles.picker}>
	      <label className={styles.label_fire} htmlFor="fire-picker__input">
		F
	      </label>
	      <input type="number" name="f" onChange={handleChange} min="0" max="10"
                     value={path.f}
		     id="fire-picker__input" className={styles.input}/>
	    </div>
	    <div className={styles.picker}>
	      <label className={styles.label_air} htmlFor="air-picker__input">
		A
	      </label>
	      <input type="number" name="a" onChange={handleChange} min="0" max="10"
                     value={path.a}
		     id="air-picker__input" className={styles.input} />
	    </div>
	    <div className={styles.picker}>
	      <label className={styles.label_water} htmlFor="water-picker__input">
		W
	      </label>
	      <input type="number" name="w" onChange={handleChange} min="0" max="10"
                     value={path.w}
		     id="water-picker__input" className={styles.input} />
	    </div>
	    <div className={styles.picker}>
	      <label className={styles.label_earth} htmlFor="earth-picker__input">
		E
	      </label>
	      <input type="number" name="e" onChange={handleChange} min="0" max="10"
                     value={path.e}
		     id="earth-picker__input" className={styles.input} />
	    </div>
	  </div>
	  <div className={styles.section}>
	    <div className={styles.picker}>
	      <label className={styles.label_astral} htmlFor="astral-picker__input">
		S
	      </label>
	      <input type="number" name="s" onChange={handleChange} min="0" max="10"
                     value={path.s}
		     id="astral-picker__input" className={styles.input} />
	    </div>
	    <div className={styles.picker}>
	      <label className={styles.label_death} htmlFor="death-picker__input">
		D
	      </label>
	      <input type="number" name="d" onChange={handleChange} min="0" max="10"
                     value={path.d}
		     id="death-picker__input" className={styles.input} />
	    </div>
	    <div className={styles.picker}>
	      <label className={styles.label_nature} htmlFor="nature-picker__input">
		N
	      </label>
	      <input type="number" name="n" onChange={handleChange} min="0" max="10"
                     value={path.n}
		     id="nature-picker__input" className={styles.input} />
	    </div>
	    <div className={styles.picker}>
	      <label className={styles.label_blood} htmlFor="blood-picker__input">
		B
	      </label>
	      <input type="number" name="b" onChange={handleChange} min="0" max="10"
                     value={path.b}
		     id="blood-picker__input" className={styles.input} />
	    </div>
	  </div>
	</div>
    );
}

export default MagicPicker;
