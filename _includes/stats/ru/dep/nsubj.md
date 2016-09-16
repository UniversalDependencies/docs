

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

4955 nodes (5%) are attached to their parents as `nsubj`.

3981 instances of `nsubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.15418768920283.

The following 46 pairs of parts of speech are connected with `nsubj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (2313; 47% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (669; 14% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (434; 9% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (427; 9% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (255; 5% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (243; 5% instances), [ru-pos/VERB]()-[ru-pos/DET]() (215; 4% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (70; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (43; 1% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (42; 1% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (35; 1% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (23; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (21; 0% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (20; 0% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (19; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (16; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (14; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (14; 0% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (8; 0% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (7; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (7; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (4; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/X]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/X]()-[ru-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nsubj	color:blue
1	С	_	ADP	IN	_	2	case	_	_
2	запада	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
3	к	_	ADP	IN	_	4	case	_	_
4	храму	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	5	nmod	_	_
5	примыкала	_	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
6	трапезная	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	amod	_	_
7	часть	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
8	с	_	ADP	IN	_	9	case	_	_
9	колокольней	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	7	nmod	_	_
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 nsubj	color:blue
1	Кассандра	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
2	,	_	PUNCT	,	_	5	punct	_	_
3	как	_	ADP	IN	_	5	case	_	_
4	и	_	X	UH	_	5	discourse	_	_
5	сестра	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	1	nmod	_	_
6	,	_	PUNCT	,	_	5	punct	_	_
7	замуж	_	ADV	RB	_	11	advmod	_	_
8	так	_	ADV	RB	_	11	advmod	_	_
9	и	_	X	UH	_	11	discourse	_	_
10	не	_	PART	NEG	_	11	neg	_	_
11	вышла	_	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj	color:blue
1	Палата	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
2	депутатов	_	NOUN	NN	Animacy=Anim|Case=Gen|Number=Plur	1	nmod	_	_
3	(	_	PUNCT	(	_	2	punct	_	_
4	)	_	PUNCT	)	_	2	punct	_	_
5	,	_	PUNCT	,	_	7	punct	_	_
6	нижняя	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	amod	_	_
7	палата	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
8	парламента	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	Чили	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	.	_	PUNCT	.	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

74945 nodes (7%) are attached to their parents as `nsubj`.

53094 instances of `nsubj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.78815131096137.

The following 59 pairs of parts of speech are connected with `nsubj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (38726; 52% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (12082; 16% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (5595; 7% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (4890; 7% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (2939; 4% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (2202; 3% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (1790; 2% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1670; 2% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (1230; 2% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (755; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (620; 1% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (398; 1% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (367; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (323; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (247; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (187; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (135; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (129; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (93; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (83; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (63; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (56; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (55; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (42; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (41; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (28; 0% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (22; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (21; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (20; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (18; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (17; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (17; 0% instances), [ru-pos/NUM]()-[ru-pos/PRON]() (16; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (8; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (8; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (7; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (5; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/PART]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/CONJ]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 nsubj	color:blue
1	Единого	ЕДИНЫЙ	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
2	"	"	PUNCT	"	_	3	punct	_	_
3	истинного	ИСТИННЫЙ	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
4	"	"	PUNCT	"	_	3	punct	_	_
5	определения	ОПРЕДЕЛЕНИЕ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	10	nsubj	_	_
6	понятия	ПОНЯТИЕ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	dobj	_	_
7	"	"	PUNCT	"	_	8	punct	_	_
8	алгоритм	АЛГОРИТМ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	_
9	"	"	PUNCT	"	_	8	punct	_	_
10	нет	НЕТ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
1	Именно	ИМЕННО	PART	_	_	4	advmod	_	_
2	в	В	ADP	_	_	4	case	_	_
3	таком	ТАКОЙ	DET	_	Case=Loc|Gender=Neut|Number=Sing	4	det	_	_
4	значении	ЗНАЧЕНИЕ	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	6	nmod	_	_
5	оно	ОНО	PRON	_	_	6	nsubj	_	_
6	вошло	ВХОДИТЬ	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	во	В	ADP	_	_	10	case	_	_
8	многие	МНОГИЕ	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	10	amod	_	_
9	европейские	ЕВРОПЕЙСКИЙ	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	10	amod	_	_
10	языки	ЯЗЫК	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	nmod	_	_
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Алгоритм	АЛГОРИТМ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	должен	ДОЛЖЕН	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Brev	0	root	_	_
3	быть	БЫТЬ	AUX	_	Aspect=Imp|VerbForm=Inf	4	cop	_	_
4	применим	ПРИМЕНИМЫЙ	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Brev	2	dobj	_	_
5	к	К	ADP	_	_	7	case	_	_
6	разным	РАЗНЫЙ	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	7	amod	_	_
7	наборам	НАБОР	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	4	dobj	_	_
8	исходных	ИСХОДНЫЙ	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	9	amod	_	_
9	данных	ДАННЫЕ	NOUN	_	Animacy=Inan|Case=Gen|Number=Plur	7	nmod	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


