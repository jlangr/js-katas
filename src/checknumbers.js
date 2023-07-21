const conversions = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
}
const tens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}

function numbersBetween20and100(number) {
    const digit = Math.floor(number / 10)
    const remaining = number % 10
    return tens[digit] + (remaining > 0 ? '-' + conversions[remaining] : '')
}

export const checkNumber = number => {
    if (number < 20)
        return conversions[number]


    if (number < 100) {
        return numbersBetween20and100(number);
    }

    const remaining = number % 100
    let s = 'one hundred'

    if (remaining > 20) {
        s += ' ' + numbersBetween20and100(remaining);
        return s;
    }

    if (remaining > 0) {
        s += ' ' + conversions[remaining]
    }

    return s
}
