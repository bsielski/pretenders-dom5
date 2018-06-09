import React, { Component } from 'react';
import {getPretenders} from './pretenders';
import {filterPretendersByImprisonment} from './filterPretendersByImprisonment';
import {getNations} from './nations';
import {magicCost} from './magicCost';
import {scalesCost} from './scalesCost';
import {dominionCost} from './dominionCost';
import {totalBlessPoints} from './blessPoints';
import {getBlessEffects} from './blessEffects';
import {filterBlessEffects} from './filterBlessEffects';
import {BlessEffectsWindow} from './blessEffectsWindow';
import {BlessEffectRows} from './blessEffectsWindow';
import {VERSION} from './version';

import './App.css';

class NationInfo extends React.Component {
  render() {
    const fBonus = this.props.f ? " Fire +"   + this.props.f : "";
    const aBonus = this.props.a ? " Air +"    + this.props.a : "";
    const wBonus = this.props.w ? " Water +"  + this.props.w : "";
    const eBonus = this.props.e ? " Earth +"  + this.props.e : "";
    const sBonus = this.props.s ? " Astral +" + this.props.s : "";
    const dBonus = this.props.d ? " Death +"  + this.props.d : "";
    const nBonus = this.props.n ? " Nature +" + this.props.n : "";
    const bBonus = this.props.b ? " Blood +"  + this.props.b : "";
    const heat = this.props.heat ? "Farourite temperature: "  + this.props.heat : "";
    const growth = this.props.growth ? "Default growth: "  + this.props.growth : "";
    return (
      <div className="nation_info">
        <p className="nation_info__blesses">
          {(fBonus || aBonus || wBonus || eBonus || sBonus || dBonus || nBonus || bBonus) ? "Nation bless bonuses:" : ""}
          <span className="nation_info__blesses--fire">{fBonus}</span>
          <span className="nation_info__blesses--air">{aBonus}</span>
          <span className="nation_info__blesses--earth">{eBonus}</span>
          <span className="nation_info__blesses--water">{wBonus}</span>
          <span className="nation_info__blesses--astral">{sBonus}</span>
          <span className="nation_info__blesses--death">{dBonus}</span>
          <span className="nation_info__blesses--nature">{nBonus}</span>
          <span className="nation_info__blesses--blood">{bBonus}</span>
        </p>
        <p className="nation_info__heat">
          {heat}
        </p>
        <p className="nation_info__growth">
          {growth}
        </p>

      </div>
    );
  }
}

