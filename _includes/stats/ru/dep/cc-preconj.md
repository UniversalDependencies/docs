

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [cc]().

210 nodes (0%) are attached to their parents as `cc:preconj`.

202 instances of `cc:preconj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18095238095238.

The following 17 pairs of parts of speech are connected with `cc:preconj`: [ru-pos/VERB]()-[ru-pos/CONJ]() (118; 56% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (36; 17% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (15; 7% instances), [ru-pos/VERB]()-[ru-pos/PART]() (7; 3% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (6; 3% instances), [ru-pos/PROPN]()-[ru-pos/CONJ]() (6; 3% instances), [ru-pos/ADP]()-[ru-pos/CONJ]() (4; 2% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (4; 2% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (3; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (3; 1% instances), [ru-pos/DET]()-[ru-pos/CONJ]() (2; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc:preconj	color:blue
1	Но	НО	CONJ	CC	_	7	cc:preconj	_	_
2	в	В	ADP	IN	_	4	case	_	_
3	1990	1990	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	amod	_	_
4	г.	Г.	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	_	_
5	безоблачная	БЕЗОБЛАЧНЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Full	6	amod	_	_
6	жизнь	ЖИЗНЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
7	закончилась	ЗАКОНЧИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	С	С	ADP	IN	_	2	case	_	_
2	февраля	ФЕВРАЛЬ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
3	1947	1947	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	amod	_	_
4	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	также	ТАКЖЕ	CONJ	CC	_	6	cc:preconj	_	_
6	генерал	ГЕНЕРАЛ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
7	,	,	PUNCT	,	_	6	punct	_	_
8	адъютант	АДЪЮТАНТ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
9	Его	ЕГО	DET	PRP$	Person=3	10	det	_	_
10	Величества	ВЕЛИЧЕСТВО	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	_
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 cc:preconj	color:blue
1	И	И	CONJ	CC	_	9	cc:preconj	_	_
2	,	,	PUNCT	,	_	3	punct	_	_
3	все	ВСЁ	PART	AFX	_	9	discourse	_	_
4	-	-	PUNCT	-	_	3	goeswith	_	_
5	таки	ТАКИ	ADV	AFX	_	3	goeswith	_	_
6	,	,	PUNCT	,	_	3	punct	_	_
7	церковь	ЦЕРКОВЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
8	была	БЫТЬ	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	cop	_	_
9	нужна	НУЖНЫЙ	ADJ	JJH	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Brev	0	root	_	_
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


