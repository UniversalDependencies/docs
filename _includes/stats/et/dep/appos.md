

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

58 nodes (0%) are attached to their parents as `appos`.

58 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8448275862069.

The following 6 pairs of parts of speech are connected with `appos`: [et-pos/NOUN]()-[et-pos/NOUN]() (28; 48% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (17; 29% instances), [et-pos/PRON]()-[et-pos/NOUN]() (6; 10% instances), [et-pos/NOUN]()-[et-pos/NUM]() (3; 5% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (3; 5% instances), [et-pos/NOUN]()-[et-pos/ADV]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 appos	color:blue
1	Umbrohi	umb_rohi	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	6	punct	_	_
3	Moskva	Moskva	PROPN	S	Case=Gen|Number=Sing	5	obl	_	_
4	poolt	poolt	ADP	K	AdpType=Post	3	case	_	_
5	külvatud	külva=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	6	acl	_	_
6	ohakas	ohakas	NOUN	S	Case=Nom|Number=Sing	1	appos	_	SpaceAfter=No
7	!	!	PUNCT	Z	_	1	punct	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Tuttav	tuttav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	stjuuardess	stjuuardess	NOUN	S	Case=Nom|Number=Sing	8	nsubj	_	_
3	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No
4	vist	vist	ADV	D	_	5	advmod	_	_
5	Monica	Monica	PROPN	S	Case=Nom|Number=Sing	2	appos	_	SpaceAfter=No
6	?	?	PUNCT	Z	_	5	punct	_	SpaceAfter=No
7	)	)	PUNCT	Z	_	5	punct	_	_
8	kohendas	kohendama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	istmekatteid	istme_kate	NOUN	S	Case=Par|Number=Plur	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Kõik	kõik	PRON	P	Case=Nom|Number=Plur|PronType=Tot	3	nsubj:cop	_	_
2	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	suvilas	suvila	NOUN	S	Case=Ine|Number=Sing	0	root	_	SpaceAfter=No
4	:	:	PUNCT	Z	_	3	punct	_	_
5	naine	naine	NOUN	S	Case=Nom|Number=Sing	1	appos	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	_	_
7	tütred	tütar	NOUN	S	Case=Nom|Number=Plur	5	conj	_	_
8	ja	ja	CCONJ	J	_	10	cc	_	_
9	Indriksoni	Indrikson	PROPN	S	Case=Gen|Number=Sing	10	nmod	_	_
10	ema	ema	NOUN	S	Case=Nom|Number=Sing	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


