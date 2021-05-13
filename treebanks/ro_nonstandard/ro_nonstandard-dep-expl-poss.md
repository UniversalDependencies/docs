---
layout: base
title:  'Statistics of expl:poss in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:poss`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

112 nodes (0%) are attached to their parents as `expl:poss`.

85 instances of `expl:poss` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28571428571429.

The following 4 pairs of parts of speech are connected with `expl:poss`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (107; 96% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:poss	color:blue
1	Atuncea	atunci	ADV	Rg	_	3	advmod:tmod	_	ref=MATT25.7
2	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	3	expl:pv	_	ref=MATT25.7
3	sculară	scula	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT25.7
4	vergurele	vergură	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	3	nsubj	_	ref=MATT25.7
5	acealea	acela	DET	Dd3fpr---o	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Postnom|PronType=Dem	4	det	_	ref=MATT25.7
6	și	și	CCONJ	Ccssp	Polarity=Pos	8	cc	_	ref=MATT25.7|SpaceAfter=No
7	-și	sine	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Prs|Strength=Weak	8	expl:poss	_	ref=MATT25.7
8	gătiră	găti	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	ref=MATT25.7
9	lămpașele	lămpaș	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	8	obj	_	ref=MATT25.7
10	lor	el	PRON	Pp3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Prs	9	nmod	_	ref=MATT25.7|SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT25.7

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 expl:poss	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	4	cc	_	ref=PAVEL_1.CORINT_12.27
2	voi	tu	PRON	Pp2-pr	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	ref=PAVEL_1.CORINT_12.27
3	sînteți	fi	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	4	cop	_	ref=PAVEL_1.CORINT_12.27
4	trupul	trup	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	ref=PAVEL_1.CORINT_12.27
5	lui	-ul	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	6	det	_	ref=PAVEL_1.CORINT_12.27
6	Hristos	Hristos	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	ref=PAVEL_1.CORINT_12.27|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	9	punct	_	ref=PAVEL_1.CORINT_12.27
8	și	și	CCONJ	Ccssp	Polarity=Pos	9	cc	_	ref=PAVEL_1.CORINT_12.27
9	mădulare	mădular	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	4	conj	_	ref=PAVEL_1.CORINT_12.27
10	den	din	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	11	case	_	ref=PAVEL_1.CORINT_12.27
11	parte	parte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nmod	_	ref=PAVEL_1.CORINT_12.27|SpaceAfter=No
12	-I	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	expl:poss	_	ref=PAVEL_1.CORINT_12.27|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	4	punct	_	ref=PAVEL_1.CORINT_12.27

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl:poss	color:blue
1	Când	când	ADV	Rw	PronType=Int,Rel	6	advmod:tmod	_	_
2	ți-	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	6	expl:poss	_	SpaceAfter=No
3	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux	_	_
4	fi	fi	AUX	Van	VerbForm=Inf	6	cop	_	_
5	cămașa	cămașă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	nsubj	_	_
6	neagră	negru	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	advcl:tcl	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	6	punct	_	_
8	S-	să	PART	Qs	PartType=Sub	10	mark	_	SpaceAfter=No
9	o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	10	obj	_	_
10	trimiți	trimite	VERB	Vmsp2s	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
11	ca	ca	ADP	Spsa	AdpType=Prep|Case=Acc	15	mark	_	_
12	să	să	PART	Qs	PartType=Sub	11	fixed	_	_
13	ți-	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	15	iobj	_	SpaceAfter=No
14	o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	15	obj	_	_
15	spăl	spăla	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	advcl	_	SpaceAfter=No
16	,	,	PUNCT	COMMA	_	19	punct	_	_
17	Nici	nici	ADV	Rg	_	19	advmod	_	_
18	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	_
19	spumă	spumă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	15	obl	_	_
20	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	_
21	săpun	săpun	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
22	,	,	PUNCT	COMMA	_	25	punct	_	_
23	Nici	nici	CCONJ	Cccsz	Compound=Yes|Polarity=Neg	25	cc	_	_
24	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	25	case	_	_
25	apă	apă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	19	conj	_	_
26	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	27	case	_	_
27	izvor	izvor	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	25	nmod	_	SpaceAfter=No
28	,	,	PUNCT	COMMA	_	30	punct	_	_
29	Cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	30	case	_	_
30	lăcrimioare	lăcrimioară	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	19	conj	_	_
31	de-	de	ADP	Spsa	AdpType=Prep|Case=Acc	33	case	_	SpaceAfter=No
32	ale	al	DET	Tsfpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Poss=Yes|PronType=Art	33	det	_	_
33	mele	meu	PRON	Ps1fp-s	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|PronType=Prs	30	nmod	_	Rhyme=ID40|SpaceAfter=No|Type=Paired
34	,	,	PUNCT	COMMA	_	38	punct	_	_
35	Care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	38	obj	_	_
36	le-	el	PRON	Pp3-pr	Case=Acc,Nom|Number=Plur|Person=3|PronType=Prs	38	expl	_	SpaceAfter=No
37	oi	vrea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	38	aux	_	_
38	umplea	umple	VERB	Vmn	VerbForm=Inf	30	acl	_	_
39	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	40	case	_	_
40	jele	jale	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	38	obl:pmod	_	Rhyme=ID33|SpaceAfter=No|Type=Paired
41	,	,	PUNCT	COMMA	_	38	punct	_	_
42	Şi	și	CCONJ	Ccssp	Polarity=Pos	44	cc	_	_
43	oi	vrea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	44	aux	_	_
44	pune	pune	VERB	Vmn	VerbForm=Inf	10	conj	_	SpaceAfter=No
45	-o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	44	obj	_	_
46	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	47	mark	_	_
47	uscat	uscat	VERB	Vmp	VerbForm=Part	44	ccomp:pmod	_	Rhyme=ID53|SpaceAfter=No|Type=Imperf
48	,	,	PUNCT	COMMA	_	51	punct	_	_
49	Pe-	pe	ADP	Spsa	AdpType=Prep|Case=Acc	51	case	_	SpaceAfter=No
50	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	51	det	_	_
51	creangă	creangă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	44	obl	_	_
52	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	53	case	_	_
53	liliac	liliac	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	51	nmod	_	Rhyme=ID47|SpaceAfter=No|Type=Imperf
54	,	,	PUNCT	COMMA	_	58	punct	_	_
55	Şi	și	CCONJ	Ccssp	Polarity=Pos	58	cc	_	_
56	le-	el	PRON	Pp3fpa--------w	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Weak	58	obj	_	SpaceAfter=No
57	oi	vrea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	58	aux	_	_
58	strânge	strânge	VERB	Vmn	VerbForm=Inf	10	conj	_	SpaceAfter=No
59	-n	în	ADP	Spsa	AdpType=Prep|Case=Acc	60	case	_	_
60	păturele	păturea	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	58	obl	_	Rhyme=ID66|Type=Paired
61	Să	să	PART	Qs	PartType=Sub	62	mark	_	_
62	ai	avea	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	58	advcl	_	_
63	tu	tu	PRON	Pp2-sr	Case=Acc,Nom|Number=Sing|Person=1|PronType=Prs	62	nsubj	_	_
64	noroc	noroc	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	62	obj	_	_
65	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	66	case	_	_
66	ele	el	PRON	Pp3fpa--------s	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Strong	64	nmod	_	Rhyme=ID60|SpaceAfter=No|Type=Paired
67	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


