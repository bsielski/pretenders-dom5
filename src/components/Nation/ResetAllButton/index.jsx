import React from 'react';

//import styles from './ResetAllButton.module.scss';

function ResetAllButton(props) {
    const { onClick } = props;
    return (
  	<button
	  type="button"
          id="reset_all_button"
          className="reset_all_button"
          onClick={onClick}
	  >
          Reset all points
	</button>
    );
}

export default ResetAllButton;
