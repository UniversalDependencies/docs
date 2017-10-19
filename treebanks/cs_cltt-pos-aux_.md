

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

41 nodes (0%) are attached to their parents as `aux`.

39 instances of `aux` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.04878048780488.

The following 3 pairs of parts of speech are connected with `aux`: [-pos/VERB]()-[-pos/AUX]() (34; 83% instances), [-pos/ADJ]()-[-pos/AUX]() (4; 10% instances), [-pos/VERB]()-[-pos/VERB]() (3; 7% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	4	punct	_	_
2	Opravy	oprava	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj:pass	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	_	_
4	musí	muset	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	provádět	provádět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	xcomp	_	_
6	tak	tak	ADV	Db-------------	_	5	advmod	_	SpaceAfter=No|LId=tak-3
7	,	,	PUNCT	Z:-------------	_	11	punct	_	_
8	aby	aby	SCONJ	J,-------------	_	11	mark	_	_
9	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	11	aux	_	_
10	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	cop	_	_
11	možno	možný	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	5	advcl	_	_
12	určit	určit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	11	csubj	_	_
13	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	12	obj	_	_
14	odpovědnou	odpovědný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
15	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	_	LId=za-1
16	provedení	provedení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	14	obj	_	_
17	každé	každý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	18	amod	_	_
18	opravy	oprava	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	16	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	20	punct	_	_
20	okamžik	okamžik	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	13	conj	_	_
21	jejího	jeho	DET	PSZS2FS3-------	Case=Gen|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	22	det	_	_
22	provedení	provedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	20	nmod	_	_
23	a	a	CCONJ	J^-------------	_	24	cc	_	LId=a-1
24	zjistit	zjistit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	12	conj	_	_
25	jak	jak	ADV	Db-------------	_	26	cc	_	LId=jak-3
26	obsah	obsah	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	24	obj	_	_
27	opravovaného	opravovaný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	_	_
28	účetního	účetní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	29	amod	_	LId=účetní-1
29	záznamu	záznam	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	26	nmod	_	_
30	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	31	case	_	LId=před-1
31	opravou	oprava	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	29	nmod	_	SpaceAfter=No
32	,	,	PUNCT	Z:-------------	_	35	punct	_	_
33	tak	tak	ADV	Db-------------	_	35	cc	_	LId=tak-3
34	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	35	det	_	_
35	obsah	obsah	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	26	conj	_	_
36	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	37	case	_	LId=po-1
37	opravě	oprava	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	35	nmod	_	SpaceAfter=No
38	.	.	PUNCT	Z:-------------	_	4	punct	_	_

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


