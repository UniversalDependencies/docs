---
layout: base
title:  'Statistics of flat in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="pt_petrogold-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="pt_petrogold-dep-flat-name.html">flat:name</a></tt>.

79 nodes (0%) are attached to their parents as `flat`.

79 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34177215189873.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (66; 84% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (11; 14% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat	color:blue
1	EOR	EOR	PROPN	_	Gender=Masc|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Barracuda	Barracuda	PROPN	_	Number=Sing	1	nmod	_	_
4	=	=	PUNCT	_	_	9	punct	_	_
5	0,085	0,085	NUM	_	NumType=Card	9	nummod	_	_
6	x	x	PUNCT	_	_	7	punct	_	_
7	2250	2250	NUM	_	NumType=Card	5	nmod	_	_
8	x	x	PUNCT	_	_	9	punct	_	_
9	C	c	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	_
10	=	=	PUNCT	_	_	11	punct	_	_
11	143,44	143,44	NUM	_	NumType=Card	1	appos	_	_
12	Milhões	milhão	NUM	_	NumType=Card	11	flat	_	_
13	de	de	ADP	_	_	14	case	_	_
14	barris	barril	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	_
15	de	de	ADP	_	_	16	case	_	_
16	óleo	óleo	NOUN	_	Gender=Masc|Number=Sing	14	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Fonte	fonte	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	_	_	3	punct	_	_
3	commons.	commons.wikimedia.org	NOUN	_	Gender=Masc|Number=Sing|Typo=Yes	1	appos	_	SpaceAfter=No
4	wikimedia	_	X	_	_	3	flat	_	SpaceAfter=No
5	.	_	X	_	_	3	flat	_	SpaceAfter=No
6	org	_	X	_	_	3	flat	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 flat	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	roseta	roseta	NOUN	_	Gender=Fem|Number=Sing	10	nsubj	_	_
3	média	médio	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	com	com	ADP	_	_	8	case	_	_
6	todos	todo	DET	_	Gender=Masc|Number=Plur|PronType=Tot	8	det	_	_
7	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	dados	dado	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	resultou	resultar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
11	em	em	ADP	_	_	12	case	_	_
12	azimute	azimute	NOUN	_	Gender=Masc|Number=Sing	10	obl:arg	_	_
13	médio	médio	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
14	213	213	NUM	_	NumType=Card	12	nummod	_	SpaceAfter=No
15	°	°	NOUN	_	Gender=Masc|Number=Plur	14	flat	_	_
16	e	e	CCONJ	_	_	18	cc	_	_
17	com	com	ADP	_	_	18	case	_	_
18	dispersão	dispersão	NOUN	_	Gender=Fem|Number=Sing	14	conj	_	_
19	(	(	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	Fc	Fc	PROPN	_	Gender=Masc|Number=Sing	18	appos	_	SpaceAfter=No
21	)	)	PUNCT	_	_	20	punct	_	_
22	igual	igual	ADJ	_	Gender=Fem|Number=Sing	18	amod	_	_
23	a	a	ADP	_	_	24	case	_	_
24	0,5	0,5	NUM	_	NumType=Card	22	obl	_	_
25	(	(	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	Figuras	figura	NOUN	_	Gender=Fem|Number=Plur	10	parataxis	_	_
27	25	25	NUM	_	NumType=Card	26	nummod	_	SpaceAfter=No
28	)	)	PUNCT	_	_	26	punct	_	SpaceAfter=No
29	.	.	PUNCT	_	_	10	punct	_	_

~~~


