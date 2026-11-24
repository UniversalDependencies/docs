---
layout: base
title:  'Statistics of nummod in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `nummod`

This relation is universal.

386 nodes (0%) are attached to their parents as `nummod`.

356 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5440414507772.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> (347; 90% instances), <tt><a href="pt_portjur-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> (34; 9% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	hipótese	hipótese	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	pode	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ocorrer	ocorrer	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	de	de	ADP	_	_	7	case	_	_
6	duas	dois	NUM	_	Gender=Fem|NumType=Card	7	nummod	_	_
7	formas	forma	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nummod	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	execução	execução	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
4	fiscal	fiscal	ADJ	_	Number=Sing	3	amod	_	_
5	considera	considerar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	5	expl:impers	_	_
7	preço	preço	NOUN	_	Gender=Masc|Number=Sing	5	xcomp	_	_
8	vil	vil	ADJ	_	Number=Sing	7	amod	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	arrematação	arrematação	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
11	por	por	ADP	_	_	12	case	_	_
12	valor	valor	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
13	igual	igual	ADJ	_	Number=Sing	12	amod	_	_
14	ou	ou	CCONJ	_	_	15	cc	_	_
15	inferior	inferior	ADJ	_	Number=Sing	13	conj	_	_
16	a	a	ADP	_	_	18	case	_	_
17	30	30	NUM	_	NumType=Card	18	nummod	_	SpaceAfter=No
18	%	%	SYM	_	_	13	obl	_	_
19	de	de	ADP	_	_	21	case	_	_
20	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	avaliação	avaliação	NOUN	_	Gender=Fem|Number=Sing	18	nmod	_	_
22	de	de	ADP	_	_	24	case	_	_
23	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	bem	bem	NOUN	_	Gender=Masc|Number=Sing	21	nmod	_	_
25	(	(	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	art.	artigo	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	5	parataxis	_	_
27	692	692	NUM	_	NumType=Card	26	nmod	_	_
28	de	de	ADP	_	_	30	case	_	_
29	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	CPC	CPC	PROPN	_	_	26	nmod	_	SpaceAfter=No
31	)	)	PUNCT	_	_	26	punct	_	SpaceAfter=No
32	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
2	três	três	NUM	_	NumType=Card	3	nummod	_	_
3	Recursos	Recursos	PROPN	_	_	16	nsubj	_	_
4	Especiais	Especiais	PROPN	_	_	3	flat:name	_	_
5	afetados	afetar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	3	acl	_	_
6	e	e	CCONJ	_	_	9	cc	_	_
7	ora	ora	ADV	_	_	9	advmod	_	_
8	em	em	ADP	_	_	9	case	_	_
9	julgamento	julgamento	NOUN	_	Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	por	por	ADP	_	_	13	case	_	_
12	esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	13	det	_	_
13	Primeira	Primeira	PROPN	_	_	5	obl:agent	_	_
14	Seção	Seção	PROPN	_	_	13	flat:name	_	SpaceAfter=No
15	,	,	PUNCT	_	_	13	punct	_	_
16	tratam	tratar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
17	de	de	ADP	_	_	18	case	_	_
18	hipóteses	hipótese	NOUN	_	Gender=Fem|Number=Plur	16	obl	_	_
19	anteriores	anterior	ADJ	_	Number=Plur	18	amod	_	_
20	a	a	ADP	_	_	22	case	_	_
21	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	Lei	Lei	PROPN	_	_	19	obl	_	_
23	13.954/2019	13.954/2019	NUM	_	NumType=Card	22	nmod	_	SpaceAfter=No
24	,	,	PUNCT	_	_	48	punct	_	_
25	em	em	ADP	_	_	26	case	_	_
26	que	que	PRON	_	PronType=Rel	48	obl	_	_
27	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	pedido	pedido	NOUN	_	Gender=Masc|Number=Sing	48	nsubj	_	_
29	de	de	ADP	_	_	30	case	_	_
30	reforma	reforma	NOUN	_	Gender=Fem|Number=Sing	28	nmod	_	SpaceAfter=No
31	,	,	PUNCT	_	_	33	punct	_	_
32	em	em	ADP	_	_	33	case	_	_
33	face	face	NOUN	_	Gender=Fem|Number=Sing	48	obl	_	_
34	de	de	ADP	_	_	35	case	_	_
35	exame	exame	NOUN	_	Gender=Masc|Number=Sing	33	nmod	_	_
36	de	de	ADP	_	_	38	case	_	_
37	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	38	det	_	_
38	militar	militar	NOUN	_	Number=Sing	35	nmod	_	_
39	que	que	PRON	_	PronType=Rel	40	nsubj	_	_
40	detectou	detectar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	35	acl:relcl	_	_
41	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	42	det	_	_
42	presença	presença	NOUN	_	Gender=Fem|Number=Sing	40	obj	_	_
43	de	de	ADP	_	_	45	case	_	_
44	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	45	det	_	_
45	vírus	vírus	NOUN	_	Gender=Masc	42	nmod	_	_
46	HIV	HIV	PROPN	_	_	45	nmod	_	SpaceAfter=No
47	,	,	PUNCT	_	_	40	punct	_	_
48	deu	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	18	acl:relcl	_	_
49	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	48	expl	_	_
50	antes	antes	ADV	_	_	48	advmod	_	_
51	de	de	ADP	_	_	53	case	_	_
52	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	53	det	_	_
53	alteração	alteração	NOUN	_	Gender=Fem|Number=Sing	50	obl	_	_
54	legislativa	legislativo	ADJ	_	Gender=Fem|Number=Sing	53	amod	_	SpaceAfter=No
55	.	.	PUNCT	_	_	16	punct	_	_

~~~


