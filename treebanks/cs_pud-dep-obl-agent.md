---
layout: base
title:  'Statistics of obl:agent in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of [obl]().

21 nodes (0%) are attached to their parents as `obl:agent`.

14 instances of `obl:agent` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.19047619047619.

The following 3 pairs of parts of speech are connected with `obl:agent`: [-pos/ADJ]()-[-pos/NOUN]() (17; 81% instances), [-pos/ADJ]()-[-pos/PROPN]() (3; 14% instances), [-pos/ADJ]()-[-pos/PRON]() (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 obl:agent	color:blue
1	Weiss	Weiss	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	9	nsubj:pass	_	_
2	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	aux:pass	_	_
3	městy	město	NOUN	NNNP7-----A----	Case=Ins|Gender=Neut|Number=Plur|Polarity=Pos	9	obl:agent	_	_
4	Kolín	Kolín	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	3	nmod	_	LId=Kolín-2
5	nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	_	LId=nad-1
6	Rýnem	Rýn	PROPN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	4	nmod	_	_
7	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
8	Brémy	Brémy	PROPN	NNFP1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Plur|Polarity=Pos	4	conj	_	_
9	poctěn	poctěný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
10	cenami	cena	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	9	obl	_	_
11	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	_	_
12	literaturu	literatura	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:agent	color:blue
1	César	César	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	7	nsubj:pass	_	_
2	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	aux:pass	_	_
3	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=o-1
4	Pompeiových	Pompeiův	ADJ	AUFP6M---------	Case=Loc|Gender=Fem|Gender[psor]=Masc|NameType=Sur|Number=Plur|Poss=Yes	5	amod	_	LDeriv=Pompeius
5	akcích	akce	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	7	obl	_	_
6	osobně	osobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	LDeriv=osobní
7	informován	informovaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
8	Curiem	Curio	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	7	obl:agent	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	14	punct	_	_
10	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	14	nsubj	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	té	ten	DET	PDFS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	13	det	_	_
13	době	doba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	14	obl	_	_
14	skončil	skončit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	acl	_	_
15	své	svůj	DET	P8NS4---------1	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	17	det	_	LId=svůj-1|LGloss=(přivlast.)
16	funkční	funkční	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	17	amod	_	_
17	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	14	obj	_	SpaceAfter=No
18	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 obl:agent	color:blue
1	Během	během	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	_
2	prvního	první	ADJ	CrNS2----------	Case=Gen|Gender=Neut|Number=Sing|NumType=Ord	3	amod	_	_
3	století	století	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	12	obl	_	_
4	rozvoje	rozvoj	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	_	_
5	nebyla	být	AUX	VpQW---XR-NA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	12	aux:pass	_	_
6	španělská	španělský	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	_	_
7	dominance	dominance	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	12	nsubj:pass	_	_
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=na-1
9	tomto	tento	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	10	det	_	_
10	území	území	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	7	nmod	_	_
11	nikým	nikdo	PRON	PWM-7----------	Animacy=Anim|Case=Ins|Gender=Masc|PronType=Neg	12	obl:agent	_	_
12	zpochybňována	zpochybňovaný	ADJ	VsQW---XX-AP---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	12	punct	_	_

~~~


