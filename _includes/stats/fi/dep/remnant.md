

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

371 nodes (0%) are attached to their parents as `remnant`.

368 instances of `remnant` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.09433962264151.

The following 32 pairs of parts of speech are connected with `remnant`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (202; 54% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (25; 7% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (18; 5% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (15; 4% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (12; 3% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (10; 3% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (10; 3% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (9; 2% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (9; 2% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (7; 2% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (7; 2% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (6; 2% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (5; 1% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (4; 1% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (4; 1% instances), [fi-pos/SYM]()-[fi-pos/SYM]() (4; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (3; 1% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (3; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (3; 1% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (2; 1% instances), [fi-pos/X]()-[fi-pos/X]() (2; 1% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/SCONJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 remnant	color:blue
1	Perunat	peruna	NOUN	N	Case=Nom|Number=Plur	4	nsubj:cop	_	_
2	ovat	olla	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	väärää	väärä	ADJ	A	Case=Par|Degree=Pos|Number=Sing	4	amod	_	_
4	lajia	laji	NOUN	N	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	4	punct	_	_
6	mansikat	mansikka	NOUN	N	Case=Nom|Number=Plur	1	remnant	_	_
7	Espanjasta	Espanja	PROPN	N	Case=Ela|Number=Sing	4	remnant	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 remnant	color:blue
1	Simo	Simo	PROPN	N	Case=Nom|Number=Sing	2	nsubj	_	_
2	palautti	palauttaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	1,5-sivuisen	1,5#sivuinen	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	4	amod	_	_
4	päiväkirjan	päivä#kirja	NOUN	N	Case=Gen|Number=Sing	2	dobj	_	_
5	ja	ja	CONJ	C	_	2	cc	_	_
6	Juha	Juha	PROPN	N	Case=Nom|Number=Sing	1	remnant	_	_
7	5-sivuisen	5#sivuinen	NOUN	N	Case=Gen|Number=Sing	4	remnant	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 remnant	color:blue
1	Kovasti	kovasti	ADV	Adv	_	3	advmod	_	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	_	_
3	yrittää	yrittää	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	joskin	jos	SCONJ	C	Clitic=Kin	6	mark	_	_
6	nykyään	nykyään	ADV	Adv	_	8	advmod	_	_
7	hieman	hieman	ADV	Adv	_	8	advmod	_	_
8	harvemmin	harvemmin	ADV	Adv	_	1	remnant	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


