import React from 'react';

import styles from './ScalesPicker.module.scss';

function ScalesPicker(props) {
    const {
        changeNumber, dominion,
        order, productivity, heat, growth, fortune, magic
    } = props;
    const handleChange = (e) => {
	changeNumber(e);
    }

    return (
        <div className={styles.container}>
	  <div className={styles.section}>
	    <div className={styles.picker_dominion}>
              <label className={styles.label_dominion}
		     htmlFor="dominion-picker__input">
	        Dom
	      </label>
              <input type="number" name="dominion" onChange={handleChange}
		     min="1" max="10" value={dominion} id="dominion-picker__input"
		     className={styles.input_dominion} />

	    </div>
	  </div>

          
	  <div className={styles.section}>

	    <div className={styles.picker_scale}>
	      <label className={styles.label_scale}
		     htmlFor="order-picker__input">
	        Ord
	      </label>
	      <input type="number" name="order" onChange={handleChange}
		     min="-3" max="3" value={order} id="order-picker__input"
		     className={styles.input_scale} />
	    </div>

	    <div className={styles.picker_scale}>
	      <label className={styles.label_scale}
		     htmlFor="productivity-picker__input">
	        Prd
	      </label>
	      <input type="number" name="productivity" onChange={handleChange}
		     min="-3" max="3" value={productivity} id="productivity-picker__input"
		     className={styles.input_scale} />
	    </div>

	    <div className={styles.picker_scale}>
	      <label className={styles.label_scale}
		     htmlFor="heat-picker__input">
	        Heat
	      </label>
	      <input type="number" name="heat" onChange={handleChange}
		     min="-3" max="3" value={heat} id="heat-picker__input"
		     className={styles.input_scale} />
	    </div>

	    <div className={styles.picker_scale}>
	      <label className={styles.label_scale}
		     htmlFor="growth-picker__input">
	        Grw
	      </label>
	      <input type="number" name="growth" onChange={handleChange}
		     min="-3" max="3" value={growth} id="growth-picker__input"
		     className={styles.input_scale} />
	    </div>

	    <div className={styles.picker_scale}>
	      <label className={styles.label_scale}
		     htmlFor="fortune-picker__input">
	        Frt
	      </label>
	      <input type="number" name="fortune" onChange={handleChange}
		     min="-3" max="3" value={fortune} id="fortune-picker__input"
		     className={styles.input_scale} />
	    </div>

	    <div className={styles.picker_scale}>
	      <label className={styles.label_scale}
		     htmlFor="magic-picker__input">
	        Mgc
	      </label>
	      <input type="number" name="magic" onChange={handleChange}
		     min="-3" max="3" value={magic} id="magic-picker__input"
		     className={styles.input_scale} />
	    </div>
            
          </div>
        </div>
    );
}

export default ScalesPicker;
