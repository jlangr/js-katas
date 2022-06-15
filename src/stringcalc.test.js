import { add } from './stringcalc'

describe('a string calculator', () => {
  it('can add comma-separated numbers', () => {
    expect(add('1,2')).toEqual(3)
    expect(add('4,5')).toEqual(9)
    expect(add('4,5,6')).toEqual(15)
  })

  it('splits on lines also', () => {
    expect(add('1,2\n3\n4,5,6')).toEqual(21)
  })

  it('allows specifying different delimiters', () => {
    expect(add('//%\n1%2')).toEqual(3)
  })

  it('handles delimiter that is special regex char', () => {
    expect(add('//^\n1^3')).toEqual(4)
  })
  // TODO handles multiple delimiter chars in config

  it('throws on negative numbers', () => {
    expect(() => add('2,-1')).toThrowError(/negatives disallowed: -1/)
    expect(() => add('2,-3,4,-1')).toThrowError(/negatives disallowed: -3, -1/)
  })

  it('ignores numbers greater than 1000', () => {
    expect(add('4,1002,5,6')).toEqual(15)
  })

  it('accepts larger delimiters', () => {
    expect(add('//[==]\n10==8')).toEqual(18)
  })

  it('accepts larger delimiters with special regex char', () => {
    expect(add('//[^^]\n10^^25')).toEqual(35)
  })

  it('accepts multiple delimiters', () => {
    expect(add('//[^^][=][--]\n10^^25--42=3')).toEqual(80)
  })
})