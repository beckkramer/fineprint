
import { tidyLines, titleCase } from './finePrint'

describe('tidyLines', () => {

  test('Add a &nbsp; between the last and second-to-last words in the string', () => {
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
