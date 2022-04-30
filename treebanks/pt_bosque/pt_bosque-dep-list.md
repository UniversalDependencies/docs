---
layout: base
title:  'Statistics of list in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `list`

This relation is universal.

22 nodes (0%) are attached to their parents as `list`.

22 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.36363636363636.

The following 8 pairs of parts of speech are connected with `list`: <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (5; 23% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (4; 18% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (3; 14% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (3; 14% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (3; 14% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 list	color:blue
1	Tel.	telefone	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	0	root	_	_
2	(011)	(011)	ADP	_	_	1	list	_	_
3	253-1588	253-1588	NUM	_	NumType=Card	1	list	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

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


