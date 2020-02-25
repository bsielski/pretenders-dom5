import React from 'react';
import getUpdatedScalesCosts from '../getUpdatedScalesCosts';

const testingData = [
    // defaultScales, scales, scalesCosts
    [
        { order:    0, productivity:    0, heat:    0, growth:    0, fortune:    0, magic:    0 },
        { order:    1, productivity:    2, heat:    3, growth:    3, fortune:    2, magic:    1 },
        { order:   40, productivity:   80, heat: -120, growth:  120, fortune:   80, magic:   40 },
    ],
    [
        { order:    0, productivity:    0, heat:    0, growth:    0, fortune:    0, magic:    0 },
        { order:   -2, productivity:   -3, heat:   -1, growth:   -2, fortune:   -3, magic:   -1 },
        { order:  -80, productivity: -120, heat:  -40, growth:  -80, fortune: -120, magic:  -40 },
    ],
    [
        { order:    0, productivity:   -1, heat:    3, growth:   -3, fortune:    1, magic:    0 },
        { order:   -2, productivity:   -3, heat:   -3, growth:   -2, fortune:    2, magic:    0 },
        { order:  -80, productivity:  -80, heat: -120, growth:   40, fortune:   40, magic:    0 },
    ],
];

testingData.forEach(scenario => {
    const [ defaultScales, scales, scalesCosts ] = scenario;
    test(`Cost ${scales} for ${defaultScales} gives ${scalesCosts}`, () => {
        expect(
            getUpdatedScalesCosts(defaultScales, scales))
            .toEqual(
                scalesCosts
            );
    });
});
