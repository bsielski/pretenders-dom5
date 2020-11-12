import React from 'react';

import styles from './ScalesPicker.module.scss';

import ScalePicker from './ScalePicker';

function ScalesPicker(props) {
    const {
        dominion,
        scales,
        changeDominion,
        changeOrder,
        changeProductivity,
        changeHeat,
        changeGrowth,
        changeFortune,
        changeMagic,
    } = props;

    const {
        order,
        productivity,
        heat,
        growth,
        fortune,
        magic
    } = scales;

    const handleChange = (event) => {
        const level = parseInt(event.target.value, 10);
        const scale = event.target.name;
        switch (scale) {
        case "dominion": changeDominion(level);
            break;
        case "order": changeOrder(level);
            break;
        case "productivity": changeProductivity(level);
            break;
        case "heat": changeHeat(level);
            break;
        case "growth": changeGrowth(level);
            break;
        case "fortune": changeFortune(level);
            break;
        case "magic": changeMagic(level);
            break;
        default: break;
        }
    };

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

            <ScalePicker scaleValue={order}
                         label="Ord"
                         id="order-picker__input"
                         changeScale={changeOrder}/>

            <ScalePicker scaleValue={productivity}
                         label="Prd"
                         id="productivity-picker__input"
                         changeScale={changeProductivity}/>

            <ScalePicker scaleValue={heat}
                         label="Heat"
                         id="heat-picker__input"
                         changeScale={changeHeat}/>

            <ScalePicker scaleValue={growth}
                         label="Grw"
                         id="growth-picker__input"
                         changeScale={changeGrowth}/>

            <ScalePicker scaleValue={fortune}
                         label="Frt"
                         id="fortune-picker__input"
                         changeScale={changeFortune}/>

            <ScalePicker scaleValue={magic}
                         label="Mgt"
                         id="magic-picker__input"
                         changeScale={changeMagic}/>
          </div>
        </div>
    );
}

export default ScalesPicker;
