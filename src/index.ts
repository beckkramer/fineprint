export class Letterpress {
  public tidyLines(string: string) {
    if (typeof string !== 'string') throw new TypeError('Please provide a string.')

    const newString = string.replace(/\s/g, '')
    console.log(newString)
    return newString
  }
}
