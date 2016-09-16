

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

11799 nodes (5%) are attached to their parents as `dobj`.

7232 instances of `dobj` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51580642427324.

The following 25 pairs of parts of speech are connected with `dobj`: [et-pos/VERB]()-[et-pos/NOUN]() (9104; 77% instances), [et-pos/VERB]()-[et-pos/PRON]() (1800; 15% instances), [et-pos/VERB]()-[et-pos/PROPN]() (340; 3% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (316; 3% instances), [et-pos/VERB]()-[et-pos/ADJ]() (83; 1% instances), [et-pos/VERB]()-[et-pos/NUM]() (50; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (20; 0% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (19; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (15; 0% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (12; 0% instances), [et-pos/ADV]()-[et-pos/NOUN]() (7; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (7; 0% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (7; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/VERB]()-[et-pos/ADV]() (2; 0% instances), [et-pos/VERB]()-[et-pos/SYM]() (2; 0% instances), [et-pos/AUX]()-[et-pos/NUM]() (1; 0% instances), [et-pos/AUX]()-[et-pos/PRON]() (1; 0% instances), [et-pos/AUX]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dobj	color:blue
1	Keele	keel	NOUN	S	Case=Gen|Number=Sing	2	dobj	_	_
2	viib	viima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	alla	alla	ADV	D	_	2	compound:prt	_	_
4	!	!	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dobj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 dobj	color:blue
1	Just	just	ADV	D	_	2	advmod	_	_
2	praegu	praegu	ADV	D	_	3	advmod	_	_
3	leidis	leidma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	üks	üks	PRON	P	Case=Nom|Number=Sing|PronType=Dem	6	det	_	_
5	võõras	võõras	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	rüütel	rüütel	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
7	Püha	püha	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	8	amod	_	_
8	Graali	Graal	PROPN	S	Case=Gen|Number=Sing	3	dobj	_	_
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


