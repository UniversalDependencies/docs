---
layout: base
title:  'Statistics of iobj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_gsd-dep-iobj-agent.html">iobj:agent</a></tt>.

3 nodes (0%) are attached to their parents as `iobj`.

3 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (2; 67% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 iobj	color:blue
1	Même	même	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	wordform=même
2	affiche	affiche	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	que	que	SCONJ	_	_	4	mark	_	_
4	lors	lors	ADV	_	_	1	iobj	_	_
5	de	de	ADP	_	_	7	case	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Finale	finale	NOUN	_	Gender=Fem|Number=Sing	4	obl:arg	_	wordform=finale
8	de	de	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	championnat	championnat	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
11	d'	de	ADP	_	_	12	case	_	SpaceAfter=No
12	Europe	Europe	PROPN	_	_	10	nmod	_	_
13	de	de	ADP	_	_	14	case	_	_
14	football	football	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
15	2008	2008	NUM	_	Number=Plur	10	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 57 iobj	color:blue
1	En	en	ADP	_	_	4	case	_	wordform=en
2	d'	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	4	det	_	SpaceAfter=No
3	autres	autre	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
4	termes	terme	NOUN	_	Gender=Masc|Number=Plur	21	obl:mod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	notre	son	DET	_	Number=Sing|PossNumber=Plur|PossPerson=1|PronType=Prs	7	det	_	_
7	balance	balance	NOUN	_	Gender=Fem|Number=Sing	21	nsubj	_	_
8	commerciale	commercial	ADJ	_	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	dont	dont	PRON	_	PronType=Rel	12	nmod	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	déficit	déficit	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
13	devrait	devoir	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	_
14	atteindre	atteindre	VERB	_	VerbForm=Inf	13	xcomp:obj	_	_
15	75	75	NUM	_	Number=Plur	16	nummod	_	_
16	milliards	milliard	NOUN	_	Gender=Masc|Number=Plur	14	obj	_	_
17	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	18	det	_	_
18	année	année	NOUN	_	Gender=Fem|Number=Sing	14	obl:mod	_	SpaceAfter=No
19	,	,	PUNCT	_	_	13	punct	_	_
20	ne	ne	ADV	_	Polarity=Neg	21	advmod	_	_
21	pourra	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
22	espérer	espérer	VERB	_	VerbForm=Inf	21	xcomp:obj	_	_
23	se	se	PRON	_	Person=3|PronType=Prs	24	expl:pass	_	_
24	rééquilibrer	rééquilibrer	VERB	_	VerbForm=Inf	22	xcomp:obj	_	_
25	que	que	ADV	_	_	35	advmod	_	_
26	si	si	SCONJ	_	_	35	mark	_	_
27	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	28	det	_	SpaceAfter=No
28	Europe	Europe	PROPN	_	Gender=Fem|Number=Sing	35	nsubj	_	_
29	«	«	PUNCT	_	_	32	punct	_	_
30	trop	trop	ADV	_	_	31	advmod	_	_
31	peu	peu	ADV	_	_	32	advmod	_	_
32	protectrice	protecteur	ADJ	_	Gender=Fem|Number=Sing	28	amod	_	_
33	»	»	PUNCT	_	_	32	punct	_	_
34	se	se	PRON	_	Person=3|PronType=Prs	35	dep:comp	_	_
35	bat	battre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	advcl	_	_
36	pour	pour	ADP	_	_	37	mark	_	_
37	obtenir	obtenir	VERB	_	VerbForm=Inf	35	advcl	_	_
38	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	40	det	_	_
39	mêmes	même	ADJ	_	Gender=Fem|Number=Plur	40	amod	_	_
40	règles	règle	NOUN	_	Gender=Fem|Number=Plur	37	obj	_	_
41	de	de	ADP	_	_	43	case	_	_
42	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	43	det	_	_
43	jeu	jeu	NOUN	_	Gender=Masc|Number=Sing	40	nmod	_	_
44	pour	pour	ADP	_	_	46	case	_	_
45	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	46	det	_	_
46	entreprises	entreprise	NOUN	_	Gender=Fem|Number=Plur	40	nmod	_	_
47	qui	qui	PRON	_	PronType=Rel	48	nsubj	_	_
48	importent	importer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	46	acl:relcl	_	_
49	leurs	son	DET	_	Number=Plur|PossNumber=Plur|PossPerson=3|PronType=Prs	50	det	_	_
50	produits	produit	NOUN	_	Gender=Masc|Number=Plur	48	obj	_	_
51	sur	sur	ADP	_	_	54	case	_	_
52	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	54	det	_	_
53	Vieux	vieux	ADJ	_	Gender=Masc	54	amod	_	wordform=vieux
54	Continent	continent	NOUN	_	Gender=Masc|Number=Sing	50	nmod	_	wordform=continent
55	que	que	SCONJ	_	_	57	mark	_	_
56	pour	pour	ADP	_	_	57	case	_	_
57	celles	celui	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Dem	39	iobj	_	_
58	qui	qui	PRON	_	PronType=Rel	59	nsubj	_	_
59	cherchent	chercher	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	57	acl:relcl	_	_
60	à	à	ADP	_	_	61	mark	_	_
61	exporter	exporter	VERB	_	VerbForm=Inf	59	xcomp:obl	_	_
62	vers	vers	ADP	_	_	65	case	_	_
63	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	65	det	_	_
64	nouveaux	nouveau	ADJ	_	Gender=Masc|Number=Plur	65	amod	_	_
65	marchés	marché	NOUN	_	Gender=Masc|Number=Plur	61	obl:mod	_	SpaceAfter=No
66	.	.	PUNCT	_	_	21	punct	_	_

~~~


