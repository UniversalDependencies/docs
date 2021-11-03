---
layout: feature
title: 'Gender[obj]'
shortdef: 'gender agreement with object'
udver: '2'
---

## Gender[obj]

Finite verbs in many Indo-European languages agree in person and number with their subject.
Some languages in other families are head-marking, which means that the verbal morphology can cross-reference
multiple core arguments, not just the subject. If the cross-reference involves the `Gender` of the argument,
we have two layers of `Gender` on the verb: `Gender[subj]`, and (for transitive verbs) `Gender[obj]`.

In Basque (a <a href="http://en.wikipedia.org/wiki/Polypersonal_agreement">polypersonal language</a>),
certain verbs overtly mark agreement with up to three arguments:
one in the absolutive [case](u-feat/Case),
one in ergative and
one in dative.
Thus in _dakarkiogu_ “we bring it to him/her”,
_akar_ is the stem (_ekarri_ = “bring”),
_d_ stands for “it” (absolutive argument is the direct object of transitive verbs),
_ki_ stands for the dative case,
_o_ stands for “he” and
_gu_ stands for “we” (ergative argument is the subject of transitive verbs).

In the informal register, there are also separate forms for masculine and feminine arguments,
although [gender](u-feat/Gender) is otherwise not distinguished in Basque.

* `Gender[erg]` is the gender of the ergative argument of the verb. The corresponding feature in Interset 2.041 is called `erggender`.
* `Gender[dat]` is the gender of the dative argument of the verb. The corresponding feature in Interset 2.041 is called `datgender`.

### <a name="Masc">`Masc`</a>: masculine object

Examples: [eu] _ukan <b>ezak</b>_ “have it” `Gender[erg]=Masc|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=2|Polite[erg]=Inf`
(imperative addressing a man)

### <a name="Fem">`Fem`</a>: feminine object

Examples: [eu] _ukan <b>ezan</b>_ “have it” `Gender[erg]=Fem|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=2|Polite[erg]=Inf`
(imperative addressing a woman)
<!-- Interlanguage links updated St lis 3 20:58:21 CET 2021 -->
