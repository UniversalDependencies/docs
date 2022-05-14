---
layout: feature
title: 'Typo'
shortdef: 'is this a misspelled word?'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Indicates an erroneous or typographically unexpected word form. 

Most unexpected spellings are typographical errors (inadvertent on the part of the author). Also unexpected: creatively using special characters or spaces for visual effect; or unusual character encoding.
For transcribed speech, no distinction is made between the original speaker and the transcriber, so a mispronunciation like _shilly_ for _silly_ is also treated like a typo.
This feature can also encompass clear errors in word choice, such as learner errors and dysfluencies (e.g. _lesser_ where _fewer_ is appropriate, or _eats_ instead of _eat_).

Note that "typographically unexpected" is interpreted in the context of the genre. Abbreviations or popular informal spellings are not necessarily unexpected. See [Abbr]().

Superfluous word-internal spaces are addressed using the [goeswith]() relation to connect parts of the word.
[Typo]()`=Yes` should be used with the `goeswith` head (and this is enforced by validation for treebanks that use features).

The correct spelling can be indicated in the MISC column with the `CorrectForm` feature,
as discussed in the [page on typos](https://universaldependencies.org/u/overview/typos.html).

**Capitalization, etc.:**
Cases where an unexpected form of a letter is used within a word—e.g., unexpected capitalization choices—should be handled on a language- and treebank-specific basis. In a social media treebank, for example, it may not be practical to flag all nonstandard capitalization choices as [Typo]()=`Yes` given the wide variability of capitalization in unedited writing.

**Stylistic choices:**
[Typo]()=`Yes` is intended for specifically orthographic unexpectedness, not unexpected word variants in general. If the author is taken to be signaling an intentionally modified pronunciation of a word, inventing a new word, or making a pun, that is not Typo if the unexpectedness is reflected phonologically. 
The optional [Style]() feature may be useful in such cases.
Deliberate, well-established conventions of altering the written forms of words, e.g. censoring profanity with nonalphabetic symbols, should also be considered expressive stylistic choices rather than typographical unexpectedness.

**Extra words:**
For extra or missing words, see the [policy on errors](https://universaldependencies.org/u/overview/typos.html).
A valid word that is superfluous in the sentence and attached as [reparandum]() does not receive [Typo]()`=Yes`.

### <a name="Yes">`Yes`</a>: it is typo

#### Examples

* [en] _<b>Barak</b> Obama_

<!-- Interlanguage links updated So kvě 14 19:02:42 CEST 2022 -->
