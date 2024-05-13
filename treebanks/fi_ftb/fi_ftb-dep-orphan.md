---
layout: base
title:  'Statistics of orphan in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `orphan`

This relation is universal.

2 nodes (0%) are attached to their parents as `orphan`.

2 instances of `orphan` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (1; 50% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 orphan	color:blue
1	Täällä	täällä	ADV	Adv,Dem	PronType=Dem	10	advmod	_	_
2	,	,	PUNCT	Pun	_	1	punct	_	_
3	tänne	tänne	ADV	Adv,Dem	PronType=Dem	5	advmod	_	_
4	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	toisi	tuoda	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
6	koneensa	kone	NOUN	N,Sg,Gen,Px3	Case=Gen|Number=Sing|Person[psor]=3	5	obj	_	_
7	,	,	PUNCT	Pun	_	6	punct	_	_
8	täällä	täällä	ADV	Adv,Dem	PronType=Dem	1	conj	_	_
9	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	olisi	olla	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	5	conj	_	_
11	kahden	kaksi	NUM	Num,Card,Sg,Gen	Case=Gen|Number=Sing|NumType=Card	13	nummod	_	_
12	eristävän	eristää	VERB	V,Act,PcpVa,Sg,Gen	Case=Gen|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	13	acl	_	_
13	oven	ovi	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	10	nmod	_	_
14	päässä	päässä	ADP	Adp	_	13	case	_	_
15	muista	muu	DET	Pron,Qnt,Pl,Ela	Case=Ela|Number=Plur|PronType=Ind	16	det	_	_
16	ihmisistä	ihminen	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	13	nmod	_	_
17	,	,	PUNCT	Pun	_	16	punct	_	_
18	laverin	laveri	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	20	nmod	_	_
19	eteen	eteen	ADP	Adp	_	18	case	_	_
20	mahtuisi	mahtua	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	5	conj	_	_
21	pöytä	pöytä	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	20	nsubj	_	_
22	,	,	PUNCT	Pun	_	21	punct	_	_
23	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	24	orphan	_	_
24	suurensuuri	suurensuuri	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	21	acl	_	_
25	,	,	PUNCT	Pun	_	24	punct	_	_
26	mutta	mutta	CCONJ	Pcle,CC	_	29	cc	_	_
27	kuitenkin	kuitenkin	PART	Pcle	_	29	advmod	_	_
28	niin	niin	PART	Pcle	_	29	advmod	_	_
29	suuri	suuri	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	24	conj	_	_
30	että	että	SCONJ	Pcle,CS	_	33	mark	_	_
31	sen	se	PRON	Pron,Dem,Sg,Gen	Case=Gen|Number=Sing|PronType=Dem	34	nmod	_	_
32	päällä	päällä	ADP	Adp	_	31	case	_	_
33	mahtui	mahtua	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	29	acl	_	_
34	tekemään	tehdä	VERB	V,Act,InfMa,Ill	Case=Ill|InfForm=3|VerbForm=Inf|Voice=Act	33	xcomp	_	Alt=xcomp
35	töitä	työ	NOUN	N,Pl,Par	Case=Par|Number=Plur	34	obj	_	_
36	,	,	PUNCT	Pun	_	35	punct	_	_
37	kun	kun	SCONJ	Pcle,CS	_	38	mark	_	_
38	otti	ottaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	33	advcl	_	_
39	laverin	laveri	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	38	obj	_	_
40	ja	ja	CCONJ	Pcle,CC	_	42	cc	_	_
41	jonkun	joku	DET	Pron,Qnt,Sg,Gen	Case=Gen|Number=Sing|PronType=Ind	42	det	_	_
42	tuolin	tuoli	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	39	conj	_	_
43	avuksi	apu	NOUN	N,Sg,Tra	Case=Tra|Number=Sing	38	nmod	_	_
44	.	.	PUNCT	Pun	_	43	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 orphan	color:blue
1	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	2	orphan	_	_
2	ihmeempää	ihme	NOUN	N,Cmp,Sg,Par	Case=Par|Degree=Cmp|Number=Sing	0	root	_	_

~~~


