---
layout: base
title:  'Statistics of dep:comp in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-dep.html">dep</a></tt>.

1 nodes (0%) are attached to their parents as `dep:comp`.

1 instances of `dep:comp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 37 dep:comp	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	modifications	modification	NOUN	_	Gender=Fem|Number=Plur	7	nsubj	_	Exponence[Gender]=Inherent
3	proposées	proposer	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	2	acl	_	Status[Tense]=Denom
4	par	par	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Parlement	parlement	NOUN	_	Gender=Masc|Number=Sing	3	obl:agent	_	Exponence[Gender]=Inherent
7	amélioreraient	améliorer	VERB	_	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	surtout	surtout	ADV	_	_	7	advmod	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	possibilités	possibilité	NOUN	_	Gender=Fem|Number=Plur	7	obj	_	Exponence[Gender]=Inherent
11	de	de	ADP	_	_	13	case	_	_
12	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	13	det	_	_
13	sociétés	société	NOUN	_	Gender=Fem|Number=Plur	10	nmod	_	Exponence[Gender]=Inherent
14	de	de	ADP	_	_	15	case	_	_
15	médias	média	NOUN	_	Gender=Masc|Number=Plur	13	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	ayant	avoir	VERB	_	Tense=Pres|VerbForm=Part	13	acl	_	Status[Tense]=Denom
18	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	position	position	NOUN	_	Gender=Fem|Number=Sing	17	obj	_	Exponence[Gender]=Inherent
20	stable	stable	ADJ	_	Gender=Fem|Number=Sing	19	amod	_	Exponence[Gender]=Absent
21	sur	sur	ADP	_	_	23	case	_	_
22	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	23	det	_	_
23	marchés	marché	NOUN	_	Gender=Masc|Number=Plur	17	obl:mod	_	Exponence[Gender]=Inherent|SpaceAfter=No
24	,	,	PUNCT	_	_	26	punct	_	_
25	de	de	ADP	_	_	26	mark	_	_
26	transférer	transférer	VERB	_	VerbForm=Inf	10	acl	_	Subject=Instantiated
27	leurs	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	29	det	_	_
28	vieilles	vieux	ADJ	_	Gender=Fem|Number=Plur	29	amod	_	_
29	parts	part	NOUN	_	Gender=Fem|Number=Plur	26	obj	_	Exponence[Gender]=Inherent
30	de	de	ADP	_	_	31	case	_	_
31	marché	marché	NOUN	_	Gender=Masc|Number=Sing	29	nmod	_	Exponence[Gender]=Inherent
32	de	de	ADP	_	_	33	case	_	_
33	plus	plus	ADV	_	_	29	advmod	_	_
34	de	de	ADP	_	_	36	case	_	_
35	80	80	NUM	_	Number=Plur|NumType=Card	36	nummod	_	Exponence[Number]=Inherent
36	pour	pour	ADP	_	ExtPos=NOUN	33	obl:arg	_	_
37	cent	cent	NUM	_	ExtPos=PROPN|Number=Sing|NumType=Card	36	dep:comp	_	Exponence[Number]=Inherent
38	dans	dans	ADP	_	_	41	case	_	_
39	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	41	det	_	_
40	nouvel	nouveau	ADJ	_	Gender=Masc|Number=Sing	41	amod	_	_
41	environnement	environnement	NOUN	_	Gender=Masc|Number=Sing	26	obl:mod	_	Exponence[Gender]=Inherent
42	à	à	ADP	_	_	44	case	_	_
43	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	44	det	_	Exponence[Gender]=Absent|SpaceAfter=No
44	aide	aide	NOUN	_	Gender=Fem|Number=Sing	26	obl:mod	_	Exponence[Gender]=Inherent
45	d'	de	ADP	_	_	47	case	_	SpaceAfter=No
46	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	47	det	_	_
47	réglementation	réglementation	NOUN	_	Gender=Fem|Number=Sing	44	nmod	_	Exponence[Gender]=Inherent
48	rigide	rigide	ADJ	_	Gender=Fem|Number=Sing	47	amod	_	Exponence[Gender]=Absent
49	et	et	CCONJ	_	_	50	cc	_	_
50	démesurée	démesuré	ADJ	_	Gender=Fem|Number=Sing	48	conj	_	_
51	de	de	ADP	_	_	53	case	_	_
52	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	53	det	_	_
53	droit	droit	NOUN	_	Gender=Masc|Number=Sing	47	nmod	_	Exponence[Gender]=Inherent
54	d'	de	ADP	_	_	55	case	_	SpaceAfter=No
55	auteur	auteur	NOUN	_	Gender=Masc|Number=Sing	53	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
56	.	.	PUNCT	_	_	7	punct	_	_

~~~


