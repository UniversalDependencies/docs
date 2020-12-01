---
layout: feature
title: 'Poss'
shortdef: 'possessive'
udver: '2'
---

Boolean feature of pronouns, determiners or adjectives.  It tells
whether the word is possessive.

While many tagsets would have “possessive” as one of the various
pronoun types, this feature is intentionally separate from
[PronType](), as it is orthogonal to pronominal types. Several of the
pronominal types can be optionally possessive, and adjectives can too.

### <a name="Yes">`Yes`</a>: it is possessive

Note that there is no `No` value. If the word is not possessive, the
`Poss` feature will just not be mentioned in the `FEAT` column. (Which
means that empty value has the `No` meaning.)

#### Examples

* possessive personal pronouns/determiners: _мой, твой, его, её, наш, ваш, их&nbsp;_ “my, your, his, her, our, your, their”
* possessive reflexive pronoun/determiner: _свой&nbsp;_ “one's own”
* possessive relative pronoun/determiner: _чей&nbsp;_ “whose”
* possessive adjectives: _папин&nbsp;_ “father's”, _мамин&nbsp;_ “mother's”
<!-- Interlanguage links updated Čt lis 12 09:43:05 CET 2020 -->
