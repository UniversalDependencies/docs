

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

3957 nodes (5%) are attached to their parents as `root`.

3957 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.81046247156937.

The following 8 pairs of parts of speech are connected with `root`: [hr-pos/ROOT]()-[hr-pos/VERB]() (2885; 73% instances), [hr-pos/ROOT]()-[hr-pos/ADJ]() (561; 14% instances), [hr-pos/ROOT]()-[hr-pos/NOUN]() (405; 10% instances), [hr-pos/ROOT]()-[hr-pos/AUX]() (38; 1% instances), [hr-pos/ROOT]()-[hr-pos/ADV]() (34; 1% instances), [hr-pos/ROOT]()-[hr-pos/PRON]() (17; 0% instances), [hr-pos/ROOT]()-[hr-pos/PROPN]() (15; 0% instances), [hr-pos/ROOT]()-[hr-pos/PART]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Bugarska	Bugarska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	amod	_	_
2	vojska	vojska	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	pomaže	pomagati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	u	u	ADP	_	Case=Loc	5	case	_	_
5	raščišćavanju	raščišćavanje	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	3	nmod	_	_
6	štete	šteta	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
7	prouzročene	prouzročiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part	6	acl	_	_
8	poplavama	poplava	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	7	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Do	do	ADP	_	Case=Gen	2	case	_	_
2	sada	sada	ADV	_	Degree=Pos	6	advmod	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	auxpass	_	_
4	takav	takav	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	tim	tim	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubjpass	_	_
6	ustrojen	ustrojiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	Federaciji	federacija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	nmod	_	_
9	BiH	BiH	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	Ipak	ipak	ADV	_	Degree=Pos	5	discourse	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	na	na	ADP	_	Case=Loc	5	case	_	_
5	popisu	popis	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	0	root	_	_
6	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	5	cop	_	_
7	skoro	skoro	ADV	_	Degree=Pos	8	advmod	_	_
8	40	40	NUM	_	NumType=Card	9	nummod	_	_
9	kandidata	kandidat	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	5	nsubj	_	_
10	,	,	PUNCT	_	_	5	punct	_	_
11	a	a	CONJ	_	_	5	cc	_	_
12	većina	većina	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	_
13	ih	oni	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	12	nmod	_	_
14	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	15	cop	_	_
15	novih	nov	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	_
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


