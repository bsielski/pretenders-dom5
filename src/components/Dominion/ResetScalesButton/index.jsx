import React from 'react';

//import styles from './ResetScalesButton.module.scss';

function ResetScalesButton(props) {
    const { onClick } = props;
    return (
  	<button
	  type="button"
          id="reset_scales_button"
          onClick={onClick}
	  >
          Reset scales points
	</button>
    );
}

export default ResetScalesButton;
