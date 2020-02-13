export function getPretenders() {
	let pretenders = require('./data/pretenders.json');
	let costs = require('./data/pretender_costs.json');
	
	for (var pret_id of Object.keys(costs)) {
		if ( costs[pret_id] === null ) {
			delete pretenders[pret_id];
		}
		else if (pretenders[pret_id]) {
			pretenders[pret_id]['pointcost'] = costs[pret_id]['pointcost'];
		}
	}
    return(pretenders);
}

// const prets = getPretenders()
// console.log(
//   prets[2797]
// );