class Debug extends React.Component {
  render() {
    return (
      <div>
        <section id="debugger">Number of Pretenders: {this.props.noOfPretenders}</section>
        {/*<section id="debugger">Points left (without pretender): {this.props.points}</section>
        <section id="debugger">Selected nation is: {this.props.nation}</section>
        <section id="debugger">Imprisonment is: {this.props.imprisonment}</section>
        <section id="debugger">isBlessEffectsWindowOpen is: {this.props.isBlessEffectsWindowOpen}</section>
        <section id="debugger">Dominion is: {this.props.dominion}</section>
        <section id="debugger">Order is: {this.props.order}</section>
        <section id="debugger">Productivity is: {this.props.productivity}</section>
        <section id="debugger">Heat is: {this.props.heat}</section>
        <section id="debugger">Growth is: {this.props.growth}</section>
        <section id="debugger">Fortune is: {this.props.fortune}</section>
        <section id="debugger">Magic is: {this.props.magic}</section>
       */} <section id="debugger">Version is: {VERSION}</section>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.points = 425;
    this.magicMin = 0;
    this.magicMax = 10;
    this.dominionMin = 1;
    this.dominionMax = 10;
    this.scaleMin = -3;
    this.scaleMax = 3;
    this.imprisonmentOptions = {
      1: { points: 0,
          label: "Awake (0 points)",
        },
      2: { points: 150,
          label: "Dormant (gain 150 points)",
        },
      3: { points: 350,
          label: "Imprisoned (gain 350 points)",
        },
    };
    this.pretenders = getPretenders();
    this.nations = getNations();
    this.blessEffects = getBlessEffects();
    this.state = {
      nationId: 0,
      path: {
        f: 0,
        a: 0,
        w: 0,
        e: 0,
        s: 0,
        d: 0,
        n: 0,
        b: 0,
      },
      dominion: 1,
      order: 0,
      productivity: 0,
      heat: 0,
      growth: 0,
      fortune: 0,
      magic: 0,
      imprisonment: 1,
      isBlessEffectsWindowOpen: false,
    };

    this.changeNumber = this.changeNumber.bind(this);
    this.changePathLevel = this.changePathLevel.bind(this);
    this.changeOption = this.changeOption.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
    this.openBlessEffectsWindow = this.openBlessEffectsWindow.bind(this);
    this.closeBlessEffectsWindow = this.closeBlessEffectsWindow.bind(this);

  }

  changeOption(event) {
     const target = event.target;
     this.setState({[target.name]: target.value});
  }

  changeNumber(event) {
    const target = event.target;
    this.setState({[target.name]: parseInt(target.value, 10)});
  }

  changePathLevel(event) {
    const target = event.target;
    const newPath = Object.assign({}, this.state.path);
    newPath[target.name] = parseInt(target.value, 10);
    this.setState({path: newPath});
  }

  changeRadio(event) {
    const target = event.target;
    this.setState({
      imprisonment: parseInt(target.value, 10)
    });
  }

  openBlessEffectsWindow() {
    console.log("OPEN");
    this.setState(
      {
        isBlessEffectsWindowOpen: true,
      }
    );
  }

  closeBlessEffectsWindow() {
    this.setState(
      {
        isBlessEffectsWindowOpen: false,
      }
    );
  }

  render() {

    const nationOptions = Object.keys(this.nations).map(nationId => {
      return (
        <option key={nationId} value={nationId} className={"nation-picker__option nation-picker__option--era_" + this.nations[nationId].era}>
          {this.nations[nationId].label}
        </option>
      );
    });

    const isImprosonmentChecked = (value) => {
      return this.state.imprisonment === parseInt(value, 10);
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
            {this.imprisonmentOptions[imprisonmentLevel].label}
          </label>
        </div>
      );
    });


    const pointsLeftWithoutPretenders = this.points
                                      + this.imprisonmentOptions[this.state.imprisonment].points
                                      - scalesCost( {
                                                      order: 0,
                                                      productivity: 0,
                                                      heat: this.nations[this.state.nationId].heat,
                                                      growth: this.nations[this.state.nationId].growth,
                                                      fortune: 0,
                                                      magic: 0,
                                                    },
                                                    {
                                                      order: this.state.order,
                                                      productivity: this.state.productivity,
                                                      heat: this.state.heat,
                                                      growth: this.state.growth,
                                                      fortune: this.state.fortune,
                                                      magic: this.state.magic,
                                                    }
                                                 );

    const blessBonuses = {
      f: this.nations[this.state.nationId].blessF,
      a: this.nations[this.state.nationId].blessA,
      w: this.nations[this.state.nationId].blessW,
      e: this.nations[this.state.nationId].blessE,
      s: this.nations[this.state.nationId].blessS,
      d: this.nations[this.state.nationId].blessD,
      n: this.nations[this.state.nationId].blessN,
      b: this.nations[this.state.nationId].blessB,
    };

    const blessPoints = totalBlessPoints(this.state.path, blessBonuses);

