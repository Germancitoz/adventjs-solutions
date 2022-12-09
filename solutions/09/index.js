function countTime(leds) {
  if (leds.every(e => e === 1)) return 0

  const check = (_leds, count = 7) => {
    const temporal = Array.from(_leds).map((e, i) => {
      return _leds[i] == 0 && _leds.at(i - 1) == 1 ? (e = 1) : e
    })

    return temporal.every(e => e === 1) ? count : check(temporal, (count += 7))
  }

  return check(leds)
}
