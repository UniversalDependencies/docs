

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

2633 nodes (7%) are attached to their parents as `conj`.

2633 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.9308773262438.

The following 34 pairs of parts of speech are connected with `conj`: [-pos/NOUN]()-[-pos/NOUN]() (1810; 69% instances), [-pos/VERB]()-[-pos/VERB]() (247; 9% instances), [-pos/ADJ]()-[-pos/ADJ]() (206; 8% instances), [-pos/X]()-[-pos/X]() (123; 5% instances), [-pos/X]()-[-pos/NOUN]() (43; 2% instances), [-pos/NUM]()-[-pos/NUM]() (39; 1% instances), [-pos/VERB]()-[-pos/NOUN]() (22; 1% instances), [-pos/NOUN]()-[-pos/VERB]() (18; 1% instances), [-pos/ADJ]()-[-pos/VERB]() (17; 1% instances), [-pos/ADV]()-[-pos/ADV]() (16; 1% instances), [-pos/VERB]()-[-pos/ADJ]() (16; 1% instances), [-pos/NOUN]()-[-pos/ADV]() (13; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (10; 0% instances), [-pos/ADV]()-[-pos/NOUN]() (7; 0% instances), [-pos/X]()-[-pos/NUM]() (5; 0% instances), [-pos/ADJ]()-[-pos/NOUN]() (4; 0% instances), [-pos/NOUN]()-[-pos/X]() (4; 0% instances), [-pos/PRON]()-[-pos/PRON]() (4; 0% instances), [-pos/VERB]()-[-pos/X]() (4; 0% instances), [-pos/PRON]()-[-pos/NOUN]() (3; 0% instances), [-pos/X]()-[-pos/VERB]() (3; 0% instances), [-pos/NOUN]()-[-pos/PRON]() (2; 0% instances), [-pos/NUM]()-[-pos/ADV]() (2; 0% instances), [-pos/SYM]()-[-pos/PUNCT]() (2; 0% instances), [-pos/VERB]()-[-pos/ADV]() (2; 0% instances), [-pos/VERB]()-[-pos/PRON]() (2; 0% instances), [-pos/X]()-[-pos/ADV]() (2; 0% instances), [-pos/AUX]()-[-pos/NOUN]() (1; 0% instances), [-pos/AUX]()-[-pos/VERB]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADP]() (1; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (1; 0% instances), [-pos/NUM]()-[-pos/PRON]() (1; 0% instances), [-pos/X]()-[-pos/ADJ]() (1; 0% instances), [-pos/X]()-[-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
1	Dále	dále	ADV	Db------------1	_	2	advmod	_	LId=dále-3
2	obsahuje	obsahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	povolenky	povolenka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	2	obj	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	emise	emise	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	nmod	_	_
6	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
7	preferenční	preferenční	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	8	amod	_	_
8	limity	limit	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	5	conj	_	SpaceAfter=No|LId=limit-1
9	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 conj	color:blue
1	Ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
2	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	_	_
4	stanoví	stanovit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
7	budou	být	AUX	VB-P---3F-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	8	aux	_	_
8	účtovat	účtovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=o-1
10	odložené	odložený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	_	_
11	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obj	_	_
12	a	a	CCONJ	J^-------------	_	13	cc	_	LId=a-1
13	vykazovat	vykazovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	conj	_	_
14	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	SpaceAfter=No|LId=on-1
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	USTANOVENÍ	ustanovení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
2	SPOLEČNÁ	společný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	_	_
4	PŘECHODNÁ	přechodný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	conj	_	_
5	A	a	CCONJ	J^-------------	_	6	cc	_	LId=a-1
6	ZÁVĚREČNÁ	závěrečný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	conj	_	_

~~~


