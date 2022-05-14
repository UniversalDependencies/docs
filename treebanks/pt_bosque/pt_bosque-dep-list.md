---
layout: base
title:  'Statistics of list in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `list`

This relation is universal.

19 nodes (0%) are attached to their parents as `list`.

19 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 6 pairs of parts of speech are connected with `list`: <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (4; 21% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (4; 21% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (3; 16% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (3; 16% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (3; 16% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 list	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	fazenda	fazenda	NOUN	_	Gender=Fem|Number=Sing	14	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	renas	rena	NOUN	_	Gender=Fem|Number=Plur	2	nmod	_	_
5	Napapiiri	Napapiiri	PROPN	_	Gender=Fem|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	em	em	ADP	_	_	9	case	_	_
8	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	proximidades	proximidade	NOUN	_	Gender=Fem|Number=Plur	14	obl	_	_
10	(	(	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	tel.	telefone	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	9	parataxis	_	_
12	38-4048	38-4048	NUM	_	NumType=Card	11	list	_	SpaceAfter=No
13	)	)	PUNCT	_	_	11	punct	_	_
14	promove	promover	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	jantares	jantar	NOUN	_	Gender=Masc|Number=Plur	14	obj	_	_
16	com	com	ADP	_	_	17	case	_	_
17	carne	carne	NOUN	_	Gender=Fem|Number=Sing	15	nmod	_	_
18	de	de	ADP	_	_	19	case	_	_
19	rena	rena	NOUN	_	Gender=Fem|Number=Sing	17	nmod	_	_
20	e	e	CCONJ	_	_	21	cc	_	_
21	faz	fazer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	conj	_	_
22	exibições	exibição	NOUN	_	Gender=Fem|Number=Plur	21	obj	_	_
23	folclóricas	folclórico	ADJ	_	Gender=Fem|Number=Plur	22	amod	_	SpaceAfter=No
24	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 list	color:blue
1	Pedro	Pedro	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	0	root	_	_
2	Ivo	Ivo	PROPN	_	Number=Sing	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	63	63	NUM	_	NumType=Card	1	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	tel.	telefone	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	1	list	_	_
7	289-3609	289-3609	NUM	_	NumType=Card	6	appos	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 30 list	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	sentido	sentido	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	espero	esperar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
6	que	que	SCONJ	_	_	34	mark	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	interessante	interessante	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	documento	documento	NOUN	_	Gender=Masc|Number=Sing	34	nsubj	_	_
10	de	de	ADP	_	_	11	case	_	_
11	trabalho	trabalho	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
12	de	de	ADP	_	_	14	case	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Conselho	conselho	NOUN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	11	nmod	_	_
15	Pontifício	pontifício	ADJ	_	Gender=Masc|Number=Sing	14	amod	_	_
16	de	de	ADP	_	_	18	case	_	_
17	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	Família	família	NOUN	_	Number=Sing	14	nmod	_	SpaceAfter=No
19	,	,	PUNCT	_	_	21	punct	_	_
20	«	«	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	Evoluções	evolução	NOUN	_	ExtPos=PROPN|Gender=Fem|Number=Plur	9	appos	_	_
22	demográficas	demográfica	ADJ	_	Gender=Fem|Number=Plur	21	amod	_	SpaceAfter=No
23	:	:	PUNCT	_	_	22	punct	_	_
24	dimensões	dimensões	PROPN	_	Number=Sing	21	list	_	_
25	éticas	ética	ADJ	_	Gender=Fem|Number=Sing	24	amod	_	_
26	e	e	CCONJ	_	Number=Sing	27	cc	_	_
27	pastorais	pastoral	ADJ	_	Gender=Fem|Number=Sing	25	conj	_	SpaceAfter=No
28	»	»	PUNCT	_	_	21	punct	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	Lisboa	Lisboa	PROPN	_	Gender=Fem|Number=Sing	21	list	_	SpaceAfter=No
31	,	,	PUNCT	_	_	32	punct	_	_
32	1994	1994	NUM	_	NumType=Card	21	list	_	SpaceAfter=No
33	)	)	PUNCT	_	_	32	punct	_	_
34	leve	levar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
35	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	37	det	_	_
36	grande	grande	ADJ	_	Gender=Fem|Number=Sing	37	amod	_	_
37	volta	volta	NOUN	_	Gender=Fem|Number=Sing	34	obj	_	SpaceAfter=No
38	.	.	PUNCT	_	_	5	punct	_	_

~~~


