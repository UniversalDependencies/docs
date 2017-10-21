---
layout: base
title:  'Statistics of csubj in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="cs_cltt-dep-csubj-pass.html">csubj:pass</a></tt>.

55 nodes (0%) are attached to their parents as `csubj`.

53 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.67272727272727.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (37; 67% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (14; 25% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	4	punct	_	_
2	Rezervy	rezerva	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
3	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	možné	možný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
5	používat	používat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	csubj	_	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
7	úpravám	úprava	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	5	obl	_	_
8	výše	výše	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	_
9	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	_	_
10	aktiv	aktivum	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	9	nmod	_	SpaceAfter=No|LId=aktivum-1
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 62	bgColor:blue
# visual-style 62	fgColor:white
# visual-style 61	bgColor:blue
# visual-style 61	fgColor:white
# visual-style 61 62 csubj	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	10	punct	_	_
2	Pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	LId=pro-1
3	účely	účel	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	10	obl	_	_
4	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	det	_	_
5	zákona	zákon	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	_	_
6	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pass	_	_
7	jako	jako	SCONJ	J,-------------	_	9	mark	_	_
8	reálná	reálný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	_
9	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	13	xcomp	_	_
10	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	a)	a)	X	X@-------------	_	13	nmod	_	_
12	tržní	tržní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nsubj:pass	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	16	punct	_	_
15	b)	b)	X	X@-------------	_	16	nmod	_	_
16	ocenění	ocenění	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	13	conj	_	_
17	kvalifikovaným	kvalifikovaný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	18	amod	_	_
18	odhadem	odhad	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	16	nmod	_	_
19	nebo	nebo	CCONJ	J^-------------	_	20	cc	_	_
20	posudkem	posudek	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	18	conj	_	_
21	znalce	znalec	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	20	nmod	_	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	23	punct	_	_
23	není-li	není-li	X	X@-------------	_	16	dep	_	_
24	tržní	tržní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	25	amod	_	_
25	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	23	nsubj	_	_
26	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	27	case	_	LId=k-1
27	dispozici	dispozice	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	23	obl	_	_
28	nebo	nebo	CCONJ	J^-------------	_	31	cc	_	_
29	tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	31	nsubj	_	_
30	nedostatečně	dostatečně	ADV	Dg-------1N----	Degree=Pos|Polarity=Neg	31	advmod	_	_
31	představuje	představovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	23	conj	_	_
32	reálnou	reálný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	33	amod	_	_
33	hodnotu	hodnota	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	31	obj	_	SpaceAfter=No
34	;	;	PUNCT	Z:-------------	_	44	punct	_	_
35	metody	metoda	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	44	nsubj	_	_
36	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	35	nmod	_	_
37	použité	použitý	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	35	amod	_	_
38	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	40	case	_	LId=při-1
39	kvalifikovaném	kvalifikovaný	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	40	amod	_	_
40	odhadu	odhad	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	37	obl	_	_
41	nebo	nebo	CCONJ	J^-------------	_	42	cc	_	_
42	posudku	posudek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	40	conj	_	_
43	znalce	znalec	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	40	nmod	_	_
44	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	dep	_	_
45	zajistit	zajistit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	44	xcomp	_	_
46	přiměřené	přiměřený	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	47	amod	_	_
47	přiblížení	přiblížení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	45	obj	_	_
48	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	47	expl:pv	_	_
49	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	51	case	_	LId=k-1
50	tržní	tržní	ADJ	AAFS3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	51	amod	_	_
51	hodnotě	hodnota	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	47	obl	_	SpaceAfter=No
52	,	,	PUNCT	Z:-------------	_	54	punct	_	_
53	c)	c)	X	X@-------------	_	54	nmod	_	_
54	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	13	conj	_	_
55	stanovené	stanovený	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	54	amod	_	_
56	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	59	case	_	LId=podle-2
57	zvláštních	zvláštní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	59	amod	_	_
58	právních	právní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	59	amod	_	_
59	předpisů	předpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	55	obl	_	SpaceAfter=No
60	,	,	PUNCT	Z:-------------	_	61	punct	_	_
61	nelze-li	nelze-li	X	X@-------------	_	54	dep	_	_
62	postupovat	postupovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	61	csubj	_	_
63	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	64	case	_	LId=podle-2
64	písmen	písmeno	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	62	obl	_	_
65	a)_a_b)	a)_a_b)	X	X@-------------	_	64	nmod	_	SpaceAfter=No
66	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


