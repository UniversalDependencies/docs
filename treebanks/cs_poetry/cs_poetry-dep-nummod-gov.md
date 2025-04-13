---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs_poetry-dep-nummod.html">nummod</a></tt>.

6 nodes (0%) are attached to their parents as `nummod:gov`.

6 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NUM.html">NUM</a></tt> (5; 83% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod:gov	color:blue
1	Deset	deset	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	_	_
2	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	6	obl	_	_
3	už	už	ADV	Db-------------	_	6	advmod	_	_
4	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	_
5	tom	ten	DET	PDZS6----------	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	6	obl:arg	_	_
6	píše	psát	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	8	punct	_	_
8	pan	pan	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
9	Vejr	Vejr	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	8	flat	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	_
11	Švandě	Švanda	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
12	Dudákovi	Dudák	PROPN	NNMS6-----A----	Animacy=Anim|Case=Loc|Gender=Masc|NameType=Sur|Number=Sing	11	flat	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod:gov	color:blue
1	Pak	pak	ADV	Db-------------	_	6	advmod	_	_
2	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	_
3	mlhu	mlha	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
4	tu	ten	DET	Db------------1	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
5	zas	zas	ADV	Db-------------	_	6	advmod	_	_
6	padne	padnout	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	trochu	trochu	NOUN	Db-------------	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
8	světla	světlo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	14	punct	_	_
10	a	a	CCONJ	J^-------------	_	14	cc	_	_
11	hned	hned	ADV	Db-------------	_	14	advmod	_	_
12	sty	sto	NOUN	NNNP7-----A----	Case=Ins|Gender=Neut|Number=Plur	13	nummod:gov	_	_
13	raket	raketa	NOUN	NNIS1-----A----	Case=Gen|Gender=Fem|Number=Sing	14	obl	_	_
14	září	zářit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	16	punct	_	_
16	hraje	hrát	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	18	punct	_	_
18	hýří	hýřit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	_
19	náš	můj	DET	PSIS4-P1-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	21	det	_	_
20	celý	celý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	21	amod	_	_
21	obzor	obzor	NOUN	NNIS4-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	6	punct	_	SpaceAfter=No
23	.	.	PUNCT	Z:-------------	_	6	punct	_	SpaceAfter=No
24	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


