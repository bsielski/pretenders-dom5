import { getNations } from './nations';
import { defaultTo, inc, dec } from 'ramda';

const getDefaultScales = (nationId) => {
    const scales = defaultTo(
        {},
        getNations()[nationId].scales
    );
    const order = defaultTo(0, scales.order);
    const productivity = defaultTo(0, scales.productivity);
    const heat = defaultTo(0, scales.heat);
    const growth = defaultTo(0, scales.growth);
    const fortune = defaultTo(0, scales.fortune);
    const magic = defaultTo(0, scales.magic);
    return {
        order, productivity, heat,
        growth, fortune, magic
    };
};

const getBlessBonus = (nationId) => {
    const bonus = defaultTo(
        {},
        getNations()[nationId].bless_bonus
    );
    const f = defaultTo(0, bonus.f);
    const a = defaultTo(0, bonus.a);
    const w = defaultTo(0, bonus.w);
    const e = defaultTo(0, bonus.e);
    const s = defaultTo(0, bonus.s);
    const d = defaultTo(0, bonus.d);
    const n = defaultTo(0, bonus.n);
    const b = defaultTo(0, bonus.b);
    return { f, a, w, e, s, d, n, b };
};

const CHANGE_NATION = "CHANGE_NATION";
const RESET_ALL_POINTS = "RESET_ALL_POINTS";

const INCREASE_FIRE = "INCREASE_FIRE";
const DECREASE_FIRE = "DECREASE_FIRE";
const INCREASE_AIR = "INCREASE_AIR";
const DECREASE_AIR = "DECREASE_AIR";
const INCREASE_WATER = "INCREASE_WATER";
const DECREASE_WATER = "DECREASE_WATER";
const INCREASE_EARTH = "INCREASE_EARTH";
const DECREASE_EARTH = "DECREASE_EARTH";
const INCREASE_ASTRAL = "INCREASE_ASTRAL";
const DECREASE_ASTRAL = "DECREASE_ASTRAL";
const INCREASE_DEATH = "INCREASE_DEATH";
const DECREASE_DEATH = "DECREASE_DEATH";
const INCREASE_NATURE = "INCREASE_NATURE";
const DECREASE_NATURE = "DECREASE_NATURE";
const INCREASE_BLOOD = "INCREASE_BLOOD";
const DECREASE_BLOOD = "DECREASE_BLOOD";
const RESET_MAGIC_POINTS = "RESET_MAGIC_POINTS";

const INCREASE_DOMINION = "INCREASE_DOMINION";
const DECREASE_DOMINION = "DECREASE_DOMINION";
const INCREASE_ORDER = "INCREASE_ORDER";
const DECREASE_ORDER = "DECREASE_ORDER";
const INCREASE_PRODUCTIVITY = "INCREASE_PRODUCTIVITY";
const DECREASE_PRODUCTIVITY = "DECREASE_PRODUCTIVITY";
const INCREASE_HEAT = "INCREASE_HEAT";
const DECREASE_HEAT = "DECREASE_HEAT";
const INCREASE_GROWTH = "INCREASE_GROWTH";
const DECREASE_GROWTH = "DECREASE_GROWTH";
const INCREASE_FORTUNE = "INCREASE_FORTUNE";
const DECREASE_FORTUNE = "DECREASE_FORTUNE";
const INCREASE_MAGIC = "INCREASE_MAGIC";
const DECREASE_MAGIC = "DECREASE_MAGIC";
const RESET_SCALES_POINTS = "RESET_SCALES_POINTS";

const CHANGE_IMPRISONMENT = "CHANGE_IMPRISONMENT";

const SHOW_BLESS_LIST = "SHOW_BLESS_LIST";
const CLOSE_BLESS_LIST = "CLOSE_BLESS_LIST";

export const initialState = {
    nationId: 0,
    defaultScales: {
        order: 0, productivity: 0, heat: 0,
        growth: 0, fortune: 0, magic: 0,
    },
    blessBonus: {
        f: 0, a: 0, w: 0, e: 0,
        s: 0, d: 0, n: 0, b: 0,
    },
    f: 0, a: 0, w: 0, e: 0,
    s: 0, d: 0, n: 0, b: 0,
    dominion: 1,
    order: 0,
    productivity: 0,
    heat: 0,
    growth: 0,
    fortune: 0,
    magic: 0,
    imprisonment: 1,
    isBlessEffectsWindowOpen: false,
};

