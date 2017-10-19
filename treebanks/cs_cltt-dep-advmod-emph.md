

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [advmod]().

296 nodes (1%) are attached to their parents as `advmod:emph`.

295 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23648648648649.

The following 16 pairs of parts of speech are connected with `advmod:emph`: [-pos/NOUN]()-[-pos/ADV]() (146; 49% instances), [-pos/NOUN]()-[-pos/CCONJ]() (58; 20% instances), [-pos/X]()-[-pos/PART]() (28; 9% instances), [-pos/NOUN]()-[-pos/PART]() (25; 8% instances), [-pos/NUM]()-[-pos/ADV]() (14; 5% instances), [-pos/VERB]()-[-pos/ADV]() (5; 2% instances), [-pos/ADJ]()-[-pos/CCONJ]() (4; 1% instances), [-pos/ADV]()-[-pos/ADV]() (4; 1% instances), [-pos/ADJ]()-[-pos/ADV]() (3; 1% instances), [-pos/ADV]()-[-pos/CCONJ]() (2; 1% instances), [-pos/NOUN]()-[-pos/SCONJ]() (2; 1% instances), [-pos/ADJ]()-[-pos/PART]() (1; 0% instances), [-pos/ADV]()-[-pos/PART]() (1; 0% instances), [-pos/AUX]()-[-pos/ADV]() (1; 0% instances), [-pos/PRON]()-[-pos/ADV]() (1; 0% instances), [-pos/SYM]()-[-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:emph	color:blue
1	Obsahuje	obsahovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	zejména	zejména	ADV	Db-------------	_	3	advmod:emph	_	_
3	závazky	závazek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	1	obj	_	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=z-1
5	dlouhodobých	dlouhodobý	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	6	amod	_	_
6	půjček	půjčka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	3	nmod	_	_
7	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
8	úvěrů	úvěr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advmod:emph	color:blue
1	Vykazují	vykazovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
3	zde	zde	ADV	Db-------------	_	1	advmod	_	_
4	i	i	CCONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
5	nakoupené	nakoupený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
6	opční	opční	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	listy	list	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 advmod:emph	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	5	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	_	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
6	zachycovat	zachycovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	_	_
7	skutečnosti	skutečnost	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	_	_
9	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	11	nsubj	_	_
10	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	předmětem	předmět	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	7	acl	_	_
12	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	11	nmod	_	SpaceAfter=No|ToDo=nmod
13	,	,	PUNCT	Z:-------------	_	11	punct	_	_
14	(	(	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
15	dále	dále	ADV	Db------------1	_	11	dep	_	LId=dále-3
16	jen	jen	PART	TT-------------	_	17	advmod:emph	_	LId=jen-1
17	"účetní	"účetní	X	X@-------------	_	11	dep	_	_
18	případy"	případy"	X	X@-------------	_	17	flat	_	SpaceAfter=No
19	)	)	PUNCT	Z:-------------	_	11	punct	_	_
20	účetními	účetní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	21	amod	_	LId=účetní-1
21	doklady	doklad	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	6	obl	_	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


