---
layout: feature
title: 'Reflex'
shortdef: 'reflexive'
udver: '2'
---

Boolean feature of [pronouns](PRON) or
[determiners](DET). It tells whether the word is reflexive,
i.e. refers to the subject of its clause.

In Armenian, reflexive pronouns do not have various functions:

Reflexive object of a verb means that the object is the same entity as the subject:

- _Արմենն <b>իրեն</b> մեքենա է գնել։&nbsp;_ = “Armen bought <b>himself</b> a car.” vs.
- _Արմենը նրան մեքենա է գնել։&nbsp;_ = “Armen bought him [someone else] a car.”

Reflexive possessives indicate that the subject of the clause is the possessor:

- _Արմենը վաճառել է <b>իր</b> մեքենան։&nbsp;_ “Armen sold <b>his</b> [own] car.”
- _Արմենը վաճառել է նրա մեքենան։&nbsp;_ “Armen sold his [someone else's] car.”

### `Yes`: it is reflexive

Note that there is no `No` value. If the word is not reflexive, the
`Reflex` feature will just not be mentioned in the `FEAT`
column. (Which means that empty value has the `No` meaning.)

#### Examples

* reflexive personal pronouns: _իր, իրեն, իրենց_ (occur in various cases but not in nominative and distinguish [Number]())
* reflexive possessive determiners: _իր, իրենց_
<!-- Interlanguage links updated Út zář 29 20:31:38 CEST 2020 -->
