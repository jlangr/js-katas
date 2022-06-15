import {power} from "./power";

describe('power of a number', () => {
  it('is itself when raised to power of 1', () => {
    expect(power(2, 1)).toBe(2)
  })
  it('is multiplied by itself when squared', () => {
    expect(power(2, 2)).toBe(4)
  })
  it('is 1 when raised to 0', () => {
    expect(power(2, 0)).toBe(1)
  })
  it('is multiplied by itself power times otherwise', () => {
    expect(power(3, 4)).toBe(81)
  })

})
