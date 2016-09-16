

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

1833 nodes (0%) are attached to their parents as `parataxis`.

1206 instances of `parataxis` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.97817785051828.

The following 32 pairs of parts of speech are connected with `parataxis`: [cs-pos/VERB]()-[cs-pos/VERB]() (1101; 60% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (276; 15% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (117; 6% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (66; 4% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (59; 3% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (47; 3% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (46; 3% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (17; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (14; 1% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (13; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (12; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (6; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (5; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 parataxis	color:blue
1	Jak	jak	SCONJ	J,-------------	_	2	advmod	_	LId=jak-2
2	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	parataxis	_	_
3	vidět	vidět	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	2	ccomp	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	11	punct	_	_
5	McEnroe	McEnroe	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	11	nsubj	_	_
6	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	11	expl	_	LGloss=(zvr._zájmeno/částice)
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=z-1
8	anglické	anglický	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	9	amod	_	_
9	tradice	tradice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	11	iobj	_	_
10	nic	nic	PRON	PW--4----------	Case=Acc|Negative=Neg|PronType=Neg	11	dobj	_	_
11	nedělá	dělat	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
1	Kamióny	kamión	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	0	root	_	_
2	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	3	case	_	LId=z-1
3	silnice	silnice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	1	dep	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	dráhu	dráha	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	1	dep	_	_
6	VÝVOZNÍ	vývozní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	_
7	TALÓNY	talón	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	9	nsubj	_	_
8	SE	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl	_	LGloss=(zvr._zájmeno/částice)
9	ZAČÍNAJÍ	začínat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
10	PROJEVOVAT	projevovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	9	xcomp	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	HYPO	Hypo	ADJ	AAXXX----1A----	Degree=Pos|Foreign=Foreign|NameType=Com|Negative=Pos	0	root	_	SpaceAfter=No
2	-	-	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No
3	Stavební	stavební	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	dep	_	_
4	mění	měnit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
5	tarif	tarif	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	4	dobj	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

673 nodes (0%) are attached to their parents as `parataxis`.

467 instances of `parataxis` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.84843982169391.

The following 29 pairs of parts of speech are connected with `parataxis`: [cs-pos/VERB]()-[cs-pos/VERB]() (332; 49% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (150; 22% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (59; 9% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (19; 3% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (18; 3% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (13; 2% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (13; 2% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (11; 2% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (10; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (8; 1% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (7; 1% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (5; 1% instances), [cs-pos/AUX]()-[cs-pos/VERB]() (4; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (4; 1% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 parataxis	color:blue
1	Zápis	zápis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	11	nsubjpass	_	_
2	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=z-1
3	minulé	minulý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	_
4	ÚR	ÚR	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Negative=Pos	1	nmod	_	_
5	konané	konaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	LDeriv=konat
6	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	5	nmod	_	LGloss=(jednotka_času)
7	#	&cdate;	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod	_	_
8	byl	být	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	11	parataxis	_	_
9	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	_	LId=bez-1
10	připomínek	připomínka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	11	nmod	_	_
11	schválen	schválit	VERB	VsYS---XX-AP---	Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	advmod	_	_
2	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	nmod	_	_
3	přicházejí	přicházet	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	snímky	snímek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	parataxis	_	_
7	bych	být	AUX	Vc-S---1-------	Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	objevné	objevný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	4	amod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	Konečně	konečně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	4	advmod	_	LDeriv=konečný
2	nejen	nejen	PART	TT-------------	_	3	advmod:emph	_	_
3	chlebem	chléb	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	4	nmod	_	_
4	živ	živý	ADJ	ACYS------A----	Gender=Masc|Negative=Pos|Number=Sing|Variant=Short	0	root	_	_
5	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
6	člověk	člověk	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	9	punct	_	_
8	jak	jak	ADV	Db-------------	_	9	advmod	_	LId=jak-3
9	praví	pravit	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	_	_
10	stará	starý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	11	amod	_	LId=starý-2|LGloss=(člověk,_věc)
11	moudrost	moudrost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	9	nsubj	_	SpaceAfter=No|LDeriv=moudrý
12	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

64 nodes (0%) are attached to their parents as `parataxis`.

62 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 31.03125.

The following 6 pairs of parts of speech are connected with `parataxis`: [cs-pos/VERB]()-[cs-pos/VERB]() (31; 48% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (27; 42% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (2; 3% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (2; 3% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (1; 2% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 21 parataxis	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	5	punct	_	_
2	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=o-1
3	zásobách	zásoba	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Plur	5	dobj	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	auxpass:reflex	_	_
5	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	5	advmod	_	_
7	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	5	nmod	_	_
8	A	a	CONJ	J^-------------	_	7	nmod	_	LId=a-1
9	nebo	nebo	CONJ	J^-------------	_	5	cc	_	_
10	periodicky	periodicky	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	5	conj	_	_
11	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	5	conj	_	_
12	B.	B.	NOUN	NNNXX-----A----	Gender=Neut|Negative=Pos	11	nmod	_	_
13	U	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	14	case	_	LId=u-1
14	způsobu	způsob	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	21	nmod	_	_
15	A	a	CONJ	J^-------------	_	14	nmod	_	LId=a-1
16	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	21	auxpass:reflex	_	_
17	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	_	LId=v-1
18	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	17	mwe	_	_
19	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	20	amod	_	LId=účetní-1
20	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	21	nmod	_	_
21	účtuje	účtovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
22	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	23	case	_	LId=s-1
23	využitím	využití	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	21	nmod	_	_
24	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	23	nmod	_	_
25	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	_	LId=v-1
26	účtové	účtový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	27	amod	_	_
27	třídě	třída	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	24	nmod	_	_
28	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	27	nummod	_	_
29	Zásoby	zásoba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	27	nmod	_	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 parataxis	color:blue
1	(7)	(7)	PUNCT	Z:-------------	_	20	punct	_	_
2	Technické	technický	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	3	amod	_	_
3	zhodnocení	zhodnocení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	20	nsubjpass	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	11	punct	_	_
5	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	_	LId=k-1
6	jehož	jenž	DET	P1XXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Rel	7	det	_	_
7	účtování	účtování	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	11	nmod	_	_
8	a	a	CONJ	J^-------------	_	7	cc	_	LId=a-1
9	odpisování	odpisování	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	7	conj	_	_
10	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	oprávněna	oprávnit	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|VerbForm=Part|Voice=Pass	3	parataxis	_	_
12	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	14	amod	_	_
13	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	14	amod	_	LId=účetní-1
14	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	11	nsubj	_	_
15	než	než	SCONJ	J,-------------	_	16	mark	_	LId=než-2
16	vlastník	vlastník	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	12	advcl	_	_
17	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	16	nmod	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	11	punct	_	_
19	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	20	auxpass:reflex	_	_
20	odepíše	odepsat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
21	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	23	case	_	LId=v-1
22	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	21	mwe	_	_
23	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	20	nmod	_	_
24	technického	technický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	25	amod	_	_
25	zhodnocení	zhodnocení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	23	nmod	_	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 32 parataxis	color:blue
1	Podíl	podíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	16	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	4	punct	_	_
3	který	který	PRON	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	4	nsubj	_	_
4	představuje	představovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
5	účast	účast	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	4	dobj	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=v-1
7	ovládané	ovládaný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	8	amod	_	_
8	osobě	osoba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	5	nmod	_	_
9	nebo	nebo	CONJ	J^-------------	_	8	cc	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=v-1
11	osobě	osoba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	8	conj	_	_
12	pod	pod	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	_	LId=pod-1
13	podstatným	podstatný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	14	amod	_	_
14	vlivem	vliv	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	11	nmod	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	4	punct	_	_
16	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
17	být	být	AUX	Vf--------A----	Negative=Pos|VerbForm=Inf	18	auxpass	_	_
18	oceněn	ocenit	VERB	VsYS---XX-AP---	Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	16	ccomp	_	_
19	ekvivalencí	ekvivalence	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	18	nmod	_	_
20	(	(	PUNCT	Z:-------------	_	21	punct	_	SpaceAfter=No
21	protihodnotou	protihodnota	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	19	appos	_	SpaceAfter=No
22	)	)	PUNCT	Z:-------------	_	21	punct	_	SpaceAfter=No
23	;	;	PUNCT	Z:-------------	_	32	punct	_	_
24	použije-li	použije-li	X	X@-------------	_	32	advmod	_	_
25	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	26	amod	_	LId=účetní-1
26	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	24	nsubj	_	_
27	uvedený	uvedený	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	28	amod	_	_
28	způsob	způsob	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	24	dobj	_	_
29	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	28	nmod	_	SpaceAfter=No
30	,	,	PUNCT	Z:-------------	_	24	punct	_	_
31	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	32	cop	_	_
32	povinna	povinný	ADJ	ACQW------A----	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Variant=Short	16	parataxis	_	_
33	jej	on	PRON	PPZS4--3------2	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Style=Arch	34	dobj	_	LId=on-1
34	použít	použít	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	32	xcomp	_	_
35	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	36	case	_	LId=pro-1
36	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	34	nmod	_	_
37	všech	všechen	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	39	nmod	_	_
38	takových	takový	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	39	det	_	_
39	podílů	podíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	36	nmod	_	SpaceAfter=No
40	.	.	PUNCT	Z:-------------	_	16	punct	_	_

~~~


