---
layout: base
title:  'Statistics of flat in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="fr_gsd-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="fr_gsd-dep-flat-name.html">flat:name</a></tt>.

17 nodes (0%) are attached to their parents as `flat`.

17 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17647058823529.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (16; 94% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Il	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	wordform=il
2	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	_	SpaceAfter=No
3	agit	agir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	d'	de	ADP	_	_	5	case	_	SpaceAfter=No
5	album	album	NOUN	_	Gender=Masc|Number=Sing	3	obl:arg	_	_
6	de	de	ADP	_	_	9	case	_	_
7	quarante	quarante	NUM	_	Number=Plur	9	nummod	_	_
8	quatre	quatre	NUM	_	Number=Plur	7	flat	_	_
9	pages	page	NOUN	_	Gender=Fem|Number=Plur	5	nmod	_	_
10	en	en	ADP	_	_	12	case	_	_
11	grand	grand	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
12	format	format	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
13	cartonné	cartonner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 flat	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No|wordform=l'
2	agence	agence	NOUN	_	Gender=Fem|Number=Sing	6	nsubj:pass	_	_
3	Dagong	Dagong	PROPN	_	_	2	appos	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
5	notamment	notamment	ADV	_	_	6	advmod	_	_
6	connue	connaître	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	pour	pour	ADP	_	_	8	mark	_	_
8	attribuer	attribuer	VERB	_	VerbForm=Inf	6	xcomp	_	Subject=SubjRaising
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	note	note	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	_
11	plus	plus	ADV	_	_	12	advmod	_	_
12	faible	faible	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	_
13	à	à	ADP	_	_	15	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	dette	dette	NOUN	_	Gender=Fem|Number=Sing	8	obl:arg	_	_
16	souveraine	souverain	ADJ	_	Gender=Fem|Number=Sing	15	amod	_	_
17	américaine	américain	ADJ	_	Gender=Fem|Number=Sing	15	amod	_	_
18	(	(	PUNCT	_	_	20	punct	_	SpaceAfter=No
19	«	«	PUNCT	_	_	20	punct	_	_
20	AA	AA	SYM	_	ExtPos=PROPN	10	appos	_	_
21	»	»	PUNCT	_	_	20	punct	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	abaissée	abaisser	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	20	acl	_	_
24	à	à	ADP	_	_	26	case	_	_
25	«	«	PUNCT	_	_	26	punct	_	_
26	A	A	SYM	_	ExtPos=PROPN	23	obl:arg	_	_
27	+	+	SYM	_	_	26	flat	_	_
28	»	»	PUNCT	_	_	26	punct	_	_
29	en	en	ADP	_	_	30	case	_	_
30	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	23	obl:mod	_	_
31	2010	2010	NUM	_	Number=Plur	30	nmod	_	SpaceAfter=No
32	,	,	PUNCT	_	_	36	punct	_	_
33	puis	puis	CCONJ	_	_	36	cc	_	_
34	à	à	ADP	_	_	36	case	_	_
35	«	«	PUNCT	_	_	36	punct	_	_
36	A	A	SYM	_	ExtPos=PROPN	23	conj	_	_
37	»	»	PUNCT	_	_	36	punct	_	_
38	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	39	det	_	_
39	3	3	NUM	_	Number=Sing	36	orphan	_	_
40	août	août	NOUN	_	Gender=Masc|Number=Sing	39	nmod	_	_
41	2011	2011	NUM	_	Number=Plur	40	nmod	_	SpaceAfter=No
42	)	)	PUNCT	_	_	20	punct	_	_
43	que	que	SCONJ	_	_	46	case	_	_
44	ses	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	46	det	_	_
45	3	3	NUM	_	Number=Plur	46	nummod	_	_
46	concurrentes	concurrent	ADJ	_	Gender=Fem|Number=Plur	11	obj	_	_
47	(	(	PUNCT	_	_	48	punct	_	SpaceAfter=No
48	AAA	AAA	SYM	_	ExtPos=PROPN	46	appos	_	SpaceAfter=No
49	,	,	PUNCT	_	_	51	punct	_	_
50	puis	puis	CCONJ	_	_	51	cc	_	_
51	AA	AA	SYM	_	ExtPos=PROPN	48	conj	_	_
52	+	+	SYM	_	_	51	flat:name	_	_
53	pour	pour	ADP	_	_	54	case	_	_
54	Standard	Standard	PROPN	_	_	48	nmod	_	_
55	&	&	SYM	_	_	54	flat:name	_	_
56	Poor's	Poor's	PROPN	_	_	54	flat:name	_	_
57	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	58	det	_	_
58	5	5	NUM	_	Number=Sing	48	nmod	_	_
59	août	août	NOUN	_	Gender=Masc|Number=Sing	58	nmod	_	_
60	2011	2011	NUM	_	Number=Plur	59	nmod	_	SpaceAfter=No
61	)	)	PUNCT	_	_	48	punct	_	SpaceAfter=No
62	.	.	PUNCT	_	_	6	punct	_	_

~~~


