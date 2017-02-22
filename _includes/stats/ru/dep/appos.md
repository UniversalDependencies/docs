

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

2500 nodes (3%) are attached to their parents as `appos`.

2487 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6488.

The following 45 pairs of parts of speech are connected with `appos`: [ru-pos/NOUN]()-[ru-pos/PROPN]() (1094; 44% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (783; 31% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (113; 5% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (90; 4% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (80; 3% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (73; 3% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (44; 2% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (26; 1% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (25; 1% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (20; 1% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (17; 1% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (16; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (13; 1% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (11; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (9; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (8; 0% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (7; 0% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (6; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (5; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (4; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADP]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	С	С	ADP	IN	_	2	case	_	_
2	ним	ОН	PRON	PRP	Case=Ins|Gender=Masc|Number=Sing|Person=3	3	obl	_	_
3	граничат	ГРАНИЧИТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	города	ГОРОД	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
5	Иидзука	ИИДЗУКА	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	_	_
7	Кама	КАМА	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	Всего	ВСЕГО	ADV	RB	_	2	advmod	_	_
2	скачано	СКАЧАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	содержания	СОДЕРЖАНИЕ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	obj	_	SpaceAfter=No
4	:	:	PUNCT	:	_	3	punct	_	_
5	207.022	207,022	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc|NumType=Card	6	nummod:gov	_	_
6	гигабайт	ГИГАБАЙТ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	appos	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 appos	color:blue
1	Родился	РОДИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
2	12	12	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	amod	_	_
3	июня	ИЮНЬ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	obl	_	_
4	1941	1941	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	amod	_	_
5	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
6	в	В	ADP	IN	_	7	case	_	_
7	Сальске	САЛЬСК	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	obl	_	_
8	(	(	PUNCT	(	_	10	punct	_	SpaceAfter=No
9	Ростовская	РОСТОВСКИЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	amod	_	_
10	область	ОБЛАСТЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	appos	_	SpaceAfter=No
11	)	)	PUNCT	)	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

7622 nodes (1%) are attached to their parents as `appos`.

7545 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.40501180792443.

The following 60 pairs of parts of speech are connected with `appos`: [ru-pos/NOUN]()-[ru-pos/PROPN]() (4629; 61% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1620; 21% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (412; 5% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (352; 5% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (115; 2% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (52; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (49; 1% instances), [ru-pos/PROPN]()-[ru-pos/PART]() (48; 1% instances), [ru-pos/X]()-[ru-pos/X]() (33; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (28; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (26; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (23; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (20; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (20; 0% instances), [ru-pos/PROPN]()-[ru-pos/X]() (20; 0% instances), [ru-pos/PRON]()-[ru-pos/PROPN]() (19; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (12; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (10; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (10; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (9; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (9; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (8; 0% instances), [ru-pos/X]()-[ru-pos/PROPN]() (7; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (6; 0% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (5; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PROPN]() (5; 0% instances), [ru-pos/_]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (4; 0% instances), [ru-pos/ADP]()-[ru-pos/PROPN]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/DET]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/X]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/_]()-[ru-pos/PROPN]() (3; 0% instances), [ru-pos/CCONJ]()-[ru-pos/CCONJ]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADP]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	Встречался	встречаться	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	0:root	_
2	также	также	ADV	_	Degree=Pos	3	advmod	3:advmod	_
3	вариант	вариант	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nsubj	1:nsubj	_
4	написания	написание	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	nmod	3:nmod	_
5	имени	имя	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nmod	4:nmod	_
6	Аргус	аргус	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	appos	3:appos	_
7	(	(	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
8	Argus	argus	PROPN	_	Foreign=Yes	6	flat:foreign	6:flat:foreign	SpaceAfter=No
9	)	)	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	-	-	PUNCT	_	_	2	punct	2:punct	_
2	Детерминированность	детерминированность	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
3	(	(	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
4	определённость	определенность	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	appos	2:appos	SpaceAfter=No
5	)	)	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 appos	color:blue
1	На	на	ADP	_	_	2	case	2:case	_
2	решение	решение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	obl	5:obl	_
3	этой	этот	DET	_	Case=Gen|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	задачи	задача	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	2	nmod	2:nmod	_
5	направлена	направлять	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	программа	программа	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
7	"	"	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
8	Фобос	фобос	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	appos	6:appos	_
9	Грунт	грунт	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	appos	8:appos	SpaceAfter=No
10	"	"	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


