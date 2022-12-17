function fixLetter(letter) {
  return letter
    .trim()
    .replaceAll('santa', 'Santa') // Espacios al final y inico
    .replaceAll('claus', 'Claus') //Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
    .replaceAll(',', ', ') //Dejar un espacio después de cada coma
    .split('')
    .filter((e, i, a) => {
      const whiteSpaces = e == ' ' && a[i + 1] == ' '
      const commas = e == ' ' && (a[i + 1] == '.' || a[i + 1] == ',')
      const questions = e == '?' && a[i + 1] == '?'

      return !whiteSpaces && !commas && !questions
    })
    .map((e, i, a) => {
      const firstLetterUpperCase =
        i == 0 ||
        a[i - 1] == '.' ||
        a[i - 1] == '?' ||
        a[i - 1] == '!' ||
        (a[i - 2] == '?' && a[i - 1] == ' ') ||
        (a[i - 2] == '!' && a[i - 1] == ' ') ||
        (a[i - 2] == '.' && a[i - 1] == ' ')

      const addPunctuation =
        i == a.length - 1 && e !== '.' && e !== '!' && e !== '?'

      if (firstLetterUpperCase) {
        e = e.toUpperCase()
      }

      if (addPunctuation) {
        e = e + '.'
      }

      return e
    })
    .join('')
}
