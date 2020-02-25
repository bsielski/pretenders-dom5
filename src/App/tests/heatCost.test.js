import React from 'react';
import heatCost from '../heatCost';

const testingData = [
    // defaultLevel, level, cost
    [  0, -3, -120 ],
    [  0, -2,  -80 ],
    [  0, -1,  -40 ],
    [  0,  0,    0 ],
    [  0,  1,  -40 ],
    [  0,  2,  -80 ],
    [  0,  3, -120 ],
    [ -3, -3,    0 ],
    [ -3, -2,  -40 ],
    [ -3, -1,  -80 ],
    [ -3,  0, -120 ],
    [ -3,  1, -120 ],
    [ -3,  2, -120 ],
    [ -3,  3, -120 ],
    [  2,  2,    0 ],
    [  2,  3,  -40 ],
    [ -2, -2,    0 ],
    [ -2, -3,  -40 ],
];

testingData.forEach(scenario => {
    const [ defaultLevel, level, cost ] = scenario;
    test(`Heat ${level} for ${defaultLevel} gives ${cost}`, () => {
        expect(heatCost(defaultLevel, level)).toEqual(cost);
    });    
});
