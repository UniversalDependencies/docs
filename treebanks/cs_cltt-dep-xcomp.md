

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

281 nodes (1%) are attached to their parents as `xcomp`.

275 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.69750889679715.

The following 15 pairs of parts of speech are connected with `xcomp`: [-pos/VERB]()-[-pos/VERB]() (123; 44% instances), [-pos/ADJ]()-[-pos/VERB]() (76; 27% instances), [-pos/NOUN]()-[-pos/NOUN]() (31; 11% instances), [-pos/NOUN]()-[-pos/ADJ]() (13; 5% instances), [-pos/VERB]()-[-pos/NOUN]() (8; 3% instances), [-pos/PRON]()-[-pos/NOUN]() (7; 2% instances), [-pos/VERB]()-[-pos/ADJ]() (7; 2% instances), [-pos/NOUN]()-[-pos/VERB]() (4; 1% instances), [-pos/VERB]()-[-pos/PRON]() (3; 1% instances), [-pos/X]()-[-pos/VERB]() (3; 1% instances), [-pos/ADJ]()-[-pos/NOUN]() (2; 1% instances), [-pos/ADV]()-[-pos/PART]() (1; 0% instances), [-pos/NOUN]()-[-pos/PRON]() (1; 0% instances), [-pos/PART]()-[-pos/ADJ]() (1; 0% instances), [-pos/PRON]()-[-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	3	punct	_	_
2	Ministerstvo	ministerstvo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	3	nsubj	_	_
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	vydat	vydat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	_	_
5	vyhlášku	vyhláška	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obj	_	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
7	provedení	provedení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	_	_
8	§	§	X	X@-------------	_	7	nmod	_	_
9	36	36	X	X@-------------	_	8	flat	_	_
10	odst.	odst.	X	X@-------------	_	8	flat	_	_
11	1	1	X	X@-------------	_	8	flat	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	(13)	(13)	PUNCT	Z:-------------	_	5	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	_	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
6	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	_	LId=vést-1
7	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obj	_	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=v-1
9	českém	český	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	_	_
10	jazyce	jazyk	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	(9)	(9)	PUNCT	Z:-------------	_	5	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	_	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
6	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	_	LId=vést-1
7	jedno	jeden	NUM	ClNS4----------	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod	_	_
8	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obj	_	_
9	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=za-1
10	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	_	LId=účetní-1
11	jednotku	jednotka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
12	jako	jako	SCONJ	J,-------------	_	13	mark	_	_
13	celek	celek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


