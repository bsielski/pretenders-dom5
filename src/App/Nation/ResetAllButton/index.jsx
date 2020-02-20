import React from 'react';

//import styles from './ResetAllButton.module.scss';

function ResetAllButton(props) {
    const { resetAllPoints } = props;

    const handleClick = (event) => {
        resetAllPoints();
    }
    return (
  	<button
	  type="button"
          id="reset_all_button"
          className="reset_all_button"
          onClick={handleClick}
	  >
          Reset all points
	</button>
    );
}

export default ResetAllButton;
