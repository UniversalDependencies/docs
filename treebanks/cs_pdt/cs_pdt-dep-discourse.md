---
layout: base
title:  'Statistics of discourse in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `discourse`

This relation is universal.

92 nodes (0%) are attached to their parents as `discourse`.

78 instances of `discourse` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.55434782608696.

The following 18 pairs of parts of speech are connected with `discourse`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (32; 35% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (14; 15% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (13; 14% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (10; 11% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (6; 7% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (4; 4% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Uvedeme	uvést	VERB	VB-P---1P-AAP--	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
2	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	1	discourse	1:discourse	Entity=(ln9420255c3--1-gstype:gen)|Functor=1:BEN|LGloss=(zvr._zájmeno/částice)
3	běžný	běžný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	4:amod	Functor=4:RSTR
4	příklad	příklad	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	obj	1:obj	SpaceAfter=No|Functor=1:PAT
5	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	To	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	discourse	4:discourse	Functor=4:INTF
2	byste	být	AUX	Vc----------Ie-	Aspect=Imp|Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	4	aux	4:aux	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	4:expl:pv	LGloss=(zvr._zájmeno/částice)
4	divil	divit	VERB	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
5	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Tak	tak	ADV	Db-------------	PronType=Dem	6	discourse	6:discourse	LId=tak-3|Functor=6:PREC
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	3:case	Entity=(ln9420754c36--2-gstype:spec|LId=na-1
3	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	obl:arg	6:obl:arg:na:acc	Entity=ln9420754c36)|Functor=6:PAT
4	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	6:expl:pv	LGloss=(zvr._zájmeno/částice)
5	ještě	ještě	ADV	Db-------------	_	6	advmod	6:advmod	LId=ještě-1|Functor=6:THL
6	počkáte	počkat	VERB	VB-P---2P-AAP--	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
7	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	Functor=10:CONJ
8	tam	tam	ADV	Db-------------	PronType=Dem	10	advmod	10:advmod	Entity=(ln9420754c36--1-gstype:spec)|Functor=10:LOC
9	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	10	obj	10:obj	Entity=(ln9420754c1--1-gstype:spec)|Functor=10:PAT
10	uvidíte	uvidět	VERB	VB-P---2P-AAP--	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	0:root|6:conj	Functor=6:PRED
11	tak	tak	ADV	Db-------------	PronType=Dem	13	advmod:emph	13:advmod:emph	LId=tak-3|Functor=13:EXT
12	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	13:case	LId=v-1
13	padesáti	padesát	NUM	Cl-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card	10	obl	10:obl:v:loc	SpaceAfter=No|LNumValue=50|Functor=10:TWHEN
14	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


