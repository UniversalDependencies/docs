

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

475 nodes (0%) are attached to their parents as `csubjpass`.

430 instances of `csubjpass` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.57684210526316.

The following 7 pairs of parts of speech are connected with `csubjpass`: [cs-pos/VERB]()-[cs-pos/VERB]() (422; 89% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (27; 6% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (21; 4% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubjpass	color:blue
1	Doporučuje	doporučovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	dokoupit	dokoupit	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	1	csubjpass	_	_
4	večeře	večeře	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	3	dobj	_	_
5	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	LId=za-1
6	1500	1500	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod	_	_
7	Kč	Kč	NOUN	NNFXX-----A----	Gender=Fem|Negative=Pos	6	nmod	_	_
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=na-1
9	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubjpass	color:blue
1	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=o-1
2	centrální	centrální	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	3	amod	_	_
3	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	6	dobj	_	_
4	tepla	teplo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	3	nmod	_	LId=teplo-1
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
6	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	_	_
8	že	že	SCONJ	J,-------------	_	10	mark	_	_
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	nejefektivnější	efektivní	ADJ	AAFS1----3A----	Case=Nom|Degree=Sup|Gender=Fem|Negative=Pos|Number=Sing	6	csubjpass	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubjpass	color:blue
1	Ukazuje	ukazovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	SpaceAfter=No|LGloss=(zvr._zájmeno/částice)
3	,	,	PUNCT	Z:-------------	_	9	punct	_	_
4	že	že	SCONJ	J,-------------	_	9	mark	_	_
5	luxovat	luxovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	9	csubj	_	_
6	a	a	CONJ	J^-------------	_	5	cc	_	LId=a-1
7	luxovat	luxovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	5	conj	_	_
8	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	rozdíl	rozdíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	1	csubjpass	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

171 nodes (0%) are attached to their parents as `csubjpass`.

167 instances of `csubjpass` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.77777777777778.

The following 6 pairs of parts of speech are connected with `csubjpass`: [cs-pos/VERB]()-[cs-pos/VERB]() (141; 82% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (13; 8% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (12; 7% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (3; 2% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (1; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubjpass	color:blue
1	Bartošovi	Bartoš	PROPN	NNMS3-----A---1	Animacy=Anim|Case=Dat|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	2	dobj	_	_
2	přikázáno	přikázat	VERB	VsNS---XX-AP---	Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	urychleně	urychleně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	4	advmod	_	LDeriv=urychlit
4	vyklidit	vyklidit	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	2	csubjpass	_	_
5	místnost	místnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	4	dobj	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubjpass	color:blue
1	Tvrdí	tvrdit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
3	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=o-1
4	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	1	dobj	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	že	že	SCONJ	J,-------------	_	10	mark	_	_
7	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	10	nmod	_	_
8	není	být	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
9	nic	nic	PRON	PW--1----------	Case=Nom|Negative=Neg|PronType=Neg	10	nsubj	_	_
10	svaté	svatý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	1	csubjpass	_	SpaceAfter=No|LId=svatý-1
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubjpass	color:blue
1	Později	pozdě	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	3	advmod	_	_
2	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	auxpass	_	_
3	prokázáno	prokázat	VERB	VsNS---XX-AP---	Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	9	punct	_	_
5	že	že	SCONJ	J,-------------	_	9	mark	_	_
6	atomové	atomový	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	7	amod	_	_
7	číslo	číslo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	9	nsubj	_	_
8	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	počet	počet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	3	csubjpass	_	_
10	protonů	proton	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	9	nmod	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=v-1
12	jádře	jádro	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

3 nodes (0%) are attached to their parents as `csubjpass`.

3 instances of `csubjpass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 2 pairs of parts of speech are connected with `csubjpass`: [cs-pos/VERB]()-[cs-pos/ADJ]() (2; 67% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (1; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 csubjpass	color:blue
1	(2)	(2)	PUNCT	Z:-------------	_	23	punct	_	_
2	Pokud	pokud	SCONJ	J,-------------	_	6	mark	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	auxpass:reflex	_	_
4	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=při-1
5	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	6	nmod	_	_
6	zjistí	zjistit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	12	punct	_	_
8	že	že	SCONJ	J,-------------	_	12	mark	_	_
9	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	12	nsubj	_	_
10	závazků	závazek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	9	nmod	_	_
11	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
12	vyšší	vysoký	ADJ	AANS1----2A----	Case=Nom|Degree=Cmp|Gender=Neut|Negative=Pos|Number=Sing	6	csubjpass	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	12	punct	_	_
14	popřípadě	popřípadě	ADV	Db-------------	_	12	cc	_	_
15	i	i	CONJ	J^-------------	_	16	advmod:emph	_	LId=i-1
16	nižší	nízký	ADJ	AAFS1----2A----	Case=Nom|Degree=Cmp|Gender=Fem|Negative=Pos|Number=Sing	12	conj	_	_
17	než	než	SCONJ	J,-------------	_	19	mark	_	LId=než-2
18	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	19	det	_	_
19	výše	výše	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	12	advcl	_	_
20	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	21	case	_	LId=v-1
21	účetnictví	účetnictví	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	19	nmod	_	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	6	punct	_	_
23	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
24	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	23	auxpass:reflex	_	_
25	závazky	závazek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	23	nsubjpass	_	_
26	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	27	case	_	LId=v-1
27	účetnictví	účetnictví	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	25	nmod	_	_
28	a	a	CONJ	J^-------------	_	27	cc	_	LId=a-1
29	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	31	case	_	LId=v-1
30	účetní	účetní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	31	amod	_	LId=účetní-1
31	závěrce	závěrka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	27	conj	_	_
32	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	35	case	_	LId=v-1
33	tomto	tento	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	35	det	_	_
34	zjištěném	zjištěný	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	35	amod	_	_
35	ocenění	ocenění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	23	nmod	_	SpaceAfter=No
36	.	.	PUNCT	Z:-------------	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 csubjpass	color:blue
1	Zohledněním	zohlednění	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Negative=Pos|Number=Sing	14	dobj	_	_
2	předpokládané	předpokládaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	_
3	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	_
4	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	1	nmod	_	_
5	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	4	nmod	_	_
6	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	_	LId=podle-2
7	věty	věta	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	14	nmod	_	_
8	druhé	druhý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	7	amod	_	LId=druhý-1
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	14	auxpass:reflex	_	_
10	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=pro-1
11	účely	účel	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	14	nmod	_	_
12	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	13	det	_	_
13	vyhlášky	vyhláška	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	11	nmod	_	_
14	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	19	punct	_	_
16	že	že	SCONJ	J,-------------	_	19	mark	_	_
17	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	18	amod	_	LId=účetní-1
18	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	19	nsubj	_	_
19	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	csubjpass	_	_
20	a	a	CONJ	J^-------------	_	19	cc	_	LId=a-1
21	aktualizuje	aktualizovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	_	_
22	odpisový	odpisový	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	23	amod	_	_
23	plán	plán	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	19	dobj	_	_
24	předmětného	předmětný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	25	amod	_	_
25	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	23	nmod	_	_
26	tak	tak	ADV	Db-------------	_	19	advmod	_	SpaceAfter=No|LId=tak-3
27	,	,	PUNCT	Z:-------------	_	48	punct	_	_
28	aby	aby	SCONJ	J,-------------	_	48	mark	_	_
29	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	48	aux	_	_
30	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	48	expl	_	_
31	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	33	case	_	LId=za-1
32	plánovanou	plánovaný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	33	amod	_	_
33	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	48	nmod	_	_
34	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	35	det	_	_
35	používání	používání	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	33	nmod	_	_
36	součet	součet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	48	nsubj	_	_
37	vykázaných	vykázaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	40	amod	_	_
38	a	a	CONJ	J^-------------	_	37	cc	_	LId=a-1
39	plánovaných	plánovaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	37	conj	_	_
40	odpisů	odpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Plur	36	nmod	_	_
41	včetně	včetně	ADP	RR--2----------	AdpType=Prep|Case=Gen	44	case	_	LId=včetně-2
42	předpokládané	předpokládaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	44	amod	_	_
43	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	44	amod	_	_
44	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	36	nmod	_	_
45	nebo	nebo	CONJ	J^-------------	_	44	cc	_	_
46	zbytkové	zbytkový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	47	amod	_	_
47	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	44	conj	_	_
48	rovnal	rovnat	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	19	advcl	_	_
49	ocenění	ocenění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	48	dobj	_	_
50	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	49	nmod	_	_
51	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	52	case	_	LId=podle-2
52	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	49	nmod	_	_
53	1	1	NUM	C}-------------	NumForm=Roman|NumType=Card	52	nummod	_	SpaceAfter=No
54	.	.	PUNCT	Z:-------------	_	14	punct	_	_

~~~


