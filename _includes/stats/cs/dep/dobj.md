

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

79473 nodes (5%) are attached to their parents as `dobj`.

54473 instances of `dobj` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71221672769368.

The following 46 pairs of parts of speech are connected with `dobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (56743; 71% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (13934; 18% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (3185; 4% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (2389; 3% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (839; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (721; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (551; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (370; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (280; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (111; 0% instances), [cs-pos/SYM]()-[cs-pos/NUM]() (68; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (44; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (33; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (25; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (18; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (16; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (14; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (14; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (13; 0% instances), [cs-pos/PUNCT]()-[cs-pos/NOUN]() (13; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (11; 0% instances), [cs-pos/PUNCT]()-[cs-pos/NUM]() (10; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (8; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (8; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (7; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (5; 0% instances), [cs-pos/ADV]()-[cs-pos/PROPN]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (4; 0% instances), [cs-pos/ADP]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/INTJ]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dobj	color:blue
1	Zvedněte	zvednout	VERB	Vi-P---2--A----	Mood=Imp|Negative=Pos|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
2	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	1	dobj	_	_
3	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
4	zavolejte	zavolat	VERB	Vi-P---2--A----	Aspect=Perf|Mood=Imp|Negative=Pos|Number=Plur|Person=2|VerbForm=Fin	1	conj	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 dobj	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	3	nsubj	_	_
2	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Negative=Pos|Number=Sing|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	dobj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dobj	color:blue
1	Moby	Moby	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	0	root	_	_
2	Dick	Dick	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	1	name	_	_
3	čeřící	čeřící	ADJ	AGMS1-----A----	Animacy=Anim|Aspect=Imp|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	1	amod	_	LDeriv=čeřit
4	vody	voda	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	3	dobj	_	_
5	hitparád	hitparáda	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	4	nmod	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

24883 nodes (5%) are attached to their parents as `dobj`.

18483 instances of `dobj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.70353253225093.

The following 36 pairs of parts of speech are connected with `dobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (18456; 74% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (3734; 15% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (1418; 6% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (261; 1% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (218; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (159; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (158; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (143; 1% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (90; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (56; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (56; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (34; 0% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (14; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (14; 0% instances), [cs-pos/SYM]()-[cs-pos/PRON]() (14; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (10; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (8; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (8; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (6; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (5; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/PART]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/INTJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dobj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dobj	color:blue
1	Významnou	významný	ADJ	AAFS7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	měrou	míra	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	5	nmod	_	LGloss=(měřítko,poměr)
3	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	4	case	_	LId=k-1
4	tomu	ten	PRON	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	dobj	_	_
5	přispělo	přispět	VERB	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	plnění	plnění	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	5	nsubj	_	LDeriv=plnit
7	direktiv	direktiva	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	6	nmod	_	_
8	#	&cother;	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	_	_
9	sjezdu	sjezd	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	_
10	KSČ	KSČ	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Negative=Pos	9	nmod	_	SpaceAfter=No|LId=KSČ-1|LGloss=(Komunistická_strana_Československa)
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 dobj	color:blue
1	Plavání	plavání	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	4	nsubj	_	LDeriv=plavat
2	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	všestranný	všestranný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	4	amod	_	_
4	sport	sport	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	který	který	PRON	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	8	nsubj	_	_
7	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	vhodný	vhodný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	4	acl	_	_
9	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=pro-1
10	každý	každý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	11	amod	_	_
11	věk	věk	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	8	dobj	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

1552 nodes (4%) are attached to their parents as `dobj`.

1200 instances of `dobj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.4194587628866.

The following 14 pairs of parts of speech are connected with `dobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (1115; 72% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (237; 15% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (110; 7% instances), [cs-pos/X]()-[cs-pos/NOUN]() (25; 2% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (19; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (12; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (11; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (9; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/X]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/ADJ]()-[cs-pos/X]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dobj	color:blue
1	Stanovená	stanovený	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	_
2	doba	doba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	3	nsubj	_	_
3	nesmí	smět	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	přesáhnout	přesáhnout	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	3	xcomp	_	_
5	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	6	amod	_	LId=účetní-1
6	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	4	dobj	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dobj	color:blue
1	Vymezení	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	0	root	_	_
2	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	1	nmod	_	_
3	souvisejících	související	ADJ	AGIP2-----A----	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	_
4	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	5	case	_	LId=s-1
5	pořízením	pořízení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	3	dobj	_	_
6	cenných	cenný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	7	amod	_	_
7	papírů	papír	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	_
8	a	a	CONJ	J^-------------	_	7	cc	_	LId=a-1
9	podílů	podíl	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	7	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dobj	color:blue
1	Termín	termín	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	5	dobj	_	_
2	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	inventarizace	inventarizace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	1	nmod	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	5	dobj	_	_
5	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	sama	sám	PRON	PLFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	8	xcomp	_	_
7	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	8	amod	_	LId=účetní-1
8	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	5	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


