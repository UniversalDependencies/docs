

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

962 nodes (1%) are attached to their parents as `iobj`.

808 instances of `iobj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03222453222453.

The following 24 pairs of parts of speech are connected with `iobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (578; 60% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (141; 15% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (83; 9% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (71; 7% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (32; 3% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (12; 1% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (9; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (8; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/AUX]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Жена	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	Дзодзуашвили	ДЗОДЗУАШВИЛИ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	приходится	ПРИХОДИТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	тетей	ТЕТЯ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	3	advmod	_	_
5	жене	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_
6	Владимира	ВЛАДИМИР	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	Гуцаева	ГУЦАЕВ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	flat	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Они	ОНИ	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	сказали	СКАЗАТЬ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	мне	Я	PRON	PRP	Case=Dat|Number=Sing|Person=1	2	iobj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	8	punct	_	_
5	что	ЧТО	SCONJ	IN	_	8	mark	_	_
6	им	ОНИ	PRON	PRP	Case=Dat|Number=Plur|Person=3	8	iobj	_	_
7	очень	ОЧЕНЬ	ADV	RB	_	8	advmod	_	_
8	понравилось	ПОНРАВИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	2	ccomp	_	_
9	мое	МОЙ	DET	PRP$	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Person=1	10	det	_	_
10	выступление	ВЫСТУПЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	Наиболее	НАИБОЛЕЕ	ADV	RBS	Degree=Sup	2	advmod	_	_
2	известный	ИЗВЕСТНЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	amod	_	_
3	русский	РУССКИЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	amod	_	_
4	перевод	ПЕРЕВОД	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
5	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	сделан	СДЕЛАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	Даниилом	ДАНИИЛ	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	iobj	_	_
8	Хармсом	ХАРМС	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	flat	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

1249 nodes (0%) are attached to their parents as `iobj`.

731 instances of `iobj` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.11609287429944.

The following 32 pairs of parts of speech are connected with `iobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (693; 55% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (215; 17% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (58; 5% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (54; 4% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (40; 3% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (36; 3% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (36; 3% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (33; 3% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (31; 2% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/DET]() (6; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	Например	например	ADV	_	Degree=Pos	6	parataxis	6:parataxis	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	для	для	ADP	_	_	4	case	4:case	_
4	описания	описание	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	iobj	6:iobj	_
5	алгоритма	алгоритм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod	_
6	применяются	применять	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
7	блок-схемы	блок-схема	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj:pass	6:nsubj:pass	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 iobj	color:blue
1	-	-	PUNCT	_	_	2	punct	2:punct	_
2	Что	что	PRON	_	Case=Acc	5	obj	5:obj	_
3	для	для	ADP	_	_	4	case	4:case	_
4	вас	вы	PRON	_	Case=Gen|Number=Plur|Person=2	5	iobj	5:iobj	_
5	значит	значить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	название	название	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
7	картины	картина	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	nmod	6:nmod	_
8	-	-	PUNCT	_	_	7	punct	7:punct	_
9	"	"	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
10	Социальная	социальный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	11:amod	_
11	сеть	сеть	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	parataxis	6:parataxis	SpaceAfter=No
12	"	"	PUNCT	_	_	11	punct	11:punct	SpaceAfter=No
13	?	?	PUNCT	_	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Здесь	здесь	ADV	_	Degree=Pos	0	root	0:root	_
2	нам	мы	PRON	_	Case=Dat|Number=Plur|Person=1	1	iobj	1:iobj	_
3	и	и	CCONJ	_	_	7	cc	7:cc	_
4	шестиногость	шестиногость	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	nsubj	1:nsubj	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	и	и	CCONJ	_	_	7	cc	7:cc	_
7	многоголовость	многоголовость	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	conj	4:conj	SpaceAfter=No
8	!	!	PUNCT	_	_	7	punct	7:punct	_

~~~


