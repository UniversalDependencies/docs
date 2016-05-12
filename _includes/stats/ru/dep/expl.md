

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
# visual-style 54	bgColor:blue
# visual-style 54	fgColor:white
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 56 54 expl	color:blue
1	В	_	ADP	IN	_	2	case	_	_
2	качестве	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	5	nmod	_	_
3	cantus	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	firmus	_	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	amod	_	_
5	использовались	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
6	различные	_	ADJ	JJL	Animacy=Inan|Case=Nom|Number=Plur	7	amod	_	_
7	источники	_	NOUN	NN	Animacy=Inan|Case=Nom|Number=Plur	5	nsubj	_	_
8	,	_	PUNCT	,	_	7	punct	_	_
9	чаще	_	ADV	RBR	_	12	advmod	_	_
10	всего	_	DET	DT	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	9	dobj	_	_
11	известные	_	ADJ	JJL	Animacy=Inan|Case=Nom|Number=Plur	12	amod	_	_
12	мелодии	_	NOUN	NN	Animacy=Inan|Case=Nom|Number=Plur	7	conj	_	_
13	,	_	PUNCT	,	_	17	punct	_	_
14	благодаря	_	ADP	IN	_	15	case	_	_
15	чему	_	DET	DT	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	17	nmod	_	_
16	принцип	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	_
17	получил	_	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	12	acl:relcl	_	_
18	название	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	17	dobj	_	_
19	cantus	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	18	nmod	_	_
20	prius	_	ADV	RB	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	21	advmod	_	_
21	factus	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	19	amod	_	_
22	(	_	PUNCT	(	_	27	punct	_	_
23	лат.	_	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	27	amod	_	_
24	``	_	PUNCT	``	_	27	punct	_	_
25	прежде	_	ADV	RB	_	26	advmod	_	_
26	созданный	_	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Voice=Pass	27	acl	_	_
27	напев	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	19	appos	_	_
28	&#39;&#39;	_	PUNCT	&#39;&#39;	_	27	punct	_	_
29	)	_	PUNCT	)	_	27	punct	_	_
30	;	_	PUNCT	:	_	17	punct	_	_
31	выражение	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	32	nsubj	_	_
32	заимствовано	_	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Voice=Pass	17	parataxis	_	_
33	из	_	ADP	IN	_	34	case	_	_
34	трактата	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	32	nmod	_	_
35	Анонима	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	34	appos	_	_
36	IV	_	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	35	amod	_	_
37	:	_	PUNCT	:	_	32	punct	_	_
38	cantus	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	32	parataxis	_	_
39	vel	_	CONJ	CC	_	38	cc	_	_
40	tenor	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	38	conj	_	_
41	est	_	VERB	VBC	Aspect=Imp|Mood=Imp|Tense=Pres	38	aux	_	_
42	primus	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	43	amod	_	_
43	cantus	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	41	dobj	_	_
44	primo	_	ADV	RB	_	45	advmod	_	_
45	procreatus	_	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Voice=Pass	43	acl	_	_
46	vel	_	CONJ	CC	_	45	cc	_	_
47	factus	_	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Voice=Pass	45	conj	_	_
48	(	_	PUNCT	(	_	56	punct	_	_
49	``	_	PUNCT	``	_	56	punct	_	_
50	кантус	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	56	nsubj	_	_
51	или	_	CONJ	CC	_	50	cc	_	_
52	тенор	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	50	conj	_	_
53	--	_	PUNCT	-	_	56	punct	_	_
54	это	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	56	expl	_	_
55	первичный	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	56	amod	_	_
56	напев	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	38	appos	_	_
57	,	_	PUNCT	,	_	59	punct	_	_
58	предварительно	_	ADV	RB	_	59	advmod	_	_
59	созданный	_	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Voice=Pass	56	acl	_	_
60	,	_	PUNCT	,	_	59	punct	_	_
61	или	_	CONJ	CC	_	59	cc	_	_
62	сделанный	_	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Voice=Pass	59	conj	_	_
63	&#39;&#39;	_	PUNCT	&#39;&#39;	_	56	punct	_	_
64	)	_	PUNCT	)	_	56	punct	_	_
65	.	_	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-Syntagrus)

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


