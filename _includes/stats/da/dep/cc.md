

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

2859 nodes (3%) are attached to their parents as `cc`.

2647 instances of `cc` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.88737320741518.

The following 24 pairs of parts of speech are connected with `cc`: [da-pos/VERB]()-[da-pos/CCONJ]() (1348; 47% instances), [da-pos/NOUN]()-[da-pos/CCONJ]() (759; 27% instances), [da-pos/ADJ]()-[da-pos/CCONJ]() (314; 11% instances), [da-pos/PROPN]()-[da-pos/CCONJ]() (175; 6% instances), [da-pos/ADV]()-[da-pos/CCONJ]() (90; 3% instances), [da-pos/ADP]()-[da-pos/CCONJ]() (59; 2% instances), [da-pos/PRON]()-[da-pos/CCONJ]() (31; 1% instances), [da-pos/NOUN]()-[da-pos/SYM]() (26; 1% instances), [da-pos/X]()-[da-pos/CCONJ]() (12; 0% instances), [da-pos/NOUN]()-[da-pos/ADV]() (9; 0% instances), [da-pos/ADV]()-[da-pos/SYM]() (7; 0% instances), [da-pos/NUM]()-[da-pos/CCONJ]() (6; 0% instances), [da-pos/VERB]()-[da-pos/ADV]() (5; 0% instances), [da-pos/INTJ]()-[da-pos/CCONJ]() (3; 0% instances), [da-pos/ADV]()-[da-pos/ADV]() (2; 0% instances), [da-pos/PART]()-[da-pos/CCONJ]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/ADV]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (2; 0% instances), [da-pos/X]()-[da-pos/SYM]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/ADV]() (1; 0% instances), [da-pos/VERB]()-[da-pos/INTJ]() (1; 0% instances), [da-pos/VERB]()-[da-pos/X]() (1; 0% instances), [da-pos/X]()-[da-pos/ADV]() (1; 0% instances), [da-pos/X]()-[da-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	Men	men	CCONJ	_	_	6	cc	_	_
2	man	man	PRON	_	Case=Nom|Gender=Com|PronType=Ind	6	nsubj	_	_
3	ka'	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	sgu'	sgu'	ADV	_	_	6	advmod	_	_
5	ikke	ikke	ADV	_	_	6	advmod	_	_
6	undvære	undvære	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	dem	de	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc	color:blue
1	Vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	har	have	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	4	det	_	_
4	tradition	tradition	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
5	for	for	ADP	_	AdpType=Prep	6	case	_	_
6	konsensus	konsensus	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	4	nmod	_	_
7	og	og	CCONJ	_	_	9	cc	_	_
8	brede	bred	ADJ	_	Degree=Pos|Number=Plur	9	amod	_	_
9	forlig	forlig	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	6	conj	_	_
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	H.L.	H.L.	PROPN	_	_	8	nsubj	_	_
2	Hansen	Hansen	PROPN	_	_	1	flat	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
4	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
5	udsædvanlig	udsædvanlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	frodig	frodig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	conj	_	_
8	personlighed	personlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


