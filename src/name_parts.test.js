const last = parts => parts[parts.length - 1]
const first = parts => parts[0]
const middle = parts => parts[1]

const formattedName = name => {
  const parts = name.split(' ')
  if (middle(parts).length === 1) {
    return `${last(parts)}, ${first(parts)} ${middle(parts)}`
  }
  else {
    return `${last(parts)}, ${first(parts)} ${middle(parts).slice(0, 1)}.`
  }
}

const middleInitial = parts => middle(parts).slice(0, 1) + '.'

const formattedName2 = name => {
  const parts = name.split(' ')
  if (middle(parts).length === 1) {
    return `${last(parts)}, ${first(parts)} ${middle(parts)}`
  }
  else {
    return `${last(parts)}, ${first(parts)} ${middleInitial(parts)}`
  }
}

const middleInitial3 = parts => {
  const middleName = middle(parts)
  if (middleName.length === 1) return middleName
  return middleName.slice(0, 1) + '.'
}

const formattedName3 = name => {
  const parts = name.split(' ')
  return `${last(parts)}, ${first(parts)} ${middleInitial3(parts)}`
}

describe('name parts', () => {
  it('verifies formatting middle name', () => {
    expect(formattedName('Harry S Truman')).toEqual('Truman, Harry S')
    expect(formattedName('Rapunzel Bernice Gothel')).toEqual('Gothel, Rapunzel B.')
  })

  it('verifies formatting middle name', () => {
    expect(formattedName2('Harry S Truman')).toEqual('Truman, Harry S')
    expect(formattedName2('Jeffrey John Langr')).toEqual('Langr, Jeffrey J.')
  })

  it('verifies formatting middle name', () => {
    expect(formattedName3('Harry S Truman')).toEqual('Truman, Harry S')
    expect(formattedName3('Jeffrey John Langr')).toEqual('Langr, Jeffrey J.')
  })
})
