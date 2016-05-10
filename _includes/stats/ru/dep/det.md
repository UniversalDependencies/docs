

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

1445 nodes (1%) are attached to their parents as `det`.

1393 instances of `det` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31764705882353.

The following 19 pairs of parts of speech are connected with `det`: [ru-pos/NOUN]()-[ru-pos/DET]() (668; 46% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (655; 45% instances), [ru-pos/PROPN]()-[ru-pos/DET]() (30; 2% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (23; 2% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (13; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (12; 1% instances), [ru-pos/PRON]()-[ru-pos/DET]() (10; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (8; 1% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (7; 0% instances), [ru-pos/DET]()-[ru-pos/DET]() (5; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/X]()-[ru-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	В	_	ADP	IN	_	3	case	_	_
2	этом	_	DET	DT	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	det	_	_
3	эпизоде	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	_
4	Стренджер	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	отправляется	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	во	_	ADP	IN	_	7	case	_	_
7	Францию	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
8	,	_	PUNCT	,	_	5	punct	_	_
9	год	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nmod	_	_
10	1935	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	amod	_	_
11	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Он	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	утверждал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
3	,	_	PUNCT	,	_	2	punct	_	_
4	что	_	SCONJ	IN	_	9	mark	_	_
5	по	_	ADP	IN	_	7	case	_	_
6	своей	_	PRON	PRP$	Case=Dat|Reflex=Yes	7	det	_	_
7	природе	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	9	nmod	_	_
8	вирус	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
9	жидкий	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	ccomp	_	_
10	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Появилась	_	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
2	знакомая	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
3	семья	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
4	из	_	ADP	IN	_	6	case	_	_
5	The	_	DET	DT	Animacy=Anim|Case=Nom|Number=Plur	6	det	_	_
6	Sims	_	PROPN	NNP	Animacy=Anim|Case=Nom|Number=Plur	3	nmod	_	_
7	2	_	NUM	CD	Animacy=Anim|Case=Nom|Gender=Masc	6	nummod	_	_
8	--	_	PUNCT	-	_	3	punct	_	_
9	сестры	_	NOUN	NN	Animacy=Anim|Case=Nom|Number=Plur	3	appos	_	_
10	Гонгадзе	_	PROPN	NNP	Animacy=Anim|Case=Nom|Number=Plur	9	appos	_	_
11	.	_	PUNCT	.	_	1	punct	_	_

~~~


