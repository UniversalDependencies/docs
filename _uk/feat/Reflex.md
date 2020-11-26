---
layout: feature
title: 'Reflex'
shortdef: 'reflexive'
---

Boolean feature of [pronouns](uk-pos/PRON) or [determiners](uk-pos/DET). It tells whether the word is reflexive, i.e. refers to the subject of its clause. Unlike in Czech, the reciprocal and reflexive meanings in Ukrainian are carried by the special reflexive verbal postfix _*ся_, thus the reflexive pronoun is much less loaded semantically and functionally.

Reflexive pronouns function as reflexive object of a verb, which means that the object is the same entity as the subject:
  _Ігор купив <b>собі</b> машину.&nbsp;_ = “Igor bought <b>himself</b> a car” vs.
  _Ігор купив <b>йому</b> машину.&nbsp;_ = “Igor bought him [someone else] a car”

Reflexive possessives indicate that the subject of the clause is the possessor:

- _Ігор продав <b>свою</b> машину.&nbsp;_ “Igor sold <b>his</b> [own] car.”
- _Ігор продав <b>його</b> машину.&nbsp;_ “Igor sold his [someone else's] car.”

### <a name="Yes">`Yes`</a>: it is reflexive

Note that there is no `No` value. If the word is not reflexive, the `Reflex` feature will just not be mentioned in the `FEAT` column. (Which means that empty value has the `No` meaning.)

#### Examples

* reflexive personal pronouns: _себе, собі, собою, *се, *си, *ся_ (occurs in various cases but not in nominative and vocative; does not distinguish [Number](); the forms with the asterisks are dialectal)
* reflexive possessive pronoun: _свій_

<!-- Interlanguage links updated Čt lis 12 09:43:06 CET 2020 -->
