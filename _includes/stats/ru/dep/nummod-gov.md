

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is a language-specific subtype of [nummod]().
There are also 1 other language-specific subtypes of `nummod`: [nummod:entity]().

1004 nodes (0%) are attached to their parents as `nummod:gov`.

796 instances of `nummod:gov` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79083665338645.

The following 8 pairs of parts of speech are connected with `nummod:gov`: [ru-pos/NOUN]()-[ru-pos/NOUN]() (797; 79% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (94; 9% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (76; 8% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (14; 1% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (13; 1% instances), [ru-pos/CONJ]()-[ru-pos/NOUN]() (7; 1% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Получилось	ПОЛУЧАТЬСЯ	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	около	ОКОЛО	ADP	_	_	5	case	_	_
3	16	16	NUM	_	_	4	compound	_	_
4	миллионов	МИЛЛИОН	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nummod:gov	_	_
5	рублей	РУБЛЬ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nummod:gov	color:blue
1	А	А	CONJ	_	_	5	cc	_	_
2	ежегодный	ЕЖЕГОДНЫЙ	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
3	бюджетный	БЮДЖЕТНЫЙ	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	дефицит	ДЕФИЦИТ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubjpass	_	_
5	исчисляется	ИСЧИСЛЯТЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
6	семью	СЕМЬ	NUM	_	Case=Ins	7	compound	_	_
7	миллионами	МИЛЛИОН	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	5	nummod:gov	_	_
8	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 nummod:gov	color:blue
1	На	НА	ADP	_	_	2	case	_	_
2	покупку	ПОКУПКА	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	nmod	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	следовательно	СЛЕДОВАТЕЛЬНО	ADV	_	Degree=Pos	6	parataxis	_	_
5	,	,	PUNCT	,	_	4	punct	_	_
6	уходит	УХОДИТЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	$	ДОЛЛАР-ЗНАК	SYM	_	_	6	nmod	_	_
8	150	150	NUM	_	_	11	compound	_	_
9	-	-	PUNCT	-	_	8	punct	_	_
10	250	250	NUM	_	_	8	nummod	_	_
11	тыс.	ТЫСЯЧА	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	7	nummod:gov	_	_
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


