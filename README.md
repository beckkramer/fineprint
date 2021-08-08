# Fine Print
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
import { tidyLines } from 'fineprint';

const originalText = 'An example sentence.';
const formattedText = tidyLines(originalText);

// formattedText:
An example&nbsp;sentence.
```

## pluralContent

Have you ever needed to change labels or verbs on the fly because your dynamic content varies in length? This function will return the appropriate verb and form of your original word.

### Useage:

```
import { pluralContent } from 'fineprint';

const reviewsFromApi = ['This is fine', 'Would buy again']

const newContent = pluralContent({
  count: reviewsFromApi.length,
  word: 'review',
});

// newContent:
{
  verb: 'are',
  word: 'reviews',
}
```

This also supports past tense:

```
import { pluralContent } from 'fineprint';

const errorsFromApi = ['file not found', 'invalid input'];

const newContent = pluralContent({
  count: errorsFromApi.length,
  word: 'error',
});

// newContent:
{
  verb: 'were',
  word: 'errors',
}
```
