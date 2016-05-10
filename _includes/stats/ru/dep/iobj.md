

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

17962 nodes (2%) are attached to their parents as `iobj`.

14361 instances of `iobj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.70409753924953.

The following 27 pairs of parts of speech are connected with `iobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (12160; 68% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (2517; 14% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (2347; 13% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (275; 2% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (220; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (129; 1% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (98; 1% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (83; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (40; 0% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (28; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (9; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (7; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (7; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (6; 0% instances), [ru-pos/NUM]()-[ru-pos/PRON]() (5; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (4; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (4; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 iobj	color:blue
1	Именно	ИМЕННО	PART	_	_	4	advmod	_	_
2	в	В	ADP	_	_	4	case	_	_
3	таком	ТАКОЙ	DET	_	Case=Loc|Gender=Neut|Number=Sing	4	amod	_	_
4	значении	ЗНАЧЕНИЕ	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	6	nmod	_	_
5	оно	ОНО	PRON	_	_	6	nsubj	_	_
6	вошло	ВХОДИТЬ	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	во	В	ADP	_	_	10	case	_	_
8	многие	МНОГИЕ	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	10	amod	_	_
9	европейские	ЕВРОПЕЙСКИЙ	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	10	amod	_	_
10	языки	ЯЗЫК	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	iobj	_	_
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	1811	1811	NUM	_	_	0	root	_	_
2	-	-	PUNCT	-	_	1	punct	_	_
3	Первое	ПЕРВЫЙ	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	_
4	восхождение	ВОСХОЖДЕНИЕ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	1	parataxis	_	_
5	на	НА	ADP	_	_	6	case	_	_
6	вершину	ВЕРШИНА	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	iobj	_	_
7	Юнгфрау	ЮНГФРАУ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	в	В	ADP	_	_	10	case	_	_
9	Бернских	БЕРНСКИЙ	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	10	amod	_	_
10	Альпах	АЛЬПЫ	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	6	nmod	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 iobj	color:blue
1	Лица	ЛИЦО	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	dobj	_	_
2	он	ОН	PRON	_	_	7	nsubj	_	_
3	ей	ОНА	PRON	_	_	7	iobj	_	_
4	так	ТАК	ADV	_	Degree=Pos	7	advmod	_	_
5	и	И	PART	_	_	4	mwe	_	_
6	не	НЕ	PART	_	_	7	neg	_	_
7	подобрал	ПОДБИРАТЬ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


