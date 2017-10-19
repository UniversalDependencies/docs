

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

1848 nodes (5%) are attached to their parents as `obl`.

1320 instances of `obl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.61634199134199.

The following 17 pairs of parts of speech are connected with `obl`: [-pos/VERB]()-[-pos/NOUN]() (1079; 58% instances), [-pos/ADJ]()-[-pos/NOUN]() (465; 25% instances), [-pos/VERB]()-[-pos/X]() (71; 4% instances), [-pos/VERB]()-[-pos/PRON]() (58; 3% instances), [-pos/NOUN]()-[-pos/NOUN]() (51; 3% instances), [-pos/X]()-[-pos/NOUN]() (39; 2% instances), [-pos/ADV]()-[-pos/NOUN]() (31; 2% instances), [-pos/VERB]()-[-pos/NUM]() (23; 1% instances), [-pos/ADJ]()-[-pos/PRON]() (11; 1% instances), [-pos/ADJ]()-[-pos/X]() (10; 1% instances), [-pos/NOUN]()-[-pos/PRON]() (2; 0% instances), [-pos/VERB]()-[-pos/ADJ]() (2; 0% instances), [-pos/VERB]()-[-pos/VERB]() (2; 0% instances), [-pos/ADV]()-[-pos/PRON]() (1; 0% instances), [-pos/ADV]()-[-pos/X]() (1; 0% instances), [-pos/NUM]()-[-pos/NOUN]() (1; 0% instances), [-pos/SCONJ]()-[-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl	color:blue
1	Zřizovací	zřizovací	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	výdaje	výdaj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	4	nsubj:pass	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	_
4	odpisují	odpisovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	nejvýše	vysoko	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	4	advmod	_	LId=vysoko-1
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	_	_
8	pěti	pět	NUM	Cn-P2----------	Case=Gen|Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	LId=pět-1
9	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	ČÁST	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	obl	_	_
2	ČTVRTÁ	čtvrtý	ADJ	CrFS1----------	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	0	root	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 obl	color:blue
1	(6)	(6)	PUNCT	Z:-------------	_	8	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	8	nsubj	_	_
4	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=při-1
5	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obl	_	_
6	periodické	periodický	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	5	amod	_	_
7	a)	a)	X	X@-------------	_	8	obl	_	_
8	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	zahájit	zahájit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	xcomp	_	_
10	,	,	PUNCT	Z:-------------	_	15	punct	_	_
11	inventuru	inventura	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	9	obj	_	_
12	nejdříve	brzy	ADV	Dg-------3A----	Degree=Sup|Polarity=Pos	9	advmod	_	_
13	b)	b)	X	X@-------------	_	15	obl	_	_
14	čtyři	čtyři	NUM	ClXP4----------	Case=Acc|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	16	nummod	_	_
15	ukončí	ukončit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	_
16	měsíce	měsíc	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	12	obl	_	_
17	inventuru	inventura	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	15	obj	_	_
18	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	22	case	_	LId=před-1
19	nejpozději	pozdě	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	15	advmod	_	_
20	rozvahovým	rozvahový	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	22	amod	_	_
21	dva	dva	NUM	ClYP4----------	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	23	nummod	_	_
22	dnem	den	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	16	nmod	_	SpaceAfter=No
23	měsíce	měsíc	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	19	obl	_	_
24	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	26	case	_	LId=po-1
25	rozvahovém	rozvahový	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	26	amod	_	_
26	dni	den	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	23	nmod	_	SpaceAfter=No
27	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


