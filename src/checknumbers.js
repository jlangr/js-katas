const conversions = {0: "zero", 1: "one", 2: "two", 10: "ten", 16: "sixteen", 17: "seventeen"}
const tens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}
export const checkNumber = number => {
    // can be divided by ten?
    // if not < 10
    // if so > tens as prefix, remainder as number
    if (number >= 20) {
        const digit = Math.floor(number / 10);
        const remaining = number % 10;
        if (remaining === 0) {
            return tens[digit]
        }

        return tens[digit] + '-' + conversions[remaining];
    }

    return conversions[number]
}
