

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

29 nodes (0%) are attached to their parents as `expl`.

19 instances of `expl` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86206896551724.

The following 6 pairs of parts of speech are connected with `expl`: [ru-pos/NOUN]()-[ru-pos/DET]() (22; 76% instances), [ru-pos/PROPN]()-[ru-pos/DET]() (3; 10% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (1; 3% instances), [ru-pos/ADV]()-[ru-pos/DET]() (1; 3% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (1; 3% instances), [ru-pos/VERB]()-[ru-pos/DET]() (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 expl	color:blue
1	Рэгги	_	X	AFX	_	3	goeswith	_	_
2	-	_	PUNCT	-	_	3	goeswith	_	_
3	метал	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
4	--	_	PUNCT	-	_	7	punct	_	_
5	это	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	expl	_	_
6	музыкальный	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
7	жанр	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	,	_	PUNCT	,	_	7	punct	_	_
9	сплав	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	conj	_	_
10	рэгги	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
11	и	_	CONJ	CC	_	10	cc	_	_
12	метала	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	conj	_	_
13	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 expl	color:blue
1	Пример	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	parataxis	_	_
2	:	_	PUNCT	:	_	1	punct	_	_
3	VMware	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nmod	_	_
4	ESX	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
5	,	_	PUNCT	,	_	4	punct	_	_
6	Citrix	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	conj	_	_
7	XenServer	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	_
8	Это	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	expl	_	_
9	компонент	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
10	,	_	PUNCT	,	_	11	punct	_	_
11	работающий	_	VERB	VBNL	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|Voice=Act	9	acl	_	_
12	в	_	ADP	IN	_	14	case	_	_
13	одном	_	NUM	CD	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	14	nummod	_	_
14	кольце	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	11	nmod	_	_
15	с	_	ADP	IN	_	16	case	_	_
16	ядром	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	11	nmod	_	_
17	основной	_	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	18	amod	_	_
18	ОС	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
19	(	_	PUNCT	(	_	20	punct	_	_
20	кольцо	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	14	appos	_	_
21	0	_	NUM	CD	Case=Nom	20	nummod	_	_
22	)	_	PUNCT	)	_	20	punct	_	_
23	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 expl	color:blue
1	Я	_	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	за	_	ADP	IN	_	0	root	_	_
3	возрождение	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	nmod	_	_
4	религиозной	_	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	amod	_	_
5	веры	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
6	,	_	PUNCT	,	_	11	punct	_	_
7	потому	_	SCONJ	IN	_	11	mark	_	_
8	что	_	ADP	IN	_	7	mwe	_	_
9	это	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	11	nsubj	_	_
10	не	_	PART	NEG	_	11	neg	_	_
11	привнесенное	_	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Voice=Pass	2	advcl	_	_
12	извне	_	ADV	RB	_	11	advmod	_	_
13	,	_	PUNCT	,	_	11	punct	_	_
14	это	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	15	expl	_	_
15	органичное	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	11	parataxis	_	_
16	состояние	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	15	nsubj	_	_
17	человека	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	16	nmod	_	_
18	,	_	PUNCT	,	_	20	punct	_	_
19	которое	_	DET	WDT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	20	nsubj	_	_
20	сформировано	_	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Voice=Pass	16	acl:relcl	_	_
21	в	_	ADP	IN	_	25	case	_	_
22	течение	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	25	mwe	_	_
23	сотен	_	NOUN	NN	Animacy=Inan|Case=Gen|Number=Plur	25	nummod	_	_
24	тысяч	_	NOUN	NN	Animacy=Inan|Case=Gen|Number=Plur	23	nummod	_	_
25	лет	_	NOUN	NN	Animacy=Inan|Case=Gen|Number=Plur	20	nmod	_	_
26	.	_	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

33 nodes (0%) are attached to their parents as `expl`.

33 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66666666666667.

The following 5 pairs of parts of speech are connected with `expl`: [ru-pos/VERB]()-[ru-pos/NOUN]() (28; 85% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (2; 6% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 3% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (1; 3% instances), [ru-pos/VERB]()-[ru-pos/PART]() (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Это	ЭТО	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	expl	_	_
2	как	КАК	ADV	_	Degree=Pos	4	advmod	_	_
3	кто	КТО	PRON	_	_	4	nsubj	_	_
4	решит	РЕШАТЬ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
5	для	ДЛЯ	ADP	_	_	6	case	_	_
6	себя	СЕБЯ	PRON	_	_	4	nmod	_	_
7	,	,	PUNCT	,	_	6	punct	_	_
8	посмотрев	СМОТРЕТЬ	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Trans|Voice=Act	4	advcl	_	_
9	фильм	ФИЛЬМ	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	dobj	_	_
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 expl	color:blue
1	А	А	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	.	.	PUNCT	.	_	1	punct	_	_
3	Улюкаев	УЛЮКАЕВ	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	name	_	_
4	как-то	КАК-ТО	ADV	_	Degree=Pos	5	advmod	_	_
5	заметил	ЗАМЕЧАТЬ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	:	:	PUNCT	:	_	5	punct	_	_
7	"	"	PUNCT	"	_	9	punct	_	_
8	…	…	PUNCT	…	_	9	punct	_	_
9	это	ЭТО	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	13	expl	_	_
10	не	НЕ	PART	_	_	11	neg	_	_
11	мы	МЫ	PRON	_	_	13	nsubj	_	_
12	такие	ТАКОЙ	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	13	amod	_	_
13	выдающиеся	ВЫДАЮЩИЙСЯ	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	5	dobj	_	_
14	и	И	CONJ	_	_	13	cc	_	_
15	умные	УМНЫЙ	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	13	conj	_	_
16	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl	color:blue
1	Волосы	ВОЛОС	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	встают	ВСТАВАТЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	дыбом	ДЫБОМ	ADV	_	Degree=Pos	2	advmod	_	_
4	!	!	PUNCT	!	_	3	punct	_	_
5	"	"	PUNCT	"	_	3	punct	_	_
6	-	-	PUNCT	-	_	3	punct	_	_
7	это	ЭТО	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	expl	_	_
8	когда	КОГДА	SCONJ	_	_	12	mark	_	_
9	Каспаров	КАСПАРОВ	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
10	или	ИЛИ	CONJ	_	_	9	cc	_	_
11	Карпов	КАРПОВ	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	conj	_	_
12	ходили	ХОДИТЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
13	не	НЕ	PART	_	_	14	neg	_	_
14	так	ТАК	ADV	_	Degree=Pos	12	advmod	_	_
15	,	,	PUNCT	,	_	14	punct	_	_
16	как	КАК	SCONJ	_	_	17	mark	_	_
17	предсказывал	ПРЕДСКАЗЫВАТЬ	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	14	acl	_	_
18	диктор	ДИКТОР	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	_
19	.	.	PUNCT	.	_	2	punct	_	_

~~~


