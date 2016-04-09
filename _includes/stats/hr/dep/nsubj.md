

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

5238 nodes (6%) are attached to their parents as `nsubj`.

4030 instances of `nsubj` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.57731958762887.

The following 38 pairs of parts of speech are connected with `nsubj`: [hr-pos/VERB]()-[hr-pos/NOUN]() (2774; 53% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (1172; 22% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (334; 6% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (294; 6% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (176; 3% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (93; 2% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (93; 2% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (55; 1% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (44; 1% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (36; 1% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (32; 1% instances), [hr-pos/PRON]()-[hr-pos/NOUN]() (19; 0% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (15; 0% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (14; 0% instances), [hr-pos/VERB]()-[hr-pos/X]() (14; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (9; 0% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (9; 0% instances), [hr-pos/AUX]()-[hr-pos/PRON]() (7; 0% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (6; 0% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (5; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (4; 0% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (4; 0% instances), [hr-pos/PRON]()-[hr-pos/PRON]() (4; 0% instances), [hr-pos/AUX]()-[hr-pos/PROPN]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/X]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/NUM]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/PRON]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (2; 0% instances), [hr-pos/ADP]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/NUM]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Moldavci	Moldavac	PROPN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	opet	opet	ADV	_	Degree=Pos	3	advmod	_	_
3	izlaze	izlaziti	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
4	na	na	ADP	_	Case=Acc	5	case	_	_
5	birališta	biralište	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	3	nmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 nsubj	color:blue
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


