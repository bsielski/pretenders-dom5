import React from 'react';
import getNations from '../';

const testingData = [
    {
        nationId: "32",
        // keys
        era: "EA",
        name: "Mekone",
        epithet: "Brazen Giants",
        bless_bonus: {},
        scales: {},
        // length
        numberOfCheapGods: 4,
        numberOfPretenders: 25,
    },
    {
        nationId: "71",
        // keys
        era: "MA",
        name: "Ind",
        epithet: "Magnificent Kingdom of Exalted Virtue",
        bless_bonus: { s: 1 },
        scales: { heat: 1 },
        // length
        numberOfCheapGods: 8,
        numberOfPretenders: 49,
    },
    {
        nationId: "72",
        // keys
        era: "MA",
        name: "Na'Ba",
        epithet: "Queens of the Desert",
        bless_bonus: {},
        scales: { heat: 2 },
        // length
        numberOfCheapGods: 14,
        numberOfPretenders: 73,
    },
];

testingData.forEach(scenario => {
    const {
        nationId,
        name, era, epithet, bless_bonus, scales,
        numberOfCheapGods, numberOfPretenders
    } = scenario;
    const nation = getNations()[nationId];
    test(`Test of nation ${nationId} name`, () => {
        expect(nation.name).toEqual(name);
    });
    test(`Test of nation ${nationId} epithet`, () => {
        expect(nation.epithet).toEqual(epithet);
    });
    test(`Test of nation ${nationId} era`, () => {
        expect(nation.era).toEqual(era);
    });
    test(`Test of nation ${nationId} blessBonus`, () => {
        expect(nation.bless_bonus).toEqual(bless_bonus);
    });
    test(`Test of nation ${nationId} scales`, () => {
        expect(nation.scales).toEqual(scales);
    });
    test(`Test of nation ${nationId} numberOfCheapGods`, () => {
        const cheapGods = Object.keys(nation.cheap_gods)
              .filter(x => nation.pretenders.includes(x));
        expect(cheapGods.length).toEqual(numberOfCheapGods);
    });
    test(`Test of nation ${nationId} numberOfPretenders`, () => {
        expect(nation.pretenders.length).toEqual(numberOfPretenders);
    });
});
