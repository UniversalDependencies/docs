---
layout: base
title:  'Statistics of discourse in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `discourse`

This relation is universal.

381 nodes (0%) are attached to their parents as `discourse`.

328 instances of `discourse` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13910761154856.

The following 25 pairs of parts of speech are connected with `discourse`: <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (151; 40% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (99; 26% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-ADV.html">ADV</a></tt> (28; 7% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (24; 6% instances), <tt><a href="cs-pos-PRON.html">PRON</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (18; 5% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (15; 4% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-CCONJ.html">CCONJ</a></tt> (11; 3% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="cs-pos-ADV.html">ADV</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Plivnout	plivnout	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	0	root	_	_
2	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	1	discourse	_	LGloss=(zvr._zájmeno/částice)
3	hodně	hodně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	_	_
4	vysoko	vysoko	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	1	advmod	_	LId=vysoko-1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	To	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	discourse	_	_
2	byste	být	AUX	Vc-P---2-------	Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	4	aux	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	_	LGloss=(zvr._zájmeno/částice)
4	divil	divit	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Tak	tak	ADV	Db-------------	PronType=Dem	6	discourse	_	LId=tak-3
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	LId=na-1
3	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obl:arg	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	_	LGloss=(zvr._zájmeno/částice)
5	ještě	ještě	ADV	Db-------------	_	6	advmod	_	_
6	počkáte	počkat	VERB	VB-P---2P-AA---	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	_	_
8	tam	tam	ADV	Db-------------	PronType=Dem	10	advmod	_	_
9	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	10	obj	_	_
10	uvidíte	uvidět	VERB	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
11	tak	tak	ADV	Db-------------	PronType=Dem	13	advmod:emph	_	LId=tak-3
12	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
13	padesáti	padesát	NUM	Cn-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card	10	obl	_	SpaceAfter=No|LNumValue=50
14	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


