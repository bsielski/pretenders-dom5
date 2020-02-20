import React from 'react';

//import styles from './ResetScalesButton.module.scss';

function ResetScalesButton(props) {
    const { resetScalesPoints } = props;

    const handleClick = (event) => {
        resetScalesPoints();
    }
    return (
  	<button
	  type="button"
          id="reset_scales_button"
          onClick={resetScalesPoints}
	  >
          Reset scales points
	</button>
    );
}

export default ResetScalesButton;
