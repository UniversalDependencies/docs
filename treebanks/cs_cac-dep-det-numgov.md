---
layout: base
title:  'Statistics of det:numgov in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `det:numgov`

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:nummod]().

367 nodes (0%) are attached to their parents as `det:numgov`.

347 instances of `det:numgov` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.67847411444142.

The following 2 pairs of parts of speech are connected with `det:numgov`: [-pos/NOUN]()-[-pos/DET]() (358; 98% instances), [-pos/PRON]()-[-pos/DET]() (9; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:numgov	color:blue
1	Za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	LId=za-1
2	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	3	det:numgov	_	LId=tolik-1
3	dnů	den	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	7	obl	_	LGloss=(jednotka_času)
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	mu	on	PRON	PHZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	7	obj	_	_
6	pak	pak	ADV	Db-------------	_	7	advmod	_	_
7	poskytne	poskytnout	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	náhrada	náhrada	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj:pass	_	_
9	mzdy	mzda	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det:numgov	color:blue
1	Pokud	pokud	SCONJ	J,-------------	_	2	mark	_	_
2	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	_
3	jí	on	PRON	PPFS2--3-------	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	LGloss=(ona)
4	málo	málo	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	3	det:numgov	_	SpaceAfter=No|LId=málo-1|LGloss=(málo_+_2._p.,_málo_peněz)
5	,	,	PUNCT	Z:-------------	_	2	punct	_	_
6	vytvoří	vytvořit	VERB	VB-P---3P-AA---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	_	LGloss=(zvr._zájmeno/částice)
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=na-1
9	povrchu	povrch	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	_	_
10	vápenné	vápenný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	_	_
11	kaše	kaše	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	nmod	_	_
12	trhliny	trhlina	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	6	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


