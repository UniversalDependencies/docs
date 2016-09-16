---
layout: feature
title: 'AbsErgDatPerson'
shortdef: 'person agreement with absolutive/ergative/dative argument'
---

## Person[abs], Person[erg], Person[dat]

Finite verbs in many Indo-European languages agree in [person](u-feat/Person) and number with their subject.
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

* `Person[abs]` is the person of the absolutive argument of the verb. The corresponding feature in Interset 2.041 is called `absperson`.
* `Person[erg]` is the person of the ergative argument of the verb. The corresponding feature in Interset 2.041 is called `ergperson`.
* `Person[dat]` is the person of the dative argument of the verb. The corresponding feature in Interset 2.041 is called `datperson`.

One may want to use just `Person` instead of `Person[abs]`.
However, there are two issues with that (at least in Basque).
First, the absolutive argument is not always the subject. For transitive verbs, it is the object, so the parallelism with nominative-accusative languages would be weak anyway.
Second, we cannot avoid `Number[abs]` (both `Number` and `Number[abs]` can occur at one word)
and thus we keep `Person[abs]` to demonstrate that it is the same layer of agreement for both the features.

### 1: first person

Examples: [eu] _dakarkio<b>gu</b>_ `Person[erg]=1`

### 2: second person

Examples: [eu] _dakarkio<b>zu</b>_ `Person[erg]=2`

### 3: third person

Examples: [eu] _<b>d</b>akarki<b>o</b>gu_ `Person[abs]=3|Person[dat]=3`
