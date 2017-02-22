

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

12930 nodes (1%) are attached to their parents as `aux`.

11425 instances of `aux` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3677494199536.

The following 11 pairs of parts of speech are connected with `aux`: [cs-pos/VERB]()-[cs-pos/AUX]() (11865; 92% instances), [cs-pos/ADJ]()-[cs-pos/AUX]() (807; 6% instances), [cs-pos/NOUN]()-[cs-pos/AUX]() (172; 1% instances), [cs-pos/CCONJ]()-[cs-pos/AUX]() (32; 0% instances), [cs-pos/ADV]()-[cs-pos/AUX]() (16; 0% instances), [cs-pos/DET]()-[cs-pos/AUX]() (10; 0% instances), [cs-pos/NUM]()-[cs-pos/AUX]() (9; 0% instances), [cs-pos/PRON]()-[cs-pos/AUX]() (8; 0% instances), [cs-pos/PART]()-[cs-pos/AUX]() (6; 0% instances), [cs-pos/PROPN]()-[cs-pos/AUX]() (3; 0% instances), [cs-pos/SCONJ]()-[cs-pos/AUX]() (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Chci	chtít	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	uzavřít	uzavřít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
3	pojištění	pojištění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	obj	_	LDeriv=pojistit
4	a	a	CCONJ	J^-------------	_	5	cc	_	LId=a-1
5	dostal	dostat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	_	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
7	proto	proto	CCONJ	J^-------------	_	5	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
8	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	9	case	_	LId=k-1
9	vyplnění	vyplnění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	_	LDeriv=vyplnit
10	dotazník	dotazník	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Jen	jen	PART	TT-------------	_	2	advmod:emph	_	LId=jen-1|LGloss=(pouze)
2	cedule	cedule	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	_	_
3	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	5	aux	_	_
4	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	cop	_	_
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
6	:	:	PUNCT	Z:-------------	_	8	punct	_	_
7	FOR	for	ADP	RR--X----------	AdpType=Prep|Foreign=Yes	8	flat:foreign	_	_
8	RENT	rent	NOUN	NNXXX-----A----	Foreign=Yes|Polarity=Pos	5	appos	_	LGloss=(pronájem)
9	!	!	PUNCT	Z:-------------	_	8	punct	_	_
10	-	-	PUNCT	Z:-------------	_	12	punct	_	_
11	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	_	LId=k-1
12	PRONÁJMU	pronájem	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	8	appos	_	_
13	!	!	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	6	aux	_	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
4	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	_	LDeriv=patrný
5	cenový	cenový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	výbuch	výbuch	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

3528 nodes (1%) are attached to their parents as `aux`.

3134 instances of `aux` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.52636054421769.

The following 17 pairs of parts of speech are connected with `aux`: [cs-pos/VERB]()-[cs-pos/AUX]() (3005; 85% instances), [cs-pos/ADJ]()-[cs-pos/AUX]() (418; 12% instances), [cs-pos/NOUN]()-[cs-pos/AUX]() (56; 2% instances), [cs-pos/SYM]()-[cs-pos/AUX]() (12; 0% instances), [cs-pos/ADV]()-[cs-pos/AUX]() (10; 0% instances), [cs-pos/DET]()-[cs-pos/AUX]() (7; 0% instances), [cs-pos/CCONJ]()-[cs-pos/AUX]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/AUX]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/AUX]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Zvýšené	zvýšený	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	_	LDeriv=zvýšit
2	úsilí	úsilí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	4	obj	_	_
3	budeme	být	AUX	VB-P---1F-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	4	aux	_	_
4	věnovat	věnovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	_	_
5	zavádění	zavádění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	4	iobj	_	LDeriv=zavádět
6	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	poznatků	poznatek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	_
8	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=do-1
9	praxe	praxe	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux	color:blue
1	Není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	tedy	tedy	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	_
3	nutné	nutný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	_	_
5	aby	aby	SCONJ	J,-------------	_	8	mark	_	_
6	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	8	aux	_	_
7	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	aux:pass	_	_
8	splněna	splněný	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	nsubj	_	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=v-1
10	každém	každý	ADJ	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	amod	_	_
11	roce	rok	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	by	být	AUX	Vc-X---3-------	Mood=Cnd|Person=3|VerbForm=Fin	4	aux	_	_
3	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	_
4	tragédie	tragedie	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

