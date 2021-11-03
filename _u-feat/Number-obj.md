---
layout: feature
title: 'Number[obj]'
shortdef: 'number agreement with object'
udver: '2'
---

## Number[obj]

Finite verbs in many Indo-European languages agree in person and [number](u-feat/Number) with their subject.
Some languages in other families are head-marking, which means that the verbal morphology can cross-reference
multiple core arguments, not just the subject. If the cross-reference involves the `Number` of the argument,
we have two layers of `Number` on the verb: `Number[subj]`, and (for transitive verbs) `Number[obj]`.

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

* `Number[abs]` is the number of the absolutive argument of the verb. The corresponding feature in Interset 2.041 is called `absnumber`.
* `Number[erg]` is the number of the ergative argument of the verb. The corresponding feature in Interset 2.041 is called `ergnumber`.
* `Number[dat]` is the number of the dative argument of the verb. The corresponding feature in Interset 2.041 is called `datnumber`.

One may want to use just `Number` instead of `Number[abs]`.
However, there are two issues with that (at least in Basque).
First, the absolutive argument is not always the subject. For transitive verbs, it is the object, so the parallelism with nominative-accusative languages would be weak anyway.
Second, and more important, some Basque finite verbs have additional morphemes of nominal inflection.
Thus their form reflects the person-number agreement with the absolutive argument _(nor)_, and nominal inflection (case, number etc.) at the same time.
Examples: _dena_ (`Number=Sing|Number[abs]=Sing`),
_dituena_ (`Number=Sing|Number[abs]=Plur|Number[erg]=Sing`),
_dugunak_ (`Number=Plur|Number[abs]=Sing|Number[erg]=Plur`),
_direnak_ (`Number=Plur|Number[abs]=Plur`).
So we reserve the `Number` feature for nominal inflection, and the `Number[abs]` feature for agreement.

Note that we also define `Person[abs]` and `Polite[abs]`, although there is no direct conflict for these features.
But it is better to have these features aligned with `Person[erg]`, `Polite[erg]`, `Person[dat]` and `Polite[dat]`.

### <a name="Sing">`Sing`</a>: singular object

Examples: [eu] _<b>d</b>akarki<b>o</b>gu_ `Number[abs]=Sing|Number[dat]=Sing`

### <a name="Dual">`Dual`</a>: dual object

Examples: [wbp] _Nyanyi <b>karnapalangu</b> wawirrijarra._ lit. _see-NONPAST <b>PRES-1SG(SUBJ)-3DU(OBJ)</b> kangaroo-DU(ABS)_ “I see two kangaroos.”

### <a name="Plur">`Plur`</a>: plural object

Examples: [eu] _dakarkio<b>gu</b>_ `Number[erg]=Plur`
<!-- Interlanguage links updated St lis 3 20:58:24 CET 2021 -->
