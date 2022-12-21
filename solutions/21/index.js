function printTable(gifts) {
  let nameMax = Math.max(...gifts.map(g => g.name.length), 'Gift'.length)
  let quantityMax = Math.max(
    ...gifts.map(g => g.quantity.toString().length),
    'Quantity'.length
  )

  let large = 7 + nameMax + quantityMax
  let table = `${'+'.repeat(large)}\n| ${'Gift'.padEnd(
    nameMax,
    ' '
  )} | ${'Quantity'.padEnd(quantityMax, ' ')} |\n| ${'-'.repeat(
    nameMax
  )} | ${'-'.repeat(quantityMax)} |`

  gifts.map(e => {
    table += `\n| ${e.name.padEnd(nameMax, ' ')} | ${e.quantity
      .toString()
      .padEnd(quantityMax, ' ')} |`
    return e
  })

  table += `\n${'*'.repeat(large)}`

  return table
}
