import getNations from '../getNations';
import { defaultTo } from 'ramda';

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

export default getBlessBonus;
