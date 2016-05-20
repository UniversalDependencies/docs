

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

3458 nodes (1%) are attached to their parents as `cop`.

2983 instances of `cop` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34297281665703.

The following 9 pairs of parts of speech are connected with `cop`: [et-pos/ADJ]()-[et-pos/VERB]() (2050; 59% instances), [et-pos/NOUN]()-[et-pos/VERB]() (1160; 34% instances), [et-pos/PRON]()-[et-pos/VERB]() (147; 4% instances), [et-pos/NUM]()-[et-pos/VERB]() (41; 1% instances), [et-pos/PROPN]()-[et-pos/VERB]() (37; 1% instances), [et-pos/VERB]()-[et-pos/VERB]() (12; 0% instances), [et-pos/ADV]()-[et-pos/VERB]() (8; 0% instances), [et-pos/SYM]()-[et-pos/VERB]() (2; 0% instances), [et-pos/X]()-[et-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	Hullud	hull	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	ideed	idee	NOUN	S	Case=Nom|Number=Plur	6	nsubj:cop	_	_
3	olid	olema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	5	det	_	_
5	rahva	rahvas	NOUN	S	Case=Gen|Number=Sing	6	nmod	_	_
6	stiihia	stiihia	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 cop	color:blue
1	Ei	ei	AUX	V	Mood=Ind|Negative=Neg|VerbForm=Fin	2	neg	_	_
2	taipa	taipama	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	Z	_	2	punct	_	_
4	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	2	ccomp	_	_
5	neil	tema	PRON	P	Case=Ade|Number=Plur|Person=3|PronType=Prs	4	nmod	_	_
6	viga	viga	NOUN	S	Case=Nom|Number=Sing	4	nsubj:cop	_	_
7	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
8	.	.	PUNCT	Z	_	2	punct	_	_
9	"	"	PUNCT	Z	_	2	punct	_	_

~~~


