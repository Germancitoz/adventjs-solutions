function getFilesToBackup(lastBackup, changes) {
  return Array.from(
    new Set(
      changes
        .filter(([id, backup]) => backup > lastBackup)
        .map(([id]) => id)
        .sort((a, b) => a - b)
    )
  )
}
