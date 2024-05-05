---
layout: base
title:  'Statistics of csubj in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `csubj`

This relation is universal.

8 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (5; 63% instances), <tt><a href="es_coser-pos-AUX.html">AUX</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 csubj	color:blue
1	Porque	porque	SCONJ	cs	_	7	mark	_	_
2	los	él	PRON	da0mp0	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	obj	_	MWE=los_que|MWEPOS=PRON
3	que	que	SCONJ	pr0cn000	_	2	fixed	_	_
4	no	no	ADV	rn	Polarity=Neg	7	advmod	_	_
5	toqui	toqui	X	fs	_	7	reparandum	_	SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	5	punct	_	_
7	cotizaron	cotizar	VERB	vmis3p0	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	9	csubj	_	_
8	están	estar	AUX	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	cobrando	cobrar	VERB	vmg0000	VerbForm=Ger	0	root	_	_
10	algo	algo	PRON	pi0cs000	Number=Sing|PronType=Ind	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	fp	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 csubj	color:blue
1	Porque	porque	SCONJ	cs	_	10	cc	_	_
2	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	reparandum	_	_
3	que	que	SCONJ	cs	_	2	mark	_	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	2	punct	_	_
5	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	reparandum	_	_
6	que	que	SCONJ	cs	_	5	mark	_	_
7	lo	él	PRON	da0ns0	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	9	det	_	MWE=lo_que|MWEPOS=PRON
8	que	que	SCONJ	cs	_	9	obj	_	_
9	vemos	ver	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	10	csubj	_	_
10	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	que	que	SCONJ	cs	_	12	mark	_	_
12	hay	haber	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
13	mucha	mucho	DET	di0fs0	Gender=Fem|Number=Sing|NumType=Card|PronType=Ind	14	det	_	_
14	gente	gente	NOUN	ncfs000	Gender=Fem|Number=Sing	12	obj	_	_
15	y	y	CCONJ	cc	_	22	cc	_	_
16	no	no	ADV	rn	Polarity=Neg	18	advmod	_	_
17	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	18	obj	_	_
18	podemos	poder	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	22	reparandum	_	SpaceAfter=No
19	,	,	PUNCT	fc	PunctType=Comm	18	punct	_	_
20	no	no	ADV	rn	Polarity=Neg	22	advmod	_	_
21	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	22	obj	_	_
22	escuchamos	escuchar	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	12	conj	_	_
23	bien	bien	ADV	rg	_	22	advmod	_	SpaceAfter=No
24	,	,	PUNCT	fc	PunctType=Comm	22	punct	_	_
25	hay	haber	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	advcl	_	_
26	mucho	mucho	DET	di0ms0	Gender=Masc|Number=Sing|NumType=Card|PronType=Ind	27	det	_	_
27	ruido	ruido	NOUN	ncms000	Gender=Masc|Number=Sing	25	obj	_	SpaceAfter=No
28	.	.	PUNCT	fp	PunctType=Peri	12	punct	_	_

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 37 csubj	color:blue
1	Porque	porque	SCONJ	cs	_	5	mark	_	_
2	todos	todo	PRON	di0mp0	Gender=Masc|Number=Plur|PronType=Tot	5	nsubj:pass	_	_
3	se	él	PRON	pc0cn000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
4	han	haber	AUX	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	ido	ir	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	a	a	ADP	sps00	_	7	mark	_	_
7	trabajar	trabajar	VERB	vmn0000	VerbForm=Inf	5	xcomp	_	_
8	a	a	ADP	sps00	_	7	case	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	5	punct	_	_
10	porque	porque	SCONJ	cs	_	12	mark	_	_
11	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	mayoría	mayoría	NOUN	ncfs000	Gender=Fem|Number=Sing	15	nmod	_	_
13	de	de	ADP	sps00	_	15	case	_	_
14	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	gente	gente	NOUN	ncfs000	Gender=Fem|Number=Sing	5	advcl	_	_
16	de	de	ADP	sps00	_	17	case	_	_
17	aquí	aquí	ADV	rg	_	15	advmod	_	SpaceAfter=No
18	,	,	PUNCT	fc	PunctType=Comm	15	punct	_	_
19	de	de	ADP	sps00	_	21	case	_	_
20	este	este	DET	dd0ms0	Gender=Masc|Number=Sing|PronType=Dem	21	det	_	_
21	pueblo	pueblo	NOUN	ncms000	Gender=Masc|Number=Sing	15	obl	_	SpaceAfter=No
22	,	,	PUNCT	fc	PunctType=Comm	21	punct	_	_
23	nosotros	yo	PRON	pp1mp000	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	parataxis	_	_
24	no	no	ADV	rn	Polarity=Neg	23	advmod	_	SpaceAfter=No
25	,	,	PUNCT	fc	PunctType=Comm	28	punct	_	_
26	pero	pero	CCONJ	cc	_	28	cc	_	_
27	porque	porque	SCONJ	cs	_	28	mark	_	_
28	teníamos	tener	VERB	vmii1p0	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	23	conj	_	_
29	algo	algo	PRON	pi0cs000	Number=Sing|PronType=Ind	28	obj	_	_
30	de	de	ADP	sps00	_	31	case	_	_
31	campo	campo	NOUN	ncms000	Gender=Masc|Number=Sing	29	nmod	_	_
32	y	y	CCONJ	cc	_	33	cc	_	_
33	así	así	ADV	rg	_	28	discourse	_	SpaceAfter=No
34	,	,	PUNCT	fc	PunctType=Comm	37	punct	_	_
35	pues	pues	SCONJ	cs	_	37	mark	_	_
36	eran	ser	AUX	vsii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	37	cop	_	_
37	renteros	rentero	NOUN	ncmp000	Gender=Masc|Number=Plur	15	csubj	_	_
38	de	de	ADP	sps00	_	39	case	_	_
39	estos	este	PRON	dd0mp0	Gender=Masc|Number=Plur|PronType=Dem	37	nmod	_	_
40	de	de	ADP	sps00	_	42	reparandum	_	SpaceAfter=No
41	,	,	PUNCT	fc	PunctType=Comm	40	punct	_	_
42	de	de	ADP	sps00	_	44	case	_	_
43	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	44	det	_	_
44	palacio	palacio	NOUN	ncms000	Gender=Masc|Number=Sing	37	nmod	_	_
45	que	que	PRON	pr0cn000	PronType=Rel	46	nsubj	_	_
46	tenían	tener	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	37	acl:relcl	_	_
47	mucha	mucho	DET	di0fs0	Gender=Fem|Number=Sing|NumType=Card|PronType=Ind	48	det	_	_
48	hacienda	hacienda	NOUN	ncfs000	Gender=Fem|Number=Sing	46	obj	_	_
49	estos	este	PRON	dd0mp0	Gender=Masc|Number=Plur|PronType=Dem	46	nsubj:outer	_	SpaceAfter=No
50	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	_

~~~


