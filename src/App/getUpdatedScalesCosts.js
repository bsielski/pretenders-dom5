import scaleCost from './scaleCost';
import heatCost from './heatCost';

const getUpdatedScalesCosts = (defaultScales, scales) => {
    return {
        order: scaleCost(
            defaultScales.order,
            scales.order
        ),
        productivity: scaleCost(
            defaultScales.productivity,
            scales.productivity
        ),
        heat: heatCost(
            defaultScales.heat,
            scales.heat
        ),
        growth: scaleCost(
            defaultScales.growth,
            scales.growth
        ),
        fortune: scaleCost(
            defaultScales.fortune,
            scales.fortune
        ),
        magic: scaleCost(
            defaultScales.magic,
            scales.magic
        )
    };
};

export default getUpdatedScalesCosts;
