---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nouns or clausal predicates.
`nmod` is typically a noun functioning as a non-core (oblique) argument or adjunct, and often marked by a preposition using [case]().

Note that nominal modifiers of verbal nouns use `obl`, `obl:smod` or `obl:tmod` instead.

This is also used in phrases like _sa bhliadhna 1774_ 'in the year 1774' to link the year to the word for year.

~~~conllu
14-15	sa	_	_	_	_	_	_	_	_
14	anns	an	ADP	Sp	_	16	case	_	_
15	an	an	ADP	Sp	_	14	fixed	_	_
16	bhliadhna	bliadhna	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	13	obl	_	_
17	1774	1774	NUM	Mn	_	16	nmod	_	SpaceAfter=No
~~~


### Examples
_tuathanas beag <b>aige</b>

#### _fheudar_

_b' fheudar <b>dhuinn</b> am fàgail_ '<b>we</b> would have to leave them' (c02_001a)

~~~sdparse
b' fheudar dhuinn am fàgail \n AUX would_have to_us their leave
nmod(fheudar, dhuinn)
~~~

#### _fhèin_ 
_Bett <b>fhèin</b> a' ruith suas_ 'Bett <b>himself</b> running up' (s09_017)

~~~sdparse
Bett fhèin a' ruith suas \n Bett himself at running up
nmod(Bett, fhèin)
~~~


<!-- Interlanguage links updated Ne 5. května 2024, 18:21:20 CEST -->
