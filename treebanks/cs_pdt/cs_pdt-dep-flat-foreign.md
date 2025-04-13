---
layout: base
title:  'Statistics of flat:foreign in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-flat.html">flat</a></tt>.

827 nodes (0%) are attached to their parents as `flat:foreign`.

827 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76783555018138.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-X.html">X</a></tt> (821; 99% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-X.html">X</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	Zajímavou	zajímavý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	Entity=(cmpr9415025c95--2-gstype:spec|Functor=2:RSTR
2	službu	služba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	Functor=5:PAT
3	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	Entity=(cmpr9415025c94--2|LId=pro-1
4	podnikatele	podnikatel	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	2	nmod	2:nmod:pro:acc	Entity=cmpr9415025c94)cmpr9415025c95)|Functor=2:BEN
5	nabízí	nabízet	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
6	firma	firma	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	Bridge=cmpr9415025c5<cmpr9415025c91:subset|Entity=(cmpr9415025c91--1|Functor=5:ACT
7	Incentive	Incentive	X	F%-------------	Foreign=Yes	6	nmod	6:nmod	LId=Incentive-77|Functor=6:FPHR
8	Travel	Travel	X	F%-------------	Foreign=Yes	7	flat:foreign	7:flat:foreign	Entity=cmpr9415025c91)|Functor=7:FPHR|LId=Travel-77|SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat:foreign	color:blue
1	Vždyť	vždyť	CCONJ	J^-------------	_	5	cc	5:cc	LId=vždyť-1
2	texty	text	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj	_
3	jsou	být	AUX	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	dynamické	dynamický	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	5	amod	5:amod	_
5	děje	děj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	_
6	par	par	X	F%-------------	Foreign=Yes	7	case	7:case	LId=par-77
7	excellence	excellence	X	F%-------------	Foreign=Yes	5	flat:foreign	5:flat:foreign	SpaceAfter=No|LId=excellence-77
8	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


