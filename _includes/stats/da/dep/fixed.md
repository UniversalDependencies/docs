

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

432 nodes (0%) are attached to their parents as `fixed`.

432 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13425925925926.

The following 17 pairs of parts of speech are connected with `fixed`: [da-pos/ADP]()-[da-pos/NOUN]() (258; 60% instances), [da-pos/ADV]()-[da-pos/ADP]() (53; 12% instances), [da-pos/ADP]()-[da-pos/ADV]() (25; 6% instances), [da-pos/ADP]()-[da-pos/DET]() (25; 6% instances), [da-pos/ADP]()-[da-pos/PRON]() (23; 5% instances), [da-pos/ADP]()-[da-pos/ADP]() (19; 4% instances), [da-pos/ADV]()-[da-pos/VERB]() (5; 1% instances), [da-pos/ADP]()-[da-pos/ADJ]() (4; 1% instances), [da-pos/ADP]()-[da-pos/VERB]() (4; 1% instances), [da-pos/VERB]()-[da-pos/ADP]() (4; 1% instances), [da-pos/X]()-[da-pos/X]() (3; 1% instances), [da-pos/ADJ]()-[da-pos/ADV]() (2; 0% instances), [da-pos/ADP]()-[da-pos/SCONJ]() (2; 0% instances), [da-pos/ADV]()-[da-pos/ADV]() (2; 0% instances), [da-pos/ADV]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/ADV]()-[da-pos/CCONJ]() (1; 0% instances), [da-pos/ADV]()-[da-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Soldaterne	soldat	NOUN	_	Definite=Def|Gender=Com|Number=Plur	5	nsubj	_	_
2	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
3	i	i	ADP	_	AdpType=Prep	5	advmod	_	_
4	aftes	aften	NOUN	_	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	3	fixed	_	_
5	overgivet	overgive	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	til	til	ADP	_	AdpType=Prep	7	case	_	_
7	FN-styrken	FN-styrke	NOUN	_	Definite=Def|Gender=Com|Number=Sing	5	obl	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	Jugoslavien	Jugoslavien	PROPN	_	_	7	nmod	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Selv	selv	ADV	_	_	5	mark	_	_
2	om	om	ADP	_	AdpType=Prep	1	fixed	_	_
3	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	betyde	betyde	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
6	forandring	forandring	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	obj	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	I	i	ADP	_	AdpType=Prep	0	root	_	_
2	hvert	hver	DET	_	Gender=Com|Number=Sing|PronType=Ind	1	fixed	_	_
3	fald	fald	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	fixed	_	_
4	,	,	PUNCT	_	_	1	punct	_	_
5	hvis	hvis	SCONJ	_	_	1	mark	_	_
6	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	skulle	skulle	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
8	stave	stave	VERB	_	VerbForm=Inf|Voice=Act	1	advcl	_	_
9	sig	sig	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	obj	_	_
10	igennem	igennem	ADP	_	AdpType=Prep	11	case	_	_
11	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	obl	_	_
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


