

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

54 nodes (0%) are attached to their parents as `compound`.

54 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14814814814815.

The following 7 pairs of parts of speech are connected with `compound`: [ru-pos/NOUN]()-[ru-pos/NUM]() (45; 83% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (4; 7% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 2% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 2% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 2% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 2% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Выручка	ВЫРУЧКА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
2	компании	КОМПАНИЯ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
3	в	В	ADP	IN	_	4	case	_	_
4	2005	2005	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	nmod	_	_
5	составила	СОСТАВИТЬ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
6	€	€	SYM	SYM	_	5	obj	_	_
7	13,1	13,1	NUM	CD	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumType=Card	8	compound	_	_
8	млрд	МЛРД	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	nummod:gov	_	SpaceAfter=No
9	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Их	ИХ	DET	PRP$	Person=3	2	det	_	_
2	выступления	ВЫСТУПЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	3	nsubj	_	_
3	включали	ВКЛЮЧАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
4	в	В	ADP	IN	_	5	case	_	_
5	себя	СЕБЯ	PRON	PRP	Case=Acc|Reflex=Yes	3	obl	_	_
6	tribal	TRIBAL	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	amod	_	_
7	body	BODY	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	compound	_	_
8	paint	PAINT	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	_	_
10	танцы	ТАНЕЦ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	8	conj	_	_
11	с	С	ADP	IN	_	12	case	_	_
12	огнём	ОГОНЬ	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	10	nmod	_	_
13	и	И	CCONJ	CC	_	15	cc	_	_
14	fire	FIRE	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	nmod	_	_
15	breathing	BREATHING	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	conj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 compound	color:blue
1	Фотоаппаратов	ФОТОАППАРАТ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	14	obl	_	_
2	``	``	PUNCT	``	_	3	punct	_	SpaceAfter=No
3	Смена	СМЕНА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	appos	_	_
4	-	-	PUNCT	-	_	3	goeswith	_	_
5	Рапид	РАПИД	ADV	AFX	_	3	goeswith	_	_
6	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	9	punct	_	_
7	и	И	CCONJ	CC	_	9	cc	_	_
8	``	``	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	Смена	СМЕНА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	conj	_	_
10	-	-	PUNCT	-	_	9	goeswith	_	_
11	SL	SL	ADV	AFX	_	9	goeswith	_	_
12	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	9	punct	_	_
13	было	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	14	aux:pass	_	_
14	выпущено	ВЫПУСТИТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
15	597	597	NUM	CD	Case=Nom|NumType=Card	17	compound	_	_
16	тыс.	ТЫС.	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	17	compound	_	_
17	935	935	NUM	CD	Case=Nom|NumType=Card	18	nummod:gov	_	_
18	шт	ШТ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	14	nsubj:pass	_	SpaceAfter=No
19	.	.	PUNCT	.	_	14	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

835 nodes (0%) are attached to their parents as `compound`.

833 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95089820359281.

The following 17 pairs of parts of speech are connected with `compound`: [ru-pos/ADJ]()-[ru-pos/ADJ]() (526; 63% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (175; 21% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (56; 7% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (25; 3% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (15; 2% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (11; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (5; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/_]()-[ru-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound	color:blue
1	Комбинированные	комбинированный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	7	amod	7:amod	_
2	скально	скальный	ADJ	_	Degree=Pos	4	compound	4:compound	SpaceAfter=No
3	-	-	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No
4	снежно	снежный	ADJ	_	Degree=Pos	6	compound	6:compound	SpaceAfter=No
5	-	-	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
6	ледовые	ледовый	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	восхождения	восхождение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 compound	color:blue
1	Высокотехнологичный	высокотехнологичный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	пример	пример	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	-	-	PUNCT	_	_	2	punct	2:punct	_
4	онлайн	онлайн	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	compound	6:compound	SpaceAfter=No
5	-	-	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
6	аукцион	аукцион	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
7	eBay	ebay	PROPN	_	Foreign=Yes	6	flat:foreign	6:flat:foreign	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 compound	color:blue
1	Национальная	национальный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	безопасность	безопасность	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
3	и	и	CCONJ	_	_	4	cc	4:cc	_
4	революция	революция	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	conj	2:conj	_
5	в	в	ADP	_	_	6	case	6:case	_
6	организации	организация	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	nmod	4:nmod	_
7	ТВ	тв	PROPN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	compound	9:compound	SpaceAfter=No
8	-	-	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
9	вещания	вещание	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	nmod	6:nmod	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


