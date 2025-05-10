---
layout: base
title:  'Statistics of nummod in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nummod`

This relation is universal.

914 nodes (1%) are attached to their parents as `nummod`.

913 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17724288840263.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (911; 100% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	sauf	sauf	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nmod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	Gender=Fem|Number=Sing	10	obl:arg	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	_
2	deux	deux	NUM	_	NumType=Card	3	nummod	_	_
3	premiers	premier	ADJ	_	Gender=Masc|Number=Plur|NumType=Ord	5	nsubj:pass	_	_
4	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	libérés	libérer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	en	en	ADP	_	_	7	case	_	_
7	juin	juin	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	Aurel	Aurel	PROPN	_	Gender=Masc|Number=Sing	5	conj	_	_
10	Cornéa	Cornéa	PROPN	_	_	9	flat:name	_	_
11	en	en	ADP	_	_	12	case	_	_
12	décembre	décembre	NOUN	_	Gender=Masc|Number=Sing	9	orphan	_	_
13	de	de	ADP	_	_	16	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
15	même	même	ADJ	_	Number=Sing	16	amod	_	Gender[ctxt]=Fem
16	année	année	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	_
17	et	et	CCONJ	_	_	18	cc	_	_
18	Jean	Jean	PROPN	_	Gender=Fem|Number=Sing	5	conj	_	_
19	Louis	Louis	PROPN	_	Gender=Masc|Number=Sing	18	flat:name	_	_
20	Normandin	Normandin	PROPN	_	_	18	nmod	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	27	27	NUM	_	NumType=Card	18	orphan	_	_
23	novembre	novembre	NOUN	_	Gender=Masc|Number=Sing	22	nmod	_	_
24	de	de	ADP	_	_	26	case	_	_
25	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	26	det	_	SpaceAfter=No
26	année	année	NOUN	_	Gender=Fem|Number=Sing	23	nmod	_	_
27	suivante	suivant	ADJ	_	Gender=Fem|Number=Sing	26	amod	_	SpaceAfter=No
28	,	,	PUNCT	_	_	22	punct	_	_
29	en	en	ADP	_	_	31	case	_	_
30	même	même	ADJ	_	Number=Sing	31	amod	_	Gender[ctxt]=Masc
31	temps	temps	NOUN	_	Gender=Masc	20	nmod	_	_
32	qu'	que	SCONJ	_	_	35	case	_	SpaceAfter=No
33	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
34	autre	autre	ADJ	_	Number=Sing	35	amod	_	Gender[ctxt]=Masc
35	journaliste	journaliste	NOUN	_	Gender=Masc|Number=Sing	31	nmod	_	SpaceAfter=No
36	,	,	PUNCT	_	_	37	punct	_	_
37	Roger	Roger	PROPN	_	Gender=Masc|Number=Sing	35	appos	_	_
38	Auque	Auque	PROPN	_	_	37	flat:name	_	SpaceAfter=No
39	,	,	PUNCT	_	_	37	punct	_	_
40	enlevé	enlever	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	35	acl	_	_
41	en	en	ADP	_	_	42	case	_	_
42	janvier	janvier	NOUN	_	Gender=Masc|Number=Sing	40	obl:mod	_	_
43	1987	1987	NUM	_	NumType=Card	42	nmod	_	SpaceAfter=No
44	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 35 nummod	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	modifications	modification	NOUN	_	Gender=Fem|Number=Plur	7	nsubj	_	_
3	proposées	proposer	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	2	acl	_	_
4	par	par	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Parlement	parlement	NOUN	_	Gender=Masc|Number=Sing	3	obl:agent	_	_
7	amélioreraient	améliorer	VERB	_	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	surtout	surtout	ADV	_	_	7	advmod	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	possibilités	possibilité	NOUN	_	Gender=Fem|Number=Plur	7	obj	_	_
11	de	de	ADP	_	_	13	case	_	_
12	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	13	det	_	_
13	sociétés	société	NOUN	_	Gender=Fem|Number=Plur	10	nmod	_	_
14	de	de	ADP	_	_	15	case	_	_
15	médias	média	NOUN	_	Gender=Masc|Number=Plur	13	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	ayant	avoir	VERB	_	Tense=Pres|VerbForm=Part	13	acl	_	_
18	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	position	position	NOUN	_	Gender=Fem|Number=Sing	17	obj	_	_
20	stable	stable	ADJ	_	Number=Sing	19	amod	_	Gender[ctxt]=Fem
21	sur	sur	ADP	_	_	23	case	_	_
22	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	23	det	_	_
23	marchés	marché	NOUN	_	Gender=Masc|Number=Plur	17	obl:mod	_	SpaceAfter=No
24	,	,	PUNCT	_	_	26	punct	_	_
25	de	de	ADP	_	_	26	mark	_	_
26	transférer	transférer	VERB	_	VerbForm=Inf	10	acl	_	Subject=Instantiated
27	leurs	son	DET	_	Number=Plur|Poss=Yes	29	det	_	_
28	vieilles	vieux	ADJ	_	Gender=Fem|Number=Plur	29	amod	_	_
29	parts	part	NOUN	_	Number=Plur	26	obj	_	_
30	de	de	ADP	_	_	31	case	_	_
31	marché	marché	NOUN	_	Gender=Masc|Number=Sing	29	nmod	_	_
32	de	de	ADP	_	_	33	case	_	_
33	plus	plus	ADV	_	_	29	advmod	_	_
34	de	de	ADP	_	_	36	case	_	_
35	80	80	NUM	_	NumType=Card	36	nummod	_	_
36	pour	pour	ADP	_	ExtPos=NOUN	33	obj	_	_
37	cent	cent	NUM	_	NumType=Card	36	obj	_	_
38	dans	dans	ADP	_	_	41	case	_	_
39	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	41	det	_	_
40	nouvel	nouveau	ADJ	_	Gender=Masc|Number=Sing	41	amod	_	_
41	environnement	environnement	NOUN	_	Gender=Masc|Number=Sing	26	obl:mod	_	_
42	à	à	ADP	_	_	44	case	_	_
43	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	44	det	_	SpaceAfter=No
44	aide	aide	NOUN	_	Gender=Fem|Number=Sing	26	obl:mod	_	_
45	d'	de	ADP	_	_	47	case	_	SpaceAfter=No
46	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	47	det	_	_
47	réglementation	réglementation	NOUN	_	Gender=Fem|Number=Sing	44	nmod	_	_
48	rigide	rigide	ADJ	_	Number=Sing	47	amod	_	Gender[ctxt]=Fem
49	et	et	CCONJ	_	_	50	cc	_	_
50	démesurée	démesuré	ADJ	_	Gender=Fem|Number=Sing	48	conj	_	_
51	de	de	ADP	_	_	53	case	_	_
52	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	53	det	_	_
53	droit	droit	NOUN	_	Gender=Masc|Number=Sing	47	nmod	_	_
54	d'	de	ADP	_	_	55	case	_	SpaceAfter=No
55	auteur	auteur	NOUN	_	Gender=Masc|Number=Sing	53	nmod	_	SpaceAfter=No
56	.	.	PUNCT	_	_	7	punct	_	_

~~~


