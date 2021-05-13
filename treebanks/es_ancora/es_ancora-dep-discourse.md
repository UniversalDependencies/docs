---
layout: base
title:  'Statistics of discourse in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `discourse`

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Sí	sí	INTJ	_	_	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	PunctType=Comm	1	punct	_	_
3	incluso	incluso	ADV	_	_	0	root	_	_
4	a	a	ADP	_	_	5	mark	_	_
5	rodar	rodar	VERB	_	VerbForm=Inf	3	advcl	_	_
6	con	con	ADP	_	_	7	case	_	_
7	cucarachas	cucaracha	NOUN	_	Gender=Fem|Number=Plur	5	obl	_	_
8	como	como	SCONJ	_	_	10	mark	_	_
9	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	10	obj	_	_
10	hice	hacer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	advcl	_	_
11	y	y	CCONJ	_	_	28	cc	_	_
12	si	si	SCONJ	_	_	15	mark	_	_
13	me	yo	PRON	_	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	15	iobj	_	_
14	hubiera	haber	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	aux	_	_
15	hecho	hacer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	28	advcl	_	_
16	poner	poner	VERB	_	VerbForm=Inf	15	xcomp	_	_
17	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	cabeza	cabeza	NOUN	_	Gender=Fem|Number=Sing	16	obj	_	_
19	debajo	debajo	ADV	_	_	22	case	_	MWE=debajo_de|MWEPOS=ADP
20	de	de	ADP	_	_	19	fixed	_	_
21	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	pata	pata	NOUN	_	Gender=Fem|Number=Sing	16	obl	_	_
23	de	de	ADP	_	_	25	case	_	_
24	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	elefante	elefante	NOUN	_	Gender=Masc|Number=Sing	22	nmod	_	_
26	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	28	obj	_	_
27	habría	haber	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	28	aux	_	_
28	hecho	hacer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	conj	_	SpaceAfter=No
29	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 discourse	color:blue
1	"	"	PUNCT	_	PunctType=Quot	4	punct	_	SpaceAfter=No
2	Sólo	sólo	ADV	_	_	4	advmod	_	_
3	me	yo	PRON	_	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	4	iobj	_	_
4	faltaba	faltar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	44	ccomp	_	_
5	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	principio	principio	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	PunctType=Comm	8	punct	_	_
8	entonces	entonces	ADV	_	_	10	advmod	_	SpaceAfter=No
9	,	,	PUNCT	_	PunctType=Comm	8	punct	_	_
10	pongo	poner	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	advcl	_	_
11	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	radio	radio	NOUN	_	Gender=Fem|Number=Sing	10	obj	_	_
13	y	y	CCONJ	_	_	14	cc	_	_
14	oigo	oír	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	conj	_	_
15	a	a	ADP	_	_	16	case	_	_
16	José	José	PROPN	_	_	14	obj	_	MWE=José_María_García|MWEPOS=PROPN
17	María	María	PROPN	_	_	16	flat	_	_
18	García	García	PROPN	_	_	16	flat	_	_
19	diciendo	decir	VERB	_	VerbForm=Ger	14	xcomp	_	_
20	'	'	SYM	_	_	22	nmod	_	SpaceAfter=No
21	Ojo	ojo	INTJ	_	_	22	discourse	_	_
22	lo	él	PRON	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	19	ccomp	_	_
23	que	que	PRON	_	PronType=Int,Rel	25	nsubj	_	_
24	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	25	expl:pv	_	_
25	avecina	avecinar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl	_	SpaceAfter=No
26	,	,	PUNCT	_	PunctType=Comm	32	punct	_	_
27	a	a	ADP	_	_	32	case	_	MWE=a_la_vuelta_de|MWEPOS=ADP
28	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	fixed	_	_
29	vuelta	vuelta	NOUN	_	_	27	fixed	_	_
30	de	de	ADP	_	_	27	fixed	_	_
31	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	32	det	_	_
32	esquina	esquina	NOUN	_	Gender=Fem|Number=Sing	25	obl	_	SpaceAfter=No
33	'	'	SYM	_	_	22	nmod	_	SpaceAfter=No
34	,	,	PUNCT	_	PunctType=Comm	37	punct	_	_
35	y	y	CCONJ	_	_	37	cc	_	_
36	me	yo	PRON	_	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	37	iobj	_	_
37	hizo	hacer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	conj	_	_
38	mucha	mucho	DET	_	Gender=Fem|Number=Sing|NumType=Card|PronType=Ind	39	det	_	_
39	gracia	gracia	NOUN	_	Gender=Fem|Number=Sing	37	obj	_	_
40	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	_	_
41	rima	rima	NOUN	_	Gender=Fem|Number=Sing	37	nsubj	_	SpaceAfter=No
42	"	"	PUNCT	_	PunctType=Quot	4	punct	_	SpaceAfter=No
43	,	,	PUNCT	_	PunctType=Comm	4	punct	_	_
44	recuerda	recordar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
45	.	.	PUNCT	_	PunctType=Peri	44	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 25 discourse	color:blue
1	Los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	sensacionalistas	sensacionalista	NOUN	_	Number=Plur	6	nsubj	_	_
3	fueron	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
4	aún	aún	ADV	_	_	6	advmod	_	_
5	más	más	ADV	_	Degree=Cmp	4	advmod	_	_
6	categóricos	categórico	ADJ	_	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	:	:	PUNCT	_	PunctType=Colo	10	punct	_	_
8	The	The	PROPN	_	_	10	nsubj	_	MWE=The_Sun|MWEPOS=PROPN
9	Sun	Sun	PROPN	_	_	8	flat	_	_
10	tituló	titular	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	parataxis	_	_
11	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	det	_	_
12	primera	primero	ADJ	_	Gender=Fem|Number=Sing|NumType=Ord	13	amod	_	_
13	portada	portada	NOUN	_	Gender=Fem|Number=Sing	10	obj	_	_
14	de	de	ADP	_	_	16	case	_	_
15	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	2002	2002	NOUN	_	AdvType=Tim	13	nmod	_	_
17	con	con	ADP	_	_	22	case	_	_
18	"	"	PUNCT	_	PunctType=Quot	22	punct	_	SpaceAfter=No
19	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	MWE=El_euro_ha_nacido_y_,_gracias_a_Dios_,_el_Reino_Unido_no_forma_parte_de_él|MWEPOS=PROPN
20	euro	euro	NOUN	_	_	22	nsubj	_	_
21	ha	haber	AUX	_	VerbForm=Fin	22	aux	_	_
22	nacido	nacido	VERB	_	VerbForm=Fin	10	parataxis	_	_
23	y	y	CCONJ	_	_	33	cc	_	SpaceAfter=No
24	,	,	PUNCT	_	_	25	punct	_	_
25	gracias	gracias	INTJ	_	_	33	discourse	_	_
26	a	a	ADP	_	_	27	case	_	_
27	Dios	dios	PROPN	_	_	25	iobj	_	SpaceAfter=No
28	,	,	PUNCT	_	_	25	punct	_	_
29	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	Reino	reino	PROPN	_	_	33	nsubj	_	_
31	Unido	unido	PROPN	_	_	30	flat	_	_
32	no	no	PART	_	_	33	advmod	_	_
33	forma	forma	VERB	_	VerbForm=Fin	22	conj	_	_
34	parte	parte	NOUN	_	_	33	obj	_	_
35	de	de	ADP	_	_	36	case	_	_
36	él	él	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	34	nmod	_	SpaceAfter=No
37	"	"	PUNCT	_	PunctType=Quot	22	punct	_	SpaceAfter=No
38	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


