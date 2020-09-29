---
layout: feature
title: 'Reflex'
shortdef: 'reflexive'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Boolean feature of [pronouns](cs-pos/PRON) or
[determiners](cs-pos/DET). It tells whether the word is reflexive,
i.e. refers to the subject of its clause.

In Czech, reflexive pronouns have various functions:

- Reflexive object of a verb means that the object is the same entity as the subject:
  _Jan <b>si</b> koupil auto&nbsp;_ = “Jan bought <b>himself</b> a car” vs.
  _Jan mu koupil auto&nbsp;_ = “Jan bought him [someone else] a car”
- Reflexive object of a verb in plural may also indicate a reciprocal action.
  This usage of the reflexive pronoun is translated to English as “each other”.
  Unlike e.g. German, Czech does not have a special reciprocal pronoun and the reflexive pronoun is used instead:
  _Jan a Marie <b>se</b> milují&nbsp;_ = “Jan and Mary love <b>each other</b>”
- Reflexive pronoun in a subjectless clause constitutes so-called reflexive passive:
  _To <b>se</b> napíše zítra&nbsp;_ (reflexive passive, the verb is morphologically in active form) vs.
  _To bude napsáno zítra&nbsp;_ (normal passive, with auxiliary finite verb and a passive participle)
  “That will be written tomorrow”
- Some verbs are mandatorily reflexive, i.e. they never occur without the reflexive pronoun.
  The pronoun does not alter the meaning in any way, but without it the sentence would not be grammatical:
  _Jan <b>se směje</b>&nbsp;_ “Jan laughs”

Reflexive possessives indicate that the subject of the clause is the possessor:

- _Jan prodal <b>své</b> auto.&nbsp;_ “Jan sold <b>his</b> [own] car.”
- _Jan prodal jeho auto.&nbsp;_ “Jan sold his [someone else's] car.”

### <a name="Yes">`Yes`</a>: it is possessive

Note that there is no `No` value. If the word is not reflexive, the
`Reflex` feature will just not be mentioned in the `FEAT`
column. (Which means that empty value has the `No` meaning.)

#### Examples

* reflexive personal pronouns: _se, si, sebe, sobě, sebou_ (occurs in various cases but not in nominative and vocative; does not distinguish [Number]())
* reflexive possessive determiner: _svůj_
<!-- Interlanguage links updated Út zář 29 20:31:38 CEST 2020 -->
