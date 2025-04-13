---
layout: base
title:  'Statistics of expl:pass in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_cltt-dep-expl-pv.html">expl:pv</a></tt>.

348 nodes (1%) are attached to their parents as `expl:pass`.

317 instances of `expl:pass` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 2 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (345; 99% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 expl:pass	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pass	color:blue
1	Nestanoví-li	Nestanoví-li	NOUN	NNNXX-----A----	Gender=Neut	14	nmod	14:nmod	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	1:expl:pass	_
3	dále	dále	ADV	Db------------1	_	1	advmod	1:advmod	LId=dále-3
4	jinak	jinak	ADV	Db-------------	_	1	advmod	1:advmod	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	1:punct	_
6	ustanovení	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	14	nsubj:pass	14:nsubj:pass	_
7	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	8	det	8:det	_
8	zákona	zákon	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	6:nmod:gen	_
9	týkající	týkající	ADJ	AGFP1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	6:amod	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pv	9:expl:pv	_
11	výroční	výroční	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	amod	12:amod	_
12	zprávy	zpráva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	9	obj	9:obj	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	expl:pass	14:expl:pass	_
14	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
15	i	i	CCONJ	J^-------------	_	19	advmod:emph	19:advmod:emph	LId=i-1
16	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	19:case	LId=pro-1
17	konsolidovanou	konsolidovaný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	19:amod	_
18	výroční	výroční	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	19:amod	_
19	zprávu	zpráva	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	14	obl	14:obl:pro:acc	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	14	punct	14:punct	_

~~~


