---
layout: base
title:  'Statistics of dep in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep`

This relation is universal.

86 nodes (0%) are attached to their parents as `dep`.

84 instances of `dep` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04651162790698.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PART.html">PART</a></tt> (84; 98% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	Va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	-t	t	PART	_	_	3	dep	_	SpaceAfter=No
3	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	_
4	se	se	PRON	_	Person=3|PronType=Prs	5	expl:pass	_	_
5	circonscrire	circonscrire	VERB	_	VerbForm=Inf	1	xcomp	_	_
6	à	à	ADP	_	_	9	case	_	_
7	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
8	seule	seul	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	_
9	matière	matière	NOUN	_	Gender=Fem|Number=Sing	5	obl:arg	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 dep	color:blue
1	Engelbert	Engelbert	PROPN	_	_	23	nsubj	_	_
2	Zaschka	Zaschka	PROPN	_	_	1	flat:name	_	_
3	(	(	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	1er	1er	NUM	_	_	1	nmod	_	_
5	septembre	septembre	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
6	1895	1895	NUM	_	_	5	nmod	_	_
7	à	à	ADP	_	_	8	case	_	_
8	Fribourg-en-Brisgau	Fribourg-en-Brisgau	PROPN	_	_	4	dep	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	Allemagne	Allemagne	PROPN	_	_	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	et	et	CCONJ	_	_	13	cc	_	_
13	mort	mourir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	conj	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	26	26	NUM	_	_	13	obl:arg	_	_
16	juin	juin	NOUN	_	Gender=Masc|Number=Sing	15	nmod	_	_
17	1955	1955	NUM	_	_	16	nmod	_	_
18	à	à	ADP	_	_	19	case	_	_
19	Fribourg-en-Brisgau	Fribourg-en-Brisgau	PROPN	_	_	13	obl:arg	_	SpaceAfter=No
20	)	)	PUNCT	_	_	4	punct	_	_
21	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	23	cop	_	_
22	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	pionnier	pionnier	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
24	allemand	allemand	ADJ	_	Gender=Masc|Number=Sing	23	amod	_	_
25	de	de	ADP	_	_	27	case	_	_
26	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	SpaceAfter=No
27	aéronautique	aéronautique	NOUN	_	Gender=Fem|Number=Sing	23	nmod	_	SpaceAfter=No
28	.	.	PUNCT	_	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 dep	color:blue
1	Selon	selon	ADP	_	_	2	case	_	_
2	Elie	Elie	PROPN	_	_	7	obl:mod	_	_
3	Wiesel	Wiesel	PROPN	_	_	2	flat:name	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	Jérôme	Jérôme	PROPN	_	_	7	nsubj	_	_
6	Lindon	Lindon	PROPN	_	_	5	flat:name	_	_
7	eut	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	raison	raison	NOUN	_	Gender=Fem|Number=Sing	7	obj:lvc	_	_
9	d'	de	ADP	_	_	10	mark	_	SpaceAfter=No
10	effectuer	effectuer	VERB	_	VerbForm=Inf	7	xcomp	_	_
11	ces	ce	DET	_	Gender=Masc|Number=Plur|PronType=Dem	12	det	_	_
12	raccourcissements	raccourcissement	NOUN	_	Gender=Masc|Number=Plur	10	obj	_	_
13	et	et	CCONJ	_	_	14	cc	_	_
14	remaniements	remaniement	NOUN	_	Gender=Masc|Number=Plur	12	conj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	lui-même	lui-même	PRON	_	Gender=Masc|Number=Sing|Person=3|Reflex=Yes	18	obl:mod	_	_
17	«	«	PUNCT	_	_	18	punct	_	_
18	redout	redouter	VERB	_	Tense=Pres|VerbForm=Part	7	advcl	_	SpaceAfter=No
19	[	[	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	ant	ant	X	_	_	18	dep	_	SpaceAfter=No
21	]	]	PUNCT	_	_	20	punct	_	_
22	tout	tout	DET	_	Gender=Masc|Number=Sing	23	det	_	_
23	ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	18	obj	_	_
24	qui	qui	PRON	_	PronType=Rel	25	nsubj	_	_
25	pouvait	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	23	acl:relcl	_	_
26	paraître	paraître	VERB	_	VerbForm=Inf	25	xcomp	_	_
27	superflu	superflu	ADJ	_	Gender=Masc|Number=Sing	26	xcomp	_	_
28	»	»	PUNCT	_	_	18	punct	_	_
29	:	:	PUNCT	_	_	34	punct	_	_
30	«	«	PUNCT	_	_	34	punct	_	_
31	raconter	raconter	VERB	_	VerbForm=Inf	34	csubj	_	_
32	trop	trop	ADV	_	_	31	advmod	_	_
33	m'	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	34	iobj	_	SpaceAfter=No
34	effrayait	effrayer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	parataxis	_	_
35	plus	plus	ADV	_	_	34	advmod	_	_
36	que	que	SCONJ	_	_	38	mark	_	_
37	de	de	ADP	_	_	38	mark	_	_
38	dire	dire	VERB	_	VerbForm=Inf	35	ccomp	_	_
39	moins	moins	ADV	_	_	38	advmod	_	_
40	»	»	PUNCT	_	_	34	punct	_	SpaceAfter=No
41	,	,	PUNCT	_	_	42	punct	_	_
42	expliquerait	expliquer	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	parataxis	_	SpaceAfter=No
43	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	42	nsubj	_	_
44	dans	dans	ADP	_	_	46	case	_	_
45	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	46	det	_	_
46	préface	préface	NOUN	_	Gender=Fem|Number=Sing	42	obl:mod	_	_
47	à	à	ADP	_	_	49	case	_	_
48	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	49	det	_	SpaceAfter=No
49	édition	édition	NOUN	_	Gender=Fem|Number=Sing	46	nmod	_	_
50	américaine	américain	ADJ	_	Gender=Fem|Number=Sing	49	amod	_	_
51	de	de	ADP	_	_	53	case	_	_
52	La	La	DET	_	_	53	det	_	_
53	Nuit	Nuit	PROPN	_	_	49	nmod	_	_
54	(	(	PUNCT	_	_	55	punct	_	SpaceAfter=No
55	2006	2006	NUM	_	_	49	nmod	_	SpaceAfter=No
56	)	)	PUNCT	_	_	55	punct	_	SpaceAfter=No
57	.	.	PUNCT	_	_	7	punct	_	_

~~~


