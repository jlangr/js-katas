import {checkNumber} from './checknumbers'

describe('check numbers', () => {
  it.each([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen']
  ])('converts %p expecting %p for numbers < 20', (number, result) => {
    expect(checkNumber(number)).toBe(result)
  });


  it.each([
    [13, 'thirteen'],
    [30, 'thirty'],
    [100, 'one hundred'],
    [101, 'one hundred one'],
    [113, 'one hundred thirteen'],
    [123, 'one hundred twenty-three'],
    [254, 'two hundred fifty-four']
  ])('converts %p expecting %p > 10', (number, result) => {
    expect(checkNumber(number)).toBe(result)
  });
})
