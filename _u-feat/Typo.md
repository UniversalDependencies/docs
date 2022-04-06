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

Indicates an unexpected typographical rendering of a word. 

Most unexpected spellings are typographical errors (inadvertent on the part of the author). Also unexpected: Creative spellings, e.g. using special characters or spaces for visual effect; or unusual character encoding.

"Unexpected" is interpreted in the context of the genre. Abbreviations or popular informal spellings are not necessarily unexpected. See [Abbr]().

Superfluous word-internal spaces are addressed using the [goeswith]() relation to connect parts of the word.
[Typo]()`=Yes` should be used with the `goeswith` head (and this is enforced by validation for treebanks that use features).

The correct spelling can be indicated in the MISC column with the `CorrectForm` feature,
as discussed in the [page on typos](https://universaldependencies.org/u/overview/typos.html).

**Capitalization, etc.:**
Cases where an unexpected form of a letter is used within a word—e.g., unexpected capitalization choices—should be handled on a language- and script-specific basis. In English treebanks, for example, unexpected capitalization choices do *not* fall under [Typo]()=`Yes` given the wide variability of capitalization in unedited writing.

**Unexpected choices beyond orthography:**
[Typo]()=`Yes` is intended for specifically orthographic unexpectedness, not unexpected word choice in general. If the author is taken to be inventing a new word, making a pun, or using a contextually inappropriate word for reasons other than typographical error, that is not Typo. [Style]()`=Expr` may apply in such cases.


### <a name="Yes">`Yes`</a>: it is typo

#### Examples

* [en] _<b>Barak</b> Obama_

<!-- Interlanguage links updated St lis 3 20:58:31 CET 2021 -->
