---
layout: base
title:  'Statistics of goeswith in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `goeswith`

This relation is universal.

2 nodes (0%) are attached to their parents as `goeswith`.

2 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-X.html">X</a></tt> (1; 50% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-X.html">X</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	era	fi	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
3	mos	moș	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing|Typo=Yes	1	nsubj	_	CorrectForm=moș
4	beat	beat	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
5	mort	mort	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
6	în	în	ADP	_	AdpType=Prep|Case=Acc	7	case	_	_
7	autobuz	autobuz	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
8	și	și	CCONJ	_	Polarity=Pos	10	cc	_	_
9	se	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	10	expl:pv	_	_
10	ținea	ține	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	conj	_	_
11	în	în	ADV	_	Degree=Pos|Typo=Yes	10	advmod	_	CorrectForm=încontinuu
12	continuu	_	X	_	_	11	goeswith	_	_
13	dupa	după	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	14	case	_	CorrectForm=după
14	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	10	obl	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 36 goeswith	color:blue
1	@Utilizator_fem1	@Utilizator_fem1	SYM	_	_	3	vocative:mention	_	_
2	@Utilizator_fem2	@Utilizator_fem2	SYM	_	_	3	vocative:mention	_	_
3	bărbați	bărbat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_
5	Un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	_
6	judecător	judecător	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	nsubj	_	_
7	zicea	zice	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
8	:	:	PUNCT	_	_	12	punct	_	_
9	vulpea	vulpe	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	_
10	asta	acesta	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Postnom|PronType=Dem	9	det	_	_
11	a	avea	AUX	_	Number=Sing|Person=3	12	aux	_	_
12	venit	veni	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	7	ccomp	_	_
13	bine	bine	ADV	_	Degree=Pos	14	advmod	_	_
14	pregătită	pregătit	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	curva	curvă	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	17	nsubj	_	_
17	vrea	vrea	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	conj	_	_
18	să	să	PART	_	Mood=Sub	19	mark	_	_
19	divorțeze	divorța	VERB	_	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	17	ccomp	_	SpaceAfter=No
20	,	,	PUNCT	_	_	23	punct	_	_
21	iar	iar	CCONJ	_	Polarity=Pos	23	cc	_	_
22	ceilalți	celălalt	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	23	nsubj	_	_
23	râdeau	râde	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	7	conj	_	SpaceAfter=No
24	.	.	PUNCT	_	_	7	punct	_	_
25	Și	și	CCONJ	_	Polarity=Pos	29	cc:preconj	_	_
26	multe	mult	DET	_	Gender=Fem|Number=Plur|Person=3|PronType=Ind	28	det	_	_
27	alte	alt	DET	_	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Ind	28	det	_	_
28	mizerii	mizerie	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	29	nsubj	_	_
29	vorbeau	vorbi	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	3	parataxis	_	_
30	și	și	CCONJ	_	_	31	cc	_	_
31	râdeau	râde	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	29	conj	_	_
32	de	de	ADP	_	AdpType=Prep|Case=Acc	33	case	_	_
33	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	31	obl	_	SpaceAfter=No
34	.	.	PUNCT	_	_	31	punct	_	_
35	Nici	niciunul	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Neg|Typo=Yes	39	nsubj	_	_
36	unul	_	X	_	_	35	goeswith	_	_
37	nu	nu	PART	_	Polarity=Neg	39	advmod	_	_
38	a	avea	AUX	_	Number=Sing|Person=3	39	aux	_	_
39	pățit	păți	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	3	parataxis	_	_
40	nimic	nimic	PRON	_	Case=Acc,Nom|Number=Sing|Person=3|PronType=Neg	39	xcomp	_	SpaceAfter=No
41	.	.	PUNCT	_	_	39	punct	_	_
42	O	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	43	det	_	_
43	justiție	justiție	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	parataxis	_	_
44	de	de	ADP	_	AdpType=Prep|Case=Acc	45	case	_	_
45	rahat	rahat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	43	nmod	_	SpaceAfter=No
46	,	,	PUNCT	_	_	51	punct	_	_
47	câte	cât	DET	_	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Int,Rel	48	det	_	_
48	cazuri	caz	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	51	nsubj	_	_
49	injuste	injust	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	48	amod	_	_
50	am	avea	AUX	_	Person=1	51	aux	_	_
51	văzut	vedea	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	43	acl	_	_
52	aici	aici	ADV	_	Degree=Pos	51	advmod	_	_
53	că	că	SCONJ	_	Polarity=Pos	56	mark	_	_
54	nu	nu	PART	_	Polarity=Neg	56	advmod	_	_
55	mai	mai	ADV	_	_	56	advmod	_	_
56	cred	crede	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	51	xcomp	_	_
57	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	58	case	_	CorrectForm=în
58	justiție	justiție	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	56	obl	_	SpaceAfter=No
59	.	.	PUNCT	_	_	43	punct	_	_

~~~


