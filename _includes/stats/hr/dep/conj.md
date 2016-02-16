

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

3339 nodes (4%) are attached to their parents as `conj`.

3335 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.03084755914945.

The following 53 pairs of parts of speech are connected with `conj`: [hr-pos/NOUN]()-[hr-pos/NOUN]() (1399; 42% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (555; 17% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (484; 14% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (297; 9% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (91; 3% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (71; 2% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (69; 2% instances), [hr-pos/NUM]()-[hr-pos/NUM]() (57; 2% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (43; 1% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (40; 1% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (27; 1% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (27; 1% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (21; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (17; 1% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (15; 0% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (12; 0% instances), [hr-pos/X]()-[hr-pos/PROPN]() (10; 0% instances), [hr-pos/PRON]()-[hr-pos/NOUN]() (8; 0% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (7; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (7; 0% instances), [hr-pos/PROPN]()-[hr-pos/X]() (6; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (6; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (6; 0% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (5; 0% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (5; 0% instances), [hr-pos/X]()-[hr-pos/NOUN]() (5; 0% instances), [hr-pos/NUM]()-[hr-pos/ADJ]() (4; 0% instances), [hr-pos/PRON]()-[hr-pos/ADJ]() (4; 0% instances), [hr-pos/X]()-[hr-pos/X]() (4; 0% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (3; 0% instances), [hr-pos/PRON]()-[hr-pos/PRON]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/X]() (2; 0% instances), [hr-pos/PRON]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/VERB]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/NUM]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/CONJ]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/NUM]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/NUM]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/X]()-[hr-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	Znanost	znanost	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	parataxis	_	_
2	i	i	CONJ	_	_	1	cc	_	_
3	tehnologija	tehnologija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	_
4	:	:	PUNCT	_	_	1	punct	_	_
5	Microsoft	Microsoft	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
6	otvorio	otvoriti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	središte	središte	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	dobj	_	_
8	u	u	ADP	_	Case=Loc	9	case	_	_
9	Ateni	Atena	PROPN	_	Case=Loc|Gender=Fem|Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 conj	color:blue
1	Komisija	komisija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	3	aux	_	_
3	pregledati	pregledati	VERB	_	VerbForm=Inf	0	root	_	_
4	ponude	ponuda	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	3	dobj	_	_
5	i	i	CONJ	_	_	3	cc	_	_
6	objaviti	objaviti	VERB	_	VerbForm=Inf	3	conj	_	_
7	pobjednika	pobjednik	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	dobj	_	_
8	u	u	ADP	_	Case=Loc	9	case	_	_
9	listopadu	listopad	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	"	"	PUNCT	_	_	5	punct	_	_
3	Mi	mi	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	smo	biti	AUX	_	Number=Plur|Person=1|Tense=Pres	5	cop	_	_
5	Christina	Christina	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	i	i	CONJ	_	_	5	cc	_	_
7	Seth	Seth	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	_
8	iz	iz	ADP	_	Case=Gen	9	case	_	_
9	New	New	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
10	York	York	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	9	name	_	_
11	Cityja	City	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	9	name	_	_
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


