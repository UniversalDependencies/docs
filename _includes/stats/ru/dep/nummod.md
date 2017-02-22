

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.
There are 1 language-specific subtypes of `nummod`: [nummod:gov]().

594 nodes (1%) are attached to their parents as `nummod`.

461 instances of `nummod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 15 pairs of parts of speech are connected with `nummod`: [ru-pos/NOUN]()-[ru-pos/NUM]() (487; 82% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (32; 5% instances), [ru-pos/SYM]()-[ru-pos/NUM]() (31; 5% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (9; 2% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (7; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (6; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (5; 1% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (5; 1% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (4; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/PUNCT]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Виновным	ВИНОВНЫЙ	ADJ	JJL	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
2	себя	СЕБЯ	PRON	PRP	Case=Acc|Reflex=Yes	1	obj	_	_
3	не	НЕ	PART	NEG	Polarity=Neg	1	advmod	_	_
4	признал	ПРИЗНАТЬ	AUX	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	1	cop	_	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	_	_
6	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	приговорён	ПРИГОВОРИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	parataxis	_	_
8	к	К	ADP	IN	_	10	case	_	_
9	пяти	ПЯТЬ	NUM	CD	Case=Dat|NumType=Card	10	nummod	_	_
10	годам	ГОД	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	7	obl	_	_
11	ссылки	ССЫЛКА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	Сериал	СЕРИАЛ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	продержался	ПРОДЕРЖАТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
3	три	ТРИ	NUM	CD	Animacy=Inan|Case=Acc|NumType=Card	4	nummod:gov	_	_
4	сезона	СЕЗОН	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl	_	_
5	и	И	CCONJ	CC	_	6	cc	_	_
6	транслировался	ТРАНСЛИРОВАТЬСЯ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	2	conj	_	_
7	каналом	КАНАЛ	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	iobj	_	_
8	Sat.	SAT.	PROPN	NNP	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	7	appos	_	_
9	1	1	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|NumType=Card	8	nummod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Температура	ТЕМПЕРАТУРА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
2	ее	ЕЕ	DET	PRP$	Person=3	1	det	_	_
3	летом	ЛЕТО	NOUN	RB	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	5	obl	_	_
4	не	НЕ	PART	NEG	Polarity=Neg	5	advmod	_	_
5	превышает	ПРЕВЫШАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	+	+	SYM	SYM	_	7	punct	_	_
7	15	15	NUM	CD	Case=Gen|NumType=Card	8	nummod	_	_
8	°	°	SYM	SYM	_	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.
There are 2 language-specific subtypes of `nummod`: [nummod:entity](), [nummod:gov]().

10232 nodes (1%) are attached to their parents as `nummod`.

7922 instances of `nummod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62881157154027.

The following 18 pairs of parts of speech are connected with `nummod`: [ru-pos/NOUN]()-[ru-pos/NUM]() (7967; 78% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (836; 8% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (832; 8% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (361; 4% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (106; 1% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (35; 0% instances), [ru-pos/_]()-[ru-pos/NUM]() (31; 0% instances), [ru-pos/ADP]()-[ru-pos/NUM]() (19; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NUM]() (16; 0% instances), [ru-pos/PRON]()-[ru-pos/NUM]() (6; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/CCONJ]()-[ru-pos/NUM]() (4; 0% instances), [ru-pos/PART]()-[ru-pos/NUM]() (4; 0% instances), [ru-pos/X]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Всего	всего	ADV	_	Degree=Pos	3	advmod	3:advmod	_
2	-	-	PUNCT	_	_	1	punct	1:punct	_
3	440	440	NUM	_	_	4	nummod	4:nummod	_
4	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	из	из	ADP	_	_	7	case	7:case	_
7	них	они	PRON	_	Case=Gen|Number=Plur|Person=3	11	advmod	11:advmod	_
8	-	-	PUNCT	_	_	7	punct	7:punct	_
9	160	160	NUM	_	_	11	nummod	11:nummod	_
10	иностранных	иностранный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	11	amod	11:amod	_
11	восходителей	восходитель	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	conj	4:conj	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Длина	длина	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
2	острова	остров	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
3	составляла	составлять	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	14	14	NUM	_	_	3	nummod	3:nummod	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	а	а	CCONJ	_	_	3	orphan	8.1:cc	_
7	ширина	ширина	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	orphan	8.1:nsubj	_
8	-	-	PUNCT	_	_	7	punct	7:punct	_
8.1	_	_	_	_	_	_	_	3:conj	_
9	5	5	NUM	_	_	10	nummod	10:nummod	_
10	километров	километр	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	orphan	8.1:nmod	SpaceAfter=No
11	"	"	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nummod	color:blue
1	23	23	NUM	_	_	6	nummod	6:nummod	_
2	января	январь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
3	2002	2002	NUM	_	_	4	nummod	4:nummod	_
4	года	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
5	не	не	PART	_	_	6	advmod	6:advmod	_
6	стало	стать	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	Пьера	пьер	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
8	Бурдье	бурдье	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	flat:name	7:flat:name	SpaceAfter=No
9	…	…	PUNCT	_	_	8	punct	8:punct	_

~~~


