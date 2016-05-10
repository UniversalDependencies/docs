

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [conj]().

29 nodes (0%) are attached to their parents as `conj:preconj`.

23 instances of `conj:preconj` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.10344827586207.

The following 11 pairs of parts of speech are connected with `conj:preconj`: [ru-pos/NOUN]()-[ru-pos/ADV]() (6; 21% instances), [ru-pos/VERB]()-[ru-pos/PART]() (6; 21% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (4; 14% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (3; 10% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (2; 7% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (2; 7% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (2; 7% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 3% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (1; 3% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (1; 3% instances), [ru-pos/VERB]()-[ru-pos/X]() (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 conj:preconj	color:blue
1	Исключительно	_	ADV	RB	_	2	advmod	_	_
2	редко	_	ADV	RB	_	7	advmod	_	_
3	(	_	PUNCT	(	_	5	punct	_	_
4	единичные	_	ADJ	JJL	Animacy=Inan|Case=Nom|Number=Plur	5	amod	_	_
5	случаи	_	NOUN	NN	Animacy=Inan|Case=Nom|Number=Plur	2	appos	_	_
6	)	_	PUNCT	)	_	5	punct	_	_
7	наблюдается	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
8	развитие	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	nsubj	_	_
9	липосарком	_	NOUN	NN	Animacy=Inan|Case=Gen|Number=Plur	8	nmod	_	_
10	как	_	ADV	WRB	_	8	conj:preconj	_	_
11	из	_	ADP	IN	_	10	nmod	_	_
12	одиночных	_	ADJ	JJL	Animacy=Inan|Case=Gen|Number=Plur	11	nmod	_	_
13	,	_	PUNCT	,	_	11	punct	_	_
14	так	_	ADV	RB	_	11	cc	_	_
15	и	_	CONJ	CC	_	14	mwe	_	_
16	из	_	ADP	IN	_	11	conj	_	_
17	множественных	_	ADJ	JJL	Animacy=Inan|Case=Gen|Number=Plur	18	amod	_	_
18	липом	_	NOUN	NN	Animacy=Inan|Case=Gen|Number=Plur	16	nmod	_	_
19	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 conj:preconj	color:blue
1	Cсылка	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	не	_	PART	NEG	_	4	conj:preconj	_	_
3	только	_	ADV	RB	_	2	mwe	_	_
4	описывает	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	данные	_	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur	4	dobj	_	_
6	,	_	PUNCT	,	_	4	punct	_	_
7	но	_	CONJ	CC	_	4	cc	_	_
8	и	_	CONJ	CC	_	7	mwe	_	_
9	содержит	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	conj	_	_
10	все	_	DET	DT	Animacy=Inan|Case=Acc|Number=Plur	11	det	_	_
11	права	_	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur	9	dobj	_	_
12	доступа	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
13	к	_	ADP	IN	_	14	case	_	_
14	ним	_	PRON	PRP	Case=Dat|Number=Plur|Person=3	12	nmod	_	_
15	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 conj:preconj	color:blue
1	Сертификация	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	Справедливой	_	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	amod	_	_
3	Торговли	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	гарантирует	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	не	_	PART	NEG	_	8	conj:preconj	_	_
6	только	_	X	UH	_	5	mwe	_	_
7	справедливые	_	ADJ	JJL	Animacy=Inan|Case=Acc|Number=Plur	8	amod	_	_
8	цены	_	NOUN	NN	Animacy=Inan|Case=Acc|Number=Plur	4	dobj	_	_
9	,	_	PUNCT	,	_	8	punct	_	_
10	но	_	CONJ	CC	_	8	cc	_	_
11	и	_	CONJ	CC	_	10	mwe	_	_
12	сохранность	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	conj	_	_
13	принципов	_	NOUN	NN	Animacy=Inan|Case=Gen|Number=Plur	12	nmod	_	_
14	этичного	_	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	15	amod	_	_
15	потребления	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	13	nmod	_	_
16	.	_	PUNCT	.	_	4	punct	_	_

~~~


