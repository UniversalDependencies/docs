

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

665 nodes (0%) are attached to their parents as `auxpass`.

663 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32481203007519.

The following 1 pairs of parts of speech are connected with `auxpass`: [fi-pos/VERB]()-[fi-pos/AUX]() (665; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 auxpass	color:blue
1	Syytä	syy	NOUN	N	Case=Par|Number=Sing	10	dobj	_	_
2	sille	se	PRON	Pron	Case=All|Number=Sing|PronType=Dem	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	7	punct	_	_
4	miksi	miksi	ADV	Adv	_	7	advmod	_	_
5	minut	minä	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	dobj	_	_
6	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	auxpass	_	_
7	suodatettu	suodattaa	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	7	punct	_	_
9	en	ei	VERB	V	Negative=Neg|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	10	neg	_	_
10	tiedä	tietää	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	10	punct	_	_

~~~