30 nodes (0%) are attached to their parents as `aux`.

28 instances of `aux` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.1.

The following 3 pairs of parts of speech are connected with `aux`: [cs-pos/VERB]()-[cs-pos/AUX]() (26; 87% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (3; 10% instances), [cs-pos/ADJ]()-[cs-pos/AUX]() (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
2	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	_	_
4	stanoví	stanovit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
7	budou	být	AUX	VB-P---3F-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	8	aux	_	_
8	účtovat	účtovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=o-1
10	odložené	odložený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	_	_
11	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obj	_	_
12	a	a	CCONJ	J^-------------	_	13	cc	_	LId=a-1
13	vykazovat	vykazovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	conj	_	_
14	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	SpaceAfter=No|LId=on-1
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 26 aux	color:blue
1	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	6	obl	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	Ustanovení	ustanovení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	6	obj	_	_
4	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	_
6	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	_	LId=účetní-1
8	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	6	nsubj	_	_
9	poprvé	poprvé	ADV	Cv-------------	NumType=Ord	6	advmod	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=v-1
11	účetních	účetní	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	12	amod	_	LId=účetní-1
12	obdobích	období	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur|Polarity=Pos	6	obl	_	_
13	započatých	započatý	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	12	amod	_	_
14	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	16	nummod	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	14	punct	_	_
16	ledna	leden	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	13	obl	_	_
17	2008	2008	NUM	C}-------------	NumForm=Roman|NumType=Card	16	nummod	_	_
18	a	a	CCONJ	J^-------------	_	19	cc	_	LId=a-1
19	později	pozdě	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	16	conj	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	26	punct	_	_
21	pokud	pokud	SCONJ	J,-------------	_	26	mark	_	_
22	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	26	cop	_	_
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	26	mark	_	LId=v-1
24	bodě	bod	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	26	obl	_	_
25	3	3	NUM	C}-------------	NumForm=Roman|NumType=Card	24	nummod	_	_
26	stanoveno	stanovit	VERB	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	6	aux	_	_
27	jinak	jinak	ADV	Db-------------	_	26	advmod	_	SpaceAfter=No
28	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 26 aux	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	5	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	_	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	_	_
6	vyhotovovat	vyhotovovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	_	_
7	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	8	amod	_	LId=účetní-1
8	doklady	doklad	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	6	obj	_	_
9	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	LId=bez-1
10	zbytečného	zbytečný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	amod	_	_
11	odkladu	odklad	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	6	obl	_	_
12	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=po-1
13	zjištění	zjištění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	6	obl	_	_
14	skutečností	skutečnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	13	nmod	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	19	punct	_	_
16	které	který	PRON	P4FP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	19	nsubj:pass	_	_
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	19	expl:pass	_	_
18	jimi	on	PRON	PPXP7--3-------	Case=Ins|Number=Plur|Person=3|PronType=Prs	19	obl	_	LId=on-1
19	zachycují	zachycovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	23	punct	_	_
21	a	a	CCONJ	J^-------------	_	22	cc	_	LId=a-1
22	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	23	cc	_	_
23	tak	tak	ADV	Db-------------	_	6	advmod	_	SpaceAfter=No|LId=tak-3
24	,	,	PUNCT	Z:-------------	_	28	punct	_	_
25	aby	aby	SCONJ	J,-------------	_	28	mark	_	_
26	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	28	aux	_	_
27	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	28	cop	_	_
28	možno	možný	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	23	advcl	_	_
29	určit	určit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	28	csubj	_	_
30	obsah	obsah	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	29	obj	_	_
31	každého	každý	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	34	amod	_	_
32	jednotlivého	jednotlivý	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	34	amod	_	_
33	účetního	účetní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	34	amod	_	LId=účetní-1
34	případu	případ	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	30	nmod	_	_
35	způsobem	způsob	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	29	obl	_	_
36	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	37	case	_	LId=podle-2
37	§	§	X	X@-------------	_	35	nmod	_	_
38	8	8	X	X@-------------	_	37	flat	_	_
39	odst.	odst.	X	X@-------------	_	37	flat	_	_
40	5	5	X	X@-------------	_	37	flat	_	SpaceAfter=No
41	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


