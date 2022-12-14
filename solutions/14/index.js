function getOptimalPath(path) {
  const res = path.reverse().reduce((previous, current) => {
    return current.map((value, index) => {
      return value + Math.min(previous[index], previous[index + 1])
    })
  })
  return res[0]
}
