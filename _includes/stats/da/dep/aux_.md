

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

2550 nodes (3%) are attached to their parents as `aux`.

2491 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.09137254901961.

The following 8 pairs of parts of speech are connected with `aux`: [da-pos/VERB]()-[da-pos/AUX]() (2320; 91% instances), [da-pos/ADJ]()-[da-pos/AUX]() (100; 4% instances), [da-pos/NOUN]()-[da-pos/AUX]() (88; 3% instances), [da-pos/ADV]()-[da-pos/AUX]() (30; 1% instances), [da-pos/PRON]()-[da-pos/AUX]() (5; 0% instances), [da-pos/NUM]()-[da-pos/AUX]() (3; 0% instances), [da-pos/PROPN]()-[da-pos/AUX]() (3; 0% instances), [da-pos/ADP]()-[da-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Hun	hun	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	have	have	AUX	_	VerbForm=Inf|Voice=Act	4	aux	_	_
4	handlet	handle	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	0	root	_	_
5	af	af	ADP	_	AdpType=Prep	6	case	_	_
6	kærlighed	kærlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	4	nmod	_	_
7	til	til	ADP	_	AdpType=Prep	8	case	_	_
8	dig	du	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=2|PronType=Prs	6	nmod	_	_
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	Det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	bedste	god	ADJ	_	Definite=Def|Degree=Sup	0	root	_	_
3	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
4	har	have	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	"	"	PUNCT	_	_	6	punct	_	_
2	Dette	denne	PRON	_	Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
3	har	have	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	været	være	AUX	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	6	cop	_	_
5	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
6	overraskelses-angreb	overraskelses-angreb	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


