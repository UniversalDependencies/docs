

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

815 nodes (0%) are attached to their parents as `compound`.

745 instances of `compound` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16932515337423.

The following 8 pairs of parts of speech are connected with `compound`: [it-pos/NOUN]()-[it-pos/NOUN]() (646; 79% instances), [it-pos/NUM]()-[it-pos/NUM]() (153; 19% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (6; 1% instances), [it-pos/NOUN]()-[it-pos/X]() (6; 1% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/NUM]()-[it-pos/X]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/X]()-[it-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	apprendista	apprendista	NOUN	S	Number=Sing	9	nsubj	_	_
3	stregone	stregone	NOUN	S	Gender=Masc|Number=Sing	2	compound	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	evidentemente	evidentemente	ADV	B	_	9	advmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	non	non	ADV	BN	PronType=Neg	9	neg	_	_
8	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	rinunciato	rinunciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Feb	Feb	PROPN	SP	_	0	root	_	_
2	26	26	NUM	N	NumType=Card	1	nummod	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	2014	2014	NUM	N	NumType=Card	2	compound	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	a	a	X	X	_	3	nummod	_	SpaceAfter=No
2	)	)	PUNCT	FF	_	1	punct	_	_
3	trasporti	trasporto	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
4	ad	ad	X	SW	_	3	compound	_	_
5	hoc	hoc	X	SW	_	4	foreign	_	_
6	di	di	ADP	E	_	7	case	_	_
7	merci	merce	NOUN	S	Gender=Fem|Number=Plur	3	nmod	_	_
8	pericolose	pericoloso	ADJ	A	Gender=Fem|Number=Plur	7	amod	_	SpaceAfter=No
9	;	;	PUNCT	FC	_	3	punct	_	_

~~~


