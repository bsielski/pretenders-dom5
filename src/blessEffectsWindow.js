import React from 'react';

function BlessPointsCell(props) {
  let points = [];
  if (props.effect.f) {
    points.push(<span className="pretenders-table__cell pretenders-table__cell--fire">{props.effect.f}</span>)
  }
  if (props.effect.a) {
    points.push(<span className="pretenders-table__cell pretenders-table__cell--air">{props.effect.a}</span>)
  }
  if (props.effect.w) {
    points.push(<span className="pretenders-table__cell pretenders-table__cell--water">{props.effect.w}</span>)
  }
  if (props.effect.e) {
    points.push(<span className="pretenders-table__cell pretenders-table__cell--earth">{props.effect.e}</span>)
  }
  if (props.effect.s) {
    points.push(<span className="pretenders-table__cell pretenders-table__cell--astral">{props.effect.s}</span>)
  }
  if (props.effect.d) {
    points.push(<span className="pretenders-table__cell pretenders-table__cell--death">{props.effect.d}</span>)
  }
  if (props.effect.n) {
    points.push(<span className="pretenders-table__cell pretenders-table__cell--nature">{props.effect.n}</span>)
  }
  if (props.effect.b) {
    points.push(<span className="pretenders-table__cell pretenders-table__cell--blood">{props.effect.b}</span>)
  }
  // const howMany = points.length;
  points = points.map((bless, index) => {
    return (

      <span key={index}>{!!index && ", "}{bless}</span>
    );
    // if (index === howMany - 1) {
      // return (<span key={index}>{bless}</span>);
    // }
    // else {
      // return (<span key={index}>{bless} + ", "</span>);
    // }
  });
  return (
    <td className="pretenders-table__cell">
      {points}
    </td>
  );
}

export function BlessEffectRows(props) {
  const rows = props.effects.map(effect => {
    return (
      <tr key={effect.id} className="pretenders-table__row">
        <BlessPointsCell effect={effect}/>
        <td className="pretenders-table__cell pretenders-table__cell--left">
          {
            (effect.scales.heat    ? ("Heat: " + effect.scales.heat + " "      ) : "")
            + (effect.scales.growth  ? ("Growth: " + effect.scales.growth + " "  ) : "")
            + (effect.scales.fortune ? ("Fortune: " + effect.scales.fortune + " ") : "")
            + (effect.scales.magic   ? ("Magic: " + effect.scales.magic + " "    ) : "")
          }
        </td>
        <td className="pretenders-table__cell pretenders-table__cell--name">{effect.name}</td>
        <td className="pretenders-table__cell pretenders-table__cell--name">{effect.shortDescription}</td>
        <td className="pretenders-table__cell pretenders-table__cell--name">{effect.incarnate ? "Incarnate only" : ""}</td>
      </tr>
    );
  });
  return (
    <tbody className="pretenders-table__body" id="pretenders-table__body">
      {rows}
    </tbody>
  );
}

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
            <table className="pretenders-table" id="pretenders-table">
              <thead className="pretenders-table__head" id="pretenders-table__head">
                <tr className="pretenders-table__row">
                  <th className="pretenders-table__header">Bless Points</th>
                  <th className="pretenders-table__header">Scales</th>
                  <th className="pretenders-table__header">Name</th>
                  <th className="pretenders-table__header">Short description</th>
                  <th className="pretenders-table__header">Incarnation</th>
                </tr>
              </thead>
              <BlessEffectRows effects={this.props.blessEffects} />
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
