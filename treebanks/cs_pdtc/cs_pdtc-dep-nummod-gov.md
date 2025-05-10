---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs_pdtc-dep-nummod.html">nummod</a></tt>.

5793 nodes (1%) are attached to their parents as `nummod:gov`.

5744 instances of `nummod:gov` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4006559640946.

The following 3 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (5732; 99% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (41; 1% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (20; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod:gov	color:blue
1	Ostrava	Ostrava	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	2	nsubj	2:nsubj	Entity=(cmpr9410049e60--1-gstype:spec)|Functor=2:ACT
2	počítá	počítat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	6:case	Entity=(cmpr9410049e490--4-gstype:gen|LId=s-1
4	90	90	NUM	C=-------------	NumForm=Digit|NumType=Card	5	compound	5:compound	Functor=5:RSTR
5	tisíci	tisíc	NUM	CzIP7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|NumType=Card	6	nummod:gov	6:nummod:gov	Functor=6:PAT|LNumValue=1000
6	měřidel	měřidlo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	2	obl:arg	2:obl:arg:s:ins	Bridge=cmpr9410049e276<cmpr9410049e489:other|Entity=(cmpr9410049e489--1)cmpr9410049e490)|Functor=2:MAT|SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 nummod:gov	color:blue
1	Nyní	nyní	ADV	Db-------------	PronType=Dem	3	advmod	3:advmod	Functor=3:TWHEN
2	jich	on	PRON	PEXP2--3------1	Case=Gen|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	3	obj	3:obj	Bridge=ln94207126e18<ln94207126e19:subset|Entity=(ln94207126e19--1)|Functor=3:PAT|LId=on-1
3	má	mít	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	case	5:case	LId=k-1
5	posouzení	posouzení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|VerbForm=Vnoun	3	obl	3:obl:k:dat	LDeriv=posoudit|Functor=3:AIM
6	třiatřicet	třiatřicet	NUM	Cl-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	2:nummod:gov	SpaceAfter=No|LNumValue=33|Functor=2:COMPL
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 nummod:gov	color:blue
1	Nezapomeňte	zapomenout	VERB	Vi-P---2--N-P--	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Neg|VerbForm=Fin	0	root	0:root	SpaceAfter=No|Functor=0:PRED
2	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
3	že	že	SCONJ	J,-------------	_	5	mark	5:mark	LId=že-1
4	zde	zde	ADV	Db-------------	PronType=Dem	5	advmod	5:advmod	Entity=(ln9420959e211--1-gstype:spec)|Functor=5:LOC
5	zůstal	zůstat	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	ccomp	1:ccomp	Functor=1:PAT
6	majetek	majetek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	Functor=5:ACT
7	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	12:case	LId=po-1
8	třech	tři	NUM	Cl-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card	12	nummod:gov	12:nummod:gov	LNumValue=3|Functor=12:RSTR
9	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1|Functor=10:CONJ
10	půl	půl	NUM	Cl-XX----------	NumForm=Word|NumType=Card	8	conj	8:conj|12:nummod:gov	LId=půl-1|Functor=8:RSTR
11	milionu	milion	NUM	CzIS6----------	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|NumType=Card	12	nummod:gov	12:nummod:gov	LNumValue=1000000|LGloss=(^DD**milión)|Functor=12:HER
12	Němců	Němec	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv,Nat|Number=Plur	6	nmod	6:nmod:po:loc	Entity=(ln9420959e111--1-gstype:gen)|Functor=6:MAT|SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


