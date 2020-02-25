import React from 'react';
import getBlessBonus from '../getBlessBonus';

const testingData = [
    // nationId, blessBonus
    // MA Ulm
    [  49, { f: 0, a: 0, w: 0, e: 0, s: 0, d: 0, n: 0, b: 0 } ],
    // LA Mictlan
    [  86, { f: 0, a: 0, w: 1, e: 0, s: 0, d: 0, n: 0, b: 2 } ],
    // EA Abysia
    [  13, { f: 2, a: 0, w: 0, e: 0, s: 0, d: 0, n: 0, b: 0 } ],
    // MA Oceania
    [  76, { f: 0, a: 0, w: 0, e: 0, s: 0, d: 0, n: 0, b: 0 } ],
];

testingData.forEach(scenario => {
    const [ nationId, blessBonus ] = scenario;
    test(`blessBonus for nation ${nationId} is ${blessBonus}`, () => {
        expect(
            getBlessBonus(nationId))
            .toEqual(blessBonus);
    });
});
