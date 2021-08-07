import { articles, conjunctions, prepositions } from './wordTypes'

export const tidyLines = (originalString: string) => {
  if (typeof originalString !== 'string') throw new TypeError('Please provide a string.')

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
  if (typeof originalString !== 'string') throw new TypeError('Please provide a string.')

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
