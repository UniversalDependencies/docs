---
layout: feature
title: 'AbsErgDatPolite'
shortdef: 'politeness agreement with absolutive/ergative/dative argument'
---

## Polite[abs], Polite[erg], Polite[dat]

Finite verbs in many Indo-European languages agree in person and number with their subject;
for the second person this also affects the politeness register.
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

* `Polite[abs]` is the politeness of the absolutive argument of the verb. The corresponding feature in Interset 2.041 is called `abspoliteness`.
* `Polite[erg]` is the politeness of the ergative argument of the verb. The corresponding feature in Interset 2.041 is called `ergpoliteness`.
* `Polite[dat]` is the politeness of the dative argument of the verb. The corresponding feature in Interset 2.041 is called `datpoliteness`.

One may want to use just `Polite` instead of `Polite[abs]`.
However, there are two issues with that (at least in Basque).
First, the absolutive argument is not always the subject. For transitive verbs, it is the object, so the parallelism with nominative-accusative languages would be weak anyway.
Second, we cannot avoid `Number[abs]` (both `Number` and `Number[abs]` can occur at one word)
and thus we keep `Polite[abs]` to demonstrate that it is the same layer of agreement for both the features.

### Inf: informal

Examples: [eu] _ezan, ezak_ `Polite[erg]=Inf`

### Pol: polite, formal

Examples: [eu] _ezazu_ `Polite[erg]=Pol` (politeness-neutral form is _ezazue_)
