

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

17787 nodes (18%) are attached to their parents as `punct`.

12607 instances of `punct` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.51368977343003.

The following 25 pairs of parts of speech are connected with `punct`: [ru-pos/VERB]()-[ru-pos/PUNCT]() (7434; 42% instances), [ru-pos/NOUN]()-[ru-pos/PUNCT]() (6103; 34% instances), [ru-pos/PROPN]()-[ru-pos/PUNCT]() (1957; 11% instances), [ru-pos/ADJ]()-[ru-pos/PUNCT]() (1223; 7% instances), [ru-pos/NUM]()-[ru-pos/PUNCT]() (329; 2% instances), [ru-pos/ADV]()-[ru-pos/PUNCT]() (275; 2% instances), [ru-pos/ADP]()-[ru-pos/PUNCT]() (225; 1% instances), [ru-pos/PRON]()-[ru-pos/PUNCT]() (59; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (46; 0% instances), [ru-pos/SYM]()-[ru-pos/PUNCT]() (46; 0% instances), [ru-pos/CONJ]()-[ru-pos/PUNCT]() (16; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PUNCT]() (14; 0% instances), [ru-pos/SYM]()-[ru-pos/SYM]() (11; 0% instances), [ru-pos/PROPN]()-[ru-pos/SYM]() (10; 0% instances), [ru-pos/ADV]()-[ru-pos/SYM]() (9; 0% instances), [ru-pos/NUM]()-[ru-pos/SYM]() (9; 0% instances), [ru-pos/DET]()-[ru-pos/PUNCT]() (6; 0% instances), [ru-pos/PART]()-[ru-pos/PUNCT]() (4; 0% instances), [ru-pos/CONJ]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PUNCT]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/X]()-[ru-pos/PUNCT]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 punct	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 punct	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	Сено	СЕНО	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
2	(	(	PUNCT	(	_	1	punct	_	_
3	)	)	PUNCT	)	_	1	punct	_	_
4	--	--	PUNCT	--	_	5	punct	_	_
5	одна	ОДИН	NUM	CD	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	из	ИЗ	ADP	IN	_	8	case	_	_
7	45	45	NUM	CD	Case=Gen	8	nummod	_	_
8	провинций	ПРОВИНЦИЯ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
9	Буркина	БУРКИНА	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	-	-	PUNCT	-	_	9	goeswith	_	_
11	Фасо	ФАСО	ADV	AFX	_	9	goeswith	_	_
12	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

195644 nodes (18%) are attached to their parents as `punct`.

178008 instances of `punct` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.38689660812496.

The following 17 pairs of parts of speech are connected with `punct`: [ru-pos/NOUN]()-[ru-pos/PUNCT]() (74927; 38% instances), [ru-pos/VERB]()-[ru-pos/PUNCT]() (60879; 31% instances), [ru-pos/ADJ]()-[ru-pos/PUNCT]() (19458; 10% instances), [ru-pos/PROPN]()-[ru-pos/PUNCT]() (15448; 8% instances), [ru-pos/ADV]()-[ru-pos/PUNCT]() (12556; 6% instances), [ru-pos/PRON]()-[ru-pos/PUNCT]() (3215; 2% instances), [ru-pos/NUM]()-[ru-pos/PUNCT]() (2443; 1% instances), [ru-pos/PART]()-[ru-pos/PUNCT]() (1978; 1% instances), [ru-pos/ADP]()-[ru-pos/PUNCT]() (1499; 1% instances), [ru-pos/CONJ]()-[ru-pos/PUNCT]() (1462; 1% instances), [ru-pos/SCONJ]()-[ru-pos/PUNCT]() (654; 0% instances), [ru-pos/X]()-[ru-pos/PUNCT]() (360; 0% instances), [ru-pos/DET]()-[ru-pos/PUNCT]() (298; 0% instances), [ru-pos/AUX]()-[ru-pos/PUNCT]() (185; 0% instances), [ru-pos/SYM]()-[ru-pos/PUNCT]() (166; 0% instances), [ru-pos/INTJ]()-[ru-pos/PUNCT]() (115; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	Определения	определение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
2	алгоритма	алгоритм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 punct	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
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


