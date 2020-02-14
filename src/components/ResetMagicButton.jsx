import React from 'react';

import './ResetMagicButton.css';

export function ResetMagicButton(props) {

    return (
  	<button
	  type="button"
          id="reset_magic_button"
          className="reset_magic_button"
          onClick={props.onClick}
	  >
          Reset magic points
	</button>
    );
}
