---
layout: feature
title: 'Poss'
shortdef: 'possessive'
---

Boolean feature of pronouns, determiners or adjectives.  It tells
whether the word is possessive.

While many tagsets would have "possessive" as one of the various
pronoun types, this feature is intentionally separate from
[PronType](), as it is orthogonal to pronominal types. Several of the
pronominal types can be optionally possessive, and adjectives can too.

### `Yes`: it is possessive

Note that there is no `No` value. If the word is not possessive, the
`Poss` feature will just not be mentioned in the `FEAT` column. (Which
means that empty value has the `No` meaning.)

#### Examples

* [en] _my, your, his, mine, yours, whose_ 
* [cs] possessive adjectives: _otcův_ "father's", _matčin_ "mother's"
