---
layout: base
title:  'Statistics of nummod in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_pdtc-dep-nummod-gov.html">nummod:gov</a></tt>.

7704 nodes (1%) are attached to their parents as `nummod`.

4409 instances of `nummod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57230010384216.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (7136; 93% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (203; 3% instances), <tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (201; 3% instances), <tt><a href="cs_pdtc-pos-X.html">X</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (114; 1% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (25; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Ostravský	ostravský	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	Bridge=cmpr9410049e92<cmpr9410049e60:part|Entity=(cmpr9410049e59--2-gstype:gen(cmpr9410049e60--1-gstype:spec)|Functor=2:RSTR
2	podnik	podnik	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	Entity=cmpr9410049e59)|Functor=3:ACT
3	vyrábí	vyrábět	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	3	obj	3:obj	Entity=(cmpr9410049e3--1-gstype:gen)|Functor=3:PAT|LId=teplo-1
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=v-1
6	šesti	šest	NUM	Cl-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card	7	nummod	7:nummod	LNumValue=6|Functor=7:RSTR
7	divizích	divize	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	3	obl	3:obl:v:loc	Functor=3:LOC
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	9:case	Entity=(cmpr9410049e92--2-gstype:spec|LId=na-1
9	severu	sever	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	7:nmod:na:loc	Functor=7:LOC
10	Moravy	Morava	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	9	nmod	9:nmod:gen	Bridge=cmpr9410049e23<cmpr9410049e93:part|Entity=(cmpr9410049e93--1)cmpr9410049e92)|Functor=9:APP|SpaceAfter=No
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
5	ČT	ČT	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth	2	parataxis	2:parataxis	LGloss=(Česká_televize)|Functor=2:ACT
6	2	2	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Functor=5:RSTR
7	-	-	PUNCT	Z:-------------	_	8	punct	8:punct	Functor=8:PRED
8	21.30	21.30	NUM	C=-------------	NumForm=Digit|NumType=Card	5	conj	2:parataxis|5:conj	SpaceAfter=No|Functor=5:TWHEN
9	)	)	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Míra	míra	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	LGloss=(měřítko,poměr)|Functor=3:ACT
2	inflace	inflace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	1	nmod	1:nmod:gen	Entity=(ln95049125e18--1-gstype:gen)|Functor=1:APP
3	klesla	klesnout	VERB	VpQW----R-AAP-1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
4	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	6	case	6:case	LId=z-1
5	70	70	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod	6:nummod	Functor=6:RSTR
6	%	%	SYM	Z:-------------	_	3	obl:arg	3:obl:arg:z:gen	Functor=3:ORIG
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	Entity=(ln95049125e35--2-gstype:spec|LId=v-1
8	roce	rok	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	nmod	6:nmod:v:loc	Functor=6:TWHEN
9	1991	1991	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	8:nummod	Entity=ln95049125e35)|Functor=8:RSTR
10	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=na-1
11	34	34	NUM	C=-------------	NumForm=Digit|NumType=Card	3	obl:arg	3:obl:arg:na:acc	Functor=3:RSTR
12	%	%	SYM	Z:-------------	_	11	nmod	11:nmod	Functor=11:PAT
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	14	case	14:case	Entity=(ln95049125e16--2-gstype:spec|LId=v-1
14	roce	rok	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	12	nmod	12:nmod:v:loc	Functor=12:TWHEN
15	1993	1993	NUM	C=-------------	NumForm=Digit|NumType=Card	14	nummod	14:nummod	Entity=ln95049125e16)|Functor=14:RSTR|SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


