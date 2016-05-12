

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

1079 nodes (1%) are attached to their parents as `iobj`.

896 instances of `iobj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04263206672845.

The following 25 pairs of parts of speech are connected with `iobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (640; 59% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (132; 12% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (98; 9% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (81; 8% instances), [ru-pos/VERB]()-[ru-pos/DET]() (39; 4% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (36; 3% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (11; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (7; 1% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (3; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/X]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj	color:blue
1	Новое	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	amod	_	_
2	название	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubjpass	_	_
3	поселению	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	5	iobj	_	_
4	было	_	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	5	auxpass	_	_
5	дано	_	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Voice=Pass	0	root	_	_
6	по	_	ADP	IN	_	7	case	_	_
7	речке	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	5	nmod	_	_
8	Пивка	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	appos	_	_
9	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Они	_	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	сказали	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
3	мне	_	PRON	PRP	Case=Dat|Number=Sing|Person=1	2	iobj	_	_
4	,	_	PUNCT	,	_	8	punct	_	_
5	что	_	SCONJ	IN	_	8	mark	_	_
6	им	_	PRON	PRP	Case=Dat|Number=Plur|Person=3	8	iobj	_	_
7	очень	_	ADV	RB	_	8	advmod	_	_
8	понравилось	_	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	2	ccomp	_	_
9	мое	_	PRON	PRP$	Case=Nom|Number=Sing|Person=1	10	det	_	_
10	выступление	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
11	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	Наиболее	_	ADV	RBS	_	2	advmod	_	_
2	известный	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	amod	_	_
3	русский	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	amod	_	_
4	перевод	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubjpass	_	_
5	был	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	6	auxpass	_	_
6	сделан	_	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Voice=Pass	0	root	_	_
7	Даниилом	_	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	iobj	_	_
8	Хармсом	_	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	name	_	_
9	.	_	PUNCT	.	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-Syntagrus)

This relation is universal.

2948 nodes (0%) are attached to their parents as `iobj`.

2474 instances of `iobj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2432157394844.

The following 10 pairs of parts of speech are connected with `iobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (2129; 72% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (468; 16% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (254; 9% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (31; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (27; 1% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (23; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (9; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	Например	НАПРИМЕР	ADV	_	Degree=Pos	6	parataxis	_	_
2	,	,	PUNCT	,	_	1	punct	_	_
3	для	ДЛЯ	ADP	_	_	4	case	_	_
4	описания	ОПИСАНИЕ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	iobj	_	_
5	алгоритма	АЛГОРИТМ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	dobj	_	_
6	применяются	ПРИМЕНЯТЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	блок-схемы	БЛОК-СХЕМА	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubjpass	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 iobj	color:blue
1	-	-	PUNCT	-	_	2	punct	_	_
2	серьезных	СЕРЬЕЗНЫЙ	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	3	amod	_	_
3	задач	ЗАДАЧА	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	12	nsubj	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	требующих	ТРЕБОВАТЬ	VERB	_	Aspect=Imp|Case=Gen|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	3	amod	_	_
6	возврата	ВОЗВРАТ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	dobj	_	_
7	грузов	ГРУЗ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	dobj	_	_
8	с	С	ADP	_	_	9	case	_	_
9	орбиты	ОРБИТА	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	iobj	_	_
10	,	,	PUNCT	,	_	9	punct	_	_
11	-	-	PUNCT	-	_	9	punct	_	_
12	нет	НЕТ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
13	;	;	PUNCT	;	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 iobj	color:blue
1	-	-	PUNCT	-	_	2	punct	_	_
2	Что	ЧТО	PRON	_	_	5	dobj	_	_
3	для	ДЛЯ	ADP	_	_	4	case	_	_
4	вас	ВЫ	PRON	_	_	5	iobj	_	_
5	значит	ЗНАЧИТЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	название	НАЗВАНИЕ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
7	картины	КАРТИНА	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	-	-	PUNCT	-	_	10	punct	_	_
9	"	"	PUNCT	"	_	10	punct	_	_
10	Социальная	СОЦИАЛЬНЫЙ	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
11	сеть	СЕТЬ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	parataxis	_	_
12	"	"	PUNCT	"	_	11	punct	_	_
13	?	?	PUNCT	?	_	5	punct	_	_

~~~


