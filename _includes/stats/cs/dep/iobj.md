

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

8496 nodes (1%) are attached to their parents as `iobj`.

5114 instances of `iobj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.00400188323917.

The following 8 pairs of parts of speech are connected with `iobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (4566; 54% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (2658; 31% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (712; 8% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (472; 6% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (61; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (24; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 iobj	color:blue
1	Mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	zde	zde	ADV	Db-------------	_	1	advmod	_	_
3	porovnat	porovnat	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	1	xcomp	_	_
4	svůj	svůj	DET	P8IS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	LId=svůj-1|LGloss=(přivlast.)
5	vývoj	vývoj	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	3	dobj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	5	punct	_	_
7	záměry	záměr	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	5	conj	_	_
8	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	10	case	_	LId=s-1
9	světovými	světový	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	10	amod	_	_
10	trendy	trend	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Plur	3	iobj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 iobj	color:blue
1	Může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
2	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=po-1
3	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
4	takové	takový	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	7	dobj	_	_
6	pojišťovna	pojišťovna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	1	nsubj	_	_
7	vyžadovat	vyžadovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 iobj	color:blue
1	LN	LN	PROPN	NNFPX-----A---8	Abbr=Yes|Gender=Fem|NameType=Pro|Negative=Pos|Number=Plur	4	iobj	_	LId=LN-1|LGloss=(Lidové_noviny,_deník)
2	to	ten	PRON	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	dobj	_	_
3	včera	včera	ADV	Db-------------	_	4	advmod	_	_
4	řekl	říci	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	místopředseda	místopředseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	11	nmod	_	_
6	sněmovny	sněmovna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	5	nmod	_	_
7	a	a	CONJ	J^-------------	_	6	cc	_	LId=a-1
8	KDU	KDU	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	6	conj	_	SpaceAfter=No|LGloss=(Křesťansko-demokratická_unie)
9	-	-	PUNCT	Z:-------------	_	8	punct	_	SpaceAfter=No
10	ČSL	ČSL	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	8	conj	_	LId=ČSL-1|LGloss=(Česká_[pův._Čsl.]_strana_lidová)
11	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	4	nsubj	_	_
12	Kasal	Kasal	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	11	name	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

2128 nodes (0%) are attached to their parents as `iobj`.

1490 instances of `iobj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.10056390977444.

The following 7 pairs of parts of speech are connected with `iobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (1367; 64% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (603; 28% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (88; 4% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (50; 2% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (14; 1% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Dobrý	dobrý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	2	amod	_	_
2	vzhled	vzhled	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	4	nsubj	_	_
3	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	4	iobj	_	_
4	dodává	dodávat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LDeriv=dodat
5	jistotu	jistota	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	4	dobj	_	_
6	a	a	CONJ	J^-------------	_	5	cc	_	LId=a-1
7	sebevědomí	sebevědomí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	_	_
9	které	který	PRON	P4NS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	10	dobj	_	_
10	potřebujeme	potřebovat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Různí	různý	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	2	amod	_	_
2	sobci	sobec	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	5	nsubj	_	_
3	tyto	tento	DET	PDFP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	4	det	_	_
4	věci	věc	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	5	dobj	_	_
5	přenechávají	přenechávat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LDeriv=přenechat
6	druhým	druhý	ADJ	AAMP3----1A----	Animacy=Anim|Case=Dat|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	5	iobj	_	SpaceAfter=No|LId=druhý-1|LGloss=(jiný)
7	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

38 nodes (0%) are attached to their parents as `iobj`.

25 instances of `iobj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.02631578947368.

The following 3 pairs of parts of speech are connected with `iobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (29; 76% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (8; 21% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	4	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	4	nsubj	_	_
4	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	pověřit	pověřit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	4	xcomp	_	_
6	vedením	vedení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	5	iobj	_	_
7	svého	svůj	DET	P8ZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	LId=svůj-1
8	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	6	nmod	_	_
9	i	i	CONJ	J^-------------	_	14	advmod:emph	_	LId=i-1
10	jinou	jiný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	14	amod	_	_
11	právnickou	právnický	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	14	amod	_	_
12	nebo	nebo	CONJ	J^-------------	_	11	cc	_	_
13	fyzickou	fyzický	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	11	conj	_	_
14	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	5	dobj	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 iobj	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	7	punct	_	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	7	nsubj	_	_
4	uvedené	uvedený	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	3	amod	_	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=v-1
6	§_20_odst._1_písm._e)	§_20_odst._1_písm._e)	X	X@-------------	_	4	advmod	_	_
7	vyhotovují	vyhotovovat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	výroční	výroční	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	9	amod	_	_
9	zprávu	zpráva	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	7	dobj	_	_
10	nebo	nebo	CONJ	J^-------------	_	9	cc	_	_
11	obdobný	obdobný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	12	amod	_	_
12	dokument	dokument	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	9	conj	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	18	punct	_	_
14	pokud	pokud	SCONJ	J,-------------	_	18	mark	_	_
15	jim	on	PRON	PPXP3--3-------	Case=Dat|Number=Plur|Person=3|PronType=Prs	18	iobj	_	LId=on-1
16	tuto	tuto	ADV	Db-------------	_	17	advmod	_	_
17	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	18	dobj	_	_
18	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	_
19	zvláštní	zvláštní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	21	amod	_	_
20	právní	právní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	21	amod	_	_
21	předpis	předpis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	18	nsubj	_	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 23 iobj	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	14	punct	_	_
2	Zjistí-li	Zjistí-li	NOUN	NNNXX-----A----	Gender=Neut|Negative=Pos	14	nmod	_	_
3	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	LId=účetní-1
4	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	2	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	že	že	SCONJ	J,-------------	_	10	mark	_	_
7	obsah	obsah	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	10	nsubj	_	_
8	účetního	účetní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	9	amod	_	LId=účetní-1
9	záznamu	záznam	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	_
10	neodpovídá	odpovídat	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
11	skutečnosti	skutečnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	10	dobj	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	10	punct	_	_
13	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
14	povinna	povinný	ADJ	ACQW------A----	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Variant=Short	0	root	_	_
15	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	_	LId=od-1
16	tohoto	tento	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	17	det	_	_
17	okamžiku	okamžik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	18	nmod	_	_
18	považovat	považovat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	14	xcomp	_	_
19	tento	tento	DET	PDIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	21	det	_	_
20	účetní	účetní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	21	amod	_	LId=účetní-1
21	záznam	záznam	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	18	dobj	_	_
22	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	23	case	_	LId=za-1
23	neprůkazný	průkazný	ADJ	AAIS4----1N----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Neg|Number=Sing	18	iobj	_	SpaceAfter=No
24	,	,	PUNCT	Z:-------------	_	26	punct	_	_
25	byť	byť	SCONJ	J,-------------	_	26	mark	_	_
26	splňuje	splňovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	_
27	ustanovení	ustanovení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	26	dobj	_	_
28	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	27	nmod	_	_
29	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	28	nummod	_	_
30	písm._b)_a_c)	písm._b)_a_c)	X	X@-------------	_	29	nmod	_	SpaceAfter=No
31	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


