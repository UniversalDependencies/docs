---
layout: base
title:  'Statistics of expl in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `expl`

This relation is universal.

951 nodes (0%) are attached to their parents as `expl`.

577 instances of `expl` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11251314405889.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (947; 100% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	deputado	deputado	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	se	se	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	aproximou	aproximar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 expl	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	filme	filme	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	passa	passar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	como	como	ADP	_	_	5	case	_	_
5	vento	vento	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
6	por	por	ADP	_	_	8	case	_	_
7	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	questões	questão	NOUN	_	Gender=Fem|Number=Plur	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	20	punct	_	_
10	nada	nada	ADV	_	Polarity=Neg	11	advmod	_	_
11	pequenas	pequeno	ADJ	_	Gender=Fem|Number=Plur	8	amod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	20	punct	_	_
13	de	de	ADP	_	_	15	case	_	_
14	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	tratamentos	tratamento	NOUN	_	Gender=Masc|Number=Plur	8	nmod	_	_
16	psiquiátricos	psiquiátrico	ADJ	_	Gender=Masc|Number=Plur	15	amod	_	_
17	contemporâneos	contemporâneo	ADJ	_	Gender=Masc|Number=Plur	15	amod	_	_
18	e	e	CCONJ	_	_	20	cc	_	_
19	se	se	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	expl	_	_
20	fixa	fixo	ADJ	_	Number=Sing	3	conj	_	_
21	em	em	ADP	_	_	22	case	_	_
22	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	20	obl	_	_
23	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	24	nsubj	_	_
24	existe	existir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl:relcl	_	_
25	de	de	ADP	_	_	27	case	_	_
26	mais	mais	ADV	_	_	27	advmod	_	_
27	óbvio	óbvio	ADJ	_	Gender=Masc|Number=Sing	24	obl	_	_
28	em	em	ADP	_	_	30	case	_	_
29	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	história	história	NOUN	_	Gender=Fem|Number=Sing	24	obl	_	SpaceAfter=No
31	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	Veja	ver	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	se	se	SCONJ	_	Case=Acc|Gender=Unsp|PronType=Prs	1	expl	_	SUBJ_INDEF
3	,	,	PUNCT	_	_	1	punct	_	_
4	a	a	ADP	_	_	5	case	_	MWE=a_título_de
5	título	título	NOUN	_	_	1	obl	_	_
6	de	de	ADP	_	_	7	case	_	_
7	exemplo	exemplo	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	1	punct	_	_
9	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	textos	texto	NOUN	_	Gender=Masc|Number=Plur	1	obj	_	_
11	«	«	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	Coração	Coração	NOUN	_	Gender=Masc|Number=Sing	10	appos	_	MWE=Coração_,_vinho_e_legumes|MWEPOS=PROPN|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	vinho	vinho	NOUN	_	Gender=Masc|Number=Sing	12	conj	_	_
15	e	e	CCONJ	_	_	12	cc	_	_
16	legumes	legumes	NOUN	_	Gender=Masc|Number=Plur	12	conj	_	SpaceAfter=No
17	»	»	PUNCT	_	_	27	punct	_	SpaceAfter=No
18	,	,	PUNCT	_	_	1	punct	_	_
19	PÚBLICO	Público	PROPN	_	Gender=Masc|Number=Sing	12	appos	_	_
20	de	de	ADP	_	_	23	case	_	_
21	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
22	passado	passar	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	23	acl	_	_
23	dia	dia	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	_
24	16	16	NUM	_	NumType=Card	23	nummod	_	SpaceAfter=No
25	;	;	PUNCT	_	_	1	punct	_	_
26	«	«	PUNCT	_	_	27	punct	_	SpaceAfter=No
27	Álcool	Álcool	PROPN	_	Gender=Masc|Number=Sing	12	conj	_	MWE=Álcool_faz_bem|MWEPOS=PROPN
28	faz	fazer	VERB	_	Number=Sing	27	flat:name	_	_
29	bem	bem	ADV	_	Number=Sing	27	flat:name	_	_
30	a	a	ADP	_	_	27	flat:name	_	_
31	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	flat:name	_	_
32	coração	coração	NOUN	_	Gender=Masc|Number=Sing	27	flat:name	_	SpaceAfter=No
33	»	»	PUNCT	_	_	27	punct	_	SpaceAfter=No
34	,	,	PUNCT	_	_	38	punct	_	_
35	19.11.93	19.11.93	NUM	_	NumType=Card	27	appos	_	SpaceAfter=No
36	;	;	PUNCT	_	_	1	punct	_	_
37	«	«	PUNCT	_	_	38	punct	_	SpaceAfter=No
38	Glórias	Glórias	NOUN	_	Gender=Fem|Number=Plur	12	conj	_	MWE=Glórias_e_misérias|MWEPOS=PROPN
39	e	e	CCONJ	_	Number=Sing	38	cc	_	_
40	misérias	misérias	NOUN	_	Gender=Fem|Number=Plur	38	conj	_	_
41	de	de	ADP	_	_	43	case	_	_
42	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	43	det	_	_
43	álcool	álcool	NOUN	_	Gender=Masc|Number=Sing	38	nmod	_	SpaceAfter=No
44	»	»	PUNCT	_	_	38	punct	_	SpaceAfter=No
45	,	,	PUNCT	_	_	49	punct	_	_
46	15.8.93	15.8.93	NUM	_	NumType=Card	38	appos	_	SpaceAfter=No
47	;	;	PUNCT	_	_	1	punct	_	_
48	«	«	PUNCT	_	_	49	punct	_	SpaceAfter=No
49	Álcool	Álcool	NOUN	_	Gender=Masc|Number=Sing	12	conj	_	MWE=Álcool_protege_coração_?|MWEPOS=PROPN
50	protege	proteger	VERB	_	_	49	flat:name	_	_
51	coração	coração	NOUN	_	Number=Sing	49	flat:name	_	SpaceAfter=No
52	?	?	PUNCT	_	_	49	flat:name	_	SpaceAfter=No
53	»	»	PUNCT	_	_	1	punct	_	SpaceAfter=No
54	,	,	PUNCT	_	_	57	punct	_	_
55	3.9.91	3.9.91	NUM	_	NumType=Card	49	appos	_	SpaceAfter=No
56	;	;	PUNCT	_	_	1	punct	_	_
57	Vinho	vinho	NOUN	_	Gender=Masc|Number=Sing	12	conj	_	MWE=Vinho_contra_colesterol_?|MWEPOS=PROPN
58	contra	contra	ADP	_	_	57	flat:name	_	_
59	colesterol	colesterol	NOUN	_	_	57	flat:name	_	SpaceAfter=No
60	?	?	PUNCT	_	Number=Sing	57	flat:name	_	SpaceAfter=No
61	,	,	PUNCT	_	_	57	punct	_	_
62	12.8.91	12.8.91	NUM	_	NumType=Card	57	appos	_	SpaceAfter=No
63	.	.	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


