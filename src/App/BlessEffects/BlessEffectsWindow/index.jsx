import React from 'react';

import styles from './BlessEffectsWindow.module.scss';

import BlessEffectsRows from '../BlessEffectsRows';

function BlessEffectsWindow(props) {
    const {onClose, isOpen, blessEffects} = props;

    const close = (e) => {
        e.preventDefault()
        if (onClose) {
            onClose()
        }
    }

    if (isOpen === false) {
        return null;
    }

    return (
        <div>
          <div className={styles.window}>
            <h1 className={styles.header}>
              Bless Effects:
            </h1>
            <div className={styles.body}>
              <table>
                <thead id="bless_effects_window_table__head">
                  <tr className={styles.table_row}>
                    <th className={styles.table_header}>Bless Points</th>
                    <th className={styles.table_header}>Scales</th>
                    <th className={styles.table_header}>Name</th>
                    <th className={styles.table_header}>Short description</th>
                    <th className={styles.table_header}>Incarnation</th>
                  </tr>
                </thead>
                <BlessEffectsRows effects={blessEffects} />
              </table>
            </div>
            <p className={styles.close_button}>
              <button onClick={close}>Close</button>
            </p>
          </div>
          <div className={styles.shroud}
               onClick={close}
               />
        </div>
    )
}

export default BlessEffectsWindow;
