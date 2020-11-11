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
1	Sí	sí	INTJ	ADV	_	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	PunctType=Comm	1	punct	_	_
3	incluso	incluso	ADV	ADV	_	0	root	_	_
4	a	a	ADP	ADP	AdpType=Prep	5	mark	_	_
5	rodar	rodar	VERB	AUX	VerbForm=Inf	3	advcl	_	_
6	con	con	ADP	ADP	AdpType=Prep	7	case	_	_
7	cucarachas	cucaracha	NOUN	NOUN	Gender=Fem|Number=Plur	5	obl	_	_
8	como	como	SCONJ	SCONJ	_	10	mark	_	_
9	lo	él	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	10	obj	_	_
10	hice	hacer	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	advcl	_	_
11	y	y	CCONJ	CCONJ	_	28	cc	_	_
12	si	si	SCONJ	SCONJ	_	15	mark	_	_
13	me	yo	PRON	PRON	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	15	iobj	_	_
14	hubiera	haber	AUX	AUX	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	aux	_	_
15	hecho	hacer	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	28	advcl	_	_
16	poner	poner	VERB	VERB	VerbForm=Inf	15	xcomp	_	_
17	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	cabeza	cabeza	NOUN	NOUN	Gender=Fem|Number=Sing	16	obj	_	_
19	debajo	debajo	ADV	ADV	AdpType=Prep	22	case	_	MWE=debajo_de|MWEPOS=ADP
20	de	de	ADP	ADP	AdpType=Prep	19	fixed	_	_
21	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	pata	pata	NOUN	NOUN	Gender=Fem|Number=Sing	16	obl	_	_
23	de	de	ADP	ADP	AdpType=Prep	25	case	_	_
24	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	elefante	elefante	NOUN	NOUN	Gender=Masc|Number=Sing	22	nmod	_	_
26	lo	él	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	28	obj	_	_
27	habría	haber	AUX	AUX	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	28	aux	_	_
28	hecho	hacer	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	conj	_	SpaceAfter=No
29	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 discourse	color:blue
1	"	"	PUNCT	PUNCT	PunctType=Quot	4	punct	_	SpaceAfter=No
2	Sólo	sólo	ADV	ADV	_	4	advmod	_	_
3	me	yo	PRON	PRON	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	4	iobj	_	_
4	faltaba	faltar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	44	ccomp	_	_
5	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	principio	principio	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
8	entonces	entonces	ADV	ADV	_	10	advmod	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
10	pongo	poner	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	advcl	_	_
11	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	radio	radio	NOUN	NOUN	Gender=Fem|Number=Sing	10	obj	_	_
13	y	y	CCONJ	CCONJ	_	14	cc	_	_
14	oigo	oír	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	conj	_	_
15	a	a	ADP	ADP	AdpType=Prep	16	case	_	_
16	José	José	PROPN	PROPN	_	14	obj	_	MWE=José_María_García|MWEPOS=PROPN
17	María	María	PROPN	PROPN	_	16	flat	_	_
18	García	García	PROPN	PROPN	_	16	flat	_	_
19	diciendo	decir	VERB	AUX	VerbForm=Ger	14	xcomp	_	_
20	'	'	SYM	SYM	_	22	nmod	_	SpaceAfter=No
21	Ojo	ojo	INTJ	INTJ	_	22	discourse	_	_
22	lo	él	PRON	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	19	ccomp	_	_
23	que	que	PRON	PRON	PronType=Int,Rel	25	nsubj	_	_
24	se	él	PRON	PRON	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	25	expl:pv	_	_
25	avecina	avecinar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl	_	SpaceAfter=No
26	,	,	PUNCT	PUNCT	PunctType=Comm	32	punct	_	_
27	a	a	ADP	ADP	AdpType=Prep	32	case	_	MWE=a_la_vuelta_de|MWEPOS=ADP
28	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	fixed	_	_
29	vuelta	vuelta	NOUN	NOUN	_	27	fixed	_	_
30	de	de	ADP	ADP	AdpType=Prep	27	fixed	_	_
31	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	32	det	_	_
32	esquina	esquina	NOUN	NOUN	Gender=Fem|Number=Sing	25	obl	_	SpaceAfter=No
33	'	'	SYM	SYM	_	22	nmod	_	SpaceAfter=No
34	,	,	PUNCT	PUNCT	PunctType=Comm	37	punct	_	_
35	y	y	CCONJ	CCONJ	_	37	cc	_	_
36	me	yo	PRON	PRON	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	37	iobj	_	_
37	hizo	hacer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	conj	_	_
38	mucha	mucho	DET	DET	Gender=Fem|Number=Sing|NumType=Card|PronType=Ind	39	det	_	_
39	gracia	gracia	NOUN	NOUN	Gender=Fem|Number=Sing	37	obj	_	_
40	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	41	det	_	_
41	rima	rima	NOUN	NOUN	Gender=Fem|Number=Sing	37	nsubj	_	SpaceAfter=No
42	"	"	PUNCT	PUNCT	PunctType=Quot	4	punct	_	SpaceAfter=No
43	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
44	recuerda	recordar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
45	.	.	PUNCT	PUNCT	PunctType=Peri	44	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 24 discourse	color:blue
1	Los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	sensacionalistas	sensacionalista	NOUN	NOUN	Number=Plur	6	nsubj	_	_
3	fueron	ser	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
4	aún	aún	ADV	ADV	_	6	advmod	_	_
5	más	más	ADV	ADV	Degree=Cmp	4	advmod	_	_
6	categóricos	categórico	ADJ	ADJ	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	:	:	PUNCT	PUNCT	PunctType=Colo	10	punct	_	_
8	The	The	PROPN	PROPN	_	10	nsubj	_	MWE=The_Sun|MWEPOS=PROPN
9	Sun	Sun	PROPN	PROPN	_	8	flat	_	_
10	tituló	titular	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	parataxis	_	_
11	su	su	DET	DET	Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	det	_	_
12	primera	primero	ADJ	ADJ	Gender=Fem|Number=Sing|NumType=Ord	13	amod	_	_
13	portada	portada	NOUN	NOUN	Gender=Fem|Number=Sing	10	obj	_	_
14	del	del	ADP	ADP	AdpType=Preppron	15	case	_	_
15	2002	2002	NOUN	NOUN	AdvType=Tim	13	nmod	_	_
16	con	con	ADP	ADP	AdpType=Prep	21	case	_	_
17	"	"	PUNCT	PUNCT	PunctType=Quot	21	punct	_	SpaceAfter=No
18	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	MWE=El_euro_ha_nacido_y_,_gracias_a_Dios_,_el_Reino_Unido_no_forma_parte_de_él|MWEPOS=PROPN
19	euro	euro	NOUN	PROPN	_	21	nsubj	_	_
20	ha	haber	AUX	PROPN	VerbForm=Fin	21	aux	_	_
21	nacido	nacido	VERB	PROPN	VerbForm=Fin	10	parataxis	_	_
22	y	y	CCONJ	CCONJ	_	32	cc	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	24	punct	_	_
24	gracias	gracias	INTJ	PROPN	_	32	discourse	_	_
25	a	a	ADP	ADP	AdpType=Prep	26	case	_	_
26	Dios	dios	PROPN	PROPN	_	24	iobj	_	SpaceAfter=No
27	,	,	PUNCT	PUNCT	_	24	punct	_	_
28	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	Reino	reino	PROPN	PROPN	_	32	nsubj	_	_
30	Unido	unido	PROPN	PROPN	_	29	flat	_	_
31	no	no	PART	PART	_	32	advmod	_	_
32	forma	forma	VERB	PROPN	VerbForm=Fin	21	conj	_	_
33	parte	parte	NOUN	PROPN	_	32	obj	_	_
34	de	de	ADP	ADP	AdpType=Prep	35	case	_	_
35	él	él	PRON	PROPN	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	33	nmod	_	SpaceAfter=No
36	"	"	PUNCT	PUNCT	PunctType=Quot	21	punct	_	SpaceAfter=No
37	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


