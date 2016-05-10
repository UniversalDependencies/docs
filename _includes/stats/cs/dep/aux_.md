

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

14721 nodes (1%) are attached to their parents as `aux`.

12993 instances of `aux` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.37891447591876.

The following 11 pairs of parts of speech are connected with `aux`: [cs-pos/VERB]()-[cs-pos/AUX]() (13895; 94% instances), [cs-pos/ADJ]()-[cs-pos/AUX]() (527; 4% instances), [cs-pos/NOUN]()-[cs-pos/AUX]() (203; 1% instances), [cs-pos/CONJ]()-[cs-pos/AUX]() (36; 0% instances), [cs-pos/PRON]()-[cs-pos/AUX]() (19; 0% instances), [cs-pos/ADV]()-[cs-pos/AUX]() (18; 0% instances), [cs-pos/NUM]()-[cs-pos/AUX]() (9; 0% instances), [cs-pos/PART]()-[cs-pos/AUX]() (8; 0% instances), [cs-pos/PROPN]()-[cs-pos/AUX]() (3; 0% instances), [cs-pos/SCONJ]()-[cs-pos/AUX]() (2; 0% instances), [cs-pos/SYM]()-[cs-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Chci	chtít	VERB	VB-S---1P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	uzavřít	uzavřít	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	1	xcomp	_	_
3	pojištění	pojištění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	2	dobj	_	LDeriv=pojistit
4	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
5	dostal	dostat	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	conj	_	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
7	proto	proto	CONJ	J^-------------	_	1	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
8	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	9	case	_	LId=k-1
9	vyplnění	vyplnění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Negative=Pos|Number=Sing	5	nmod	_	LDeriv=vyplnit
10	dotazník	dotazník	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	5	dobj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Jen	jen	PART	TT-------------	_	2	advmod:emph	_	LId=jen-1|LGloss=(pouze)
2	cedule	cedule	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	5	nsubj	_	_
3	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	5	aux	_	_
4	byla	být	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Tense=Past|VerbForm=Part|Voice=Act	5	cop	_	_
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
6	:	:	PUNCT	Z:-------------	_	8	punct	_	_
7	FOR	for	ADP	RR--X----------	AdpType=Prep|Foreign=Foreign	8	foreign	_	_
8	RENT	rent	NOUN	NNXXX-----A----	Foreign=Foreign|Negative=Pos	5	appos	_	LGloss=(pronájem)
9	!	!	PUNCT	Z:-------------	_	8	punct	_	_
10	-	-	PUNCT	Z:-------------	_	12	punct	_	_
11	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	_	LId=k-1
12	PRONÁJMU	pronájem	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	8	appos	_	_
13	!	!	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Byl	být	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	6	aux	_	_
3	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
4	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	6	advmod	_	LDeriv=patrný
5	cenový	cenový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	6	amod	_	_
6	výbuch	výbuch	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

3611 nodes (1%) are attached to their parents as `aux`.

3208 instances of `aux` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54167820548325.

The following 17 pairs of parts of speech are connected with `aux`: [cs-pos/VERB]()-[cs-pos/AUX]() (3324; 92% instances), [cs-pos/ADJ]()-[cs-pos/AUX]() (182; 5% instances), [cs-pos/NOUN]()-[cs-pos/AUX]() (56; 2% instances), [cs-pos/SYM]()-[cs-pos/AUX]() (12; 0% instances), [cs-pos/ADV]()-[cs-pos/AUX]() (10; 0% instances), [cs-pos/PRON]()-[cs-pos/AUX]() (7; 0% instances), [cs-pos/CONJ]()-[cs-pos/AUX]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/AUX]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/AUX]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Zvýšené	zvýšený	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	2	amod	_	LDeriv=zvýšit
2	úsilí	úsilí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	4	dobj	_	_
3	budeme	být	AUX	VB-P---1F-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	4	aux	_	_
4	věnovat	věnovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	0	root	_	_
5	zavádění	zavádění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Negative=Pos|Number=Sing	4	iobj	_	LDeriv=zavádět
6	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	_
7	poznatků	poznatek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	_
8	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=do-1
9	praxe	praxe	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Byli	být	VERB	VpMP---XR-AA---	Animacy=Anim|Gender=Masc|Negative=Pos|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	5	cop	_	_
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	až	až	PART	TT-------------	_	4	advmod	_	LId=až-3|LGloss=(až_k_...,_až_dost)
4	dosud	dosud	ADV	Db-------------	_	5	advmod	_	_
5	spokojeni	spokojený	ADJ	ACMP------A----	Animacy=Anim|Gender=Masc|Negative=Pos|Number=Plur|Variant=Short	0	root	_	_
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	7	case	_	LId=s-1
7	jakostí	jakost	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	5	dobj	_	_
8	každé	každý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	10	amod	_	_
9	Vaší	tvůj	DET	PSFS2-P2-------	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	10	det	_	LGloss=(přivlast.)
10	dodávky	dodávka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	To	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	by	být	AUX	Vc-X---3-------	Mood=Cnd|Person=3|VerbForm=Fin	4	aux	_	_
3	byla	být	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Tense=Past|VerbForm=Part|Voice=Act	4	cop	_	_
4	tragédie	tragedie	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

