

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

3888 nodes (10%) are attached to their parents as `case`.

3853 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72350823045268.

The following 12 pairs of parts of speech are connected with `case`: [-pos/NOUN]()-[-pos/ADP]() (3395; 87% instances), [-pos/X]()-[-pos/ADP]() (235; 6% instances), [-pos/PRON]()-[-pos/ADP]() (200; 5% instances), [-pos/ADJ]()-[-pos/ADP]() (21; 1% instances), [-pos/NOUN]()-[-pos/ADV]() (10; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (9; 0% instances), [-pos/ADV]()-[-pos/ADP]() (8; 0% instances), [-pos/NOUN]()-[-pos/NOUN]() (5; 0% instances), [-pos/NUM]()-[-pos/ADP]() (2; 0% instances), [-pos/NOUN]()-[-pos/SCONJ]() (1; 0% instances), [-pos/NUM]()-[-pos/ADV]() (1; 0% instances), [-pos/SYM]()-[-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 case	color:blue
1	Pohledávky	pohledávka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	_
2	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=za-1
3	upsaný	upsaný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	_	_
4	základní	základní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	_	_
5	kapitál	kapitál	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	tomto	tento	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	det	_	_
3	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	_	_
4	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	5	amod	_	LId=účetní-1
5	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	nsubj	_	_
6	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=podle-2
8	§	§	X	X@-------------	_	6	advmod	_	_
9	54	54	X	X@-------------	_	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	3	punct	_	_
2	Účetním	účetní	ADJ	AANS7----1A----	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	3	amod	_	LId=účetní-1
3	obdobím	období	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	nepřetržitě	přetržitě	ADV	Dg-------1N----	Degree=Pos|Polarity=Neg	8	advmod	_	_
6	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	LId=po-1
7	sobě	se	PRON	P6-X6----------	Case=Loc|PronType=Prs|Reflex=Yes	8	obl	_	_
8	jdoucích	jdoucí	ADJ	AGIP6-----A----	Animacy=Inan|Aspect=Imp|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	10	amod	_	_
9	dvanáct	dvanáct	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	10	nummod:gov	_	_
10	měsíců	měsíc	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	14	punct	_	_
12	není-li	není-li	AUX	X@-------------	_	14	cop	_	_
13	dále	dále	ADV	Db------------1	_	14	advmod	_	LId=dále-3
14	stanoveno	stanovit	VERB	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	advmod	_	_
15	jinak	jinak	ADV	Db-------------	_	14	advmod	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


