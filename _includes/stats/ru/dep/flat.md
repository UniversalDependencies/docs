

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.
There are 1 language-specific subtypes of `flat`: [flat:foreign]().

875 nodes (1%) are attached to their parents as `flat`.

875 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17371428571429.

The following 8 pairs of parts of speech are connected with `flat`: [ru-pos/PROPN]()-[ru-pos/PROPN]() (859; 98% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (7; 1% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Жена	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	Дзодзуашвили	ДЗОДЗУАШВИЛИ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	приходится	ПРИХОДИТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	тетей	ТЕТЯ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	3	advmod	_	_
5	жене	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_
6	Владимира	ВЛАДИМИР	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	Гуцаева	ГУЦАЕВ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	flat	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 flat	color:blue
1	``	``	PUNCT	``	_	2	punct	_	SpaceAfter=No
2	Истина	ИСТИНА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
3	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	2	punct	_	_
4	(	(	PUNCT	(	_	2	punct	_	SpaceAfter=No
5	)	)	PUNCT	)	_	2	punct	_	_
6	--	--	PUNCT	--	_	7	punct	_	_
7	кинофильм	КИНОФИЛЬМ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	режиссёра	РЕЖИССЕР	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	Анри	АНРИ	ADV	AFX	_	8	appos	_	_
10	-	-	PUNCT	-	_	9	goeswith	_	_
11	Жоржа	ЖОРЖ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	9	goeswith	_	_
12	Клузо	КЛУЗО	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	9	flat	_	SpaceAfter=No
13	,	,	PUNCT	,	_	14	punct	_	_
14	вышедший	ВЫЙТИ	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	acl	_	_
15	на	НА	ADP	IN	_	16	case	_	_
16	экраны	ЭКРАН	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	14	obl	_	_
17	в	В	ADP	IN	_	19	case	_	_
18	1960	1960	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	19	amod	_	_
19	году	ГОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	14	obl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 flat	color:blue
1	Среди	СРЕДИ	ADP	IN	_	2	case	_	_
2	последователей	ПОСЛЕДОВАТЕЛЬ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	5	obl	_	_
3	Мелани	МЕЛАНИ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	Кляйн	КЛЯЙН	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	3	flat	_	_
5	были	БЫТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
6	такие	ТАКОЙ	DET	DT	Animacy=Anim|Case=Nom|Number=Plur	7	amod	_	_
7	психоаналитики	ПСИХОАНАЛИТИК	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	как	КАК	ADP	IN	_	11	case	_	_
10	Герберт	ГЕРБЕРТ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nmod	_	_
11	Розенфельд	РОЗЕНФЕЛЬД	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	flat	_	SpaceAfter=No
12	,	,	PUNCT	,	_	13	punct	_	_
13	Уилфред	УИЛФРЕД	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	conj	_	_
14	Бион	БИОН	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	flat	_	SpaceAfter=No
15	,	,	PUNCT	,	_	16	punct	_	_
16	Бетти	БЕТТИ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	10	conj	_	_
17	Джозеф	ДЖОЗЕФ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	16	flat	_	SpaceAfter=No
18	,	,	PUNCT	,	_	19	punct	_	_
19	Ханна	ХАННА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	10	conj	_	_
20	Сегал	СЕГАЛ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	19	flat	_	SpaceAfter=No
21	,	,	PUNCT	,	_	22	punct	_	_
22	Дональд	ДОНАЛЬД	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	conj	_	_
23	Мельцер	МЕЛЬЦЕР	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	22	flat	_	SpaceAfter=No
24	,	,	PUNCT	,	_	25	punct	_	_
25	Рождер	РОЖДЕР	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	conj	_	_
26	Мани	МАНИ	ADV	AFX	_	25	flat	_	_
27	-	-	PUNCT	-	_	26	goeswith	_	_
28	Керл	КЕРЛ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	26	goeswith	_	SpaceAfter=No
29	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.
There are 2 language-specific subtypes of `flat`: [flat:foreign](), [flat:name]().

88 nodes (0%) are attached to their parents as `flat`.

88 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 9 pairs of parts of speech are connected with `flat`: [ru-pos/PROPN]()-[ru-pos/PROPN]() (79; 90% instances), [ru-pos/ADP]()-[ru-pos/PROPN]() (2; 2% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (1; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (1; 1% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (1; 1% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (1; 1% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 1% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 1% instances), [ru-pos/PUNCT]()-[ru-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
2	Сталин	сталин	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	есть	быть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	Пол	пол	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	conj	2:conj	_
6	Пот	пот	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	flat	5:flat	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Без	без	ADP	_	_	3	case	3:case	_
2	этого	этот	DET	_	Case=Gen|Gender=Masc|Number=Sing	3	amod	3:amod	_
3	комплекса	комплекс	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	10:nmod	_
4	Леонардо	леонардо	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod	_
5	да	да	ADP	_	_	4	appos	4:appos	_
6	Винчи	винчи	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	flat	5:flat	_
7	кино	кино	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	10	nsubj	10:nsubj	_
8	как	как	SCONJ	_	_	9	cc	9:cc	_
9	искусство	искусство	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	advmod	7:advmod	_
10	невозможно	невозможный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	0:root	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	10:punct	_
12	так	так	ADV	_	Degree=Pos	14	advmod	14:advmod	_
13	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1	14	obl	14:obl	_
14	кажется	казаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	10	conj	10:conj	SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	14:punct	_
16	а	а	CCONJ	_	_	18	cc	18:cc	_
17	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	18	nsubj	18:nsubj	_
18	ставит	ставить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	conj	10:conj	_
19	очень	очень	ADV	_	Degree=Pos	20	advmod	20:advmod	_
20	большие	большой	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	21	amod	21:amod	_
21	требования	требование	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	18	obj	18:obj	_
22	к	к	ADP	_	_	24	case	24:case	_
23	снимающему	снимать	VERB	_	Aspect=Imp|Case=Dat|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	24	amod	24:amod	_
24	человеку	человек	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	21	nmod	21:nmod	SpaceAfter=No
25	,	,	PUNCT	_	_	24	punct	24:punct	_
26	трудно	трудный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	10	conj	10:conj	_
27	этому	это	PRON	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	28	obl	28:obl	_
28	соответствовать	соответствовать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	26	nsubj	26:nsubj	SpaceAfter=No
29	.	.	PUNCT	_	_	28	punct	28:punct	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 29 flat	color:blue
1	Ситуация	ситуация	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	32	nsubj	32:nsubj	_
2	в	в	ADP	_	_	5	case	5:case	_
3	относительно	относительно	ADV	_	Degree=Pos	4	advmod	4:advmod	_
4	спокойном	спокойный	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	Сурате	сурат	PROPN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	nmod	1:nmod	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	центре	центр	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	appos	5:appos	_
8	текстильной	текстильный	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	9	amod	9:amod	_
9	промышленности	промышленность	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod	_
10	и	и	CCONJ	_	_	11	cc	11:cc	_
11	обработки	обработка	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	conj	9:conj	_
12	алмазов	алмаз	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	11	nmod	11:nmod	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	12:punct	_
14	который	который	PRON	_	Case=Nom	15	nsubj:pass	15:nsubj:pass	_
15	расположен	располагать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	7	acl:relcl	7:acl:relcl	_
16	недалеко	недалеко	ADV	_	Degree=Pos	15	advmod	15:advmod	_
17	от	от	ADP	_	_	18	case	18:case	_
18	границы	граница	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	16:nmod	_
19	с	с	ADP	_	_	21	case	21:case	_
20	западным	западный	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	21	amod	21:amod	_
21	штатом	штат	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	18	nmod	18:nmod	_
22	Махараштра	махараштра	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	21	appos	21:appos	SpaceAfter=No
23	,	,	PUNCT	_	_	22	punct	22:punct	_
24	по	по	ADP	_	_	25	case	25:case	_
25	данным	данные	NOUN	_	Animacy=Inan|Case=Dat|Number=Plur	32	parataxis	32:parataxis	_
26	газеты	газета	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	25	nmod	25:nmod	_
27	"	"	PUNCT	_	_	28	punct	28:punct	SpaceAfter=No
28	Фри-Пресс	фри-пресс	ADJ	_	_	26	appos	26:appos	_
29	Джорнэл	джорнэл	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	28	flat	28:flat	SpaceAfter=No
30	"	"	PUNCT	_	_	29	punct	29:punct	SpaceAfter=No
31	,	,	PUNCT	_	_	29	punct	29:punct	_
32	ухудшается	ухудшаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	0:root	SpaceAfter=No
33	.	.	PUNCT	_	_	32	punct	32:punct	_

~~~


