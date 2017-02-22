

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

5214 nodes (6%) are attached to their parents as `amod`.

4500 instances of `amod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77579593402378.

The following 20 pairs of parts of speech are connected with `amod`: [da-pos/NOUN]()-[da-pos/ADJ]() (3963; 76% instances), [da-pos/VERB]()-[da-pos/ADJ]() (394; 8% instances), [da-pos/NOUN]()-[da-pos/VERB]() (387; 7% instances), [da-pos/PROPN]()-[da-pos/ADJ]() (187; 4% instances), [da-pos/ADJ]()-[da-pos/ADJ]() (80; 2% instances), [da-pos/VERB]()-[da-pos/ADV]() (74; 1% instances), [da-pos/NOUN]()-[da-pos/X]() (41; 1% instances), [da-pos/PRON]()-[da-pos/ADJ]() (30; 1% instances), [da-pos/ADV]()-[da-pos/ADJ]() (25; 0% instances), [da-pos/X]()-[da-pos/ADJ]() (13; 0% instances), [da-pos/CCONJ]()-[da-pos/ADJ]() (5; 0% instances), [da-pos/VERB]()-[da-pos/VERB]() (5; 0% instances), [da-pos/ADP]()-[da-pos/ADJ]() (2; 0% instances), [da-pos/AUX]()-[da-pos/ADJ]() (2; 0% instances), [da-pos/ADV]()-[da-pos/VERB]() (1; 0% instances), [da-pos/AUX]()-[da-pos/ADV]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/ADV]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 amod	color:blue
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 amod	color:blue
1	Lars	Lars	PROPN	_	_	2	nsubj	_	_
2	mumlede	mumle	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	noget	nogen	PRON	_	Gender=Neut|Number=Sing|PronType=Ind	2	obj	_	_
4	om	om	ADP	_	AdpType=Prep	9	mark	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	at	at	SCONJ	_	_	9	mark	_	_
7	klokken	klokke	NOUN	_	Definite=Def|Gender=Com|Number=Sing	9	nsubj	_	_
8	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	mange	mange	ADJ	_	Degree=Pos|Number=Plur	2	amod	_	_
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 amod	color:blue
1	Alene	alene	ADV	_	_	3	advmod	_	_
2	i	i	ADP	_	AdpType=Prep	1	case	_	_
3	Hamburg	Hamburg	PROPN	_	_	6	obl	_	_
4	skulle	skulle	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	_	_
5	de	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	have	have	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	has	has	NOUN	_	_	6	obj	_	_
8	på	på	ADP	_	AdpType=Prep	10	case	_	_
9	750	750	NUM	_	NumType=Card	10	nummod	_	_
10	ton	ton	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	7	nmod	_	_
11	ophobet	ophobe	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	10	amod	_	_
12	skrald	skrald	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	10	nmod	_	_
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


