

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

1356 nodes (1%) are attached to their parents as `nummod`.

1131 instances of `nummod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5877581120944.

The following 9 pairs of parts of speech are connected with `nummod`: [sv-pos/NOUN]()-[sv-pos/NUM]() (1167; 86% instances), [sv-pos/NUM]()-[sv-pos/NUM]() (64; 5% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (59; 4% instances), [sv-pos/ADJ]()-[sv-pos/NUM]() (33; 2% instances), [sv-pos/PROPN]()-[sv-pos/NUM]() (24; 2% instances), [sv-pos/ADP]()-[sv-pos/NUM]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/NUM]() (2; 0% instances), [sv-pos/DET]()-[sv-pos/NUM]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
2	skedde	ske	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	nämligen	nämligen	ADV	AB	_	2	advmod	_	_
4	vid	vid	ADP	PP	_	7	case	_	_
5	1919	1919	NUM	RG|NOM	Case=Nom	6	nummod	_	_
6	års	år	NOUN	NN|NEU|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing	7	nmod:poss	_	_
7	riksdag	riksdag	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	_	_
8	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nummod	color:blue
1	Publicerad	publicera	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	i	i	ADP	PP	_	3	case	_	_
3	Children	Children	PROPN	PM|NOM	Case=Nom	1	nmod	_	_
4	1958	1958	NUM	RG|NOM	Case=Nom	3	nmod	_	_
5	,	,	PUNCT	MID	_	4	punct	_	_
6	Vol.	Vol.	NOUN	NN|AN	_	7	nmod	_	_
7	5	5	NUM	RG|NOM	Case=Nom	4	nmod	_	_
8	,	,	PUNCT	MID	_	7	punct	_	_
9	179-184	179-184	NUM	RG|NOM	Case=Nom	7	nummod	_	_
10	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	ATP	ATP	PROPN	PM|NOM	Case=Nom	2	nsubjpass	_	_
2	infördes	införa	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	1960	1960	NUM	RG|NOM	Case=Nom	2	nummod	_	_
4	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


