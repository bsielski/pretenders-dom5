import React, { Component } from 'react';
import {DebugBar} from './DebugBar';
import {Footer} from './Footer';
import {Nation} from './Nation';
import {Pretenders} from './Pretenders';
import {BlessEffects} from './BlessEffects';
import {Imprisonment} from './Imprisonment';
import {Magic} from './Magic';
import {getPretenders} from './getPretenders';
import {filterPretendersByImprisonment} from './filterPretendersByImprisonment';
import {getNations} from './nations';
import {scalesCost} from './scalesCost';
import {totalBlessPoints} from './blessPoints';
import {getBlessEffects} from './getBlessEffects';
import {VERSION} from './version';

import './App.css';

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

	return (
	    <div className="application_container">
	      <main>

		<div className="columns_container">

		  <div className="column">
		    
		    <Nation
		      nations={this.nations}
		      nationId={this.state.nationId}
		      changeOption={this.changeOption}
		      />
    
		    <Magic
		      changePathLevel={this.changePathLevel}
		      path={this.state.path}
		      />

		    
		    <BlessEffects
		      blessPoints={blessPoints}
		      isBlessEffectsWindowOpen={this.state.isBlessEffectsWindowOpen}
		      blessEffects={this.blessEffects}
		      openBlessEffectsWindow={this.openBlessEffectsWindow}
		      closeBlessEffectsWindow={this.closeBlessEffectsWindow}
		      />

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
		
	    	    <Imprisonment
		      imprisonmentOptions={this.imprisonmentOptions}
		      imprisonment={this.state.imprisonment}
		      changeRadio={this.changeRadio}
		      />

		  </div>

		  <div className="column">

		    <Pretenders
		      filteredPretenderByImprisonment={filteredPretenderByImprisonment}
		      pointsLeftWithoutPretenders={pointsLeftWithoutPretenders}
		      pretenders={this.pretenders}
		      path={this.state.path}
		      dominion={this.state.dominion}
		      nationId={this.state.nationId}
		      nations={this.nations}
		      />
		    
		  </div>
		</div>

	      </main>
	      
	      <Footer
		version={VERSION}
		/>

	      <DebugBar
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

	    </div>	
	);
    }

}

export default App;
