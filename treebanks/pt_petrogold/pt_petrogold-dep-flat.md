---
layout: base
title:  'Statistics of flat in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="pt_petrogold-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="pt_petrogold-dep-flat-name.html">flat:name</a></tt>.

83 nodes (0%) are attached to their parents as `flat`.

83 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34939759036145.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (66; 80% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (11; 13% instances), <tt><a href="pt_petrogold-pos-X.html">X</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (4; 5% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (1; 1% instances).


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
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 36 flat	color:blue
1	Já	já	ADV	_	_	5	advmod	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	norueguesa	norueguês	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
4	Statoil	Statoil	PROPN	_	Gender=Fem|Number=Sing	3	nmod	_	_
5	aparece	aparecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	em	em	ADP	_	_	8	case	_	_
7	segundo	segundo	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	8	amod	_	_
8	lugar	lugar	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
9	em	em	ADP	_	_	11	case	_	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	lista	lista	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	com	com	ADP	_	_	15	case	_	_
14	10	10	NUM	_	NumType=Card	15	nummod	_	_
15	projetos	projeto	NOUN	_	Gender=Masc|Number=Plur	5	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	sendo	ser	AUX	_	VerbForm=Ger	18	cop	_	_
18	três	três	NUM	_	NumType=Card	5	conj	_	_
19	em	em	ADP	_	_	21	case	_	_
20	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	área	área	NOUN	_	Gender=Fem|Number=Sing	18	nmod	_	_
22	de	de	ADP	_	_	23	case	_	_
23	injeção	injeção	NOUN	_	Gender=Fem|Number=Sing	21	nmod	_	_
24	de	de	ADP	_	_	25	case	_	_
25	água	água	NOUN	_	Gender=Fem|Number=Sing	23	nmod	_	_
26	e	e	CCONJ	_	_	27	cc	_	_
27	sete	sete	NUM	_	NumType=Card	25	conj	_	_
28	envolvendo	envolver	VERB	_	VerbForm=Ger	5	advcl	_	_
29	soluções	solução	NOUN	_	Gender=Fem|Number=Plur	28	obj	_	_
30	de	de	ADP	_	_	31	case	_	_
31	compressão	compressão	NOUN	_	Gender=Fem|Number=Sing	29	nmod	_	_
32	submarina	submarino	ADJ	_	Gender=Fem|Number=Sing	31	amod	_	_
33	(	(	PUNCT	_	_	34	punct	_	SpaceAfter=No
34	www.ofseas	www.ofsea	X	_	_	5	parataxis	_	SpaceAfter=No
35	.	.	X	_	_	34	flat	_	SpaceAfter=No
36	com.br	com.br	X	_	_	34	flat	_	SpaceAfter=No
37	)	)	PUNCT	_	_	34	punct	_	SpaceAfter=No
38	.	.	PUNCT	_	_	5	punct	_	_

~~~


