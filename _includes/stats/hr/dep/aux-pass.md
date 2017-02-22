

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is a language-specific subtype of [aux]().

967 nodes (1%) are attached to their parents as `aux:pass`.

716 instances of `aux:pass` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8076525336091.

The following 11 pairs of parts of speech are connected with `aux:pass`: [hr-pos/ADJ]()-[hr-pos/AUX]() (921; 95% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (25; 3% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (13; 1% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux:pass	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux:pass	color:blue
1	Crvenkovski	Crvenkovski	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	parataxis	_	SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	Sporazumi	sporazum	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubj:pass	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
5	zaključuju	zaključivati	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	kako	kako	ADV	_	Degree=Pos|PronType=Int,Rel	9	advmod	_	_
7	bi	biti	AUX	_	Mood=Cnd|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
8	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	9	expl:pv	_	_
9	implementirali	implementirati	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	5	advcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Želite	željeti	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	li	li	PART	_	_	7	mark	_	_
4	da	da	SCONJ	_	_	3	fixed	_	_
5	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	7	aux:pass	_	_
6	zakon	zakon	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	nsubj:pass	_	_
7	poštuje	poštovati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
8	ili	ili	CCONJ	_	_	9	cc	_	_
9	ne	ne	PART	_	Polarity=Neg	2	conj	_	SpaceAfter=No
10	?	?	PUNCT	_	_	2	punct	_	_

~~~


