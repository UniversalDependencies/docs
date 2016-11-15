

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

530 nodes (1%) are attached to their parents as `advcl`.

343 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.28867924528302.

The following 22 pairs of parts of speech are connected with `advcl`: [ru-pos/VERB]()-[ru-pos/VERB]() (419; 79% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (37; 7% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (28; 5% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (14; 3% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (5; 1% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (5; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (3; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
1	Они	ОНИ	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	вели	ВЕСТИ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	себя	СЕБЯ	PRON	PRP	Case=Acc|Reflex=Yes	2	dobj	_	_
4	,	,	PUNCT	,	_	2	punct	_	_
5	словно	СЛОВНО	SCONJ	IN	_	8	mark	_	_
6	оба	ОБА	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc	8	nsubj	_	_
7	не	НЕ	PART	NEG	_	8	neg	_	_
8	ожидали	ОЖИДАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	2	advcl	_	_
9	встретить	ВСТРЕТИТЬ	VERB	VB	Aspect=Perf|VerbForm=Inf	8	xcomp	_	_
10	друг	ДРУГ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	dobj	_	_
11	друга	ДРУГ	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	10	nmod	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advcl	color:blue
1	Как	КАК	SCONJ	IN	_	2	mark	_	_
2	понял	ПОНЯТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	advcl	_	_
3	Деворт	ДЕВОРТ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	,	,	PUNCT	,	_	2	punct	_	_
5	это	ЭТО	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
6	были	БЫТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	9	cop	_	_
7	те	ТОТ	DET	DT	Animacy=Inan|Case=Nom|Number=Plur	9	det	_	_
8	самые	САМЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Number=Plur|Variant=Full	9	amod	_	_
9	звуки	ЗВУК	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
10	,	,	PUNCT	,	_	9	punct	_	_
11	о	О	ADP	IN	_	12	case	_	_
12	которых	КОТОРЫЙ	PRON	AWP	Animacy=Inan|Case=Loc|Number=Plur	13	nmod	_	_
13	писал	ПИСАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	acl:relcl	_	_
14	Лебен	ЛЕБЕН	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
15	в	В	ADP	IN	_	16	case	_	_
16	дневнике	ДНЕВНИК	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	13	nmod	_	_
17	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	Голова	ГОЛОВА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	сверху	СВЕРХУ	ADV	RB	_	4	advmod	_	_
3	не	НЕ	PART	NEG	_	4	neg	_	_
4	видна	ВИДНЫЙ	ADJ	JJH	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Brev	0	root	_	_
5	,	,	PUNCT	,	_	8	punct	_	_
6	так	ТАК	SCONJ	IN	_	8	mark	_	_
7	как	КАК	ADV	WRB	_	6	mwe	_	_
8	прикрыта	ПРИКРЫТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	4	advcl	_	_
9	переднеспинкой	ПЕРЕДНЕСПИНКА	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	8	iobj	_	_
10	.	.	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

17052 nodes (2%) are attached to their parents as `advcl`.

12762 instances of `advcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.71985690828055.

The following 61 pairs of parts of speech are connected with `advcl`: [ru-pos/VERB]()-[ru-pos/VERB]() (9943; 58% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (2268; 13% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (1282; 8% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (830; 5% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (697; 4% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (529; 3% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (260; 2% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (225; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (166; 1% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (161; 1% instances), [ru-pos/SCONJ]()-[ru-pos/VERB]() (139; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (105; 1% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (64; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (63; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (41; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (36; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (34; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (25; 0% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (21; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADJ]() (20; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (18; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (16; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (11; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (9; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (8; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADV]() (8; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (7; 0% instances), [ru-pos/CONJ]()-[ru-pos/VERB]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (6; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (5; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/CONJ]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Донато	донато	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	установил	устанавливать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	что	SCONJ	_	_	6	mark	_	_
5	они	они	PRON	_	_	6	nsubjpass	_	_
6	сделаны	делать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	2	advcl	_	_
7	человеком	человек	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	nmod:agent	_	_
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	-	-	PUNCT	-	_	2	punct	_	_
2	Спасибо	спасибо	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	что	SCONJ	_	_	5	mark	_	_
5	перевез	перевозить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advcl	color:blue
1	Проснулся	просыпаться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	он	он	PRON	_	_	1	nsubj	_	_
3	рано	рано	ADV	_	Degree=Pos	1	advmod	_	_
4	и	и	CONJ	_	_	3	cc	_	_
5	таким	такой	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	свободным	свободный	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	conj	_	_
7	,	,	PUNCT	,	_	6	punct	_	_
8	что	что	SCONJ	_	_	10	mark	_	_
9	даже	даже	PART	_	_	10	advmod	_	_
10	растерялся	растериваться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


