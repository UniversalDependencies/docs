---
layout: relation
title: 'nsubj:pass'
shortdef: 'passive nominal subject'
udver: '2'
---

In this treatment of Scottish Gaelic, a passive nominal subject is a noun phrase which is the patient in a clause with _rach_ as the auxiliary and which controls the verb contained within the clause. 

The particle _a_ preceding the verbal noun usually has `PartType=Inf` and is marked with `mark:prt` but occasionally it is clearly a possessive pronoun.
In this case this one takes `nsubj:pass` and the word that would usually taken `nsubj:pass` takes `nsubj:outer`.
See the second example below.

### Examples

_chaidh <b>e</b> sin a mhilleadh cho luath 's a thàinig e_

'That <b>one</b> was destroyed as quickly as it came'

~~~ conllu
1	chaidh	rach	AUX	V-s	Tense=Past	5	aux:pass	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	5	nsubj:pass	_	_
3	sin	sin	DET	Dd	_	2	det	_	_
4	a	a	PART	Ug	PartType=Inf	5	mark:prt	_	_
5	mhilleadh	mill	NOUN	Nv	VerbForm=Inf	0	root	_	_
6	cho	cho	ADV	Rg	_	7	advmod	_	_
7	luath	luath	ADV	Rg	_	5	advmod	_	_
8	's	's	CCONJ	Cc	_	10	cc	_	_
9	a	a	PART	Q-r	PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	thàinig	thig	VERB	V-s	Tense=Past	7	conj	_	_
11	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	10	nsubj	_	_
~~~ 

_Chaidh an dithis, nach deach <b>an</b> ainmeachadh fhathast, <b>an</b> toirt gu ospadal ann an Ath Lethinn_

'The pair, who have not been named yet, were taken to hospital in Broadford.'

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
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:10 CET -->
