---
layout: base
title:  'Statistics of reparandum in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `reparandum`

This relation is universal.

2 nodes (0%) are attached to their parents as `reparandum`.

2 instances of `reparandum` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.

The following 2 pairs of parts of speech are connected with `reparandum`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (1; 50% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 reparandum	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Entity=(pdtsc_ak_146.00e36--1-gstype:spec)|Functor=3:ACT.cop
2	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Functor=3:PRED
3	město	město	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Functor=0:PAT
4	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	reparandum	3:reparandum	LId=na-1
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	LId=na-1
6	severu	sever	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	nmod	4:nmod	Functor=4:LOC
7	Čech	Čechy	PROPN	NNFP2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Plur	6	nmod	6:nmod:gen	Functor=6:RSTR
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 32 reparandum	color:blue
1	Jeden	jeden	NUM	CnYS1----------	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	3	nummod	3:nummod	LNumValue=1|Functor=3:RSTR
2	takový	takový	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	3:det	Functor=3:RSTR
3	návrh	návrh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	Functor=10:ACT
4	ohledně	ohledně	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	6:case	_
5	termínových	termínový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	6:amod	Functor=6:RSTR
6	obchodů	obchod	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	nmod	3:nmod:ohledně:gen	Functor=3:REG
7	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	9	case	9:case	Entity=(wsj0118001e427--3-gstype:spec|LId=s-1
8	akciovými	akciový	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	9	amod	9:amod	Functor=9:RSTR
9	indexy	index	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	6	nmod	6:nmod:s:ins	Entity=wsj0118001e427)|Functor=6:RSTR
10	zní	znít	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
11	zvýšit	zvýšit	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	10	advcl	10:advcl	Functor=10:MANN
12	požadavek	požadavek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	11	obj	11:obj	Functor=11:PAT
13	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	14	case	14:case	Entity=(wsj0118001e434--2-gstype:spec(wsj0118001e423[1/2]--1)|LId=na-1
14	marži	marže	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	12	nmod	12:nmod:na:acc	Entity=wsj0118001e434)|Functor=12:RSTR|SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	17	punct	17:punct	_
16	neboli	neboli	CCONJ	J^-------------	_	17	cc	17:cc	Functor=17:APPS
17	platbu	platba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	14	appos	14:appos|30:nsubj	Entity=(wsj0118001e423[2/2]--1|Functor=14:RSTR
18	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	19	case	19:case	LId=v-1
19	hotovosti	hotovost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	17	nmod	17:nmod:v:loc	LDeriv=hotový|Functor=17:MANN
20	"	"	PUNCT	Z:-------------	_	23	punct	23:punct	SpaceAfter=No
21	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	23	case	23:case	LId=v-1
22	dobré	dobrý	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	23	amod	23:amod	Functor=23:RSTR
23	víře	víra	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	17	nmod	17:nmod:v:loc	SpaceAfter=No|LGloss=(v_něco/někoho)|Functor=17:MANN
24	"	"	PUNCT	Z:-------------	_	23	punct	23:punct	SpaceAfter=No
25	,	,	PUNCT	Z:-------------	_	30	punct	30:punct	_
26	která	který	DET	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	30	nsubj	17:ref	Entity=(wsj0118001e423--1)|Functor=30:ACT
27	by	být	AUX	Vc----------I--	Aspect=Imp|Mood=Cnd|VerbForm=Fin	30	aux	30:aux	_
28	jejich	jeho	DET	P9XXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	29	det	29:det	Entity=(wsj0118001e425--1-gstype:spec)|Functor=29:ACT
29	obchodování	obchodování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Vnoun	30	obj	30:obj	LDeriv=obchodovat|Functor=30:PAT
30	podmiňovala	podmiňovat	VERB	VpQW----R-AAI--	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	17	acl:relcl	17:acl:relcl	Entity=wsj0118001e423[2/2])|Functor=17:RSTR|SpaceAfter=No
31	,	,	PUNCT	Z:-------------	_	30	punct	30:punct	_
32	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	reparandum	11:reparandum	LId=na-1
33	zhruba	zhruba	ADV	Db-------------	_	35	advmod	35:advmod	Functor=35:EXT
34	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	32	case	32:case	LId=na-1
35	stejnou	stejný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	36	amod	36:amod	Functor=36:RSTR
36	úroveň	úroveň	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	32	obl	32:obl:acc	Functor=32:EFF
37	jako	jako	SCONJ	J,-------------	_	38	mark	38:mark	LId=jako-1
38	požadavky	požadavek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	35	advcl	35:advcl:jako	Functor=35:PAT
39	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	40	case	40:case	LId=na-1
40	marže	marže	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	38	nmod	38:nmod:na:acc	Functor=38:RSTR
41	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	42	case	42:case	_
42	akcie	akcie	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	40	nmod	40:nmod:za:acc	SpaceAfter=No|Functor=40:REG
43	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


