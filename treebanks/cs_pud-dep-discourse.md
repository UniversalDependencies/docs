---
layout: base
title:  'Statistics of discourse in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `discourse`

This relation is universal.

7 nodes (0%) are attached to their parents as `discourse`.

7 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.14285714285714.

The following 5 pairs of parts of speech are connected with `discourse`: [-pos/VERB]()-[-pos/ADV]() (2; 29% instances), [-pos/VERB]()-[-pos/PART]() (2; 29% instances), [-pos/ADJ]()-[-pos/PART]() (1; 14% instances), [-pos/NOUN]()-[-pos/NOUN]() (1; 14% instances), [-pos/VERB]()-[-pos/ADJ]() (1; 14% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 discourse	color:blue
1	„	"	PUNCT	Z:-------------	_	4	punct	_	SpaceAfter=No
2	Naštěstí	naštěstí	ADV	Db-------------	_	4	advmod	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	_	LGloss=(zvr._zájmeno/částice)
4	ozval	ozvat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	ccomp	_	_
5	někdo	někdo	PRON	PZM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Ind	4	nsubj	_	_
6	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	7	case	_	LId=z-1
7	Sony	Sony	PROPN	NNFXX-----A----	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	5	nmod	_	_
8	Australia	Austrálie	PROPN	NNFXX-----A----	Foreign=Yes|Gender=Fem|NameType=Geo|Polarity=Pos|Style=Rare	7	flat	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
10	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	conj	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	15	punct	_	_
12	'	'	PUNCT	Z:-------------	_	15	punct	_	SpaceAfter=No
13	Mimochodem	mimochodem	ADV	Db-------------	_	15	discourse	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	13	punct	_	_
15	všimli	všimnout	VERB	VpMP---XR-AA--1	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	ccomp	_	_
16	jste	být	AUX	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	_	_
17	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	15	expl:pv	_	LGloss=(zvr._zájmeno/částice)
18	tohohle	tenhle	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	15	obj	_	SpaceAfter=No
19	?	?	PUNCT	Z:-------------	_	15	punct	_	SpaceAfter=No
20	'	'	PUNCT	Z:-------------	_	15	punct	_	SpaceAfter=No
21	“	"	PUNCT	Z:-------------	_	4	punct	_	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	4	punct	_	_
23	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
24	Pall	Pall	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	23	nsubj	_	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Koneckonců	koneckonců	PART	TT-------------	_	7	discourse	_	_
2	naše	můj	DET	PSIP1-P1-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	3	det	_	LGloss=(přivlast.)
3	výsledky	výsledek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	7	nsubj:pass	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	jen	jen	PART	TT-------------	_	6	advmod:emph	_	LId=jen-1
6	málokdy	málokdy	ADV	Db-------------	PronType=Ind	7	advmod	_	_
7	měří	měřit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=podle-2
9	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	13	punct	_	_
11	jak	jak	ADV	Db-------------	PronType=Int,Rel	13	advmod	_	LId=jak-3
12	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
13	zabezpečeni	zabezpečený	ADJ	VsMP---XX-AP---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	9	acl	_	_
14	a	a	CCONJ	J^-------------	_	18	cc	_	LId=a-1
15	kolika	kolik	DET	C?--7----------	Case=Ins|NumType=Card|PronType=Int,Rel	16	det:nummod	_	_
16	pravidly	pravidlo	NOUN	NNNP7-----A----	Case=Ins|Gender=Neut|Number=Plur|Polarity=Pos	18	obj	_	_
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pv	_	LGloss=(zvr._zájmeno/částice)
18	řídíme	řídit	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 2 discourse	color:blue
1	Přesněji	přesně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	2	advmod	_	LDeriv=přesný
2	řečeno	řečený	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	17	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	2	punct	_	_
4	podíl	podíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	17	nsubj	_	_
5	mužů	muž	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	4	nmod	_	_
6	studujících	studující	ADJ	AGMP2-----A----	Animacy=Anim|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	5	amod	_	LDeriv=studovat
7	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=na-1
8	vyšších	vysoký	ADJ	AAFP6----2A----	Case=Loc|Degree=Cmp|Gender=Fem|Number=Plur|Polarity=Pos	10	amod	_	_
9	středních	střední	ADJ	AAFP6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	10	amod	_	_
10	školách	škola	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	6	nmod	_	_
11	zvýšený	zvýšený	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	_	LDeriv=zvýšit
12	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	14	case	_	LId=o-1
13	10	10	NUM	C=-------------	NumForm=Digit|NumType=Card	14	nummod:gov	_	SpaceAfter=No
14	%	%	SYM	Z:-------------	_	11	nmod	_	_
15	nad	nad	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	_	LId=nad-1
16	průměr	průměr	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	11	nmod	_	_
17	snížil	snížit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
18	pravděpodobnost	pravděpodobnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	17	obj	_	LDeriv=pravděpodobný
19	konfliktu	konflikt	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	18	nmod	_	_
20	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	case	_	LId=o-1
21	přibližně	přibližně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	22	advmod	_	LDeriv=přibližný
22	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	23	nummod	_	SpaceAfter=No
23	%	%	SYM	Z:-------------	_	17	obl	_	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	34	punct	_	_
25	zatímco	zatímco	SCONJ	J,-------------	_	34	mark	_	_
26	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	34	nsubj	_	_
27	růstu	růst	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	26	nmod	_	LId=růst-1
28	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	30	case	_	LId=o-1
29	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	30	nummod	_	SpaceAfter=No
30	%	%	SYM	Z:-------------	_	32	nmod	_	_
31	nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	32	case	_	LId=nad-1
32	průměrem	průměr	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	26	nmod	_	_
33	studie	studie	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	32	nmod	_	_
34	snížila	snížit	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	17	advcl	_	_
35	pravděpodobnost	pravděpodobnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	34	obj	_	LDeriv=pravděpodobný
36	občanské	občanský	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	37	amod	_	_
37	války	válka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	35	nmod	_	_
38	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	41	case	_	LId=o-1
39	zhruba	zhruba	ADV	Db-------------	_	40	advmod:emph	_	_
40	jedno	jeden	NUM	ClNS4----------	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	41	nummod	_	LNumValue=1
41	procento	procento	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	34	obl	_	SpaceAfter=No
42	.	.	PUNCT	Z:-------------	_	17	punct	_	_

~~~


