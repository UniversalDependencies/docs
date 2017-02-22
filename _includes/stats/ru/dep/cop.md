

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

487 nodes (1%) are attached to their parents as `cop`.

387 instances of `cop` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19507186858316.

The following 5 pairs of parts of speech are connected with `cop`: [ru-pos/NOUN]()-[ru-pos/AUX]() (321; 66% instances), [ru-pos/ADJ]()-[ru-pos/AUX]() (134; 28% instances), [ru-pos/NUM]()-[ru-pos/AUX]() (23; 5% instances), [ru-pos/ADV]()-[ru-pos/AUX]() (5; 1% instances), [ru-pos/PROPN]()-[ru-pos/AUX]() (4; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 cop	color:blue
1	Величиной	ВЕЛИЧИНА	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	обратной	ОБРАТНЫЙ	ADJ	JJL	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	amod	_	_
4	КПИ	КПИ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	является	ЯВЛЯТЬСЯ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	1	cop	_	_
7	энергоемкость	ЭНЕРГОЕМКОСТЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cop	color:blue
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
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 cop	color:blue
1	Из	ИЗ	ADP	IN	_	3	case	_	_
2	77	77	NUM	CD	Case=Gen|NumType=Card	3	nummod	_	_
3	активных	АКТИВНЫЙ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	obl	_	_
4	работали	РАБОТАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
5	75	75	NUM	CD	Case=Nom|NumType=Card	6	nummod:gov	_	_
6	человек	ЧЕЛОВЕК	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	nsubj	_	_
7	(	(	PUNCT	(	_	9	punct	_	SpaceAfter=No
8	37	37	NUM	CD	Case=Nom|NumType=Card	9	nummod:gov	_	_
9	мужчин	МУЖЧИНА	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	6	appos	_	_
10	и	И	CCONJ	CC	_	12	cc	_	_
11	38	38	NUM	CD	Case=Nom|NumType=Card	12	nummod:gov	_	_
12	женщин	ЖЕНЩИНА	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Fem|Number=Plur	9	conj	_	SpaceAfter=No
13	)	)	PUNCT	)	_	9	punct	_	SpaceAfter=No
14	,	,	PUNCT	,	_	4	punct	_	_
15	безработных	БЕЗРАБОТНЫЙ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	17	nmod	_	_
16	было	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	17	cop	_	_
17	2	2	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc|NumType=Card	4	parataxis	_	_
18	(	(	PUNCT	(	_	20	punct	_	SpaceAfter=No
19	1	1	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|NumType=Card	20	nummod	_	_
20	мужчина	МУЖЧИНА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	17	appos	_	_
21	и	И	CCONJ	CC	_	23	cc	_	_
22	1	1	NUM	CD	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing|NumType=Card	23	nummod	_	_
23	женщина	ЖЕНЩИНА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	20	conj	_	SpaceAfter=No
24	)	)	PUNCT	)	_	20	punct	_	SpaceAfter=No
25	.	.	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

6530 nodes (1%) are attached to their parents as `cop`.

4210 instances of `cop` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96339969372129.

The following 37 pairs of parts of speech are connected with `cop`: [ru-pos/ADJ]()-[ru-pos/AUX]() (1982; 30% instances), [ru-pos/NOUN]()-[ru-pos/AUX]() (1399; 21% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (956; 15% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (474; 7% instances), [ru-pos/ADV]()-[ru-pos/AUX]() (453; 7% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (338; 5% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (261; 4% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (113; 2% instances), [ru-pos/PRON]()-[ru-pos/AUX]() (110; 2% instances), [ru-pos/PROPN]()-[ru-pos/AUX]() (73; 1% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (65; 1% instances), [ru-pos/DET]()-[ru-pos/AUX]() (53; 1% instances), [ru-pos/VERB]()-[ru-pos/PART]() (37; 1% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (33; 1% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (29; 0% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (27; 0% instances), [ru-pos/PRON]()-[ru-pos/PART]() (26; 0% instances), [ru-pos/VERB]()-[ru-pos/AUX]() (21; 0% instances), [ru-pos/DET]()-[ru-pos/VERB]() (16; 0% instances), [ru-pos/PROPN]()-[ru-pos/PART]() (9; 0% instances), [ru-pos/AUX]()-[ru-pos/AUX]() (8; 0% instances), [ru-pos/NUM]()-[ru-pos/AUX]() (8; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (7; 0% instances), [ru-pos/DET]()-[ru-pos/PART]() (5; 0% instances), [ru-pos/ADV]()-[ru-pos/PART]() (4; 0% instances), [ru-pos/CCONJ]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/PART]() (3; 0% instances), [ru-pos/PART]()-[ru-pos/AUX]() (3; 0% instances), [ru-pos/ADP]()-[ru-pos/AUX]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/AUX]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/X]()-[ru-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Алгоритм	алгоритм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	должен	должен	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	0:root	_
3	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	cop	4:cop	_
4	применим	применимый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	2	nmod	2:nmod	_
5	к	к	ADP	_	_	7	case	7:case	_
6	разным	разный	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	наборам	набор	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	4	nmod	4:nmod	_
8	исходных	исходный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	9	amod	9:amod	_
9	данных	данные	NOUN	_	Animacy=Inan|Case=Gen|Number=Plur	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Преимущество	преимущество	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
2	было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
3	на	на	ADP	_	_	5	case	5:case	_
4	его	он	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3	5	nmod	5:nmod	_
5	стороне	сторона	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 cop	color:blue
1	Мать	мать	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	умерла	умирать	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	от	от	ADP	_	_	4	case	4:case	_
4	заражения	заражение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	obl	2:obl	_
5	крови	кровь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	когда	когда	SCONJ	_	_	2	mark	2:mark	_
8	Роману	роман	PROPN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	11	nmod	11:nmod	_
9	было	быть	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
10	полтора	полтора	NUM	_	Case=Nom|Gender=Masc	11	nummod:gov	11:nummod:gov	_
11	года	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	advcl	2:advcl	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


