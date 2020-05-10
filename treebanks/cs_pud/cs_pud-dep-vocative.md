---
layout: base
title:  'Statistics of vocative in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `vocative`

This relation is universal.

1 nodes (0%) are attached to their parents as `vocative`.

1 instances of `vocative` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 1 pairs of parts of speech are connected with `vocative`: <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 vocative	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
2	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	0:root|9:obj	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
5	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	9	obj	3:ref	LId=co-1
6	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	8	case	8:case	LId=v-1
7	své	svůj	DET	P8FS6---------1	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	8:det	LId=svůj-1|LGloss=(přivlast.)
8	zemi	země	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	9:obl:v:loc	_
9	potřebujem	potřebovat	VERB	VB-P---1P-AA--6	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl:relcl	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
11	přátelé	přítel	NOUN	NNMP5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Plur|Polarity=Pos	3	vocative	3:vocative	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


