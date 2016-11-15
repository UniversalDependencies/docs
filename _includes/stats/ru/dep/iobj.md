

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

1069 nodes (1%) are attached to their parents as `iobj`.

891 instances of `iobj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04396632366698.

The following 24 pairs of parts of speech are connected with `iobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (637; 60% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (160; 15% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (98; 9% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (81; 8% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (36; 3% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (11; 1% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (10; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (9; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj	color:blue
1	Новое	НОВЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Variant=Full	2	amod	_	_
2	название	НАЗВАНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubjpass	_	_
3	поселению	ПОСЕЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	5	iobj	_	_
4	было	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	auxpass	_	_
5	дано	ДАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
6	по	ПО	ADP	IN	_	7	case	_	_
7	речке	РЕЧКА	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	5	nmod	_	_
8	Пивка	ПИВКА	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	appos	_	_
9	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Они	ОНИ	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	сказали	СКАЗАТЬ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	мне	Я	PRON	PRP	Case=Dat|Number=Sing|Person=1	2	iobj	_	_
4	,	,	PUNCT	,	_	8	punct	_	_
5	что	ЧТО	SCONJ	IN	_	8	mark	_	_
6	им	ОНИ	PRON	PRP	Case=Dat|Number=Plur|Person=3	8	iobj	_	_
7	очень	ОЧЕНЬ	ADV	RB	_	8	advmod	_	_
8	понравилось	ПОНРАВИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	ccomp	_	_
9	мое	МОЙ	DET	PRP$	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Person=1	10	det	_	_
10	выступление	ВЫСТУПЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	Наиболее	НАИБОЛЕЕ	ADV	RBS	Degree=Sup	2	advmod	_	_
2	известный	ИЗВЕСТНЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Variant=Full	4	amod	_	_
3	русский	РУССКИЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Variant=Full	4	amod	_	_
4	перевод	ПЕРЕВОД	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubjpass	_	_
5	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	auxpass	_	_
6	сделан	СДЕЛАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
7	Даниилом	ДАНИИЛ	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	iobj	_	_
8	Хармсом	ХАРМС	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	name	_	_
9	.	.	PUNCT	.	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

1542 nodes (0%) are attached to their parents as `iobj`.

966 instances of `iobj` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.12645914396887.

The following 25 pairs of parts of speech are connected with `iobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (908; 59% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (239; 15% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (65; 4% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (60; 4% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (57; 4% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (48; 3% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (39; 3% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (37; 2% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (26; 2% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (16; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (8; 1% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (7; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (5; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	Например	например	ADV	_	Degree=Pos	6	parataxis	_	_
2	,	,	PUNCT	,	_	1	punct	_	_
3	для	для	ADP	_	_	4	case	_	_
4	описания	описание	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	iobj	_	_
5	алгоритма	алгоритм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
6	применяются	применять	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	блок-схемы	блок-схема	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubjpass	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 iobj	color:blue
1	-	-	PUNCT	-	_	2	punct	_	_
2	Что	что	PRON	_	_	5	dobj	_	_
3	для	для	ADP	_	_	4	case	_	_
4	вас	вы	PRON	_	_	5	iobj	_	_
5	значит	значить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	название	название	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
7	картины	картина	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	-	-	PUNCT	-	_	10	punct	_	_
9	"	"	PUNCT	"	_	10	punct	_	_
10	Социальная	социальный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
11	сеть	сеть	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	parataxis	_	_
12	"	"	PUNCT	"	_	11	punct	_	_
13	?	?	PUNCT	?	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	В	в	ADP	_	_	3	case	_	_
2	следующем	следующий	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	году	год	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	nmod	_	_
4	у	у	ADP	_	_	5	case	_	_
5	Галилея	галилей	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	iobj	_	_
6	появился	появляться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	внук	внук	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	,	,	PUNCT	,	_	7	punct	_	_
9	названный	называть	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	amod	_	_
10	в	в	ADP	_	_	12	case	_	_
11	его	ЕГО	DET	_	_	12	det	_	_
12	честь	честь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	nmod	_	_
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


