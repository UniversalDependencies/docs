---
layout: base
title:  'Statistics of goeswith in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `goeswith`

This relation is universal.

2 nodes (0%) are attached to their parents as `goeswith`.

2 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Troubles	trouble	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
2	musculo	musculo	ADJ	_	_	1	amod	_	_
3	squelettiques	squelettique	ADJ	_	Number=Plur	2	goeswith	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	de	de	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tissu	tissu	NOUN	_	Gender=Masc|Number=Sing	2	conj	_	_
8	conjonctif	conjonctif	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
9	et	et	CCONJ	_	_	12	cc	_	_
10	de	de	ADP	_	_	12	case	_	_
11	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	12	det	_	_
12	os	os	NOUN	_	Gender=Masc|Number=Plur	2	conj	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 goeswith	color:blue
1	Traitement	traitement	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	4	case	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	patients	patient	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	atteints	atteindre	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	4	acl	_	_
6	d'	de	ADP	_	_	8	case	_	SpaceAfter=No
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	syndrome	syndrome	NOUN	_	Gender=Masc|Number=Sing	5	obl:agent	_	_
9	coronarien	coronarien	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	_
10	aigu	aigu	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	_
11	(	(	PUNCT	_	_	8	punct	_	SpaceAfter=No
12	angor	angor	NOUN	_	Gender=Masc|Number=Sing	8	appos	_	_
13	instable	instable	ADJ	_	Number=Sing	12	amod	_	_
14	/	ou	CCONJ	_	_	15	cc	_	_
15	infarctus	infarctus	NOUN	_	Gender=Masc|Number=Sing	12	conj	_	_
16	de	de	ADP	_	_	18	case	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	myocarde	myocarde	NOUN	_	Gender=Masc|Number=Sing	15	nmod	_	_
19	sans	sans	ADP	_	_	20	case	_	_
20	sus	sus	NOUN	_	_	15	nmod	_	_
21	décalage	décalage	NOUN	_	Gender=Masc|Number=Sing	20	goeswith	_	_
22	de	de	ADP	_	_	24	case	_	_
23	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	segment	segment	NOUN	_	Gender=Masc|Number=Sing	20	nmod	_	_
25	ST	ST	NOUN	_	_	24	nmod	_	_
26	(	(	PUNCT	_	_	12	punct	_	SpaceAfter=No
27	AI	AI	NOUN	_	_	12	appos	_	_
28	/	/	SYM	_	_	27	dep	_	_
29	IDM	IDM	NOUN	_	_	27	nmod	_	_
30	ST-	ST-	ADJ	_	_	27	amod	_	SpaceAfter=No
31	)	)	PUNCT	_	_	12	punct	_	SpaceAfter=No
32	)	)	PUNCT	_	_	8	punct	_	_
33	devant	devoir	VERB	_	Tense=Pres|VerbForm=Part	4	acl	_	_
34	bénéficier	bénéficier	VERB	_	VerbForm=Inf	33	xcomp	_	_
35	d'	de	ADP	_	_	37	case	_	SpaceAfter=No
36	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	37	det	_	_
37	intervention	intervention	NOUN	_	Gender=Fem|Number=Sing	34	obl:arg	_	_
38	urgente	urgent	ADJ	_	Gender=Fem|Number=Sing	37	amod	_	_
39	ou	ou	CCONJ	_	_	40	cc	_	_
40	précoce	précoce	ADJ	_	Number=Sing	38	conj	_	SpaceAfter=No
41	.	.	PUNCT	_	_	1	punct	_	_

~~~


