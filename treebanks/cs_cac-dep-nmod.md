---
layout: base
title:  'Statistics of nmod in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `nmod`

This relation is universal.

54820 nodes (11%) are attached to their parents as `nmod`.

51883 instances of `nmod` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.08349142648668.

The following 56 pairs of parts of speech are connected with `nmod`: [-pos/NOUN]()-[-pos/NOUN]() (44469; 81% instances), [-pos/NOUN]()-[-pos/PROPN]() (3705; 7% instances), [-pos/NOUN]()-[-pos/PRON]() (1207; 2% instances), [-pos/NUM]()-[-pos/SYM]() (958; 2% instances), [-pos/NOUN]()-[-pos/SYM]() (916; 2% instances), [-pos/PROPN]()-[-pos/NOUN]() (885; 2% instances), [-pos/PROPN]()-[-pos/SYM]() (561; 1% instances), [-pos/PROPN]()-[-pos/PROPN]() (491; 1% instances), [-pos/NUM]()-[-pos/NOUN]() (353; 1% instances), [-pos/SYM]()-[-pos/NOUN]() (339; 1% instances), [-pos/ADV]()-[-pos/NOUN]() (239; 0% instances), [-pos/ADJ]()-[-pos/NOUN]() (128; 0% instances), [-pos/ADJ]()-[-pos/PRON]() (82; 0% instances), [-pos/VERB]()-[-pos/NOUN]() (75; 0% instances), [-pos/DET]()-[-pos/PRON]() (71; 0% instances), [-pos/DET]()-[-pos/NOUN]() (69; 0% instances), [-pos/NUM]()-[-pos/PRON]() (32; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (32; 0% instances), [-pos/SYM]()-[-pos/SYM]() (29; 0% instances), [-pos/SYM]()-[-pos/PROPN]() (28; 0% instances), [-pos/ADJ]()-[-pos/PROPN]() (23; 0% instances), [-pos/PRON]()-[-pos/PRON]() (18; 0% instances), [-pos/ADV]()-[-pos/PRON]() (15; 0% instances), [-pos/NOUN]()-[-pos/ADP]() (11; 0% instances), [-pos/CCONJ]()-[-pos/NOUN]() (8; 0% instances), [-pos/NOUN]()-[-pos/CCONJ]() (7; 0% instances), [-pos/VERB]()-[-pos/PROPN]() (7; 0% instances), [-pos/ADP]()-[-pos/NOUN]() (6; 0% instances), [-pos/DET]()-[-pos/SYM]() (6; 0% instances), [-pos/SYM]()-[-pos/PRON]() (5; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (4; 0% instances), [-pos/PRON]()-[-pos/PROPN]() (4; 0% instances), [-pos/PROPN]()-[-pos/PART]() (4; 0% instances), [-pos/VERB]()-[-pos/PRON]() (4; 0% instances), [-pos/VERB]()-[-pos/SYM]() (3; 0% instances), [-pos/ADJ]()-[-pos/ADP]() (2; 0% instances), [-pos/ADJ]()-[-pos/SYM]() (2; 0% instances), [-pos/ADV]()-[-pos/CCONJ]() (2; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (2; 0% instances), [-pos/NOUN]()-[-pos/PART]() (2; 0% instances), [-pos/ADJ]()-[-pos/SCONJ]() (1; 0% instances), [-pos/ADP]()-[-pos/PRON]() (1; 0% instances), [-pos/ADV]()-[-pos/SYM]() (1; 0% instances), [-pos/DET]()-[-pos/ADJ]() (1; 0% instances), [-pos/NOUN]()-[-pos/INTJ]() (1; 0% instances), [-pos/NOUN]()-[-pos/SCONJ]() (1; 0% instances), [-pos/NOUN]()-[-pos/VERB]() (1; 0% instances), [-pos/NUM]()-[-pos/ADP]() (1; 0% instances), [-pos/NUM]()-[-pos/CCONJ]() (1; 0% instances), [-pos/NUM]()-[-pos/PROPN]() (1; 0% instances), [-pos/PART]()-[-pos/NOUN]() (1; 0% instances), [-pos/PROPN]()-[-pos/ADP]() (1; 0% instances), [-pos/PUNCT]()-[-pos/SYM]() (1; 0% instances), [-pos/SYM]()-[-pos/ADP]() (1; 0% instances), [-pos/SYM]()-[-pos/PART]() (1; 0% instances), [-pos/VERB]()-[-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Vypracování	vypracování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	LDeriv=vypracovat
2	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	amod	_	_
3	principů	princip	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	_	_
4	regulace	regulace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	_
5	vodního	vodní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	režimu	režim	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	nmod	_	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=v-1
8	půdě	půda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Ředitel	ředitel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	_	_
3	ZO	ZO	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	1	conj	_	_
4	SSM	SSM	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	3	nmod	_	SpaceAfter=No|LId=SSM-1|LGloss=(Socialistický_svaz_mládeže)
5	,	,	PUNCT	Z:-------------	_	3	punct	_	_
6	ZO	ZO	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	3	orphan	_	_
7	KSČ	KSČ	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	6	nmod	_	SpaceAfter=No|LId=KSČ-1|LGloss=(Komunistická_strana_Československa)
8	,	,	PUNCT	Z:-------------	_	3	punct	_	_
9	ZO	ZO	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	3	orphan	_	_
10	ROH	ROH	PROPN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|NameType=Com|Polarity=Pos	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Konečně	konečně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	LDeriv=konečný
2	všechny	všechno	PRON	PLIP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	3	nmod	_	_
3	druhy	druh	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	nsubj	_	LId=druh-1|LGloss=(typ)
4	pleti	pleť	NOUN	NNFS2-----A---1	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	_
5	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
6	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	7	cop	_	_
7	dráždivé	dráždivý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


