---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-nummod.html">nummod</a></tt>.

74 nodes (0%) are attached to their parents as `nummod:gov`.

74 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16216216216216.

The following 2 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (67; 91% instances), <tt><a href="cs_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (7; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Maximální	maximální	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	množství	množství	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	5	punct	5:punct	_
4	5000	5000	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod:gov	5:nummod:gov	_
5	dolarů	dolar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	2	appos	2:appos	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=na-1
7	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	5:nmod:na:acc	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod:gov	color:blue
1	Jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	3:det	LGloss=(přivlast.)
2	volebním	volební	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	obvodem	obvod	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
5	oblast	oblast	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj|14:obl	_
6	North	North	PROPN	NNXXX-----A----	NameType=Geo|Polarity=Pos	5	nmod	5:nmod	LId=North-2
7	Kesteven	Kesteven	PROPN	NNXXX-----A----	NameType=Geo|Polarity=Pos	6	flat	6:flat	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	14	punct	14:punct	_
9	kde	kde	ADV	Db-------------	PronType=Int,Rel	14	advmod	5:ref	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	expl:pv	14:expl:pv	LGloss=(zvr._zájmeno/částice)
11	62	62	NUM	C=-------------	NumForm=Digit|NumType=Card	12	nummod:gov	12:nummod:gov	_
12	%	%	SYM	Z:-------------	_	14	nsubj	14:nsubj	_
13	voličů	volič	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	12	nmod	12:nmod:gen	_
14	vyslovilo	vyslovit	VERB	VpNS---XR-AA---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	acl:relcl	5:acl:relcl	_
15	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	16:case	LId=pro-1
16	odchod	odchod	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	14	obl:arg	14:obl:arg:pro:acc	_
17	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	18	case	18:case	LId=z-1
18	EU	EU	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	16	nmod	16:nmod:z	SpaceAfter=No|LId=EU-1|LGloss=(Evropská_Unie)
19	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


