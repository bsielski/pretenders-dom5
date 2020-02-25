import React from 'react';
import scaleCost from '../scaleCost';

const testingData = [
    // defaultLevel, level, cost
    [  0, -3, -120 ],
    [  0, -2,  -80 ],
    [  0, -1,  -40 ],
    [  0,  0,    0 ],
    [  0,  1,   40 ],
    [  0,  2,   80 ],
    [  0,  3,  120 ],
    [ -3, -3,    0 ],
    [ -3, -2,   40 ],
    [ -3, -1,   80 ],
    [ -3,  0,  120 ],
    [ -3,  1,  160 ],
    [ -3,  2,  200 ],
    [ -3,  3,  240 ],
];

testingData.forEach(scenario => {
    const [ defaultLevel, level, cost ] = scenario;
    test(`Scale ${level} for ${defaultLevel} gives ${cost}`, () => {
        expect(scaleCost(defaultLevel, level)).toBe(cost);
    });    
});
