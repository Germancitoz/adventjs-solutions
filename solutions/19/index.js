function sortToys(toys, positions) {
  let sorted = []
  toys.forEach((e, i) => {
    sorted[positions[i]] = e
  })
  return sorted.filter(x => x)
}
