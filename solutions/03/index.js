function distributeGifts(packOfGifts, reindeers) {
  const maxWeigth = reindeers.reduce((total, current) => {
    return (total += current.length * 2)
  }, 0)

  const packWeights = packOfGifts.reduce((total, current) => {
    return (total += current.length)
  }, 0)

  return Math.floor(maxWeigth / packWeights)
}
