

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

2016 nodes (1%) are attached to their parents as `xcomp`.

1932 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55009920634921.

The following 28 pairs of parts of speech are connected with `xcomp`: [hr-pos/VERB]()-[hr-pos/VERB]() (1023; 51% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (295; 15% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (142; 7% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (126; 6% instances), [hr-pos/AUX]()-[hr-pos/ADJ]() (104; 5% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (101; 5% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (65; 3% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (31; 2% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (25; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (25; 1% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (20; 1% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (13; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (9; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (6; 0% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (5; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (4; 0% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (3; 0% instances), [hr-pos/AUX]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Svaka	svaki	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	obitelj	obitelj	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	može	moći	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	dobiti	dobiti	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	do	do	ADP	_	Case=Gen	7	case	_	_
6	500	500	NUM	_	NumType=Card	7	nummod	_	_
7	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	4	dobj	_	_
8	pomoći	pomoć	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	Preko	preko	ADP	_	Case=Gen	2	case	_	_
2	tjedna	tjedan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
3	nalazio	nalaziti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	3	compound	_	_
5	u	u	ADP	_	Case=Loc	6	case	_	_
6	šumi	šuma	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	3	nmod	_	_
7	radeći	raditi	ADV	_	VerbForm=Part	3	xcomp	_	_
8	i	i	CONJ	_	_	7	cc	_	_
9	stanujući	stanovati	ADV	_	VerbForm=Part	7	conj	_	_
10	u	u	ADP	_	Case=Loc	11	case	_	_
11	barakama	baraka	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	7	nmod	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Dakle	dakle	CONJ	_	_	3	cc	_	_
2	ego	ego	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	može	moći	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	biti	biti	AUX	_	VerbForm=Inf	3	xcomp	_	_
5	tjelesan	tjelesan	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	xcomp	_	_
6	,	,	PUNCT	_	_	3	punct	_	_
7	a	a	CONJ	_	_	3	cc	_	_
8	može	moći	VERB	_	Number=Sing|Person=3|Tense=Pres	3	conj	_	_
9	biti	biti	AUX	_	VerbForm=Inf	8	xcomp	_	_
10	i	i	CONJ	_	_	11	discourse	_	_
11	produhovljen	produhovljen	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	xcomp	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


