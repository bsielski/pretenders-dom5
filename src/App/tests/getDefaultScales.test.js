import React from 'react';
import getDefaultScales from '../getDefaultScales';

const testingData = [
    // nationId, defaultScales
    // MA Ulm
    [  49, { order:  0, productivity:  0, heat:  0, growth:  0, fortune:  0, magic:  0 } ],
    // LA Mictlan
    [  86, { order:  0, productivity:  0, heat:  1, growth:  0, fortune:  0, magic:  0 } ],
    // EA Abysia
    [  13, { order:  0, productivity:  0, heat:  3, growth:  0, fortune:  0, magic:  0 } ],
    // MA Oceania
    [  76, { order:  0, productivity:  0, heat:  0, growth:  0, fortune:  0, magic:  0 } ],
    // LA Lemuria
    [  82, { order:  0, productivity:  0, heat:  0, growth: -2, fortune:  0, magic:  0 } ],
];

testingData.forEach(scenario => {
    const [ nationId, defaultScales ] = scenario;
    test(`defaultScales for nation ${nationId} is ${defaultScales}`, () => {
        expect(
            getDefaultScales(nationId))
            .toEqual(defaultScales);
    });
});
