import React, { Component } from 'react';
import {getNations} from './nations';
import './App.css';

class Debug extends React.Component {
  render() {
    return (
      <div>
        <section id="debugger">Selected nation is: {this.props.nation}</section>
        <section id="debugger">Imprisonment is: {this.props.imprisonment}</section>
        <section id="debugger">Magic path F is: {this.props.pathF}</section>
        <section id="debugger">Magic path A is: {this.props.pathA}</section>
        <section id="debugger">Magic path W is: {this.props.pathW}</section>
        <section id="debugger">Magic path E is: {this.props.pathE}</section>
        <section id="debugger">Magic path S is: {this.props.pathS}</section>
        <section id="debugger">Magic path D is: {this.props.pathD}</section>
        <section id="debugger">Magic path N is: {this.props.pathN}</section>
        <section id="debugger">Magic path B is: {this.props.pathB}</section>

      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.magicMin = 0;
    this.magicMax = 10;
    this.dominionMin = 1;
    this.dominionMax = 10;
    this.scaleMin = -3;
    this.scaleMax = 3;
    this.imprisonmentOptions = {
      1:  { points: 0,
            label: "Awake (0 points)",
          },
      2:  { points: 150,
            label: "Dormant (gain 150 points)",
          },
      3:  { points: 250,
            label: "Imprisoned (gain 250 points)",
          },
    };
    this.nations = getNations();
    this.state = {
      nationId: 0,
      pathF: 0,
      pathA: 0,
      pathW: 0,
      pathE: 0,
      pathS: 0,
      pathD: 0,
      pathN: 0,
      pathB: 0,
      dominion: 1,
      order: 0,
      heat: 0,
      growth: 0,
      fortune: 0,
      magic: 0,
      imprisonment: 1,
    };

    this.changeNumber = this.changeNumber.bind(this);
    this.changeOption = this.changeOption.bind(this);
    this.changeRadio = this.changeRadio.bind(this);

  }

  changeOption(event) {
     const target = event.target;
     this.setState({[target.name]: target.value});
  }

  changeNumber(event) {
    const target = event.target;
    this.setState({[target.name]: target.value});
  }

  changeRadio(event) {
    const target = event.target;
    this.setState({
      imprisonment: parseInt(target.value, 10)
    });
  }

  render() {
    const currentNationId = this.state.nationId;

    const nationOptions = Object.keys(this.nations).map(nationId => {
      return (
        <option key={nationId} value={nationId} className={"nation-picker__option nation-picker__option--era_" + this.nations[nationId].era}>
          {this.nations[nationId].label}
        </option>
      );
    });

    const currentImprisonment = this.state.imprisonment;
    const isImprosonmentChecked = (value) => {
      return currentImprisonment === parseInt(value, 10);
    };
    const imprisonmentOptions = Object.keys(this.imprisonmentOptions).map(imprisonmentLevel => {
      return (
        <div key={imprisonmentLevel} className="value-picker value-picker--imprisonment value-picker--imprisonment-checked">
          <input type="radio" id={"imprisonment_"+imprisonmentLevel.toString()+"_picker__input"}
            onChange={this.changeRadio} checked={isImprosonmentChecked(imprisonmentLevel)}
            name="imprisonment" value={imprisonmentLevel} className="value-picker__input value-picker__input--imprisonment"
          />
          <label className="value-picker__label value-picker__label--imprisonment"
            htmlFor={"imprisonment_"+imprisonmentLevel.toString()+"_picker__input"}
          >
            {this.imprisonmentOptions[imprisonmentLevel].label + " " + isImprosonmentChecked(imprisonmentLevel)}
          </label>
        </div>
      );
    });

    const currentPathF = this.state.pathF;
    const currentPathA = this.state.pathA;
    const currentPathW = this.state.pathW;
    const currentPathE = this.state.pathE;
    const currentPathS = this.state.pathS;
    const currentPathD = this.state.pathD;
    const currentPathN = this.state.pathN;
    const currentPathB = this.state.pathB;

    return (
      <main>
        <div className="form">
          <header className="form__header">Nation</header>
          <div className="form__body">
            <select name="nationId" value={currentNationId} onChange={this.changeOption}
              className="nation-picker__select" id="nation-picker__select"
            >
              {nationOptions}
            </select>
          </div>
        </div>

        <div className="form">
          <header className="form__header">Magic</header>
          <div className="form__body">
            <div className="form__section">
              <div className="value-picker value-picker--magic value-picker--fire">
                <label className="value-picker__label value-picker__label--magic value-picker__label--fire" htmlFor="fire-picker__input">F</label>
                <input type="number" name="pathF" onChange={this.changeNumber} min="0" max="10" value={currentPathF} id="fire-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--fire"/>
              </div>
              <div className="value-picker value-picker--magic value-picker--air">
                <label className="value-picker__label value-picker__label--magic value-picker__label--air" htmlFor="air-picker__input">A</label>
                <input type="number" name="pathA" onChange={this.changeNumber} min="0" max="10" value={currentPathA} id="air-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--air" />
              </div>
              <div className="value-picker value-picker--magic value-picker--water">
                <label className="value-picker__label value-picker__label--magic value-picker__label--water" htmlFor="water-picker__input">W</label>
                <input type="number" name="pathW" onChange={this.changeNumber} min="0" max="10" value={currentPathW} id="water-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--water" />
              </div>
              <div className="value-picker value-picker--magic value-picker--earth">
                <label className="value-picker__label value-picker__label--magic value-picker__label--earth" htmlFor="earth-picker__input">E</label>
                <input type="number" name="pathE" onChange={this.changeNumber} min="0" max="10" value={currentPathE} id="earth-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--earth" />
              </div>
            </div>
            <div className="form__section">
              <div className="value-picker value-picker--magic value-picker--astral">
                <label className="value-picker__label value-picker__label--magic value-picker__label--astral" htmlFor="astral-picker__input">S</label>
                <input type="number" name="pathS" onChange={this.changeNumber} min="0" max="10" value={currentPathS} id="astral-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--astral" />
              </div>
              <div className="value-picker value-picker--magic value-picker--death">
                <label className="value-picker__label value-picker__label--magic value-picker__label--death" htmlFor="death-picker__input">D</label>
                <input type="number" name="pathD" onChange={this.changeNumber} min="0" max="10" value={currentPathD} id="death-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--death" />
              </div>
              <div className="value-picker value-picker--magic value-picker--nature">
                <label className="value-picker__label value-picker__label--magic value-picker__label--nature" htmlFor="nature-picker__input">N</label>
                <input type="number" name="pathN" onChange={this.changeNumber} min="0" max="10" value={currentPathN} id="nature-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--nature" />
              </div>
              <div className="value-picker value-picker--magic value-picker--blood">
                <label className="value-picker__label value-picker__label--magic value-picker__label--blood" htmlFor="blood-picker__input">B</label>
                <input type="number" name="pathB" onChange={this.changeNumber} min="0" max="10" value={currentPathB} id="blood-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--blood" />
              </div>
            </div>
          </div>
          <div className="form__body form__body--bless-effects">
          <p id="bless-effects-morale" className="bless-effects bless-effects--visible bless-effects-morale">Morale + 1</p>
          <p id="bless-effects-fire" className="bless-effects bless-effects--fire"></p>
          <p id="bless-effects-air" className="bless-effects bless-effects--air"></p>
          <p id="bless-effects-water" className="bless-effects bless-effects--water"></p>
          <p id="bless-effects-earth" className="bless-effects bless-effects--earth"></p>
          <p id="bless-effects-astral" className="bless-effects bless-effects--astral"></p>
          <p id="bless-effects-death" className="bless-effects bless-effects--death"></p>
          <p id="bless-effects-nature" className="bless-effects bless-effects--nature"></p>
          <p id="bless-effects-blood" className="bless-effects bless-effects--blood"></p>
          </div>
        </div>

        <div className="form">
          <header className="form__header">Imprisonment</header>
          <div className="form__body form__body--imprisonment">
            {imprisonmentOptions}

          </div>
        </div>

        <Debug
          nation={this.nations[currentNationId].label}
          imprisonment={this.imprisonmentOptions[currentImprisonment].label}
          pathF={currentPathF}
          pathA={currentPathA}
          pathW={currentPathW}
          pathE={currentPathE}
          pathS={currentPathS}
          pathD={currentPathD}
          pathN={currentPathN}
          pathB={currentPathB}
        />

      </main>
    );
        //
        // <div className="form">
        //   <header className="form__header">Dominion</header>
        //   <div className="form__body">
        //     <div className="form__section">
        //       <div className="value-picker value-picker--dominion">
        //         <label className="value-picker__label value-picker__label--dominion" for="dominion-picker__input">Dom</label>
        //         <input type="number" min="1" max="10" value="1" id="dominion-picker__input" className="value-picker__input value-picker__input--dominion" />
        //       </div>
        //     </div>
        //     <div className="form__body">
        //       <div className="form__section">
        //         <div className="value-picker value-picker--scale">
        //           <label className="value-picker__label value-picker__label--scale value-picker__label--order" for="order-picker__input">Ord</label>
        //           <input type="number" min="-3" max="3" value="0" id="order-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--order" />
        //         </div>
        //         <div className="value-picker value-picker--scale">
        //           <label className="value-picker__label value-picker__label--scale value-picker__label--productivity" for="productivity-picker__input">Prd</label>
        //           <input type="number" min="-3" max="3" value="0" id="productivity-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--productivity" />
        //         </div>
        //         <div className="value-picker value-picker--scale">
        //           <label className="value-picker__label value-picker__label--scale value-picker__label--heat" for="heat-picker__input">Heat</label>
        //           <input type="number" min="-3" max="3" value="0" id="heat-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--heat" />
        //         </div>
        //       </div>
        //       <div className="form__section">
        //         <div className="value-picker value-picker--scale">
        //           <label className="value-picker__label value-picker__label--scale value-picker__label--growth" for="growth-picker__input">Grw</label>
        //           <input type="number" min="-3" max="3" value="0" id="growth-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--growth" />
        //         </div>
        //         <div className="value-picker value-picker--scale">
        //           <label className="value-picker__label value-picker__label--scale value-picker__label--fortune" for="fortune-picker__input">Frt</label>
        //           <input type="number" min="-3" max="3" value="0" id="fortune-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--fortune" />
        //         </div>
        //         <div className="value-picker value-picker--scale">
        //           <label className="value-picker__label value-picker__label--scale value-picker__label--magic" for="magic-picker__input">Mgc</label>
        //           <input type="number" min="-3" max="3" value="0" id="magic-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--magic" />
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        //

        //
        // <div className="form">
        //   <header className="form__header">Pretenders</header>
        //   <table className="pretenders-table" id="pretenders-table">
        //     <thead className="pretenders-table__head" id="pretenders-table__head">
        //       <tr className="pretenders-table__row">
        //         <th className="pretenders-table__header">Name</th>
        //         <th className="pretenders-table__header">Points left</th>
        //         <th className="pretenders-table__header">Dominion</th>
        //         <th className="pretenders-table__header" colspan="8">Magic</th>
        //       </tr>
        //     </thead>
        //     <tbody className="pretenders-table__body" id="pretenders-table__body">
        //     </tbody>
        //   </table>
        // </div>
  }

}

export default App;
