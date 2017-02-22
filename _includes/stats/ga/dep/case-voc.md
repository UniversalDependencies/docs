

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [case]().

10 nodes (0%) are attached to their parents as `case:voc`.

10 instances of `case:voc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `case:voc`: [ga-pos/NOUN]()-[ga-pos/PART]() (6; 60% instances), [ga-pos/PROPN]()-[ga-pos/PART]() (4; 40% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case:voc	color:blue
1	SEANA-BHID	SEANA-BHID	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bid	Bid	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
3	anseo	anseo	ADV	Loc	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	a	a	PART	Voc	PartType=Voc	6	case:voc	_	_
6	dhaoine	duine	NOUN	Noun	Case=Voc|Definite=Def|Gender=Masc|Number=Plur	2	vocative	_	_
7	uaisle	uasal	ADJ	Adj	Number=Plur|PartType=Voc	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case:voc	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Slán	slán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	obl:prep	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	2	punct	_	_
5	a	a	PART	Voc	PartType=Voc	6	case:voc	_	_
6	Dhoráid	Dhoráid	PROPN	Noun	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
7	!	!	PUNCT	!	_	2	punct	_	_

~~~


