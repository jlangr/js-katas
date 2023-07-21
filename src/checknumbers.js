const conversions = {0: 'zero', 1: 'one', 2: 'two', 10: 'ten', 16: 'sixteen', 17: 'seventeen'}
const tens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}

export const checkNumber = number => {
  if (number < 20)
    return conversions[number]

  if (number < 100) {
    const digit = Math.floor(number / 10)
    const remaining = number % 10
    return tens[digit] + (remaining > 0 ? '-' + conversions[remaining] : '')
  }

  return 'one hundred'
}
