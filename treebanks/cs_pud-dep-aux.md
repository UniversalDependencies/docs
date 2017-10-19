---
layout: base
title:  'Statistics of aux in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

153 nodes (1%) are attached to their parents as `aux`.

141 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18954248366013.

The following 7 pairs of parts of speech are connected with `aux`: [-pos/VERB]()-[-pos/AUX]() (137; 90% instances), [-pos/ADJ]()-[-pos/AUX]() (9; 6% instances), [-pos/ADV]()-[-pos/AUX]() (2; 1% instances), [-pos/NOUN]()-[-pos/AUX]() (2; 1% instances), [-pos/AUX]()-[-pos/AUX]() (1; 1% instances), [-pos/NUM]()-[-pos/AUX]() (1; 1% instances), [-pos/VERB]()-[-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	Bylo	být	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	nsubj	_	_
3	jako	jako	SCONJ	J,-------------	_	8	mark	_	LId=jako-1
4	když	když	SCONJ	J,-------------	_	8	mark	_	_
5	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	8	aux	_	_
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	7	case	_	LId=s-1
7	míčem	míč	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	_	_
8	hrál	hrát	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	advcl	_	_
9	skořápky	skořápka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 aux	color:blue
1	Velká	velký	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
2	nadmořská	nadmořský	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
3	výška	výška	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	_	_
4	ochlazuje	ochlazovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	vzduch	vzduch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	12	punct	_	_
7	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	12	nsubj	_	_
8	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	12	aux	_	_
9	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	12	cop	_	_
10	jinak	jinak	ADV	Db-------------	_	12	advmod	_	_
11	velice	velice	ADV	Db-------------	_	12	advmod	_	_
12	horký	horký	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	acl	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	jen	jen	PART	TT-------------	_	4	advmod:emph	_	LId=jen-1
4	kluk	kluk	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
5	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	7	case	_	LId=s-1
6	zablácenými	zablácený	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	7	amod	_	LDeriv=zablátit
7	botami	bota	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


