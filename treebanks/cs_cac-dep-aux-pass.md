---
layout: base
title:  'Statistics of aux:pass in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_cac-dep-aux.html">aux</a></tt>.

2539 nodes (1%) are attached to their parents as `aux:pass`.

2518 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98857818038598.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (2528; 100% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-SYM.html">SYM</a></tt> (9; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux:pass	color:blue
1	Rekultivační	rekultivační	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	_
2	výzkum	výzkum	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
5	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
6	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux:pass	_	_
7	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	LDeriv=průběžný
8	zajišťován	zajišťovaný	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 aux:pass	color:blue
1	Dřevěné	dřevěný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	obklady	obklad	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	nsubj	_	_
3	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	poměrně	poměrně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	LDeriv=poměrný
5	odolné	odolný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	_
6	a	a	CCONJ	J^-------------	_	7	cc	_	LId=a-1
7	trvanlivé	trvanlivý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	_	_
9	ale	ale	CCONJ	J^-------------	_	11	cc	_	_
10	jen	jen	PART	TT-------------	_	11	advmod:emph	_	LId=jen-1|LGloss=(pouze)
11	tehdy	tehdy	ADV	Db-------------	PronType=Dem	5	conj	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	16	punct	_	_
13	*	*	SYM	Xx-------------	Abbr=Yes	16	aux:pass	_	_
14	-	-	PUNCT	Z:-------------	_	16	punct	_	_
15	li	li	PART	TT-------------	_	16	mark	_	_
16	osazeny	osazený	ADJ	VsTP---XX-AP---	Animacy=Inan|Aspect=Perf|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	11	orphan	_	_
17	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	_	LId=na-1
18	suché	suchý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	19	amod	_	_
19	zdivo	zdivo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	16	obl	_	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 35 aux:pass	color:blue
1	Elektrická	elektrický	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	vozba	vozba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
3	konala	konat	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	asi	asi	PART	TT-------------	_	5	advmod:emph	_	_
5	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	3	obj	_	_
6	*	*	SYM	Xx-------------	Abbr=Yes	5	nmod	_	_
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=z-1
8	celkové	celkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	_	_
9	dopravní	dopravní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	_	_
10	práce	práce	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	LGloss=(jako_činnost_i_místo)
11	železniční	železniční	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	12	amod	_	_
12	sítě	síť	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	_	_
13	a	a	CCONJ	J^-------------	_	20	cc	_	LId=a-1
14	hospodárnost	hospodárnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	20	nsubj	_	LDeriv=hospodárný
15	i	i	CCONJ	J^-------------	_	16	cc	_	LId=i-1
16	návratnost	návratnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	14	conj	_	LDeriv=návratný
17	elektrizačních	elektrizační	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	18	amod	_	_
18	investic	investice	NOUN	NNFP2-----A---1	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	14	nmod	_	_
19	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	20	expl:pv	_	LGloss=(zvr._zájmeno/částice)
20	prokázala	prokázat	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	_	_
21	příznivým	příznivý	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	22	amod	_	_
22	poměrem	poměr	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	20	obl	_	LGloss=(vztah_mezi_2_věcmi/lidmi)
23	provozních	provozní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	24	amod	_	_
24	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	22	nmod	_	SpaceAfter=No
25	,	,	PUNCT	Z:-------------	_	26	punct	_	_
26	provozu	provoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	24	conj	_	_
27	parního	parní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	amod	_	SpaceAfter=No
28	,	,	PUNCT	Z:-------------	_	29	punct	_	_
29	dieselového	dieselový	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	27	conj	_	SpaceAfter=No
30	,	,	PUNCT	Z:-------------	_	31	punct	_	_
31	elektrického	elektrický	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	27	conj	_	SpaceAfter=No
32	,	,	PUNCT	Z:-------------	_	22	punct	_	_
33	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	34	case	_	LId=v-1
34	poměru	poměr	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	36	obl	_	LGloss=(vztah_mezi_2_věcmi/lidmi)
35	#	&camount;	NUM	C=-------------	NumForm=Digit|NumType=Card	36	aux:pass	_	_
36	vztaženo	vztažený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	22	dep	_	_
37	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	40	case	_	LId=na-1
38	užitečnou	užitečný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	40	amod	_	_
39	dopravní	dopravní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	40	amod	_	_
40	práci	práce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	36	obl	_	LGloss=(jako_činnost_i_místo)
41	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	42	case	_	LId=v-1
42	*	*	SYM	Xx-------------	Abbr=Yes	40	advmod	_	_
43	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


