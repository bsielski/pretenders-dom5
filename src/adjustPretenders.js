import {addPretenders} from './addPretenders';
import {removePretenders} from './removePretenders';

export function adjustPretenders(nations) {
  // console.log(Object.keys(nations));
  addPretenders.forEach(pair => {
    // console.log(pair);
    nations[pair[1].toString()].pretenders.push(pair[0]);
  });

  removePretenders.forEach(pair => {
    console.log(pair);
    const pretenders = nations[pair[1].toString()].pretenders;
    const index = pretenders.indexOf(pair[0]);
    if (index > -1) {
        pretenders.splice(index, 1);
    }
  });
}
