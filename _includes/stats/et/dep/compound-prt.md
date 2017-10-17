

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [compound]().

588 nodes (2%) are attached to their parents as `compound:prt`.

381 instances of `compound:prt` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.07312925170068.

The following 7 pairs of parts of speech are connected with `compound:prt`: [et-pos/VERB]()-[et-pos/ADV]() (567; 96% instances), [et-pos/ADJ]()-[et-pos/ADV]() (15; 3% instances), [et-pos/VERB]()-[et-pos/ADP]() (2; 0% instances), [et-pos/AUX]()-[et-pos/ADV]() (1; 0% instances), [et-pos/DET]()-[et-pos/ADV]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/ADV]() (1; 0% instances), [et-pos/VERB]()-[et-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:prt	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	SpaceAfter=No
2	Ära	ära	ADV	D	_	3	compound:prt	_	_
3	väsisin	väsima	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	3	punct	_	SpaceAfter=No
5	"	"	PUNCT	Z	_	3	punct	_	_
6	valetas	valetama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
7	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 compound:prt	color:blue
1	Ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj:cop	_	_
2	nägi	nägema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
3	välja	välja	ADV	D	_	6	compound:prt	_	_
4	nii	nii	ADV	D	_	6	advmod	_	_
5	...	...	PUNCT	Z	_	6	punct	_	_
6	ebainimlik	eba_inimlik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	8	punct	_	_
8	kahvatu	kahvatu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	conj	_	SpaceAfter=No
9	,	,	PUNCT	Z	_	11	punct	_	_
10	peaaegu	pea_aegu	ADV	D	_	11	advmod	_	_
11	läbipaistev	läbi_paistev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	6	conj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:prt	color:blue
1	Nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	sõitsid	sõit	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	linna	linn	NOUN	S	Case=Add|Number=Sing	2	obl	_	_
4	sisse	sisse	ADP	K	AdpType=Post	2	compound:prt	_	_
5	lasuurroosa	lasuur-roosa	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	6	amod	_	_
6	taeva	taevas	NOUN	S	Case=Gen|Number=Sing	2	obl	_	_
7	all	all	ADP	K	AdpType=Post	6	case	_	_
8	kirkal	kirgas	ADJ	A	Case=Ade|Degree=Pos|Number=Sing	9	amod	_	_
9	koidutunnil	koidu-tund	NOUN	S	Case=Ade|Number=Sing	2	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	_	_

~~~


