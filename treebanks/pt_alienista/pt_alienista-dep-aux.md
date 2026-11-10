---
layout: base
title:  'Statistics of aux in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt_alienista-dep-aux-pass.html">aux:pass</a></tt>.

75 nodes (0%) are attached to their parents as `aux`.

75 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25333333333333.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt> (73; 97% instances), <tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Sem	sem	ADP	_	_	3	case	_	_
3	dúvida	dúvida	NOUN	_	Gender=Fem|Number=Sing	10	ccomp:speech	_	SpaceAfter=No
4	...	...	PUNCT	_	_	6	punct	_	_
5	sem	sem	ADP	_	_	6	case	_	_
6	dúvida	dúvida	NOUN	_	Gender=Fem|Number=Sing	3	parataxis	_	SpaceAfter=No
7	...	...	PUNCT	_	_	6	punct	_	_
8	-	-	PUNCT	_	_	3	punct	_	_
9	ia	ir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	aux	_	_
10	pontuando	pontuar	VERB	_	VerbForm=Ger	0	root	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	vigário	vigário	NOUN	_	Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	E	e	CCONJ	_	_	12	cc	_	_
2	porque	porque	SCONJ	_	_	10	mark	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	experiência	experiência	NOUN	_	Gender=Fem|Number=Sing	10	nsubj	_	_
5	de	de	ADP	_	_	7	case	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Câmara	Câmara	PROPN	_	_	4	nmod	_	_
8	tivesse	ter	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
9	sido	ser	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	10	cop	_	_
10	dolorosa	doloroso	ADJ	_	Gender=Fem|Number=Sing	12	advcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	estabeleceu	estabelecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
13	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
14	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	cláusula	cláusula	NOUN	_	Gender=Fem|Number=Sing	12	obj	_	_
16	de	de	ADP	_	ExtPos=SCONJ	21	mark	_	_
17	que	que	SCONJ	_	_	16	fixed	_	_
18	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	autorização	autorização	NOUN	_	Gender=Fem|Number=Sing	21	nsubj	_	_
20	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	21	cop	_	_
21	provisória	provisório	ADJ	_	Gender=Fem|Number=Sing	15	acl	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	limitada	limitar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	21	conj	_	_
24	a	a	ADP	_	_	26	case	_	_
25	um	um	NUM	_	Gender=Masc|NumType=Card	26	nummod	_	_
26	ano	ano	NOUN	_	Gender=Masc|Number=Sing	23	obl	_	SpaceAfter=No
27	,	,	PUNCT	_	_	30	punct	_	_
28	para	para	ADP	_	_	30	case	_	_
29	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	fim	fim	NOUN	_	Gender=Masc|Number=Sing	21	obl	_	_
31	de	de	ADP	_	_	33	mark	_	_
32	ser	ser	AUX	_	VerbForm=Inf	33	aux:pass	_	_
33	experimentada	experimentar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	30	acl	_	_
34	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	36	det	_	_
35	nova	novo	ADJ	_	Gender=Fem|Number=Sing	36	amod	_	_
36	teoria	teoria	NOUN	_	Gender=Fem|Number=Sing	33	nsubj:pass	_	_
37	psicológica	psicológico	ADJ	_	Gender=Fem|Number=Sing	36	amod	_	SpaceAfter=No
38	,	,	PUNCT	_	_	39	punct	_	_
39	podendo	poder	VERB	_	VerbForm=Ger	21	advcl	_	_
40	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	_	_
41	Câmara	Câmara	PROPN	_	_	39	nsubj	_	SpaceAfter=No
42	,	,	PUNCT	_	_	43	punct	_	_
43	antes	antes	ADV	_	_	49	advmod	_	_
44	mesmo	mesmo	ADV	_	_	43	advmod	_	_
45	de	de	ADP	_	_	47	case	_	_
46	aquele	aquele	DET	_	Gender=Masc|Number=Sing|PronType=Dem	47	det	_	_
47	prazo	prazo	NOUN	_	Gender=Masc|Number=Sing	43	obl	_	SpaceAfter=No
48	,	,	PUNCT	_	_	43	punct	_	_
49	mandar	mandar	VERB	_	VerbForm=Inf	39	xcomp	_	_
50	fechar	fechar	VERB	_	VerbForm=Inf	49	xcomp	_	_
51	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	52	det	_	_
52	Casa	Casa	PROPN	_	_	50	obj	_	_
53	Verde	Verde	PROPN	_	_	52	flat:name	_	SpaceAfter=No
54	,	,	PUNCT	_	_	59	punct	_	_
55	se	se	SCONJ	_	_	59	mark	_	_
56	a	a	ADP	_	_	57	case	_	_
57	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	59	obl	_	_
58	fosse	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	59	aux:pass	_	_
59	aconselhada	aconselhar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	49	advcl	_	_
60	por	por	ADP	_	_	61	case	_	_
61	motivos	motivo	NOUN	_	Gender=Masc|Number=Plur	59	obl	_	_
62	de	de	ADP	_	_	63	case	_	_
63	ordem	ordem	NOUN	_	Gender=Fem|Number=Sing	61	nmod	_	_
64	pública	público	ADJ	_	Gender=Fem|Number=Sing	63	amod	_	SpaceAfter=No
65	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 62	bgColor:blue
# visual-style 62	fgColor:white
# visual-style 65	bgColor:blue
# visual-style 65	fgColor:white
# visual-style 65 62 aux	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	governo	governo	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	Lisboa	Lisboa	PROPN	_	_	2	nmod	_	_
5	recusou	recusar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	diploma	diploma	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	;	;	PUNCT	_	_	38	punct	_	_
9	mas	mas	CCONJ	_	_	38	cc	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	representando	representar	VERB	_	VerbForm=Ger	38	advcl	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	alienista	alienista	NOUN	_	Number=Sing	11	nsubj	_	_
14	que	que	SCONJ	_	_	17	mark	_	_
15	o	o	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	obj	_	_
16	não	não	ADV	_	_	17	advmod	_	_
17	pedia	pedir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	ccomp	_	_
18	como	como	ADP	_	_	19	case	_	_
19	prêmio	prêmio	NOUN	_	Gender=Masc|Number=Sing	17	obl	_	_
20	honorífico	honorífico	ADJ	_	Gender=Masc|Number=Sing	19	amod	_	_
21	ou	ou	CCONJ	_	_	22	cc	_	_
22	distinção	distinção	NOUN	_	Gender=Fem|Number=Sing	19	conj	_	_
23	legítima	legítimo	ADJ	_	Gender=Fem|Number=Sing	22	amod	_	SpaceAfter=No
24	,	,	PUNCT	_	_	29	punct	_	_
25	e	e	CCONJ	_	_	29	cc	_	_
26	somente	somente	ADV	_	_	29	advmod	_	_
27	como	como	ADP	_	_	29	case	_	_
28	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	meio	meio	NOUN	_	Gender=Masc|Number=Sing	19	conj	_	_
30	terapêutico	terapêutico	ADJ	_	Gender=Masc|Number=Sing	29	amod	_	_
31	para	para	ADP	_	_	33	case	_	_
32	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
33	caso	caso	NOUN	_	Gender=Masc|Number=Sing	29	nmod	_	_
34	difícil	difícil	ADJ	_	Number=Sing	33	amod	_	SpaceAfter=No
35	,	,	PUNCT	_	_	11	punct	_	_
36	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	37	det	_	_
37	governo	governo	NOUN	_	Gender=Masc|Number=Sing	38	nsubj	_	_
38	cedeu	ceder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	_
39	excepcionalmente	excepcionalmente	ADV	_	_	38	advmod	_	_
40	a	a	ADP	_	_	42	case	_	_
41	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	42	det	_	_
42	súplica	súplica	NOUN	_	Gender=Fem|Number=Sing	38	obl	_	SpaceAfter=No
43	;	;	PUNCT	_	_	49	punct	_	_
44	e	e	CCONJ	_	_	49	cc	_	_
45	ainda	ainda	ADV	_	ExtPos=ADV	49	advmod	_	_
46	assim	assim	ADV	_	_	45	fixed	_	_
47	não	não	ADV	_	_	49	advmod	_	_
48	o	o	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	49	obj	_	_
49	faz	fazer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	38	conj	_	_
50	sem	sem	ADP	_	_	52	case	_	_
51	extraordinário	extraordinário	ADJ	_	Gender=Masc|Number=Sing	52	amod	_	_
52	esforço	esforço	NOUN	_	Gender=Masc|Number=Sing	49	obl	_	_
53	de	de	ADP	_	_	55	case	_	_
54	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	55	det	_	_
55	ministro	ministro	NOUN	_	Gender=Masc|Number=Sing	52	nmod	_	_
56	de	de	ADP	_	_	57	case	_	_
57	marinha	marinho	NOUN	_	Gender=Fem|Number=Sing	55	nmod	_	_
58	e	e	CCONJ	_	_	59	cc	_	_
59	ultramar	ultramar	NOUN	_	Gender=Masc|Number=Sing	57	conj	_	SpaceAfter=No
60	,	,	PUNCT	_	_	65	punct	_	_
61	que	que	PRON	_	PronType=Rel	65	nsubj	_	_
62	vinha	vir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	65	aux	_	_
63	a	a	ADP	_	_	65	mark	_	_
64	ser	ser	AUX	_	VerbForm=Inf	65	cop	_	_
65	primo	primo	NOUN	_	Gender=Masc|Number=Sing	55	acl:relcl	_	_
66	de	de	ADP	_	_	68	case	_	_
67	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	68	det	_	_
68	alienado	alienado	NOUN	_	Gender=Masc|Number=Sing	65	nmod	_	SpaceAfter=No
69	.	.	PUNCT	_	_	5	punct	_	_

~~~


