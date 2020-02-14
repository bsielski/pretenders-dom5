// import {getPretenders} from './pretenders';
export function filterPretendersByImprisonment(pretenders, pretenderIds, imprisonmentLevel) {
  if (imprisonmentLevel !== 1) {
    return pretenderIds;
  }
  else {
    return pretenderIds.filter(id => {
      return (
        (pretenders[id].minprison === 0)
      );
    });
  }
}

// test
// const pretenders = getPretenders();
// const uttervastId = 2980;
// console.log( "Should be true: " +
//   filterPretendersByImprisonment(pretenders, [2978, 2979, uttervastId], 2).includes(uttervastId)
// );
// console.log( "Should be true: " +
//   filterPretendersByImprisonment(pretenders, [2978, 2979, uttervastId], 3).includes(uttervastId)
// );
// console.log( "Should be false: " +
//   filterPretendersByImprisonment(pretenders, [2978, 2979, uttervastId], 1).includes(uttervastId)
// );
