function dryNumber(dry, numbers) {
  return Array.from({ length: numbers }, (_, i) => 1 + i).filter(e =>
    e.toString().includes(dry)
  )
}
