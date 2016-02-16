

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

3044 nodes (3%) are attached to their parents as `cc`.

2647 instances of `cc` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.32227332457293.

The following 27 pairs of parts of speech are connected with `cc`: [da-pos/VERB]()-[da-pos/CONJ]() (1211; 40% instances), [da-pos/NOUN]()-[da-pos/CONJ]() (997; 33% instances), [da-pos/ADJ]()-[da-pos/CONJ]() (310; 10% instances), [da-pos/PROPN]()-[da-pos/CONJ]() (245; 8% instances), [da-pos/ADV]()-[da-pos/CONJ]() (91; 3% instances), [da-pos/X]()-[da-pos/CONJ]() (48; 2% instances), [da-pos/ADP]()-[da-pos/CONJ]() (31; 1% instances), [da-pos/NOUN]()-[da-pos/SYM]() (23; 1% instances), [da-pos/PRON]()-[da-pos/CONJ]() (23; 1% instances), [da-pos/NOUN]()-[da-pos/ADV]() (8; 0% instances), [da-pos/NUM]()-[da-pos/CONJ]() (8; 0% instances), [da-pos/X]()-[da-pos/SYM]() (8; 0% instances), [da-pos/ADV]()-[da-pos/SYM]() (7; 0% instances), [da-pos/INTJ]()-[da-pos/CONJ]() (7; 0% instances), [da-pos/PART]()-[da-pos/CONJ]() (7; 0% instances), [da-pos/VERB]()-[da-pos/ADV]() (6; 0% instances), [da-pos/ADV]()-[da-pos/ADV]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/ADV]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/ADV]() (1; 0% instances), [da-pos/ADP]()-[da-pos/ADP]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/ADP]() (1; 0% instances), [da-pos/VERB]()-[da-pos/INTJ]() (1; 0% instances), [da-pos/VERB]()-[da-pos/X]() (1; 0% instances), [da-pos/X]()-[da-pos/ADV]() (1; 0% instances), [da-pos/X]()-[da-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 cc	color:blue
1	Skrab	skrabe	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	kernerne	kerne	NOUN	_	Definite=Def|Gender=Com|Number=Plur	1	dobj	_	_
3	ud	ud	ADV	_	_	1	nmod:loc	_	_
4	af	af	ADP	_	AdpType=Prep	5	case	_	_
5	agurk	agurk	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	_
6	,	,	PUNCT	_	_	1	punct	_	_
7	men	men	CONJ	_	_	1	cc	_	_
8	ikke	ikke	ADV	_	_	7	neg	_	_
9	af	af	ADP	_	AdpType=Prep	10	case	_	_
10	courgette	courgette	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	7	nmod	_	_
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 cc	color:blue
1	Toiletter	toilet	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	gangarealer	gangareal	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	1	conj	_	_
4	,	,	PUNCT	_	_	1	punct	_	_
5	pædagogernes	pædagog	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Plur	6	nmod:poss	_	_
6	the-køkken	the-køkken	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	conj	_	_
7	og	og	CONJ	_	_	1	cc	_	_
8	så	så	ADV	_	_	9	advmod	_	_
9	videre	videre	ADV	_	_	1	conj	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
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


