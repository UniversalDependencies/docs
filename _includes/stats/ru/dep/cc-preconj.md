

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [cc]().

183 nodes (0%) are attached to their parents as `cc:preconj`.

180 instances of `cc:preconj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.38251366120219.

The following 8 pairs of parts of speech are connected with `cc:preconj`: [ru-pos/VERB]()-[ru-pos/CONJ]() (117; 64% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (36; 20% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (15; 8% instances), [ru-pos/PROPN]()-[ru-pos/CONJ]() (6; 3% instances), [ru-pos/ADP]()-[ru-pos/CONJ]() (4; 2% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (2; 1% instances), [ru-pos/DET]()-[ru-pos/CONJ]() (2; 1% instances), [ru-pos/PRON]()-[ru-pos/CONJ]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc:preconj	color:blue
1	Но	_	CONJ	CC	_	7	cc:preconj	_	_
2	в	_	ADP	IN	_	4	case	_	_
3	1990	_	ADJ	JJL	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	amod	_	_
4	г.	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	_	_
5	безоблачная	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	amod	_	_
6	жизнь	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
7	закончилась	_	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
8	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	С	_	ADP	IN	_	2	case	_	_
2	февраля	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
3	1947	_	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	amod	_	_
4	года	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	также	_	CONJ	CC	_	6	cc:preconj	_	_
6	генерал	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
7	,	_	PUNCT	,	_	6	punct	_	_
8	адъютант	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
9	Его	_	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3	10	det	_	_
10	Величества	_	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	_
11	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 cc:preconj	color:blue
1	И	_	CONJ	CC	_	9	cc:preconj	_	_
2	,	_	PUNCT	,	_	3	punct	_	_
3	все	_	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	discourse	_	_
4	-	_	PUNCT	-	_	3	goeswith	_	_
5	таки	_	X	AFX	_	3	goeswith	_	_
6	,	_	PUNCT	,	_	3	punct	_	_
7	церковь	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
8	была	_	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	9	cop	_	_
9	нужна	_	ADJ	JJH	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
10	.	_	PUNCT	.	_	9	punct	_	_

~~~


