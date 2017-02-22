

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

469 nodes (1%) are attached to their parents as `advcl`.

304 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.39445628997868.

The following 20 pairs of parts of speech are connected with `advcl`: [ru-pos/VERB]()-[ru-pos/VERB]() (372; 79% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (29; 6% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (27; 6% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (12; 3% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (4; 1% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (4; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (3; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advcl	color:blue
1	Как	КАК	SCONJ	IN	_	2	mark	_	_
2	понял	ПОНЯТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	advcl	_	_
3	Деворт	ДЕВОРТ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	2	punct	_	_
5	это	ЭТО	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
6	были	БЫТЬ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	9	cop	_	_
7	те	ТОТ	DET	DT	Animacy=Inan|Case=Nom|Number=Plur	9	det	_	_
8	самые	САМЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Number=Plur	9	amod	_	_
9	звуки	ЗВУК	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	_	_
11	о	О	ADP	IN	_	12	case	_	_
12	которых	КОТОРЫЙ	PRON	AWP	Animacy=Inan|Case=Loc|Number=Plur	13	obl	_	_
13	писал	ПИСАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	acl:relcl	_	_
14	Лебен	ЛЕБЕН	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
15	в	В	ADP	IN	_	16	case	_	_
16	дневнике	ДНЕВНИК	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	Голова	ГОЛОВА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	сверху	СВЕРХУ	ADV	RB	_	4	advmod	_	_
3	не	НЕ	PART	NEG	Polarity=Neg	4	advmod	_	_
4	видна	ВИДНЫЙ	ADJ	JJH	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	так	ТАК	SCONJ	IN	_	8	mark	_	_
7	как	КАК	ADV	WRB	_	6	fixed	_	_
8	прикрыта	ПРИКРЫТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	4	advcl	_	_
9	переднеспинкой	ПЕРЕДНЕСПИНКА	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	8	iobj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

15441 nodes (2%) are attached to their parents as `advcl`.

11535 instances of `advcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.69632795803381.

The following 73 pairs of parts of speech are connected with `advcl`: [ru-pos/VERB]()-[ru-pos/VERB]() (8682; 56% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (1362; 9% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (964; 6% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (765; 5% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (744; 5% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (626; 4% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (606; 4% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (219; 1% instances), [ru-pos/DET]()-[ru-pos/VERB]() (171; 1% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (155; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (135; 1% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (119; 1% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (109; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (91; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (89; 1% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (89; 1% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (62; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (48; 0% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (35; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (32; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (30; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (29; 0% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (28; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (25; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (22; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (17; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (12; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (11; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (11; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (11; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (10; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (9; 0% instances), [ru-pos/PUNCT]()-[ru-pos/VERB]() (9; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (9; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (8; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (8; 0% instances), [ru-pos/PRON]()-[ru-pos/PROPN]() (8; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (8; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (7; 0% instances), [ru-pos/VERB]()-[ru-pos/DET]() (7; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/DET]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/SCONJ]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/DET]()-[ru-pos/PROPN]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/SCONJ]() (2; 0% instances), [ru-pos/CCONJ]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/_]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/_]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/AUX]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (1; 0% instances), [ru-pos/_]()-[ru-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Донато	донато	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	установил	устанавливать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	что	что	SCONJ	_	_	2	mark	2:mark	_
5	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	6	nsubj:pass	6:nsubj:pass	_
6	сделаны	делать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	advcl	2:advcl	_
7	человеком	человек	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	obl:agent	6:obl:agent	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
1	Все-таки	все-таки	PART	_	_	12	advmod	12:advmod	_
2	то	то	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	12	nsubj	12:nsubj	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	что	что	SCONJ	_	_	2	mark	2:mark	_
5	он	он	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	8:nsubj	_
6	ничего	ничто	PRON	_	Case=Gen	8	obl	8:obl	_
7	не	не	PART	_	_	8	advmod	8:advmod	_
8	делает	делать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	2:advcl	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	8:punct	_
10	его	он	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obj	12:obj	_
11	очень	очень	ADV	_	Degree=Pos	12	advmod	12:advmod	_
12	терзало	терзать	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 advcl	color:blue
1	Когда	когда	SCONJ	_	_	8	mark	8:mark	_
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	3	nsubj	3:nsubj	_
3	вижу	видеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	advcl	8:advcl	_
4	их	они	PRON	_	Case=Gen|Number=Plur|Person=3	5	nmod	5:nmod	_
5	родителей	родитель	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	3	obj	3:obj	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	8	nsubj	8:nsubj	_
8	готов	готовый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	0:root	_
9	им	они	PRON	_	Case=Dat|Number=Plur|Person=3	10	obl	10:obl	_
10	поклониться	поклониться	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Mid	8	dep	8:dep	_
11	в	в	ADP	_	_	12	case	12:case	_
12	ноги	нога	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	10	obl	10:obl	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	12:punct	_

~~~


