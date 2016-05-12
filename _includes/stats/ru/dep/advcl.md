

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

527 nodes (1%) are attached to their parents as `advcl`.

341 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.32068311195446.

The following 22 pairs of parts of speech are connected with `advcl`: [ru-pos/VERB]()-[ru-pos/VERB]() (419; 80% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (36; 7% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (27; 5% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (12; 2% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (5; 1% instances), [ru-pos/DET]()-[ru-pos/VERB]() (4; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (3; 1% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (3; 1% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (3; 1% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
1	Они	_	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	вели	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
3	себя	_	PRON	PRP	Case=Acc|Reflex=Yes	2	dobj	_	_
4	,	_	PUNCT	,	_	2	punct	_	_
5	словно	_	SCONJ	IN	_	8	mark	_	_
6	оба	_	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc	8	nsubj	_	_
7	не	_	PART	NEG	_	8	neg	_	_
8	ожидали	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	2	advcl	_	_
9	встретить	_	VERB	VB	Aspect=Perf	8	xcomp	_	_
10	друг	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	dobj	_	_
11	друга	_	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	10	nmod	_	_
12	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advcl	color:blue
1	Как	_	SCONJ	WRB	_	2	mark	_	_
2	понял	_	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	9	advcl	_	_
3	Деворт	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	,	_	PUNCT	,	_	2	punct	_	_
5	это	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
6	были	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	9	cop	_	_
7	те	_	DET	DT	Animacy=Inan|Case=Nom|Number=Plur	9	det	_	_
8	самые	_	ADJ	JJL	Animacy=Inan|Case=Nom|Number=Plur	9	amod	_	_
9	звуки	_	NOUN	NN	Animacy=Inan|Case=Nom|Number=Plur	0	root	_	_
10	,	_	PUNCT	,	_	9	punct	_	_
11	о	_	ADP	IN	_	12	case	_	_
12	которых	_	DET	WDT	Animacy=Inan|Case=Loc|Number=Plur	13	nmod	_	_
13	писал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	9	acl:relcl	_	_
14	Лебен	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
15	в	_	ADP	IN	_	16	case	_	_
16	дневнике	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	13	nmod	_	_
17	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	Голова	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	сверху	_	ADV	RB	_	4	advmod	_	_
3	не	_	PART	NEG	_	4	neg	_	_
4	видна	_	ADJ	JJH	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	,	_	PUNCT	,	_	8	punct	_	_
6	так	_	SCONJ	RB	_	8	mark	_	_
7	как	_	ADV	WRB	_	6	mwe	_	_
8	прикрыта	_	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Voice=Pass	4	advcl	_	_
9	переднеспинкой	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	8	iobj	_	_
10	.	_	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-Syntagrus)

This relation is universal.

16742 nodes (2%) are attached to their parents as `advcl`.

12514 instances of `advcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.68408792258989.

The following 54 pairs of parts of speech are connected with `advcl`: [ru-pos/VERB]()-[ru-pos/VERB]() (9711; 58% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (2233; 13% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (1244; 7% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (819; 5% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (690; 4% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (517; 3% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (285; 2% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (257; 2% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (169; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (167; 1% instances), [ru-pos/SCONJ]()-[ru-pos/VERB]() (132; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (108; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (67; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (64; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (42; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (40; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (34; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (27; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADJ]() (20; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (18; 0% instances), [ru-pos/CONJ]()-[ru-pos/VERB]() (11; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (11; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADV]() (8; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (7; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (6; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/CONJ]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (4; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Донато	ДОНАТО	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	установил	УСТАНАВЛИВАТЬ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	ЧТО	SCONJ	_	_	6	mark	_	_
5	они	ОНИ	PRON	_	_	6	nsubjpass	_	_
6	сделаны	ДЕЛАТЬ	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	2	advcl	_	_
7	человеком	ЧЕЛОВЕК	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	nmod:agent	_	_
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	-	-	PUNCT	-	_	2	punct	_	_
2	Спасибо	СПАСИБО	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	ЧТО	SCONJ	_	_	5	mark	_	_
5	перевез	ПЕРЕВОЗИТЬ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advcl	color:blue
1	Проснулся	ПРОСЫПАТЬСЯ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	он	ОН	PRON	_	_	1	nsubj	_	_
3	рано	РАНО	ADV	_	Degree=Pos	1	advmod	_	_
4	и	И	CONJ	_	_	3	cc	_	_
5	таким	ТАКОЙ	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	свободным	СВОБОДНЫЙ	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	conj	_	_
7	,	,	PUNCT	,	_	6	punct	_	_
8	что	ЧТО	SCONJ	_	_	10	mark	_	_
9	даже	ДАЖЕ	PART	_	_	10	advmod	_	_
10	растерялся	РАСТЕРИВАТЬСЯ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


