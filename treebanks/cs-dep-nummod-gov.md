---
layout: base
title:  'Statistics of nummod:gov in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs-dep-nummod.html">nummod</a></tt>.

7348 nodes (0%) are attached to their parents as `nummod:gov`.

7189 instances of `nummod:gov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3157321720196.

The following 3 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-NUM.html">NUM</a></tt> (7203; 98% instances), <tt><a href="cs-pos-PRON.html">PRON</a></tt>-<tt><a href="cs-pos-NUM.html">NUM</a></tt> (105; 1% instances), <tt><a href="cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs-pos-NUM.html">NUM</a></tt> (40; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Zásobník	zásobník	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
3	100	100	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod:gov	_	_
4	archů	arch	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	_	_
5	A	A	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Giv|Polarity=Pos	4	nmod	_	SpaceAfter=No|LId=A-0
6	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 nummod:gov	color:blue
1	Nyní	nyní	ADV	Db-------------	PronType=Dem	3	advmod	_	_
2	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	3	obj	_	LId=on-1
3	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	case	_	LId=k-1
5	posouzení	posouzení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	3	obl	_	LDeriv=posoudit
6	třiatřicet	třiatřicet	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	_	SpaceAfter=No|LNumValue=33
7	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Loni	vloni	ADV	Db------------1	Style=Coll	3	advmod	_	_
2	společnost	společnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	LDeriv=společný
3	přepravila	přepravit	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	3000	3000	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod:gov	_	_
5	Čechů	Čech	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur|Polarity=Pos	3	obj	_	SpaceAfter=No|LId=Čech-1
6	,	,	PUNCT	Z:-------------	_	8	punct	_	_
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=z-1
8	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	conj	_	_
9	asi	asi	PART	TT-------------	_	10	advmod:emph	_	_
10	600	600	NUM	C=-------------	NumForm=Digit|NumType=Card	11	nummod:gov	_	_
11	turistů	turista	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	8	orphan	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


