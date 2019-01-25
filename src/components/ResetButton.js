import React from 'react';

import './ResetButton.css';

export function ResetButton(props) {

    return (
	<div>
  	  <button
	    type="button"
            id="reset-button"
            className="reset_button"
            onClick={props.onClick}
	    >
            Reset points
	  </button>
	</div>
    );
}
