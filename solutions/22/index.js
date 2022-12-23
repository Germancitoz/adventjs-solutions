function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((e, i) => {
    const first = stepNumbers[i]
    const last = stepNumbers[systemNames.lastIndexOf(e)]
    return first <= last
  })
}
