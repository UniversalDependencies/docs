

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [nsubj]().

543 nodes (2%) are attached to their parents as `nsubj:cop`.

394 instances of `nsubj:cop` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13443830570902.

The following 21 pairs of parts of speech are connected with `nsubj:cop`: [et-pos/ADJ]()-[et-pos/NOUN]() (115; 21% instances), [et-pos/NOUN]()-[et-pos/PRON]() (97; 18% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (84; 15% instances), [et-pos/ADJ]()-[et-pos/PRON]() (83; 15% instances), [et-pos/PRON]()-[et-pos/NOUN]() (58; 11% instances), [et-pos/ADV]()-[et-pos/NOUN]() (22; 4% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (21; 4% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (13; 2% instances), [et-pos/PRON]()-[et-pos/PRON]() (12; 2% instances), [et-pos/ADV]()-[et-pos/PRON]() (11; 2% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (6; 1% instances), [et-pos/PROPN]()-[et-pos/PRON]() (4; 1% instances), [et-pos/VERB]()-[et-pos/NOUN]() (4; 1% instances), [et-pos/NUM]()-[et-pos/PRON]() (3; 1% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/PRON]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/AUX]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/NUM]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 nsubj:cop	color:blue
1	Ott	Ott	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	püüdis	püüdma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	end	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	4	obj	_	_
4	veenda	veenma	VERB	V	VerbForm=Inf	2	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	11	punct	_	_
6	et	et	SCONJ	J	_	11	mark	_	_
7	öösel	öösel	ADV	D	_	9	advmod	_	_
8	magusa	magus	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	9	amod	_	_
9	söömine	söömine	NOUN	S	Case=Nom|Number=Sing	11	nsubj:cop	_	_
10	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	kahjulik	kahjulik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	advcl	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:cop	color:blue
1	"	"	PUNCT	Z	_	4	punct	_	SpaceAfter=No
2	Kõik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot	4	nsubj:cop	_	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	kontrolli	kontroll	NOUN	S	Case=Gen|Number=Sing	0	root	_	_
5	all	all	ADP	K	AdpType=Post	4	case	_	SpaceAfter=No
6	!	!	PUNCT	Z	_	4	punct	_	SpaceAfter=No
7	"	"	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:cop	color:blue
1	Hullud	hull	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	ideed	idee	NOUN	S	Case=Nom|Number=Plur	6	nsubj:cop	_	_
3	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	5	det	_	_
5	rahva	rahvas	NOUN	S	Case=Gen|Number=Sing	6	nmod	_	_
6	stiihia	stiihia	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


