

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

71393 nodes (5%) are attached to their parents as `obj`.

49131 instances of `obj` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74661381367921.

The following 48 pairs of parts of speech are connected with `obj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (48525; 68% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (6981; 10% instances), [cs-pos/VERB]()-[cs-pos/DET]() (5059; 7% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (4535; 6% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (2023; 3% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (1680; 2% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (731; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (493; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (372; 1% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (357; 1% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (215; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (99; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (86; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (39; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (24; 0% instances), [cs-pos/SYM]()-[cs-pos/NUM]() (23; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (22; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (13; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (12; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (11; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (11; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (7; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/PUNCT]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/ADV]()-[cs-pos/PROPN]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (4; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/PUNCT]()-[cs-pos/NUM]() (3; 0% instances), [cs-pos/ADP]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Zvedněte	zvednout	VERB	Vi-P---2--A----	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	obj	_	_
3	a	a	CCONJ	J^-------------	_	4	cc	_	LId=a-1
4	zavolejte	zavolat	VERB	Vi-P---2--A----	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	1	conj	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obj	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	_	_
2	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	_	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	obj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj	color:blue
1	Prodej	prodej	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj:pass	_	LGloss=(akt_prodeje_zboží)
2	či	či	CCONJ	J^-------------	_	3	cc	_	_
3	pronájem	pronájem	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	tedy	tedy	ADV	Db-------------	_	6	advmod	_	_
6	uskuteční	uskutečnit	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	dejme	dát	VERB	Vi-P---1--A----	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|VerbForm=Fin	6	dep	_	_
8	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	obj	_	_
9	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	12	case	_	LId=k-1
10	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	12	compound	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	_	_
12	3	3	NUM	C=-------------	NumForm=Digit|NumType=Card	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	12	punct	_	_
14	1994	1994	NUM	C=-------------	NumForm=Digit|NumType=Card	12	compound	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

24588 nodes (5%) are attached to their parents as `obj`.

18364 instances of `obj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.73405726370587.

The following 41 pairs of parts of speech are connected with `obj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (17169; 70% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (2171; 9% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (2138; 9% instances), [cs-pos/VERB]()-[cs-pos/DET]() (1414; 6% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (597; 2% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (187; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (163; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (156; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (149; 1% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (88; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (81; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (72; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (54; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (34; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (22; 0% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (15; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (14; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (12; 0% instances), [cs-pos/SYM]()-[cs-pos/PRON]() (10; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (5; 0% instances), [cs-pos/ADV]()-[cs-pos/DET]() (4; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (4; 0% instances), [cs-pos/SYM]()-[cs-pos/DET]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (3; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obj	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obj	color:blue
1	Upřesněný	upřesněný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	LDeriv=upřesnit
2	realizační	realizační	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	program	program	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	LId=program-1
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	zaměřen	zaměřený	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=na-1
7	tyto	tento	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	9	det	_	_
8	hlavní	hlavní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	9	amod	_	_
9	úkoly	úkol	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	5	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Vydá	vydat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=vydat-1|LGloss=(emitovat:_cenné_papíry,_knihu,_zvuk,...)
2	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	obj	_	_
3	MZVŽ	MZVŽ	PROPN	NNNXX-----A---8	Abbr=Yes|Gender=Neut|NameType=Com|Polarity=Pos	1	nsubj	_	SpaceAfter=No
4	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

1048 nodes (4%) are attached to their parents as `obj`.

833 instances of `obj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71469465648855.

The following 12 pairs of parts of speech are connected with `obj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (764; 73% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (161; 15% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (70; 7% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (13; 1% instances), [cs-pos/X]()-[cs-pos/NOUN]() (11; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (9; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (6; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/X]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Vymezení	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
2	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	_	_
3	souvisejících	související	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	_
4	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	LId=s-1
5	pořízením	pořízení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	3	obj	_	_
6	cenných	cenný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_
7	papírů	papír	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	_	_
8	a	a	CCONJ	J^-------------	_	9	cc	_	LId=a-1
9	podílů	podíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	7	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obj	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


