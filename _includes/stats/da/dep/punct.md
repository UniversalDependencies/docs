

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

13933 nodes (14%) are attached to their parents as `punct`.

10007 instances of `punct` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.38189908849494.

The following 19 pairs of parts of speech are connected with `punct`: [da-pos/VERB]()-[da-pos/PUNCT]() (8503; 61% instances), [da-pos/NOUN]()-[da-pos/PUNCT]() (2330; 17% instances), [da-pos/ADJ]()-[da-pos/PUNCT]() (1021; 7% instances), [da-pos/PROPN]()-[da-pos/PUNCT]() (657; 5% instances), [da-pos/ADV]()-[da-pos/PUNCT]() (436; 3% instances), [da-pos/SCONJ]()-[da-pos/PUNCT]() (198; 1% instances), [da-pos/INTJ]()-[da-pos/PUNCT]() (175; 1% instances), [da-pos/CONJ]()-[da-pos/PUNCT]() (173; 1% instances), [da-pos/ADP]()-[da-pos/PUNCT]() (165; 1% instances), [da-pos/PRON]()-[da-pos/PUNCT]() (110; 1% instances), [da-pos/NUM]()-[da-pos/PUNCT]() (69; 0% instances), [da-pos/X]()-[da-pos/PUNCT]() (65; 0% instances), [da-pos/AUX]()-[da-pos/PUNCT]() (13; 0% instances), [da-pos/PART]()-[da-pos/PUNCT]() (7; 0% instances), [da-pos/VERB]()-[da-pos/SYM]() (4; 0% instances), [da-pos/NOUN]()-[da-pos/SYM]() (3; 0% instances), [da-pos/DET]()-[da-pos/PUNCT]() (2; 0% instances), [da-pos/PUNCT]()-[da-pos/PUNCT]() (1; 0% instances), [da-pos/SYM]()-[da-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	Hvor	hvor	ADV	_	_	2	advmod	_	_
2	kommer	komme	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	julemanden	julemand	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
4	fra	fra	ADP	_	AdpType=Prep	1	case	_	_
5	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 punct	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 punct	color:blue
1	Med	med	ADP	_	AdpType=Prep	7	mark	_	_
2	andre	anden	DET	_	Number=Plur|PronType=Ind	3	det	_	_
3	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
4	:	:	PUNCT	_	_	1	punct	_	_
5	tobaksrygning	tobaksrygning	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	7	nsubj	_	_
6	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	forbudt	forbudt	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	3	amod	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	ministerbilerne	ministerbil	NOUN	_	Definite=Def|Gender=Com|Number=Plur	7	nmod	_	_
10	!	!	PUNCT	_	_	7	punct	_	_

~~~


