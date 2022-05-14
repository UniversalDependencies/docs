---
layout: base
title:  'Statistics of flat:foreign in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_bosque-dep-flat-name.html">flat:name</a></tt>.

77 nodes (0%) are attached to their parents as `flat:foreign`.

77 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20779220779221.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pt_bosque-pos-X.html">X</a></tt>-<tt><a href="pt_bosque-pos-X.html">X</a></tt> (75; 97% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_bosque-pos-X.html">X</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Outro	outro	DET	_	Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
2	«	«	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	serial	serial	X	_	ExtPos=NOUN|Gender=Masc|Number=Sing	0	root	_	_
4	killer	killer	X	_	Gender=Masc|Number=Sing	3	flat:foreign	_	SpaceAfter=No
5	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	em	em	ADP	_	_	9	case	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	retrato	retrato	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
10	habitual	habitual	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	:	:	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 flat:foreign	color:blue
1	Por	por	ADP	_	_	3	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	grupo	grupo	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	_
4	brazuca	brazuca	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	ainda	ainda	ADV	_	_	8	advmod	_	_
7	estarão	estar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	8	cop	_	_
8	presentes	presente	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
9	Tyes	Tyes	PROPN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
10	e	e	CCONJ	_	_	11	cc	_	_
11	Caio	Caio	PROPN	_	Gender=Masc|Number=Sing	9	conj	_	_
12	(	(	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	Rio	Rio	PROPN	_	Gender=Masc|Number=Sing	9	appos	_	_
14	de	de	ADP	_	_	15	case	_	_
15	Janeiro	Janeiro	PROPN	_	Number=Sing	13	flat:name	_	SpaceAfter=No
16	)	)	PUNCT	_	_	13	punct	_	_
17	e	e	CCONJ	_	_	19	cc	_	_
18	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	especialista	especialista	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_
20	em	em	ADP	_	_	22	case	_	_
21	«	«	PUNCT	_	_	22	punct	_	SpaceAfter=No
22	body	body	NOUN	_	ExtPos=NOUN	19	nmod	_	_
23	piercing	piercing	NOUN	_	_	22	flat:foreign	_	SpaceAfter=No
24	»	»	PUNCT	_	_	22	punct	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	André	André	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	19	appos	_	_
27	Meyer	Meyer	PROPN	_	Number=Sing	26	flat:name	_	_
28	(	(	PUNCT	_	_	29	punct	_	SpaceAfter=No
29	São	São	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	26	appos	_	_
30	Paulo	Paulo	PROPN	_	Number=Sing	29	flat:name	_	SpaceAfter=No
31	)	)	PUNCT	_	_	29	punct	_	SpaceAfter=No
32	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 39 flat:foreign	color:blue
1	Meyer	Meyer	PROPN	_	Gender=Masc|Number=Sing	2	nsubj	_	_
2	publicou	publicar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	informação	informação	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	_
5	em	em	ADP	_	_	7	case	_	_
6	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	romance	romance	NOUN	_	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	_
10	depois	depois	ADV	_	_	11	advmod	_	_
11	adaptou	adaptar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	acl:relcl	_	_
12	a	a	ADP	_	_	14	case	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	cinema	cinema	NOUN	_	Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	com	com	ADP	_	_	18	case	_	_
17	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	título	título	NOUN	_	Gender=Masc|Number=Sing	11	obl	_	_
19	justamente	justamente	ADV	_	_	11	advmod	_	_
20	de	de	ADP	_	_	23	case	_	_
21	«	«	PUNCT	_	_	23	punct	_	SpaceAfter=No
22	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	Solução	solução	NOUN	_	Gender=Fem|Number=Sing	18	nmod	_	_
24	a	a	ADP	_	_	28	case	_	_
25	sete	sete	NUM	_	Number=Sing	28	nummod	_	_
26	e	e	CCONJ	_	_	27	cc	_	_
27	meio	meio	NUM	_	Number=Sing	25	conj	_	_
28	por	por	ADP	_	_	23	nmod	_	_
29	cento	cento	NOUN	_	Number=Sing	28	compound	_	SpaceAfter=No
30	»	»	PUNCT	_	_	23	punct	_	_
31	(	(	PUNCT	_	_	33	punct	_	SpaceAfter=No
32	talvez	talvez	ADV	_	_	33	advmod	_	_
33	haja	haver	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl	_	_
34	melhor	bom	ADJ	_	Gender=Fem|Number=Sing	35	amod	_	_
35	tradução	tradução	NOUN	_	Gender=Fem|Number=Sing	33	obj	_	_
36	para	para	ADP	_	_	38	case	_	_
37	«	«	PUNCT	_	_	38	punct	_	SpaceAfter=No
38	The	the	X	_	ExtPos=PROPN	35	parataxis	_	_
39	7,5	7,5	NUM	_	Number=Sing	38	flat:foreign	_	_
40	per	per	X	_	Number=Sing	38	flat:foreign	_	_
41	cent	cent	X	_	Number=Sing	38	flat:foreign	_	_
42	Solution	solution	X	_	Number=Sing	38	flat:foreign	_	SpaceAfter=No
43	»	»	PUNCT	_	_	38	punct	_	SpaceAfter=No
44	:	:	PUNCT	_	_	47	punct	_	_
45	«	«	PUNCT	_	_	47	punct	_	SpaceAfter=No
46	Uma	um	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	47	det	_	_
47	Solução	solução	NOUN	_	Gender=Fem|Number=Sing	35	parataxis	_	_
48	a	a	ADP	_	_	52	case	_	_
49	sete	sete	NUM	_	Number=Sing	52	nummod	_	_
50	e	e	CCONJ	_	_	51	cc	_	_
51	meio	meio	NUM	_	Number=Sing	49	conj	_	_
52	por	por	PROPN	_	ExtPos=NOUN	47	nmod	_	_
53	cento	cento	NOUN	_	Number=Sing	52	compound	_	SpaceAfter=No
54	»	»	PUNCT	_	_	47	punct	_	SpaceAfter=No
55	,	,	PUNCT	_	_	63	punct	_	_
56	«	«	PUNCT	_	_	63	punct	_	SpaceAfter=No
57	Sete	sete	NUM	_	Gender=Masc|Number=Sing	60	nummod	_	_
58	e	e	CCONJ	_	Number=Sing	59	cc	_	_
59	meio	meio	NUM	_	Number=Sing	57	conj	_	_
60	por	por	PROPN	_	Number=Sing	63	nmod	_	_
61	cento	cento	PROPN	_	Number=Sing	60	compound	_	_
62	de	de	ADP	_	_	63	case	_	_
63	Solução	Solução	PROPN	_	Number=Sing	47	conj	_	SpaceAfter=No
64	»	»	PUNCT	_	_	63	punct	_	SpaceAfter=No
65	?	?	PUNCT	_	_	33	punct	_	_
66	)	)	PUNCT	_	_	33	punct	_	_

~~~


