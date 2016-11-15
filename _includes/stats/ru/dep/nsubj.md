

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

4974 nodes (5%) are attached to their parents as `nsubj`.

3993 instances of `nsubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.15279453156413.

The following 45 pairs of parts of speech are connected with `nsubj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (2331; 47% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (672; 14% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (632; 13% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (437; 9% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (254; 5% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (241; 5% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (75; 2% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (72; 1% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (41; 1% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (41; 1% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (21; 0% instances), [ru-pos/VERB]()-[ru-pos/DET]() (20; 0% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (16; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (14; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (14; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (14; 0% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (9; 0% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (8; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (7; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (4; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nsubj	color:blue
1	С	С	ADP	IN	_	2	case	_	_
2	запада	ЗАПАД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
3	к	К	ADP	IN	_	4	case	_	_
4	храму	ХРАМ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	5	nmod	_	_
5	примыкала	ПРИМЫКАТЬ	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
6	трапезная	ТРАПЕЗНЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Full	7	amod	_	_
7	часть	ЧАСТЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
8	с	С	ADP	IN	_	9	case	_	_
9	колокольней	КОЛОКОЛЬНЯ	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 nsubj	color:blue
1	Кассандра	КАССАНДРА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
2	,	,	PUNCT	,	_	5	punct	_	_
3	как	КАК	ADP	IN	_	5	case	_	_
4	и	И	PART	UH	_	5	discourse	_	_
5	сестра	СЕСТРА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	1	nmod	_	_
6	,	,	PUNCT	,	_	5	punct	_	_
7	замуж	ЗАМУЖ	ADV	RB	_	11	advmod	_	_
8	так	ТАК	ADV	RB	_	11	advmod	_	_
9	и	И	PART	UH	_	11	discourse	_	_
10	не	НЕ	PART	NEG	_	11	neg	_	_
11	вышла	ВЫЙТИ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Он	ОН	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	``	``	PUNCT	``	_	3	punct	_	_
3	одет	ОДЕТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
4	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	3	punct	_	_
5	в	В	ADP	IN	_	8	case	_	_
6	голубой	ГОЛУБОЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Variant=Full	8	amod	_	_
7	механический	МЕХАНИЧЕСКИЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Variant=Full	8	amod	_	_
8	костюм	КОСТЮМ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	nmod	_	_
9	и	И	CONJ	CC	_	8	cc	_	_
10	шлем	ШЛЕМ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	conj	_	_
11	.	.	PUNCT	.	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

76912 nodes (7%) are attached to their parents as `nsubj`.

54417 instances of `nsubj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.80216351154566.

The following 79 pairs of parts of speech are connected with `nsubj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (35809; 47% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (12258; 16% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (5368; 7% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (4523; 6% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (4226; 5% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (2863; 4% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (2240; 3% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (1812; 2% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1706; 2% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (1248; 2% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (707; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (593; 1% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (389; 1% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (370; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (315; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (276; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (260; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (252; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (239; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (202; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (137; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (131; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (125; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (102; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (101; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (64; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (56; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (56; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (45; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (41; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (35; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (28; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (25; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (25; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (23; 0% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (22; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (21; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (20; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (20; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (17; 0% instances), [ru-pos/NUM]()-[ru-pos/PRON]() (17; 0% instances), [ru-pos/PRON]()-[ru-pos/PROPN]() (16; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (11; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (11; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (10; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (9; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (8; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (6; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (6; 0% instances), [ru-pos/PART]()-[ru-pos/PROPN]() (5; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/SCONJ]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (4; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/X]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/CONJ]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/X]()-[ru-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 nsubj	color:blue
1	Единого	единый	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
2	"	"	PUNCT	"	_	3	punct	_	_
3	истинного	истинный	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
4	"	"	PUNCT	"	_	3	punct	_	_
5	определения	определение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	10	nsubj	_	_
6	понятия	понятие	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	_
7	"	"	PUNCT	"	_	8	punct	_	_
8	алгоритм	алгоритм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	_
9	"	"	PUNCT	"	_	8	punct	_	_
10	нет	нет	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
1	Именно	именно	PART	_	_	4	advmod	_	_
2	в	в	ADP	_	_	4	case	_	_
3	таком	такой	DET	_	Case=Loc|Gender=Neut|Number=Sing	4	det	_	_
4	значении	значение	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	6	nmod	_	_
5	оно	оно	PRON	_	_	6	nsubj	_	_
6	вошло	входить	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	во	в	ADP	_	_	10	case	_	_
8	многие	многие	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	10	amod	_	_
9	европейские	европейский	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	10	amod	_	_
10	языки	язык	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	nmod	_	_
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Алгоритм	алгоритм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	должен	должен	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Brev	0	root	_	_
3	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf	4	cop	_	_
4	применим	применимый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Brev	2	nmod	_	_
5	к	к	ADP	_	_	7	case	_	_
6	разным	разный	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	7	amod	_	_
7	наборам	набор	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	4	nmod	_	_
8	исходных	исходный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	9	amod	_	_
9	данных	данные	NOUN	_	Animacy=Inan|Case=Gen|Number=Plur	7	nmod	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


