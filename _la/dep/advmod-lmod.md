---
layout: relation
title: 'advmod:lmod'
shortdef: 'locative adverbial modifier'
udver: '2'
---

This semantical subrelation is used to single out those [adverbial](la-dep/advmod) modifiers that express a spatial reference, usually by means of a particular subclass of words which are marked with [`AdvType=Loc`](la-feat/AdvType) and conventionally annotated as [`ADV`](la-pos/ADV)s.

The kinds of spatial relations expressed (direction, presence or absence of movement, and so on) are often readable from the morphological history of the adverbial element (e.g. *hic* 'here', from an older *heic*, is the locative form of the [determinant](la-pos/DET) *hic* 'this (one)'), but do not appear to be fully standardised (i.e. there is a variety of synchronically non-predictable forms, like *procul* '(far) away').

The `lmod` subrelation is also used for [oblique](la-dep/obl-lmod) arguments, which usually consist of nominal phrases: since, in Latin, this appears to be a purely formal distinction with regard to *adverbial* spatial (but also [temporal](la-dep/advmod-tmod)) expressions (often derived from nominal forms), the use of `lmod` aims to capture the fundamental unitarity of such constructions.


~~~ sdparse
Pars secunda incipit ibi : « Surgit mortalibus per diversas fauces » . \n Part second it-begins there : « it-rises to-mortals for diverse gullets » .
advcl:lmod(incipit,ibi)
advcl:lmod(it-begins,there)
~~~

'The second part begins **thus**: «The lamp of the world rises on mortals by different entrances».'' (*Letters*, UDante) 

* this translation paraphrases the spatial reference of *ibi* 'there' with an expression of manner, 'thus' 