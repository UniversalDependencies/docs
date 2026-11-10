---
layout: base
title:  'Statistics of discourse in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `discourse`

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> (2; 40% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-SYM.html">SYM</a></tt> (1; 20% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-X.html">X</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 66	bgColor:blue
# visual-style 66	fgColor:white
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 68 66 discourse	color:blue
1	Una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	variedad	variedad	NOUN	_	Gender=Fem|Number=Sing	25	nsubj	_	_
3	cultivada	cultivar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	2	acl	_	SpaceAfter=No
4	,	,	PUNCT	_	PunctType=Comm	8	punct	_	_
5	a	a	ADP	_	_	6	case	_	_
6	veces	vez	NOUN	_	Gender=Fem|Number=Plur	8	obl	_	_
7	también	también	ADV	_	_	8	advmod	_	_
8	denominada	denominar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	2	acl	_	_
9	por	por	ADP	_	_	11	case	_	_
10	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	det	_	_
11	nombre	nombre	NOUN	_	Gender=Masc|Number=Sing	8	obl:agent	_	_
12	en	en	ADP	_	_	13	case	_	_
13	inglés	inglés	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	PunctType=Comm	15	punct	_	_
15	cultivar	cultivar	NOUN	_	VerbForm=Inf	11	appos	_	_
16	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	17	punct	_	SpaceAfter=No
17	contracción	contracción	NOUN	_	Gender=Fem|Number=Sing	15	appos	_	_
18	de	de	ADP	_	_	20	case	_	_
19	cultivated	cultivated	PROPN	_	Gender=Fem|Number=Sing	20	acl	_	_
20	variety	variety	PROPN	_	Number=Sing	17	nmod	_	SpaceAfter=No
21	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	17	punct	_	SpaceAfter=No
22	,	,	PUNCT	_	PunctType=Comm	15	punct	_	_
23	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	cop	_	_
24	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	término	término	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
26	empleado	emplear	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	25	acl	_	_
27	en	en	ADP	_	_	28	case	_	_
28	Botánica	botánica	NOUN	_	_	26	obl	_	_
29	y	y	CCONJ	_	_	30	cc	_	_
30	agronomía	agronomía	NOUN	_	Gender=Fem|Number=Sing	28	conj	_	_
31	para	para	ADP	_	_	33	case	_	_
32	aquellas	aquel	DET	_	Gender=Fem|Number=Plur|PronType=Dem	33	det	_	_
33	poblaciones	población	NOUN	_	Gender=Fem|Number=Plur	25	nmod	_	_
34	de	de	ADP	_	_	35	case	_	_
35	plantas	planta	NOUN	_	Gender=Fem|Number=Plur	33	nmod	_	_
36	cultivadas	cultivar	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	35	acl	_	_
37	que	que	PRON	_	PronType=Rel	40	nsubj	_	_
38	son	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	40	cop	_	_
39	genéticamente	genéticamente	ADV	_	_	40	advmod	_	_
40	homogéneas	homogéneo	ADJ	_	Gender=Fem|Number=Plur	33	acl:relcl	_	_
41	y	y	CCONJ	_	_	45	cc	_	_
42	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	43	punct	_	SpaceAfter=No
43	1	1	NUM	_	NumForm=Digit|NumType=Card	45	discourse	_	SpaceAfter=No
44	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	43	punct	_	_
45	comparten	compartir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	40	conj	_	_
46	características	característica	NOUN	_	Gender=Fem|Number=Plur	45	obj	_	_
47	de	de	ADP	_	_	48	case	_	_
48	relevancia	relevancia	NOUN	_	Gender=Fem|Number=Sing	46	nmod	_	_
49	agrícola	agrícola	ADJ	_	Number=Sing	48	amod	_	_
50	que	que	PRON	_	PronType=Rel	51	nsubj	_	_
51	permiten	permitir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	46	acl:relcl	_	_
52	distinguir	distinguir	VERB	_	VerbForm=Inf	51	xcomp	_	_
53	claramente	claramente	ADV	_	_	52	advmod	_	_
54	a	a	ADP	_	_	56	case	_	_
55	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	56	det	_	_
56	población	población	NOUN	_	Gender=Fem|Number=Sing	52	obj	_	_
57	de	de	ADP	_	_	60	case	_	_
58	las	el	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	60	det	_	_
59	demás	demás	ADJ	_	Number=Plur	60	amod	_	_
60	poblaciones	población	NOUN	_	Gender=Fem|Number=Plur	52	obl	_	_
61	de	de	ADP	_	_	63	case	_	_
62	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	63	det	_	_
63	especie	especie	NOUN	_	Gender=Fem|Number=Sing	60	nmod	_	_
64	y	y	CCONJ	_	_	68	cc	_	_
65	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	66	punct	_	SpaceAfter=No
66	2	2	NUM	_	NumForm=Digit|NumType=Card	68	discourse	_	SpaceAfter=No
67	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	66	punct	_	_
68	traspasan	traspasar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	40	conj	_	_
69	estas	este	DET	_	Gender=Fem|Number=Plur|PronType=Dem	70	det	_	_
70	características	característica	NOUN	_	Gender=Fem|Number=Plur	68	obj	_	_
71	de	de	ADP	_	_	72	case	_	_
72	generación	generación	NOUN	_	Gender=Fem|Number=Sing	68	obl	_	_
73	en	en	ADP	_	_	74	case	_	_
74	generación	generación	NOUN	_	Gender=Fem|Number=Sing	72	nmod	_	SpaceAfter=No
75	,	,	PUNCT	_	PunctType=Comm	77	punct	_	_
76	de	de	ADP	_	_	77	case	_	_
77	forma	forma	NOUN	_	Gender=Fem|Number=Sing	68	obl	_	_
78	sexual	sexual	ADJ	_	Number=Sing	77	amod	_	_
79	o	o	CCONJ	_	_	80	cc	_	_
80	asexual	asexual	ADJ	_	Number=Sing	78	conj	_	SpaceAfter=No
81	.	.	PUNCT	_	PunctType=Peri	25	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Bueno	buen	ADJ	_	_	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	PunctType=Comm	1	punct	_	_
3	cuando	cuando	SCONJ	_	_	4	mark	_	_
4	llegue	llegar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
5	ese	ese	DET	_	Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	momento	momento	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
7	hablaremos	hablar	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	_
8	de	de	ADP	_	_	10	case	_	_
9	esos	ese	DET	_	Gender=Masc|Number=Plur|PronType=Dem	10	det	_	_
10	temas	tema	NOUN	_	Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	_	PunctType=Comm	28	punct	_	_
12	pero	pero	CCONJ	_	_	28	cc	_	_
13	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	tarea	tarea	NOUN	_	Gender=Fem|Number=Sing	28	nsubj	_	_
15	que	que	PRON	_	PronType=Rel	17	nsubj	_	_
16	nos	yo	PRON	_	Case=Dat|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs	17	obl:arg	_	_
17	queda	quedar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	acl:relcl	_	_
18	de	de	ADP	_	_	19	case	_	_
19	reflexión	reflexión	NOUN	_	Gender=Fem|Number=Sing	17	obl	_	SpaceAfter=No
20	,	,	PUNCT	_	PunctType=Comm	22	punct	_	_
21	de	de	ADP	_	_	22	case	_	_
22	propuestas	propuesta	NOUN	_	Gender=Fem|Number=Plur	19	conj	_	_
23	y	y	CCONJ	_	_	25	cc	_	_
24	de	de	ADP	_	_	25	case	_	_
25	análisis	análisis	NOUN	_	Gender=Masc	19	conj	_	_
26	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	_
27	tan	tanto	ADV	_	_	28	advmod	_	_
28	importante	importante	ADJ	_	Number=Sing	7	conj	_	_
29	que	que	SCONJ	_	_	32	mark	_	_
30	no	no	ADV	_	Polarity=Neg	32	advmod	_	_
31	debemos	deber	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	32	aux	_	_
32	dejar	dejar	VERB	_	VerbForm=Inf	27	advcl	_	_
33	nos	yo	PRON	_	Case=Dat|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs	32	obl:arg	_	_
34	distraer	distraer	VERB	_	VerbForm=Inf	32	xcomp	_	_
35	por	por	ADP	_	_	37	case	_	_
36	otras	otro	DET	_	Gender=Fem|Number=Plur|PronType=Ind	37	det	_	_
37	cuestiones	cuestión	NOUN	_	Gender=Fem|Number=Plur	34	obl	_	SpaceAfter=No
38	,	,	PUNCT	_	PunctType=Comm	40	punct	_	_
39	que	que	PRON	_	PronType=Rel	40	nsubj	_	_
40	llegarán	llegar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	37	acl:relcl	_	SpaceAfter=No
41	.	.	PUNCT	_	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 discourse	color:blue
1	No	no	ADV	_	Polarity=Neg	2	advmod	_	_
2	sé	saber	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	sí	si	SCONJ	_	Typo=Yes	5	mark	_	CorrectForm=si
4	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	caro	caro	ADJ	_	Gender=Masc|Number=Sing	2	ccomp	_	_
6	porque	porque	SCONJ	_	_	9	mark	_	_
7	no	no	ADV	_	Polarity=Neg	9	advmod	_	_
8	he	haber	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	pagado	pagar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	advcl	_	_
10	todavía	todavía	ADV	_	_	9	advmod	_	SpaceAfter=No
11	;)	;)	SYM	_	_	2	discourse	_	_

~~~


