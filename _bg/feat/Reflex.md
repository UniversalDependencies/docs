---
layout: feature
title: 'Reflex'
shortdef: 'reflexive'
udver: '2'
---

Reflex

Boolean feature, typically of [pronouns](u-pos/PRON) or
[determiners](u-pos/DET). It tells whether the word is reflexive,
i.e. refers to the subject of its clause.

In Bulgarian the reflexive feature is not encoded as one of the pronoun types,
but as a reference type (similarly to entity, attribute, possession, etc.)

In Bulgarian there are reflexive verbs - both as form and as meaning. They are written
separately: събуждам се / _sabuzhdam se_ "to wake up".

### <a name="Yes">`Yes`</a>: it is reflexive

Note that there is no `No` value. If the word is not reflexive, the
`Reflex` feature will just not be mentioned in the `FEAT`
column. (Which means that empty value has the `No` meaning.)

#### Examples

* [bg] reflexive personal pronouns: се, си, себе си / _se, si, sebe si_ "oneself"; reflexive possessive
  pronoun: свой / _svoy_ "oneself's".

<!-- Interlanguage links updated Pá kvě 14 11:08:40 CEST 2021 -->
