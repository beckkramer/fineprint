import { articles, conjunctions, prepositions } from './wordTypes'

type PluralContentInput = {
  count: number
  tense?: 'past' | 'present'
  word: string
}

type Verb = 'is' | 'are' | 'was' | 'were'

type PluralContent = {
  verb: Verb
  word: string
}

export const pluralContent = ({
  count,
  tense = 'present',
  word,
}: PluralContentInput): PluralContent => {

  const content = {
    verb: 'are' as Verb,
    word: word + 's',
  }

  if (tense === 'past') {
    content.verb = 'were'
  }

  if (count === 1) {
    content.verb = tense === 'past' ? 'was' : 'is'
    content.word = word
  }

  return content
}

export const tidyLines = (originalString: string) => {

  const stringArray = originalString.split(' ')

  if (stringArray.length === 1) {
    return originalString
  }

  const lastWord = stringArray.pop()
  const formattedString = stringArray.join(' ') + '&nbsp;' + lastWord

  return formattedString
}

type Styleguide = 'chicago' | 'ap' | 'nyt'

export const titleCase = (originalString: string, styleGuide:Styleguide = 'chicago') => {

  const capitalizeFirstLetter = (textEntry: string) => {
    const stringArray = textEntry.split('')
    const firstLetter = stringArray.shift()?.toUpperCase()

    return firstLetter + stringArray.join('').toLowerCase()
  }

  const stringArray = originalString.split(' ')
  const formattedWords = stringArray.map((entry, index) => {

    // Chicago, NTY, and AP styles capitalize the first and last words
    if (index === 0 || index === stringArray.length - 1) {
      return capitalizeFirstLetter(entry)
    }

    if (styleGuide === 'ap' && entry.length >= 3) {
      return capitalizeFirstLetter(entry)
    }

    if (styleGuide === 'chicago' && entry.length >= 4) {
      return capitalizeFirstLetter(entry)
    }

    if (
      !!articles.includes(entry.toLowerCase())
      || !!conjunctions.includes(entry.toLowerCase())
      || !!prepositions.includes(entry.toLowerCase())
    ) {
      return entry.toLowerCase()
    }

    return capitalizeFirstLetter(entry)
  })

  return formattedWords.join(' ')
}
