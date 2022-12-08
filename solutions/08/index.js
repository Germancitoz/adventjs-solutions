function checkPart(part) {
  const isPalindrome = str => {
    return str === Array.from(str).reverse().join('')
  }

  return (
    isPalindrome(part) ||
    Array.from(part).some((x, i) => {
      const str = part.substring(0, i) + part.substring(i + 1)
      const is = isPalindrome(str)
      return is
    })
  )
}
