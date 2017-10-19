---
layout: base
title:  'Statistics of aux:pass in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `aux:pass`

This relation is a language-specific subtype of [aux]().

2539 nodes (1%) are attached to their parents as `aux:pass`.

2518 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98857818038598.

The following 4 pairs of parts of speech are connected with `aux:pass`: [-pos/ADJ]()-[-pos/AUX]() (2528; 100% instances), [-pos/ADJ]()-[-pos/SYM]() (9; 0% instances), [-pos/ADJ]()-[-pos/NOUN]() (1; 0% instances), [-pos/ADJ]()-[-pos/NUM]() (1; 0% instances).


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
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 26 aux:pass	color:blue
1	Lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pv	_	LGloss=(zvr._zájmeno/částice)
3	domnívat	domnívat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	csubj	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	_	_
5	že	že	SCONJ	J,-------------	_	8	mark	_	_
6	příslušní	příslušný	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	LDeriv=příslušet
7	činitelé	činitel	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	8	nsubj	_	_
8	udělají	udělat	VERB	VB-P---3P-AA---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
9	vše	všechno	PRON	PLNS4---------1	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	8	obj	_	_
10	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=pro-1
11	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	obl	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	19	punct	_	_
13	aby	aby	SCONJ	J,-------------	_	19	mark	_	_
14	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	19	aux	_	_
15	i	i	CCONJ	J^-------------	_	16	advmod:emph	_	LId=i-1
16	tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	17	det	_	_
17	část	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	19	nsubj	_	_
18	oprav	oprava	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	17	nmod	_	_
19	mohla	moci	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	acl	_	LGloss=(mít_možnost_[něco_dělat])
20	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	21	aux:pass	_	_
21	provedena	provedený	ADJ	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	19	obj	_	_
22	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	24	case	_	LId=bez-1
23	zbytečných	zbytečný	ADJ	AANP2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	24	amod	_	_
24	zdržení	zdržení	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	21	obl	_	LDeriv=zdržet
25	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	26	case	_	LId=v-1
26	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	21	aux:pass	_	_
27	celkové	celkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	28	amod	_	_
28	opravy	oprava	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	26	obl	_	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


