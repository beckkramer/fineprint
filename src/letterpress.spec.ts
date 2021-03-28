
import { tidyLines } from './letterpress'


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
