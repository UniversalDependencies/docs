---
layout: base
title:  'Statistics of nummod in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_pdt-dep-nummod-gov.html">nummod:gov</a></tt>.

4024 nodes (1%) are attached to their parents as `nummod`.

2263 instances of `nummod` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.56212723658052.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (3670; 91% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (179; 4% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (73; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (43; 1% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (43; 1% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Ostravský	ostravský	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	Bridge=cmpr9410049c31<cmpr9410049c22:part|Entity=(cmpr9410049c21--2-gstype:gen(cmpr9410049c22--1-gstype:spec)|Functor=2:RSTR
2	podnik	podnik	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	Entity=cmpr9410049c21)|Functor=3:ACT
3	vyrábí	vyrábět	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	3	obj	3:obj	Entity=(cmpr9410049c2--1-gstype:gen)|Functor=3:PAT|LId=teplo-1
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=v-1
6	šesti	šest	NUM	Cl-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card	7	nummod	7:nummod	LNumValue=6|Functor=7:RSTR
7	divizích	divize	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	3	obl	3:obl:v:loc	Functor=3:LOC
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	9:case	Entity=(cmpr9410049c31--2-gstype:spec|LId=na-1
9	severu	sever	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	7:nmod:na:loc	Functor=7:LOC
10	Moravy	Morava	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	9	nmod	9:nmod:gen	Bridge=cmpr9410049c9<cmpr9410049c32:part|Entity=(cmpr9410049c32--1)cmpr9410049c31)|Functor=9:APP|SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	(	(	PUNCT	Z:-------------	_	2	punct	2:punct	SpaceAfter=No
2	ka	ka	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Giv	0	root	0:root	SpaceAfter=No|LId=ka-99|Functor=0:PAR
3	)	)	PUNCT	Z:-------------	_	2	punct	2:punct	_
4	(	(	PUNCT	Z:-------------	_	5	punct	5:punct	SpaceAfter=No
5	ČT	ČT	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth	2	dep	2:dep	LGloss=(Česká_televize)|Functor=2:ACT
6	2	2	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Functor=5:RSTR
7	-	-	PUNCT	Z:-------------	_	8	punct	8:punct	Functor=8:PRED
8	21.30	21.30	NUM	C=-------------	NumForm=Digit|NumType=Card	5	conj	2:dep|5:conj	SpaceAfter=No|Functor=5:TWHEN
9	)	)	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	The	The	X	F%-------------	Foreign=Yes	0	root	0:root	LId=The-77|Functor=0:FPHR
2	Black	Black	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=Black-77|Functor=1:FPHR
3	Box	Box	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=Box-77|Functor=1:FPHR
4	Summer	Summer	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=Summer-77|Functor=1:FPHR
5	Festival	Festival	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=Festival-77|Functor=1:FPHR
6	of	of	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=of-77|Functor=1:FPHR
7	Czech	Czech	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=Czech-77|Functor=1:FPHR
8	20	20	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	9:nummod	SpaceAfter=No|Functor=9:FPHR
9	th	th	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=th-77|Functor=1:FPHR
10	Century	Century	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	LId=Century-77|Functor=1:FPHR
11	Plays	Plays	X	F%-------------	Foreign=Yes	1	flat:foreign	1:flat:foreign	SpaceAfter=No|LId=Plays-77|Functor=1:FPHR
12	-	-	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


