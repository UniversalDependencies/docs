---
layout: base
title:  'Statistics of nsubj:outer in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="es_coser-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_coser-dep-nsubj-pass.html">nsubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 nsubj:outer	color:blue
1	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	4	punct	_	SpaceAfter=No
2	Cómo	cómo	PRON	pt000000	PronType=Int	4	obl	_	_
3	lo	él	PRON	pc3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	obj	_	_
4	hacen	hacer	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	4	punct	_	SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	4	punct	_	_
7	maquinarios	maquinario	NOUN	ncmp000	Gender=Masc|Number=Plur	12	nsubj:outer	_	_
8	ahí	ahí	ADV	rg	_	12	advmod	_	_
9	que	que	SCONJ	cs	_	12	mark	_	_
10	esos	ese	PRON	dd0mp0	Gender=Masc|Number=Plur|PronType=Dem	12	nsubj	_	_
11	lo	él	PRON	pc3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	12	obj	_	_
12	van	ir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
13	moliendo	moler	VERB	vmg0000	VerbForm=Ger	12	xcomp	_	_
14	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	oliva	oliva	NOUN	ncfs000	Gender=Fem|Number=Sing	13	obj	_	SpaceAfter=No
16	,	,	PUNCT	fc	PunctType=Comm	13	punct	_	_
17	va	ir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	conj	_	_
18	cayendo	caer	VERB	vmg0000	VerbForm=Ger	17	xcomp	_	_
19	a	a	ADP	sps00	_	21	case	_	_
20	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	21	det	_	_
21	pren	pren	X	fs	_	25	reparandum	_	SpaceAfter=No
22	,	,	PUNCT	fc	PunctType=Comm	21	punct	_	_
23	a	a	ADP	sps00	_	25	case	_	_
24	unas	uno	DET	di0fp0	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	25	det	_	_
25	prensa	prensa	NOUN	ncfs000	Gender=Fem|Number=Sing	18	obl	_	Ortho=prensas
26	y	y	CCONJ	cc	_	28	cc	_	_
27	ahí	ahí	ADV	rg	_	28	advmod	_	_
28	va	ir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	conj	_	_
29	saliendo	salir	VERB	vmg0000	VerbForm=Ger	28	xcomp	_	_
30	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	chorro	chorro	NOUN	ncms000	Gender=Masc|Number=Sing	29	obj	_	_
32	de	de	ADP	sps00	_	33	case	_	_
33	aceite	aceite	NOUN	ncms000	Gender=Masc|Number=Sing	31	nmod	_	SpaceAfter=No
34	.	.	PUNCT	fp	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nsubj:outer	color:blue
1	Yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	reparandum	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	_	_
3	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj:pass	_	_
4	he	haber	AUX	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	hecho	hacer	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	porque	porque	SCONJ	cs	_	7	mark	_	_
7	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	advcl	_	_
8	que	que	SCONJ	pr0cn000	_	12	mark	_	_
9	mi	mi	DET	dp1css	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
10	marido	marido	NOUN	ncms000	Gender=Masc|Number=Sing	12	nsubj	_	_
11	luego	luego	ADV	rg	_	12	advmod	_	_
12	llevaba	llevar	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	ccomp	_	_
13	él	él	PRON	pp3ms000	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nsubj:outer	_	_
14	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
15	...	...	PUNCT	_	PunctType=Comm	16	punct	_	_
16	terreno	terreno	NOUN	ncms000	Gender=Masc|Number=Sing	12	obj	_	SpaceAfter=No
17	,	,	PUNCT	fc	PunctType=Comm	16	punct	_	_
18	y	y	CCONJ	cc	_	23	cc	_	_
19	claro	claro	INTJ	aq0ms0	_	23	discourse	_	SpaceAfter=No
20	,	,	PUNCT	fc	PunctType=Comm	23	punct	_	_
21	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
22	jornales	jornal	NOUN	ncmp000	Gender=Masc|Number=Plur	23	nsubj	_	_
23	valían	valer	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	12	conj	_	_
24	mucho	mucho	ADV	rg	_	23	advmod	_	SpaceAfter=No
25	,	,	PUNCT	fc	PunctType=Comm	23	punct	_	_
26	y	y	CCONJ	cc	_	29	cc	_	_
27	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	29	nsubj	_	_
28	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	29	obj	_	_
29	ayudaba	ayudar	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	12	conj	_	_
30	a	a	ADP	sps00	_	31	case	_	_
31	to	todo	PRON	di0fs0	Gender=Masc|Number=Sing|PronType=Tot	29	obj	_	Ortho=todo|SpaceAfter=No
32	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	_

~~~


