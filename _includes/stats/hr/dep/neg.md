

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

506 nodes (0%) are attached to their parents as `neg`.

497 instances of `neg` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23517786561265.

The following 19 pairs of parts of speech are connected with `neg`: [hr-pos/VERB]()-[hr-pos/PART]() (402; 79% instances), [hr-pos/NOUN]()-[hr-pos/PART]() (27; 5% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (21; 4% instances), [hr-pos/ADV]()-[hr-pos/PART]() (21; 4% instances), [hr-pos/AUX]()-[hr-pos/PART]() (10; 2% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (5; 1% instances), [hr-pos/PROPN]()-[hr-pos/PART]() (4; 1% instances), [hr-pos/ADP]()-[hr-pos/PART]() (3; 1% instances), [hr-pos/NUM]()-[hr-pos/CONJ]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	"	"	PUNCT	_	_	3	punct	_	_
2	Ne	ne	PART	_	Negative=Neg	3	neg	_	_
3	mogu	moći	VERB	_	Number=Sing|Person=1|Tense=Pres	0	root	_	_
4	odlučno	odlučno	ADV	_	Degree=Pos	5	advmod	_	_
5	tvrditi	tvrditi	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	da	da	SCONJ	_	_	9	mark	_	_
7	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	9	cop	_	_
8	to	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	_	_
9	uzrok	uzrok	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	ccomp	_	_
10	sukoba	sukob	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	_
11	unutar	unutar	ADP	_	Case=Gen	12	case	_	_
12	vlade	vlada	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 neg	color:blue
1	Kukan	Kukan	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	parataxis	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	dijalog	dijalog	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	a	a	CONJ	_	_	3	cc	_	_
6	ne	ne	PART	_	Negative=Neg	7	neg	_	_
7	barikade	barikada	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	3	conj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 neg	color:blue
1	Možda	možda	ADV	_	Degree=Pos	5	advmod	_	_
2	ne	ne	PART	_	Negative=Neg	5	neg	_	_
3	bi	biti	AUX	_	Number=Sing|Person=3|Tense=Past	5	aux	_	_
4	bilo	biti	AUX	_	Gender=Neut|Number=Sing|VerbForm=Part	5	cop	_	_
5	zgorega	zgorega	ADV	_	Degree=Pos	0	root	_	_
6	da	da	SCONJ	_	_	12	mark	_	_
7	i	i	CONJ	_	_	8	discourse	_	_
8	mi	mi	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
9	roditelji	roditelj	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	8	appos	_	_
10	budemo	biti	AUX	_	Number=Plur|Person=1|Tense=Pres	12	cop	_	_
11	bolje	dobro	ADV	_	Degree=Cmp	12	advmod	_	_
12	pripremljeni	pripremiti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	5	csubj	_	_
13	za	za	ADP	_	Case=Acc	14	case	_	_
14	to	taj	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	12	nmod	_	_
15	.	.	PUNCT	_	_	5	punct	_	_

~~~


