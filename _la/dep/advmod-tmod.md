---
layout: relation
title: 'advmod:tmod'
shortdef: 'temporal adverbial modifier'
udver: '2'
---

This semantical subrelation is used to single out those [adverbial](la-dep/advmod) modifiers that express a temporal reference, usually by means of a particular subclass of words which are marked with [`AdvType=Tim`](la-feat/AdvType) and conventionally annotated as [`ADV`](la-pos/ADV)s.

The kinds of temporal relations expressed (duration, definiteness, and so on) are often readable from the morphological history of the adverbial element (e.g. *hodie* 'today' is a contraction of the ablative phrase *hoc die* 'on this day'), but do not appear to be fully standardised (i.e. there is a variety of synchronically non-predictable forms, like *semper* 'always').

The `tmod` subrelation is also used for [oblique](la-dep/obl-tmod) arguments, which usually consist of nominal phrases: since, in Latin, this appears to be a purely formal distinction with regard to *adverbial* temporal (but also [locative](la-dep/advmod-lmod)) expressions (often derived from nominal forms), the use of `tmod` aims to capture the fundamental unitarity of such constructions.


~~~ sdparse
Huius iudicium omnem severitatem abhorret , et semper citra medium plectens , ultra medium premiando se figit . \n Of-him judgement all severity abhors , and always on-this-side mean punishing , beyond mean with-rewarding himself fixes . 
advcl:tmod(figit,semper)
advcl:tmod(fixes,always)
~~~

'His judgements abhor all severity, for he punishes **ever** on this side the mean, while in rewarding he aims ever beyond the mean.' (*Letters*, UDante) 

<!-- Interlanguage links updated St lis 3 20:58:38 CET 2021 -->
