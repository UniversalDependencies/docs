

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:numgov]().

601 nodes (0%) are attached to their parents as `det:nummod`.

554 instances of `det:nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55074875207987.

The following 9 pairs of parts of speech are connected with `det:nummod`: [cs-pos/NOUN]()-[cs-pos/DET]() (542; 90% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (27; 4% instances), [cs-pos/NUM]()-[cs-pos/DET]() (16; 3% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (7; 1% instances), [cs-pos/PROPN]()-[cs-pos/DET]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	mnoha	mnoho	DET	Ca--6----------	Case=Loc|NumType=Card|PronType=Dem,Ind	3	det:nummod	_	LId=mnoho-1
3	směrech	směr	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Plur	4	nmod	_	_
4	dochází	docházet	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	6	case	_	LId=k-1
6	obratu	obrat	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	4	dobj	_	SpaceAfter=No|LId=obrat-1|LGloss=(z_prodeje_zboží)
7	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 det:nummod	color:blue
1	Počítá	počítat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	i	i	CONJ	J^-------------	_	5	advmod:emph	_	LId=i-1
4	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	5	case	_	LId=s-1
5	snížením	snížení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	1	dobj	_	LDeriv=snížit
6	počtu	počet	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	5	nmod	_	_
7	pracovníků	pracovník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	6	nmod	_	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=o-1
9	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem,Ind	10	det:numgov	_	_
10	stovek	stovka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	5	det:nummod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:nummod	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	dopravují	dopravovat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	LId=na-1
5	vzdálenost	vzdálenost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	LDeriv=vzdálit
6	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Dem,Ind	7	det:nummod	_	_
7	tisíc	tisíc	NUM	ClXS2----------	Case=Gen|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	8	nummod:gov	_	LId=tisíc-1|LNumValue=1000
8	kilometrů	kilometr	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:numgov]().

200 nodes (0%) are attached to their parents as `det:nummod`.

188 instances of `det:nummod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49.

The following 4 pairs of parts of speech are connected with `det:nummod`: [cs-pos/NOUN]()-[cs-pos/DET]() (184; 92% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (10; 5% instances), [cs-pos/NUM]()-[cs-pos/DET]() (5; 3% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	Před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	_	LId=před-1
2	několika	několik	DET	Ca--7----------	Case=Ins|NumType=Card|PronType=Dem,Ind	3	det:nummod	_	_
3	dny	den	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	LGloss=(jednotka_času)
4	tu	tady	ADV	Db------------1	_	5	advmod	_	_
5	byl	být	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	tajemník	tajemník	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	10	nmod	_	_
7	OV	OV	PROPN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|NameType=Com|Negative=Pos	6	nmod	_	LId=OV-1|LGloss=(obvodní/okresní_výbor)
8	KSČ	KSČ	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	7	nmod	_	LId=KSČ-1|LGloss=(Komunistická_strana_Československa)
9	soudruh	soudruh	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	10	nmod	_	_
10	Veselý	Veselý	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	5	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 det:nummod	color:blue
1	Tento	tento	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	jev	jev	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	4	nsubj	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl	_	LGloss=(zvr._zájmeno/částice)
4	projevuje	projevovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	štěpením	štěpení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	4	nmod	_	LDeriv=štěpit
6	spektrálních	spektrální	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	7	amod	_	_
7	čar	čára	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	5	nmod	_	LGloss=(linie)
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=na-1
9	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem,Ind	10	det:numgov	_	_
10	složek	složka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	5	det:nummod	_	_
11	působením	působení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	5	nmod	_	LDeriv=působit
12	magnetického	magnetický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	13	amod	_	_
13	pole	pole	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 det:nummod	color:blue
1	Náš	můj	DET	PSYS1-P1-------	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	det	_	LGloss=(přivlast.)
2	podnik	podnik	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	12	nsubj	_	_
3	jako	jako	SCONJ	J,-------------	_	4	mark	_	_
4	jeden	jeden	NUM	ClYS1----------	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	2	xcomp	_	LNumValue=1
5	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	LId=z-1
6	mála	málo	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Dem,Ind	4	det:nummod	_	LId=málo-1|LGloss=(př._bez_mála_peněz)
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl	_	LGloss=(zvr._zájmeno/částice)
8	již	již	ADV	Db-------------	_	12	advmod	_	_
9	i	i	CONJ	J^-------------	_	10	advmod:emph	_	LId=i-1
10	touto	tento	DET	PDFS7----------	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	11	det	_	_
11	otázkou	otázka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	12	dobj	_	_
12	zabýval	zabývat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	12	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is a language-specific subtype of [det]().

1 nodes (0%) are attached to their parents as `det:nummod`.

1 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `det:nummod`: [cs-pos/NOUN]()-[cs-pos/DET]() (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 det:nummod	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	5	punct	_	_
2	Jednotlivý	jednotlivý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	4	amod	_	_
3	účetní	účetní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	4	amod	_	LId=účetní-1
4	záznam	záznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	5	nsubj	_	_
5	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	být	být	AUX	Vf--------A----	Negative=Pos|VerbForm=Inf	7	auxpass	_	_
7	tvořen	tvořit	VERB	VsYS---XX-AP---	Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	5	ccomp	_	_
8	několika	několik	DET	Ca--7----------	Case=Ins|NumType=Card|PronType=Dem,Ind	11	det:nummod	_	_
9	dílčími	dílčí	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	11	amod	_	_
10	účetními	účetní	ADJ	AAIP7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	11	amod	_	LId=účetní-1
11	záznamy	záznam	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Plur	7	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


