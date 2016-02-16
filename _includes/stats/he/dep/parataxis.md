

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

452 nodes (0%) are attached to their parents as `parataxis`.

236 instances of `parataxis` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.79203539823009.

The following 42 pairs of parts of speech are connected with `parataxis`: [he-pos/VERB]()-[he-pos/NOUN]() (174; 38% instances), [he-pos/VERB]()-[he-pos/VERB]() (61; 13% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (30; 7% instances), [he-pos/VERB]()-[he-pos/ADV]() (24; 5% instances), [he-pos/VERB]()-[he-pos/PRON]() (21; 5% instances), [he-pos/AUX]()-[he-pos/NOUN]() (17; 4% instances), [he-pos/NOUN]()-[he-pos/VERB]() (17; 4% instances), [he-pos/PROPN]()-[he-pos/ADJ]() (10; 2% instances), [he-pos/VERB]()-[he-pos/CONJ]() (10; 2% instances), [he-pos/VERB]()-[he-pos/NUM]() (9; 2% instances), [he-pos/AUX]()-[he-pos/VERB]() (8; 2% instances), [he-pos/PROPN]()-[he-pos/PROPN]() (8; 2% instances), [he-pos/VERB]()-[he-pos/ADJ]() (8; 2% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (6; 1% instances), [he-pos/VERB]()-[he-pos/PROPN]() (6; 1% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (5; 1% instances), [he-pos/VERB]()-[he-pos/PUNCT]() (5; 1% instances), [he-pos/NOUN]()-[he-pos/ADV]() (4; 1% instances), [he-pos/NOUN]()-[he-pos/CONJ]() (3; 1% instances), [he-pos/ADJ]()-[he-pos/ADV]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/VERB]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/PRON]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/CONJ]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/DET]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/NUM]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/PRON]() (1; 0% instances), [he-pos/ADV]()-[he-pos/ADV]() (1; 0% instances), [he-pos/ADV]()-[he-pos/VERB]() (1; 0% instances), [he-pos/AUX]()-[he-pos/ADV]() (1; 0% instances), [he-pos/AUX]()-[he-pos/PRON]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/ADP]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/NUM]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/PUNCT]() (1; 0% instances), [he-pos/NUM]()-[he-pos/ADV]() (1; 0% instances), [he-pos/PRON]()-[he-pos/ADV]() (1; 0% instances), [he-pos/PRON]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/VERB]() (1; 0% instances), [he-pos/VERB]()-[he-pos/ADP]() (1; 0% instances), [he-pos/VERB]()-[he-pos/AUX]() (1; 0% instances), [he-pos/X]()-[he-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 parataxis	color:blue
1	כמו	_	ADP	ADP	_	3	case	_	_
2	כל	_	DET	DET	Definite=Red	3	det	_	_
3	דבר	_	NOUN	NOUN	Gender=Masc|Number=Sing	12	parataxis	_	_
4	אחר	_	ADJ	ADJ	Gender=Masc|Number=Sing	3	amod	_	_
5	,	_	PUNCT	PUNCT	_	12	punct	_	_
6	נושאים	_	NOUN	NOUN	Gender=Masc|Number=Plur	12	nsubj	_	_
7	ה	_	SCONJ	SCONJ	_	8	mark	_	_
8	זוכים	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part	6	acl:relcl	_	_
9	ל	_	ADP	ADP	_	10	case	_	_
10	סבסוד	_	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
11	נכבד	_	ADJ	ADJ	Gender=Masc|Number=Sing	10	amod	_	_
12	באים	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part	0	root	_	_
13	ו	_	CONJ	CONJ	_	12	cc	_	_
14	הולכים	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part	12	conj	_	_
15	.	_	PUNCT	PUNCT	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	הם	_	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	פשוט	_	ADV	ADV	_	3	advmod	_	_
3	תהו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past	0	root	_	_
4	,	_	PUNCT	PUNCT	_	5	punct	_	_
5	נזכר	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part	3	parataxis	_	_
6	לנקובסקי	_	PROPN	PROPN	_	5	nsubj	_	_
7	,	_	PUNCT	PUNCT	_	5	punct	_	_
8	"	_	PUNCT	PUNCT	_	11	punct	_	_
9	ל	_	ADP	ADP	_	10	case	_	_
10	מי	_	ADV	ADV	PronType=Int	11	iobj	_	_
11	יש	_	VERB	VERB	HebExistential=True	3	iobj	_	_
12	רעיונות	_	NOUN	NOUN	Gender=Masc|Number=Plur	11	nsubj	_	_
13	מעניינים	_	ADJ	ADJ	Gender=Masc|Number=Plur	12	amod	_	_
14	?	_	PUNCT	PUNCT	_	11	punct	_	_
15	"	_	PUNCT	PUNCT	_	11	punct	_	_
16	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 parataxis	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	מינסטרונה	_	PROPN	PROPN	_	9	nsubj	_	_
3	,	_	PUNCT	PUNCT	_	9	punct	_	_
4	מ	_	ADP	ADP	_	5	case	_	_
5	צד	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	parataxis	_	_
6	שני	_	NUM	NUM	Gender=Masc|Number=Sing	5	amod	_	_
7	,	_	PUNCT	PUNCT	_	9	punct	_	_
8	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	9	aux	_	_
9	תענוג	_	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
10	.	_	PUNCT	PUNCT	_	9	punct	_	_

~~~


