import React from 'react';

//import styles from './ResetMagicButton.module.scss';

function ResetMagicButton(props) {
    const handleResetMagic = (e) => {
	props.resetMagic(e);
    };

    return (
  	<button
	  type="button"
          id="reset_magic_button"
          onClick={handleResetMagic}
	  >
          Reset magic points
	</button>
    );
}

export default ResetMagicButton;
