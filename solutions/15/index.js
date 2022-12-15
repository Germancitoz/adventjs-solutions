function decorateTree(base) {
  const tree = [base]
  const formula = {
    'P P': 'P',
    'B P': 'R',
    'P B': 'R',
    'R P': 'B',
    'P R': 'B',
    'B R': 'P',
    'R B': 'P',
    'B B': 'B',
    'R R': 'R'
  }

  function check(x) {
    if (x.split(' ').length == 1) {
      return tree
    }

    let xx = ''
    x.split(' ').forEach((letter, i, a) => {
      const xss = letter + ' ' + a[i + 1]
      const word = formula[xss]
      if (word) {
        xx += word + ' '
      }
    })

    tree.push(xx.trim())

    return check(xx.trim())
  }

  return check(tree[0]).reverse()
}
