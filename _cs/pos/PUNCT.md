---
layout: postag
title: 'PUNCT'
shortdef: 'punctuation'
udver: '2'
---

### Definition

Punctuation marks are non-alphabetical characters and character groups
used to delimit linguistic units in printed text.

Punctuation is not taken to include logograms such as _$_, _%_, and
_§_, which are instead tagged as [SYM]().

### Examples

- Period: _<b>.</b>_
- Comma: _<b>,</b>_
- Parentheses: _<b>()</b>_

## Diffs

### Prague Dependency Treebank

The PDT texts are from the early 1990s and there are no e-mail addresses.
If they were there, the PDT tokenization rules would break them up on all dots and at signs.
The same holds for telephone numbers. For example,
_tel.: (05) 4321 6014&nbsp;_ is analyzed as eight tokens (`NOUN PUNCT PUNCT PUNCT NUM PUNCT NUM NUM`).

### References

- [Wikipedia](http://en.wikipedia.org/wiki/Punctuation)
<!-- Interlanguage links updated Pá kvě 14 11:08:24 CEST 2021 -->
