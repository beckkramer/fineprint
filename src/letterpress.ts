export const tidyLines = (string: string) => {
  if (typeof string !== 'string') throw new TypeError('Please provide a string.')

  const stringArray = string.split(' ')

  if (stringArray.length === 1) {
    return string
  }

  const lastWord = stringArray.pop()
  const formattedString = stringArray.join(' ') + '&nbsp;' + lastWord

  return formattedString
}
