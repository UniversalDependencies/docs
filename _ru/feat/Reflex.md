---
layout: feature
title: 'Reflex'
shortdef: 'reflexive'
---

Boolean feature of [pronouns](ru-pos/PRON) or
[determiners](ru-pos/DET). It tells whether the word is reflexive,
i.e. refers to the subject of its clause.

In Russian, reflexive pronouns do not have various functions:

Reflexive object of a verb means that the object is the same entity as the subject:
_Ян купил <b>себе</b> машину&nbsp;_ = “Jan bought <b>himself</b> a car” vs.
_Ян купил ему машину&nbsp;_ = “Jan bought him [someone else] a car”

Reflexive possessives indicate that the subject of the clause is the possessor:

- _Ян продал <b>свою</b> машину.&nbsp;_ “Jan sold <b>his</b> [own] car.”
- _Ян продал его машину.&nbsp;_ “Jan sold his [someone else's] car.”

### `Yes`: it is reflexive

Note that there is no `No` value. If the word is not reflexive, the
`Reflex` feature will just not be mentioned in the `FEAT`
column. (Which means that empty value has the `No` meaning.)

#### Examples

* reflexive personal pronouns: _себя, себе, себя, собой, себе_ (occurs in various cases but not in nominative; does not distinguish [Number]())
* reflexive possessive pronoun: _свой_
<!-- Interlanguage links updated Út zář 29 20:31:38 CEST 2020 -->
