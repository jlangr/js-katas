import { encode, encodeDigit, removeDuplicates, lastOrPenultimateIfHW } from './soundex'

describe('a soundex encoder', () => {
  it('retains single-letter names', () => {
    expect(encode('B')).toEqual('B000')
  })

  it('encodes consonants', () => {
    expect(encode('Abcd')).toEqual('A123')
  })

  it('ignores vowel-ish letters', () => {
    expect(encode('Aaeiouyhwdcb')).toEqual('A321')
  })

  it('retains only first letter of duplicate encoding run', () => {
    // b, f, p, v all encode to same digit

    // expect(lastOrPenultimateIfHW('Bfpv', 2)).toEqual('f')
    expect(encode('Bfpv')).toEqual('B000')
  })

  it('allows vowels to break up duplicate run', () => {
    // b, f, p, v all encode to same digit
    expect(encode('Bafapav')).toEqual('B111')
  })

  // starting w/ W or H

  it('encodes duplicates separated by h or w once', () => {
    expect(encodeDigit('b')).toEqual(encodeDigit('f'))
    expect(encodeDigit('b')).toEqual(encodeDigit('p'))
    expect(encodeDigit('b')).toEqual(encodeDigit('v'))

    expect(encode('Bhfwphv')).toEqual('B000')
  })

  it('limits to 4 character total', () => {
    expect(encode('Cbcqdlmr')).toEqual('C123')
  })
})