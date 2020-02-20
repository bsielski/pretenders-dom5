import React from 'react';

//import styles from './ResetMagicButton.module.scss';

function ResetMagicButton(props) {
    const { resetMagic } = props;
    const handleResetMagic = (e) => {
	resetMagic(e);
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
