

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

60 nodes (0%) are attached to their parents as `compound`.

60 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11666666666667.

The following 6 pairs of parts of speech are connected with `compound`: [ru-pos/NOUN]()-[ru-pos/NUM]() (50; 83% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (4; 7% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (2; 3% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (2; 3% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 2% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	По	ПО	ADP	IN	_	3	case	_	_
2	официальным	ОФИЦИАЛЬНЫЙ	ADJ	JJL	Animacy=Inan|Case=Dat|Number=Plur|Variant=Full	3	amod	_	_
3	данным	ДАННЫЕ	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Plur	5	nmod	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	погибло	ПОГИБНУТЬ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
6	более	БОЛЕЕ	ADV	RBR	Degree=Cmp	8	advmod	_	_
7	двух	ДВА	NUM	CD	Animacy=Inan|Case=Gen|Gender=Fem	8	compound	_	_
8	тысяч	ТЫСЯЧА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	9	nummod:gov	_	_
9	человек	ЧЕЛОВЕК	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	5	nsubj	_	_
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Их	ИХ	DET	PRP$	Person=3	2	det	_	_
2	выступления	ВЫСТУПЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	3	nsubj	_	_
3	включали	ВКЛЮЧАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
4	в	В	ADP	IN	_	5	case	_	_
5	себя	СЕБЯ	PRON	PRP	Case=Acc|Reflex=Yes	3	nmod	_	_
6	tribal	TRIBAL	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Variant=Full	8	amod	_	_
7	body	BODY	ADJ	JJ	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	compound	_	_
8	paint	PAINT	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	dobj	_	_
9	,	,	PUNCT	,	_	8	punct	_	_
10	танцы	ТАНЕЦ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	8	conj	_	_
11	с	С	ADP	IN	_	12	case	_	_
12	огнём	ОГОНЬ	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	10	nmod	_	_
13	и	И	CONJ	CC	_	8	cc	_	_
14	fire	FIRE	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	nmod	_	_
15	breathing	BREATHING	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	conj	_	_
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 compound	color:blue
1	Астольф	АСТОЛЬФ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	один	ОДИН	ADV	RB	_	1	advmod	_	_
3	вызывает	ВЫЗЫВАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	на	НА	ADP	IN	_	5	case	_	_
5	бой	БОЙ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	nmod	_	_
6	все	ВЕСЬ	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	7	det	_	_
7	войско	ВОЙСКО	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	3	dobj	_	_
8	татарского	ТАТАРСКИЙ	ADJ	JJL	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Variant=Full	9	amod	_	_
9	царя	ЦАРЬ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	2	2	NUM	CD	Animacy=Inan|Case=Nom|Gender=Masc	12	compound	_	_
11	миллиона	МИЛЛИОН	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	12	compound	_	_
12	200	200	NUM	CD	Case=Nom	13	nummod:gov	_	_
13	тысяч	ТЫСЯЧА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	7	nummod:entity	_	_
14	.	.	PUNCT	.	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

868 nodes (0%) are attached to their parents as `compound`.

867 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95506912442396.

The following 14 pairs of parts of speech are connected with `compound`: [ru-pos/ADJ]()-[ru-pos/ADJ]() (546; 63% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (176; 20% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (69; 8% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (25; 3% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (16; 2% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (12; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (5; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (4; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound	color:blue
1	Комбинированные	комбинированный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
2	скально	скальный	ADJ	_	Degree=Pos	4	compound	_	_
3	-	-	PUNCT	-	_	2	punct	_	_
4	снежно	снежный	ADJ	_	Degree=Pos	6	compound	_	_
5	-	-	PUNCT	-	_	4	punct	_	_
6	ледовые	ледовый	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
7	восхождения	восхождение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 compound	color:blue
1	Концепцию	концепция	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	dobj	_	_
2	реформы	реформа	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
3	президент	президент	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	ждет	ждать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	и	и	PART	_	_	9	advmod	_	_
6	от	от	ADP	_	_	9	case	_	_
7	бизнес	бизнес	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	compound	_	_
8	-	-	PUNCT	-	_	7	punct	_	_
9	сообщества	сообщество	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	iobj	_	_
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound	color:blue
1	Число	число	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	nsubj	_	_
2	ИТ	ит	PROPN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	compound	_	_
3	-	-	PUNCT	-	_	2	punct	_	_
4	компаний	компания	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	1	nmod	_	_
5	в	в	ADP	_	_	6	case	_	_
6	стране	страна	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	_
7	растет	расти	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


