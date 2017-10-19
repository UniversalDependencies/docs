---
layout: base
title:  'Statistics of mark in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `mark`

This relation is universal.

27891 nodes (2%) are attached to their parents as `mark`.

27230 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.92395396364419.

The following 47 pairs of parts of speech are connected with `mark`: [-pos/VERB]()-[-pos/SCONJ]() (17126; 61% instances), [-pos/NOUN]()-[-pos/SCONJ]() (4628; 17% instances), [-pos/ADJ]()-[-pos/SCONJ]() (3435; 12% instances), [-pos/VERB]()-[-pos/PART]() (649; 2% instances), [-pos/PROPN]()-[-pos/SCONJ]() (323; 1% instances), [-pos/VERB]()-[-pos/CCONJ]() (309; 1% instances), [-pos/NUM]()-[-pos/SCONJ]() (299; 1% instances), [-pos/ADV]()-[-pos/SCONJ]() (261; 1% instances), [-pos/DET]()-[-pos/SCONJ]() (152; 1% instances), [-pos/ADJ]()-[-pos/PART]() (124; 0% instances), [-pos/VERB]()-[-pos/ADV]() (110; 0% instances), [-pos/ADJ]()-[-pos/CCONJ]() (96; 0% instances), [-pos/PRON]()-[-pos/SCONJ]() (95; 0% instances), [-pos/PART]()-[-pos/SCONJ]() (42; 0% instances), [-pos/CCONJ]()-[-pos/SCONJ]() (40; 0% instances), [-pos/VERB]()-[-pos/ADP]() (32; 0% instances), [-pos/NOUN]()-[-pos/ADV]() (26; 0% instances), [-pos/NOUN]()-[-pos/PART]() (26; 0% instances), [-pos/ADJ]()-[-pos/ADV]() (24; 0% instances), [-pos/NOUN]()-[-pos/CCONJ]() (23; 0% instances), [-pos/ADV]()-[-pos/CCONJ]() (16; 0% instances), [-pos/PART]()-[-pos/PART]() (5; 0% instances), [-pos/VERB]()-[-pos/DET]() (5; 0% instances), [-pos/ADV]()-[-pos/PART]() (4; 0% instances), [-pos/CCONJ]()-[-pos/DET]() (4; 0% instances), [-pos/DET]()-[-pos/ADV]() (3; 0% instances), [-pos/DET]()-[-pos/PART]() (3; 0% instances), [-pos/NUM]()-[-pos/ADV]() (3; 0% instances), [-pos/SYM]()-[-pos/PART]() (3; 0% instances), [-pos/DET]()-[-pos/CCONJ]() (2; 0% instances), [-pos/NUM]()-[-pos/PART]() (2; 0% instances), [-pos/PRON]()-[-pos/CCONJ]() (2; 0% instances), [-pos/PROPN]()-[-pos/CCONJ]() (2; 0% instances), [-pos/SYM]()-[-pos/SCONJ]() (2; 0% instances), [-pos/VERB]()-[-pos/NOUN]() (2; 0% instances), [-pos/VERB]()-[-pos/NUM]() (2; 0% instances), [-pos/ADV]()-[-pos/ADV]() (1; 0% instances), [-pos/ADV]()-[-pos/VERB]() (1; 0% instances), [-pos/NUM]()-[-pos/CCONJ]() (1; 0% instances), [-pos/PART]()-[-pos/CCONJ]() (1; 0% instances), [-pos/PRON]()-[-pos/ADV]() (1; 0% instances), [-pos/SCONJ]()-[-pos/ADJ]() (1; 0% instances), [-pos/SCONJ]()-[-pos/ADV]() (1; 0% instances), [-pos/SCONJ]()-[-pos/SCONJ]() (1; 0% instances), [-pos/SYM]()-[-pos/ADV]() (1; 0% instances), [-pos/VERB]()-[-pos/SYM]() (1; 0% instances), [-pos/VERB]()-[-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Zdůraznil	zdůraznit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	že	že	SCONJ	J,-------------	_	6	mark	_	_
4	banka	banka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
5	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	půjčovat	půjčovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	ccomp	_	_
7	ne	ne	PART	TT-------------	_	8	advmod:emph	_	_
8	firmě	firma	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	11	punct	_	_
10	ale	ale	CCONJ	J^-------------	_	11	cc	_	_
11	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	8	conj	_	_
12	osobně	osobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	SpaceAfter=No|LDeriv=osobní
13	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Rekreace	rekreace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_
2	spíš	spíše	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	1	dep	_	_
3	než	než	SCONJ	J,-------------	_	4	mark	_	LId=než-2
4	bydlení	bydlení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	1	advcl	_	LDeriv=bydlet

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 mark	color:blue
1	A	a	CCONJ	J^-------------	_	2	cc	_	LId=a-1
2	řekněme	říci	VERB	Vi-P---1--A----	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|Polarity=Pos|VerbForm=Fin	0	root	_	_
3	rovnou	rovnou	ADV	Db-------------	_	2	advmod	_	SpaceAfter=No|LGloss=(hned,_najednou)
4	,	,	PUNCT	Z:-------------	_	10	punct	_	_
5	že	že	SCONJ	J,-------------	_	10	mark	_	_
6	chalupa	chalupa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nsubj	_	_
7	našeho	můj	DET	PSZS2-P1-------	Case=Gen|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	8	det	_	LGloss=(přivlast.)
8	čtenáře	čtenář	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	6	nmod	_	_
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	problémová	problémový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


