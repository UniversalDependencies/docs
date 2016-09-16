

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:cop]().

646 nodes (0%) are attached to their parents as `csubj`.

621 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.77089783281734.

The following 10 pairs of parts of speech are connected with `csubj`: [et-pos/VERB]()-[et-pos/VERB]() (565; 87% instances), [et-pos/ADJ]()-[et-pos/VERB]() (55; 9% instances), [et-pos/VERB]()-[et-pos/ADJ]() (9; 1% instances), [et-pos/VERB]()-[et-pos/NOUN]() (6; 1% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (5; 1% instances), [et-pos/ADJ]()-[et-pos/PRON]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/NUM]() (1; 0% instances), [et-pos/ADV]()-[et-pos/VERB]() (1; 0% instances), [et-pos/AUX]()-[et-pos/VERB]() (1; 0% instances), [et-pos/VERB]()-[et-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj	color:blue
1	Tundus	tunduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	Z	_	10	punct	_	_
3	et	et	SCONJ	J	_	10	mark	_	_
4	pisikesed	pisike	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	5	amod	_	_
5	elukad	elukas	NOUN	S	Case=Nom|Number=Plur	10	nsubj	_	_
6	narmaste	narmas	NOUN	S	Case=Gen|Number=Plur	5	nmod	_	_
7	vahel	vahel	ADP	K	AdpType=Post	6	case	_	_
8	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
9	paigale	paigale	ADV	D	_	10	compound:prt	_	_
10	tardunud	tarduma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	1	csubj	_	_
11	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	_
2	Veelgi	veelgi	ADV	D	_	3	advmod	_	_
3	normaalsem	normaalsem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
4	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	,	,	PUNCT	Z	_	7	punct	_	_
6	et	et	SCONJ	J	_	7	mark	_	_
7	tekkis	tekkima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj	_	_
8	360	360	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	10	nummod	_	_
9	uut	uus	ADJ	A	Case=Par|Degree=Pos|Number=Sing	10	amod	_	_
10	töökohta	töö_koht	NOUN	S	Case=Par|Number=Sing	7	nsubj	_	_
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	Peagi	peagi	ADV	D	_	2	advmod	_	_
2	selgus	selguma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	Z	_	6	punct	_	_
4	et	et	SCONJ	J	_	6	mark	_	_
5	nii	nii	ADV	D	_	6	advmod	_	_
6	lihtne	lihtne	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	csubj	_	_
7	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	8	det	_	_
8	asi	asi	NOUN	S	Case=Nom|Number=Sing	6	nsubj:cop	_	_
9	ka	ka	ADV	D	_	6	advmod	_	_
10	pole	olema	VERB	V	Mood=Ind|Negative=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
11	.	.	PUNCT	Z	_	2	punct	_	_

~~~


