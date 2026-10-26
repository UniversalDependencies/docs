---
layout: base
title:  'Statistics of reparandum in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `reparandum`

This relation is universal.

3 nodes (0%) are attached to their parents as `reparandum`.

3 instances of `reparandum` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 2 pairs of parts of speech are connected with `reparandum`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (2; 67% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 reparandum	color:blue
1	Teďka	teďka	ADV	Db-------------	Style=Coll	4	advmod	4:advmod	Entity=(pdtsc_hs_050.10e99--1-gstype:spec)|Functor=4:TWHEN
2	už	už	ADV	Db-------------	_	4	advmod	4:advmod	LId=už-1|Functor=4:TWHEN
3	spíš	spíš	PART	TT-------------	_	4	advmod	4:advmod	Functor=4:EXT
4	jezdíme	jezdit	VERB	VB-P---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
5	každý	každý	DET	PLMS1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	4	nsubj	4:nsubj	Functor=4:COMPL
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	reparandum	4:reparandum	LId=na-1
7	svoje	svůj	DET	P8XP4----------	Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	9	det	9:det	Entity=(pdtsc_hs_050.10e76--1-gstype:spec)|Functor=9:RSTR|LId=svůj-1
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	6:case	LId=na-1
9	výlety	výlet	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	obl	6:obl:acc	Functor=6:INTT
10	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 reparandum	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Entity=(pdtsc_ak_146.00e36--1-gstype:spec)|Functor=3:ACT.cop
2	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Functor=3:PRED
3	město	město	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	Functor=0:PAT
4	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	reparandum	3:reparandum	LId=na-1
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	LId=na-1
6	severu	sever	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	nmod	4:nmod	Functor=4:LOC
7	Čech	Čechy	PROPN	NNFP2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Plur	6	nmod	6:nmod:gen	Functor=6:RSTR
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


