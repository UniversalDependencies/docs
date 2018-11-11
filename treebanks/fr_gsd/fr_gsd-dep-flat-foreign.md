---
layout: base
title:  'Statistics of flat:foreign in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_gsd-dep-flat-name.html">flat:name</a></tt>.

16 nodes (0%) are attached to their parents as `flat:foreign`.

16 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.625.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (15; 94% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 flat:foreign	color:blue
1	Cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	page	page	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	recense	recenser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	épisodes	épisode	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	_
6	de	de	ADP	_	_	9	case	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
8	deuxième	deuxième	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	_
9	saison	saison	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
10	de	de	ADP	_	_	12	case	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	série	série	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
13	télévisée	télévisé	ADJ	_	Gender=Fem|Number=Sing	12	amod	_	_
14	américaine	américain	ADJ	_	Gender=Fem|Number=Sing	12	amod	_	_
15	Bonne	bon	ADJ	_	Gender=Fem|Number=Sing	16	amod	_	INTITLE=Yes
16	chance	chance	PROPN	_	_	12	appos	_	TITLE=Yes
17	Charlie	Charlie	PROPN	_	_	16	parataxis	_	INTITLE=Yes
18	(	(	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	Good	Good	X	_	_	16	appos	_	_
20	Luck	Luck	X	_	_	19	flat:foreign	_	SpaceAfter=No
21	,	,	PUNCT	_	_	19	punct	_	_
22	Charlie	Charlie	PROPN	_	_	19	parataxis	_	_
23	!	!	PUNCT	_	_	19	punct	_	SpaceAfter=No
24	)	)	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 flat:foreign	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
2	principales	principal	ADJ	_	Gender=Fem|Number=Plur	3	amod	_	_
3	espèces	espèce	NOUN	_	Gender=Fem|Number=Plur	9	nsubj	_	_
4	exploitées	exploiter	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	3	acl	_	_
5	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
6	désormais	désormais	ADV	_	_	9	advmod	_	_
7	:	:	PUNCT	_	_	6	punct	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	guatambú	guatambú	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	cèdre	cèdre	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_
13	missionnaire	missionnaire	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	petiribí	petiribí	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	SpaceAfter=No
19	incienso	incienso	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_
20	(	(	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	encens	encens	NOUN	_	Gender=Masc|Number=Sing	19	appos	_	SpaceAfter=No
22	)	)	PUNCT	_	_	21	punct	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	_
24	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	26	det	_	_
25	caña	caña	NOUN	_	Gender=Fem|Number=Sing	9	conj	_	_
26	fístula	fístula	NOUN	_	Gender=Fem|Number=Sing	25	flat:foreign	_	_
27	(	(	PUNCT	_	_	29	punct	_	SpaceAfter=No
28	ou	ou	CCONJ	_	_	29	cc	_	_
29	ybira-pitá	ybira-pitá	NOUN	_	Gender=Fem|Number=Sing	25	conj	_	SpaceAfter=No
30	)	)	PUNCT	_	_	29	punct	_	SpaceAfter=No
31	,	,	PUNCT	_	_	33	punct	_	_
32	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	SpaceAfter=No
33	anchicho	anchicho	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_
34	et	et	CCONJ	_	_	36	cc	_	_
35	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	_	_
36	guayaibí	guayaibí	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_
37	(	(	PUNCT	_	_	38	punct	_	SpaceAfter=No
38	patagonula	patagonula	NOUN	_	Gender=Fem|Number=Sing	36	appos	_	_
39	americana	americano	ADJ	_	Gender=Fem|Number=Sing	38	amod	_	SpaceAfter=No
40	)	)	PUNCT	_	_	38	punct	_	SpaceAfter=No
41	.	.	PUNCT	_	_	9	punct	_	_

~~~


