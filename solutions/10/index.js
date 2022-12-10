function checkJump(heights) {
  const left = heights.slice(0, heights.indexOf(Math.max(...heights)))
  const right = heights.slice(heights.indexOf(Math.max(...heights)))

  const isLeft = left.every((e, i) => {
    return typeof left[i + 1] === 'undefined' || e <= left[i + 1]
  })

  const isRight = right.every((e, i) => {
    return typeof right[i + 1] === 'undefined' || e >= right[i + 1]
  })

  return !(left.length < 1 || right.length <= 1) && isLeft && isRight
}
