

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

11088 nodes (1%) are attached to their parents as `ccomp`.

8913 instances of `ccomp` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.69255050505051.

The following 29 pairs of parts of speech are connected with `ccomp`: [cs-pos/VERB]()-[cs-pos/VERB]() (9206; 83% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (930; 8% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (626; 6% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (89; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (89; 1% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (31; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (24; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (21; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (19; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (9; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (7; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (6; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/INTJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	LId=na-1
2	požádání	požádání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	5	nmod	_	LDeriv=požádat
3	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(mít_možnost_[něco_dělat])
4	být	být	AUX	Vf--------A----	Negative=Pos|VerbForm=Inf	5	auxpass	_	_
5	zaslán	zaslat	VERB	VsYS---XX-AP---	Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	3	ccomp	_	_
6	seznam	seznam	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	3	nsubj	_	_
7	firem	firma	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 ccomp	color:blue
1	A	a	CONJ	J^-------------	_	2	cc	_	LId=a-1
2	řekněme	říci	VERB	Vi-P---1--A----	Aspect=Perf|Mood=Imp|Negative=Pos|Number=Plur|Person=1|VerbForm=Fin	0	root	_	_
3	rovnou	rovnou	ADV	Db-------------	_	2	advmod	_	SpaceAfter=No|LGloss=(hned,_najednou)
4	,	,	PUNCT	Z:-------------	_	10	punct	_	_
5	že	že	SCONJ	J,-------------	_	10	mark	_	_
6	chalupa	chalupa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	10	nsubj	_	_
7	našeho	můj	DET	PSZS2-P1-------	Case=Gen|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	8	det	_	LGloss=(přivlast.)
8	čtenáře	čtenář	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	problémová	problémový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 ccomp	color:blue
1	To	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	znamená	znamenat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	11	punct	_	_
4	že	že	SCONJ	J,-------------	_	11	mark	_	_
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	8	case	_	LId=v-1
6	vztahu	vztah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	5	mwe	_	_
7	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	mwe	_	LId=k-1
8	občanům	občan	NOUN	NNMP3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Negative=Pos|Number=Plur	11	nmod	_	_
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
10	veřejným	veřejný	ADJ	AAMS7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	11	amod	_	_
11	činitelem	činitel	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	2	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

1974 nodes (0%) are attached to their parents as `ccomp`.

1867 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.90476190476191.

The following 15 pairs of parts of speech are connected with `ccomp`: [cs-pos/VERB]()-[cs-pos/VERB]() (1636; 83% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (160; 8% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (113; 6% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (19; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (16; 1% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (16; 1% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Ve	v	ADP	RV--4----------	AdpType=Voc|Case=Acc	2	case	_	LId=v-1
2	čtyři	čtyři	NUM	ClXP4----------	Case=Acc|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	4	advmod	_	LNumValue=4
3	odpoledne	odpoledne	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	2	nmod	_	LId=odpoledne-2
4	ohlásil	ohlásit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	předseda	předseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	4	nsubj	_	_
6	družstva	družstvo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	9	punct	_	_
8	že	že	SCONJ	J,-------------	_	9	mark	_	_
9	padla	padnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|Tense=Past|VerbForm=Part|Voice=Act	4	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	Víme	vědět	VERB	VB-P---1P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	7	punct	_	_
3	že	že	SCONJ	J,-------------	_	7	mark	_	_
4	nadbytečné	nadbytečný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	5	amod	_	_
5	kilogramy	kilogram	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	7	nsubj	_	_
6	nejsou	být	VERB	VB-P---3P-NA---	Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	zdravé	zdravý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	1	ccomp	_	_
8	ani	ani	CONJ	J^-------------	_	7	cc	_	_
9	nesluší	slušet	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 ccomp	color:blue
1	Kdo	kdo	PRON	PKM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Int,Rel	6	nsubj	_	_
2	bude	být	VERB	VB-S---3F-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	cop	_	_
3	půl	půl	NUM	ClXS4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	4	nummod:gov	_	LId=půl-1
4	roku	rok	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	6	advmod	_	_
5	papírovým	papírový	ADJ	AAMS7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	6	amod	_	_
6	členem	člen	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	8	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	6	punct	_	_
8	vyškrtnout	vyškrtnout	VERB	Vf--------A----	Aspect=Perf|Negative=Pos|VerbForm=Inf	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This relation is universal.

61 nodes (0%) are attached to their parents as `ccomp`.

59 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.11475409836066.

The following 6 pairs of parts of speech are connected with `ccomp`: [cs-pos/VERB]()-[cs-pos/VERB]() (53; 87% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (4; 7% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (1; 2% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (1; 2% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (1; 2% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	amod	_	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	3	nsubj	_	_
3	zjišťuje	zjišťovat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	_	_
5	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
6	zajištění	zajištění	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	8	nsubj	_	_
7	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	efektivní	efektivní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Negative=Pos|Number=Sing	3	ccomp	_	_
9	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=na-1
10	počátku	počátek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	8	nmod	_	_
11	zajištění	zajištění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	10	nmod	_	_
12	a	a	CONJ	J^-------------	_	10	cc	_	LId=a-1
13	dále	dále	ADV	Db------------1	_	10	cc	_	LId=dále-3
14	nejméně	málo	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	16	advmod:emph	_	LId=málo-3
15	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	16	case	_	LId=k-1
16	okamžiku	okamžik	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Negative=Pos|Number=Sing	10	conj	_	_
17	sestavení	sestavení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	16	nmod	_	_
18	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	19	amod	_	LId=účetní-1
19	závěrky	závěrka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	Dále	dále	ADV	Db------------1	_	2	advmod	_	LId=dále-3
2	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	LId=účetní-1
4	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	2	nsubj	_	_
5	rozhodnout	rozhodnout	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	že	že	SCONJ	J,-------------	_	10	mark	_	_
8	dlouhodobým	dlouhodobý	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	10	amod	_	_
9	nehmotným	hmotný	ADJ	AAIS7----1N----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Neg|Number=Sing	10	amod	_	_
10	majetkem	majetek	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	5	ccomp	_	_
11	nejsou	být	VERB	VB-P---3P-NA---	Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
12	zejména	zejména	ADV	Db-------------	_	14	advmod:emph	_	_
13	technické	technický	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	14	amod	_	_
14	audity	audit	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	10	nsubj	_	_
15	a	a	CONJ	J^-------------	_	14	cc	_	LId=a-1
16	energetické	energetický	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	17	amod	_	_
17	audity	audit	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	14	conj	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	14	punct	_	_
19	lesní	lesní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	21	amod	_	_
20	hospodářské	hospodářský	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	21	amod	_	_
21	plány	plán	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	14	conj	_	_
22	a	a	CONJ	J^-------------	_	14	cc	_	LId=a-1
23	plány	plán	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	14	conj	_	_
24	povodí	povodí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	23	nmod	_	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


