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

  it('converts 20 to string equivalent', () => {
    expect(checkNumber(20)).toBe('twenty')
  })

  it('converts 21 to string equivalent', () => {
    expect(checkNumber(21)).toBe('twenty-one')
  })

  it.each([
    [13, 'thirteen'],
    [30, 'thirty'],
    [100, 'one hundred'],
    [101, 'one hundred one'],
    [113, 'one hundred thirteen'],
    [123, 'one hundred twenty-three']
  ])('converts %p expecting %p', (number, result) => {
    expect(checkNumber(number)).toBe(result)
  });
})
