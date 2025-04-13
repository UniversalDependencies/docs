---
layout: base
title:  'Statistics of discourse in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `discourse`

This relation is universal.

3 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-SYM.html">SYM</a></tt> (1; 33% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-X.html">X</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Bueno	bueno	ADJ	_	_	7	discourse	_	SpaceAfter=No
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
15	que	que	SCONJ	_	_	17	mark	_	_
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
29	que	que	CCONJ	_	_	32	mark	_	_
30	no	no	ADV	_	Polarity=Neg	32	advmod	_	_
31	debemos	deber	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	32	aux	_	_
32	dejar	dejar	VERB	_	VerbForm=Inf	27	advcl	_	_
33	nos	yo	PRON	_	Case=Dat|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs	32	obl:arg	_	_
34	distraer	distraer	VERB	_	VerbForm=Inf	32	xcomp	_	_
35	por	por	ADP	_	_	37	case	_	_
36	otras	otro	DET	_	Gender=Fem|Number=Plur|PronType=Ind	37	det	_	_
37	cuestiones	cuestión	NOUN	_	Gender=Fem|Number=Plur	34	obl	_	SpaceAfter=No
38	,	,	PUNCT	_	PunctType=Comm	40	punct	_	_
39	que	que	SCONJ	_	_	40	mark	_	_
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	C.	c.	X	_	_	7	discourse	_	_
2	Mientras	mientras	ADV	_	_	7	advmod	_	_
3	tanto	tanto	PRON	_	NumType=Card|PronType=Dem	2	fixed	_	SpaceAfter=No
4	,	,	PUNCT	_	PunctType=Comm	2	punct	_	_
5	Hidrieo	hidrieo	NOUN	_	_	7	nsubj	_	_
6	había	haber	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	aux	_	_
7	cumplido	cumplir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	det	_	_
9	parte	parte	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	_
10	enviando	enviar	VERB	_	VerbForm=Ger	9	acl	_	_
11	a	a	ADP	_	_	12	case	_	_
12	Chipre	chipre	PROPN	_	_	10	obl	_	_
13	40	40	NUM	_	NumForm=Digit|NumType=Card	14	nummod	_	_
14	navíos	navío	NOUN	_	Gender=Masc|Number=Plur	10	obj	_	_
15	y	y	CCONJ	_	_	17	cc	_	_
16	8.000	8000	NUM	_	NumForm=Digit|NumType=Card	17	nummod	_	_
17	mercenarios	mercenario	NOUN	_	Gender=Masc|Number=Plur	14	conj	_	_
18	bajo	bajo	ADP	_	_	20	case	_	_
19	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	mando	mando	NOUN	_	Gender=Masc|Number=Sing	14	nmod	_	_
21	de	de	ADP	_	_	23	case	_	_
22	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	ateniense	ateniense	NOUN	_	Number=Sing	20	nmod	_	_
24	Foción	foción	PROPN	_	_	23	appos	_	_
25	y	y	CCONJ	_	_	27	cc	_	_
26	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	líder	líder	NOUN	_	Number=Sing	20	conj	_	_
28	chipriota	chipriota	ADJ	_	Number=Sing	27	amod	_	_
29	Evágoras	evágoras	NOUN	_	_	27	appos	_	_
30	II	ii	NUM	_	NumForm=Roman|NumType=Card	29	nummod	_	SpaceAfter=No
31	.	.	PUNCT	_	PunctType=Peri	7	punct	_	_

~~~


