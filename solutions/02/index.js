// eslint-disable-next-line no-undef
countHours = (year, holidays) => {
  return holidays.reduce((accumulator, current) => {
    const date = new Date(`${year}/${current}`)
    const day = date.getDay()
    if (day !== 0 && day !== 6) {
      accumulator += 2
    }
    return accumulator
  }, 0)
}
