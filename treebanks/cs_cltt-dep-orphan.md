---
layout: base
title:  'Statistics of orphan in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `orphan`

This relation is universal.

22 nodes (0%) are attached to their parents as `orphan`.

22 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.63636363636364.

The following 8 pairs of parts of speech are connected with `orphan`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (12; 55% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 orphan	color:blue
1	Rezervní	rezervní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	fondy	fond	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	5	punct	_	_
4	nedělitelný	dělitelný	ADJ	AAIS1----1N----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	5	amod	_	_
5	fond	fond	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	conj	_	_
6	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
7	ostatní	ostatní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	8	amod	_	_
8	fondy	fond	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	orphan	_	_
9	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	10	case	_	LId=z-1
10	zisku	zisk	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 22 orphan	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	4	punct	_	_
2	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
3	příloze	příloha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	_	_
4	uvede	uvést	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	LId=účetní-1
6	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	_	_
7	průměrný	průměrný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	_	_
8	přepočtený	přepočtený	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	_	_
9	počet	počet	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	_
10	zaměstnanců	zaměstnanec	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	9	nmod	_	_
11	během	během	ADP	RR--2----------	AdpType=Prep|Case=Gen	13	case	_	_
12	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	13	amod	_	LId=účetní-1
13	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	10	nmod	_	_
14	a	a	CCONJ	J^-------------	_	16	cc	_	LId=a-1
15	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	16	case	_	LId=z-1
16	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	4	conj	_	_
17	členů	člen	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	16	orphan	_	_
18	řídících	řídící	ADJ	AGMP2-----A----	Animacy=Anim|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	19	amod	_	_
19	orgánů	orgán	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	17	nmod	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	22	punct	_	_
21	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	22	case	_	LId=s-1
22	uvedením	uvedení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	16	orphan	_	_
23	výše	vysoko	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	22	advmod	_	LId=vysoko-1
24	osobních	osobní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	25	amod	_	_
25	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	23	nmod	_	SpaceAfter=No
26	,	,	PUNCT	Z:-------------	_	29	punct	_	_
27	které	který	DET	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	29	nsubj:pass	_	_
28	byly	být	AUX	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	29	aux:pass	_	_
29	vynaloženy	vynaložený	ADJ	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	25	amod	_	_
30	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	31	case	_	LId=na-1
31	zaměstnance	zaměstnanec	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	29	obl	_	_
32	a	a	CCONJ	J^-------------	_	34	cc	_	LId=a-1
33	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	34	case	_	LId=z-1
34	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	29	conj	_	_
35	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	36	case	_	LId=na-1
36	členy	člen	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	29	dep	_	_
37	řídících	řídící	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	38	amod	_	_
38	orgánů	orgán	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	36	nmod	_	SpaceAfter=No
39	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 orphan	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	5	punct	_	_
2	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=o-1
3	zásobách	zásoba	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
5	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	_
7	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	_
8	A	a	CCONJ	J^-------------	_	7	nmod	_	LId=a-1
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	_	_
10	periodicky	periodicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	conj	_	_
11	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	orphan	_	_
12	B.	B.	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	11	nmod	_	_
13	U	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	_	LId=u-1
14	způsobu	způsob	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	21	obl	_	_
15	A	a	CCONJ	J^-------------	_	14	nmod	_	LId=a-1
16	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	21	expl:pass	_	_
17	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	_	LId=v-1
18	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	17	fixed	_	_
19	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	20	amod	_	LId=účetní-1
20	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	_	_
21	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
22	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	23	case	_	LId=s-1
23	využitím	využití	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	_	_
24	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	23	nmod	_	_
25	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	_	LId=v-1
26	účtové	účtový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	_
27	třídě	třída	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	24	nmod	_	_
28	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	_	_
29	Zásoby	zásoba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	27	nmod	_	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


