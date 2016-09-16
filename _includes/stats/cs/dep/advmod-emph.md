

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [advmod]().

23221 nodes (2%) are attached to their parents as `advmod:emph`.

23010 instances of `advmod:emph` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85349468153826.

The following 44 pairs of parts of speech are connected with `advmod:emph`: [cs-pos/NOUN]()-[cs-pos/ADV]() (6575; 28% instances), [cs-pos/NOUN]()-[cs-pos/CONJ]() (4491; 19% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (2614; 11% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1189; 5% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1059; 5% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1057; 5% instances), [cs-pos/NUM]()-[cs-pos/PART]() (879; 4% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (730; 3% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (574; 2% instances), [cs-pos/ADV]()-[cs-pos/PART]() (544; 2% instances), [cs-pos/PROPN]()-[cs-pos/CONJ]() (505; 2% instances), [cs-pos/ADV]()-[cs-pos/CONJ]() (456; 2% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (418; 2% instances), [cs-pos/PRON]()-[cs-pos/CONJ]() (384; 2% instances), [cs-pos/VERB]()-[cs-pos/PART]() (346; 1% instances), [cs-pos/VERB]()-[cs-pos/CONJ]() (260; 1% instances), [cs-pos/ADJ]()-[cs-pos/CONJ]() (207; 1% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (200; 1% instances), [cs-pos/PRON]()-[cs-pos/PART]() (181; 1% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (145; 1% instances), [cs-pos/DET]()-[cs-pos/ADV]() (99; 0% instances), [cs-pos/NUM]()-[cs-pos/CONJ]() (82; 0% instances), [cs-pos/DET]()-[cs-pos/PART]() (44; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADV]() (39; 0% instances), [cs-pos/DET]()-[cs-pos/CONJ]() (36; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (27; 0% instances), [cs-pos/CONJ]()-[cs-pos/CONJ]() (18; 0% instances), [cs-pos/CONJ]()-[cs-pos/PART]() (13; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (12; 0% instances), [cs-pos/SYM]()-[cs-pos/PART]() (11; 0% instances), [cs-pos/PART]()-[cs-pos/CONJ]() (6; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advmod:emph	color:blue
1	(	(	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Velmi	velmi	ADV	Db-------------	_	3	advmod	_	_
3	jemné	jemný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	0	root	_	_
4	pouze	pouze	ADV	Db-------------	_	6	advmod:emph	_	_
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=na-1
6	příjmu	příjem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	3	dep	_	SpaceAfter=No
7	)	)	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:emph	color:blue
1	Poplatek	poplatek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	4	nsubj	_	_
2	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
3	sobě	se	PRON	P6-X6----------	Case=Loc|PronType=Prs|Reflex=Yes	4	nmod	_	LGloss=(zvr._zájmeno/částice)
4	zahrnuje	zahrnovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	i	i	CONJ	J^-------------	_	6	advmod:emph	_	LId=i-1
6	obědy	oběd	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	4	dobj	_	_
7	a	a	CONJ	J^-------------	_	6	cc	_	LId=a-1
8	společenský	společenský	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	9	amod	_	_
9	koktejl	koktejl	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:emph	color:blue
1	Chalupa	chalupa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	2	nsubj	_	_
2	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
3	přinášet	přinášet	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	2	xcomp	_	_
4	nejen	nejen	PART	TT-------------	_	5	advmod:emph	_	_
5	starosti	starost	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	3	dobj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	5	punct	_	_
7	ale	ale	CONJ	J^-------------	_	5	cc	_	_
8	i	i	CONJ	J^-------------	_	9	advmod:emph	_	LId=i-1
9	peníze	peníze	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	5	conj	_	LGloss=(jako_platidlo)

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is a language-specific subtype of [advmod]().

7113 nodes (1%) are attached to their parents as `advmod:emph`.

7084 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83719949388444.

The following 43 pairs of parts of speech are connected with `advmod:emph`: [cs-pos/NOUN]()-[cs-pos/ADV]() (1986; 28% instances), [cs-pos/NOUN]()-[cs-pos/CONJ]() (1535; 22% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (749; 11% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (334; 5% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (318; 4% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (278; 4% instances), [cs-pos/NUM]()-[cs-pos/PART]() (244; 3% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (177; 2% instances), [cs-pos/ADV]()-[cs-pos/PART]() (160; 2% instances), [cs-pos/ADV]()-[cs-pos/CONJ]() (153; 2% instances), [cs-pos/ADJ]()-[cs-pos/CONJ]() (140; 2% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (137; 2% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (102; 1% instances), [cs-pos/PRON]()-[cs-pos/CONJ]() (100; 1% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (95; 1% instances), [cs-pos/VERB]()-[cs-pos/CONJ]() (78; 1% instances), [cs-pos/VERB]()-[cs-pos/PART]() (70; 1% instances), [cs-pos/DET]()-[cs-pos/ADV]() (69; 1% instances), [cs-pos/PROPN]()-[cs-pos/CONJ]() (61; 1% instances), [cs-pos/PRON]()-[cs-pos/PART]() (59; 1% instances), [cs-pos/SCONJ]()-[cs-pos/ADV]() (45; 1% instances), [cs-pos/DET]()-[cs-pos/CONJ]() (37; 1% instances), [cs-pos/DET]()-[cs-pos/PART]() (36; 1% instances), [cs-pos/NUM]()-[cs-pos/CONJ]() (27; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (25; 0% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (23; 0% instances), [cs-pos/SCONJ]()-[cs-pos/PART]() (16; 0% instances), [cs-pos/SYM]()-[cs-pos/PART]() (16; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (13; 0% instances), [cs-pos/SCONJ]()-[cs-pos/CONJ]() (6; 0% instances), [cs-pos/SYM]()-[cs-pos/CONJ]() (5; 0% instances), [cs-pos/NUM]()-[cs-pos/ADP]() (3; 0% instances), [cs-pos/PART]()-[cs-pos/CONJ]() (3; 0% instances), [cs-pos/CONJ]()-[cs-pos/CONJ]() (2; 0% instances), [cs-pos/CONJ]()-[cs-pos/PART]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:emph	color:blue
1	Zvýšení	zvýšení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	0	root	_	LDeriv=zvýšit
2	soběstačnosti	soběstačnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	1	nmod	_	LDeriv=soběstačný
3	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	4	case	_	LId=v-1
4	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	2	nmod	_	_
5	potravin	potravina	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	_	_
7	zvláště	zvláště	ADV	Db-------------	_	8	advmod:emph	_	_
8	obilovin	obilovina	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	5	appos	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:emph	color:blue
1	I	i	CONJ	J^-------------	_	3	advmod:emph	_	LId=i-1
2	tyto	tento	DET	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	cysty	cysta	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	5	dobj	_	_
4	lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	odstranit	odstranit	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	4	csubj	_	_
6	chirurgicky	chirurgicky	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	5	advmod	_	SpaceAfter=No|LDeriv=chirurgický
7	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:emph	color:blue
1	Nezůstalo	zůstat	VERB	VpNS---XR-NA---	Gender=Neut|Negative=Neg|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	však	však	CONJ	J^-------------	_	1	cc	_	_
3	jen	jen	PART	TT-------------	_	6	advmod:emph	_	LId=jen-1|LGloss=(pouze)
4	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=při-1
5	dobrém	dobrý	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	6	amod	_	_
6	úmyslu	úmysl	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	1	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [advmod]().

295 nodes (1%) are attached to their parents as `advmod:emph`.

294 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24067796610169.

The following 15 pairs of parts of speech are connected with `advmod:emph`: [cs-pos/NOUN]()-[cs-pos/ADV]() (146; 49% instances), [cs-pos/NOUN]()-[cs-pos/CONJ]() (58; 20% instances), [cs-pos/X]()-[cs-pos/PART]() (28; 9% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (25; 8% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (14; 5% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (5; 2% instances), [cs-pos/ADJ]()-[cs-pos/CONJ]() (4; 1% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (4; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (3; 1% instances), [cs-pos/ADV]()-[cs-pos/CONJ]() (2; 1% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (2; 1% instances), [cs-pos/ADV]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/AUX]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:emph	color:blue
1	Obsahuje	obsahovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	zejména	zejména	ADV	Db-------------	_	3	advmod:emph	_	_
3	závazky	závazek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	1	dobj	_	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=z-1
5	dlouhodobých	dlouhodobý	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	6	amod	_	_
6	půjček	půjčka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	3	nmod	_	_
7	a	a	CONJ	J^-------------	_	6	cc	_	LId=a-1
8	úvěrů	úvěr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advmod:emph	color:blue
1	Vykazují	vykazovat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	_
3	zde	zde	ADV	Db-------------	_	1	advmod	_	_
4	i	i	CONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
5	nakoupené	nakoupený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	_
6	opční	opční	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	_
7	listy	list	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 advmod:emph	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	5	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	5	nsubj	_	_
4	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Variant=Short	0	root	_	_
6	zachycovat	zachycovat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	5	xcomp	_	_
7	skutečnosti	skutečnost	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	6	dobj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	11	punct	_	_
9	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	11	nsubj	_	_
10	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	předmětem	předmět	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	7	acl	_	_
12	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	11	nmod	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	11	punct	_	_
14	(	(	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
15	dále	dále	ADV	Db------------1	_	11	dep	_	LId=dále-3
16	jen	jen	PART	TT-------------	_	17	advmod:emph	_	LId=jen-1
17	"účetní_případy"	"účetní_případy"	X	X@-------------	_	11	dep	_	SpaceAfter=No
18	)	)	PUNCT	Z:-------------	_	11	punct	_	_
19	účetními	účetní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	20	amod	_	LId=účetní-1
20	doklady	doklad	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Plur	6	nmod	_	SpaceAfter=No
21	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


