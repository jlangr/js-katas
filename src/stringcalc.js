// this is pretty bad

const matchOnFirstBracketedExpression = delimiters =>
  /^\[(.*?)\](.*)/.exec(delimiters)

const extractDelimiters = s => {
  const i = s.indexOf('\n')
  const delimiterLine = s.substr(0, i)
  let delimiterSpec = delimiterLine.substr(2)
  const delimiters = []

  if (delimiterSpec[0] !== '[')
    return [[delimiterSpec], s.substr(i + 1)]

  let match
  while ((match = matchOnFirstBracketedExpression(delimiterSpec))) {
    delimiters.push(match[1])
    delimiterSpec = match[2]
  }
  return [delimiters, s.substr(i + 1) ]
}

const allCharsEscaped = s =>
  s.split('').map(c => `\\${c}`).join('')

const alternationGroup = delimiters => delimiters.map(allCharsEscaped).join('|')

const parse = s => {
  let matchOnDelimiters = /[,\n]/
  if (s.startsWith('//')) {
    const [ delimiters, tokens ] = extractDelimiters(s)
    s = tokens
    if (delimiters.length === 1)
      matchOnDelimiters = new RegExp(allCharsEscaped(delimiters[0]))
    else {
      matchOnDelimiters = new RegExp(alternationGroup(delimiters))
    }
  }
  return s.split(matchOnDelimiters)
}

const throwOnNegatives = numbers => {
  const negatives = numbers.filter(n => n < 0)
  if (negatives.length > 0) {
    const negativesList = negatives.join(', ')
    throw new Error(`negatives disallowed: ${negativesList}`)
  }
}

const removeTooLarge = numbers => numbers.filter(n => n <= 1000)

const convertToInt = (tokens) => tokens.map(n => parseInt(n, 10))

export const add = s => {
  const tokens = parse(s)
  let numbers = convertToInt(tokens)
  throwOnNegatives(numbers)
  numbers = removeTooLarge(numbers)
  return numbers.reduce((total, number) => total + number, 0)
}