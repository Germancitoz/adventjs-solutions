function executeCommands(commands) {
  let records = Array.from({ length: 8 }).fill(0)

  const getIndexFromRef = ref => Number(ref.at(-1))
  const checkOverflow = val => {
    if (val > 255) {
      return val - 256
    }

    if (val < 0) {
      return 254 - val
    }

    return val
  }

  const functions = {
    MOV: (value, ref) => {
      let nValue = Number(value)
      if (value.startsWith('V')) {
        nValue = records[getIndexFromRef(value)]
      }
      records[getIndexFromRef(ref)] = checkOverflow(nValue)
    },
    ADD: (refx, refy) => {
      return (records[getIndexFromRef(refx)] += checkOverflow(
        records[getIndexFromRef(refy)]
      ))
    },
    DEC: ref => {
      return (records[getIndexFromRef(ref)] = checkOverflow(
        records[getIndexFromRef(ref)] - 1
      ))
    },
    INC: ref => {
      return (records[getIndexFromRef(ref)] = checkOverflow(
        records[getIndexFromRef(ref)] + 1
      ))
    },
    JMP: (s, t) => {
      const z = commands.slice(s, t)
      while (records[0] !== 0) {
        z.forEach(zz => {
          const x = zz.split(' ')
          const fun = x[0]
          const [value, ref] = x[1].split(',')
          functions[fun](value, ref)
        })
      }
      return
    }
  }

  commands.forEach((cmd, i) => {
    const x = cmd.split(' ')
    const command = x[0]
    const [value, ref] = x[1].split(',')
    return functions[command](value, ref || i)
  })

  return records
}
