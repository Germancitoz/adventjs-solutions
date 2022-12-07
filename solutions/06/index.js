function createCube(size) {
  let up = '',
    down = ''
  for (let i = 1; i <= size; i++) {
    up = up + '/\\'.repeat(i).padStart(size + i) + '_\\'.repeat(size) + '\n'
    down =
      down +
      '\\/'.repeat(size - (i - 1)).padStart(size + size - (i - 1)) +
      '_/'.repeat(size) +
      '\n'
  }
  return up + down.slice(0, -1)
}
