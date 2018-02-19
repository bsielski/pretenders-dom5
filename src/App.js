import React, { Component } from 'react';
import './App.css';

class Debug extends React.Component {
  render() {
    return (
      <section id="debugger">Selected nation is: {this.props.nation}</section>
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
    this.nations = {
      0:   { era: null, label: "Any nation"},
      5:   { era: 0, label: "EA Arcoscephale - Golden Era"},
      6:   { era: 0, label: "EA Ermor - New Faith"},
      7:   { era: 0, label: "EA Ulm - Enigma of Steel"},
      8:   { era: 0, label: "EA Marverni - Time of Druids"},
      9:   { era: 0, label: "EA Sauromatia - Amazon Queens"},
      10:  { era: 0, label: "EA T’ien Ch’i - Spring and Autumn"},
      11:  { era: 0, label: "EA Machaka - Lion Kings"},
      12:  { era: 0, label: "EA Mictlan - Reign of Blood"},
      13:  { era: 0, label: "EA Abysia - Children of Flame"},
      14:  { era: 0, label: "EA Caelum - Eagle Kings"},
      15:  { era: 0, label: "EA C’tis - Lizard Kings"},
      16:  { era: 0, label: "EA Pangaea - Age of Revelry"},
      17:  { era: 0, label: "EA Agartha - Pale Ones"},
      18:  { era: 0, label: "EA Tir na n'Og - Land of the Ever Young"},
      19:  { era: 0, label: "EA Fomoria - The Cursed Ones"},
      20:  { era: 0, label: "EA Vanheim - Age of Vanir"},
      21:  { era: 0, label: "EA Helheim - Dusk and Death"},
      22:  { era: 0, label: "EA Niefelheim - Sons of Winter"},
      24:  { era: 0, label: "EA Rus - Sons of Heaven"},
      25:  { era: 0, label: "EA Kailasa - Rise of the Ape Kings"},
      26:  { era: 0, label: "EA Lanka - Land of Demons"},
      27:  { era: 0, label: "EA Yomi - Oni Kings"},
      28:  { era: 0, label: "EA Hinnom - Sons of the Fallen"},
      29:  { era: 0, label: "EA Ur - The First City"},
      30:  { era: 0, label: "EA Berytos - Phoenix Empire"},
      31:  { era: 0, label: "EA Xibalba - Vigil of the Sun"},
      36:  { era: 0, label: "EA Atlantis - Emergence of the Deep Ones"},
      37:  { era: 0, label: "EA R’lyeh - Time of Aboleths"},
      38:  { era: 0, label: "EA Pelagia - Pearl Kings"},
      39:  { era: 0, label: "EA Oceania - Coming of the Capricorns"},
      40:  { era: 0, label: "EA Therodos - Telkhine Spectre"},
      43:  { era: 1, label: "MA Arcoscephale - The Old Kingdom"},
      44:  { era: 1, label: "MA Ermor - Ashen Empire"},
      45:  { era: 1, label: "MA Sceleria - Reformed Empire"},
      46:  { era: 1, label: "MA Pythium - Emerald Empire"},
      47:  { era: 1, label: "MA Man - Tower of Avalon"},
      48:  { era: 1, label: "MA Eriu - Last of the Tuatha"},
      49:  { era: 1, label: "MA Ulm - Forges of Ulm"},
      50:  { era: 1, label: "MA Marignon - Fiery Justice"},
      51:  { era: 1, label: "MA Mictlan - Reign of the Lawgiver"},
      52:  { era: 1, label: "MA T’ien Ch’i - Imperial Bureaucracy"},
      53:  { era: 1, label: "MA Machaka - Reign of Sorcerors"},
      54:  { era: 1, label: "MA Agartha - Golem Cult"},
      55:  { era: 1, label: "MA Abysia - Blood and Fire"},
      56:  { era: 1, label: "MA Caelum - Reign of the Seraphim"},
      57:  { era: 1, label: "MA C’tis - Miasma"},
      58:  { era: 1, label: "MA Pangaea - Age of Bronze"},
      59:  { era: 1, label: "MA Asphodel - Carrion Woods"},
      60:  { era: 1, label: "MA Vanheim - Arrival of Man"},
      61:  { era: 1, label: "MA Jotunheim - Iron Woods"},
      62:  { era: 1, label: "MA Vanarus - Land of the Chuds"},
      63:  { era: 1, label: "MA Bandar Log - Land of the Apes"},
      64:  { era: 1, label: "MA Shinuyama - Land of the Bakemono"},
      65:  { era: 1, label: "MA Ashdod - Reign of the Anakim"},
      66:  { era: 1, label: "MA Uruk - City States"},
      67:  { era: 1, label: "MA Nazca - Kingdom of the Sun"},
      68:  { era: 1, label: "MA Xibalba - Flooded Caves"},
      73:  { era: 1, label: "MA Atlantis - Kings of the Deep"},
      74:  { era: 1, label: "MA R’lyeh - Fallen Star"},
      75:  { era: 1, label: "MA Pelagia - Triton Kings"},
      76:  { era: 1, label: "MA Oceania - Mermidons"},
      77:  { era: 1, label: "MA Ys - Morgen Queens"},
      80:  { era: 2, label: "LA Arcoscephale - Sibylline Guidance"},
      81:  { era: 2, label: "LA Pythium - Serpent Cult"},
      82:  { era: 2, label: "LA Lemur - Soul Gate"},
      83:  { era: 2, label: "LA Man - Towers of Chelms"},
      84:  { era: 2, label: "LA Ulm - Black Forest"},
      85:  { era: 2, label: "LA Marignon - Conquerors of the Sea"},
      86:  { era: 2, label: "LA Mictlan - Blood and Rain"},
      87:  { era: 2, label: "LA T’ien Ch’i - Barbarian Kings"},
      89:  { era: 2, label: "LA Jomon - Human Daimyos"},
      90:  { era: 2, label: "LA Agartha - Ktonian Dead"},
      91:  { era: 2, label: "LA Abysia - Blood of Humans"},
      92:  { era: 2, label: "LA Caelum - Return of the Raptors"},
      93:  { era: 2, label: "LA C’tis - Desert Tombs"},
      94:  { era: 2, label: "LA Pangaea - New Era"},
      95:  { era: 2, label: "LA Midgård - Age of Men"},
      96:  { era: 2, label: "LA Utgård - Well of Urd"},
      97:  { era: 2, label: "LA Bogarus - Age of Heroes"},
      98:  { era: 2, label: "LA Patala - Reign of the Nagas"},
      99:  { era: 2, label: "LA Gath - Last of the Giants"},
      100: { era: 2, label: "LA Ragha - Dual Kingdom"},
      101: { era: 2, label: "LA Xibalba - Return of the Zotz"},
      106: { era: 2, label: "LA Atlantis - Frozen Sea"},
      107: { era: 2, label: "LA R’lyeh - Dreamlands"},
      108: { era: 2, label: "LA Erytheia - Kingdom of Two Worlds"},
    };
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

    // this.changeNumber = this.changeNumber.bind(this);
    this.changeOption = this.changeOption.bind(this);
  }

  changeOption(event) {
     const target = event.target;
     this.setState({[target.name]: target.value});
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

        <Debug
          nation={this.nations[this.state.nationId].label}
        />

      </main>
    );
        // <div className="form">
        //   <header className="form__header">Magic</header>
        //   <div className="form__body">
        //     <div className="form__section">
        //       <div className="value-picker value-picker--fire">
        //         <label className="value-picker__label value-picker__label--magic value-picker__label--fire" for="fire-picker__input">F</label>
        //         <input type="number" min="0" max="10" value="0" id="fire-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--fire"/>
        //       </div>
        //       <div className="value-picker value-picker--air">
        //         <label className="value-picker__label value-picker__label--magic value-picker__label--air" for="air-picker__input">A</label>
        //         <input type="number" min="0" max="10" value="0" id="air-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--air" />
        //       </div>
        //       <div className="value-picker value-picker--water">
        //         <label className="value-picker__label value-picker__label--magic value-picker__label--water" for="water-picker__input">W</label>
        //         <input type="number" min="0" max="10" value="0" id="water-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--water" />
        //       </div>
        //       <div className="value-picker value-picker--earth">
        //         <label className="value-picker__label value-picker__label--magic value-picker__label--earth" for="earth-picker__input">E</label>
        //         <input type="number" min="0" max="10" value="0" id="earth-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--earth" />
        //       </div>
        //     </div>
        //     <div className="form__section">
        //       <div className="value-picker value-picker--astral">
        //         <label className="value-picker__label value-picker__label--magic value-picker__label--astral" for="astral-picker__input">S</label>
        //         <input type="number" min="0" max="10" value="0" id="astral-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--astral" />
        //       </div>
        //       <div className="value-picker value-picker--death">
        //         <label className="value-picker__label value-picker__label--magic value-picker__label--death" for="death-picker__input">D</label>
        //         <input type="number" min="0" max="10" value="0" id="death-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--death" />
        //       </div>
        //       <div className="value-picker value-picker--nature">
        //         <label className="value-picker__label value-picker__label--magic value-picker__label--nature" for="nature-picker__input">N</label>
        //         <input type="number" min="0" max="10" value="0" id="nature-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--nature" />
        //       </div>
        //       <div className="value-picker value-picker--blood">
        //         <label className="value-picker__label value-picker__label--magic value-picker__label--blood" for="blood-picker__input">B</label>
        //         <input type="number" min="0" max="10" value="0" id="blood-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--blood" />
        //       </div>
        //     </div>
        //   </div>
        //   <div className="form__body form__body--bless-effects">
        //   <p id="bless-effects-morale" className="bless-effects bless-effects--visible bless-effects-morale">Morale + 1</p>
        //   <p id="bless-effects-fire" className="bless-effects bless-effects--fire"></p>
        //   <p id="bless-effects-air" className="bless-effects bless-effects--air"></p>
        //   <p id="bless-effects-water" className="bless-effects bless-effects--water"></p>
        //   <p id="bless-effects-earth" className="bless-effects bless-effects--earth"></p>
        //   <p id="bless-effects-astral" className="bless-effects bless-effects--astral"></p>
        //   <p id="bless-effects-death" className="bless-effects bless-effects--death"></p>
        //   <p id="bless-effects-nature" className="bless-effects bless-effects--nature"></p>
        //   <p id="bless-effects-blood" className="bless-effects bless-effects--blood"></p>
        //   </div>
        // </div>
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
        // <div className="form">
        //   <header className="form__header">Imprisonment</header>
        //   <div className="form__body form__body--imprisonment">
        //     <div className="value-picker value-picker--imprisonment value-picker--imprisonment-checked">
        //       <input type="radio" checked name="imprisonment" value="0" className="value-picker__input value-picker__input--imprisonment" id="awake-picker__input" />
        //       <label className="value-picker__label value-picker__label--imprisonment" for="awake-picker__input">Awake (0 points)</label>
        //     </div>
        //     <div className="value-picker value-picker--imprisonment">
        //       <input type="radio" name="imprisonment" value="150" className="value-picker__input value-picker__input--imprisonment" id="dormant-picker__input" />
        //       <label className="value-picker__label value-picker__label--imprisonment" for="dormant-picker__input">Dormant (gain 150 points)</label>
        //     </div>
        //     <div className="value-picker value-picker--imprisonment">
        //       <input type="radio" name="imprisonment" value="250" className="value-picker__input value-picker__input--imprisonment" id="imprisoned-picker__input" />
        //       <label className="value-picker__label value-picker__label--imprisonment" for="imprisoned-picker__input">Imprisoned (gain 250 points)</label>
        //     </div>
        //   </div>
        // </div>
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
