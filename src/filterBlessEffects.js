export function filterBlessEffects(effects, blessPoints) {
  return effects.filter(effect => {

    return (
      (effect.f <= blessPoints.f)
      && (effect.f <= blessPoints.f)
      && (effect.a <= blessPoints.a)
      && (effect.w <= blessPoints.w)
      && (effect.e <= blessPoints.e)
      && (effect.s <= blessPoints.s)
      && (effect.d <= blessPoints.d)
      && (effect.n <= blessPoints.n)
      && (effect.b <= blessPoints.b)
    );
  });
}
