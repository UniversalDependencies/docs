

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

195 nodes (1%) are attached to their parents as `nummod`.

126 instances of `nummod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.50769230769231.

The following 12 pairs of parts of speech are connected with `nummod`: [ga-pos/NOUN]()-[ga-pos/NUM]() (122; 63% instances), [ga-pos/NOUN]()-[ga-pos/X]() (27; 14% instances), [ga-pos/VERB]()-[ga-pos/X]() (17; 9% instances), [ga-pos/X]()-[ga-pos/NUM]() (9; 5% instances), [ga-pos/VERB]()-[ga-pos/NUM]() (5; 3% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (4; 2% instances), [ga-pos/ADP]()-[ga-pos/X]() (2; 1% instances), [ga-pos/NUM]()-[ga-pos/NUM]() (2; 1% instances), [ga-pos/NUM]()-[ga-pos/X]() (2; 1% instances), [ga-pos/PROPN]()-[ga-pos/NUM]() (2; 1% instances), [ga-pos/X]()-[ga-pos/X]() (2; 1% instances), [ga-pos/ADP]()-[ga-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Go	go	PART	Ad	PartType=Ad	2	mark:prt	_	_
2	tobann	tobann	ADJ	Adj	Degree=Pos	4	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	4	punct	_	_
4	bhris	bris	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	bord	bord	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
7	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	9	case	_	_
8	dhá	dó	NUM	Num	NumType=Card	9	nummod	_	_
9	leath	leath	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 nummod	color:blue
1	Déantar	déan	VERB	VTI	Mood=Ind|Tense=Pres|Voice=Auto	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	chompháirt	páirt	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	1	obj	_	_
4	a	a	PART	Inf	PartType=Inf	5	nsubj	_	_
5	rothlú	rothlú	NOUN	Noun	VerbForm=Inf	3	xcomp	_	_
6	tuathal	tuathal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	5	nsubj	_	_
7	thart	thart	ADV	Dir	_	5	advmod	_	_
8	ar	ar	ADV	Dir	_	5	advmod	_	_
9	ais	ais	ADV	Dir	_	8	fixed	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	rothlaithe	rothlaithe	NOUN	Noun	Case=Gen|VerbForm=Inf	1	obj	_	_
12	go	go	ADP	Cmpd	PrepForm=Cmpd	15	mark	_	_
13	dtí	dtí	ADP	Cmpd	_	12	fixed	_	_
14	go	go	PART	Vb	PartType=Cmpl	15	mark:prt	_	_
15	mbíonn	bí	VERB	PresImp	Form=Ecl	1	advcl	_	_
16	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	17	det	_	_
17	dromchla	dromchla	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	15	nsubj	_	_
18	A	a	X	Item	_	17	nummod	_	_
19	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	20	case	_	_
20	luí	luí	NOUN	Noun	VerbForm=Inf	15	xcomp:pred	_	_
21	ar	ar	ADP	Simp	_	23	case	_	_
22	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	23	det	_	_
23	bplána	plána	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	20	nmod	_	_
24	cothrománach	cothrománach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	23	amod	_	SpaceAfter=No
25	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	B	B	X	Item	_	3	nummod	_	SpaceAfter=No
2	:	:	PUNCT	Punct	_	3	punct	_	_
3	Deir	abair	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
4	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	_
5	chairde	cara	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	3	nsubj	_	_
6	liom	le	ADP	Prep	Number=Sing|Person=1	3	obl:prep	_	_
7	go	go	PART	Vb	PartType=Cmpl	8	mark:prt	_	_
8	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	3	ccomp	_	_
9	Mel	Mel	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	10	compound	_	_
10	Gibson	Gibson	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	nsubj	_	_
11	go	go	PART	Ad	PartType=Ad	12	mark:prt	_	_
12	hiontach	iontach	ADJ	Adj	Degree=Pos|Form=HPref	8	xcomp:pred	_	_
13	sa	i	ADP	Art	Number=Sing|PronType=Art	14	case	_	_
14	scannán	scannán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	obl	_	_
15	sin	sin	DET	Det	PronType=Dem	14	det	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


