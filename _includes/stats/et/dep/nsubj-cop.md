

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [nsubj]().

2982 nodes (1%) are attached to their parents as `nsubj:cop`.

2594 instances of `nsubj:cop` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.47987927565392.

The following 31 pairs of parts of speech are connected with `nsubj:cop`: [et-pos/ADJ]()-[et-pos/NOUN]() (1093; 37% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (491; 16% instances), [et-pos/NOUN]()-[et-pos/PRON]() (437; 15% instances), [et-pos/ADJ]()-[et-pos/PRON]() (380; 13% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (142; 5% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (96; 3% instances), [et-pos/PRON]()-[et-pos/NOUN]() (87; 3% instances), [et-pos/VERB]()-[et-pos/NOUN]() (48; 2% instances), [et-pos/PRON]()-[et-pos/PRON]() (40; 1% instances), [et-pos/NUM]()-[et-pos/NOUN]() (34; 1% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (22; 1% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (16; 1% instances), [et-pos/PRON]()-[et-pos/PROPN]() (15; 1% instances), [et-pos/PROPN]()-[et-pos/PRON]() (13; 0% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (11; 0% instances), [et-pos/NOUN]()-[et-pos/NUM]() (11; 0% instances), [et-pos/ADV]()-[et-pos/NOUN]() (7; 0% instances), [et-pos/VERB]()-[et-pos/PRON]() (7; 0% instances), [et-pos/ADJ]()-[et-pos/NUM]() (6; 0% instances), [et-pos/NUM]()-[et-pos/PRON]() (5; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (5; 0% instances), [et-pos/NUM]()-[et-pos/ADJ]() (3; 0% instances), [et-pos/SYM]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/SYM]() (2; 0% instances), [et-pos/NUM]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/SYM]() (1; 0% instances), [et-pos/ADV]()-[et-pos/PRON]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/VERB]()-[et-pos/NUM]() (1; 0% instances), [et-pos/VERB]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/X]()-[et-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 nsubj:cop	color:blue
1	Ott	Ott	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	püüdis	püüdma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	end	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	4	dobj	_	_
4	veenda	veenma	VERB	V	VerbForm=Inf	2	xcomp	_	_
5	,	,	PUNCT	Z	_	11	punct	_	_
6	et	et	SCONJ	J	_	11	mark	_	_
7	öösel	öösel	ADV	D	_	9	advmod	_	_
8	magusa	magus	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	9	amod	_	_
9	söömine	söömine	NOUN	S	Case=Nom|Number=Sing	11	nsubj:cop	_	_
10	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	kahjulik	kahjulik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	dep	_	_
12	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:cop	color:blue
1	Hullud	hull	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	ideed	idee	NOUN	S	Case=Nom|Number=Plur	6	nsubj:cop	_	_
3	olid	olema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	5	det	_	_
5	rahva	rahvas	NOUN	S	Case=Gen|Number=Sing	6	nmod	_	_
6	stiihia	stiihia	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:cop	color:blue
1	"	"	PUNCT	Z	_	6	punct	_	_
2	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	6	nsubj:cop	_	_
3	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	ju	ju	ADV	D	_	6	advmod	_	_
5	hirmus	hirmus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	haigus	haigus	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
7	,	,	PUNCT	Z	_	6	punct	_	_
8	"	"	PUNCT	Z	_	6	punct	_	_
9	ütles	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	parataxis	_	_
10	Vladimir	Vladimir	PROPN	S	Case=Nom|Number=Sing	9	nsubj	_	_
11	ja	ja	CONJ	J	_	9	cc	_	_
12	läks	minema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	conj	_	_
13	.	.	PUNCT	Z	_	6	punct	_	_

~~~


