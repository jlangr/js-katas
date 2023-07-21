import {checkNumber} from './checknumbers'

describe('check numbers', () => {
  it('converts 1 to string equivalent', () => {
    expect(checkNumber(1)).toBe('one')
  })

  it('converts 0 to string equivalent', () => {
    expect(checkNumber(0)).toBe('zero')
  })

  it('converts 2 to string equivalent', () => {
    expect(checkNumber(2)).toBe('two')
  })

  it('converts 10 to string equivalent', () => {
    expect(checkNumber(10)).toBe('ten')
  })

  it('converts 16 to string equivalent', () => {
    expect(checkNumber(16)).toBe('sixteen')
  })

  it('converts 17 to string equivalent', () => {
    expect(checkNumber(17)).toBe('seventeen')
  })

})
