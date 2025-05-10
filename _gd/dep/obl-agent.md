---
layout: relation
title: 'obl:agent'
shortdef: 'passive agent oblique nominal'
udver: '2'
---

The `obl:agent` relation is used for a nominal (noun, pronoun, noun phrase) that specifies the agent in a passive construction using the irregular verb _rach_ and a verbal noun.
They are marked by the adposition _le_.
It works together with `aux:pass`, which relates the irregular verb acting as an auxiliary to the verbal noun and `nsubj:pass` which specifies the passive subject.

### Examples

'The programme was made by Hummingbird, an independent company in Ireland.' (pw07\_022, train):

~~~sdparse
1	Chaidh	rach	AUX	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
2	am	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	prògram	prògram	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	_
4	a	a	PART	Ug	PartType=Inf	5	mark:prt	_	_
5	dhèanamh	dèan	NOUN	Nv	VerbForm=Inf	0	root	_	_
6	le	le	ADP	Sp	_	7	case	_	_
7	Hummingbird	Hummingbird	PROPN	Nn	_	5	obl:agent	_	SpaceAfter=No
8	,	,	PUNCT	Fi	_	9	punct	_	_
9	companaidh	companaidh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	7	appos	_	_
10	neo-eisimeileach	neo-eisimeileach	ADJ	Aq-smn	Case=Nom|Gender=Masc|Number=Sing	9	amod	_	_
11	ann	an	ADP	Sp	ExtPos=ADP	13	case	_	_
12	an	an	ADP	Sp	_	11	fixed	_	_
13	Éirinn	Éirinn	PROPN	Nt	NounType=Top	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Fe	_	5	punct	_	_
~~~


'It will be told to Caledonian MacBrayne by representatives of Western Isles Council at a meeting on Barra tonight' (ns08\_003, dev):

~~~sdparse
1	Thèid	rach	AUX	V-f	Mood=Ind|Tense=Fut|VerbForm=Fin	2	aux:pass	_	_
2	innse	inns	NOUN	Nv	VerbForm=Vnoun	0	root	_	_
3	do	do	ADP	Sp	_	4	case	_	_
4	Chaledonian	Caledonian	PROPN	Nn	_	2	obl	_	_
5	Mac	Mac	PART	Up	PartType=Pat	4	flat:name	_	FlatType=Name
6	a'	an	DET	Tdsmg	_	7	det	_	_
7	Bhruthainn	Bruthainn	PROPN	Nn	Case=Gen	5	nmod	_	_
8	le	le	ADP	Sp	_	9	case	_	_
9	riochdairean	riochdair	NOUN	Ncpmd	Case=Dat|Gender=Masc|Number=Plur	2	obl:agent	_	_
10	Chomhairle	comhairle	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	9	nmod:unmarked	_	_
11	nan	an	DET	Tdpmg	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	Eilean	eil	NOUN	Ncpmg	Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	_
13	aig	aig	ADP	Sp	_	14	case	_	_
14	coinneamh	coinneamh	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	2	obl	_	_
15	am	an	ADP	Sp	_	16	case	_	_
16	Barraigh	Barraigh	PROPN	Nt	NounType=Top	14	nmod	_	_
17	a-nochd	a-nochd	ADV	Rt	AdvType=Tim	14	advmod	_	_
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:57 CEST -->
