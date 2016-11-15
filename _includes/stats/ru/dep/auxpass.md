

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

535 nodes (1%) are attached to their parents as `auxpass`.

518 instances of `auxpass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08224299065421.

The following 3 pairs of parts of speech are connected with `auxpass`: [ru-pos/VERB]()-[ru-pos/AUX]() (521; 97% instances), [ru-pos/ADJ]()-[ru-pos/AUX]() (12; 2% instances), [ru-pos/NOUN]()-[ru-pos/AUX]() (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 auxpass	color:blue
1	Новое	НОВЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Variant=Full	2	amod	_	_
2	название	НАЗВАНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubjpass	_	_
3	поселению	ПОСЕЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	5	iobj	_	_
4	было	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	auxpass	_	_
5	дано	ДАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
6	по	ПО	ADP	IN	_	7	case	_	_
7	речке	РЕЧКА	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	5	nmod	_	_
8	Пивка	ПИВКА	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	appos	_	_
9	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 auxpass	color:blue
1	Все	ВЕСЬ	DET	DT	Animacy=Anim|Case=Nom|Number=Plur	2	det	_	_
2	граждане	ГРАЖДАНИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubjpass	_	_
3	были	БЫТЬ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	auxpass	_	_
4	обязаны	ОБЯЗАННЫЙ	ADJ	JJH	Animacy=Anim|Case=Nom|Number=Plur|Variant=Brev	0	root	_	_
5	работать	РАБОТАТЬ	VERB	VB	Aspect=Imp|VerbForm=Inf	4	xcomp	_	_
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 auxpass	color:blue
1	1	1	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	amod	_	_
2	января	ЯНВАРЬ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
3	1889	1889	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	amod	_	_
4	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	произведен	ПРОИЗВЕСТИ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
6	в	В	ADP	IN	_	7	case	_	_
7	чин	ЧИН	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	nmod	_	_
8	вице	ВИЦЕ	ADV	AFX	_	10	goeswith	_	_
9	-	-	PUNCT	-	_	10	goeswith	_	_
10	адмирала	АДМИРАЛ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
11	,	,	PUNCT	,	_	5	punct	_	_
12	а	А	CONJ	CC	_	5	cc	_	_
13	в	В	ADP	IN	_	15	case	_	_
14	1891	1891	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	amod	_	_
15	году	ГОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	19	nmod	_	_
16	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	19	auxpass	_	_
17	назначен	НАЗНАЧИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	19	cop	_	_
18	старшим	СТАРШИЙ	ADJ	JJL	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Variant=Full	19	amod	_	_
19	флагманом	ФЛАГМАН	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	5	conj	_	_
20	Балтийского	БАЛТИЙСКИЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Full	21	amod	_	_
21	флота	ФЛОТ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	19	nmod	_	_
22	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

2668 nodes (0%) are attached to their parents as `auxpass`.

2597 instances of `auxpass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16754122938531.

The following 5 pairs of parts of speech are connected with `auxpass`: [ru-pos/VERB]()-[ru-pos/AUX]() (2645; 99% instances), [ru-pos/VERB]()-[ru-pos/PART]() (20; 1% instances), [ru-pos/ADJ]()-[ru-pos/AUX]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 auxpass	color:blue
1	"	"	PUNCT	"	_	2	punct	_	_
2	Алгоризм	алгоризм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubjpass	_	_
3	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	auxpass	_	_
4	придуман	придумывать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
5	в	в	ADP	_	_	6	case	_	_
6	Греции	греция	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	_
7	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 auxpass	color:blue
1	Впрочем	впрочем	ADV	_	Degree=Pos	11	parataxis	_	_
2	,	,	PUNCT	,	_	1	punct	_	_
3	как	как	SCONJ	_	_	4	mark	_	_
4	пришел	приходить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	acl	_	_
5	-	-	PUNCT	-	_	4	punct	_	_
6	так	так	ADV	_	Degree=Pos	11	advmod	_	_
7	чуть	чуть	ADV	_	Degree=Pos	8	advmod	_	_
8	было	было	PART	_	_	11	auxpass	_	_
9	и	и	PART	_	_	11	advmod	_	_
10	не	не	PART	_	_	11	neg	_	_
11	ушел	уходить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 19 auxpass	color:blue
1	Как	как	SCONJ	_	_	2	mark	_	_
2	сообщает	сообщать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
3	корреспондент	корреспондент	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	Страны.Ru	страна.ru	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
5	.	.	PUNCT	.	_	4	punct	_	_
6	командующий	командующий	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	подчеркнул	подчеркивать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	,	,	PUNCT	,	_	7	punct	_	_
9	что	что	SCONJ	_	_	18	mark	_	_
10	"	"	PUNCT	"	_	11	punct	_	_
11	впервые	впервые	ADV	_	Degree=Pos	18	advmod	_	_
12	за	за	ADP	_	_	14	case	_	_
13	пять	пять	NUM	_	Case=Acc	14	nummod:gov	_	_
14	лет	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	18	nmod	_	_
15	на	на	ADP	_	_	17	case	_	_
16	сто	сто	NUM	_	Case=Acc	17	nummod:gov	_	_
17	процентов	процент	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	18	nmod	_	_
18	выполнен	выполнять	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	7	advcl	_	_
19	график	график	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	24	auxpass	_	_
20	запусков	запуск	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	24	nmod	_	_
21	космических	космический	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	22	amod	_	_
22	аппаратов	аппарат	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	20	nmod	_	_
23	,	,	PUNCT	,	_	22	punct	_	_
24	утвержденный	утверждать	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	18	nsubjpass	_	_
25	начальником	начальник	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	24	nmod:agent	_	_
26	Генерального	генеральный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	_
27	штаба	штаб	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
28	Вооруженных	вооружать	VERB	_	Aspect=Perf|Case=Gen|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	29	amod	_	_
29	Сил	сила	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	27	nmod	_	_
30	РФ	рф	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	29	nmod	_	_
31	генералом	генерал	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	25	appos	_	_
32	армии	армия	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	31	nmod	_	_
33	Анатолием	анатолий	PROPN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	31	appos	_	_
34	Квашниным	квашнин	PROPN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	33	name	_	_
35	,	,	PUNCT	,	_	34	punct	_	_
36	в_первую_очередь	в_первую_очередь	ADV	_	Degree=Pos	38	advmod	_	_
37	для	для	ADP	_	_	38	case	_	_
38	обеспечения	обеспечение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	18	nmod	_	_
39	безопасности	безопасность	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	38	nmod	_	_
40	страны	страна	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	39	nmod	_	_
41	"	"	PUNCT	"	_	40	punct	_	_
42	.	.	PUNCT	.	_	7	punct	_	_

~~~


