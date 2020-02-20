import React from 'react';

//import styles from './ResetMagicButton.module.scss';

function ResetMagicButton(props) {
    const { resetMagicPoints } = props;

    const handleClick = (e) => {
	resetMagicPoints();
    };

    return (
  	<button
	  type="button"
          id="reset_magic_button"
          onClick={handleClick}
	  >
          Reset magic points
	</button>
    );
}

export default ResetMagicButton;
