

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

2831 nodes (3%) are attached to their parents as `aux`.

2777 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.52207700459202.

The following 8 pairs of parts of speech are connected with `aux`: [da-pos/VERB]()-[da-pos/AUX]() (2597; 92% instances), [da-pos/ADJ]()-[da-pos/AUX]() (104; 4% instances), [da-pos/NOUN]()-[da-pos/AUX]() (88; 3% instances), [da-pos/ADV]()-[da-pos/AUX]() (30; 1% instances), [da-pos/PRON]()-[da-pos/AUX]() (5; 0% instances), [da-pos/PROPN]()-[da-pos/AUX]() (4; 0% instances), [da-pos/NUM]()-[da-pos/AUX]() (2; 0% instances), [da-pos/ADP]()-[da-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	obl	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	_
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	flat	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	har	have	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	både	både	ADV	_	_	5	advmod	_	_
4	været	være	AUX	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	værnepligtig	værnepligtig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	medlem	medlem	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	conj	_	_
8	af	af	ADP	_	AdpType=Prep	9	case	_	_
9	Hjemmeværnet	hjemmeværn	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 aux	color:blue
1	Målet	mål	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	4	nsubj	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	4	det	_	_
4	doping	doping	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	de	den	DET	_	Number=Plur|PronType=Dem	8	det	_	_
7	trætte	træt	ADJ	_	Degree=Pos|Number=Plur	8	amod	_	_
8	mænd	mand	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	9	nsubj	_	_
9	havde	have	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
10	behov	behov	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	9	obj	_	_
11	for	for	ADP	_	AdpType=Prep	10	case	_	_
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


