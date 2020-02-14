import React from 'react';

import './ResetScalesButton.css';

export function ResetScalesButton(props) {

    return (
  	<button
	  type="button"
          id="reset_scales_button"
          className="reset_scales_button"
          onClick={props.onClick}
	  >
          Reset scales points
	</button>
    );
}
