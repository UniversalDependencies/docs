

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

315 nodes (0%) are attached to their parents as `csubj`.

254 instances of `csubj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.94285714285714.

The following 13 pairs of parts of speech are connected with `csubj`: [it-pos/ADJ]()-[it-pos/VERB]() (126; 40% instances), [it-pos/VERB]()-[it-pos/VERB]() (114; 36% instances), [it-pos/NOUN]()-[it-pos/VERB]() (39; 12% instances), [it-pos/ADV]()-[it-pos/VERB]() (12; 4% instances), [it-pos/VERB]()-[it-pos/ADJ]() (5; 2% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (4; 1% instances), [it-pos/VERB]()-[it-pos/NOUN]() (4; 1% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (3; 1% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (2; 1% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (2; 1% instances), [it-pos/PRON]()-[it-pos/VERB]() (2; 1% instances), [it-pos/ADJ]()-[it-pos/PRON]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	È	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	duro	duro	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	ammetter	ammettere	VERB	V	VerbForm=Inf	2	csubj	_	_
4	lo	lo	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Clit	3	dobj	_	_
5	,	,	PUNCT	FF	_	2	punct	_	_
6	ma	ma	CONJ	CC	_	2	cc	_	_
7	qualcuno	qualcuno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	10	nsubj	_	_
8	insostituibile	insostituibile	ADJ	A	Number=Sing	7	amod	_	_
9	c'	ci	PRON	PC	PronType=Clit	10	expl	_	_
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
11	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Non	non	ADV	BN	PronType=Neg	2	neg	_	_
2	sarebbe	essere	VERB	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	meglio	meglio	ADV	B	_	2	advmod	_	_
4	andare	andare	VERB	V	VerbForm=Inf	2	csubj	_	_
5	d'	di	ADP	E	_	6	case	_	_
6	accordo	accordo	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	_
7	?	?	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	Onorevole	onorevole	ADJ	A	Number=Sing	2	amod	_	_
2	collega	collega	NOUN	S	Number=Sing	6	vocative	_	_
3	,	,	PUNCT	FF	_	2	punct	_	_
4	sarà	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	cura	cura	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
7	verificare	verificare	VERB	V	VerbForm=Inf	6	csubj	_	_
8	tale	tale	DET	DD	Number=Sing|PronType=Dem	9	det	_	_
9	punto	punto	NOUN	S	Gender=Masc|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	FS	_	6	punct	_	_

~~~


