export function putPretendersToNations(nations, pretenders) {
	const nation_pretenders = require('./data/nations_pretenders.json');
	Object.keys(nations).forEach( nationId => {
			nations[nationId].pretenders = nation_pretenders[nationId];
		});
	// Any nation
	nations["0"].pretenders = Object.keys(pretenders);
	// return nation_pretenders;
}
