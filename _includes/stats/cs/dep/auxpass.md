

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.
There are 1 language-specific subtypes of `auxpass`: [auxpass:reflex]().

6068 nodes (0%) are attached to their parents as `auxpass`.

5946 instances of `auxpass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25181278839815.

The following 1 pairs of parts of speech are connected with `auxpass`: [cs-pos/VERB]()-[cs-pos/AUX]() (6068; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 auxpass	color:blue
1	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	LId=na-1
2	požádání	požádání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	5	nmod	_	LDeriv=požádat
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
4	být	být	AUX	Vf--------A----	Negative=Pos|VerbForm=Inf	5	auxpass	_	_
5	zaslán	zaslat	VERB	VsYS---XX-AP---	Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	3	ccomp	_	_
6	seznam	seznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	3	nsubj	_	_
7	firem	firma	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.
There are 1 language-specific subtypes of `auxpass`: [auxpass:reflex]().

2539 nodes (1%) are attached to their parents as `auxpass`.

2518 instances of `auxpass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98857818038598.

The following 4 pairs of parts of speech are connected with `auxpass`: [cs-pos/VERB]()-[cs-pos/AUX]() (2528; 100% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (9; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 auxpass	color:blue
1	Rekultivační	rekultivační	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	2	amod	_	_
2	výzkum	výzkum	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	4	nsubj	_	_
3	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	_
5	a	a	CONJ	J^-------------	_	4	cc	_	LId=a-1
6	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	auxpass	_	_
7	průběžně	průběžně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	8	advmod	_	LDeriv=průběžný
8	zajišťován	zajišťovat	VERB	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 auxpass	color:blue
1	Dřevěné	dřevěný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	2	amod	_	_
2	obklady	obklad	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	5	nsubj	_	_
3	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	poměrně	poměrně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	5	advmod	_	LDeriv=poměrný
5	odolné	odolný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	0	root	_	_
6	a	a	CONJ	J^-------------	_	5	cc	_	LId=a-1
7	trvanlivé	trvanlivý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	5	punct	_	_
9	ale	ale	CONJ	J^-------------	_	5	cc	_	_
10	jen	jen	PART	TT-------------	_	11	advmod:emph	_	LId=jen-1|LGloss=(pouze)
11	tehdy	tehdy	ADV	Db-------------	_	5	conj	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	16	punct	_	_
13	*	*	SYM	Xx-------------	Abbr=Yes	16	auxpass	_	_
14	-	-	PUNCT	Z:-------------	_	16	punct	_	_
15	li	li	PART	TT-------------	_	16	mark	_	_
16	osazeny	osadit	VERB	VsTP---XX-AP---	Animacy=Inan|Aspect=Perf|Gender=Fem,Masc|Negative=Pos|Number=Plur|VerbForm=Part|Voice=Pass	5	conj	_	_
17	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	_	LId=na-1
18	suché	suchý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	19	amod	_	_
19	zdivo	zdivo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	16	nmod	_	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 26 auxpass	color:blue
1	Lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl	_	LGloss=(zvr._zájmeno/částice)
3	domnívat	domnívat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	1	csubj	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	_	_
5	že	že	SCONJ	J,-------------	_	8	mark	_	_
6	příslušní	příslušný	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	LDeriv=příslušet
7	činitelé	činitel	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	8	nsubj	_	_
8	udělají	udělat	VERB	VB-P---3P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
9	vše	všechno	PRON	PLNS4---------1	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	8	dobj	_	_
10	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=pro-1
11	to	ten	PRON	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	advmod	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	19	punct	_	_
13	aby	aby	SCONJ	J,-------------	_	19	mark	_	_
14	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	19	aux	_	_
15	i	i	CONJ	J^-------------	_	16	advmod:emph	_	LId=i-1
16	tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	17	det	_	_
17	část	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	19	nsubj	_	_
18	oprav	oprava	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	17	nmod	_	_
19	mohla	moci	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Tense=Past|VerbForm=Part|Voice=Act	11	acl	_	LGloss=(mít_možnost_[něco_dělat])
20	být	být	AUX	Vf--------A----	Negative=Pos|VerbForm=Inf	21	auxpass	_	_
21	provedena	provést	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|VerbForm=Part|Voice=Pass	19	ccomp	_	_
22	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	24	case	_	LId=bez-1
23	zbytečných	zbytečný	ADJ	AANP2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Plur	24	amod	_	_
24	zdržení	zdržení	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	21	nmod	_	LDeriv=zdržet
25	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	26	case	_	LId=v-1
26	rámci	rámec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	21	auxpass	_	_
27	celkové	celkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	28	amod	_	_
28	opravy	oprava	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	26	nmod	_	SpaceAfter=No
29	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.
There are 1 language-specific subtypes of `auxpass`: [auxpass:reflex]().

133 nodes (0%) are attached to their parents as `auxpass`.

132 instances of `auxpass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81203007518797.

The following 3 pairs of parts of speech are connected with `auxpass`: [cs-pos/VERB]()-[cs-pos/AUX]() (129; 97% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (2; 2% instances), [cs-pos/VERB]()-[cs-pos/X]() (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 auxpass	color:blue
1	Průběh	průběh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	3	nsubj	_	_
2	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	1	nmod	_	_
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	být	být	AUX	Vf--------A----	Negative=Pos|VerbForm=Inf	5	auxpass	_	_
5	vyjádřen	vyjádřit	VERB	VsYS---XX-AP---	Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	3	ccomp	_	_
6	i	i	CONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
7	jinak	jinak	ADV	Db-------------	_	5	advmod	_	_
8	než	než	SCONJ	J,-------------	_	10	mark	_	LId=než-2
9	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	10	case	_	LId=v-1
10	vazbě	vazba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	7	dep	_	LId=vazba-8
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	_	LId=na-1
12	čas	čas	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	10	nmod	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	_	_
14	například	například	ADV	Db-------------	_	16	cc	_	_
15	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	_	LId=na-1
16	výkony	výkon	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	12	appos	_	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 auxpass	color:blue
1	Způsoby	způsob	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	_
2	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	_	LId=podle-2
3	§_25	§_25	X	X@-------------	_	1	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	auxpass:reflex	_	_
5	ocení	ocenit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	i	i	CONJ	J^-------------	_	7	advmod:emph	_	LId=i-1
7	majetek	majetek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	5	nsubjpass	_	_
8	a	a	CONJ	J^-------------	_	7	cc	_	LId=a-1
9	závazky	závazek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	7	conj	_	_
10	neuvedené	uvedený	ADJ	AAMP4----1N----	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Negative=Neg|Number=Plur	9	amod	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=v-1
12	odstavci	odstavec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	10	nmod	_	_
13	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	12	nummod	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	17	punct	_	_
15	není-li	není-li	X	X@-------------	_	17	auxpass	_	_
16	dále	dále	ADV	Db------------1	_	17	advmod	_	LId=dále-3
17	stanoveno	stanovit	VERB	VsNS---XX-AP---	Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	5	advcl	_	_
18	jinak	jinak	ADV	Db-------------	_	17	advmod	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 auxpass	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	9	punct	_	_
2	Není-li	Není-li	NOUN	NNNXX-----A----	Gender=Neut|Negative=Pos	4	auxpass	_	_
3	dále	dále	ADV	Db------------1	_	4	advmod	_	LId=dále-3
4	stanoveno	stanovit	VERB	VsNS---XX-AP---	Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	9	advcl	_	_
5	jinak	jinak	ADV	Db-------------	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	4	punct	_	_
7	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	8	amod	_	LId=účetní-1
8	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	9	nsubj	_	_
9	uzavírají	uzavírat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	účetní	účetní	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	11	amod	_	LId=účetní-1
11	knihy	kniha	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	9	dobj	_	_
12	a)	a)	X	X@-------------	_	9	nmod	_	_
13	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	12	case	_	LId=k-1
14	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	12	nmod	_	_
15	zániku	zánik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	14	nmod	_	_
16	povinnosti	povinnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	15	nmod	_	_
17	vést	vést	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	16	acl	_	LId=vést-1
18	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	17	dobj	_	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	12	punct	_	_
20	b)	b)	X	X@-------------	_	12	conj	_	_
21	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	20	case	_	LId=k-1
22	poslednímu	poslední	ADJ	AAIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	23	amod	_	_
23	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	20	nmod	_	_
24	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	25	amod	_	LId=účetní-1
25	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	23	nmod	_	SpaceAfter=No
26	,	,	PUNCT	Z:-------------	_	12	punct	_	_
27	c)	c)	X	X@-------------	_	12	conj	_	_
28	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	27	case	_	LId=k-1
29	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	27	nmod	_	_
30	předcházejícímu	předcházející	ADJ	AGMS3-----A----	Animacy=Anim|Aspect=Imp|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	29	amod	_	_
31	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	30	dobj	_	_
32	vstupu	vstup	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	31	nmod	_	_
33	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	34	case	_	LId=do-1
34	likvidace	likvidace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	32	nmod	_	SpaceAfter=No
35	,	,	PUNCT	Z:-------------	_	12	punct	_	_
36	d)	d)	X	X@-------------	_	12	conj	_	_
37	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	36	case	_	LId=k-1
38	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	36	nmod	_	_
39	zrušení	zrušení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	38	nmod	_	_
40	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	41	case	_	LId=bez-1
41	likvidace	likvidace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	39	nmod	_	_
42	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	44	case	_	LId=s-1
43	výjimkou	výjimka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	42	mwe	_	_
44	přeměn	přeměna	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	39	nmod	_	_
45	společností	společnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	44	nmod	_	_
46	nebo	nebo	CONJ	J^-------------	_	45	cc	_	_
47	družstev	družstvo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Plur	45	conj	_	SpaceAfter=No
48	,	,	PUNCT	Z:-------------	_	12	punct	_	_
49	e)	e)	X	X@-------------	_	12	conj	_	_
50	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	49	case	_	LId=k-1
51	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	49	nmod	_	_
52	předcházejícímu	předcházející	ADJ	AGNS3-----A----	Aspect=Imp|Case=Dat|Gender=Neut|Negative=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	51	amod	_	_
53	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	52	dobj	_	SpaceAfter=No
54	,	,	PUNCT	Z:-------------	_	56	punct	_	_
55	kterým	který	PRON	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	56	advmod	_	_
56	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	53	acl	_	_
57	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	56	nsubj	_	_
58	rozhodnutí	rozhodnutí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	57	nmod	_	_
59	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	60	case	_	LId=o-1
60	úpadku	úpadek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	58	nmod	_	_
61	nebo	nebo	CONJ	J^-------------	_	56	cc	_	_
62	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	63	case	_	LId=k-1
63	kterému	který	PRON	P4ZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	64	advmod	_	_
64	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	56	conj	_	_
65	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	64	nsubj	_	_
66	rozhodnutí	rozhodnutí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	65	nmod	_	_
67	soudu	soud	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	66	nmod	_	_
68	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	69	case	_	LId=o-1
69	přeměně	přeměna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	66	nmod	_	_
70	reorganizace	reorganizace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	69	nmod	_	_
71	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	72	case	_	LId=v-1
72	konkurs	konkurs	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	69	nmod	_	SpaceAfter=No|LId=konkurs-1
73	,	,	PUNCT	Z:-------------	_	12	punct	_	_
74	f)	f)	X	X@-------------	_	12	conj	_	_
75	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	74	case	_	LId=k-1
76	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	74	nmod	_	SpaceAfter=No
77	,	,	PUNCT	Z:-------------	_	79	punct	_	_
78	kterým	který	PRON	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	79	advmod	_	_
79	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	76	acl	_	_
80	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	79	nsubj	_	_
81	zrušení	zrušení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	80	nmod	_	_
82	konkursu	konkurs	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	81	nmod	_	SpaceAfter=No|LId=konkurs-1
83	,	,	PUNCT	Z:-------------	_	12	punct	_	_
84	g)	g)	X	X@-------------	_	12	conj	_	_
85	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	84	case	_	LId=k-1
86	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	84	nmod	_	_
87	předcházejícímu	předcházející	ADJ	AGNS3-----A----	Aspect=Imp|Case=Dat|Gender=Neut|Negative=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	86	amod	_	_
88	dni	den	NOUN	NNIP4-----A---1	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	87	dobj	_	SpaceAfter=No
89	,	,	PUNCT	Z:-------------	_	91	punct	_	_
90	kterým	který	PRON	P4ZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	91	advmod	_	_
91	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	88	acl	_	_
92	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	91	nsubj	_	_
93	schválení	schválení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	92	nmod	_	_
94	reorganizačního	reorganizační	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	95	amod	_	_
95	plánu	plán	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	93	nmod	_	SpaceAfter=No
96	,	,	PUNCT	Z:-------------	_	12	punct	_	_
97	h)	h)	X	X@-------------	_	12	conj	_	_
98	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	97	case	_	LId=k-1
99	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	97	nmod	_	SpaceAfter=No
100	,	,	PUNCT	Z:-------------	_	102	punct	_	_
101	kterým	který	PRON	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	102	dobj	_	_
102	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	99	acl	_	_
103	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	102	nsubj	_	_
104	splnění	splnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	103	nmod	_	_
105	reorganizačního	reorganizační	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	106	amod	_	_
106	plánu	plán	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	104	nmod	_	SpaceAfter=No
107	,	,	PUNCT	Z:-------------	_	12	punct	_	_
108	i)	i)	X	X@-------------	_	12	conj	_	_
109	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	108	case	_	LId=k-1
110	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	108	nmod	_	SpaceAfter=No
111	,	,	PUNCT	Z:-------------	_	113	punct	_	_
112	kterým	který	PRON	P4XP3----------	Case=Dat|Number=Plur|PronType=Int,Rel	113	advmod	_	_
113	nastanou	nastat	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	110	acl	_	_
114	účinky	účinek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	113	nsubj	_	_
115	splnění	splnění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	114	nmod	_	_
116	plánu	plán	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	117	nmod	_	_
117	oddlužení	oddlužení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	115	nmod	_	SpaceAfter=No
118	,	,	PUNCT	Z:-------------	_	12	punct	_	_
119	nebo	nebo	CONJ	J^-------------	_	12	cc	_	_
120	j)	j)	X	X@-------------	_	12	conj	_	_
121	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	120	case	_	LId=k-1
122	dni	den	NOUN	NNIS3-----A---1	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	120	nmod	_	SpaceAfter=No
123	,	,	PUNCT	Z:-------------	_	126	punct	_	_
124	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	125	case	_	LId=k-1
125	kterému	který	PRON	P4ZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Int,Rel	126	advmod	_	_
126	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	122	acl	_	_
127	povinnost	povinnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	126	dobj	_	_
128	uzavřít	uzavřít	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	127	acl	_	_
129	účetní	účetní	ADJ	AAFP4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	130	amod	_	LId=účetní-1
130	knihy	kniha	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	128	dobj	_	_
131	nebo	nebo	CONJ	J^-------------	_	128	cc	_	_
132	sestavit	sestavit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	128	conj	_	_
133	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	134	amod	_	LId=účetní-1
134	závěrku	závěrka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	132	dobj	_	_
135	zvláštní	zvláštní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	137	amod	_	_
136	právní	právní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	137	amod	_	_
137	předpis	předpis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	126	nsubj	_	SpaceAfter=No
138	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


