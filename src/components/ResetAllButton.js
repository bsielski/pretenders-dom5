import React from 'react';

import './ResetAllButton.css';

export function ResetAllButton(props) {

    return (
	//<div>
  	  <button
	    type="button"
            id="reset-button"
            className="reset_button"
            onClick={props.onClick}
	    >
            Reset all points
	  </button>
	//</div>
    );
}
