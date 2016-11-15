

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [nummod]().
There are also 1 other language-specific subtypes of `nummod`: [nummod:gov]().

128 nodes (0%) are attached to their parents as `nummod:entity`.

127 instances of `nummod:entity` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3203125.

The following 6 pairs of parts of speech are connected with `nummod:entity`: [ru-pos/NOUN]()-[ru-pos/NUM]() (87; 68% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (35; 27% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (3; 2% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 1% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 1% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod:entity	color:blue
1	Имеет	ИМЕТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	индекс	ИНДЕКС	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	dobj	_	_
3	Хирша	ХИРШ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	45	45	NUM	CD	Case=Nom	2	nummod:entity	_	_
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod:entity	color:blue
1	HD	HD	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	114762	114762	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc	1	nummod:entity	_	_
3	b	B	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
4	находится	НАХОДИТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	на	НА	ADP	IN	_	6	case	_	_
6	расстоянии	РАССТОЯНИЕ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	4	nmod	_	_
7	132	132	NUM	CD	Animacy=Inan|Case=Gen|Gender=Masc	9	nummod	_	_
8	световых	СВЕТОВОЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Number=Plur|Variant=Full	9	amod	_	_
9	лет	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	_
10	от	ОТ	ADP	IN	_	11	case	_	_
11	Солнца	СОЛНЦЕ	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	_
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 29 nummod:entity	color:blue
1	Пушкина	ПУШКИН	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	0	root	_	_
2	:	:	PUNCT	:	_	3	punct	_	_
3	Сказка	СКАЗКА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	appos	_	_
4	о	О	ADP	IN	_	6	case	_	_
5	мёртвой	МЕРТВЫЙ	ADJ	JJL	Animacy=Anim|Case=Loc|Gender=Fem|Number=Sing|Variant=Full	6	amod	_	_
6	царевне	ЦАРЕВНА	NOUN	NN	Animacy=Anim|Case=Loc|Gender=Fem|Number=Sing	3	nmod	_	_
7	и	И	CONJ	CC	_	6	cc	_	_
8	о	О	ADP	IN	_	6	conj	_	_
9	семи	СЕМЬ	NUM	CD	Case=Loc	10	nummod	_	_
10	богатырях	БОГАТЫРЬ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	8	nmod	_	_
11	(	(	PUNCT	(	_	12	punct	_	_
12	KHM	KHM	ADV	FW	_	3	appos	_	_
13	53	53	NUM	CD	Animacy=Inan|Case=Nom	12	nummod:entity	_	_
14	)	)	PUNCT	)	_	12	punct	_	_
15	,	,	PUNCT	,	_	3	punct	_	_
16	Сказка	СКАЗКА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	conj	_	_
17	о	О	ADP	IN	_	18	case	_	_
18	рыбаке	РЫБАК	NOUN	NN	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing	16	nmod	_	_
19	и	И	CONJ	CC	_	18	cc	_	_
20	рыбке	РЫБКА	NOUN	NN	Animacy=Anim|Case=Loc|Gender=Fem|Number=Sing	18	conj	_	_
21	(	(	PUNCT	(	_	22	punct	_	_
22	KHM	KHM	ADV	FW	_	16	appos	_	_
23	19	19	NUM	CD	Case=Nom	22	nummod:entity	_	_
24	)	)	PUNCT	)	_	22	punct	_	_
25	и	И	CONJ	CC	_	3	cc	_	_
26	Жених	ЖЕНИХ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	conj	_	_
27	(	(	PUNCT	(	_	28	punct	_	_
28	KHM	KHM	ADV	FW	_	26	appos	_	_
29	40	40	NUM	CD	Case=Nom	28	nummod:entity	_	_
30	)	)	PUNCT	)	_	28	punct	_	_
31	.	.	PUNCT	.	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is a language-specific subtype of [nummod]().
There are also 1 other language-specific subtypes of `nummod`: [nummod:gov]().

60 nodes (0%) are attached to their parents as `nummod:entity`.

60 instances of `nummod:entity` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36666666666667.

The following 6 pairs of parts of speech are connected with `nummod:entity`: [ru-pos/NOUN]()-[ru-pos/SYM]() (33; 55% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (15; 25% instances), [ru-pos/PROPN]()-[ru-pos/SYM]() (7; 12% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (3; 5% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (1; 2% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod:entity	color:blue
1	С	с	ADP	_	_	3	case	_	_
2	такими	такой	DET	_	Case=Ins|Number=Plur	3	det	_	_
3	мыслями	мысль	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	5	nmod	_	_
4	Люда	люда	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
5	вошла	входить	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	в	в	ADP	_	_	7	case	_	_
7	комнату	комната	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
8	№	номер-знак	SYM	_	_	7	nummod:entity	_	_
9	387	387	NUM	_	_	8	nummod	_	_
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod:entity	color:blue
1	Выдаем	выдавать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	команду	команда	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	dobj	_	_
3	номер	номер	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nummod:entity	_	_
4	девять	девять	NUM	_	Case=Nom	3	nummod:gov	_	_
5	"	"	PUNCT	"	_	4	punct	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nummod:entity	color:blue
1	(	(	PUNCT	(	_	2	punct	_	_
2	см.	смотреть	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
3	"	"	PUNCT	"	_	4	punct	_	_
4	Наука	наука	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nmod	_	_
5	и	и	CONJ	_	_	4	cc	_	_
6	жизнь	жизнь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	conj	_	_
7	"	"	PUNCT	"	_	6	punct	_	_
8	№№	номер-знак	SYM	_	_	4	nummod:entity	_	_
9	9	9	NUM	_	_	8	nummod	_	_
10	,	,	PUNCT	,	_	9	punct	_	_
11	12	12	NUM	_	_	9	nummod	_	_
12	,	,	PUNCT	,	_	11	punct	_	_
13	2004	2004	NUM	_	_	14	nummod	_	_
14	г	год	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	conj	_	_
15	.	.	PUNCT	.	_	14	punct	_	_
16	;	;	PUNCT	;	_	14	punct	_	_
17	и	и	CONJ	_	_	8	cc	_	_
18	№№	номер-знак	SYM	_	_	8	conj	_	_
19	1	1	NUM	_	_	18	nummod	_	_
20	,	,	PUNCT	,	_	19	punct	_	_
21	2	2	NUM	_	_	19	nummod	_	_
22	,	,	PUNCT	,	_	21	punct	_	_
23	3	3	NUM	_	_	21	nummod	_	_
24	,	,	PUNCT	,	_	23	punct	_	_
25	4	4	NUM	_	_	23	nummod	_	_
26	,	,	PUNCT	,	_	25	punct	_	_
27	5	5	NUM	_	_	25	nummod	_	_
28	,	,	PUNCT	,	_	27	punct	_	_
29	9	9	NUM	_	_	27	nummod	_	_
30	,	,	PUNCT	,	_	29	punct	_	_
31	2005	2005	NUM	_	_	32	nummod	_	_
32	г	год	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	conj	_	_
33	.	.	PUNCT	.	_	32	punct	_	_
34	)	)	PUNCT	)	_	2	punct	_	_

~~~


