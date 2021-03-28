# letterpress
![npm](https://img.shields.io/npm/v/@beckkramer/letterpress)

![npm bundle size](https://img.shields.io/bundlephobia/min/@beckkramer/letterpress)

A tiny typography utility library



# Methods

## tidyLines

This function prevents [Runts](https://www.herronprinting.com/resources/the-ideas-collection/all-alone-and-misunderstood-widows-orphans-runts-and-rivers/): when a single word wrapping to a new line by itself. This is done by inserting the [HTML entity for a non-breaking space](https://www.w3schools.com/html/html_entities.asp) (`&nbsp;`) in place of the last space.

If there's room for all the words on a given line, there will be no visible effect. Screen readers will treat this character as they would any other space.

*Before*:

```
Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua.
```

*After*:

```
Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore 
magna aliqua.
```

### Useage:

```
const originalText = "An example sentence."
const formattedText = Letterpress.tidyLines(originalText)

// formattedText:
"An example&nbsp;sentence."
```
