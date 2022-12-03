// eslint-disable-next-line no-undef
distributeGifts = (packOfGifts, reindeers) => {
  const maxWeigth = reindeers.reduce((total, current) => {
    total += current.length * 2
    return total
  }, 0)

  const packWeights = packOfGifts.reduce((total, current) => {
    total += current.length
    return total
  }, 0)

  return Math.floor(maxWeigth / packWeights)
}
