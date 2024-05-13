---
layout: base
title:  'Statistics of flat in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="cs_poetry-dep-flat-foreign.html">flat:foreign</a></tt>.

14 nodes (0%) are attached to their parents as `flat`.

14 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (10; 71% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (2; 14% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat	color:blue
1	Do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	_
2	„	"	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
3	Lumíru	Lumír	PROPN	NNIXX-----A----	Animacy=Inan|Gender=Masc|NameType=Com|Polarity=Pos	5	obl	_	_
4	“	“	PUNCT	NNIXX-----A----	_	3	punct	_	_
5	napsal	napsat	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	článek	článek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	SpaceAfter=No
7	*	*	PUNCT	Z:-------------	_	6	punct	_	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	9	punct	_	_
9	Theer	Theer	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	5	nmod	_	_
10	–	–	PUNCT	Z:-------------	_	12	punct	_	_
11	alias	alias	CCONJ	J^-------------	_	12	cc	_	_
12	Gulon	Gulon	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	9	appos	_	_
13	Otto	Otto	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	12	flat	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Tak	tak	CCONJ	Db-------------	_	6	advmod	_	_
2	kdys	kdysi	ADV	Db-------------	PronType=Ind	6	advmod	_	_
3	předek	předek	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	_
4	pohan	pohan	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	flat	_	_
5	líce	líce	NOUN	Dg-------2A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	6	obj	_	_
6	smáčel	smáčet	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	slzami	slza	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	6	obl	_	_
8	tu	tady	ADV	Db------------1	PronType=Dem	6	advmod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	13	punct	_	_
10	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	11	case	_	_
11	Sluncem	slunce	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	13	obl	_	_
12	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pass	_	_
13	koře	kořit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Conv|Voice=Act	6	advcl	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	20	punct	_	_
15	an	an	SCONJ	TT-------------	_	20	mark	_	_
16	Bůh	bůh	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	20	nsubj	_	_
17	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	16	det	_	_
18	slunný	slunný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	16	amod	_	_
19	slavně	slavně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	20	advmod	_	_
20	kráčel	kráčet	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	advcl	_	_
21	nad	nad	ADP	RR--4----------	AdpType=Prep|Case=Acc	22	case	_	_
22	temena	temeno	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	20	obl	_	_
23	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	25	case	_	_
24	hořícího	hořící	ADJ	AGNS2-----A----	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	25	amod	_	_
25	moře	moře	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	20	obl	_	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Deset	deset	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	_	_
2	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	6	obl	_	_
3	už	už	ADV	Db-------------	_	6	advmod	_	_
4	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	_
5	tom	ten	DET	PDZS6----------	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	6	obl:arg	_	_
6	píše	psát	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	8	punct	_	_
8	pan	pan	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	_
9	Vejr	Vejr	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	8	flat	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	_
11	Švandě	Švanda	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
12	Dudákovi	Dudák	PROPN	NNMS6-----A----	Animacy=Anim|Case=Loc|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	11	flat	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


