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

Boolean feature, typically of [pronouns](u-pos/PRON) or
[determiners](u-pos/DET). It tells whether the word is reflexive,
i.e. refers to the subject of its clause.

While many tagsets would have "reflexive" as one of the various
pronoun types, this feature is intentionally separate from
[PronType]().
When used with pronouns and determiners, it should be combined
with `PronType=Prs`, regardless whether they really distinguish
the [Person]() feature (in some languages they do, in others they
do not).

Note that while some languages also have reflexive verbs, these are in
fact fused verbs with reflexive pronouns, as in Spanish _despertarse_
or Russian _проснуться_ (both meaning “to wake up”). Thus in these
cases the fused token will be split to two syntactic words, one of
them being a reflexive pronoun.

### <a name="Yes">`Yes`</a>: it is reflexive

Note that there is no `No` value. If the word is not reflexive, the
`Reflex` feature will just not be mentioned in the `FEAT`
column. (Which means that empty value has the `No` meaning.)

#### Examples

* [cs] reflexive personal pronouns: _se, si_; reflexive possessive
  pronoun: _svůj_
