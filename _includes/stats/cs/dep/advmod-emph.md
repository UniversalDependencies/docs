

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [advmod]().

20911 nodes (2%) are attached to their parents as `advmod:emph`.

20727 instances of `advmod:emph` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85686959016785.

The following 42 pairs of parts of speech are connected with `advmod:emph`: [cs-pos/NOUN]()-[cs-pos/ADV]() (5844; 28% instances), [cs-pos/NOUN]()-[cs-pos/CCONJ]() (3992; 19% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (2441; 12% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1056; 5% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (944; 5% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (878; 4% instances), [cs-pos/NUM]()-[cs-pos/PART]() (803; 4% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (684; 3% instances), [cs-pos/ADV]()-[cs-pos/PART]() (557; 3% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (494; 2% instances), [cs-pos/PROPN]()-[cs-pos/CCONJ]() (448; 2% instances), [cs-pos/ADV]()-[cs-pos/CCONJ]() (413; 2% instances), [cs-pos/DET]()-[cs-pos/ADV]() (309; 1% instances), [cs-pos/VERB]()-[cs-pos/PART]() (307; 1% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (252; 1% instances), [cs-pos/DET]()-[cs-pos/CCONJ]() (223; 1% instances), [cs-pos/VERB]()-[cs-pos/CCONJ]() (210; 1% instances), [cs-pos/ADJ]()-[cs-pos/CCONJ]() (208; 1% instances), [cs-pos/DET]()-[cs-pos/PART]() (172; 1% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (144; 1% instances), [cs-pos/PRON]()-[cs-pos/CCONJ]() (141; 1% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (141; 1% instances), [cs-pos/NUM]()-[cs-pos/CCONJ]() (69; 0% instances), [cs-pos/PRON]()-[cs-pos/PART]() (55; 0% instances), [cs-pos/CCONJ]()-[cs-pos/ADV]() (32; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (25; 0% instances), [cs-pos/CCONJ]()-[cs-pos/CCONJ]() (17; 0% instances), [cs-pos/CCONJ]()-[cs-pos/PART]() (15; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (9; 0% instances), [cs-pos/SYM]()-[cs-pos/PART]() (9; 0% instances), [cs-pos/PART]()-[cs-pos/CCONJ]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADP]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advmod:emph	color:blue
1	(	(	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Velmi	velmi	ADV	Db-------------	_	3	advmod	_	_
3	jemné	jemný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
4	pouze	pouze	ADV	Db-------------	_	6	advmod:emph	_	_
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=na-1
6	příjmu	příjem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	dep	_	SpaceAfter=No
7	)	)	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:emph	color:blue
1	Poplatek	poplatek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_
2	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
3	sobě	se	PRON	P6-X6----------	Case=Loc|PronType=Prs|Reflex=Yes	4	obl	_	LGloss=(zvr._zájmeno/částice)
4	zahrnuje	zahrnovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	i	i	CCONJ	J^-------------	_	6	advmod:emph	_	LId=i-1
6	obědy	oběd	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	4	obj	_	_
7	a	a	CCONJ	J^-------------	_	9	cc	_	LId=a-1
8	společenský	společenský	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	_	_
9	koktejl	koktejl	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:emph	color:blue
1	Zdůraznil	zdůraznit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	že	že	SCONJ	J,-------------	_	6	mark	_	_
4	banka	banka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
5	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	půjčovat	půjčovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	ccomp	_	_
7	ne	ne	PART	TT-------------	_	8	advmod:emph	_	_
8	firmě	firma	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	11	punct	_	_
10	ale	ale	CCONJ	J^-------------	_	11	cc	_	_
11	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	8	conj	_	_
12	osobně	osobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	SpaceAfter=No|LDeriv=osobní
13	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is a language-specific subtype of [advmod]().

7063 nodes (1%) are attached to their parents as `advmod:emph`.

7034 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83732125159281.

The following 42 pairs of parts of speech are connected with `advmod:emph`: [cs-pos/NOUN]()-[cs-pos/ADV]() (1960; 28% instances), [cs-pos/NOUN]()-[cs-pos/CCONJ]() (1513; 21% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (750; 11% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (331; 5% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (325; 5% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (276; 4% instances), [cs-pos/NUM]()-[cs-pos/PART]() (244; 3% instances), [cs-pos/ADV]()-[cs-pos/PART]() (180; 3% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (153; 2% instances), [cs-pos/DET]()-[cs-pos/ADV]() (151; 2% instances), [cs-pos/ADV]()-[cs-pos/CCONJ]() (148; 2% instances), [cs-pos/ADJ]()-[cs-pos/CCONJ]() (137; 2% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (113; 2% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (102; 1% instances), [cs-pos/DET]()-[cs-pos/CCONJ]() (92; 1% instances), [cs-pos/DET]()-[cs-pos/PART]() (78; 1% instances), [cs-pos/VERB]()-[cs-pos/CCONJ]() (74; 1% instances), [cs-pos/VERB]()-[cs-pos/PART]() (67; 1% instances), [cs-pos/PROPN]()-[cs-pos/CCONJ]() (59; 1% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (52; 1% instances), [cs-pos/PRON]()-[cs-pos/CCONJ]() (42; 1% instances), [cs-pos/SCONJ]()-[cs-pos/ADV]() (42; 1% instances), [cs-pos/NUM]()-[cs-pos/CCONJ]() (27; 0% instances), [cs-pos/PRON]()-[cs-pos/PART]() (25; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (25; 0% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (23; 0% instances), [cs-pos/SCONJ]()-[cs-pos/PART]() (16; 0% instances), [cs-pos/SYM]()-[cs-pos/PART]() (16; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (12; 0% instances), [cs-pos/SCONJ]()-[cs-pos/CCONJ]() (6; 0% instances), [cs-pos/SYM]()-[cs-pos/CCONJ]() (5; 0% instances), [cs-pos/CCONJ]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/ADP]() (3; 0% instances), [cs-pos/PART]()-[cs-pos/CCONJ]() (3; 0% instances), [cs-pos/CCONJ]()-[cs-pos/CCONJ]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:emph	color:blue
1	Zvýšení	zvýšení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	LDeriv=zvýšit
2	soběstačnosti	soběstačnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	LDeriv=soběstačný
3	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	4	case	_	LId=v-1
4	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	2	nmod	_	_
5	potravin	potravina	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	_	_
7	zvláště	zvláště	ADV	Db-------------	_	8	advmod:emph	_	_
8	obilovin	obilovina	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	5	appos	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:emph	color:blue
1	I	i	CCONJ	J^-------------	_	3	advmod:emph	_	LId=i-1
2	tyto	tento	DET	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	cysty	cysta	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
4	lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	odstranit	odstranit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	4	csubj	_	_
6	chirurgicky	chirurgicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	SpaceAfter=No|LDeriv=chirurgický
7	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:emph	color:blue
1	Nezůstalo	zůstat	VERB	VpNS---XR-NA---	Gender=Neut|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	však	však	CCONJ	J^-------------	_	1	cc	_	_
3	jen	jen	PART	TT-------------	_	6	advmod:emph	_	LId=jen-1|LGloss=(pouze)
4	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=při-1
5	dobrém	dobrý	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	úmyslu	úmysl	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	1	obl	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [advmod]().

224 nodes (1%) are attached to their parents as `advmod:emph`.

223 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27678571428571.

The following 14 pairs of parts of speech are connected with `advmod:emph`: [cs-pos/NOUN]()-[cs-pos/ADV]() (122; 54% instances), [cs-pos/NOUN]()-[cs-pos/CCONJ]() (35; 16% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (21; 9% instances), [cs-pos/X]()-[cs-pos/PART]() (16; 7% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (12; 5% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (4; 2% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (3; 1% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (3; 1% instances), [cs-pos/ADJ]()-[cs-pos/CCONJ]() (2; 1% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (2; 1% instances), [cs-pos/ADV]()-[cs-pos/CCONJ]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/AUX]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:emph	color:blue
1	Uvádějí	uvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	_
3	úhrnné	úhrnný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	4	amod	_	_
4	údaje	údaj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	7	punct	_	_
6	nikoliv	nikoli	PART	TT------------1	_	7	advmod:emph	_	_
7	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	4	conj	_	_
8	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=o-1
9	jednotlivých	jednotlivý	ADJ	AAMP6----1A----	Animacy=Anim|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	10	amod	_	_
10	pracovnících	pracovník	NOUN	NNMP6-----A----	Animacy=Anim|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


