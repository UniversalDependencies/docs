

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

157839 nodes (10%) are attached to their parents as `amod`.

147968 instances of `amod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27132077623401.

The following 18 pairs of parts of speech are connected with `amod`: [cs-pos/NOUN]()-[cs-pos/ADJ]() (150585; 95% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (5155; 3% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (768; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (602; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (268; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (262; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (62; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (38; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (24; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (21; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (15; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (14; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (13; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (6; 0% instances), [cs-pos/DET]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/INTJ]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Přenosová	přenosový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	rychlost	rychlost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No|LDeriv=rychlý
3	:	:	PUNCT	Z:-------------	_	10	punct	_	_
4	(	(	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
5	A	A	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Giv|Negative=Pos	10	nmod	_	SpaceAfter=No|LId=A-0
6	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	_	SpaceAfter=No
7	/	/	PUNCT	Z:-------------	_	8	punct	_	SpaceAfter=No
8	sec	s`sekunda	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Negative=Pos	5	nmod	_	SpaceAfter=No|LId=s`sekunda-2
9	)	)	PUNCT	Z:-------------	_	5	punct	_	_
10	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	2	appos	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 amod	color:blue
1	OECD	OECD	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	0	root	_	LId=OECD-1|LGloss=(Ev._org._hosp._spolupr._a_roz.)
2	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	3	case	_	LId=k-1
3	vývoji	vývoj	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	1	dep	_	_
4	HDP	HDP	NOUN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|Negative=Pos	3	nmod	_	LGloss=(hrubý_domácí_produkt)
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	9	case	_	LId=v-1
6	střední	střední	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	9	amod	_	_
7	a	a	CONJ	J^-------------	_	6	cc	_	LId=a-1
8	východní	východní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	6	conj	_	_
9	Evropě	Evropa	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	3	nmod	_	SpaceAfter=No
10	:	:	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	Že	že	SCONJ	J,-------------	_	6	mark	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	pod	pod	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=pod-1
4	tento	tento	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	plášť	plášť	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
6	schová	schovat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp	_	_
7	leccos	leccos	PRON	PZ--1----------	Case=Nom|PronType=Ind	6	nsubj	_	_
8	dalšího	další	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	6	punct	_	_
10	netřeba	netřeba	ADJ	ACNS------N----	Gender=Neut|Negative=Neg|Number=Sing|Variant=Short	0	root	_	LId=netřeba-1
11	připomínat	připomínat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	10	dep	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


