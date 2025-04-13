---
layout: base
title:  'Statistics of orphan in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `orphan`

This relation is universal.

24 nodes (0%) are attached to their parents as `orphan`.

23 instances of `orphan` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.83333333333333.

The following 9 pairs of parts of speech are connected with `orphan`: <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (8; 33% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt> (1; 4% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 20 orphan	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	gráfico	gráfico	NOUN	_	Gender=Masc|Number=Sing	9	nsubj:pass	_	_
3	A	A	PROPN	_	Gender=Masc|Number=Sing	2	nmod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Figura	figura	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
7	V.15	V.15	NUM	_	NumType=Card	6	nummod	_	_
8	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
9	gerado	gerar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
10	durante	durante	ADP	_	_	12	case	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	teste	teste	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	_
13	com	com	ADP	_	_	14	case	_	_
14	areia	areia	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	gráfico	gráfico	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_
18	B	B	PROPN	_	Gender=Masc|Number=Sing	17	nmod	_	_
19	com	com	ADP	_	_	20	case	_	_
20	argila	argila	NOUN	_	Gender=Fem|Number=Sing	17	orphan	_	SpaceAfter=No
21	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 32 orphan	color:blue
1	Matematicamente	matematicamente	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	informação	informação	NOUN	_	Gender=Fem|Number=Sing	6	nsubj:pass	_	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
6	introduzida	introduzir	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	através	através	ADV	_	_	6	advmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	minimização	minimização	NOUN	_	Gender=Fem|Number=Sing	7	obl	_	_
11	de	de	ADP	_	_	13	case	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	funcional	funcional	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
14	estabilizante	estabilizante	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_
15	onde	onde	ADV	_	Gender=Masc|Number=Sing|PronType=Rel	19	obl	_	_
16	p	p	NOUN	_	Gender=Masc|Number=Sing	19	nsubj	_	_
17	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
18	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	vetor	vetor	NOUN	_	Gender=Masc|Number=Sing	13	acl:relcl	_	_
20	de	de	ADP	_	_	21	case	_	_
21	parâmetros	parâmetro	NOUN	_	Gender=Masc|Number=Plur	19	nmod	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	т	т	NOUN	_	Gender=Masc|Number=Sing	19	conj	_	_
24	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	operador	operador	NOUN	_	Gender=Masc|Number=Sing	23	orphan	_	_
26	de	de	ADP	_	_	27	case	_	_
27	transposição	transposição	NOUN	_	Gender=Fem|Number=Sing	25	nmod	_	_
28	e	e	CCONJ	_	_	29	cc	_	_
29	Wp	Wp	PROPN	_	Gender=Masc|Number=Sing	19	conj	_	_
30	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	_
31	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	32	det	_	_
32	matriz	matriz	NOUN	_	Gender=Fem|Number=Sing	29	orphan	_	_
33	diagonal	diagonal	ADJ	_	Gender=Fem|Number=Sing	32	amod	_	_
34	M	m	NOUN	_	Gender=Masc|Number=Sing	32	nmod	_	_
35	x	x	ADP	_	_	36	case	_	_
36	M	m	NOUN	_	Gender=Masc|Number=Sing	32	nmod	_	_
37	(	(	PUNCT	_	_	39	punct	_	_
38	onde	onde	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	39	obl	_	_
39	M	m	NOUN	_	Gender=Masc|Number=Sing	32	parataxis	_	_
40	=	=	PUNCT	_	_	41	punct	_	_
41	número	número	NOUN	_	Gender=Masc|Number=Sing	39	appos	_	_
42	de	de	ADP	_	_	43	case	_	_
43	parâmetros	parâmetro	NOUN	_	Gender=Masc|Number=Plur	41	nmod	_	SpaceAfter=No
44	)	)	PUNCT	_	_	39	punct	_	_
45	cujo	cujo	DET	_	Gender=Masc|Number=Sing|PronType=Rel	47	det	_	_
46	j-ésimo	j-ésimo	ADJ	_	Gender=Masc|Number=Sing	47	amod	_	_
47	elemento	elemento	NOUN	_	Gender=Masc|Number=Sing	49	nsubj:pass	_	_
48	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	49	aux:pass	_	_
49	dado	dar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	32	acl:relcl	_	_
50	por	por	ADP	_	_	52	case	_	_
51	(	(	PUNCT	_	_	52	punct	_	SpaceAfter=No
52	12	12	NUM	_	NumType=Card	49	obl	_	SpaceAfter=No
53	)	)	PUNCT	_	_	52	punct	_	_

~~~


~~~ conllu
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 43 orphan	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	medidor	medidor	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	capaz	capaz	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	de	de	ADP	_	_	6	mark	_	_
6	medir	medir	VERB	_	VerbForm=Inf	4	acl	_	_
7	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
8	seguintes	seguinte	ADJ	_	Gender=Masc|Number=Plur	9	amod	_	_
9	gases	gás	NOUN	_	Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
10	:	:	PUNCT	_	_	11	punct	_	_
11	O2	O2	PROPN	_	Gender=Masc|Number=Sing	9	appos	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	CO2	CO2	PROPN	_	Gender=Masc|Number=Sing	11	conj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	CO	CO	PROPN	_	Gender=Masc|Number=Sing	11	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	NOx	NOx	PROPN	_	Gender=Masc|Number=Sing	11	conj	_	_
18	e	e	CCONJ	_	_	19	cc	_	_
19	HC	HC	PROPN	_	Gender=Masc|Number=Sing	11	conj	_	_
20	(	(	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	hidrocarbonetos	hidrocarboneto	NOUN	_	Gender=Masc|Number=Plur	11	appos	_	_
22	não	não	ADV	_	Polarity=Neg	23	advmod	_	_
23	queimados	queimar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	21	acl	_	SpaceAfter=No
24	)	)	PUNCT	_	_	21	punct	_	SpaceAfter=No
25	,	,	PUNCT	_	_	30	punct	_	_
26	sendo	ser	AUX	_	VerbForm=Ger	30	aux:pass	_	_
27	estes	este	DET	_	Gender=Masc|Number=Plur|PronType=Dem	29	det	_	_
28	dois	dois	NUM	_	NumType=Card	29	nummod	_	_
29	últimos	último	ADJ	_	Gender=Masc|Number=Plur|NumType=Ord	30	nsubj:pass	_	_
30	medidos	medir	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	4	advcl	_	_
31	em	em	ADP	_	_	32	case	_	_
32	partes	parte	NOUN	_	Gender=Fem|Number=Plur	30	obl	_	_
33	por	por	ADP	_	_	34	case	_	_
34	milhão	milhão	NUM	_	NumType=Card	32	nummod	_	_
35	(	(	PUNCT	_	_	36	punct	_	SpaceAfter=No
36	ppm	ppm	NOUN	_	Gender=Masc|Number=Plur	32	appos	_	SpaceAfter=No
37	)	)	PUNCT	_	_	36	punct	_	SpaceAfter=No
38	,	,	PUNCT	_	_	41	punct	_	_
39	e	e	CCONJ	_	_	41	cc	_	_
40	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	41	det	_	_
41	demais	demais	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	30	conj	_	_
42	em	em	ADP	_	_	43	case	_	_
43	percentagens	percentagem	NOUN	_	Gender=Fem|Number=Plur	41	orphan	_	_
44	de	de	ADP	_	_	46	case	_	_
45	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	46	det	_	_
46	total	total	NOUN	_	Gender=Masc|Number=Sing	43	nmod	_	_
47	(	(	PUNCT	_	_	50	punct	_	SpaceAfter=No
48	sem	sem	ADP	_	_	50	case	_	_
49	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	50	det	_	_
50	água	água	NOUN	_	Gender=Fem|Number=Sing	46	nmod	_	SpaceAfter=No
51	)	)	PUNCT	_	_	50	punct	_	SpaceAfter=No
52	.	.	PUNCT	_	_	4	punct	_	_

~~~


