

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

569 nodes (1%) are attached to their parents as `nsubjpass`.

351 instances of `nsubjpass` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66432337434095.

The following 17 pairs of parts of speech are connected with `nsubjpass`: [hr-pos/ADJ]()-[hr-pos/NOUN]() (408; 72% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (83; 15% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (40; 7% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (13; 2% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (5; 1% instances), [hr-pos/ADJ]()-[hr-pos/NUM]() (4; 1% instances), [hr-pos/ADJ]()-[hr-pos/X]() (4; 1% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (3; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubjpass	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubjpass	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	Želite	željeti	VERB	_	Number=Plur|Person=2|Tense=Pres	0	root	_	_
3	li	li	PART	_	_	7	mark	_	_
4	da	da	SCONJ	_	_	3	mwe	_	_
5	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	7	auxpass	_	_
6	zakon	zakon	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	nsubjpass	_	_
7	poštuje	poštovati	VERB	_	Number=Sing|Person=3|Tense=Pres	2	ccomp	_	_
8	ili	ili	CONJ	_	_	2	cc	_	_
9	ne	ne	PART	_	Negative=Neg	2	remnant	_	_
10	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubjpass	color:blue
1	Hrvatska	Hrvatska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubjpass	_	_
2	pozvana	pozvati	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
3	na	na	ADP	_	Case=Acc	4	case	_	_
4	ubrzanje	ubrzanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	nmod	_	_
5	reformi	reforma	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	_
6	koje	koji	PRON	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Ind	7	mark	_	_
7	traži	tražiti	VERB	_	Number=Sing|Person=3|Tense=Pres	5	acl	_	_
8	EU	EU	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_

~~~


