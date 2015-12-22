

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:numgov]().

564 nodes (0%) are attached to their parents as `det:nummod`.

552 instances of `det:nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37056737588652.

The following 5 pairs of parts of speech are connected with `det:nummod`: [cs-pos/NOUN]()-[cs-pos/DET]() (542; 96% instances), [cs-pos/NUM]()-[cs-pos/DET]() (16; 3% instances), [cs-pos/PROPN]()-[cs-pos/DET]() (3; 1% instances), [cs-pos/DET]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	mnoha	mnoho	DET	Ca--6----------	Case=Loc|NumType=Card|PronType=Dem,Ind	3	det:nummod	_	LId=mnoho-1
3	směrech	směr	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Plur	4	nmod	_	_
4	dochází	docházet	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	6	case	_	LId=k-1
6	obratu	obrat	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	4	dobj	_	SpaceAfter=No|LId=obrat-1|LGloss=(z_prodeje_zboží)
7	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:nummod	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	dopravují	dopravovat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	vzdálenost	vzdálenost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	LDeriv=vzdálit
6	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Dem,Ind	7	det:nummod	_	_
7	tisíc	tisíc	NUM	ClXS2----------	Case=Gen|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod:gov	_	LId=tisíc-1|LNumValue=1000
8	kilometrů	kilometr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 det:nummod	color:blue
1	Nebude	být	VERB	VB-S---3F-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	advcl	_	SpaceAfter=No
2	-	-	PUNCT	Z:-------------	_	1	punct	_	_
3	li	li	PART	TT-------------	_	1	mark	_	_
4	vůle	vůle	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	1	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	_	_
6	nebudou	být	VERB	VB-P---3F-NA---	Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
7	peníze	peníze	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	6	nsubj	_	LGloss=(jako_platidlo)
8	a	a	CONJ	J^-------------	_	6	cc	_	LId=a-1
9	bude	být	VERB	VB-S---3F-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	15	cop	_	_
10	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	15	nsubj	_	_
11	všechno	všechen	PRON	PLNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	10	nmod	_	_
12	daleko	daleko	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	15	advmod	_	SpaceAfter=No|LId=daleko-1
13	,	,	PUNCT	Z:-------------	_	12	punct	_	_
14	daleko	daleko	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	12	conj	_	LId=daleko-1
15	těžší	těžký	ADJ	AANS1----2A----	Case=Nom|Degree=Cmp|Gender=Neut|Negative=Pos|Number=Sing	6	conj	_	_
16	a	a	CONJ	J^-------------	_	6	cc	_	LId=a-1
17	bude	být	VERB	VB-S---3F-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	conj	_	_
18	nebezpečí	nebezpečí	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	17	nsubj	_	_
19	mnoha	mnoho	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Dem,Ind	21	det:nummod	_	LId=mnoho-1
20	dalších	další	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	21	amod	_	_
21	Rwand	Rwanda	PROPN	NNFP2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Negative=Pos|Number=Plur	18	nmod	_	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


