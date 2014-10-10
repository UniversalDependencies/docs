---
layout: feature
title: 'Reflex'
shortdef: 'reflexive'
---

Boolean feature, typically of [pronouns](u-pos/PRON) or
[determiners](u-pos/DET). It tells whether the word is reflexive,
i.e. refers to the subject of its clause.

While many tagsets would have “reflexive” as one of the various
pronoun types, this feature is intentionally separate from
[PronType](), as it is orthogonal to pronominal types.

Note that while some languages also have reflexive verbs, these are in fact
fused verbs with reflexive pronouns, as in Spanish _despertarse_ or Russian
_проснуться_ (both meaning “to wake up”). Thus in these cases the fused token
will be split to two syntactic words, one of them being a reflexive pronoun.

### Yes: it is reflexive

Note that there is no “No” value. If the word is not reflexive, the
{{ page.title }} feature will just not be mentioned in the FEAT column. (Which
means that empty value has the “No” meaning.) 

Examples: [cs] reflexive personal pronouns: _se, si;_ reflexive possessive pronoun: _svůj_
