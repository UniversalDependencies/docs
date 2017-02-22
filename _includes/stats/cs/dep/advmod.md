

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

53300 nodes (4%) are attached to their parents as `advmod`.

40960 instances of `advmod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04099437148218.

The following 51 pairs of parts of speech are connected with `advmod`: [cs-pos/VERB]()-[cs-pos/ADV]() (34958; 66% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (12157; 23% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1898; 4% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1782; 3% instances), [cs-pos/VERB]()-[cs-pos/PART]() (671; 1% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (443; 1% instances), [cs-pos/VERB]()-[cs-pos/CCONJ]() (301; 1% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (265; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (217; 0% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (87; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (73; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (67; 0% instances), [cs-pos/ADJ]()-[cs-pos/CCONJ]() (62; 0% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (51; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (43; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (41; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (31; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (18; 0% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (15; 0% instances), [cs-pos/NOUN]()-[cs-pos/CCONJ]() (14; 0% instances), [cs-pos/VERB]()-[cs-pos/INTJ]() (11; 0% instances), [cs-pos/NUM]()-[cs-pos/PART]() (10; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (9; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (8; 0% instances), [cs-pos/ADV]()-[cs-pos/CCONJ]() (7; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (7; 0% instances), [cs-pos/ADV]()-[cs-pos/PART]() (6; 0% instances), [cs-pos/PRON]()-[cs-pos/PART]() (5; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADP]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/SCONJ]() (3; 0% instances), [cs-pos/DET]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/INTJ]()-[cs-pos/ADV]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/CCONJ]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/DET]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/CCONJ]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (2; 0% instances), [cs-pos/PUNCT]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/AUX]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/CCONJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod	color:blue
1	Hovoří	hovořit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=o-1
3	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod	_	SpaceAfter=No
4	-	-	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
5	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	3	conj	_	_
6	tisících	tisíc	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	1	obj	_	LId=tisíc-2|LNumValue=1000
7	měsíčně	měsíčně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	SpaceAfter=No|LGloss=(arch.;_př._měsíčná_noc)|LDeriv=měsíčný
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

20886 nodes (4%) are attached to their parents as `advmod`.

15606 instances of `advmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.99851575217849.

The following 50 pairs of parts of speech are connected with `advmod`: [cs-pos/VERB]()-[cs-pos/ADV]() (12071; 58% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (5800; 28% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (872; 4% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (708; 3% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (312; 1% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (224; 1% instances), [cs-pos/VERB]()-[cs-pos/PART]() (210; 1% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (162; 1% instances), [cs-pos/DET]()-[cs-pos/ADV]() (116; 1% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (67; 0% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (55; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (41; 0% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (40; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (26; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (23; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (19; 0% instances), [cs-pos/VERB]()-[cs-pos/CCONJ]() (17; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (11; 0% instances), [cs-pos/VERB]()-[cs-pos/DET]() (11; 0% instances), [cs-pos/DET]()-[cs-pos/PART]() (9; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (9; 0% instances), [cs-pos/ADV]()-[cs-pos/SCONJ]() (8; 0% instances), [cs-pos/ADV]()-[cs-pos/PART]() (7; 0% instances), [cs-pos/DET]()-[cs-pos/SCONJ]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (7; 0% instances), [cs-pos/AUX]()-[cs-pos/ADV]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/ADJ]()-[cs-pos/CCONJ]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/CCONJ]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/SYM]()-[cs-pos/SYM]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/AUX]()-[cs-pos/SCONJ]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADP]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/AUX]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/INTJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Úkol	úkol	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj:pass	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	úspěšně	úspěšně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	_	LDeriv=úspěšný
4	řeší	řešit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod	color:blue
1	Rekultivační	rekultivační	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	_
2	výzkum	výzkum	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
5	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
6	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux:pass	_	_
7	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	LDeriv=průběžný
8	zajišťován	zajišťovaný	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Konference	konference	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	nsubj:pass	_	_
2	hodnocena	hodnocený	ADJ	VsQW---XX-AP---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	velmi	velmi	ADV	Db-------------	_	4	advmod	_	_
4	kladně	kladně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	2	advmod	_	SpaceAfter=No|LDeriv=kladný
5	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

493 nodes (2%) are attached to their parents as `advmod`.

277 instances of `advmod` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.33468559837728.

The following 21 pairs of parts of speech are connected with `advmod`: [cs-pos/VERB]()-[cs-pos/ADV]() (220; 45% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (71; 14% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (63; 13% instances), [cs-pos/VERB]()-[cs-pos/X]() (46; 9% instances), [cs-pos/ADJ]()-[cs-pos/X]() (37; 8% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (20; 4% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (11; 2% instances), [cs-pos/NOUN]()-[cs-pos/X]() (4; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (3; 1% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (3; 1% instances), [cs-pos/X]()-[cs-pos/ADV]() (3; 1% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/X]()-[cs-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod	color:blue
1	Výrobou	výroba	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	_	_
3	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	i	i	CCONJ	J^-------------	_	6	advmod:emph	_	LId=i-1
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
6	činnost	činnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj:pass	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	_	_
8	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=při-1
9	které	který	PRON	P4FS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Int,Rel	10	advmod	_	_
10	nevznikají	vznikat	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl	_	_
11	hmotné	hmotný	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	12	amod	_	_
12	produkty	produkt	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	10	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 advmod	color:blue
1	Podpisový	podpisový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	_
2	záznam	záznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	_	_
3	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=podle-2
4	písmene	písmeno	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	2	nmod	_	_
5	f)	f)	X	X@-------------	_	4	nmod	_	_
6	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	cop	_	_
8	společný	společný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	xcomp	_	_
9	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=pro-1
10	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	8	advmod	_	_
11	účetních	účetní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	12	amod	_	LId=účetní-1
12	dokladů	doklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


