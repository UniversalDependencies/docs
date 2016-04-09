

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

2 nodes (0%) are attached to their parents as `reparandum`.

2 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `reparandum`: [da-pos/PRON]()-[da-pos/PRON]() (1; 50% instances), [da-pos/VERB]()-[da-pos/VERB]() (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 reparandum	color:blue
1	Jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	6	reparandum	_	_
2	...	...	PUNCT	_	_	1	punct	_	_
3	åh	åh	INTJ	_	_	10	discourse	_	_
4	Gud	gud	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	elsker	elske	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
8	dig	du	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=2|PronType=Prs	7	dobj	_	_
9	,	,	PUNCT	_	_	7	punct	_	_
10	fløj	flyve	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
12	forpint	forpint	ADV	_	Degree=Pos	10	advmod	_	_
13	gennem	gennem	ADP	_	AdpType=Prep	15	case	_	_
14	hendes	hendes	DET	_	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	15	det	_	_
15	hjerne	hjerne	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	10	nmod	_	_
16	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 reparandum	color:blue
1	Vil	ville	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	reparandum	_	_
2	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	_
3	...	...	PUNCT	_	_	1	punct	_	_
4	vil	ville	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
5	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	gifte	gifte	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	dig	du	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=2|PronType=Prs	6	dobj	_	_
8	med	med	ADP	_	AdpType=Prep	9	case	_	_
9	mig	jeg	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=1|PronType=Prs	6	nmod	_	_
10	,	,	PUNCT	_	_	6	punct	_	_
11	Trine	Trine	PROPN	_	_	6	vocative	_	_
12	?	?	PUNCT	_	_	6	punct	_	_

~~~