export function reducer(state, action) {
    switch (action.type) {
    case CHANGE_NATION:
        const id = action.payload.id;
        return {
            ...state,
            nationId: id,
            defaultScales: getDefaultScales(id),
            blessBonus: getBlessBonus(id)
        };
    case RESET_ALL_POINTS:
        const defaultScales = getDefaultScales(state.nationId);
        return {
            ...state,
            defaultScales,
            f: 0, a: 0, w: 0, e: 0,
            s: 0, d: 0, n: 0, b: 0,
            dominion: 1,
            ...getDefaultScales(state.nationId),
            imprisonment: 1,
        };
    case INCREASE_FIRE:
        return { ...state, f: inc(state.f) };
    case DECREASE_FIRE:
        return { ...state, f: dec(state.f) };
    case INCREASE_AIR:
        return { ...state, a: inc(state.a) };
    case DECREASE_AIR:
        return { ...state, a: dec(state.a) };
    case INCREASE_WATER:
        return { ...state, w: inc(state.w) };
    case DECREASE_WATER:
        return { ...state, w: dec(state.w) };
    case INCREASE_EARTH:
        return { ...state, e: inc(state.e) };
    case DECREASE_EARTH:
        return { ...state, e: dec(state.e) };
    case INCREASE_ASTRAL:
        return { ...state, s: inc(state.s) };
    case DECREASE_ASTRAL:
        return { ...state, s: dec(state.s) };
    case INCREASE_DEATH:
        return { ...state, d: inc(state.d) };
    case DECREASE_DEATH:
        return { ...state, d: dec(state.d) };
    case INCREASE_NATURE:
        return { ...state, n: inc(state.n) };
    case DECREASE_NATURE:
        return { ...state, n: dec(state.n) };
    case INCREASE_BLOOD:
        return { ...state, b: inc(state.b) };
    case DECREASE_BLOOD:
        return { ...state, b: dec(state.b) };
    case RESET_MAGIC_POINTS:
        return {
            ...state,
            f: 0, a: 0, w: 0, e: 0,
            s: 0, d: 0, n: 0, b: 0,
        };
    case INCREASE_DOMINION:
        return { ...state, dominion: inc(state.dominion) };
    case DECREASE_DOMINION:
        return { ...state, dominion: dec(state.dominion) };
    case INCREASE_ORDER:
        return { ...state, order: inc(state.order) };
    case DECREASE_ORDER:
        return { ...state, order: dec(state.order) };
    case INCREASE_PRODUCTIVITY:
        return { ...state, productivity: inc(state.productivity) };
    case DECREASE_PRODUCTIVITY:
        return { ...state, productivity: dec(state.productivity) };
    case INCREASE_HEAT:
        return { ...state, heat: inc(state.heat) };
    case DECREASE_HEAT:
        return { ...state, heat: dec(state.heat) };
    case INCREASE_GROWTH:
        return { ...state, growth: inc(state.growth) };
    case DECREASE_GROWTH:
        return { ...state, growth: dec(state.growth) };
    case INCREASE_FORTUNE:
        return { ...state, fortune: inc(state.fortune) };
    case DECREASE_FORTUNE:
        return { ...state, fortune: dec(state.fortune) };
    case INCREASE_MAGIC:
        return { ...state, magic: inc(state.magic) };
    case DECREASE_MAGIC:
        return { ...state, magic: dec(state.magic) };
    case RESET_SCALES_POINTS:
        // const defaultScales = getDefaultScales(state.nationId);
        return {
            ...state,
            defaultScales: getDefaultScales(state.nationId),
            dominion: 1,
            ...getDefaultScales(state.nationId),
        };
    case CHANGE_IMPRISONMENT:
        const level = action.payload.level;
        return {
            ...state,
            imprisonment: parseInt(level, 10)
        };
    case SHOW_BLESS_LIST:
        return {
            ...state,
            isBlessEffectsWindowOpen: true
        };
    case CLOSE_BLESS_LIST:
        return {
            ...state,
            isBlessEffectsWindowOpen: false
        };
    default:
        return initialState;
    }
}

