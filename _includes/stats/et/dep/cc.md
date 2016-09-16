

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

8439 nodes (4%) are attached to their parents as `cc`.

7677 instances of `cc` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.25856144092902.

The following 27 pairs of parts of speech are connected with `cc`: [et-pos/VERB]()-[et-pos/CONJ]() (3483; 41% instances), [et-pos/NOUN]()-[et-pos/CONJ]() (2946; 35% instances), [et-pos/ADJ]()-[et-pos/CONJ]() (903; 11% instances), [et-pos/PROPN]()-[et-pos/CONJ]() (629; 7% instances), [et-pos/ADV]()-[et-pos/CONJ]() (183; 2% instances), [et-pos/PRON]()-[et-pos/CONJ]() (129; 2% instances), [et-pos/NUM]()-[et-pos/CONJ]() (79; 1% instances), [et-pos/ADP]()-[et-pos/CONJ]() (24; 0% instances), [et-pos/PROPN]()-[et-pos/SYM]() (17; 0% instances), [et-pos/INTJ]()-[et-pos/CONJ]() (7; 0% instances), [et-pos/VERB]()-[et-pos/SCONJ]() (6; 0% instances), [et-pos/SCONJ]()-[et-pos/CONJ]() (5; 0% instances), [et-pos/SYM]()-[et-pos/CONJ]() (5; 0% instances), [et-pos/AUX]()-[et-pos/CONJ]() (4; 0% instances), [et-pos/ADJ]()-[et-pos/SCONJ]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/SCONJ]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/X]() (2; 0% instances), [et-pos/PROPN]()-[et-pos/ADV]() (2; 0% instances), [et-pos/PROPN]()-[et-pos/SCONJ]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/SYM]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/X]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/ADV]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/NUM]()-[et-pos/SYM]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/X]()-[et-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
1	Ning	ning	CONJ	J	_	2	cc	_	_
2	kopsas	kopsama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	taas	taas	ADV	D	_	2	advmod	_	_
4	Ramile	Ram	PROPN	S	Case=All|Number=Sing	2	nmod	_	_
5	kepiga	kepp	NOUN	S	Case=Com|Number=Sing	2	nmod	_	_
6	pähe	pea	NOUN	S	Case=Add|Number=Sing	2	nmod	_	_
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cc	color:blue
1	Jumala	jumal	NOUN	S	Case=Gen|Number=Sing	0	root	_	_
2	,	,	PUNCT	Z	_	1	punct	_	_
3	tõe	tõde	NOUN	S	Case=Gen|Number=Sing	1	conj	_	_
4	ja	ja	CONJ	J	_	1	cc	_	_
5	õiguse	õigus	NOUN	S	Case=Gen|Number=Sing	1	conj	_	_
6	nimel	nimel	ADP	K	AdpType=Post	1	case	_	_
7	!	!	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	Noormees	noor_mees	NOUN	S	Case=Nom|Number=Sing	5	vocative	_	_
2	,	,	PUNCT	Z	_	5	punct	_	_
3	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	5	nsubj:cop	_	_
4	olete	olema	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	tugev	tugev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
6	ja	ja	CONJ	J	_	5	cc	_	_
7	julge	julge	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	conj	_	_
8	,	,	PUNCT	Z	_	5	punct	_	_
9	tapke	tapma	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
10	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	dobj	_	_
11	ära	ära	ADV	D	_	9	compound:prt	_	_
12	!	!	PUNCT	Z	_	5	punct	_	_

~~~


