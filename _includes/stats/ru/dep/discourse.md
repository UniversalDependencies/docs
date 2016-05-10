

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

565 nodes (1%) are attached to their parents as `discourse`.

400 instances of `discourse` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11681415929204.

The following 43 pairs of parts of speech are connected with `discourse`: [ru-pos/NOUN]()-[ru-pos/X]() (119; 21% instances), [ru-pos/DET]()-[ru-pos/X]() (80; 14% instances), [ru-pos/VERB]()-[ru-pos/X]() (70; 12% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (48; 8% instances), [ru-pos/ADV]()-[ru-pos/X]() (39; 7% instances), [ru-pos/ADJ]()-[ru-pos/X]() (31; 5% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (24; 4% instances), [ru-pos/NUM]()-[ru-pos/X]() (18; 3% instances), [ru-pos/VERB]()-[ru-pos/CONJ]() (15; 3% instances), [ru-pos/PROPN]()-[ru-pos/X]() (13; 2% instances), [ru-pos/PRON]()-[ru-pos/X]() (12; 2% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (11; 2% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (10; 2% instances), [ru-pos/VERB]()-[ru-pos/PART]() (9; 2% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (6; 1% instances), [ru-pos/CONJ]()-[ru-pos/X]() (5; 1% instances), [ru-pos/NUM]()-[ru-pos/ADV]() (5; 1% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (5; 1% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (4; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (4; 1% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (3; 1% instances), [ru-pos/ADV]()-[ru-pos/PART]() (3; 1% instances), [ru-pos/X]()-[ru-pos/PART]() (3; 1% instances), [ru-pos/X]()-[ru-pos/X]() (3; 1% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/X]() (2; 0% instances), [ru-pos/SYM]()-[ru-pos/X]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/X]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/X]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	Кассандра	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
2	,	_	PUNCT	,	_	5	punct	_	_
3	как	_	ADP	IN	_	5	case	_	_
4	и	_	X	UH	_	5	discourse	_	_
5	сестра	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	1	nmod	_	_
6	,	_	PUNCT	,	_	5	punct	_	_
7	замуж	_	ADV	RB	_	11	advmod	_	_
8	так	_	ADV	RB	_	11	advmod	_	_
9	и	_	X	UH	_	11	discourse	_	_
10	не	_	PART	NEG	_	11	neg	_	_
11	вышла	_	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	В	_	ADP	IN	_	4	case	_	_
2	этом	_	DET	DT	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	det	_	_
3	же	_	X	UH	_	2	discourse	_	_
4	году	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	_
5	начались	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past	0	root	_	_
6	работы	_	NOUN	NN	Animacy=Inan|Case=Nom|Number=Plur	5	nsubj	_	_
7	по	_	ADP	IN	_	8	case	_	_
8	мощению	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	6	nmod	_	_
9	улицы	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 discourse	color:blue
1	Кассандра	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
2	,	_	PUNCT	,	_	5	punct	_	_
3	как	_	ADP	IN	_	5	case	_	_
4	и	_	X	UH	_	5	discourse	_	_
5	сестра	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	1	nmod	_	_
6	,	_	PUNCT	,	_	5	punct	_	_
7	замуж	_	ADV	RB	_	11	advmod	_	_
8	так	_	ADV	RB	_	11	advmod	_	_
9	и	_	X	UH	_	11	discourse	_	_
10	не	_	PART	NEG	_	11	neg	_	_
11	вышла	_	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


