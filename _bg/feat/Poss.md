---
layout: feature
title: 'Poss'
shortdef: 'possessive'
udver: '2'
---
Poss

Boolean feature of pronouns, determiners or adjectives.  It tells
whether the word is possessive.

While many tagsets would have "possessive" as one of the various
pronoun types, this feature is intentionally separate from
[PronType](), as it is orthogonal to pronominal types. Several of the
pronominal types can be optionally possessive, and adjectives can too.

In BulTreeBank tagset "possessive" is one of the various
pronoun types.

### <a name="Yes">`Yes`</a>: it is possessive

Note that there is no `No` value. If the word is not possessive, the
`Poss` feature will just not be mentioned in the `FEAT` column. (Which
means that empty value has the `No` meaning.)

#### Examples

* [bg] possessive adjectives: майчина любов / _maychina lyubov_ "mother's love"

<!-- Interlanguage links updated St lis 3 20:58:28 CET 2021 -->
