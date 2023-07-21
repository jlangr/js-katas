const conversions = {0: "zero", 1: "one", 2: "two", 10: "ten", 16: "sixteen", 17: "seventeen"}
export const checkNumber = number => {
    // can be divided by ten?
    // if not < 10
    // if so > tens as prefix, remainder as number

    if (number === 20)
        return "twenty"
    if (number > 20)
        return "twenty-" + conversions[number % 20]

    return conversions[number]
}
