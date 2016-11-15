

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [acl]().

652 nodes (1%) are attached to their parents as `acl:relcl`.

650 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.20092024539877.

The following 20 pairs of parts of speech are connected with `acl:relcl`: [ru-pos/NOUN]()-[ru-pos/VERB]() (457; 70% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (57; 9% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (29; 4% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (26; 4% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (22; 3% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (21; 3% instances), [ru-pos/DET]()-[ru-pos/VERB]() (12; 2% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (6; 1% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (4; 1% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Учился	УЧИТЬСЯ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	в	В	ADP	IN	_	3	case	_	_
3	школе	ШКОЛА	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	1	nmod	_	_
4	No409	NO409	NUM	CD	Case=Nom	3	nummod:entity	_	_
5	,	,	PUNCT	,	_	7	punct	_	_
6	которую	КОТОРЫЙ	PRON	AWP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	dobj	_	_
7	закончил	ЗАКОНЧИТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
8	с	С	ADP	IN	_	10	case	_	_
9	золотой	ЗОЛОТОЙ	ADJ	JJL	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Variant=Full	10	amod	_	_
10	медалью	МЕДАЛЬ	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	7	nmod	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl:relcl	color:blue
1	Аминта	АМИНТА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	был	БЫТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	cop	_	_
3	сыном	СЫН	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
4	царя	ЦАРЬ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	галатов	ГАЛАТ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	_
6	и	И	CONJ	CC	_	4	cc	_	_
7	дочери	ДОЧЬ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	4	conj	_	_
8	Дейотара	ДЕЙОТАР	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	,	,	PUNCT	,	_	12	punct	_	_
10	которому	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	12	iobj	_	_
11	Аминта	АМИНТА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
12	наследовал	НАСЛЕДОВАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	acl:relcl	_	_
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Lidacris	LIDACRIS	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	поёт	ПЕТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	о	О	ADP	IN	_	4	case	_	_
4	том	ТО	PRON	DT	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	,	_	8	punct	_	_
6	что	ЧТО	SCONJ	IN	_	8	mark	_	_
7	он	ОН	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
8	бросил	БРОСИТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
9	школу	ШКОЛА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	dobj	_	_
10	в	В	ADP	IN	_	12	case	_	_
11	8	8	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	12	amod	_	_
12	классе	КЛАСС	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	nmod	_	_
13	.	.	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is a language-specific subtype of [acl]().

6839 nodes (1%) are attached to their parents as `acl:relcl`.

6833 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.43149583272408.

The following 35 pairs of parts of speech are connected with `acl:relcl`: [ru-pos/NOUN]()-[ru-pos/VERB]() (5251; 77% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (450; 7% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (373; 5% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (180; 3% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (175; 3% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (124; 2% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (106; 2% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (25; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (25; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (18; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (15; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (15; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (11; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (10; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (9; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (8; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (7; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/SYM]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	Он	он	PRON	_	_	2	nsubj	_	_
2	увидел	видеть	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	платформу	платформа	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	с	с	ADP	_	_	6	case	_	_
6	которой	который	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	nmod	_	_
7	словно	словно	PART	_	_	8	advmod	_	_
8	сдуло	сдувать	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
9	людей	человек	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	8	dobj	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Теперь	теперь	ADV	_	Degree=Pos	2	advmod	_	_
2	выделим	выделять	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
3	черты	черта	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	dobj	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	которые	который	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	6	nsubj	_	_
6	должны	должен	ADJ	_	Degree=Pos|Number=Plur|Variant=Brev	3	acl:relcl	_	_
7	насторожить	настораживать	VERB	_	Aspect=Perf|VerbForm=Inf	6	dep	_	_
8	биолога	биолог	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	7	dobj	_	_
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl:relcl	color:blue
1	Мы	мы	PRON	_	_	2	nsubj	_	_
2	потеряли	терять	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	"	"	PUNCT	"	_	4	punct	_	_
4	Марс	марс	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	_
5	-	-	PUNCT	-	_	4	punct	_	_
6	96	96	NUM	_	_	4	nummod	_	_
7	"	"	PUNCT	"	_	6	punct	_	_
8	,	,	PUNCT	,	_	6	punct	_	_
9	который	который	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	10	nsubjpass	_	_
10	создавался	создавать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	_
11	многие	многие	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	12	amod	_	_
12	годы	год	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	10	nmod	_	_
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


