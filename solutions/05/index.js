function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let max = 0

  function backtracking(nums, path) {
    let sum = 0
    path.forEach(item => (sum += item))

    if (sum > max && sum <= maxGifts) {
      max = sum
    }
    nums.forEach((item, index) => {
      path.push(item)
      if (path.length <= maxCities) {
        backtracking(nums.slice(index + 1), path)
      }
      path.pop(item)
    })
  }

  backtracking(giftsCities, [])
  return max
}
