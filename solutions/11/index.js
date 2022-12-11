function getCompleted(part, total) {
  const getSeconds = time => {
    const [hours, minutes, seconds] = time.split(':')
    return Number(hours * 60 ** 2) + Number(minutes * 60) + Number(seconds)
  }

  const MCD = (numerator, denominator) => {
    while (numerator % denominator !== 0) {
      let aux = denominator
      denominator = numerator % denominator
      numerator = aux
    }
    return denominator
  }

  let numerator = getSeconds(part)
  let denominator = getSeconds(total)
  let divisor = MCD(numerator, denominator)

  return `${numerator / divisor}/${denominator / divisor}`
}
