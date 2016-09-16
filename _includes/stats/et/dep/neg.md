

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

2245 nodes (1%) are attached to their parents as `neg`.

2245 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01514476614699.

The following 2 pairs of parts of speech are connected with `neg`: [et-pos/VERB]()-[et-pos/AUX]() (1944; 87% instances), [et-pos/AUX]()-[et-pos/AUX]() (301; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	Ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	ei	ei	AUX	V	Mood=Ind|Negative=Neg|VerbForm=Fin	3	neg	_	_
3	osanud	oskama	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	lukke	lukk	NOUN	S	Case=Par|Number=Plur	5	dobj	_	_
5	muukida	muukima	VERB	V	VerbForm=Inf	3	xcomp	_	_
6	või	või	CONJ	J	_	5	cc	_	_
7	uksi	uks	NOUN	S	Case=Par|Number=Plur	8	dobj	_	_
8	lõhkuda	lõhkuma	VERB	V	VerbForm=Inf	5	conj	_	_
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	_
2	Muidugi	muidugi	ADV	D	_	5	advmod	_	_
3	ei	ei	AUX	V	Mood=Ind|Negative=Neg|VerbForm=Fin	4	neg	_	_
4	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	teada	teadma	VERB	V	VerbForm=Inf	0	root	_	_
6	,	,	PUNCT	Z	_	5	punct	_	_
7	"	"	PUNCT	Z	_	5	punct	_	_
8	puhkevad	puhkema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
9	tundmatud	tundmatu	NOUN	S	Case=Nom|Number=Plur	8	nsubj	_	_
10	naerma	naerma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	8	xcomp	_	_
11	.	.	PUNCT	Z	_	5	punct	_	_

~~~


