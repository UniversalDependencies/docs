

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

1607 nodes (0%) are attached to their parents as `parataxis`.

1043 instances of `parataxis` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.02862476664592.

The following 34 pairs of parts of speech are connected with `parataxis`: [cs-pos/VERB]()-[cs-pos/VERB]() (846; 53% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (237; 15% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (171; 11% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (81; 5% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (54; 3% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (49; 3% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (36; 2% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (18; 1% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (16; 1% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (15; 1% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (11; 1% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (10; 1% instances), [cs-pos/VERB]()-[cs-pos/DET]() (7; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (6; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (5; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (4; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (3; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/CCONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 parataxis	color:blue
1	Jak	jak	SCONJ	J,-------------	_	2	advmod	_	LId=jak-2
2	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	parataxis	_	_
3	vidět	vidět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	ccomp	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	11	punct	_	_
5	McEnroe	McEnroe	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	11	nsubj	_	_
6	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	11	expl:pv	_	LGloss=(zvr._zájmeno/částice)
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=z-1
8	anglické	anglický	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	_
9	tradice	tradice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	11	iobj	_	_
10	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	11	obj	_	_
11	nedělá	dělat	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
1	Kamióny	kamión	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	_
2	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	3	case	_	LId=z-1
3	silnice	silnice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	dep	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	dráhu	dráha	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	dep	_	_
6	VÝVOZNÍ	vývozní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	TALÓNY	talón	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	9	nsubj	_	_
8	SE	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	_	LGloss=(zvr._zájmeno/částice)
9	ZAČÍNAJÍ	začínat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
10	PROJEVOVAT	projevovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	9	xcomp	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	HYPO	Hypo	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Yes|NameType=Com|Polarity=Pos	0	root	_	SpaceAfter=No
2	-	-	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No
3	Stavební	stavební	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	dep	_	_
4	mění	měnit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
5	tarif	tarif	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

665 nodes (0%) are attached to their parents as `parataxis`.

463 instances of `parataxis` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.82706766917293.

The following 28 pairs of parts of speech are connected with `parataxis`: [cs-pos/VERB]()-[cs-pos/VERB]() (261; 39% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (130; 20% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (76; 11% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (48; 7% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (33; 5% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (31; 5% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (16; 2% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (12; 2% instances), [cs-pos/VERB]()-[cs-pos/DET]() (8; 1% instances), [cs-pos/DET]()-[cs-pos/VERB]() (7; 1% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (7; 1% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (4; 1% instances), [cs-pos/AUX]()-[cs-pos/ADJ]() (4; 1% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (4; 1% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (4; 1% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 parataxis	color:blue
1	"	"	PUNCT	Z:-------------	_	2	punct	_	_
2	Počkejte	počkat	VERB	Vi-P---2--A----	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	6	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	2	punct	_	_
4	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
5	už	už	ADV	Db-------------	_	6	advmod	_	_
6	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	být	být	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	xcomp	_	_
8	dávno	dávno	ADV	Db-------------	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	_
2	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	obl	_	_
3	přicházejí	přicházet	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	snímky	snímek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	parataxis	_	_
7	bych	být	AUX	Vc-S---1-------	Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	objevné	objevný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	4	amod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 parataxis	color:blue
1	Zápis	zápis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	11	nsubj:pass	_	_
2	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=z-1
3	minulé	minulý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
4	ÚR	ÚR	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	1	nmod	_	_
5	konané	konaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	LDeriv=konat
6	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	LGloss=(jednotka_času)
7	#	&cdate;	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod	_	_
8	byl	být	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	parataxis	_	_
9	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=bez-1
10	připomínek	připomínka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	11	obl	_	_
11	schválen	schválený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

43 nodes (0%) are attached to their parents as `parataxis`.

41 instances of `parataxis` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 37.2325581395349.

The following 4 pairs of parts of speech are connected with `parataxis`: [cs-pos/NOUN]()-[cs-pos/VERB]() (23; 53% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (17; 40% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (2; 5% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 parataxis	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	20	punct	_	_
2	Technické	technický	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	3	amod	_	_
3	zhodnocení	zhodnocení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	20	nsubj:pass	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	11	punct	_	_
5	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
6	jehož	jenž	DET	P1XXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Rel	7	det	_	_
7	účtování	účtování	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	11	obl	_	_
8	a	a	CCONJ	J^-------------	_	9	cc	_	LId=a-1
9	odpisování	odpisování	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	7	conj	_	_
10	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	oprávněna	oprávnit	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	parataxis	_	_
12	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	_
13	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	14	amod	_	LId=účetní-1
14	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	11	nsubj	_	_
15	než	než	SCONJ	J,-------------	_	16	mark	_	LId=než-2
16	vlastník	vlastník	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	12	advcl	_	_
17	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	16	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	11	punct	_	_
19	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	20	expl:pass	_	_
20	odepíše	odepsat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
21	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	23	case	_	LId=v-1
22	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	21	fixed	_	_
23	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	20	obl	_	_
24	technického	technický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	25	amod	_	_
25	zhodnocení	zhodnocení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	23	nmod	_	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 21 parataxis	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	5	punct	_	_
2	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=o-1
3	zásobách	zásoba	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	5	obj	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
5	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	_
7	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	_	_
8	A	a	CCONJ	J^-------------	_	7	nmod	_	LId=a-1
9	nebo	nebo	CCONJ	J^-------------	_	10	cc	_	_
10	periodicky	periodicky	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	conj	_	_
11	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	10	orphan	_	_
12	B.	B.	NOUN	NNNXX-----A----	Gender=Neut|Polarity=Pos	11	nmod	_	_
13	U	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	_	LId=u-1
14	způsobu	způsob	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	21	obl	_	_
15	A	a	CCONJ	J^-------------	_	14	nmod	_	LId=a-1
16	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	21	expl:pass	_	_
17	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	_	LId=v-1
18	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	17	fixed	_	_
19	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	20	amod	_	LId=účetní-1
20	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	_	_
21	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
22	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	23	case	_	LId=s-1
23	využitím	využití	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	21	obl	_	_
24	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	23	nmod	_	_
25	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	_	LId=v-1
26	účtové	účtový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	_
27	třídě	třída	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	24	nmod	_	_
28	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	_	_
29	Zásoby	zásoba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	27	nmod	_	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 19 parataxis	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	5	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	_	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
6	uvádět	uvádět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	_	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=v-1
8	účetní	účetní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	LId=účetní-1
9	závěrce	závěrka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
10	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	6	obj	_	_
11	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	LId=podle-2
12	stavu	stav	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	_	_
13	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	14	case	_	LId=k-1
14	konci	konec	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	12	nmod	_	_
15	rozvahového	rozvahový	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	16	amod	_	_
16	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	14	nmod	_	SpaceAfter=No
17	;	;	PUNCT	Z:-------------	_	19	punct	_	_
18	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	19	nsubj	_	_
19	platí	platit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
20	obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	19	advmod	_	_
21	i	i	CCONJ	J^-------------	_	25	advmod:emph	_	LId=i-1
22	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	25	case	_	LId=pro-1
23	všechny	všechen	PRON	PLYP4----------	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	25	nmod	_	_
24	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	25	amod	_	LId=účetní-1
25	záznamy	záznam	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	19	obl	_	SpaceAfter=No
26	,	,	PUNCT	Z:-------------	_	29	punct	_	_
27	které	který	PRON	P4IP1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	29	nsubj:pass	_	_
28	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	29	expl:pass	_	_
29	sestavují	sestavovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	25	acl	_	_
30	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	32	case	_	LId=k-1
31	rozvahovému	rozvahový	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	32	amod	_	_
32	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	29	obl	_	_
33	nebo	nebo	CCONJ	J^-------------	_	36	cc	_	_
34	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	36	case	_	LId=k-1
35	jinému	jiný	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	36	amod	_	_
36	okamžiku	okamžik	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	32	conj	_	SpaceAfter=No
37	,	,	PUNCT	Z:-------------	_	41	punct	_	_
38	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	39	case	_	LId=k-1
39	němuž	jenž	PRON	P9ZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PrepCase=Pre|PronType=Rel	41	obl	_	_
40	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	41	expl:pass	_	_
41	sestavuje	sestavovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	36	acl	_	_
42	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	43	amod	_	LId=účetní-1
43	závěrka	závěrka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	41	nsubj:pass	_	SpaceAfter=No
44	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


