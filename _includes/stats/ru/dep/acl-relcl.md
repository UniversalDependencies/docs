

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [acl]().

653 nodes (1%) are attached to their parents as `acl:relcl`.

651 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.22052067381317.

The following 18 pairs of parts of speech are connected with `acl:relcl`: [ru-pos/NOUN]()-[ru-pos/VERB]() (457; 70% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (57; 9% instances), [ru-pos/DET]()-[ru-pos/VERB]() (42; 6% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (26; 4% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (22; 3% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (21; 3% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (7; 1% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (5; 1% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Учился	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
2	в	_	ADP	IN	_	3	case	_	_
3	школе	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	1	nmod	_	_
4	No409	_	NUM	CD	Case=Nom	3	nummod	_	_
5	,	_	PUNCT	,	_	7	punct	_	_
6	которую	_	DET	WDT	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	dobj	_	_
7	закончил	_	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	3	acl:relcl	_	_
8	с	_	ADP	IN	_	10	case	_	_
9	золотой	_	ADJ	JJL	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	10	amod	_	_
10	медалью	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	7	nmod	_	_
11	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl:relcl	color:blue
1	Аминта	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	был	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	3	cop	_	_
3	сыном	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
4	царя	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	галатов	_	NOUN	NN	Animacy=Anim|Case=Gen|Number=Plur	4	nmod	_	_
6	и	_	CONJ	CC	_	4	cc	_	_
7	дочери	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	4	conj	_	_
8	Дейотара	_	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	,	_	PUNCT	,	_	12	punct	_	_
10	которому	_	DET	WDT	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	12	iobj	_	_
11	Аминта	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
12	наследовал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	8	acl:relcl	_	_
13	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Проигравшим	_	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	2	advmod	_	_
2	считается	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	тот	_	DET	DT	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	,	_	PUNCT	,	_	7	punct	_	_
5	кто	_	PRON	WP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
6	не	_	PART	NEG	_	7	neg	_	_
7	может	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	acl:relcl	_	_
8	сделать	_	VERB	VB	Aspect=Perf	7	xcomp	_	_
9	ход	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	dobj	_	_
10	.	_	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is a language-specific subtype of [acl]().

6627 nodes (1%) are attached to their parents as `acl:relcl`.

6621 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.39655952919873.

The following 27 pairs of parts of speech are connected with `acl:relcl`: [ru-pos/NOUN]()-[ru-pos/VERB]() (5425; 82% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (468; 7% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (188; 3% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (186; 3% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (131; 2% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (106; 2% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (25; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (18; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (17; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (12; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (11; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (7; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/SYM]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	Он	ОН	PRON	_	_	2	nsubj	_	_
2	увидел	ВИДЕТЬ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	платформу	ПЛАТФОРМА	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	с	С	ADP	_	_	6	case	_	_
6	которой	КОТОРЫЙ	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	nmod	_	_
7	словно	СЛОВНО	PART	_	_	8	advmod	_	_
8	сдуло	СДУВАТЬ	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
9	людей	ЧЕЛОВЕК	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	8	dobj	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Теперь	ТЕПЕРЬ	ADV	_	Degree=Pos	2	advmod	_	_
2	выделим	ВЫДЕЛЯТЬ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
3	черты	ЧЕРТА	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	dobj	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	которые	КОТОРЫЙ	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	6	nsubj	_	_
6	должны	ДОЛЖЕН	ADJ	_	Degree=Pos|Number=Plur|Variant=Brev	3	acl:relcl	_	_
7	насторожить	НАСТОРАЖИВАТЬ	VERB	_	Aspect=Perf|VerbForm=Inf	6	dep	_	_
8	биолога	БИОЛОГ	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	7	dobj	_	_
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	Как	КАК	ADV	_	Degree=Pos	4	advmod	_	_
2	же	ЖЕ	PART	_	_	1	advmod	_	_
3	они	ОНИ	PRON	_	_	4	nsubj	_	_
4	жили	ЖИТЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	с	С	ADP	_	_	6	case	_	_
6	крыльями	КРЫЛО	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	4	nmod	_	_
7	,	,	PUNCT	,	_	6	punct	_	_
8	на	НА	ADP	_	_	9	case	_	_
9	которых	КОТОРЫЙ	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	11	nmod	_	_
10	нельзя	НЕЛЬЗЯ	ADV	_	Degree=Pos	6	acl:relcl	_	_
11	летать	ЛЕТАТЬ	VERB	_	Aspect=Imp|VerbForm=Inf	10	nsubj	_	_
12	?	?	PUNCT	?	_	4	punct	_	_

~~~


