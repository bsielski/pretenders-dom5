import React from 'react';
import MagicPicker from './MagicPicker';
import ResetMagicButton from './ResetMagicButton';
import styles from './Magic.module.scss';

function Magic(props) {
    return (
	<div className={styles.container}>
          < MagicPicker
            changePathLevel={props.changePathLevel}
            path={props.path}
            />
          <ResetMagicButton
	    resetMagic={props.resetMagic}
	    />
	</div>
    );
}

export default Magic;
