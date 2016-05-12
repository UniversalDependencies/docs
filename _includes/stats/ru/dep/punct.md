

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

17791 nodes (18%) are attached to their parents as `punct`.

12606 instances of `punct` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.50744758585802.

The following 30 pairs of parts of speech are connected with `punct`: [ru-pos/VERB]()-[ru-pos/PUNCT]() (7421; 42% instances), [ru-pos/NOUN]()-[ru-pos/PUNCT]() (5974; 34% instances), [ru-pos/PROPN]()-[ru-pos/PUNCT]() (2087; 12% instances), [ru-pos/ADJ]()-[ru-pos/PUNCT]() (1217; 7% instances), [ru-pos/NUM]()-[ru-pos/PUNCT]() (320; 2% instances), [ru-pos/ADP]()-[ru-pos/PUNCT]() (229; 1% instances), [ru-pos/ADV]()-[ru-pos/PUNCT]() (204; 1% instances), [ru-pos/X]()-[ru-pos/PUNCT]() (109; 1% instances), [ru-pos/DET]()-[ru-pos/PUNCT]() (65; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (36; 0% instances), [ru-pos/SYM]()-[ru-pos/PUNCT]() (35; 0% instances), [ru-pos/X]()-[ru-pos/X]() (17; 0% instances), [ru-pos/CONJ]()-[ru-pos/PUNCT]() (15; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PUNCT]() (14; 0% instances), [ru-pos/PROPN]()-[ru-pos/SYM]() (9; 0% instances), [ru-pos/X]()-[ru-pos/SYM]() (9; 0% instances), [ru-pos/NUM]()-[ru-pos/SYM]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (4; 0% instances), [ru-pos/NUM]()-[ru-pos/X]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/PUNCT]() (3; 0% instances), [ru-pos/CONJ]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PUNCT]() (2; 0% instances), [ru-pos/SYM]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/X]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/X]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 punct	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 punct	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	Сено	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
2	(	_	PUNCT	(	_	1	punct	_	_
3	)	_	PUNCT	)	_	1	punct	_	_
4	--	_	PUNCT	-	_	5	punct	_	_
5	одна	_	NUM	CD	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	из	_	ADP	IN	_	8	case	_	_
7	45	_	NUM	CD	Case=Gen	8	nummod	_	_
8	провинций	_	NOUN	NN	Animacy=Inan|Case=Gen|Number=Plur	5	nmod	_	_
9	Буркина	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	-	_	PUNCT	-	_	9	goeswith	_	_
11	Фасо	_	X	AFX	_	9	goeswith	_	_
12	.	_	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

188918 nodes (18%) are attached to their parents as `punct`.

172474 instances of `punct` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.38917943234631.

The following 15 pairs of parts of speech are connected with `punct`: [ru-pos/NOUN]()-[ru-pos/PUNCT]() (86577; 46% instances), [ru-pos/VERB]()-[ru-pos/PUNCT]() (59427; 31% instances), [ru-pos/ADJ]()-[ru-pos/PUNCT]() (19185; 10% instances), [ru-pos/ADV]()-[ru-pos/PUNCT]() (12305; 7% instances), [ru-pos/PRON]()-[ru-pos/PUNCT]() (3176; 2% instances), [ru-pos/NUM]()-[ru-pos/PUNCT]() (2065; 1% instances), [ru-pos/PART]()-[ru-pos/PUNCT]() (1932; 1% instances), [ru-pos/CONJ]()-[ru-pos/PUNCT]() (1554; 1% instances), [ru-pos/ADP]()-[ru-pos/PUNCT]() (1431; 1% instances), [ru-pos/SCONJ]()-[ru-pos/PUNCT]() (519; 0% instances), [ru-pos/DET]()-[ru-pos/PUNCT]() (292; 0% instances), [ru-pos/AUX]()-[ru-pos/PUNCT]() (186; 0% instances), [ru-pos/SYM]()-[ru-pos/PUNCT]() (153; 0% instances), [ru-pos/INTJ]()-[ru-pos/PUNCT]() (115; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	Определения	ОПРЕДЕЛЕНИЕ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
2	алгоритма	АЛГОРИТМ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	dobj	_	_
3	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 punct	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
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


