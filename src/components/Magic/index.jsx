import React from 'react';
import MagicPicker from './MagicPicker';
import ResetMagicButton from './ResetMagicButton';
import styles from './Magic.module.scss';

function Magic(props) {
    const { changePathLevel, path, resetMagic } = props;
    return (
	<div className={styles.container}>
          < MagicPicker
            changePathLevel={changePathLevel}
            path={path}
            />
          <ResetMagicButton
	    resetMagic={resetMagic}
	    />
	</div>
    );
}

export default Magic;
