import React from 'react';

import styles from './BlessEffectsWindow.module.scss';

import BlessEffectsRows from '../BlessEffectsRows';

class BlessEffectsWindow extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close(e) {
        e.preventDefault()
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    render() {
        if (this.props.isOpen === false) {
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
                    <BlessEffectsRows effects={this.props.blessEffects} />
                  </table>
                </div>
                <p className={styles.close_button}>
                  <button onClick={this.close}>Close</button>
                </p>
              </div>
              <div className={styles.shroud}
                   onClick={this.close}
                   />
            </div>
        )
    }
}

export default BlessEffectsWindow;
