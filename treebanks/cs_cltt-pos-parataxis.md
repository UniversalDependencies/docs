

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

64 nodes (0%) are attached to their parents as `parataxis`.

62 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 32.015625.

The following 6 pairs of parts of speech are connected with `parataxis`: [-pos/VERB]()-[-pos/VERB]() (31; 48% instances), [-pos/NOUN]()-[-pos/VERB]() (27; 42% instances), [-pos/ADJ]()-[-pos/VERB]() (2; 3% instances), [-pos/VERB]()-[-pos/ADJ]() (2; 3% instances), [-pos/ADJ]()-[-pos/NOUN]() (1; 2% instances), [-pos/NOUN]()-[-pos/NOUN]() (1; 2% instances).


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
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 32 parataxis	color:blue
1	Podíl	podíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	16	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	4	punct	_	_
3	který	který	PRON	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	4	nsubj	_	_
4	představuje	představovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
5	účast	účast	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obj	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	LId=v-1
7	ovládané	ovládaný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	_	_
8	osobě	osoba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	_
9	nebo	nebo	CCONJ	J^-------------	_	11	cc	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=v-1
11	osobě	osoba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	conj	_	_
12	pod	pod	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	_	LId=pod-1
13	podstatným	podstatný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	14	amod	_	_
14	vlivem	vliv	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	11	nmod	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	4	punct	_	_
16	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
17	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	18	aux:pass	_	_
18	oceněn	ocenit	VERB	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	16	ccomp	_	_
19	ekvivalencí	ekvivalence	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	18	obl	_	_
20	(	(	PUNCT	Z:-------------	_	21	punct	_	SpaceAfter=No
21	protihodnotou	protihodnota	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	19	appos	_	SpaceAfter=No
22	)	)	PUNCT	Z:-------------	_	21	punct	_	SpaceAfter=No
23	;	;	PUNCT	Z:-------------	_	32	punct	_	_
24	použije-li	použije-li	X	X@-------------	_	32	advmod	_	_
25	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	26	amod	_	LId=účetní-1
26	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	24	nsubj	_	_
27	uvedený	uvedený	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	28	amod	_	_
28	způsob	způsob	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	24	obj	_	_
29	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	28	nmod	_	SpaceAfter=No
30	,	,	PUNCT	Z:-------------	_	24	punct	_	_
31	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	32	cop	_	_
32	povinna	povinný	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	16	parataxis	_	_
33	jej	on	PRON	PPZS4--3------2	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Style=Arch	34	obj	_	LId=on-1
34	použít	použít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	32	xcomp	_	_
35	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	36	case	_	LId=pro-1
36	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	34	obl	_	_
37	všech	všechen	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	39	nmod	_	_
38	takových	takový	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	39	det	_	_
39	podílů	podíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	36	nmod	_	SpaceAfter=No
40	.	.	PUNCT	Z:-------------	_	16	punct	_	_

~~~


