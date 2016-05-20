

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

22835 nodes (2%) are attached to their parents as `acl`.

22690 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.72599080359098.

The following 39 pairs of parts of speech are connected with `acl`: [cs-pos/NOUN]()-[cs-pos/VERB]() (16189; 71% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (2941; 13% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (1540; 7% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (741; 3% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (532; 2% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (187; 1% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (143; 1% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (102; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (88; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (84; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (78; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (43; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (26; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (24; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (24; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (19; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (11; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (10; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (9; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (7; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/DET]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/ADP]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/PRON]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Firma	firma	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	8	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	která	který	PRON	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	6	nsubj	_	_
4	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	6	nmod	_	LGloss=(zvr._zájmeno/částice)
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	dobj	_	LId=on-1|LGloss=(oni/ono)
6	vyžádá	vyžádat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	6	punct	_	_
8	platí	platit	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	pouze	pouze	ADV	Db-------------	_	10	advmod:emph	_	_
10	náklady	náklad	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	8	dobj	_	_
11	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	13	case	_	LId=na-1
12	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	13	det	_	LGloss=(přivlast.)
13	pobyt	pobyt	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	10	nmod	_	SpaceAfter=No|LGloss=(př._místo_pobytu)
14	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	to	ten	PRON	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
3	něco	něco	PRON	PZ--1----------	Case=Nom|PronType=Ind	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	_	_
5	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	7	dobj	_	LId=co-1
6	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	LGloss=(zvr._zájmeno/částice)
7	neseme	nést	VERB	VB-P---1P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	_	_
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	LId=v-1
9	podvědomí	podvědomí	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 acl	color:blue
1	K	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	2	case	_	LId=k-1
2	tomu	ten	PRON	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	5	advmod	_	_
3	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	4	aux	_	_
4	měl	mít	VERB	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	pomoci	pomoci	VERB	Vf--------A---1	Negative=Pos|VerbForm=Inf	4	xcomp	_	_
6	Mucha	Mucha	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Negative=Pos|Number=Sing	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	12	punct	_	_
8	který	který	PRON	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	12	nsubj	_	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl	_	LGloss=(zvr._zájmeno/částice)
10	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=po-1
11	letech	rok	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Negative=Pos|Number=Plur	12	nmod	_	_
12	vrátil	vrátit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	acl	_	_
13	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	14	case	_	LId=z-1
14	Zlína	Zlín	PROPN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Negative=Pos|Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

7360 nodes (1%) are attached to their parents as `acl`.

7321 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.73057065217391.

The following 37 pairs of parts of speech are connected with `acl`: [cs-pos/NOUN]()-[cs-pos/VERB]() (5423; 74% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (900; 12% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (297; 4% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (213; 3% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (150; 2% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (72; 1% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (53; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (35; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (34; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (34; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (28; 0% instances), [cs-pos/SYM]()-[cs-pos/VERB]() (22; 0% instances), [cs-pos/VERB]()-[cs-pos/VERB]() (22; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (10; 0% instances), [cs-pos/NOUN]()-[cs-pos/SYM]() (8; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (7; 0% instances), [cs-pos/SCONJ]()-[cs-pos/VERB]() (7; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (4; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (4; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (3; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (3; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PUNCT]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl	color:blue
1	Rozpracována	rozpracovat	VERB	VsQW---XX-AP---	Aspect=Perf|Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|VerbForm=Part|Voice=Pass	2	acl	_	_
2	technologie	technologie	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	_
3	a	a	CONJ	J^-------------	_	2	cc	_	LId=a-1
4	strojní	strojní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	5	amod	_	_
5	linka	linka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	2	conj	_	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=na-1
7	obsypy	obsyp	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Ještě	ještě	ADV	Db-------------	_	2	advmod	_	_
2	tvrdší	tvrdý	ADJ	AAIS1----2A----	Animacy=Inan|Case=Nom|Degree=Cmp|Gender=Masc|Negative=Pos|Number=Sing	0	root	_	_
3	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=o-1
4	to	ten	PRON	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	2	dep	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	_	_
6	aby	aby	SCONJ	J,-------------	_	10	mark	_	_
7	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	10	aux	_	_
8	zapsané	zapsaný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	9	amod	_	LDeriv=zapsat
9	požadavky	požadavek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	10	nsubj	_	_
10	nezůstaly	zůstat	VERB	VpTP---XR-NA---	Animacy=Inan|Gender=Fem,Masc|Negative=Neg|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	4	acl	_	_
11	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	LId=na-1
12	papíře	papír	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
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

635 nodes (2%) are attached to their parents as `acl`.

635 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.70393700787402.

The following 11 pairs of parts of speech are connected with `acl`: [cs-pos/NOUN]()-[cs-pos/VERB]() (506; 80% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (63; 10% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (39; 6% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (16; 3% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (4; 1% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/DET]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/X]()-[cs-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Negative=Pos|Number=Sing	9	nmod	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	že	že	SCONJ	J,-------------	_	6	mark	_	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	dobj	_	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	6	csubj	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	_	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	auxpass:reflex	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	13	amod	_	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	Účetním	účetní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	2	amod	_	LId=účetní-1
2	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	4	dobj	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	auxpass:reflex	_	_
4	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	data	datum	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Plur	4	nsubjpass	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	která	který	PRON	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	9	nsubj	_	_
8	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	5	acl	_	_
10	veškerých	veškerý	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	11	nmod	_	_
11	skutečností	skutečnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	9	nmod	_	_
12	týkajících	týkající	ADJ	AGFP2-----A----	Aspect=Imp|Case=Gen|Gender=Fem|Negative=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	_	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl	_	_
14	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	12	dobj	_	_
15	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Negative=Pos|Number=Sing	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl	color:blue
1	Tyto	tento	DET	PDFP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	2	det	_	_
2	povinnosti	povinnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	3	dobj	_	_
3	mají	mít	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	5	amod	_	LId=účetní-1
5	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	3	nsubj	_	_
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	_	_
9	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=po-1
10	kterou	který	PRON	P4FS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Int,Rel	12	advmod	_	_
11	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
12	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Negative=Pos|Number=Plur|Variant=Short	7	acl	_	_
13	vést	vést	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	12	xcomp	_	LId=vést-1
14	nebo	nebo	CONJ	J^-------------	_	13	cc	_	_
15	uschovávat	uschovávat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	13	conj	_	_
16	uvedené	uvedený	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	18	amod	_	_
17	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Negative=Pos|Number=Plur	18	amod	_	LId=účetní-1
18	záznamy	záznam	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Plur	13	dobj	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