41 nodes (0%) are attached to their parents as `aux`.

39 instances of `aux` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.95121951219512.

The following 3 pairs of parts of speech are connected with `aux`: [cs-pos/VERB]()-[cs-pos/AUX]() (34; 83% instances), [cs-pos/ADJ]()-[cs-pos/AUX]() (4; 10% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (3; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	_
2	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	4	nsubj	_	_
4	stanoví	stanovit	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
7	budou	být	AUX	VB-P---3F-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	8	aux	_	_
8	účtovat	účtovat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	4	ccomp	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=o-1
10	odložené	odložený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	11	amod	_	_
11	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	8	dobj	_	_
12	a	a	CONJ	J^-------------	_	8	cc	_	LId=a-1
13	vykazovat	vykazovat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	8	conj	_	_
14	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	dobj	_	SpaceAfter=No|LId=on-1
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	4	punct	_	_
2	Opravy	oprava	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	4	nsubjpass	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	auxpass:reflex	_	_
4	musí	muset	VERB	VB-P---3P-AA--1	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	provádět	provádět	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	4	xcomp	_	_
6	tak	tak	ADV	Db-------------	_	5	advmod	_	SpaceAfter=No|LId=tak-3
7	,	,	PUNCT	Z:-------------	_	11	punct	_	_
8	aby	aby	SCONJ	J,-------------	_	11	mark	_	_
9	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	11	aux	_	_
10	bylo	být	VERB	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	11	cop	_	_
11	možno	možný	ADJ	ACNS------A----	Gender=Neut|Negative=Pos|Number=Sing|Variant=Short	5	advcl	_	_
12	určit	určit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	11	csubj	_	_
13	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	12	dobj	_	_
14	odpovědnou	odpovědný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	13	amod	_	_
15	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	_	LId=za-1
16	provedení	provedení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	14	dobj	_	_
17	každé	každý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	18	amod	_	_
18	opravy	oprava	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	16	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	13	punct	_	_
20	okamžik	okamžik	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	13	conj	_	_
21	jejího	jeho	DET	PSZS2FS3-------	Case=Gen|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	22	det	_	_
22	provedení	provedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	20	nmod	_	_
23	a	a	CONJ	J^-------------	_	12	cc	_	LId=a-1
24	zjistit	zjistit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	12	conj	_	_
25	jak	jak	ADV	Db-------------	_	26	cc	_	LId=jak-3
26	obsah	obsah	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	24	dobj	_	_
27	opravovaného	opravovaný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	29	amod	_	_
28	účetního	účetní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	29	amod	_	LId=účetní-1
29	záznamu	záznam	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	26	nmod	_	_
30	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	31	case	_	LId=před-1
31	opravou	oprava	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	29	nmod	_	SpaceAfter=No
32	,	,	PUNCT	Z:-------------	_	26	punct	_	_
33	tak	tak	ADV	Db-------------	_	26	cc	_	LId=tak-3
34	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	35	det	_	_
35	obsah	obsah	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	26	conj	_	_
36	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	37	case	_	LId=po-1
37	opravě	oprava	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	35	nmod	_	SpaceAfter=No
38	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 26 aux	color:blue
1	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	6	nmod	_	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	Ustanovení	ustanovení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	6	dobj	_	_
4	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	_
6	použijí	použít	VERB	VB-P---3P-AA--1	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	8	amod	_	LId=účetní-1
8	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	6	nsubj	_	_
9	poprvé	poprvé	ADV	Cv-------------	NumType=Ord	6	advmod	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=v-1
11	účetních	účetní	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Plur	12	amod	_	LId=účetní-1
12	obdobích	období	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Plur	6	nmod	_	_
13	započatých	započatý	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Plur	12	amod	_	_
14	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	16	nummod	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	14	punct	_	_
16	ledna	leden	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	13	nmod	_	_
17	2008	2008	NUM	C}-------------	NumForm=Roman|NumType=Card	16	nummod	_	_
18	a	a	CONJ	J^-------------	_	16	cc	_	LId=a-1
19	později	pozdě	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	16	conj	_	SpaceAfter=No
20	,	,	PUNCT	Z:-------------	_	26	punct	_	_
21	pokud	pokud	SCONJ	J,-------------	_	26	mark	_	_
22	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	cop	_	_
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	26	mark	_	LId=v-1
24	bodě	bod	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	26	nmod	_	_
25	3	3	NUM	C}-------------	NumForm=Roman|NumType=Card	24	nummod	_	_
26	stanoveno	stanovit	VERB	VsNS---XX-AP---	Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	6	aux	_	_
27	jinak	jinak	ADV	Db-------------	_	26	advmod	_	SpaceAfter=No
28	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


