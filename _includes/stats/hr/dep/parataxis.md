

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

1290 nodes (1%) are attached to their parents as `parataxis`.

1070 instances of `parataxis` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.93953488372093.

The following 43 pairs of parts of speech are connected with `parataxis`: [hr-pos/VERB]()-[hr-pos/VERB]() (467; 36% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (215; 17% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (117; 9% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (104; 8% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (86; 7% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (45; 3% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (41; 3% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (30; 2% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (17; 1% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (16; 1% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (16; 1% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (14; 1% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (14; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (11; 1% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (10; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (10; 1% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (10; 1% instances), [hr-pos/NOUN]()-[hr-pos/NUM]() (9; 1% instances), [hr-pos/PROPN]()-[hr-pos/NUM]() (6; 0% instances), [hr-pos/VERB]()-[hr-pos/PUNCT]() (6; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (5; 0% instances), [hr-pos/NOUN]()-[hr-pos/PUNCT]() (5; 0% instances), [hr-pos/PRON]()-[hr-pos/VERB]() (4; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (4; 0% instances), [hr-pos/NOUN]()-[hr-pos/X]() (3; 0% instances), [hr-pos/PROPN]()-[hr-pos/VERB]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/X]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (2; 0% instances), [hr-pos/PRON]()-[hr-pos/NOUN]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/PUNCT]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/NUM]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/X]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/X]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/X]()-[hr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	Mislim	misliti	VERB	_	Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
5	to	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj	_	_
6	biti	biti	AUX	_	VerbForm=Inf	7	cop	_	_
7	dovoljno	dovoljan	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	ccomp	_	_
8	"	"	PUNCT	_	_	2	punct	_	_
9	,	,	PUNCT	_	_	10	punct	_	_
10	kazao	kazati	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	parataxis	_	_
11	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	aux	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis	color:blue
1	Svjesno	svjesno	ADV	_	Degree=Pos	3	advmod	_	_
2	smo	biti	AUX	_	Number=Plur|Person=1|Tense=Pres	3	aux	_	_
3	lagali	lagati	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
4	posljednju	posljednji	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	godinu	godina	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	nmod	_	_
6	i	i	CONJ	_	_	5	compound	_	_
7	pol	pola	ADV	_	Degree=Pos	5	compound	_	_
8	,	,	PUNCT	_	_	10	punct	_	_
9	dvije	dva	NUM	_	Gender=Fem|Number=Plur|NumType=Card	10	nummod	_	_
10	godine	godina	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	5	parataxis	_	_
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	Oni	onaj	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	5	nsubj	_	_
3	nisu	biti	AUX	_	Negative=Neg|Number=Plur|Person=3|Tense=Pres	5	cop	_	_
4	ključni	ključan	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	5	amod	_	_
5	igrači	igrač	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
6	"	"	PUNCT	_	_	5	punct	_	_
7	,	,	PUNCT	_	_	8	punct	_	_
8	kazao	kazati	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	5	parataxis	_	_
9	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	8	aux	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


