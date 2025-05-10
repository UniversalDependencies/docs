---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nouns.
`nmod` is typically a noun functioning as a non-core (oblique) argument or adjunct, and marked by either a preposition using [case]() or has `Case=Gen` in the `FEATS` column.
From 2.16 onwards we use [nmod:unmarked]() where there is no preposition and `Case=Nom`.

Note that nominal modifiers of verbal nouns use [obl]() or [obl:unmarked]() instead.


### Examples

#### Using the genitive

* _eachdraidh na <b>Frainge</b>_ 'the history of <b>France</b>' where _na Frainge_ is the genitive form of _an Fhraing_. (fp09\_029)

~~~ sdparse
eachdraidh na Frainge \n history of_the France
det(na, Frainge)
nmod(Frainge, eachdraidh)
~~~

* _a Rìgh <b>Èireann</b>_ 'o King of <b>Ireland</b>' (n02\_006)

~~~ sdparse
a Rìgh Èireann \n o King of_Ireland
case:voc(a, Rìgh)
nmod(Èireann, Rìgh)
~~~

#### Using prepositions
##### _caomh_, _chòir_, _fheudar_, _toil_

_b' fheudar <b>dhuinn</b> am fàgail_ '<b>we</b> would have to leave them' (c02_001a)

~~~sdparse
b' fheudar dhuinn am fàgail
nmod(fheudar, dhuinn)
cop(b', fheudar)
csubj:cop(fàgail, fheudar)
~~~

* _b' fheudar do <b>Shir</b> Iain tilleadh a Mhuile_ '<b>Sir</b> Iain had to return to Mull' (fp03\_022, test)

~~~ sdparse
b' fheudar do Shir Iain tilleadh a Mhuile \n COP must to Sir Iain return to Mull
cop(b', fheudar)
obl(Shir, fheudar)
flat:name(Iain, Shir)
csubj:cop(tilleadh, fheudar)
case(a, Mhuile)
obl(Mhuile, tilleadh)
~~~

##### In general

* _tuathanas beag <b>aige</b>_ '<b>his</b> small farm' where _aige_ is a multiword token that breaks up into the preposition _aig_ and the pronoun _e_

~~~ sdparse
tuathanas beag aige \n farm small at_him
amod(beag, tuathanas)
case(aig, e)
nmod(e, tuathanas)
~~~


<!-- Interlanguage links updated So 10. května 2025, 18:15:41 CEST -->
