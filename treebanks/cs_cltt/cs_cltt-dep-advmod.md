---
layout: base
title:  'Statistics of advmod in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="cs_cltt-dep-advmod-emph.html">advmod:emph</a></tt>.

438 nodes (1%) are attached to their parents as `advmod`.

259 instances of `advmod` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54566210045662.

The following 7 pairs of parts of speech are connected with `advmod`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (239; 55% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (144; 33% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (45; 10% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advmod	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	8	punct	_	_
2	Při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=při-1
3	průběžné	průběžný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obl	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pass	_	_
6	odstavec	odstavec	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nsubj:pass	_	_
7	4	4	NUM	C}-------------	NumForm=Roman|NumType=Card	6	nummod	_	_
8	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advmod	color:blue
1	Průběh	průběh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	_	_
2	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	1	nmod	_	_
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	aux:pass	_	_
5	vyjádřen	vyjádřený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	ccomp	_	LDeriv=vyjádřit
6	i	i	CCONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
7	jinak	jinak	ADV	Db-------------	_	5	advmod	_	_
8	než	než	SCONJ	J,-------------	_	10	mark	_	LId=než-2
9	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	10	case	_	LId=v-1
10	vazbě	vazba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	7	dep	_	LId=vazba-8
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	_	LId=na-1
12	čas	čas	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	_	_
14	například	například	ADV	Db-------------	_	16	cc	_	_
15	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	_	LId=na-1
16	výkony	výkon	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	12	appos	_	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
3	popíše	popsat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	tuto	tuto	ADV	Db-------------	_	5	advmod	_	_
5	skutečnost	skutečnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=v-1
7	příloze	příloha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	_	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=v-1
9	účetní	účetní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	_	LId=účetní-1
10	závěrce	závěrka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


