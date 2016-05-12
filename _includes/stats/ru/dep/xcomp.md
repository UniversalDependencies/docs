

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

660 nodes (1%) are attached to their parents as `xcomp`.

636 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75606060606061.

The following 7 pairs of parts of speech are connected with `xcomp`: [ru-pos/VERB]()-[ru-pos/VERB]() (563; 85% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (66; 10% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (11; 2% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (9; 1% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (7; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	В	_	ADP	IN	_	2	case	_	_
2	выборах	_	NOUN	NN	Animacy=Inan|Case=Loc|Number=Plur	3	nmod	_	_
3	могли	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
4	участвовать	_	VERB	VB	Aspect=Imp	3	xcomp	_	_
5	только	_	X	UH	_	6	discourse	_	_
6	граждане	_	NOUN	NN	Animacy=Anim|Case=Nom|Number=Plur	3	nsubj	_	_
7	,	_	PUNCT	,	_	8	punct	_	_
8	платящие	_	VERB	VBNL	Animacy=Anim|Aspect=Imp|Case=Nom|Number=Plur|Tense=Pres|Voice=Act	6	acl	_	_
9	налоги	_	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur	8	dobj	_	_
10	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 xcomp	color:blue
1	И	_	CONJ	CC	_	7	cc	_	_
2	в	_	ADP	IN	_	5	case	_	_
3	то	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	5	det	_	_
4	же	_	X	UH	_	3	discourse	_	_
5	время	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	7	nmod	_	_
6	малыш	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
7	должен	_	ADJ	JJH	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	как	_	SCONJ	WRB	_	10	mark	_	_
9	будто	_	ADP	IN	_	8	mwe	_	_
10	идти	_	VERB	VB	Aspect=Imp	7	xcomp	_	_
11	к	_	ADP	IN	_	12	case	_	_
12	папе	_	NOUN	NN	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	10	nmod	_	_
13	,	_	PUNCT	,	_	12	punct	_	_
14	к	_	ADP	IN	_	12	conj	_	_
15	кораблю	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	14	nmod	_	_
16	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	В	_	ADP	IN	_	2	case	_	_
2	сезоне	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	_
3	2001/02	_	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	amod	_	_
4	помог	_	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
5	норильчанам	_	NOUN	NN	Animacy=Anim|Case=Dat|Number=Plur	4	iobj	_	_
6	стать	_	VERB	VB	Aspect=Perf	7	cop	_	_
7	чемпионами	_	NOUN	NN	Animacy=Anim|Case=Ins|Number=Plur	4	xcomp	_	_
8	России	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	.	_	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-Syntagrus)

This relation is universal.

8386 nodes (1%) are attached to their parents as `xcomp`.

7939 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78487956117338.

The following 1 pairs of parts of speech are connected with `xcomp`: [ru-pos/VERB]()-[ru-pos/VERB]() (8386; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Алгоритм	АЛГОРИТМ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	может	МОЧЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	быть	БЫТЬ	AUX	_	Aspect=Imp|VerbForm=Inf	4	auxpass	_	_
4	записан	ЗАПИСЫВАТЬ	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	2	xcomp	_	_
5	словами	СЛОВО	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	4	dobj	_	_
6	и	И	CONJ	_	_	4	cc	_	_
7	изображён	ИЗОБРАЖАТЬ	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	4	conj	_	_
8	схематически	СХЕМАТИЧЕСКИ	ADV	_	Degree=Pos	7	advmod	_	_
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


