---
layout: base
title:  'Statistics of advmod in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="cs_cltt-dep-advmod-emph.html">advmod:emph</a></tt>.

430 nodes (1%) are attached to their parents as `advmod`.

253 instances of `advmod` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.56511627906977.

The following 7 pairs of parts of speech are connected with `advmod`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (237; 55% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (139; 32% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (45; 10% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advmod	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	8	punct	8:punct	_
2	Při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	LId=při-1
3	průběžné	průběžný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl:při:loc	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pass	8:expl:pass	_
6	odstavec	odstavec	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
7	4	4	NUM	C}-------------	NumForm=Roman|NumType=Card	6	nummod	6:nummod	_
8	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	8:advmod	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advmod	color:blue
1	Průběh	průběh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod:gen	_
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	být	být	AUX	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	5	aux:pass	5:aux:pass	_
5	vyjádřen	vyjádřený	ADJ	VsYS---XX-AP---	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	ccomp	3:ccomp	LDeriv=vyjádřit
6	i	i	CCONJ	J^-------------	_	7	advmod:emph	7:advmod:emph	LId=i-1
7	jinak	jinak	ADV	Db-------------	_	5	advmod	5:advmod	_
8	než	než	SCONJ	J,-------------	_	10	mark	10:mark	LId=než-2
9	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	10	case	10:case	LId=v-1
10	vazbě	vazba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	7	dep	7:dep	LId=vazba-8
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	LId=na-1
12	čas	čas	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	nmod	10:nmod:na:acc	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
14	například	například	ADV	Db-------------	_	16	cc	16:cc	_
15	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	16:case	LId=na-1
16	výkony	výkon	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	12	appos	12:appos	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
3	popíše	popsat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	tuto	tuto	ADV	Db-------------	_	5	advmod	5:advmod	_
5	skutečnost	skutečnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=v-1
7	příloze	příloha	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:v:loc	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=v-1
9	účetní	účetní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	10:amod	LId=účetní-1
10	závěrce	závěrka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	7	nmod	7:nmod:v:loc	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


