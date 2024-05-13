---
layout: base
title:  'Statistics of acl in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="es_coser-dep-acl-relcl.html">acl:relcl</a></tt>.

9 nodes (0%) are attached to their parents as `acl`.

9 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (5; 56% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (3; 33% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Y	y	CCONJ	cc	_	5	cc	_	_
2	lo	él	PRON	da0ns0	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	3	det	_	_
3	demás	demás	PRON	aq0cn0	Number=Plur|PronType=Ind	0	root	_	_
4	para	para	ADP	sps00	_	5	mark	_	_
5	sembrar	sembrar	VERB	vmn0000	VerbForm=Inf	3	acl	_	SpaceAfter=No
6	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	Y	y	CCONJ	cc	_	2	cc	_	_
2	suerte	suerte	NOUN	ncfs000	Gender=Fem|Number=Sing	0	root	_	_
3	que	que	SCONJ	pr0cn000	_	6	mark	_	_
4	no	no	ADV	rn	Polarity=Neg	6	advmod	_	_
5	se	él	PRON	pc0cn000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pass	_	_
6	recordaba	recordar	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	acl	_	_
7	de	de	ADP	sps00	_	8	case	_	_
8	nada	nada	PRON	pi0cs000	Number=Sing|PronType=Neg	6	obl:arg	_	SpaceAfter=No
9	.	.	PUNCT	fp	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 25 acl	color:blue
1	Y	y	CCONJ	cc	_	2	cc	_	_
2	cantaban	cantar	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	pues	pues	SCONJ	cs	_	4	mark	_	_
4	versos	verso	NOUN	ncmp000	Gender=Masc|Number=Plur	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	2	punct	_	_
6	pues	pues	SCONJ	cs	_	8	discourse	_	_
7	te	tú	PRON	pc2cs000	Case=Acc|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	8	obj	_	_
8	ponían	poner	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	13	reparandum	_	_
9	pues	pues	SCONJ	cs	_	13	discourse	_	_
10	a	a	ADP	sps00	_	13	advmod	_	_
11	veces	vez	NOUN	ncfp000	Gender=Fem|Number=Plur	10	fixed	_	_
12	te	tú	PRON	pc2cs000	Case=Acc|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	13	obj	_	_
13	ponían	poner	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	2	advcl	_	_
14	pues	pues	SCONJ	cs	_	13	discourse	_	_
15	muy	mucho	ADV	rg	_	16	advmod	_	_
16	bien	bien	ADV	rg	_	13	advmod	_	SpaceAfter=No
17	,	,	PUNCT	fc	PunctType=Comm	13	punct	_	_
18	muy	mucho	ADV	rg	_	19	advmod	_	_
19	bien	bien	ADV	rg	_	13	advmod	_	SpaceAfter=No
20	,	,	PUNCT	fc	PunctType=Comm	19	punct	_	_
21	unos	uno	DET	di0mp0	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
22	versos	verso	NOUN	ncmp000	Gender=Masc|Number=Plur	13	obl	_	_
23	que	que	SCONJ	pr0cn000	_	25	nsubj	_	_
24	eras	ser	AUX	vsii2s0	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	25	cop	_	_
25	maravillosa	maravillosa	ADJ	aq0fs0	Gender=Fem|Number=Sing	22	acl	_	_
26	y	y	CCONJ	cc	_	30	cc	_	_
27	que	que	SCONJ	pr0cn000	_	30	mark	_	_
28	eras	ser	AUX	vsii2s0	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	30	aux	_	_
29	no	no	ADV	rn	Polarity=Neg	30	advmod	_	_
30	sé	saber	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	22	conj	_	_
31	qué	qué	PRON	dt0cn0	PronType=Int	30	obj	_	_
32	y	y	CCONJ	cc	_	33	cc	_	_
33	había	haber	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	30	conj	_	_
34	a	a	ADP	sps00	_	36	case	_	_
35	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	_	_
36	lao	lado	NOUN	ncms000	Gender=Masc|Number=Sing	33	obl	_	Ortho=lado
37	era	ser	AUX	vsii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	39	cop	_	_
38	muy	mucho	ADV	rg	_	39	advmod	_	_
39	gruñona	gruñón	ADJ	aq0fs0	Gender=Fem|Number=Sing	33	conj	_	_
40	de	de	ADP	sps00	_	41	case	_	_
41	estas	este	PRON	dd0fp0	Gender=Fem|Number=Plur|PronType=Dem	39	nmod	_	_
42	y	y	CCONJ	cc	_	46	cc	_	SpaceAfter=No
43	,	,	PUNCT	fc	PunctType=Comm	46	punct	_	_
44	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	46	punct	_	SpaceAfter=No
45	no	no	ADV	rn	Polarity=Neg	46	advmod	_	_
46	sabes	saber	VERB	vmip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	30	conj	_	SpaceAfter=No
47	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	46	punct	_	SpaceAfter=No
48	,	,	PUNCT	fc	PunctType=Comm	46	punct	_	_
49	muy	mucho	ADV	rg	_	46	advmod	_	_
50	así	así	ADV	rg	_	46	advmod	_	SpaceAfter=No
51	...	...	PUNCT	_	PunctType=Comm	2	punct	_	_

~~~


