

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

5512 nodes (5%) are attached to their parents as `root`.

5512 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.99310595065312.

The following 13 pairs of parts of speech are connected with `root`: [da-pos/ROOT]()-[da-pos/VERB]() (3938; 71% instances), [da-pos/ROOT]()-[da-pos/NOUN]() (736; 13% instances), [da-pos/ROOT]()-[da-pos/ADJ]() (400; 7% instances), [da-pos/ROOT]()-[da-pos/ADV]() (154; 3% instances), [da-pos/ROOT]()-[da-pos/PROPN]() (92; 2% instances), [da-pos/ROOT]()-[da-pos/PRON]() (51; 1% instances), [da-pos/ROOT]()-[da-pos/INTJ]() (43; 1% instances), [da-pos/ROOT]()-[da-pos/CONJ]() (29; 1% instances), [da-pos/ROOT]()-[da-pos/NUM]() (29; 1% instances), [da-pos/ROOT]()-[da-pos/X]() (21; 0% instances), [da-pos/ROOT]()-[da-pos/ADP]() (12; 0% instances), [da-pos/ROOT]()-[da-pos/SYM]() (4; 0% instances), [da-pos/ROOT]()-[da-pos/PUNCT]() (3; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Hvor	hvor	ADV	_	_	2	advmod	_	_
2	kommer	komme	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	julemanden	julemand	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
4	fra	fra	ADP	_	AdpType=Prep	1	case	_	_
5	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	H.L.	H.L.	PROPN	_	_	8	nsubj	_	_
2	Hansen	Hansen	PROPN	_	_	1	name	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
4	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
5	udsædvanlig	udsædvanlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
6	og	og	CONJ	_	_	5	cc	_	_
7	frodig	frodig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	conj	_	_
8	personlighed	personlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	ikke	ikke	ADV	_	_	5	neg	_	_
5	overdrevet	overdrevet	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	0	root	_	_
6	,	,	PUNCT	_	_	9	punct	_	_
7	hvis	hvis	SCONJ	_	_	9	mark	_	_
8	telefonen	telefon	NOUN	_	Definite=Def|Gender=Com|Number=Sing	9	nsubj	_	_
9	ringer	ringe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
10	50	50	NUM	_	NumType=Card	11	nummod	_	_
11	gange	gang	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	9	nmod	_	_
12	i	i	ADP	_	AdpType=Prep	13	case	_	_
13	timen	time	NOUN	_	Definite=Def|Gender=Com|Number=Sing	11	nmod	_	_
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


