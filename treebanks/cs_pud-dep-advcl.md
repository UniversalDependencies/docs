---
layout: base
title:  'Statistics of advcl in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `advcl`

This relation is universal.

191 nodes (1%) are attached to their parents as `advcl`.

132 instances of `advcl` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.1413612565445.

The following 20 pairs of parts of speech are connected with `advcl`: [-pos/VERB]()-[-pos/VERB]() (90; 47% instances), [-pos/ADV]()-[-pos/VERB]() (31; 16% instances), [-pos/VERB]()-[-pos/ADJ]() (13; 7% instances), [-pos/ADJ]()-[-pos/VERB]() (11; 6% instances), [-pos/ADV]()-[-pos/ADJ]() (7; 4% instances), [-pos/NOUN]()-[-pos/VERB]() (6; 3% instances), [-pos/VERB]()-[-pos/NOUN]() (6; 3% instances), [-pos/ADJ]()-[-pos/NOUN]() (4; 2% instances), [-pos/ADJ]()-[-pos/ADJ]() (3; 2% instances), [-pos/ADV]()-[-pos/NOUN]() (3; 2% instances), [-pos/NOUN]()-[-pos/ADJ]() (3; 2% instances), [-pos/VERB]()-[-pos/ADV]() (3; 2% instances), [-pos/VERB]()-[-pos/DET]() (3; 2% instances), [-pos/VERB]()-[-pos/NUM]() (2; 1% instances), [-pos/ADV]()-[-pos/ADV]() (1; 1% instances), [-pos/DET]()-[-pos/ADJ]() (1; 1% instances), [-pos/NUM]()-[-pos/VERB]() (1; 1% instances), [-pos/VERB]()-[-pos/PART]() (1; 1% instances), [-pos/VERB]()-[-pos/PRON]() (1; 1% instances), [-pos/VERB]()-[-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 advcl	color:blue
1	Bylo	být	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	nsubj	_	_
3	jako	jako	SCONJ	J,-------------	_	8	mark	_	LId=jako-1
4	když	když	SCONJ	J,-------------	_	8	mark	_	_
5	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	8	aux	_	_
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	7	case	_	LId=s-1
7	míčem	míč	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	_	_
8	hrál	hrát	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	advcl	_	_
9	skořápky	skořápka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 advcl	color:blue
1	Samozřejmě	samozřejmě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	0	root	_	SpaceAfter=No|LDeriv=samozřejmý
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	že	že	SCONJ	J,-------------	_	6	mark	_	LId=že-1
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
5	kancelářích	kancelář	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	6	obl	_	_
6	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
7	víc	hodně	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	8	det:numgov	_	LId=hodně-2
8	oblečení	oblečení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	6	nsubj	_	LDeriv=obléci
9	než	než	SCONJ	J,-------------	_	10	case	_	LId=než-2
10	jídla	jídlo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 advcl	color:blue
1	Protože	protože	SCONJ	J,-------------	_	7	mark	_	_
2	série	série	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj	_	_
3	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	_	_
4	už	už	ADV	Db-------------	_	7	advmod	_	LId=už-1
5	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	ta	ten	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	stará	starý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	advcl	_	SpaceAfter=No|LId=starý-2|LGloss=(člověk,_věc)
8	,	,	PUNCT	Z:-------------	_	7	punct	_	_
9	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
10	mnozí	mnohý	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	11	amod	_	_
11	uživatelé	uživatel	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	9	nsubj	_	_
12	ušetřit	ušetřit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	9	xcomp	_	_
13	100	100	NUM	C=-------------	NumForm=Digit|NumType=Card	14	nummod:gov	_	_
14	eur	euro	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	12	obj	_	SpaceAfter=No|LId=euro-2|LGloss=(evr._měna)
15	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


