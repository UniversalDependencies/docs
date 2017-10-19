

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

1552 nodes (4%) are attached to their parents as `obj`.

1200 instances of `obj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.53028350515464.

The following 14 pairs of parts of speech are connected with `obj`: [-pos/VERB]()-[-pos/NOUN]() (1115; 72% instances), [-pos/ADJ]()-[-pos/NOUN]() (237; 15% instances), [-pos/VERB]()-[-pos/PRON]() (110; 7% instances), [-pos/X]()-[-pos/NOUN]() (25; 2% instances), [-pos/NOUN]()-[-pos/NOUN]() (19; 1% instances), [-pos/ADJ]()-[-pos/PRON]() (12; 1% instances), [-pos/VERB]()-[-pos/ADJ]() (11; 1% instances), [-pos/VERB]()-[-pos/NUM]() (9; 1% instances), [-pos/VERB]()-[-pos/ADV]() (5; 0% instances), [-pos/X]()-[-pos/PRON]() (5; 0% instances), [-pos/ADJ]()-[-pos/X]() (1; 0% instances), [-pos/ADV]()-[-pos/NOUN]() (1; 0% instances), [-pos/NOUN]()-[-pos/ADJ]() (1; 0% instances), [-pos/VERB]()-[-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Vymezení	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
2	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	_	_
3	souvisejících	související	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	_
4	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	LId=s-1
5	pořízením	pořízení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	3	obj	_	_
6	cenných	cenný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	papírů	papír	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	_
8	a	a	CCONJ	J^-------------	_	9	cc	_	LId=a-1
9	podílů	podíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	7	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obj	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


