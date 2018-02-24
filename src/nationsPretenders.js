import {adjustPretenders} from './adjustPretenders';

export function putPretendersToNations(nations, pretenders) {

  const realmsPretenders = {
    1 : [], 2 : [], 3 : [], 4 : [], 5 : [],
    6 : [], 7 : [], 8 : [], 9 : [], 10: [],
  };

  Object.keys(pretenders).forEach(pretenderId => {
    pretenderId = parseInt(pretenderId, 10);
    const pretenderRealms = [];
    if (pretenders[pretenderId]["realm1"]) pretenderRealms.push(pretenders[pretenderId]["realm1"]);
    if (pretenders[pretenderId]["realm2"]) pretenderRealms.push(pretenders[pretenderId]["realm2"]);
    if (pretenders[pretenderId]["realm3"]) pretenderRealms.push(pretenders[pretenderId]["realm3"]);
    pretenderRealms.forEach(realm => {
      // if (realm === 10) {
  		//   realmsPretenders[1].push(pretenderId);
  		//   realmsPretenders[2].push(pretenderId);
  		//   realmsPretenders[3].push(pretenderId);
  		//   realmsPretenders[4].push(pretenderId);
  		//   realmsPretenders[5].push(pretenderId);
  		//   realmsPretenders[6].push(pretenderId);
  		//   realmsPretenders[7].push(pretenderId);
  		//   realmsPretenders[8].push(pretenderId);
  		//   realmsPretenders[10].push(pretenderId);
  		// }
      // else {
        realmsPretenders[realm].push(pretenderId);
  		// }
    });
  });

  Object.keys(nations).forEach(nationId => {
    nations[nationId].realms.forEach(realm => {
      nations[nationId].pretenders = nations[nationId].pretenders.concat(realmsPretenders[realm]);
    });
    nations[nationId].pretenders = Array.from(new Set(nations[nationId].pretenders))
  });

  console.log(nations[17].pretenders)
  adjustPretenders(nations);
  console.log(nations[17].pretenders)

  Object.keys(nations).forEach(nationId => {
    nations[nationId].pretenders = Array.from(new Set(nations[nationId].pretenders))
  });

}
