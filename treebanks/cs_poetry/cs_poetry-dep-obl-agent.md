---
layout: base
title:  'Statistics of obl:agent in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cs_poetry-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_poetry-dep-obl-arg.html">obl:arg</a></tt>.

6 nodes (0%) are attached to their parents as `obl:agent`.

5 instances of `obl:agent` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83333333333333.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:agent	color:blue
1	Nesmírnou	nesmírný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	touhou	touha	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	4	obl:agent	_	_
3	kpředu	kpředu	ADV	Db-------------	_	4	advmod	_	_
4	štván	štvaný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	svědomím	svědomí	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	8	obl:agent	_	_
7	stále	stále	ADV	Db-------------	_	8	advmod	_	_
8	bičován	bičovaný	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 obl:agent	color:blue
1	Ty	ten	DET	PDFP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	2	nsubj	_	_
2	mluví	mluvit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	_
4	vášni	vášeň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	2	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	_	_
6	jež	jenž	PRON	PJFS1----------	Case=Nom|Gender=Fem|Number=Sing|PrepCase=Npr|PronType=Rel	9	nsubj	_	_
7	sebe	se	PRON	P6-X4----------	Case=Acc|PronType=Prs|Reflex=Yes	8	obj	_	_
8	zpíjet	zpíjet	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	9	xcomp	_	_
9	chtěla	chtít	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	acl:relcl	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	15	punct	_	_
11	Mladostí	mladost	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	15	obl:agent	_	_
12	údů	úd	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	11	nmod	_	_
13	vyssáta	vysátý	ADJ	VsQW---XX-AP---	Gender=Fem|Number=Sing|Polarity=Pos|Style=Rare|Variant=Short|VerbForm=Part|Voice=Pass	15	xcomp	_	_
14	být	být	AUX	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	13	cop	_	_
15	prahla	prahnout	VERB	VpQW---XR-AA--1	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	conj	_	SpaceAfter=No
16	,	,	PUNCT	Z:-------------	_	23	punct	_	_
17	Jež	jenž	PRON	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|PrepCase=Npr|PronType=Rel	23	nsubj	_	_
18	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	_	_
19	dusných	dusný	ADJ	AAFP6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	20	amod	_	_
20	orgiích	orgie	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	23	obl	_	_
21	klín	klín	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	23	obj	_	_
22	vonný	vonný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	21	amod	_	_
23	nabízela	nabízet	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	conj	_	_
24	A	a	CCONJ	J^-------------	_	31	cc	_	_
25	lidmi	člověk	NOUN	NNMP7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	26	obl:arg	_	_
26	zhnusena	zhnusený	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	31	xcomp	_	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	31	punct	_	_
28	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	30	case	_	_
29	samém	samý	DET	PLZS6----------	Case=Loc|Gender=Masc|Number=Sing|PronType=Emp	30	det	_	_
30	Bohu	bůh	NOUN	NNMS6-----A----	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	31	obl:arg	_	_
31	sáhla	sáhnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	conj	_	SpaceAfter=No
32	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


