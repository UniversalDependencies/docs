

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

1169 nodes (1%) are attached to their parents as `det`.

1153 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30538922155689.

The following 13 pairs of parts of speech are connected with `det`: [ru-pos/NOUN]()-[ru-pos/DET]() (1089; 93% instances), [ru-pos/PROPN]()-[ru-pos/DET]() (30; 3% instances), [ru-pos/PRON]()-[ru-pos/DET]() (11; 1% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (9; 1% instances), [ru-pos/ADV]()-[ru-pos/DET]() (9; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (6; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (5; 0% instances), [ru-pos/ADP]()-[ru-pos/DET]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Хозяин	ХОЗЯИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	может	МОЧЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	устроить	УСТРОИТЬ	VERB	VB	Aspect=Perf|VerbForm=Inf	2	xcomp	_	_
4	своего	СВОЙ	DET	PRP$	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Reflex=Yes	5	det	_	_
5	питомца	ПИТОМЕЦ	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	на	НА	ADP	IN	_	7	case	_	_
7	работу	РАБОТА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	В	В	ADP	IN	_	2	case	_	_
2	благодарность	БЛАГОДАРНОСТЬ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
3	за	ЗА	ADP	IN	_	4	case	_	_
4	это	ЭТОТ	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	2	nmod	_	_
5	духовенство	ДУХОВЕНСТВО	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
6	помогло	ПОМОЧЬ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
7	Хакону	ХАКОН	PROPN	NNP	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	6	iobj	_	_
8	покорить	ПОКОРИТЬ	VERB	VB	Aspect=Perf|VerbForm=Inf	6	xcomp	_	_
9	почти	ПОЧТИ	ADV	RB	_	8	advmod	_	_
10	всю	ВЕСЬ	DET	DT	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	11	det	_	_
11	Исландию	ИСЛАНДИЯ	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
12	и	И	CCONJ	CC	_	13	cc	_	_
13	Гренландию	ГРЕНЛАНДИЯ	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det	color:blue
1	Я	Я	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	полюбил	ПОЛЮБИТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
3	их	ОНИ	PRON	PRP	Case=Acc|Number=Plur|Person=3	2	obj	_	_
4	всех	ВЕСЬ	DET	DT	Animacy=Anim|Case=Acc|Number=Plur	3	det	_	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	_	_
6	и	И	CCONJ	CC	_	8	cc	_	_
7	это	ЭТО	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
8	легло	ЛЕЧЬ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	conj	_	_
9	в	В	ADP	IN	_	10	case	_	_
10	основу	ОСНОВА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
11	сюжета	СЮЖЕТ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
12	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	2	punct	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


