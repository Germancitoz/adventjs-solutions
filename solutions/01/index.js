// eslint-disable-next-line no-undef
wrapping = (gifts) => {
  return gifts.map(
    (gift) =>
      `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(
        gift.length + 2
      )}`
  )
}
