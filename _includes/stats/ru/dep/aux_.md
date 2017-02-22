

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

50 nodes (0%) are attached to their parents as `aux`.

29 instances of `aux` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24.

The following 3 pairs of parts of speech are connected with `aux`: [ru-pos/VERB]()-[ru-pos/AUX]() (37; 74% instances), [ru-pos/ADJ]()-[ru-pos/AUX]() (11; 22% instances), [ru-pos/NOUN]()-[ru-pos/AUX]() (2; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux	color:blue
1	За	ЗА	ADP	IN	_	3	case	_	_
2	эту	ЭТОТ	DET	DT	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	det	_	_
3	роль	РОЛЬ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obl	_	_
4	Финч	ФИНЧ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj:pass	_	_
5	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	aux	_	_
6	посмертно	ПОСМЕРТНО	ADV	RB	_	7	advmod	_	_
7	награждён	НАГРАДИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
8	``	``	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	Оскаром	ОСКАР	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	iobj	_	_
10	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	который	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	13	obj	_	_
13	получила	ПОЛУЧИТЬ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	acl:relcl	_	_
14	его	ЕГО	DET	PRP$	Person=3	15	det	_	_
15	вдова	ВДОВА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	_
16	Элета	ЭЛЕТА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	15	appos	_	SpaceAfter=No
17	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Она	ОНА	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	должна	ДОЛЖЕН	ADJ	JJH	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing|Variant=Short	0	root	_	_
3	была	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	aux	_	_
4	спать	СПАТЬ	VERB	VB	Aspect=Imp|VerbForm=Inf	2	xcomp	_	_
5	в	В	ADP	IN	_	6	case	_	_
6	крио	КРИО	ADV	AFX	_	4	obl	_	_
7	-	-	PUNCT	-	_	6	goeswith	_	_
8	камере	КАМЕРА	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	goeswith	_	_
9	до	ДО	ADP	IN	_	11	case	_	_
10	тех	ТОТ	DET	DT	Animacy=Inan|Case=Gen|Number=Plur	11	det	_	_
11	пор	ПОРА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
12	,	,	PUNCT	,	_	15	punct	_	_
13	пока	ПОКА	SCONJ	IN	_	15	mark	_	_
14	не	НЕ	PART	NEG	Polarity=Neg	15	advmod	_	_
15	начнутся	НАЧАТЬСЯ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Mid	2	advcl	_	_
16	тесты	ТЕСТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	15	nsubj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 aux	color:blue
1	Выбор	ВЫБОР	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
2	данного	ДАННЫЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	amod	_	_
3	имени	ИМЯ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_
4	Дональдом	ДОНАЛЬД	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	1	iobj	_	_
5	не	НЕ	PART	NEG	Polarity=Neg	8	advmod	_	_
6	в	В	ADP	IN	_	8	case	_	_
7	последнюю	ПОСЛЕДНИЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	amod	_	_
8	очередь	ОЧЕРЕДЬ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
9	объясняется	ОБЪЯСНЯТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
10	тем	ТО	PRON	DT	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	9	iobj	_	SpaceAfter=No
11	,	,	PUNCT	,	_	18	punct	_	_
12	что	ЧТО	SCONJ	IN	_	18	mark	_	_
13	его	ЕГО	DET	PRP$	Person=3	15	det	_	_
14	бывшая	БЫВШИЙ	ADJ	JJL	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	15	amod	_	_
15	жена	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	18	nsubj	_	_
16	Ивана	ИВАНА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	15	appos	_	_
17	была	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	18	aux	_	_
18	родом	РОД	NOUN	RB	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	9	ccomp	_	_
19	из	ИЗ	ADP	IN	_	20	case	_	_
20	Чехии	ЧЕХИЯ	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
21	и	И	CCONJ	CC	_	23	cc	_	_
22	плохо	ПЛОХО	ADV	RB	_	23	advmod	_	_
23	говорила	ГОВОРИТЬ	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	18	conj	_	_
24	по	ПО	ADP	AFX	_	23	advmod	_	_
25	-	-	PUNCT	-	_	24	goeswith	_	_
26	английски	АНГЛИЙСКИ	ADV	RB	_	24	goeswith	_	SpaceAfter=No
27	.	.	PUNCT	.	_	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

2103 nodes (0%) are attached to their parents as `aux`.

1359 instances of `aux` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58059914407989.

The following 16 pairs of parts of speech are connected with `aux`: [ru-pos/VERB]()-[ru-pos/PART]() (977; 46% instances), [ru-pos/VERB]()-[ru-pos/AUX]() (826; 39% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (147; 7% instances), [ru-pos/ADV]()-[ru-pos/PART]() (69; 3% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (55; 3% instances), [ru-pos/PRON]()-[ru-pos/PART]() (13; 1% instances), [ru-pos/DET]()-[ru-pos/PART]() (5; 0% instances), [ru-pos/AUX]()-[ru-pos/AUX]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/AUX]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/AUX]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/AUX]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/_]()-[ru-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	-	-	PUNCT	_	_	2	punct	2:punct	_
2	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1	3	nsubj	3:nsubj	_
3	хотел	хотеть	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	бы	бы	PART	_	Mood=Cnd	3	aux	3:aux	_
5	вернуться	вернуться	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Mid	3	xcomp	3:xcomp	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	пока	пока	SCONJ	_	_	12	mark	12:mark	_
8	еще	еще	ADV	_	Degree=Pos	10	advmod	10:advmod	_
9	не	не	PART	_	_	10	advmod	10:advmod	_
10	очень	очень	ADV	_	Degree=Pos	11	advmod	11:advmod	_
11	много	много	ADV	_	Degree=Pos	12	nummod:gov	12:nummod	_
12	машин	машина	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	advcl	5:advcl	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Не	не	PART	_	_	3	advmod	3:advmod	_
2	будем	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	копировать	копировать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	0:root	_
4	американский	американский	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	6:amod	_
5	"	"	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No
6	Шаттл	шаттл	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	SpaceAfter=No
7	"	"	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No
8	!	!	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No
9	"	"	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1	4	nsubj	4:nsubj	_
2	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	бы	бы	PART	_	Mood=Cnd	4	aux	4:aux	_
4	готов	готовый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	но	но	CCONJ	_	_	9	cc	9:cc	_
7	она	она	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj:pass	9:nsubj:pass	_
8	не	не	PART	_	_	9	advmod	9:advmod	_
9	обсуждалась	обсуждать	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Pass	4	conj	4:conj	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


