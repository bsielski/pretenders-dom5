import React from 'react';

import './ResetAllButton.css';

export function ResetAllButton(props) {

    return (
  	<button
	  type="button"
          id="reset_all_button"
          className="reset_all_button"
          onClick={props.onClick}
	  >
          Reset all points
	</button>
    );
}
