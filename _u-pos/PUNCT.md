---
layout: postag
title: 'PUNCT'
shortdef: 'punctuation'
udver: '2'
---

### Definition

Punctuation marks are non-alphabetical characters and character groups
used in many languages to delimit linguistic units in printed text.

Punctuation is not taken to include logograms such as _$_, _%_, and
_§_, which are instead tagged as [SYM](). (Hint: if it corresponds
to a word that you pronounce, such as _dollar_ or _percent_,
it is `SYM` and not `PUNCT`.)

Spoken corpora contain symbols representing pauses, laughter and other
sounds; we treat them as punctuation, too. In these cases it is even
not required that all characters of the token are non-alphabetical.
One can represent a pause using a special character such as _#_,
or using some more descriptive coding such as _[:pause]_.

### Examples

- Period: _<b>.</b>_
- Comma: _<b>,</b>_
- Parentheses: _<b>()</b>_
 
### References

- [Wikipedia](http://en.wikipedia.org/wiki/Punctuation)
