

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [cc]().

184 nodes (0%) are attached to their parents as `cc:preconj`.

176 instances of `cc:preconj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.23369565217391.

The following 16 pairs of parts of speech are connected with `cc:preconj`: [ru-pos/VERB]()-[ru-pos/CCONJ]() (104; 57% instances), [ru-pos/NOUN]()-[ru-pos/CCONJ]() (30; 16% instances), [ru-pos/ADJ]()-[ru-pos/CCONJ]() (14; 8% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (5; 3% instances), [ru-pos/VERB]()-[ru-pos/PART]() (5; 3% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (4; 2% instances), [ru-pos/PROPN]()-[ru-pos/CCONJ]() (4; 2% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (3; 2% instances), [ru-pos/ADP]()-[ru-pos/CCONJ]() (3; 2% instances), [ru-pos/ADV]()-[ru-pos/CCONJ]() (3; 2% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (3; 2% instances), [ru-pos/DET]()-[ru-pos/CCONJ]() (2; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (1; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 1% instances), [ru-pos/PRON]()-[ru-pos/CCONJ]() (1; 1% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc:preconj	color:blue
1	Но	НО	CCONJ	CC	_	7	cc:preconj	_	_
2	в	В	ADP	IN	_	4	case	_	_
3	1990	1990	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	amod	_	_
4	г.	Г.	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
5	безоблачная	БЕЗОБЛАЧНЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	amod	_	_
6	жизнь	ЖИЗНЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
7	закончилась	ЗАКОНЧИТЬСЯ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
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
5	также	ТАКЖЕ	CCONJ	CC	_	6	cc:preconj	_	_
6	генерал	ГЕНЕРАЛ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	адъютант	АДЪЮТАНТ	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
9	Его	ЕГО	DET	PRP$	Person=3	10	det	_	_
10	Величества	ВЕЛИЧЕСТВО	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 cc:preconj	color:blue
1	И	И	CCONJ	CC	_	9	cc:preconj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	все	ВСЁ	PART	AFX	_	9	discourse	_	_
4	-	-	PUNCT	-	_	3	goeswith	_	_
5	таки	ТАКИ	ADV	AFX	_	3	goeswith	_	SpaceAfter=No
6	,	,	PUNCT	,	_	3	punct	_	_
7	церковь	ЦЕРКОВЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
8	была	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	cop	_	_
9	нужна	НУЖНЫЙ	ADJ	JJH	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


