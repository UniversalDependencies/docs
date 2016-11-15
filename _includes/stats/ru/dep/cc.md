

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

2884 nodes (3%) are attached to their parents as `cc`.

2823 instances of `cc` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.38210818307906.

The following 22 pairs of parts of speech are connected with `cc`: [ru-pos/NOUN]()-[ru-pos/CONJ]() (1251; 43% instances), [ru-pos/VERB]()-[ru-pos/CONJ]() (848; 29% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (349; 12% instances), [ru-pos/PROPN]()-[ru-pos/CONJ]() (315; 11% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (36; 1% instances), [ru-pos/NUM]()-[ru-pos/CONJ]() (27; 1% instances), [ru-pos/ADP]()-[ru-pos/CONJ]() (11; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (9; 0% instances), [ru-pos/DET]()-[ru-pos/CONJ]() (7; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (5; 0% instances), [ru-pos/PRON]()-[ru-pos/CONJ]() (5; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (5; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (4; 0% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PUNCT]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cc	color:blue
1	О	О	ADP	IN	_	0	root	_	_
2	лечении	ЛЕЧЕНИЕ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	1	nmod	_	_
3	и	И	CONJ	CC	_	2	cc	_	_
4	профилактике	ПРОФИЛАКТИКА	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	conj	_	_
5	в	В	ADP	IN	_	6	case	_	_
6	статье	СТАТЬЯ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	_
7	неврит	НЕВРИТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 cc	color:blue
1	В	В	ADP	IN	_	3	case	_	_
2	1994	1994	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	amod	_	_
3	году	ГОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	_
4	были	БЫТЬ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	5	auxpass	_	_
5	проведены	ПРОВЕСТИ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
6	раскопки	РАСКОПКА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	5	nsubjpass	_	_
7	и	И	CONJ	CC	_	5	cc	_	_
8	обнаружен	ОБНАРУЖИТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	5	conj	_	_
9	фундамент	ФУНДАМЕНТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubjpass	_	_
10	храма	ХРАМ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Учился	УЧИТЬСЯ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	в	В	ADP	IN	_	6	case	_	_
3	Гёттингенском	ГЕТТИНГЕНСКИЙ	ADJ	JJL	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Variant=Full	6	amod	_	_
4	и	И	CONJ	CC	_	3	cc	_	_
5	Лейпцигском	ЛЕЙПЦИГСКИЙ	ADJ	JJL	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Variant=Full	3	conj	_	_
6	университетах	УНИВЕРСИТЕТ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	1	nmod	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

42046 nodes (4%) are attached to their parents as `cc`.

33805 instances of `cc` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.49027255862627.

The following 24 pairs of parts of speech are connected with `cc`: [ru-pos/VERB]()-[ru-pos/CONJ]() (15018; 36% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (13831; 33% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (4885; 12% instances), [ru-pos/PROPN]()-[ru-pos/CONJ]() (1892; 4% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (1776; 4% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (1337; 3% instances), [ru-pos/ADJ]()-[ru-pos/SCONJ]() (863; 2% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (761; 2% instances), [ru-pos/ADV]()-[ru-pos/SCONJ]() (573; 1% instances), [ru-pos/PRON]()-[ru-pos/CONJ]() (320; 1% instances), [ru-pos/SCONJ]()-[ru-pos/SCONJ]() (181; 0% instances), [ru-pos/NUM]()-[ru-pos/CONJ]() (156; 0% instances), [ru-pos/PRON]()-[ru-pos/SCONJ]() (148; 0% instances), [ru-pos/PROPN]()-[ru-pos/SCONJ]() (93; 0% instances), [ru-pos/SCONJ]()-[ru-pos/CONJ]() (69; 0% instances), [ru-pos/PART]()-[ru-pos/CONJ]() (43; 0% instances), [ru-pos/SYM]()-[ru-pos/CONJ]() (33; 0% instances), [ru-pos/CONJ]()-[ru-pos/CONJ]() (25; 0% instances), [ru-pos/X]()-[ru-pos/CONJ]() (14; 0% instances), [ru-pos/PART]()-[ru-pos/SCONJ]() (12; 0% instances), [ru-pos/NUM]()-[ru-pos/SCONJ]() (6; 0% instances), [ru-pos/CONJ]()-[ru-pos/SCONJ]() (4; 0% instances), [ru-pos/INTJ]()-[ru-pos/CONJ]() (3; 0% instances), [ru-pos/SYM]()-[ru-pos/SCONJ]() (3; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 cc	color:blue
1	Алгоритм	алгоритм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	может	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf	4	auxpass	_	_
4	записан	записывать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	2	xcomp	_	_
5	словами	слово	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	4	nmod	_	_
6	и	и	CONJ	_	_	4	cc	_	_
7	изображён	изображать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	4	conj	_	_
8	схематически	схематически	ADV	_	Degree=Pos	7	advmod	_	_
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Наличие	наличие	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	исходных	исходный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	3	amod	_	_
3	данных	данные	NOUN	_	Animacy=Inan|Case=Gen|Number=Plur	1	nmod	_	_
4	и	и	CONJ	_	_	3	cc	_	_
5	некоторого	некоторый	DET	_	Case=Gen|Gender=Masc|Number=Sing	6	det	_	_
6	результата	результат	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	conj	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	История	история	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	-	-	PUNCT	-	_	1	punct	_	_
3	памятные	памятный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	4	amod	_	_
4	даты	дата	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	1	parataxis	_	_
5	мирового	мировой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
6	и	и	CONJ	_	_	5	cc	_	_
7	российского	российский	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	_
8	альпинизма	альпинизм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


