import {toWords} from './numberconverter'

describe('a number converter', () => {
  it('converts 0 to zero', () => {
    expect(toWords(0)).toBe('zero')
  })

  test('single_digit', () => {
    expect(toWords(1)).toBe('one')
    // Uncomment other lines after getting the initial test to pass
    // expect(toWords(9)).toBe("nine");
  })

  test('special_case_two_digit', () => {
    expect(toWords(10)).toBe('ten')
    // expect(toWords(19)).toBe("nineteen");
  })

  test('multiples_of_ten', () => {
    expect(toWords(20)).toBe('twenty')
    // expect(toWords(90)).toBe("ninety");
  })

  // Add more test cases as needed for thorough testing.
})
