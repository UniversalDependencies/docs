

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

35 nodes (0%) are attached to their parents as `expl`.

35 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71428571428571.

The following 5 pairs of parts of speech are connected with `expl`: [ru-pos/VERB]()-[ru-pos/PRON]() (30; 86% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (2; 6% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (1; 3% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 3% instances), [ru-pos/_]()-[ru-pos/PRON]() (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	expl	4:expl	_
2	как	как	ADV	_	Degree=Pos	4	advmod	4:advmod	_
3	кто	кто	PRON	_	Case=Nom	4	nsubj	4:nsubj	_
4	решит	решать	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	для	для	ADP	_	_	6	case	6:case	_
6	себя	себя	PRON	_	Case=Gen	4	obl	4:obl	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	6:punct	_
8	посмотрев	смотреть	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	4	advcl	4:advcl	_
9	фильм	фильм	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 expl	color:blue
1	А	а	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	1:punct	SpaceAfter=No
3	Улюкаев	улюкаев	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat:name	1:flat:name	_
4	как-то	как-то	ADV	_	Degree=Pos	5	advmod	5:advmod	_
5	заметил	замечать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	:	:	PUNCT	_	_	5	punct	5:punct	_
7	"	"	PUNCT	_	_	9	punct	5:punct	SpaceAfter=No
8	…	…	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
9	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	13	expl	13:expl	_
10	не	не	PART	_	_	11	advmod	11:advmod	_
11	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1	13	nsubj	13:nsubj	_
12	такие	такой	DET	_	Case=Nom|Number=Plur	13	amod	13:amod	_
13	выдающиеся	выдающийся	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	5	obl	5:obl	_
14	и	и	CCONJ	_	_	15	cc	15:cc	_
15	умные	умный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	13	conj	13:conj	SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	4	expl	2.2:expl	_
2	она	она	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	2.2:nsubj	_
2.1	_	_	_	_	_	_	_	2.2:advmod	_
2.2	_	_	_	_	_	_	_	0:exroot	_
3	без	без	ADP	_	_	4	case	4:case	_
4	повода	повод	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	для	для	ADP	_	_	7	case	7:case	_
7	оскорбления	оскорбление	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	conj	4:conj	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


