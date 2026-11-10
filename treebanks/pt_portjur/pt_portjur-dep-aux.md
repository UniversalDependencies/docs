---
layout: base
title:  'Statistics of aux in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt_portjur-dep-aux-pass.html">aux:pass</a></tt>.

174 nodes (0%) are attached to their parents as `aux`.

174 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.89080459770115.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (167; 96% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Não	não	ADV	_	_	2	advmod	_	_
2	consta	constar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ter	ter	AUX	_	VerbForm=Inf	4	aux	_	_
4	havido	haver	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	csubj	_	_
5	monitoramento	monitoramento	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
6	eletrônico	eletrônico	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 28 aux	color:blue
1	Excetuam	excetuar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	1	expl	_	_
3	a	a	ADP	_	_	5	case	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	regra	regra	NOUN	_	Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	dispensando	dispensar	VERB	_	VerbForm=Ger	1	advcl	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	prova	prova	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	_
10	de	de	ADP	_	_	12	case	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	nexo	nexo	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
13	de	de	ADP	_	_	14	case	_	_
14	causalidade	causalidade	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	7	punct	_	_
16	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	responsabilidade	responsabilidade	NOUN	_	Gender=Fem|Number=Sing	1	nsubj	_	_
18	de	de	ADP	_	_	19	case	_	_
19	adquirente	adquirente	NOUN	_	Number=Sing	17	nmod	_	_
20	de	de	ADP	_	_	21	case	_	_
21	imóvel	imóvel	NOUN	_	Number=Sing	19	nmod	_	_
22	já	já	ADV	_	_	23	advmod	_	_
23	danificado	danificar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	21	acl	_	_
24	porque	porque	SCONJ	_	_	42	mark	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	independentemente	independentemente	ADV	_	_	42	advmod	_	_
27	de	de	ADP	_	_	37	mark	_	_
28	ter	ter	AUX	_	VerbForm=Inf	37	aux	_	_
29	sido	ser	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	37	cop	_	_
30	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	37	nsubj	_	_
31	ou	ou	CCONJ	_	_	33	cc	_	_
32	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
33	dono	dono	NOUN	_	Gender=Masc|Number=Sing	30	conj	_	_
34	anterior	anterior	ADJ	_	Number=Sing	33	amod	_	_
35	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	37	det	_	_
36	real	real	ADJ	_	Number=Sing	37	amod	_	_
37	causador	causador	NOUN	_	Gender=Masc|Number=Sing	26	acl	_	_
38	de	de	ADP	_	_	40	case	_	_
39	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	40	det	_	_
40	estragos	estrago	NOUN	_	Gender=Masc|Number=Plur	37	nmod	_	SpaceAfter=No
41	,	,	PUNCT	_	_	26	punct	_	_
42	imputa	imputar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	advcl	_	_
43	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	42	expl:impers	_	_
44	a	a	ADP	_	_	47	case	_	_
45	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	47	det	_	_
46	novo	novo	ADJ	_	Gender=Masc|Number=Sing	47	amod	_	_
47	proprietário	proprietário	NOUN	_	Gender=Masc|Number=Sing	42	obl	_	_
48	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	49	det	_	_
49	responsabilidade	responsabilidade	NOUN	_	Gender=Fem|Number=Sing	42	obj	_	_
50	por	por	ADP	_	_	52	case	_	_
51	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	52	det	_	_
52	danos	dano	NOUN	_	Gender=Masc|Number=Plur	49	nmod	_	SpaceAfter=No
53	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 42 aux	color:blue
1	Segundo	segundo	ADP	_	_	2	case	_	_
2	entendimento	entendimento	NOUN	_	Gender=Masc|Number=Sing	23	obl	_	_
3	de	de	ADP	_	_	5	case	_	_
4	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	STJ	STJ	PROPN	_	_	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	"	"	PUNCT	_	_	23	punct	_	SpaceAfter=No
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	modulação	modulação	NOUN	_	Gender=Fem|Number=Sing	23	nsubj	_	_
10	de	de	ADP	_	_	11	case	_	_
11	efeitos	efeito	NOUN	_	Gender=Masc|Number=Plur	9	nmod	_	_
12	de	de	ADP	_	_	14	case	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	art.	artigo	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	9	nmod	_	_
15	927	927	NUM	_	NumType=Card	14	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	§	§	SYM	_	_	14	nmod:spec	_	_
18	3º	3º	NUM	_	NumType=Ord	17	nmod	_	SpaceAfter=No
19	,	,	PUNCT	_	_	22	punct	_	_
20	de	de	ADP	_	_	22	case	_	_
21	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	CPC/15	CPC/15	PROPN	_	_	14	nmod	_	_
23	deve	dever	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
24	ser	ser	AUX	_	VerbForm=Inf	25	aux:pass	_	_
25	utilizada	utilizar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	23	xcomp	_	_
26	com	com	ADP	_	_	27	case	_	_
27	parcimônia	parcimônia	NOUN	_	Gender=Fem|Number=Sing	25	obl	_	SpaceAfter=No
28	,	,	PUNCT	_	_	30	punct	_	_
29	de	de	ADP	_	_	30	case	_	_
30	forma	forma	NOUN	_	Gender=Fem|Number=Sing	25	obl	_	_
31	excepcional	excepcional	ADJ	_	Number=Sing	30	amod	_	_
32	e	e	CCONJ	_	_	34	cc	_	_
33	em	em	ADP	_	_	34	case	_	_
34	hipóteses	hipótese	NOUN	_	Gender=Fem|Number=Plur	30	conj	_	_
35	específicas	específico	ADJ	_	Gender=Fem|Number=Plur	34	amod	_	SpaceAfter=No
36	,	,	PUNCT	_	_	45	punct	_	_
37	em	em	ADP	_	_	38	case	_	_
38	que	que	PRON	_	PronType=Rel	45	obl	_	_
39	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	40	det	_	_
40	entendimento	entendimento	NOUN	_	Gender=Masc|Number=Sing	45	nsubj	_	_
41	superado	superar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	40	acl	_	_
42	tiver	ter	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	45	aux	_	_
43	sido	ser	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	45	cop	_	_
44	efetivamente	efetivamente	ADV	_	_	45	advmod	_	_
45	capaz	capaz	ADJ	_	Number=Sing	34	acl:relcl	_	_
46	de	de	ADP	_	_	47	mark	_	_
47	gerar	gerar	VERB	_	VerbForm=Inf	45	acl	_	_
48	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	49	det	_	_
49	expectativa	expectativa	NOUN	_	Gender=Fem|Number=Sing	47	obj	_	_
50	legítima	legítimo	ADJ	_	Gender=Fem|Number=Sing	49	amod	_	_
51	de	de	ADP	_	_	52	case	_	_
52	atuação	atuação	NOUN	_	Gender=Fem|Number=Sing	49	nmod	_	_
53	em	em	ADP	_	_	55	case	_	_
54	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	55	det	_	_
55	jurisdicionados	jurisdicionados	NOUN	_	Gender=Masc|Number=Plur	52	nmod	_	_
56	e	e	CCONJ	_	_	61	cc	_	SpaceAfter=No
57	,	,	PUNCT	_	_	58	punct	_	_
58	ainda	ainda	ADV	_	_	61	advmod	_	SpaceAfter=No
59	,	,	PUNCT	_	_	58	punct	_	_
60	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	61	det	_	_
61	exigir	exigir	VERB	_	VerbForm=Inf	49	conj	_	_
62	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	63	det	_	_
63	interesse	interesse	NOUN	_	Gender=Masc|Number=Sing	61	obj	_	_
64	social	social	ADJ	_	Number=Sing	63	amod	_	_
65	envolvido	envolver	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	63	acl	_	SpaceAfter=No
66	"	"	PUNCT	_	_	23	punct	_	SpaceAfter=No
67	.	.	PUNCT	_	_	23	punct	_	_

~~~


