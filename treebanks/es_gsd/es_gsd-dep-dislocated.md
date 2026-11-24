---
layout: base
title:  'Statistics of dislocated in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `dislocated`

This relation is universal.

54 nodes (0%) are attached to their parents as `dislocated`.

54 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.11111111111111.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (45; 83% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (8; 15% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 dislocated	color:blue
1	Toda	todo	DET	_	Gender=Fem|Number=Sing|PronType=Tot	3	det	_	_
2	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
3	carrera	carrera	NOUN	_	Gender=Fem|Number=Sing	6	dislocated	_	_
4	profesional	profesional	ADJ	_	Number=Sing	3	amod	_	_
5	la	él	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obj	_	_
6	realizó	realizar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	para	para	ADP	_	_	9	case	_	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Estado	estado	NOUN	_	_	6	obl	_	SpaceAfter=No
10	;	;	PUNCT	_	PunctType=Semi	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 dislocated	color:blue
1	Mi	mi	DET	_	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
2	primera	primero	ADJ	_	Gender=Fem|Number=Sing|NumType=Ord	3	amod	_	_
3	impresión	impresión	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
4	no	no	ADV	_	Polarity=Neg	6	advmod	_	_
5	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
6	buena	buen	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	PunctType=Comm	9	punct	_	_
8	todo	todo	PRON	_	Gender=Masc|Number=Sing|PronType=Tot	11	dislocated	_	_
9	hay	haber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	parataxis	_	_
10	que	que	SCONJ	_	_	11	mark	_	_
11	decir	decir	VERB	_	VerbForm=Inf	9	xcomp	_	_
12	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	11	obj	_	_
13	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 dislocated	color:blue
1	"	"	PUNCT	_	PunctType=Quot	2	punct	_	SpaceAfter=No
2	Chubut	Chubut	PROPN	_	Number=Sing	9	dislocated	_	_
3	este	este	PRON	_	Gender=Masc|Number=Sing|PronType=Dem|Typo=Yes	2	appos	_	CorrectForm=esté
4	de	de	ADP	_	_	6	case	_	_
5	mi	mi	DET	_	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
6	lugar	lugar	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
7	"	"	PUNCT	_	PunctType=Quot	2	punct	_	_
8	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	9	obj	_	_
9	protagonizan	protagonizar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	jóvenes	joven	NOUN	_	Number=Plur	9	nsubj	_	_
11	de	de	ADP	_	_	12	case	_	_
12	pueblos	pueblo	NOUN	_	Gender=Masc|Number=Plur	10	nmod	_	_
13	y	y	CCONJ	_	_	14	cc	_	_
14	ciudades	ciudad	NOUN	_	Gender=Fem|Number=Plur	12	conj	_	_
15	de	de	ADP	_	_	17	case	_	_
16	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	provincia	provincia	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
18	,	,	PUNCT	_	PunctType=Comm	26	punct	_	_
19	que	que	PRON	_	PronType=Rel	26	nsubj	_	_
20	"	"	PUNCT	_	PunctType=Quot	26	punct	_	SpaceAfter=No
21	a	a	ADP	_	_	22	case	_	_
22	través	través	NOUN	_	Gender=Masc|Number=Sing	26	obl	_	_
23	de	de	ADP	_	_	25	case	_	_
24	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	arte	arte	NOUN	_	Number=Sing	22	nmod	_	_
26	cuentan	contar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	acl:relcl	_	SpaceAfter=No
27	,	,	PUNCT	_	PunctType=Comm	28	punct	_	_
28	trasmiten	trasmitir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	conj	_	_
29	y	y	CCONJ	_	_	30	cc	_	_
30	expresan	expresar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	conj	_	_
31	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	sentir	sentir	NOUN	_	Gender=Masc|Number=Sing	26	obj	_	_
33	cultural	cultural	ADJ	_	Number=Sing	32	amod	_	SpaceAfter=No
34	,	,	PUNCT	_	PunctType=Comm	36	punct	_	_
35	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	_	_
36	quehacer	quehacer	NOUN	_	Gender=Masc|Number=Sing	32	conj	_	_
37	diario	diario	ADJ	_	Gender=Masc|Number=Sing	36	amod	_	SpaceAfter=No
38	,	,	PUNCT	_	PunctType=Comm	40	punct	_	_
39	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	40	det	_	_
40	potencial	potencial	NOUN	_	Gender=Masc|Number=Sing	32	conj	_	_
41	productivo	productivo	ADJ	_	Gender=Masc|Number=Sing	40	amod	_	SpaceAfter=No
42	,	,	PUNCT	_	PunctType=Comm	43	punct	_	_
43	artesanal	artesanal	ADJ	_	Number=Sing	41	conj	_	SpaceAfter=No
44	,	,	PUNCT	_	PunctType=Comm	45	punct	_	_
45	turístico	turístico	ADJ	_	Gender=Masc|Number=Sing	41	conj	_	_
46	y	y	CCONJ	_	_	47	cc	_	_
47	humano	humano	ADJ	_	Gender=Masc|Number=Sing	41	conj	_	_
48	que	que	PRON	_	PronType=Rel	49	obj	_	_
49	tiene	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	40	acl:relcl	_	_
50	nuestra	nuestro	DET	_	Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	51	det	_	_
51	provincia	provincia	NOUN	_	Gender=Fem|Number=Sing	49	nsubj	_	SpaceAfter=No
52	"	"	PUNCT	_	PunctType=Quot	26	punct	_	SpaceAfter=No
53	,	,	PUNCT	_	PunctType=Comm	55	punct	_	_
54	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	55	expl:pv	_	_
55	indicó	indicar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	parataxis	_	SpaceAfter=No
56	.	.	PUNCT	_	PunctType=Peri	9	punct	_	_

~~~


