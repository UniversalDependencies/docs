---
layout: relation
title: 'nsubj:outer'
shortdef: 'outer nominal passive subject'
udver: '2'
---

In this treatment of Scottish Gaelic, passive subjects in the _rach_ passive construction are marked with `nsubj:pass` but sometimes there may be two of them, one of which is a possessive pronoun immediately before the verbal noun.
Where this happens the possessive pronoun takes `nsubj:pass` and what would usually be the passive subject takes `nsubj:outer`.

### Examples

_Chaidh an dithis, nach deach an ainmeachadh fhathast, an toirt gu ospadal ann an Ath Lethinn_

'The <b>pair</b>, <b>who</b> have not been named yet, were taken to hospital in Broadford.'

~~~ conllu
1	Chaidh	rach	AUX	V-s	Tense=Past	12	aux:pass	_	_
2	an	an	DET	Tdsf	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	dithis	dithis	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	12	nsubj:outer	_	SpaceAfter=No
4	,	,	PUNCT	Fi	_	8	punct	_	_
5	nach	nach	PART	Qnr	PartType=Vb|Polarity=Neg|PronType=Rel	8	nsubj:outer	_	_
6	deach	rach	AUX	V-s--d	Tense=Past	8	aux:pass	_	_
7	an	an	DET	Dp3p	Number=Plur|Person=3|Poss=Yes	8	nsubj:pass	_	_
8	ainmeachadh	ainmich	NOUN	Nv	VerbForm=Inf	3	acl:relcl	_	_
9	fhathast	fhathast	ADV	Rt	_	8	advmod	_	SpaceAfter=No
10	,	,	PUNCT	Fi	_	12	punct	_	_
11	an	an	DET	Dp3p	Number=Plur|Person=3|Poss=Yes	12	nsubj:pass	_	_
12	toirt	toir	NOUN	Nv	VerbForm=Inf	0	root	_	_
13	gu	gu	ADP	Sp	_	14	case	_	_
14	ospadal	ospadal	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	12	obl	_	_
15	an	an	ADP	Sp	_	16	case	_	_
16	Ath	Ath	PROPN	Nt	_	14	nmod	_	_
17	Lethinn	Lethinn	PROPN	Nt	_	16	flat	_	SpaceAfter=No
18	.	.	PUNCT	Fe	_	12	punct	_	_
~~~
<!-- Interlanguage links updated Po lis 14 15:35:35 CET 2022 -->
