

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:cop]().

71 nodes (0%) are attached to their parents as `csubj`.

66 instances of `csubj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 5 pairs of parts of speech are connected with `csubj`: [et-pos/VERB]()-[et-pos/VERB]() (62; 87% instances), [et-pos/ADJ]()-[et-pos/VERB]() (4; 6% instances), [et-pos/VERB]()-[et-pos/NOUN]() (3; 4% instances), [et-pos/ADJ]()-[et-pos/PRON]() (1; 1% instances), [et-pos/VERB]()-[et-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj	color:blue
1	Tundus	tunduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	10	punct	_	_
3	et	et	SCONJ	J	_	10	mark	_	_
4	pisikesed	pisike	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	5	amod	_	_
5	elukad	elukas	NOUN	S	Case=Nom|Number=Plur	10	nsubj	_	_
6	narmaste	narmas	NOUN	S	Case=Gen|Number=Plur	5	nmod	_	_
7	vahel	vahel	ADP	K	AdpType=Post	6	case	_	_
8	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
9	paigale	paigale	ADV	D	_	10	compound:prt	_	_
10	tardunud	tarduma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	1	csubj	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	On	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	ju	ju	ADV	D	_	3	advmod	_	_
3	loomulik	loomulik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	et	et	SCONJ	J	_	8	mark	_	_
6	laulutaati	laulu_taat	NOUN	S	Case=Par|Number=Sing	8	obj	_	_
7	meeles	meel	NOUN	S	Case=Ine|Number=Sing	8	obl	_	_
8	peetakse	pidama	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	Selgus	selguma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	8	punct	_	_
3	et	et	SCONJ	J	_	8	mark	_	_
4	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	5	det	_	_
5	plika	plika	NOUN	S	Case=Nom|Number=Sing	8	nsubj:cop	_	_
6	polnud	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
7	mingi	mingi	DET	P	Case=Nom|Number=Sing|PronType=Ind	8	det	_	_
8	armuke	armuke	NOUN	S	Case=Nom|Number=Sing	1	csubj	_	SpaceAfter=No
9	,	,	PUNCT	Z	_	11	punct	_	_
10	vaid	vaid	CCONJ	J	_	11	cc	_	_
11	hüsteerik	hüsteerik	NOUN	S	Case=Nom|Number=Sing	8	conj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	1	punct	_	_

~~~


