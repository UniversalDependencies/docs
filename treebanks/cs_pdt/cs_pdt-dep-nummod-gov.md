---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-nummod.html">nummod</a></tt>.

7349 nodes (0%) are attached to their parents as `nummod:gov`.

7190 instances of `nummod:gov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31568920941625.

The following 3 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (7204; 98% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (105; 1% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (40; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Zásobník	zásobník	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	_
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	LId=na-1
3	100	100	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod:gov	4:nummod:gov	_
4	archů	arch	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	1:nmod:na	_
5	A	A	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Giv|Polarity=Pos	4	nmod	4:nmod	SpaceAfter=No|LId=A-0
6	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	5:nummod	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 nummod:gov	color:blue
1	Nyní	nyní	ADV	Db-------------	PronType=Dem	3	advmod	3:advmod	_
2	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	3	obj	3:obj	LId=on-1
3	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	case	5:case	LId=k-1
5	posouzení	posouzení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	3	obl	3:obl:k:dat	LDeriv=posoudit
6	třiatřicet	třiatřicet	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	2:nummod:gov	SpaceAfter=No|LNumValue=33
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Loni	vloni	ADV	Db------------1	Style=Coll	3	advmod	3:advmod	_
2	společnost	společnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	LDeriv=společný
3	přepravila	přepravit	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	3000	3000	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod:gov	5:nummod:gov	_
5	Čechů	Čech	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur|Polarity=Pos	3	obj	3:obj	SpaceAfter=No|LId=Čech-1
6	,	,	PUNCT	Z:-------------	_	8	punct	5.1:punct	_
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	LId=z-1
8	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	conj	5.1:dep	_
9	asi	asi	PART	TT-------------	_	10	advmod:emph	10:advmod:emph	_
10	600	600	NUM	C=-------------	NumForm=Digit|NumType=Card	11	nummod:gov	11:nummod:gov	_
11	turistů	turista	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	8	orphan	5.1:dep	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


