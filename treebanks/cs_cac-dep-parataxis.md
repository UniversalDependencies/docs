---
layout: base
title:  'Statistics of parataxis in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `parataxis`

This relation is universal.

673 nodes (0%) are attached to their parents as `parataxis`.

467 instances of `parataxis` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.84843982169391.

The following 30 pairs of parts of speech are connected with `parataxis`: [-pos/VERB]()-[-pos/VERB]() (265; 39% instances), [-pos/NOUN]()-[-pos/VERB]() (130; 19% instances), [-pos/ADJ]()-[-pos/VERB]() (76; 11% instances), [-pos/VERB]()-[-pos/ADJ]() (48; 7% instances), [-pos/NOUN]()-[-pos/ADJ]() (33; 5% instances), [-pos/ADJ]()-[-pos/ADJ]() (31; 5% instances), [-pos/VERB]()-[-pos/NOUN]() (16; 2% instances), [-pos/ADV]()-[-pos/VERB]() (12; 2% instances), [-pos/VERB]()-[-pos/DET]() (8; 1% instances), [-pos/DET]()-[-pos/VERB]() (7; 1% instances), [-pos/NOUN]()-[-pos/NOUN]() (7; 1% instances), [-pos/PROPN]()-[-pos/VERB]() (5; 1% instances), [-pos/ADJ]()-[-pos/NOUN]() (4; 1% instances), [-pos/AUX]()-[-pos/ADJ]() (4; 1% instances), [-pos/NOUN]()-[-pos/DET]() (4; 1% instances), [-pos/NUM]()-[-pos/VERB]() (3; 0% instances), [-pos/PRON]()-[-pos/VERB]() (3; 0% instances), [-pos/VERB]()-[-pos/NUM]() (3; 0% instances), [-pos/ADV]()-[-pos/ADJ]() (2; 0% instances), [-pos/SYM]()-[-pos/VERB]() (2; 0% instances), [-pos/ADJ]()-[-pos/DET]() (1; 0% instances), [-pos/ADV]()-[-pos/DET]() (1; 0% instances), [-pos/ADV]()-[-pos/NOUN]() (1; 0% instances), [-pos/NOUN]()-[-pos/NUM]() (1; 0% instances), [-pos/NUM]()-[-pos/ADJ]() (1; 0% instances), [-pos/PART]()-[-pos/VERB]() (1; 0% instances), [-pos/PROPN]()-[-pos/NUM]() (1; 0% instances), [-pos/SCONJ]()-[-pos/VERB]() (1; 0% instances), [-pos/VERB]()-[-pos/ADV]() (1; 0% instances), [-pos/VERB]()-[-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 parataxis	color:blue
1	"	"	PUNCT	Z:-------------	_	2	punct	_	_
2	Počkejte	počkat	VERB	Vi-P---2--A----	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	6	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	2	punct	_	_
4	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
5	už	už	ADV	Db-------------	_	6	advmod	_	_
6	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	být	být	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	xcomp	_	_
8	dávno	dávno	ADV	Db-------------	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	_
2	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	obl	_	_
3	přicházejí	přicházet	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	snímky	snímek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	parataxis	_	_
7	bych	být	AUX	Vc-S---1-------	Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	objevné	objevný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	4	amod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 parataxis	color:blue
1	Zápis	zápis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	11	nsubj:pass	_	_
2	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=z-1
3	minulé	minulý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	ÚR	ÚR	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	1	nmod	_	_
5	konané	konaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	LDeriv=konat
6	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	LGloss=(jednotka_času)
7	#	&cdate;	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod	_	_
8	byl	být	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	parataxis	_	_
9	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=bez-1
10	připomínek	připomínka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	11	obl	_	_
11	schválen	schválený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


