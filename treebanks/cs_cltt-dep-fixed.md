---
layout: base
title:  'Statistics of fixed in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `fixed`

This relation is universal.

328 nodes (1%) are attached to their parents as `fixed`.

328 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20426829268293.

The following 4 pairs of parts of speech are connected with `fixed`: <tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (258; 79% instances), <tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt> (66; 20% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=v-1
5	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	4	fixed	_	_
6	technického	technický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	_	_
7	zhodnocení	zhodnocení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 fixed	color:blue
1	Spotřeba	spotřeba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	_	_
2	povolenek	povolenka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	_	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	vykázána	vykázaný	ADJ	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
5	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=bez-1
6	ohledu	ohled	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	fixed	_	_
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	fixed	_	LId=na-1
8	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	10	det	_	_
9	následné	následný	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	10	amod	_	_
10	vyřazení	vyřazení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	4	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 35 fixed	color:blue
1	(9)	(9)	PUNCT	Z:-------------	_	19	punct	_	_
2	Pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	LId=pro-1
3	inventarizaci	inventarizace	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	19	obl	_	_
4	kulturních	kulturní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	_	_
5	památek	památka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	7	punct	_	_
7	sbírek	sbírka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	5	conj	_	_
8	muzejní	muzejní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	_
9	povahy	povaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	_
10	a	a	CCONJ	J^-------------	_	12	cc	_	LId=a-1
11	archeologických	archeologický	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	12	amod	_	_
12	nálezů	nález	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	_	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	19	expl:pass	_	_
14	ustanovení	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	19	nsubj:pass	_	_
15	odstavců	odstavec	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	14	nmod	_	_
16	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	15	nummod	_	_
17	až	až	PART	TT-------------	_	18	cc	_	LId=až-3
18	8	8	NUM	C}-------------	NumForm=Roman|NumType=Card	16	conj	_	_
19	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
20	pouze	pouze	ADV	Db-------------	_	22	advmod:emph	_	_
21	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	22	case	_	LId=v-1
22	rozsahu	rozsah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	19	obl	_	SpaceAfter=No
23	,	,	PUNCT	Z:-------------	_	29	punct	_	_
24	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	25	case	_	LId=v-1
25	jakém	jaký	DET	P4ZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	29	obl	_	_
26	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	29	cop	_	_
27	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	28	amod	_	LId=účetní-1
28	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	29	nsubj	_	_
29	schopna	schopný	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	22	acl	_	_
30	zajistit	zajistit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	29	xcomp	_	_
31	inventarizaci	inventarizace	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	30	obj	_	_
32	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	33	det	_	_
33	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	31	nmod	_	_
34	společně	společně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	36	case	_	_
35	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	34	fixed	_	LId=s-1
36	plněním	plnění	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	30	obl	_	_
37	zvláštních	zvláštní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	38	amod	_	_
38	povinností	povinnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	36	nmod	_	_
39	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	40	case	_	LId=o-1
40	zjišťování	zjišťování	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	38	nmod	_	_
41	skutečného	skutečný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	42	amod	_	_
42	stavu	stav	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	40	nmod	_	_
43	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	44	det	_	_
44	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	42	nmod	_	SpaceAfter=No
45	.	.	PUNCT	Z:-------------	_	19	punct	_	_

~~~


