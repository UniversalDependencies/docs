

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

22351 nodes (12%) are attached to their parents as `punct`.

12875 instances of `punct` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.95074045903986.

The following 27 pairs of parts of speech are connected with `punct`: [hr-pos/VERB]()-[hr-pos/PUNCT]() (10416; 47% instances), [hr-pos/NOUN]()-[hr-pos/PUNCT]() (5692; 25% instances), [hr-pos/ADJ]()-[hr-pos/PUNCT]() (2593; 12% instances), [hr-pos/PROPN]()-[hr-pos/PUNCT]() (1389; 6% instances), [hr-pos/ADV]()-[hr-pos/PUNCT]() (1107; 5% instances), [hr-pos/AUX]()-[hr-pos/PUNCT]() (304; 1% instances), [hr-pos/NUM]()-[hr-pos/PUNCT]() (189; 1% instances), [hr-pos/DET]()-[hr-pos/PUNCT]() (155; 1% instances), [hr-pos/ADP]()-[hr-pos/PUNCT]() (146; 1% instances), [hr-pos/PRON]()-[hr-pos/PUNCT]() (77; 0% instances), [hr-pos/PART]()-[hr-pos/PUNCT]() (71; 0% instances), [hr-pos/CCONJ]()-[hr-pos/PUNCT]() (66; 0% instances), [hr-pos/PUNCT]()-[hr-pos/PUNCT]() (53; 0% instances), [hr-pos/X]()-[hr-pos/PUNCT]() (51; 0% instances), [hr-pos/SYM]()-[hr-pos/PUNCT]() (13; 0% instances), [hr-pos/SCONJ]()-[hr-pos/PUNCT]() (8; 0% instances), [hr-pos/INTJ]()-[hr-pos/PUNCT]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/NUM]()-[hr-pos/ADP]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/CCONJ]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/CCONJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 punct	color:blue
1	Svaka	svaki	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	2	det	_	_
2	obitelj	obitelj	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	može	moći	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	dobiti	dobiti	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	do	do	ADP	_	Case=Gen	7	case	_	_
6	500	500	NUM	_	NumType=Card	7	nummod	_	_
7	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	_
8	pomoći	pomoć	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 punct	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Ipak	ipak	ADV	_	Degree=Pos	5	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	na	na	ADP	_	Case=Loc	5	case	_	_
5	popisu	popis	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	0	root	_	_
6	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	skoro	skoro	ADV	_	Degree=Pos	8	advmod	_	_
8	40	40	NUM	_	NumType=Card	9	nummod	_	_
9	kandidata	kandidat	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	5	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	15	punct	_	_
11	a	a	CCONJ	_	_	15	cc	_	_
12	većina	većina	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	_
13	ih	oni	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	12	nmod	_	_
14	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	novih	nov	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 punct	color:blue
1	Do	do	ADP	_	Case=Gen	2	case	_	_
2	sada	sada	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	_
3	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	takav	takav	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	tim	tim	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
6	ustrojen	ustrojiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	Federaciji	federacija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
9	BiH	BiH	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


