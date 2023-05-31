---
layout: base
title:  'Statistics of flat:foreign in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_gsd-dep-flat-name.html">flat:name</a></tt>.

1041 nodes (0%) are attached to their parents as `flat:foreign`.

1041 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61863592699328.

The following 4 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1033; 99% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Falling	Falling	X	_	Foreign=Yes	6	nsubj	_	ExtPos=PROPN|Lang=en|Title=Yes
2	Out	Out	X	_	Foreign=Yes	1	flat:foreign	_	InTitle=Yes|Lang=en
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	deuxième	deuxième	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	album	album	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Peter	Peter	X	_	Foreign=Yes	6	nmod	_	ExtPos=PROPN|Lang=en
9	Bjorn	Bjorn	X	_	Foreign=Yes	8	flat:foreign	_	Lang=en
10	and	and	X	_	Foreign=Yes	8	flat:foreign	_	Lang=en
11	John	John	X	_	Foreign=Yes	8	flat:foreign	_	Lang=en|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 67	bgColor:blue
# visual-style 67	fgColor:white
# visual-style 67 68 flat:foreign	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	wordform=les
2	têtes	tête	NOUN	_	Gender=Fem|Number=Plur	6	nsubj	_	_
3	d'	de	ADP	_	_	4	case	_	SpaceAfter=No
4	affiche	affiche	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	étaient	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	Ellen	Ellen	PROPN	_	_	0	root	_	_
7	Barkin	Barkin	PROPN	_	_	6	flat:name	_	_
8	et	et	CCONJ	_	_	9	cc	_	_
9	Jodie	Jodie	PROPN	_	_	6	conj	_	_
10	Foster	Foster	PROPN	_	_	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	_	_	16	punct	_	_
12	et	et	CCONJ	_	_	16	cc	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	film	film	NOUN	_	Gender=Masc|Number=Sing	16	nsubj:pass	_	_
15	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	aux:pass	_	_
16	produit	produire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	conj	_	_
17	par	par	ADP	_	_	18	case	_	_
18	Warner	Warner	PROPN	_	_	16	obl:agent	_	_
19	Bros.	Bros.	PROPN	_	_	18	flat:name	_	_
20	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	wordform=la
21	musique	musique	NOUN	_	Gender=Fem|Number=Sing	22	nsubj	_	_
22	faisait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	parataxis	_	_
23	écho	écho	NOUN	_	Gender=Masc|Number=Sing	22	obj:lvc	_	_
24	à	à	ADP	_	_	26	case	_	_
25	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	son	son	NOUN	_	Gender=Masc|Number=Sing	23	obl:arg	_	_
27	de	de	ADP	_	_	28	case	_	_
28	Sketches	Sketches	X	_	Foreign=Yes	26	nmod	_	ExtPos=PROPN|Lang=en
29	of	of	X	_	Foreign=Yes	28	flat:foreign	_	Lang=en
30	Spain	Spain	X	_	Foreign=Yes	28	flat:foreign	_	Lang=en
31	et	et	CCONJ	_	_	33	cc	_	_
32	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	33	aux:pass	_	_
33	produite	produire	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	22	conj	_	_
34	par	par	ADP	_	_	35	case	_	_
35	Marcus	Marcus	PROPN	_	_	33	obl:agent	_	_
36	Miller	Miller	PROPN	_	_	35	flat:name	_	SpaceAfter=No
37	,	,	PUNCT	_	_	39	punct	_	_
38	qui	qui	PRON	_	PronType=Rel	39	nsubj	_	_
39	écrivit	écrire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	35	acl:relcl	_	_
40	et	et	CCONJ	_	_	41	cc	_	_
41	arrangea	arranger	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	39	conj	_	_
42	tous	tout	ADJ	_	Gender=Masc|Number=Plur	44	amod	_	_
43	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	44	det	_	_
44	morceaux	morceau	NOUN	_	Gender=Masc|Number=Plur	41	obj	_	SpaceAfter=No
45	,	,	PUNCT	_	_	48	punct	_	_
46	à	à	ADP	_	_	48	case	_	_
47	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	48	det	_	SpaceAfter=No
48	exception	exception	NOUN	_	Gender=Fem|Number=Sing	41	obl:mod	_	_
49	d'	de	ADP	_	_	50	case	_	SpaceAfter=No
50	un	un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	48	nmod	_	_
51	seul	seul	ADJ	_	Gender=Masc|Number=Sing	50	amod	_	SpaceAfter=No
52	,	,	PUNCT	_	_	55	punct	_	_
53	qu'	que	PRON	_	PronType=Rel	55	obj	_	SpaceAfter=No
54	il	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	55	nsubj	_	_
55	co-écrivit	co-écrire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	50	acl:relcl	_	_
56	avec	avec	ADP	_	_	57	case	_	_
57	Miles	Miles	PROPN	_	_	55	obl:mod	_	SpaceAfter=No
58	,	,	PUNCT	_	_	55	punct	_	_
59	"	"	PUNCT	_	_	60	punct	_	SpaceAfter=No
60	Theme	Theme	X	_	Foreign=Yes	50	appos	_	ExtPos=PROPN|Lang=en
61	for	for	X	_	Foreign=Yes	60	flat:foreign	_	Lang=en
62	Augustine	Augustine	X	_	Foreign=Yes	60	flat:foreign	_	Lang=en|SpaceAfter=No
63	/	/	SYM	_	_	62	dep	_	SpaceAfter=No
64	Wind	Wind	X	_	Foreign=Yes	63	flat:foreign	_	Lang=en|SpaceAfter=No
65	/	/	SYM	_	_	64	dep	_	SpaceAfter=No
66	Seduction	Seduction	X	_	Foreign=Yes	65	flat:foreign	_	Lang=en|SpaceAfter=No
67	/	/	SYM	_	_	66	dep	_	SpaceAfter=No
68	Kiss	Kiss	X	_	Foreign=Yes	67	flat:foreign	_	Lang=en|SpaceAfter=No
69	"	"	PUNCT	_	_	60	punct	_	SpaceAfter=No
70	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:foreign	color:blue
1	Lilly	Lilly	X	_	Foreign=Yes	8	nsubj	_	ExtPos=PROPN|Lang=en
2	Wood	Wood	X	_	Foreign=Yes	1	flat:foreign	_	Lang=en
3	&	&	SYM	_	_	1	flat:foreign	_	_
4	The	The	X	_	Foreign=Yes	1	flat:foreign	_	ExtPos=PROPN|Lang=en
5	Prick	Prick	X	_	Foreign=Yes	1	flat:foreign	_	Lang=en
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
7	également	également	ADV	_	_	8	advmod	_	_
8	remporté	remporter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	Victoires	victoire	NOUN	_	Gender=Fem|Number=Plur	8	obj	_	wordform=victoires
11	de	de	ADP	_	_	13	case	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Musique	musique	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	wordform=musique
14	2011	2011	NUM	_	Number=Plur	10	nmod	_	_
15	dans	dans	ADP	_	_	17	case	_	_
16	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	catégorie	catégorie	NOUN	_	Gender=Fem|Number=Sing	8	obl:mod	_	_
18	"	"	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	révélation	révélation	NOUN	_	Gender=Fem|Number=Sing	17	appos	_	_
20	de	de	ADP	_	_	22	case	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	public	public	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
23	"	"	PUNCT	_	_	19	punct	_	SpaceAfter=No
24	.	.	PUNCT	_	_	8	punct	_	_

~~~


