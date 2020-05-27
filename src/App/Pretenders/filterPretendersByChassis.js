export function filterPretendersByChassis(pretenders, pretenderIds, chassis) {
    return pretenderIds.filter(id => {
        return new BaseDoms(chassis).includes(pretenders[id].startdom);
    });
}

class BaseDoms {
    constructor(chassis) {
        this.chassis = chassis;
    }

    includes(startdom) {
        return this.chassis[startdom];
    }
}
