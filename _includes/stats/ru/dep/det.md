

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

1343 nodes (1%) are attached to their parents as `det`.

1327 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31794489947878.

The following 11 pairs of parts of speech are connected with `det`: [ru-pos/NOUN]()-[ru-pos/DET]() (1265; 94% instances), [ru-pos/PROPN]()-[ru-pos/DET]() (33; 2% instances), [ru-pos/PRON]()-[ru-pos/DET]() (13; 1% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (11; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (6; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	В	В	ADP	IN	_	3	case	_	_
2	этом	ЭТОТ	DET	DT	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	det	_	_
3	эпизоде	ЭПИЗОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	_
4	Стренджер	СТРЕНДЖЕР	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	отправляется	ОТПРАВЛЯТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	во	ВО	ADP	IN	_	7	case	_	_
7	Францию	ФРАНЦИЯ	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
8	,	,	PUNCT	,	_	5	punct	_	_
9	год	ГОД	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nmod	_	_
10	1935	1935	ADJ	ORD	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	amod	_	_
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Появилась	ПОЯВИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	знакомая	ЗНАКОМЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Full	3	amod	_	_
3	семья	СЕМЬЯ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
4	из	ИЗ	ADP	IN	_	6	case	_	_
5	The	THE	DET	DT	Animacy=Anim|Case=Nom|Number=Plur	6	det	_	_
6	Sims	SIMS	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	3	nmod	_	_
7	2	2	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc	6	nummod:entity	_	_
8	--	--	PUNCT	--	_	3	punct	_	_
9	сестры	СЕСТРА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	3	appos	_	_
10	Гонгадзе	ГОНГАДЗЕ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	9	appos	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det	color:blue
1	Я	Я	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	полюбил	ПОЛЮБИТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
3	их	ОНИ	PRON	PRP	Case=Acc|Number=Plur|Person=3	2	dobj	_	_
4	всех	ВЕСЬ	DET	DT	Animacy=Anim|Case=Acc|Number=Plur	3	det	_	_
5	,	,	PUNCT	,	_	2	punct	_	_
6	и	И	CONJ	CC	_	2	cc	_	_
7	это	ЭТО	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
8	легло	ЛЕЧЬ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	conj	_	_
9	в	В	ADP	IN	_	10	case	_	_
10	основу	ОСНОВА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	nmod	_	_
11	сюжета	СЮЖЕТ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
12	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	2	punct	_	_
13	.	.	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

21719 nodes (2%) are attached to their parents as `det`.

21717 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30549288641282.

The following 5 pairs of parts of speech are connected with `det`: [ru-pos/NOUN]()-[ru-pos/DET]() (21358; 98% instances), [ru-pos/PROPN]()-[ru-pos/DET]() (276; 1% instances), [ru-pos/PRON]()-[ru-pos/DET]() (78; 0% instances), [ru-pos/SYM]()-[ru-pos/DET]() (5; 0% instances), [ru-pos/PART]()-[ru-pos/DET]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Разумеется	разумеется	ADV	_	Degree=Pos	6	parataxis	_	_
2	,	,	PUNCT	,	_	1	punct	_	_
3	эти	этот	DET	_	Case=Acc|Number=Plur	4	det	_	_
4	объяснения	объяснение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	7	dobj	_	_
5	вряд_ли	вряд_ли	ADV	_	Degree=Pos	6	advmod	_	_
6	можно	можно	ADV	_	Degree=Pos	0	root	_	_
7	счесть	считать	VERB	_	Aspect=Perf|VerbForm=Inf	6	nsubj	_	_
8	убедительными	убедительный	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	7	nmod	_	_
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det	color:blue
1	В	в	ADP	_	_	2	case	_	_
2	упряжке	упряжка	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	0	root	_	_
3	с	с	ADP	_	_	6	case	_	_
4	тем	тот	DET	_	Case=Ins|Gender=Masc|Number=Sing	6	det	_	_
5	же	же	PART	_	_	4	advmod	_	_
6	Рыжковым	рыжков	PROPN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	2	nmod	_	_
7	,	,	PUNCT	,	_	6	punct	_	_
8	к	к	ADP	_	_	9	case	_	_
9	примеру	пример	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	6	parataxis	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	И	и	CONJ	_	_	5	cc	_	_
2	все	весь	DET	_	Case=Nom|Number=Plur	3	det	_	_
3	они	они	PRON	_	_	5	nsubj	_	_
4	прекрасно	прекрасно	ADV	_	Degree=Pos	5	advmod	_	_
5	понимают	понимать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	русский	русский	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	язык	язык	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	dobj	_	_
8	.	.	PUNCT	.	_	5	punct	_	_

~~~


