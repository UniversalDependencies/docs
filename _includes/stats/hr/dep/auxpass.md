

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

625 nodes (1%) are attached to their parents as `auxpass`.

454 instances of `auxpass` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6992.

The following 7 pairs of parts of speech are connected with `auxpass`: [hr-pos/ADJ]()-[hr-pos/AUX]() (593; 95% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (18; 3% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (10; 2% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 auxpass	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 auxpass	color:blue
1	Crvenkovski	Crvenkovski	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	parataxis	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	Sporazumi	sporazum	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubjpass	_	_
4	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	5	compound	_	_
5	zaključuju	zaključivati	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
6	kako	kako	ADV	_	Degree=Pos	9	mark	_	_
7	bi	biti	AUX	_	Number=Plur|Person=3|Tense=Past	9	auxpass	_	_
8	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	9	compound	_	_
9	implementirali	implementirati	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	5	advcl	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 auxpass	color:blue
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


