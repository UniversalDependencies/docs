

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

629 nodes (2%) are attached to their parents as `cop`.

470 instances of `cop` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96661367249603.

The following 7 pairs of parts of speech are connected with `cop`: [et-pos/ADJ]()-[et-pos/AUX]() (269; 43% instances), [et-pos/NOUN]()-[et-pos/AUX]() (224; 36% instances), [et-pos/PRON]()-[et-pos/AUX]() (76; 12% instances), [et-pos/ADV]()-[et-pos/AUX]() (39; 6% instances), [et-pos/PROPN]()-[et-pos/AUX]() (13; 2% instances), [et-pos/NUM]()-[et-pos/AUX]() (4; 1% instances), [et-pos/VERB]()-[et-pos/AUX]() (4; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Noormees	noor_mees	NOUN	S	Case=Nom|Number=Sing	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	5	punct	_	_
3	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	5	nsubj:cop	_	_
4	olete	olema	AUX	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	tugev	tugev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
6	ja	ja	CCONJ	J	_	7	cc	_	_
7	julge	julge	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	9	punct	_	_
9	tapke	tapma	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
10	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
11	ära	ära	ADV	D	_	9	compound:prt	_	SpaceAfter=No
12	!	!	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	Hullud	hull	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	ideed	idee	NOUN	S	Case=Nom|Number=Plur	6	nsubj:cop	_	_
3	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	5	det	_	_
5	rahva	rahvas	NOUN	S	Case=Gen|Number=Sing	6	nmod	_	_
6	stiihia	stiihia	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Siis	siis	ADV	D	_	4	advmod	_	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	maja	maja	NOUN	S	Case=Nom|Number=Sing	4	nsubj:cop	_	_
4	sinu	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	0	root	_	_
5	päralt	päralt	ADP	K	AdpType=Post	4	case	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	10	punct	_	_
7	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	10	obj	_	_
8	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	10	nsubj	_	_
9	ju	ju	ADV	D	_	10	advmod	_	_
10	ootad	ootama	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
11	pikisilmi	piki_silmi	ADV	D	_	10	advmod	_	SpaceAfter=No
12	!	!	PUNCT	Z	_	4	punct	_	SpaceAfter=No
13	"	"	PUNCT	Z	_	4	punct	_	_

~~~


