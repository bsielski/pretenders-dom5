import React from 'react';
import MagicPicker from './MagicPicker';
import ResetMagicButton from './ResetMagicButton';
import styles from './Magic.module.scss';

function Magic(props) {
    const {
        resetMagicPoints,
        f, changeFire,
        a, changeAir,
        w, changeWater,
        e, changeEarth,
        s, changeAstral,
        d, changeDeath,
        n, changeNature,
        b, changeBlood,
    } = props;

    return (
	<div className={styles.container}>
          < MagicPicker
            f={f} changeFire={changeFire}
            a={a} changeAir={changeAir}
            w={w} changeWater={changeWater}
            e={e} changeEarth={changeEarth}
            s={s} changeAstral={changeAstral}
            d={d} changeDeath={changeDeath}
            n={n} changeNature={changeNature}
            b={b} changeBlood={changeBlood}
            />
          <ResetMagicButton
	    resetMagicPoints={resetMagicPoints}
	    />
	</div>
    );
}

export default Magic;
