---
layout: base
title:  'Statistics of compound in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `compound`

This relation is universal.

2058 nodes (0%) are attached to their parents as `compound`.

1489 instances of `compound` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81098153547133.

The following 9 pairs of parts of speech are connected with `compound`: <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (1690; 82% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (201; 10% instances), <tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (146; 7% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="cs_pdtc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Ostrava	Ostrava	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	2	nsubj	2:nsubj	Entity=(cmpr9410049e60--1-gstype:spec)|Functor=2:ACT
2	počítá	počítat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	6:case	Entity=(cmpr9410049e490--4-gstype:gen|LId=s-1
4	90	90	NUM	C=-------------	NumForm=Digit|NumType=Card	5	compound	5:compound	Functor=5:RSTR
5	tisíci	tisíc	NUM	CzIP7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|NumType=Card	6	nummod:gov	6:nummod:gov	Functor=6:PAT|LNumValue=1000
6	měřidel	měřidlo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	2	obl:arg	2:obl:arg:s:ins	Bridge=cmpr9410049e276<cmpr9410049e489:other|Entity=(cmpr9410049e489--1)cmpr9410049e490)|Functor=2:MAT|SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Obětí	oběť	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	3	obl:arg	3:obl:arg:ins	Functor=3:PAT
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pv	3:expl:pv	LGloss=(zvr._zájmeno/částice)
3	stala	stát	VERB	VpQW----R-AAP--	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LId=stát-2|LGloss=(stanu_staneš)|Functor=0:PRED
4	24	24	NUM	C=-------------	NumForm=Digit|NumType=Card	5	compound	5:compound	Entity=(ln9421160e12--3-gstype:spec(ln9421160e14--3-gstype:spec|Functor=5:RSTR|SpaceAfter=No
5	letá	letý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	žena	žena	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	Entity=ln9421160e14)|Functor=3:ACT
7	a	a	CCONJ	J^-------------	_	9	cc	9:cc	Functor=9:CONJ|LId=a-1
8	dvouleté	dvouletý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	9:amod	Entity=(ln9421160e18--2-gstype:spec|Functor=9:RSTR
9	dítě	dítě	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	6	conj	3:nsubj|6:conj	Entity=ln9421160e18)ln9421160e12)|Functor=6:ACT|LId=dítě-1|SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Ubytovací	ubytovací	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	Entity=(cmpr9415015e33--2|Functor=2:RSTR|LDeriv=ubytovat
2	zařízení	zařízení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Vnoun	0	root	0:root	Entity=cmpr9415015e33)|Functor=0:ACT|LDeriv=zařídit|SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	2	punct	2:punct	Functor=2:PRED
4	5	5	NUM	C=-------------	NumForm=Digit|NumType=Card	5	compound	5:compound	Functor=5:THO
5	x	x	SYM	J*-------------	ConjType=Oper	6	advmod	6:advmod	LId=x-5|LGloss=(náhr._symbolu_krát,_mat._symbol)
6	různé	různý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	appos	2:appos	Functor=2:PAT

~~~


