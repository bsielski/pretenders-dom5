import React from 'react';

import './BlessEffectsWindow.css';
import {BlessEffectsRows} from './BlessEffectsRows';

export class BlessEffectsWindow extends React.Component {
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
        <div className="modal_window">
          <h1 className="form__header">
            Bless Effects:
          </h1>
          <div className="modal_window__body">
            <table className="bless_effects_window_table">
              <thead className="bless_effects_window_table__head" id="bless_effects_window_table__head">
                <tr className="bless_effects_window_table__row">
                  <th className="bless_effects_window_table__header">Bless Points</th>
                  <th className="bless_effects_window_table__header">Scales</th>
                  <th className="bless_effects_window_table__header">Name</th>
                  <th className="bless_effects_window_table__header">Short description</th>
                  <th className="bless_effects_window_table__header">Incarnation</th>
                </tr>
              </thead>
              <BlessEffectsRows effects={this.props.blessEffects} />
            </table>
          </div>
          <p className="modal_window__close_button">
            <button onClick={this.close}>Close</button>
          </p>
        </div>
        <div className="modal_shroud"
          onClick={this.close}
        />
      </div>
    )
  }

}
