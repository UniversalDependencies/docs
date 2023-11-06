---
layout: base
title:  'Statistics of dep in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep`

This relation is universal.
There are 1 language-specific subtypes of `dep`: <tt><a href="fr_gsd-dep-dep-comp.html">dep:comp</a></tt>.

19 nodes (0%) are attached to their parents as `dep`.

17 instances of `dep` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47368421052632.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (7; 37% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (3; 16% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (3; 16% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 dep	color:blue
1	En	en	ADP	_	_	2	case	_	wordform=en
2	1991	1991	NUM	_	Number=Plur	8	obl:mod	_	_
3	et	et	CCONJ	_	_	5	cc	_	_
4	en	en	ADP	_	_	5	case	_	_
5	1997	1997	NUM	_	Number=Plur	2	conj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	elle	lui	PRON	_	Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	publie	publier	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	deux	deux	NUM	_	Number=Plur	10	nummod	_	_
10	recueils	recueil	NOUN	_	Gender=Masc|Number=Plur	8	obj	_	_
11	intitulés	intituler	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	10	acl	_	_
12	Enigme	énigme	NOUN	_	ExtPos=PROPN|Gender=Fem|Number=Sing	11	xcomp	_	Title=Yes|wordform=énigme
13	dans	dans	ADP	_	_	15	case	_	InTitle=Yes
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	InTitle=Yes
15	miroir	miroir	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	InTitle=Yes
16	et	et	CCONJ	_	_	12	cc	_	_
17	Voler	voler	VERB	_	ExtPos=PROPN|VerbForm=Inf	12	conj	_	Subject=Generic|Title=Yes|wordform=voler
18	selon	selon	ADP	_	_	12	dep	_	InTitle=Yes|SpaceAfter=No
19	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 dep	color:blue
1	Son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	2	det	_	wordform=son
2	nom	nom	NOUN	_	Gender=Masc|Number=Sing	28	nsubj:pass	_	_
3	d'	de	ADP	_	_	4	case	_	SpaceAfter=No
4	espèce	espèce	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	composé	composer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	2	acl	_	_
7	de	de	ADP	_	_	8	case	_	_
8	daiyun	daiyun	X	_	ExtPos=PROPN	6	obl:arg	_	_
9	et	et	CCONJ	_	_	12	cc	_	_
10	de	de	ADP	_	_	12	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	suffixe	suffixe	NOUN	_	Gender=Masc|Number=Sing	8	conj	_	_
13	latin	latin	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
14	-ensis	-ensis	X	_	Foreign=Yes	12	appos	_	Lang=la|SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	«	«	PUNCT	_	_	18	punct	_	_
17	qui	qui	PRON	_	PronType=Rel	18	nsubj	_	InTitle=Yes
18	vit	vivre	VERB	_	ExtPos=PROPN|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	appos	_	Title=Yes
19	dans	dans	ADP	_	_	18	dep	_	InTitle=Yes|SpaceAfter=No
20	,	,	PUNCT	_	_	22	punct	_	InTitle=Yes
21	qui	qui	PRON	_	PronType=Rel	22	nsubj	_	InTitle=Yes
22	habite	habiter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	conj	_	InTitle=Yes
23	»	»	PUNCT	_	_	18	punct	_	SpaceAfter=No
24	,	,	PUNCT	_	_	18	punct	_	_
25	lui	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	28	iobj	_	_
26	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	aux:tense	_	_
27	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	28	aux:pass	_	_
28	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
29	en	en	ADP	_	_	30	case	_	_
30	référence	référence	NOUN	_	Gender=Fem|Number=Sing	28	obl:mod	_	_
31	à	à	ADP	_	_	33	case	_	_
32	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
33	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	30	nmod	_	_
34	de	de	ADP	_	_	36	case	_	_
35	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	36	det	_	_
36	découverte	découverte	NOUN	_	Gender=Fem|Number=Sing	33	nmod	_	SpaceAfter=No
37	.	.	PUNCT	_	_	28	punct	_	_

~~~


~~~ conllu
# visual-style 67	bgColor:blue
# visual-style 67	fgColor:white
# visual-style 66	bgColor:blue
# visual-style 66	fgColor:white
# visual-style 66 67 dep	color:blue
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
28	Sketches	Sketches	X	_	Foreign=Yes	26	nmod	_	Lang=en
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
60	Theme	Theme	X	_	Foreign=Yes	50	appos	_	Lang=en
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


