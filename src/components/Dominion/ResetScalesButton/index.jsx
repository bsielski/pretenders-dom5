import React from 'react';

//import styles from './ResetScalesButton.module.scss';

export function ResetScalesButton(props) {

    return (
  	<button
	  type="button"
          id="reset_scales_button"
          onClick={props.onClick}
	  >
          Reset scales points
	</button>
    );
}

export default ResetScalesButton;
