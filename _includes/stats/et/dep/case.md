

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

4967 nodes (2%) are attached to their parents as `case`.

3941 instances of `case` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31165693577612.

The following 9 pairs of parts of speech are connected with `case`: [et-pos/NOUN]()-[et-pos/ADP]() (3999; 81% instances), [et-pos/PRON]()-[et-pos/ADP]() (523; 11% instances), [et-pos/PROPN]()-[et-pos/ADP]() (268; 5% instances), [et-pos/NUM]()-[et-pos/ADP]() (100; 2% instances), [et-pos/ADJ]()-[et-pos/ADP]() (63; 1% instances), [et-pos/VERB]()-[et-pos/ADP]() (6; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (4; 0% instances), [et-pos/ADV]()-[et-pos/ADP]() (3; 0% instances), [et-pos/ADP]()-[et-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Ernesaks	Ernesaks	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	libistas	libistama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	pilgu	pilk	NOUN	S	Case=Gen|Number=Sing	2	dobj	_	_
4	üle	üle	ADP	K	AdpType=Post	5	case	_	_
5	toa	tuba	NOUN	S	Case=Gen|Number=Sing	2	nmod	_	_
6	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
2	ees	ees	ADP	K	AdpType=Post	1	case	_	_
3	seisis	seisma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	kääbus	kääbus	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
5	,	,	PUNCT	Z	_	8	punct	_	_
6	seljas	selg	NOUN	S	Case=Ine|Number=Sing	8	nmod	_	_
7	tilluke	tilluke	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
8	raudrüü	raud_rüü	NOUN	S	Case=Nom|Number=Sing	3	advcl	_	_
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Ja	ja	CONJ	J	_	3	cc	_	_
2	läbi	läbi	ADP	K	AdpType=Prep	3	case	_	_
3	Eesti	Eesti	PROPN	S	Case=Gen|Number=Sing	0	root	_	_
4	ka	ka	ADV	D	_	2	advmod	_	_
5	.	.	PUNCT	Z	_	3	punct	_	_
6	"	"	PUNCT	Z	_	3	punct	_	_

~~~


