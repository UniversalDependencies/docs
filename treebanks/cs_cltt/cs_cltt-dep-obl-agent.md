---
layout: base
title:  'Statistics of obl:agent in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_cltt-dep-obl-arg.html">obl:arg</a></tt>.

65 nodes (0%) are attached to their parents as `obl:agent`.

54 instances of `obl:agent` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.72307692307692.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (47; 72% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (12; 18% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (5; 8% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:agent	color:blue
1	Zbytkovou	zbytkový	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	hodnotou	hodnota	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	4	obl:agent	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	_
4	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	snížená	snížený	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	_
6	předpokládaná	předpokládaný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	_
7	zbytková	zbytkový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	_
8	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj:pass	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 obl:agent	color:blue
1	Vyloučením	vyloučení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	3	obl:agent	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	takové	takový	DET	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	5	det	_	_
5	operace	operace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj:pass	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	_	_
7	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	8	nsubj	_	_
8	umožní	umožnit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	15	punct	_	_
10	aby	aby	SCONJ	J,-------------	_	15	mark	_	_
11	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	15	aux	_	_
12	konsolidovaná	konsolidovaný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
13	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	LId=účetní-1
14	závěrka	závěrka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	15	nsubj	_	_
15	neobsahovala	obsahovat	VERB	VpQW---XR-NA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	8	ccomp	_	_
16	vzájemné	vzájemný	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	17	amod	_	_
17	transakce	transakce	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	15	obj	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	21	punct	_	_
19	které	který	DET	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	21	nsubj:pass	_	_
20	byly	být	AUX	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	21	aux:pass	_	_
21	realizovány	realizovaný	ADJ	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	17	amod	_	LDeriv=realizovat
22	účetními	účetní	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	23	amod	_	LId=účetní-1
23	jednotkami	jednotka	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	21	obl:agent	_	_
24	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	25	case	_	LId=v-1
25	konsolidaci	konsolidace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	23	nmod	_	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 obl:agent	color:blue
1	(8)	(8)	PUNCT	Z:-------------	_	6	punct	_	_
2	Dlouhodobým	dlouhodobý	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	_	_
3	nehmotným	hmotný	ADJ	AAIS7----1N----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	4	amod	_	_
4	majetkem	majetek	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	6	obj	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	_	_
6	stává	stávat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	pořizovaný	pořizovaný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	_	_
8	majetek	majetek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	_
9	uvedený	uvedený	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	_	_
10	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	LId=do-1
11	stavu	stav	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	_
12	způsobilého	způsobilý	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	amod	_	_
13	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	14	case	_	LId=k-1
14	užívání	užívání	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	12	obl	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	18	punct	_	_
16	kterým	který	DET	P4ZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	18	obl:agent	_	_
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pass	_	_
18	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl	_	_
19	dokončení	dokončení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	18	nsubj:pass	_	_
20	pořizovaného	pořizovaný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	21	amod	_	_
21	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	19	nmod	_	_
22	a	a	CCONJ	J^-------------	_	23	cc	_	LId=a-1
23	splnění	splnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	19	conj	_	_
24	stanovených	stanovený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	25	amod	_	_
25	funkcí	funkce	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	23	nmod	_	_
26	a	a	CCONJ	J^-------------	_	27	cc	_	LId=a-1
27	povinností	povinnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	25	conj	_	_
28	stanovených	stanovený	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	27	amod	_	_
29	právními	právní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	30	amod	_	_
30	předpisy	předpis	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	28	obj	_	_
31	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	33	case	_	LId=pro-1
32	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	33	det	_	_
33	užívání	užívání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	30	nmod	_	SpaceAfter=No
34	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


