

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

1 nodes (0%) are attached to their parents as `vocative`.

1 instances of `vocative` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `vocative`: [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	Fatta	fatta	VERB	VB|IMP|AKT	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	mod	mod	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	MID	_	1	punct	_	_
4	hemmakvinnor	hemmakvinna	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	1	vocative	_	SpaceAfter=No
5	!	!	PUNCT	MAD	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

62 nodes (0%) are attached to their parents as `vocative`.

34 instances of `vocative` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.74193548387097.

The following 11 pairs of parts of speech are connected with `vocative`: [sv-pos/VERB]()-[sv-pos/NOUN]() (25; 40% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (16; 26% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (5; 8% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (4; 6% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (3; 5% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (3; 5% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (2; 3% instances), [sv-pos/INTJ]()-[sv-pos/NOUN]() (1; 2% instances), [sv-pos/INTJ]()-[sv-pos/PROPN]() (1; 2% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (1; 2% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 vocative	color:blue
1	"	_	PUNCT	Quote	_	2	punct	_	SpaceAfter=No
2	Hittade	_	VERB	PAST-ACT	_	0	root	_	_
3	du	_	PRON	PERS-P2SG-NOM	_	2	nsubj	_	_
4	nånting	_	PRON	IND-SG	_	2	obj	_	SpaceAfter=No
5	,	_	PUNCT	Comma	_	2	punct	_	_
6	pappa	_	NOUN	SG-IND-NOM	_	2	vocative	_	SpaceAfter=No
7	?	_	PUNCT	QuestionMark	_	2	punct	_	SpaceAfter=No
8	"	_	PUNCT	Quote	_	2	punct	_	_
9	frågade	_	VERB	PAST-ACT	_	2	parataxis	_	_
10	Fred	_	PROPN	SG-NOM	_	9	nsubj	_	_
11	ivrigt	_	ADV	_	_	9	advmod	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Daniel	_	PROPN	SG-NOM	_	3	vocative	_	SpaceAfter=No
2	,	_	PUNCT	Comma	_	1	punct	_	_
3	vände	_	VERB	PAST-ACT	_	0	root	_	_
4	han	_	PRON	PERS-P3SG-NOM	_	3	nsubj	_	_
5	sig	_	PRON	RFL-ACC	_	3	obj	_	_
6	till	_	ADP	_	_	7	case	_	_
7	pojken	_	NOUN	SG-DEF-NOM	_	3	obl	_	SpaceAfter=No
8	,	_	PUNCT	Comma	_	3	punct	_	_
9	det	_	PRON	DEM-SG	_	12	nsubj	_	_
10	här	_	ADV	DEM-SG	_	9	fixed	_	_
11	är	_	AUX	PRES-ACT	_	12	cop	_	_
12	Daniel	_	PROPN	SG-NOM	_	2	dislocated	_	SpaceAfter=No
13	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 vocative	color:blue
1	Tack	_	NOUN	SG-IND-NOM	_	0	root	_	_
2	så	_	ADV	_	_	1	fixed	_	_
3	mycket	_	ADV	_	_	1	fixed	_	SpaceAfter=No
4	,	_	PUNCT	Comma	_	1	punct	_	_
5	herr	_	NOUN	SG-IND-NOM	_	6	nmod	_	_
6	Donnay	_	PROPN	SG-NOM	_	3	vocative	_	SpaceAfter=No
7	.	_	PUNCT	Period	_	1	punct	_	_

~~~