    const filteredPretenderByImprisonment = filterPretendersByImprisonment(this.pretenders, this.nations[this.state.nationId].pretenders, this.state.imprisonment);
    const pretenderRows = filteredPretenderByImprisonment.map(pretenderId => {
      // console.log(pretenderId);
      const pretender = this.pretenders[pretenderId];
      return (
        {
          pretenderId: pretenderId,
          name: pretender.name,
          pointsLeft: pointsLeftWithoutPretenders - magicCost(
                          { F: pretender.F, A: pretender.A, W: pretender.W, E: pretender.E,
                            S: pretender.S, D: pretender.D, N: pretender.N, B: pretender.B,
                          },
                          pretender.pathcost,
                          this.state.path
                        ) - pretender.pointcost - dominionCost(pretender.startdom, this.state.dominion)
                        + (this.nations[this.state.nationId].cheapgods20.includes(pretenderId) ? 20 : 0)
                        + (this.nations[this.state.nationId].cheapgods40.includes(pretenderId) ? 40 : 0),
          dominion: pretender.startdom > this.state.dominion ? pretender.startdom : this.state.dominion,
          f: pretender.F > this.state.path.f ? pretender.F : this.state.path.f,
          a: pretender.A > this.state.path.a ? pretender.A : this.state.path.a,
          w: pretender.W > this.state.path.w ? pretender.W : this.state.path.w,
          e: pretender.E > this.state.path.e ? pretender.E : this.state.path.e,
          s: pretender.S > this.state.path.s ? pretender.S : this.state.path.s,
          d: pretender.D > this.state.path.d ? pretender.D : this.state.path.d,
          n: pretender.N > this.state.path.n ? pretender.N : this.state.path.n,
          b: pretender.B > this.state.path.b ? pretender.B : this.state.path.b,
        }
      );
    }).sort((a, b) => {
      if (a.pointsLeft < b.pointsLeft) {
        return 1;
      }
      if (a.pointsLeft > b.pointsLeft) {
        return -1;
      }
      return 0;
    }).map(data => {
      return (
        <tr key={data.pretenderId} className="pretenders-table__row">
          <td className="pretenders-table__cell pretenders-table__cell--name">{data.name + " "}
	    <span className="pretenders-table__cell--id">{"(id: " + data.pretenderId + ")"}</span>
	  </td>
          <td className="pretenders-table__cell pretenders-table__cell--left">{data.pointsLeft}</td>
          <td className="pretenders-table__cell pretenders-table__cell--dominion">{data.dominion}</td>
          <td className={"pretenders-table__cell" + (data.f > 0 ? " pretenders-table__cell--fire" : ""  ) }>{data.f > 0 ? data.f : ""}</td>
          <td className={"pretenders-table__cell" + (data.a > 0 ? " pretenders-table__cell--air" : ""   ) }>{data.a > 0 ? data.a : ""}</td>
          <td className={"pretenders-table__cell" + (data.w > 0 ? " pretenders-table__cell--water" : "" ) }>{data.w > 0 ? data.w : ""}</td>
          <td className={"pretenders-table__cell" + (data.e > 0 ? " pretenders-table__cell--earth" : "" ) }>{data.e > 0 ? data.e : ""}</td>
          <td className={"pretenders-table__cell" + (data.s > 0 ? " pretenders-table__cell--astral" : "") }>{data.s > 0 ? data.s : ""}</td>
          <td className={"pretenders-table__cell" + (data.d > 0 ? " pretenders-table__cell--death" : "" ) }>{data.d > 0 ? data.d : ""}</td>
          <td className={"pretenders-table__cell" + (data.n > 0 ? " pretenders-table__cell--nature" : "") }>{data.n > 0 ? data.n : ""}</td>
          <td className={"pretenders-table__cell" + (data.b > 0 ? " pretenders-table__cell--blood" : "" ) }>{data.b > 0 ? data.b : ""}</td>
        </tr>
      );
    });

