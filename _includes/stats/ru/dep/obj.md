

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

2318 nodes (3%) are attached to their parents as `obj`.

2027 instances of `obj` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.07851596203624.

The following 26 pairs of parts of speech are connected with `obj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (1936; 84% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (183; 8% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (101; 4% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (17; 1% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (14; 1% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (10; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (9; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (8; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (7; 0% instances), [ru-pos/VERB]()-[ru-pos/DET]() (7; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/AUX]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obj	color:blue
1	Дун	ДУН	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	захвачен	ЗАХВАТИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	якобитами	ЯКОБИТ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	3	iobj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	которые	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Nom|Number=Plur	7	nsubj	_	_
7	устроили	УСТРОИТЬ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
8	в	В	ADP	IN	_	9	case	_	_
9	замке	ЗАМОК	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
10	тюрьму	ТЮРЬМА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Они	ОНИ	PRON	PRP	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	вели	ВЕСТИ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	себя	СЕБЯ	PRON	PRP	Case=Acc|Reflex=Yes	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	2	punct	_	_
5	словно	СЛОВНО	SCONJ	IN	_	8	mark	_	_
6	оба	ОБА	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc|NumType=Card	8	nsubj	_	_
7	не	НЕ	PART	NEG	Polarity=Neg	8	advmod	_	_
8	ожидали	ОЖИДАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	2	advcl	_	_
9	встретить	ВСТРЕТИТЬ	VERB	VB	Aspect=Perf|VerbForm=Inf	8	xcomp	_	_
10	друг	ДРУГ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	obj	_	_
11	друга	ДРУГ	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Барыкина	БАРЫКИН	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
2	иногда	ИНОГДА	ADV	RB	_	3	advmod	_	_
3	называют	НАЗЫВАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	``	``	PUNCT	``	_	5	punct	_	SpaceAfter=No
5	отцом	ОТЕЦ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	3	advmod	_	_
6	русского	РУССКИЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	amod	_	_
7	регги	РЕГГИ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	5	punct	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

30426 nodes (3%) are attached to their parents as `obj`.

24271 instances of `obj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.06721225267863.

The following 31 pairs of parts of speech are connected with `obj`: [ru-pos/VERB]()-[ru-pos/NOUN]() (23971; 79% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (4983; 16% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (827; 3% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (301; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (104; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (60; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (50; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (25; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (16; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (15; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (10; 0% instances), [ru-pos/_]()-[ru-pos/NOUN]() (8; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (7; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (7; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/DET]() (3; 0% instances), [ru-pos/CCONJ]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/CCONJ]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 obj	color:blue
1	Разумеется	разумеется	ADV	_	Degree=Pos	7	parataxis	7:parataxis	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	эти	этот	DET	_	Case=Acc|Number=Plur	4	amod	4:amod	_
4	объяснения	объяснение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	8	obj	8:obj	_
5	вряд	вряд	ADV	_	Degree=Pos	7	advmod	7:advmod	_
6	ли	ли	PART	_	_	5	fixed	5:fixed	_
7	можно	можно	ADV	_	Degree=Pos	0	root	0:root	_
8	счесть	считать	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	7	nsubj	7:nsubj	_
9	убедительными	убедительный	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	3	obj	3:obj	_
2	чутко	чутко	ADV	_	Degree=Pos	3	advmod	3:advmod	_
3	фиксируют	фиксировать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	энциклопедические	энциклопедический	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	5	amod	5:amod	_
5	издания	издание	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	3	nsubj	3:nsubj	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obj	color:blue
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


