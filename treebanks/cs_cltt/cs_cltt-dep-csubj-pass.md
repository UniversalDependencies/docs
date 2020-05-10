---
layout: base
title:  'Statistics of csubj:pass in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-csubj.html">csubj</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (2; 67% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 csubj:pass	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	23	punct	_	_
2	Pokud	pokud	SCONJ	J,-------------	_	6	mark	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	_	_
4	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=při-1
5	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
6	zjistí	zjistit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	12	punct	_	_
8	že	že	SCONJ	J,-------------	_	12	mark	_	_
9	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	12	nsubj	_	_
10	závazků	závazek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	9	nmod	_	_
11	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
12	vyšší	vysoký	ADJ	AANS1----2A----	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing|Polarity=Pos	6	csubj:pass	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	_	_
14	popřípadě	popřípadě	ADV	Db-------------	_	16	cc	_	_
15	i	i	CCONJ	J^-------------	_	16	advmod:emph	_	LId=i-1
16	nižší	nízký	ADJ	AAFS1----2A----	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing|Polarity=Pos	12	conj	_	_
17	než	než	SCONJ	J,-------------	_	19	mark	_	LId=než-2
18	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	19	det	_	_
19	výše	výše	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	12	advcl	_	_
20	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	21	case	_	LId=v-1
21	účetnictví	účetnictví	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	19	nmod	_	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	6	punct	_	_
23	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
24	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	23	expl:pass	_	_
25	závazky	závazek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	23	nsubj:pass	_	_
26	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	_	LId=v-1
27	účetnictví	účetnictví	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	25	nmod	_	_
28	a	a	CCONJ	J^-------------	_	31	cc	_	LId=a-1
29	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	31	case	_	LId=v-1
30	účetní	účetní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	31	amod	_	LId=účetní-1
31	závěrce	závěrka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	27	conj	_	_
32	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	35	case	_	LId=v-1
33	tomto	tento	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	35	det	_	_
34	zjištěném	zjištěný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	35	amod	_	_
35	ocenění	ocenění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	23	obl	_	SpaceAfter=No
36	.	.	PUNCT	Z:-------------	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 csubj:pass	color:blue
1	Zohledněním	zohlednění	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	14	obl:arg	_	_
2	předpokládané	předpokládaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
3	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	_
5	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	nmod	_	_
6	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=podle-2
7	věty	věta	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	14	obl	_	_
8	druhé	druhý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	_	LId=druhý-1
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	expl:pass	_	_
10	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=pro-1
11	účely	účel	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	14	obl	_	_
12	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	13	det	_	_
13	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	11	nmod	_	_
14	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	19	punct	_	_
16	že	že	SCONJ	J,-------------	_	19	mark	_	_
17	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	18	amod	_	LId=účetní-1
18	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	19	nsubj	_	_
19	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	csubj:pass	_	_
20	a	a	CCONJ	J^-------------	_	21	cc	_	LId=a-1
21	aktualizuje	aktualizovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	_	_
22	odpisový	odpisový	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	23	amod	_	_
23	plán	plán	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	19	obj	_	_
24	předmětného	předmětný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	25	amod	_	_
25	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	23	nmod	_	_
26	tak	tak	ADV	Db-------------	PronType=Dem	19	advmod	_	SpaceAfter=No|LId=tak-3
27	,	,	PUNCT	Z:-------------	_	48	punct	_	_
28	aby	aby	SCONJ	J,-------------	_	48	mark	_	_
29	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	48	aux	_	_
30	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	48	expl:pv	_	_
31	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	33	case	_	LId=za-1
32	plánovanou	plánovaný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	33	amod	_	_
33	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	48	obl	_	_
34	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	35	det	_	_
35	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	33	nmod	_	_
36	součet	součet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	48	nsubj	_	_
37	vykázaných	vykázaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	40	amod	_	_
38	a	a	CCONJ	J^-------------	_	39	cc	_	LId=a-1
39	plánovaných	plánovaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	37	conj	_	_
40	odpisů	odpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	36	nmod	_	_
41	včetně	včetně	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	_	LId=včetně-2
42	předpokládané	předpokládaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	_	_
43	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	44	amod	_	_
44	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	36	nmod	_	_
45	nebo	nebo	CCONJ	J^-------------	_	47	cc	_	_
46	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	47	amod	_	_
47	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	44	conj	_	_
48	rovnal	rovnat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	19	advcl	_	_
49	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	48	obj	_	_
50	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	49	nmod	_	_
51	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	52	case	_	LId=podle-2
52	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	49	nmod	_	_
53	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	52	nummod	_	SpaceAfter=No
54	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


