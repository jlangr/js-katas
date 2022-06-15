const MaxDigits = 4

export const encodeDigit = c => {
  if (!c) return c
  switch (c.toLowerCase()) {
    case 'b': case 'f': case 'p': case 'v':
      return 1
    case 'c': case 'g': case 'j': case 'k':
    case 'q': case 's': case 'x': case 'z':
      return 2
    case 'd': case 't':
      return 3
    case 'l':
      return 4
    case 'm': case 'n':
      return 5
    case 'r':
      return 6
  }
}

const stringReduce = (s, fn, initialValue) =>
  s.split('').reduce(fn, initialValue).join('')

const encodeDigits = name => name.split('').map(encodeDigit).join('')

export const lastOrPenultimateIfHW = chars => {
  const i = chars.length - 1
  if (chars[i] === 'w' || chars[i] === 'h') {
    return chars[i - 2]
  }
  return chars[i]
}

export const removeDuplicates = name => {
  let lastInterestingChar = name[0]
  const nonDups = [lastInterestingChar]

  for (let i = 1; i < name.length; i++) {
    const curr = name[i]
    if (encodeDigit(curr) !== encodeDigit(lastInterestingChar))
      nonDups.push(curr)
    if (curr !== 'h' && curr !== 'w') lastInterestingChar = curr
  }
  return nonDups.join('')
  //
  // const appendIfNotDuplicate = (chars, current, i) => {
  //   console.log(`${i}: ${current} => ${lastOrPenultimateIfHW(chars)} - ${encodeDigit(current)} - ${encodeDigit(lastOrPenultimateIfHW(chars, i))}`)
  //   const previous = lastOrPenultimateIfHW(chars)
  //   const r = encodeDigit(current) === encodeDigit(previous) ? chars : chars.concat(current)
  //   console.log('   return: ', r)
  //   return r
  // }
  //
  // return stringReduce(name.substr(1), appendIfNotDuplicate, [name[0]])
}

const pad = encoding => {
  // ugh
  const padDigits = MaxDigits - encoding.length
  return padDigits > 0 ? encoding + '0'.repeat(padDigits) : encoding
}

const truncate = encoding => encoding.substr(0, MaxDigits)

const encodeAll = name => name[0] + encodeDigits(name.substr(1))

export const encode = name => {
  console.log('name: ', name)
  name = removeDuplicates(name)
  console.log('removed dups: ', name)
  const encoding = encodeAll(name)
  return encoding.length < MaxDigits ? pad(encoding) : truncate(encoding)
}
