

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

2561 nodes (3%) are attached to their parents as `cc`.

2453 instances of `cc` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1940648184303.

The following 23 pairs of parts of speech are connected with `cc`: [ru-pos/NOUN]()-[ru-pos/CCONJ]() (1038; 41% instances), [ru-pos/VERB]()-[ru-pos/CCONJ]() (734; 29% instances), [ru-pos/ADJ]()-[ru-pos/CCONJ]() (313; 12% instances), [ru-pos/PROPN]()-[ru-pos/CCONJ]() (246; 10% instances), [ru-pos/ADP]()-[ru-pos/CCONJ]() (106; 4% instances), [ru-pos/ADV]()-[ru-pos/CCONJ]() (59; 2% instances), [ru-pos/NUM]()-[ru-pos/CCONJ]() (26; 1% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (7; 0% instances), [ru-pos/DET]()-[ru-pos/CCONJ]() (6; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/CCONJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PUNCT]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	Провёл	ПРОВЕСТИ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	полтора	ПОЛТОРА	NUM	CD	Case=Acc|Gender=Masc|NumType=Card	3	nummod:gov	_	_
3	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	obl	_	_
4	в	В	ADP	IN	_	5	case	_	_
5	Риме	РИМ	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	obl	_	_
6	и	И	CCONJ	CC	_	9	cc	_	_
7	других	ДРУГОЙ	ADJ	JJL	Animacy=Inan|Case=Loc|Number=Plur	9	amod	_	_
8	европейских	ЕВРОПЕЙСКИЙ	ADJ	JJL	Animacy=Inan|Case=Loc|Number=Plur	9	amod	_	_
9	городах	ГОРОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	В	В	ADP	IN	_	3	case	_	_
2	1994	1994	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	amod	_	_
3	году	ГОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
4	были	БЫТЬ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	проведены	ПРОВЕСТИ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	раскопки	РАСКОПКА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	5	nsubj:pass	_	_
7	и	И	CCONJ	CC	_	8	cc	_	_
8	обнаружен	ОБНАРУЖИТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	5	conj	_	_
9	фундамент	ФУНДАМЕНТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	_	_
10	храма	ХРАМ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Вышивки	ВЫШИВКА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
2	Полесья	ПОЛЕСЬЕ	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_
3	--	--	PUNCT	--	_	4	punct	_	_
4	простые	ПРОСТОЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Number=Plur	0	root	_	_
5	и	И	CCONJ	CC	_	6	cc	_	_
6	четкие	ЧЕТКИЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Number=Plur	4	conj	_	_
7	по	ПО	ADP	IN	_	8	case	_	_
8	композиции	КОМПОЗИЦИЯ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

40614 nodes (4%) are attached to their parents as `cc`.

37556 instances of `cc` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.07893829713892.

The following 50 pairs of parts of speech are connected with `cc`: [ru-pos/VERB]()-[ru-pos/CCONJ]() (13488; 33% instances), [ru-pos/NOUN]()-[ru-pos/CCONJ]() (12548; 31% instances), [ru-pos/ADJ]()-[ru-pos/CCONJ]() (4382; 11% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (2581; 6% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (1837; 5% instances), [ru-pos/ADV]()-[ru-pos/CCONJ]() (1480; 4% instances), [ru-pos/PROPN]()-[ru-pos/CCONJ]() (1462; 4% instances), [ru-pos/ADJ]()-[ru-pos/SCONJ]() (570; 1% instances), [ru-pos/PRON]()-[ru-pos/CCONJ]() (534; 1% instances), [ru-pos/PRON]()-[ru-pos/SCONJ]() (357; 1% instances), [ru-pos/ADV]()-[ru-pos/SCONJ]() (242; 1% instances), [ru-pos/PROPN]()-[ru-pos/SCONJ]() (208; 1% instances), [ru-pos/NUM]()-[ru-pos/CCONJ]() (187; 0% instances), [ru-pos/DET]()-[ru-pos/CCONJ]() (170; 0% instances), [ru-pos/CCONJ]()-[ru-pos/CCONJ]() (143; 0% instances), [ru-pos/DET]()-[ru-pos/SCONJ]() (75; 0% instances), [ru-pos/PART]()-[ru-pos/CCONJ]() (58; 0% instances), [ru-pos/CCONJ]()-[ru-pos/SCONJ]() (43; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (43; 0% instances), [ru-pos/ADP]()-[ru-pos/CCONJ]() (42; 0% instances), [ru-pos/NUM]()-[ru-pos/SCONJ]() (21; 0% instances), [ru-pos/PUNCT]()-[ru-pos/CCONJ]() (15; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (15; 0% instances), [ru-pos/X]()-[ru-pos/CCONJ]() (15; 0% instances), [ru-pos/_]()-[ru-pos/CCONJ]() (15; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (14; 0% instances), [ru-pos/PART]()-[ru-pos/SCONJ]() (13; 0% instances), [ru-pos/SCONJ]()-[ru-pos/SCONJ]() (9; 0% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (6; 0% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/PUNCT]()-[ru-pos/SCONJ]() (5; 0% instances), [ru-pos/INTJ]()-[ru-pos/CCONJ]() (4; 0% instances), [ru-pos/ADP]()-[ru-pos/SCONJ]() (3; 0% instances), [ru-pos/_]()-[ru-pos/SCONJ]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/ADP]() (2; 0% instances), [ru-pos/AUX]()-[ru-pos/CCONJ]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/X]()-[ru-pos/SCONJ]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	И	и	CCONJ	_	_	6	cc	6:cc	_
2	все	весь	DET	_	Case=Nom|Number=Plur	3	amod	3:amod	_
3	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	6	nsubj	6:nsubj	_
4	в	в	ADP	_	_	5	case	5:case	_
5	названии	название	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	6	obl	6:obl	_
6	имели	иметь	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	слово	слово	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	obj	6:obj	_
8	algoritmi	algoritmi	X	_	Foreign=Yes	7	flat:foreign	7:flat:foreign	_
9	или	или	CCONJ	_	_	10	cc	10:cc	_
10	algorismi	algorismi	X	_	Foreign=Yes	8	flat:foreign	8:flat:foreign	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Наличие	наличие	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	_
2	исходных	исходный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	3	amod	3:amod	_
3	данных	данные	NOUN	_	Animacy=Inan|Case=Gen|Number=Plur	1	nmod	1:nmod	_
4	и	и	CCONJ	_	_	6	cc	6:cc	_
5	некоторого	некоторый	DET	_	Case=Gen|Gender=Masc|Number=Sing	6	amod	6:amod	_
6	результата	результат	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	conj	3:conj	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	История	история	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	-	-	PUNCT	_	_	1	punct	1:punct	_
3	памятные	памятный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	4	amod	4:amod	_
4	даты	дата	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	1	parataxis	1:parataxis	_
5	мирового	мировой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	_
6	и	и	CCONJ	_	_	7	cc	7:cc	_
7	российского	российский	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	conj	5:conj	_
8	альпинизма	альпинизм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


