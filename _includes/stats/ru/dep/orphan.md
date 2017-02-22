

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

81 nodes (0%) are attached to their parents as `orphan`.

57 instances of `orphan` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.14814814814815.

The following 29 pairs of parts of speech are connected with `orphan`: [ru-pos/NOUN]()-[ru-pos/ADP]() (14; 17% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (10; 12% instances), [ru-pos/ADP]()-[ru-pos/ADP]() (9; 11% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (7; 9% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (4; 5% instances), [ru-pos/PROPN]()-[ru-pos/ADP]() (4; 5% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (3; 4% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (3; 4% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 2% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (2; 2% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (2; 2% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (2; 2% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (2; 2% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (2; 2% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (1; 1% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 1% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (1; 1% instances), [ru-pos/ADP]()-[ru-pos/SYM]() (1; 1% instances), [ru-pos/ADV]()-[ru-pos/ADP]() (1; 1% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (1; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 1% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (1; 1% instances), [ru-pos/NUM]()-[ru-pos/ADP]() (1; 1% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 1% instances), [ru-pos/SYM]()-[ru-pos/ADP]() (1; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (1; 1% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 1% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (1; 1% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 orphan	color:blue
1	Эрзяне	ЭРЗЯНИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	принимали	ПРИНИМАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	активное	АКТИВНЫЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	amod	_	_
4	участие	УЧАСТИЕ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	obj	_	_
5	в	В	ADP	IN	_	6	case	_	_
6	восстании	ВОССТАНИЕ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	4	nmod	_	_
7	Степана	СТЕПАН	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	Разина	РАЗИН	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	flat	_	SpaceAfter=No
9	,	,	PUNCT	,	_	2	punct	_	_
10	а	А	CCONJ	CC	_	2	cc	_	_
11	позже	ПОЗЖЕ	ADV	RBR	Degree=Cmp	2	advmod	_	SpaceAfter=No
12	,	,	PUNCT	,	_	11	punct	_	_
13	и	И	CCONJ	CC	_	14	cc:preconj	_	_
14	мокшане	МОКШАНИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	conj	_	orig_deprel=nsubj
15	и	И	CCONJ	CC	_	16	cc	_	_
16	эрзяне	ЭРЗЯНИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	14	conj	_	_
17	--	--	PUNCT	--	_	18	punct	_	_
18	в	В	ADP	IN	_	14	orphan	_	orig_deprel=nmod
19	восстании	ВОССТАНИЕ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	18	nmod	_	_
20	Емельяна	ЕМЕЛЬЯН	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	19	nmod	_	_
21	Пугачёва	ПУГАЧЕВ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	20	flat	_	SpaceAfter=No
22	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 orphan	color:blue
1	В	В	ADP	IN	_	3	case	_	_
2	1834	1834	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	amod	_	_
3	г.	Г.	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
4	башкир	БАШКИР	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	5	obl	_	_
5	было	БЫТЬ	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
6	239	239	NUM	CD	Case=Nom|NumType=Card	4	nummod:gov	_	_
7	(	(	PUNCT	(	_	9	punct	_	SpaceAfter=No
8	15	15	NUM	CD	Case=Nom|NumType=Card	9	nummod:gov	_	_
9	дворов	ДВОР	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	appos	_	SpaceAfter=No
10	)	)	PUNCT	)	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	,	_	5	punct	_	_
12	тептярей	ТЕПТЯРЬ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	5	conj	_	orig_deprel=obl
13	--	--	PUNCT	--	_	15	punct	_	_
14	20	20	NUM	CD	Case=Nom|NumType=Card	15	nummod:gov	_	_
15	человек	ЧЕЛОВЕК	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	12	orphan	_	orig_deprel=nummod:gov|SpaceAfter=No
16	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 orphan	color:blue
1	С	С	ADP	IN	_	2	case	_	_
2	1944	1944	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	obl	_	_
3	по	ПО	ADP	IN	_	5	case	_	_
4	1948	1948	ADJ	ORD	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	amod	_	_
5	год	ГОД	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obl	_	_
6	жил	ЖИТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
7	в	В	ADP	IN	_	8	case	_	_
8	Германии	ГЕРМАНИЯ	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	6	punct	_	_
10	с	С	ADP	IN	_	14	orphan	_	orig_deprel=obl
11	1948	1948	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	amod	_	_
12	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
13	--	--	PUNCT	--	_	10	punct	_	_
14	в	В	ADP	IN	_	6	conj	_	orig_deprel=obl
15	Стокгольме	СТОКГОЛЬМ	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
16	,	,	PUNCT	,	_	6	punct	_	_
17	в	В	ADP	IN	_	19	case	_	_
18	1965	1965	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	19	amod	_	_
19	году	ГОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	20	obl	_	_
20	приезжал	ПРИЕЗЖАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	parataxis	_	_
21	на	НА	ADP	IN	_	22	case	_	_
22	полгода	ПОЛГОДА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	20	obl	_	_
23	в	В	ADP	IN	_	24	case	_	_
24	Ригу	РИГА	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	20	obl	_	SpaceAfter=No
25	.	.	PUNCT	.	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

2405 nodes (0%) are attached to their parents as `orphan`.

2320 instances of `orphan` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.04158004158004.

The following 108 pairs of parts of speech are connected with `orphan`: [ru-pos/VERB]()-[ru-pos/NOUN]() (657; 27% instances), [ru-pos/VERB]()-[ru-pos/CCONJ]() (330; 14% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (168; 7% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (145; 6% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (128; 5% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (113; 5% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (64; 3% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (63; 3% instances), [ru-pos/NOUN]()-[ru-pos/CCONJ]() (54; 2% instances), [ru-pos/VERB]()-[ru-pos/PART]() (52; 2% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (48; 2% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (43; 2% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (43; 2% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (39; 2% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (37; 2% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (29; 1% instances), [ru-pos/ADJ]()-[ru-pos/CCONJ]() (24; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (21; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (16; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (16; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (14; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (13; 1% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (13; 1% instances), [ru-pos/ADV]()-[ru-pos/CCONJ]() (12; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (12; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (10; 0% instances), [ru-pos/ADV]()-[ru-pos/PART]() (10; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (10; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (10; 0% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (9; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (9; 0% instances), [ru-pos/ADV]()-[ru-pos/SCONJ]() (9; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (8; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (7; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (7; 0% instances), [ru-pos/_]()-[ru-pos/NOUN]() (7; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (6; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (6; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (6; 0% instances), [ru-pos/PART]()-[ru-pos/ADV]() (6; 0% instances), [ru-pos/_]()-[ru-pos/ADJ]() (6; 0% instances), [ru-pos/_]()-[ru-pos/PRON]() (6; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADJ]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/SCONJ]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/ADP]()-[ru-pos/CCONJ]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/PART]()-[ru-pos/CCONJ]() (3; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/CCONJ]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/AUX]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/CCONJ]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/_]()-[ru-pos/ADP]() (2; 0% instances), [ru-pos/_]()-[ru-pos/CCONJ]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/CCONJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/CCONJ]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (1; 0% instances), [ru-pos/_]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/_]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/_]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/_]()-[ru-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 orphan	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 orphan	color:blue
1	До	до	ADP	_	_	4	advmod	4:advmod	_
2	сих	сей	DET	_	Case=Gen|Number=Plur	1	fixed	1:fixed	_
3	пор	пора	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	fixed	2:fixed	_
4	идут	идти	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	споры	спор	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
6	о	о	ADP	_	_	7	case	7:case	_
7	том	то	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	7:punct	_
9	достигли	достигать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	7	acl	7:acl	_
10	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	9	nsubj	9:nsubj	_
11	вершины	вершина	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	obl	9:obl	_
12	или	или	CCONJ	_	_	9	orphan	13.1:cc	_
13	нет	нет	PART	_	_	9	orphan	13.1:advmod	SpaceAfter=No
13.1	_	_	_	_	_	_	_	9:conj	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 orphan	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	obj	2:obj	_
2	сделал	делать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	другой	другой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
4	политический	политический	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	деятель	деятель	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
6	и	и	CCONJ	_	_	2	orphan	6.1:cc	_
6.1	_	_	_	_	_	_	_	2:conj	_
7	значительно	значительно	ADV	_	Degree=Pos	8	advmod	8:advmod	_
8	позже	поздно	ADV	_	Degree=Cmp	2	orphan	6.1:advmod	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


