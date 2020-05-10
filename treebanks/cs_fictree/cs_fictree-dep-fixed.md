---
layout: base
title:  'Statistics of fixed in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `fixed`

This relation is universal.

187 nodes (0%) are attached to their parents as `fixed`.

187 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0427807486631.

The following 15 pairs of parts of speech are connected with `fixed`: <tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt> (76; 41% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (17; 9% instances), <tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (16; 9% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (15; 8% instances), <tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (13; 7% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (12; 6% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (10; 5% instances), <tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (8; 4% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt> (5; 3% instances), <tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Ptám	ptát	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
4	i	i	CCONJ	J^-------------	_	6	mark	6:mark	_
5	když	když	SCONJ	J,-------------	_	4	fixed	4:fixed	_
6	vím	vědět	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	1:advcl:i_když	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
8	že	že	SCONJ	J,-------------	_	9	mark	9:mark	_
9	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	6:ccomp	_
10	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	12:case	_
11	tohohle	tenhle	DET	PDIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	12	det	12:det	_
12	domu	dům	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	13	nmod	13:nmod:od:gen	_
13	klíče	klíč	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	9	obj	9:obj	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Vlak	vlak	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj|5:nsubj	_
2	sebou	se	PRON	P6--7----------	Case=Ins|PronType=Prs|Reflex=Yes	3	obl	3:obl:ins	_
3	trhnul	trhnout	VERB	VpIS----R-AA---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	a	a	CCONJ	J^-------------	_	5	cc	5:cc	_
5	nesl	nést	VERB	VpIS----R-AA---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	0:root|3:conj	_
6	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	5	obj	5:obj	_
7	směrem	směr	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	9	case	9:case	_
8	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	fixed	7:fixed	_
9	ní	on	PRON	P5FS3--3-------	Case=Dat|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	5	obl	5:obl:směr_k:dat	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	_
2	souvislosti	souvislost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	1	fixed	1:fixed	_
3	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	1	fixed	1:fixed	_
4	ním	on	PRON	P5MS7--3-------	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	8	obl	8:obl:v_souvislost_s:ins	_
5	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	8:expl:pv	_
6	nic	nic	PRON	PW--1----------	Case=Nom|PronType=Neg	8	nsubj	8:nsubj	_
7	mimořádného	mimořádný	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	6	amod	6:amod	_
8	nestalo	stát	VERB	VpNS----R-NA---	Gender=Neut|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


