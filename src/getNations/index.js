const nation_pretenders = require('../data/nations_pretenders.json');
const nations = require('../data/nations.json');

nation_pretenders["0"] = [];

nations["0"] = {
    "id": "0",
    "name": "Any nation",
    "era": null,
    "realms": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "cheap_gods": {},
    "pretenders": []
}

function getNations() {
    const anyNationPretenders = [];
    Object.keys(nations).forEach(nationId => {
	let nation = nations[nationId];
        let pretenderIds = nation_pretenders[nationId];
	if ( ! nation.scales ) { nation.scales = {}; }
	if ( ! nation.bless_bonus ) { nation.bless_bonus = {}; }
        nation.pretenders = pretenderIds;
        anyNationPretenders.push(...pretenderIds);
    });

    nations["0"].pretenders = [...new Set(anyNationPretenders)];

    return nations;
};

export default getNations;
