
import { pluralContent, tidyLines, titleCase } from './FinePrint'

describe('pluralContent', () => {
  describe('singular', () => {
    test('returns present tense verb', () => {
      const result = pluralContent({
        count: 1,
        word: 'penguin',
      })

      expect(result.verb).toEqual('is')
      expect(result.word).toEqual('penguin')
    })
    test('returns past tense verb', () => {
      const result = pluralContent({
        count: 1,
        tense: 'past',
        word: 'hazard',
      })

      expect(result.verb).toEqual('was')
      expect(result.word).toEqual('hazard')
    })

  })
  describe('plural', () => {
    test('returns present tense verb and plural word', () => {
      const result = pluralContent({
        count: 15,
        word: 'review',
      })

      expect(result.verb).toEqual('are')
      expect(result.word).toEqual('reviews')
    })
    test('returns past tense verb and plural word', () => {
      const result = pluralContent({
        count: 6,
        tense: 'past',
        word: 'player',
      })

      expect(result.verb).toEqual('were')
      expect(result.word).toEqual('players')
    })
  })
  describe('zero', () => {
    test('returns present tense verb and plural word', () => {
      const result = pluralContent({
        count: 0,
        word: 'incident',
      })

      expect(result.verb).toEqual('are')
      expect(result.word).toEqual('incidents')
    })
    test('returns past tense verb and plural word', () => {
      const result = pluralContent({
        count: 0,
        tense: 'past',
        word: 'error',
      })

      expect(result.verb).toEqual('were')
      expect(result.word).toEqual('errors')
    })
  })
})

describe('tidyLines', () => {

  test('Adds a &nbsp; between the last and second-to-last words in the string', () => {
    const originalString = 'This string contains a full sentence.'
    const formattedString = tidyLines(originalString)
  
    expect(formattedString).toEqual('This string contains a full&nbsp;sentence.')
  })

  test('If there is only one word, do nothing', () => {
    const originalString = 'Lonely'
    const formattedString = tidyLines(originalString)
  
    expect(formattedString.includes('&nbsp;')).toEqual(false)
  })
})

describe('titleCase', () => {

  test('Returns a string in title case', () => {

    const byStyleguideString = 'this string checks for how The styleguides capitalize to see how they do!'

    const chicagoStyleString = titleCase(byStyleguideString)
    expect(chicagoStyleString).toEqual('This String Checks for How the Styleguides Capitalize to See How They Do!')

    const apStyleString = titleCase(byStyleguideString, 'ap')
    expect(apStyleString).toEqual('This String Checks For How The Styleguides Capitalize to See How They Do!')

    const nytStyleString = titleCase(byStyleguideString, 'nyt')
    expect(nytStyleString).toEqual('This String Checks for How the Styleguides Capitalize to See How They Do!')
  })
})