    return (
      <main>
        <div className="form">
          <header className="form__header">Nation</header>
          <div className="form__body form__body--nation">
            <select name="nationId" value={this.state.nationId} onChange={this.changeOption}
              className="nation-picker__select" id="nation-picker__select"
            >
              {nationOptions}
            </select>
            <NationInfo f={this.nations[this.state.nationId].blessF}
              a={this.nations[this.state.nationId].blessA} w={this.nations[this.state.nationId].blessW}
              e={this.nations[this.state.nationId].blessE} s={this.nations[this.state.nationId].blessS}
              d={this.nations[this.state.nationId].blessD} n={this.nations[this.state.nationId].blessN}
              b={this.nations[this.state.nationId].blessB} heat={this.nations[this.state.nationId].heat}
              growth={this.nations[this.state.nationId].growth}
            />
          </div>
        </div>

        <div className="form">
          <header className="form__header">Magic</header>
          <div className="form__body">
            <div className="form__section">
              <div className="value-picker value-picker--magic value-picker--fire">
                <label className="value-picker__label value-picker__label--magic value-picker__label--fire" htmlFor="fire-picker__input">F</label>
                <input type="number" name="f" onChange={this.changePathLevel} min="0" max="10" value={this.state.path.f} id="fire-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--fire"/>
              </div>
              <div className="value-picker value-picker--magic value-picker--air">
                <label className="value-picker__label value-picker__label--magic value-picker__label--air" htmlFor="air-picker__input">A</label>
                <input type="number" name="a" onChange={this.changePathLevel} min="0" max="10" value={this.state.path.a} id="air-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--air" />
              </div>
              <div className="value-picker value-picker--magic value-picker--water">
                <label className="value-picker__label value-picker__label--magic value-picker__label--water" htmlFor="water-picker__input">W</label>
                <input type="number" name="w" onChange={this.changePathLevel} min="0" max="10" value={this.state.path.w} id="water-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--water" />
              </div>
              <div className="value-picker value-picker--magic value-picker--earth">
                <label className="value-picker__label value-picker__label--magic value-picker__label--earth" htmlFor="earth-picker__input">E</label>
                <input type="number" name="e" onChange={this.changePathLevel} min="0" max="10" value={this.state.path.e} id="earth-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--earth" />
              </div>
            </div>
            <div className="form__section">
              <div className="value-picker value-picker--magic value-picker--astral">
                <label className="value-picker__label value-picker__label--magic value-picker__label--astral" htmlFor="astral-picker__input">S</label>
                <input type="number" name="s" onChange={this.changePathLevel} min="0" max="10" value={this.state.path.s} id="astral-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--astral" />
              </div>
              <div className="value-picker value-picker--magic value-picker--death">
                <label className="value-picker__label value-picker__label--magic value-picker__label--death" htmlFor="death-picker__input">D</label>
                <input type="number" name="d" onChange={this.changePathLevel} min="0" max="10" value={this.state.path.d} id="death-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--death" />
              </div>
              <div className="value-picker value-picker--magic value-picker--nature">
                <label className="value-picker__label value-picker__label--magic value-picker__label--nature" htmlFor="nature-picker__input">N</label>
                <input type="number" name="n" onChange={this.changePathLevel} min="0" max="10" value={this.state.path.n} id="nature-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--nature" />
              </div>
              <div className="value-picker value-picker--magic value-picker--blood">
                <label className="value-picker__label value-picker__label--magic value-picker__label--blood" htmlFor="blood-picker__input">B</label>
                <input type="number" name="b" onChange={this.changePathLevel} min="0" max="10" value={this.state.path.b} id="blood-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--blood" />
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <header className="form__header">Bless Effects</header>
          <BlessEffectsWindow
            isOpen={this.state.isBlessEffectsWindowOpen}
            onClose={this.closeBlessEffectsWindow}
            blessEffects={this.blessEffects}
          />
          <div className="form__body form__body--bless_effects">
            <div className="form__section">
              <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--fire">F{blessPoints.f}</div>
              <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--air">A{blessPoints.a}</div>
              <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--water">W{blessPoints.w}</div>
              <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--earth">E{blessPoints.e}</div>
              <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--astral">S{blessPoints.s}</div>
              <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--death">D{blessPoints.d}</div>
              <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--nature">N{blessPoints.n}</div>
              <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--blood">B{blessPoints.b}</div>
            </div>

            <p>
            Available Blesses
            <button className="bless_effects_open_button" onClick={this.openBlessEffectsWindow}>
              Show all bless list
            </button>
            </p>

            <div className="form__section">
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
                <BlessEffectRows effects={filterBlessEffects(this.blessEffects, blessPoints)} />
              </table>
            </div>

          </div>
        </div>

        <div className="form">
          <header className="form__header">Dominion</header>
          <div className="form__body">
            <div className="form__section">
              <div className="value-picker value-picker--dominion">
                <label className="value-picker__label value-picker__label--dominion" htmlFor="dominion-picker__input">Dom</label>
                <input type="number" name="dominion" onChange={this.changeNumber} min="1" max="10" value={this.state.dominion} id="dominion-picker__input" className="value-picker__input value-picker__input--dominion" />
              </div>
            </div>
            <div className="form__body">
              <div className="form__section">
                <div className="value-picker value-picker--scale">
                  <label className="value-picker__label value-picker__label--scale value-picker__label--order" htmlFor="order-picker__input">Ord</label>
                  <input type="number" name="order" onChange={this.changeNumber} min="-3" max="3" value={this.state.order} id="order-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--order" />
                </div>
                <div className="value-picker value-picker--scale">
                  <label className="value-picker__label value-picker__label--scale value-picker__label--productivity" htmlFor="productivity-picker__input">Prd</label>
                  <input type="number" name="productivity" onChange={this.changeNumber} min="-3" max="3" value={this.state.productivity} id="productivity-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--productivity" />
                </div>
                <div className="value-picker value-picker--scale">
                  <label className="value-picker__label value-picker__label--scale value-picker__label--heat" htmlFor="heat-picker__input">Heat</label>
                  <input type="number" name="heat" onChange={this.changeNumber} min="-3" max="3" value={this.state.heat} id="heat-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--heat" />
                </div>
              </div>
              <div className="form__section">
                <div className="value-picker value-picker--scale">
                  <label className="value-picker__label value-picker__label--scale value-picker__label--growth" htmlFor="growth-picker__input">Grw</label>
                  <input type="number" name="growth" onChange={this.changeNumber} min="-3" max="3" value={this.state.growth} id="growth-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--growth" />
                </div>
                <div className="value-picker value-picker--scale">
                  <label className="value-picker__label value-picker__label--scale value-picker__label--fortune" htmlFor="fortune-picker__input">Frt</label>
                  <input type="number" name="fortune" onChange={this.changeNumber} min="-3" max="3" value={this.state.fortune} id="fortune-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--fortune" />
                </div>
                <div className="value-picker value-picker--scale">
                  <label className="value-picker__label value-picker__label--scale value-picker__label--magic" htmlFor="magic-picker__input">Mgc</label>
                  <input type="number" name="magic" onChange={this.changeNumber} min="-3" max="3" value={this.state.magic} id="magic-picker__input" className="value-picker__input value-picker__input--scale value-picker__input--magic" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <header className="form__header">Imprisonment</header>
          <div className="form__body form__body--imprisonment">
            {imprisonmentOptions}

          </div>
        </div>

        <div className="form">
          <header className="form__header">Pretenders</header>
          <table className="pretenders-table" id="pretenders-table">
            <thead className="pretenders-table__head" id="pretenders-table__head">
              <tr className="pretenders-table__row">
                <th className="pretenders-table__header">Name</th>
                <th className="pretenders-table__header">Points left</th>
                <th className="pretenders-table__header">Dominion</th>
                <th className="pretenders-table__header" colSpan="8">Magic</th>
              </tr>
            </thead>
            <tbody className="pretenders-table__body" id="pretenders-table__body">
              {pretenderRows}
            </tbody>
          </table>
        </div>


        <Debug
          nation={this.nations[this.state.nationId].label}
          imprisonment={this.imprisonmentOptions[this.state.imprisonment].label}
          points={pointsLeftWithoutPretenders}
          dominion={this.state.dominion}
          order={this.state.order}
          productivity={this.state.productivity}
          heat={this.state.heat}
          growth={this.state.growth}
          fortune={this.state.fortune}
          magic={this.state.magic}
          noOfPretenders={filteredPretenderByImprisonment.length}
          isBlessEffectsWindowOpen={this.state.isBlessEffectsWindowOpen}
        />


      </main>
    );
  }

}

export default App;
