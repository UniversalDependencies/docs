---
layout: base
title:  'Statistics of nummod in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_pud-dep-nummod-gov.html">nummod:gov</a></tt>.

319 nodes (2%) are attached to their parents as `nummod`.

170 instances of `nummod` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20062695924765.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (292; 92% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (19; 6% instances), <tt><a href="cs_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Mají	mít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	jednu	jeden	NUM	ClFS4----------	Case=Acc|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	3	nummod	3:nummod	LNumValue=1
3	příležitost	příležitost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	obj	1:obj	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	obj	5:obj	LGloss=(zvr._zájmeno/částice)
5	spasit	spasit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	acl	3:acl	SpaceAfter=No
6	:	:	PUNCT	Z:-------------	_	7	punct	7:punct	_
7	porazit	porazit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	appos	3:appos	_
8	Anglii	Anglie	PROPN	NNFS4-----A----	Case=Acc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Vstupenka	vstupenka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
2	F	F	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Giv|Polarity=Pos	1	nmod	1:nmod	SpaceAfter=No|LId=F-0
3	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	2:nummod	_
4	zaručuje	zaručovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	vstup	vstup	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=na-1
7	koncert	koncert	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod:na:acc	_
8	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=v-1
9	ten	ten	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	11	det	11:det	_
10	samý	samý	PRON	PLIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	11	det	11:det	_
11	den	den	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	5:nmod:v:acc	SpaceAfter=No|LGloss=(jednotka_času)
12	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Konzultované	konzultovaný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	2:amod	LDeriv=konzultovat
2	zdroje	zdroj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	_
3	uvedly	uvést	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
5	že	že	SCONJ	J,-------------	_	11	mark	11:mark	LId=že-1
6	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	11	nsubj	11:nsubj	_
7	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
8	„	"	PUNCT	Z:-------------	_	11	punct	11:punct	SpaceAfter=No
9	100	100	NUM	C=-------------	NumForm=Digit|NumType=Card	10	nummod	10:nummod	SpaceAfter=No
10	%	%	SYM	Z:-------------	_	11	nmod	11:nmod	_
11	Cospedal	Cospedal	NOUN	NNXXX-----A----	Polarity=Pos	3	ccomp	3:ccomp	SpaceAfter=No
12	“	"	PUNCT	Z:-------------	_	11	punct	11:punct	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


