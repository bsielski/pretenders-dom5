import getNations from '../nations';
import { defaultTo } from 'ramda';

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

export default getDefaultScales;
