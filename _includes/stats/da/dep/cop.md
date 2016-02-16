

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

1761 nodes (2%) are attached to their parents as `cop`.

1667 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23452583759228.

The following 8 pairs of parts of speech are connected with `cop`: [da-pos/ADJ]()-[da-pos/AUX]() (782; 44% instances), [da-pos/NOUN]()-[da-pos/AUX]() (658; 37% instances), [da-pos/ADV]()-[da-pos/AUX]() (165; 9% instances), [da-pos/PRON]()-[da-pos/AUX]() (92; 5% instances), [da-pos/PROPN]()-[da-pos/AUX]() (33; 2% instances), [da-pos/ADP]()-[da-pos/AUX]() (15; 1% instances), [da-pos/NUM]()-[da-pos/AUX]() (15; 1% instances), [da-pos/VERB]()-[da-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cop	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 cop	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	lang	lang	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	amod	_	_
4	tid	tid	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	nmod:tmod	_	_
5	siden	siden	ADV	_	_	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_
7	"	"	PUNCT	_	_	5	punct	_	_

~~~


