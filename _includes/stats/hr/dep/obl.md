

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

11413 nodes (6%) are attached to their parents as `obl`.

7485 instances of `obl` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.92823972662753.

The following 43 pairs of parts of speech are connected with `obl`: [hr-pos/VERB]()-[hr-pos/NOUN]() (6989; 61% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (1905; 17% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (691; 6% instances), [hr-pos/VERB]()-[hr-pos/DET]() (473; 4% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (233; 2% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (229; 2% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (219; 2% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (154; 1% instances), [hr-pos/ADJ]()-[hr-pos/DET]() (124; 1% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (102; 1% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (67; 1% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (31; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (24; 0% instances), [hr-pos/AUX]()-[hr-pos/DET]() (22; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (19; 0% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (15; 0% instances), [hr-pos/AUX]()-[hr-pos/PROPN]() (14; 0% instances), [hr-pos/AUX]()-[hr-pos/PRON]() (12; 0% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (11; 0% instances), [hr-pos/VERB]()-[hr-pos/ADP]() (11; 0% instances), [hr-pos/ADV]()-[hr-pos/DET]() (9; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (7; 0% instances), [hr-pos/AUX]()-[hr-pos/ADJ]() (6; 0% instances), [hr-pos/VERB]()-[hr-pos/X]() (6; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADP]() (5; 0% instances), [hr-pos/ADJ]()-[hr-pos/SYM]() (5; 0% instances), [hr-pos/ADJ]()-[hr-pos/NUM]() (4; 0% instances), [hr-pos/ADJ]()-[hr-pos/SCONJ]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/PART]() (2; 0% instances), [hr-pos/DET]()-[hr-pos/NOUN]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/PART]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/X]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/NUM]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Bugarska	Bugarska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	amod	_	_
2	vojska	vojska	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	pomaže	pomagati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	u	u	ADP	_	Case=Loc	5	case	_	_
5	raščišćavanju	raščišćavanje	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	3	obl	_	_
6	štete	šteta	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
7	prouzročene	prouzročiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part	6	acl	_	_
8	poplavama	poplava	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	7	obl	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl	color:blue
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl	color:blue
1	Znanost	znanost	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	parataxis	_	_
2	i	i	CCONJ	_	_	3	cc	_	_
3	tehnologija	tehnologija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No
4	:	:	PUNCT	_	_	1	punct	_	_
5	Microsoft	Microsoft	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	otvorio	otvoriti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	središte	središte	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
8	u	u	ADP	_	Case=Loc	9	case	_	_
9	Ateni	Atena	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_

~~~


