import {getPretenders} from './getPretenders';
import {putPretendersToNations} from './nationsPretenders';

function getNations() {
	const nationsData = require('../data/nations.json');
	nationsData["0"] = {
		"id": "0",
		"name": "Any nation",
		"era": null,
		"realms": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		"cheap_gods": {}
	}
	for ( var nation_id of Object.keys(nationsData) ) {
		let nation = nationsData[nation_id];
		if ( ! nation.scales ) { nation.scales = {}; }
		if ( ! nation.bless_bonus ) { nation.bless_bonus = {}; }

	}
	putPretendersToNations(nationsData, getPretenders());
	return nationsData;
};

export default getNations;
