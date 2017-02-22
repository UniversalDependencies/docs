

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

12489 nodes (14%) are attached to their parents as `punct`.

11156 instances of `punct` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.31635839538794.

The following 18 pairs of parts of speech are connected with `punct`: [da-pos/VERB]()-[da-pos/PUNCT]() (6924; 55% instances), [da-pos/NOUN]()-[da-pos/PUNCT]() (2681; 21% instances), [da-pos/ADJ]()-[da-pos/PUNCT]() (926; 7% instances), [da-pos/PROPN]()-[da-pos/PUNCT]() (746; 6% instances), [da-pos/ADP]()-[da-pos/PUNCT]() (353; 3% instances), [da-pos/ADV]()-[da-pos/PUNCT]() (323; 3% instances), [da-pos/PRON]()-[da-pos/PUNCT]() (200; 2% instances), [da-pos/INTJ]()-[da-pos/PUNCT]() (161; 1% instances), [da-pos/X]()-[da-pos/PUNCT]() (59; 0% instances), [da-pos/NUM]()-[da-pos/PUNCT]() (56; 0% instances), [da-pos/CCONJ]()-[da-pos/PUNCT]() (30; 0% instances), [da-pos/AUX]()-[da-pos/PUNCT]() (15; 0% instances), [da-pos/PART]()-[da-pos/PUNCT]() (4; 0% instances), [da-pos/VERB]()-[da-pos/SYM]() (4; 0% instances), [da-pos/NOUN]()-[da-pos/SYM]() (3; 0% instances), [da-pos/DET]()-[da-pos/PUNCT]() (2; 0% instances), [da-pos/PUNCT]()-[da-pos/PUNCT]() (1; 0% instances), [da-pos/SYM]()-[da-pos/PUNCT]() (1; 0% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 punct	color:blue
1	Jens	Jens	PROPN	_	_	3	nmod:poss	_	_
2	Madsens	Madsen	PROPN	_	Case=Gen	1	flat	_	_
3	udvisning	udvisning	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	9	nsubj	_	_
4	i	i	ADP	_	AdpType=Prep	7	case	_	_
5	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	7	det	_	_
6	43.	43.	ADJ	_	NumType=Ord	7	amod	_	_
7	minut	minut	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	nmod	_	_
8	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	diskutabel	diskutabel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


