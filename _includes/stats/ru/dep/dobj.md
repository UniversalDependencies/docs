

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

2631 nodes (3%) are attached to their parents as `dobj`.

2289 instances of `dobj` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.09692132269099.

The following 25 pairs of parts of speech are connected with `dobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (2199; 84% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (213; 8% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (119; 5% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (18; 1% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (16; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (11; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (9; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (8; 0% instances), [ru-pos/VERB]()-[ru-pos/DET]() (7; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/AUX]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 dobj	color:blue
1	В	В	ADP	IN	_	2	case	_	_
2	выборах	ВЫБОРЫ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	3	nmod	_	_
3	могли	МОЧЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
4	участвовать	УЧАСТВОВАТЬ	VERB	VB	Aspect=Imp|VerbForm=Inf	3	xcomp	_	_
5	только	ТОЛЬКО	PART	UH	_	6	discourse	_	_
6	граждане	ГРАЖДАНИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
7	,	,	PUNCT	,	_	8	punct	_	_
8	платящие	ПЛАТИТЬ	VERB	VBNL	Animacy=Anim|Aspect=Imp|Case=Nom|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	6	acl	_	_
9	налоги	НАЛОГ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	8	dobj	_	_
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dobj	color:blue
1	Они	ОНИ	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	вели	ВЕСТИ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	себя	СЕБЯ	PRON	PRP	Case=Acc|Reflex=Yes	2	dobj	_	_
4	,	,	PUNCT	,	_	2	punct	_	_
5	словно	СЛОВНО	SCONJ	IN	_	8	mark	_	_
6	оба	ОБА	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc	8	nsubj	_	_
7	не	НЕ	PART	NEG	_	8	neg	_	_
8	ожидали	ОЖИДАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	2	advcl	_	_
9	встретить	ВСТРЕТИТЬ	VERB	VB	Aspect=Perf|VerbForm=Inf	8	xcomp	_	_
10	друг	ДРУГ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	dobj	_	_
11	друга	ДРУГ	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	10	nmod	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dobj	color:blue
1	Ещё	ЕЩЕ	ADV	RB	_	3	advmod	_	_
2	в	В	ADP	IN	_	3	case	_	_
3	правление	ПРАВЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	nmod	_	_
4	отца	ОТЕЦ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	получил	ПОЛУЧИТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
6	Западную	ЗАПАДНЫЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing|Variant=Full	7	amod	_	_
7	Моравию	МОРАВИЯ	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	dobj	_	_
8	(	(	PUNCT	(	_	9	punct	_	_
9	1029	1029	ADJ	ORD	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	appos	_	_
10	)	)	PUNCT	)	_	9	punct	_	_
11	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

33390 nodes (3%) are attached to their parents as `dobj`.

26695 instances of `dobj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05693321353699.

The following 20 pairs of parts of speech are connected with `dobj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (27314; 82% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (3883; 12% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (1135; 3% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (897; 3% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (65; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (41; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (12; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (9; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (8; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (6; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dobj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dobj	color:blue
1	Она	она	PRON	_	_	2	nsubj	_	_
2	означает	означать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	нечто	нечто	PRON	_	_	2	dobj	_	_
4	принципиально	принципиально	ADV	_	Degree=Pos	5	advmod	_	_
5	другое	другой	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	3	amod	_	_
6	-	-	PUNCT	-	_	5	punct	_	_
7	продолжение	продолжение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	3	parataxis	_	_
8	работы	работа	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 dobj	color:blue
1	Назвать	называть	VERB	_	Aspect=Perf|VerbForm=Inf	5	nsubj	_	_
2	это	это	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	1	dobj	_	_
3	формализмом	формализм	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	nmod	_	_
4	-	-	PUNCT	-	_	3	punct	_	_
5	все_равно	все_равно	ADV	_	Degree=Pos	0	root	_	_
6	что	что	SCONJ	_	_	7	mark	_	_
7	назвать	называть	VERB	_	Aspect=Perf|VerbForm=Inf	5	advcl	_	_
8	черное	черный	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	dobj	_	_
9	белым	белый	ADJ	_	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


