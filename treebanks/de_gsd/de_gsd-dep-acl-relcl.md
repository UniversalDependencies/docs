---
layout: base
title:  'Statistics of acl:relcl in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-acl.html">acl</a></tt>.

6 nodes (0%) are attached to their parents as `acl:relcl`.

6 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.83333333333333.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:relcl	color:blue
1	Das	der	PRON	PDS	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	war	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
3	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Punkt	Punkt	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	an	an	ADP	APPR	_	6	case	_	_
6	dem	der	PRON	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	obl	_	_
7	wir	wir	PRON	PPER	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
8	hätten	haben	AUX	VAFIN	Mood=Sub|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	9	aux	_	_
9	gehen	gehen	VERB	VVINF	VerbForm=Inf	4	acl:relcl	_	_
10	sollen	sollen	AUX	VMINF	VerbForm=Inf	9	aux	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 37 acl:relcl	color:blue
1	Bastian	Bastian	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	NamedEntity=Yes
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	jedoch	jedoch	ADV	ADV	_	5	advmod	_	_
4	der	der	DET	ART	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Meinung	Meinung	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	10	punct	_	_
7	dass	dass	SCONJ	KOUS	_	10	mark	_	_
8	dies	dies	PRON	PDS	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	10	nsubj	_	_
9	nicht	nicht	PART	PTKNEG	Polarity=Neg	10	advmod	_	_
10	stimme	stimmen	VERB	VVFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	SpaceAfter=No
11	,	,	PUNCT	$,	_	16	punct	_	_
12	da	da	SCONJ	KOUS	_	16	mark	_	_
13	sich	er|es|sie	PRON	PRF	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	16	obj	_	_
14	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	Landschaft	Landschaft	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	_	_
16	geändert	ändern	VERB	VVPP	VerbForm=Part	10	advcl	_	_
17	habe	haben	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	SpaceAfter=No
18	,	,	PUNCT	$,	_	16	punct	_	_
19	und	und	CCONJ	KON	_	20	cc	_	_
20	lässt	lassen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
21	sich	er|es|sie	PRON	PRF	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	20	obj	_	_
22	mehr	mehr	ADV	ADV	_	20	advmod	_	_
23	und	und	CCONJ	KON	_	24	cc	_	_
24	mehr	mehr	ADV	ADV	_	22	conj	_	_
25	auf	auf	ADP	APPR	_	26	case	_	_
26	Xayide	Xayide	PROPN	NN	Case=Acc|Gender=Masc|Number=Plur	20	obl	_	NamedEntity=Yes
27	ein	ein	ADV	PTKVZ	_	20	compound:prt	_	SpaceAfter=No
28	,	,	PUNCT	$,	_	37	punct	_	_
29	die	der	PRON	PRELS	Case=Nom|Number=Plur|PronType=Rel	37	nsubj	_	_
30	natürlich	natürlich	ADJ	ADV	_	37	advmod	_	_
31	nach	nach	ADV	ADV	_	37	advmod	_	_
32	wie	wie	ADP	KON	_	31	fixed	_	_
33	vor	vor	ADV	ADV	_	31	fixed	_	_
34	ihre	ihr	DET	PPOSAT	Case=Acc|Gender=Neut|Number=Plur|Person=3|Poss=Yes|PronType=Prs	35	det:poss	_	_
35	Ziele	Ziel	NOUN	NN	Case=Acc|Gender=Neut|Number=Plur	37	obj	_	_
36	nicht	nicht	PART	PTKNEG	Polarity=Neg	37	advmod	_	_
37	aufgegeben	aufgeben	VERB	VVPP	VerbForm=Part	26	acl:relcl	_	_
38	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	37	aux	_	_
39	und	und	CCONJ	KON	_	41	cc	_	_
40	stattdessen	stattdessen	ADV	PAV	_	41	advmod	_	_
41	versucht	versuchen	VERB	VVPP	VerbForm=Part	37	conj	_	SpaceAfter=No
42	,	,	PUNCT	$,	_	52	punct	_	_
43	Bastian	Bastian	PROPN	NN	Case=Acc|Gender=Masc|Number=Sing	52	obj	_	NamedEntity=Yes
44	zu	zu	ADP	APPR	_	47	case	_	_
45	einem	ein	DET	ART	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	47	det	_	_
46	albernen	albern	ADJ	ADJA	Case=Dat|Gender=Masc|Number=Sing	47	amod	_	_
47	Wunsch	Wunsch	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	52	obl	_	_
48	nach	nach	ADP	APPR	_	50	case	_	_
49	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	50	det	_	_
50	nächsten	nah	ADJ	ADJA	Case=Dat|Gender=Masc|Number=Sing	45	nmod	_	_
51	zu	zu	PART	PTKZU	_	52	mark	_	_
52	überreden	überreden	VERB	VVINF	VerbForm=Inf	41	xcomp	_	SpaceAfter=No
53	,	,	PUNCT	$,	_	59	punct	_	_
54	um	um	ADP	KOUI	_	59	mark	_	_
55	ihm	er	PRON	PPER	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	59	iobj	_	_
56	seine	sein	DET	PPOSAT	Case=Acc|Gender=Fem|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	57	det:poss	_	_
57	Erinnerungen	Erinnerung	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	59	obj	_	_
58	zu	zu	PART	PTKZU	_	59	mark	_	_
59	stehlen	stehlen	VERB	VVINF	VerbForm=Inf	52	advcl	_	SpaceAfter=No
60	.	.	PUNCT	$.	_	5	punct	_	_

~~~


