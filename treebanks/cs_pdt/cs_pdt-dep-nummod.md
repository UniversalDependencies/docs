---
layout: base
title:  'Statistics of nummod in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="cs_pdt-dep-nummod-gov.html">nummod:gov</a></tt>.

4215 nodes (1%) are attached to their parents as `nummod`.

2406 instances of `nummod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53594306049822.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (3702; 88% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (179; 4% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (165; 4% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (73; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (43; 1% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (43; 1% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Ostravský	ostravský	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	Bridge=cmpr9410049c31<cmpr9410049c22:part|Entity=(cmpr9410049c21--2-gstype:gen(cmpr9410049c22--1-gstype:spec)|Functor=2:RSTR
2	podnik	podnik	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	Entity=cmpr9410049c21)|Functor=3:ACT
3	vyrábí	vyrábět	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	3	obj	3:obj	Entity=(cmpr9410049c2--1-gstype:gen)|Functor=3:PAT|LId=teplo-1
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=v-1
6	šesti	šest	NUM	Cl-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	7	nummod	7:nummod	LNumValue=6|Functor=7:RSTR
7	divizích	divize	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	3	obl	3:obl:v:loc	Functor=3:LOC
8	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	9:case	Entity=(cmpr9410049c31--2-gstype:spec|LId=na-1
9	severu	sever	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	7	nmod	7:nmod:na:loc	Functor=7:LOC
10	Moravy	Morava	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	9	nmod	9:nmod:gen	Bridge=cmpr9410049c9<cmpr9410049c32:part|Entity=(cmpr9410049c32--1)cmpr9410049c31)|Functor=9:APP|SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	(	(	PUNCT	Z:-------------	_	2	punct	2:punct	SpaceAfter=No
2	ka	ka	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Giv|Polarity=Pos	0	root	0:root	SpaceAfter=No|LId=ka-99|Functor=0:PAR
3	)	)	PUNCT	Z:-------------	_	2	punct	2:punct	_
4	(	(	PUNCT	Z:-------------	_	5	punct	5:punct	SpaceAfter=No
5	ČT	ČT	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth|Polarity=Pos	2	dep	2:dep	LGloss=(Česká_televize)|Functor=2:ACT
6	2	2	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Functor=5:RSTR
7	-	-	PUNCT	Z:-------------	_	8	punct	8:punct	Functor=8:PRED
8	21.30	21.30	NUM	C=-------------	NumForm=Digit|NumType=Card	5	conj	2:dep|5:conj	SpaceAfter=No|Functor=5:TWHEN
9	)	)	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Ostrava	Ostrava	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	2	nsubj	2:nsubj	Entity=(cmpr9410049c22--1-gstype:spec)|Functor=2:ACT
2	počítá	počítat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	5:case	Entity=(cmpr9410049c155--3-gstype:gen|LId=s-1
4	90	90	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Functor=5:RSTR
5	tisíci	tisíc	DET	CzIP7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|NumType=Ord|PronType=Int,Rel	2	obl:arg	2:obl:arg:s:ins	Functor=2:PAT|LNumValue=1000
6	měřidel	měřidlo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	5	nmod	5:nmod:gen	Bridge=cmpr9410049c96<cmpr9410049c154:other|Entity=(cmpr9410049c154--1)cmpr9410049c155)|Functor=5:MAT|SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


