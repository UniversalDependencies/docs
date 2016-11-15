

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

294 nodes (0%) are attached to their parents as `ccomp`.

287 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.78571428571429.

The following 21 pairs of parts of speech are connected with `ccomp`: [ru-pos/VERB]()-[ru-pos/VERB]() (193; 66% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (28; 10% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (20; 7% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (11; 4% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (11; 4% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (8; 3% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (5; 2% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (2; 1% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (2; 1% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (2; 1% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (2; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Они	ОНИ	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	сказали	СКАЗАТЬ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	мне	Я	PRON	PRP	Case=Dat|Number=Sing|Person=1	2	iobj	_	_
4	,	,	PUNCT	,	_	8	punct	_	_
5	что	ЧТО	SCONJ	IN	_	8	mark	_	_
6	им	ОНИ	PRON	PRP	Case=Dat|Number=Plur|Person=3	8	iobj	_	_
7	очень	ОЧЕНЬ	ADV	RB	_	8	advmod	_	_
8	понравилось	ПОНРАВИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	ccomp	_	_
9	мое	МОЙ	DET	PRP$	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|Person=1	10	det	_	_
10	выступление	ВЫСТУПЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 ccomp	color:blue
1	Когда	КОГДА	SCONJ	IN	_	3	mark	_	_
2	Эд	ЭД	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	выходит	ВЫХОДИТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	один	ОДИН	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nummod	_	_
6	оператор	ОПЕРАТОР	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	остается	ОСТАВАТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	с	С	ADP	IN	_	9	case	_	_
9	Шэри	ШЭРИ	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	7	nmod	_	_
10	,	,	PUNCT	,	_	11	punct	_	_
11	говоря	ГОВОРИТЬ	VERB	VBG	Aspect=Imp|VerbForm=Trans	7	advcl	_	_
12	,	,	PUNCT	,	_	17	punct	_	_
13	что	ЧТО	SCONJ	IN	_	17	mark	_	_
14	это	ЭТО	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	17	nsubj	_	_
15	--	--	PUNCT	--	_	17	punct	_	_
16	новая	НОВЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Full	17	amod	_	_
17	идея	ИДЕЯ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	11	ccomp	_	_
18	продюсеров	ПРОДЮСЕР	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	17	nmod	_	_
19	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Он	ОН	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	утверждал	УТВЕРЖДАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	ЧТО	SCONJ	IN	_	9	mark	_	_
5	по	ПО	ADP	IN	_	7	case	_	_
6	своей	СВОЙ	DET	PRP$	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Reflex=Yes	7	det	_	_
7	природе	ПРИРОДА	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	9	nmod	_	_
8	вирус	ВИРУС	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
9	жидкий	ЖИДКИЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Variant=Full	2	ccomp	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

915 nodes (0%) are attached to their parents as `ccomp`.

808 instances of `ccomp` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.11256830601093.

The following 2 pairs of parts of speech are connected with `ccomp`: [ru-pos/VERB]()-[ru-pos/VERB]() (914; 100% instances), [ru-pos/VERB]()-[ru-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp	color:blue
1	Ложась	ложиться	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Trans|Voice=Act	6	advcl	_	_
2	спать	спать	VERB	_	Aspect=Imp|VerbForm=Inf	1	xcomp	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	он	он	PRON	_	_	6	nsubj	_	_
5	не	не	PART	_	_	6	neg	_	_
6	понимал	понимать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	,	,	PUNCT	,	_	6	punct	_	_
8	куда	куда	ADV	_	Degree=Pos	9	advmod	_	_
9	девалось	деваться	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	ccomp	_	_
10	время	время	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Громко	громко	ADV	_	Degree=Pos	3	advmod	_	_
2	я	я	PRON	_	_	3	nsubj	_	_
3	кричу	кричать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	:	:	PUNCT	:	_	6	punct	_	_
5	"	"	PUNCT	"	_	6	punct	_	_
6	Да	да	PART	_	_	3	ccomp	_	_
7	здравствует	здравствовать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	mwe	_	_
8	реконструкция	реконструкция	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
9	человеческого	человеческий	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	материала	материал	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
11	,	,	PUNCT	,	_	10	punct	_	_
12	всеобъемлющая	всеобъемлющий	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	инженерия	инженерия	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	conj	_	_
14	нового	новый	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	мира	мир	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
16	"	"	PUNCT	"	_	15	punct	_	_
17	"	"	PUNCT	"	_	15	punct	_	_
18	.	.	PUNCT	.	_	3	punct	_	_

~~~


