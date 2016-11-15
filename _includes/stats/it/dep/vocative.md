

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

107 nodes (0%) are attached to their parents as `vocative`.

90 instances of `vocative` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.28971962616822.

The following 12 pairs of parts of speech are connected with `vocative`: [it-pos/VERB]()-[it-pos/NOUN]() (76; 71% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (11; 10% instances), [it-pos/VERB]()-[it-pos/PROPN]() (5; 5% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (4; 4% instances), [it-pos/INTJ]()-[it-pos/PROPN]() (3; 3% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (2; 2% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (1; 1% instances), [it-pos/ADV]()-[it-pos/NOUN]() (1; 1% instances), [it-pos/AUX]()-[it-pos/NOUN]() (1; 1% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 1% instances), [it-pos/PRON]()-[it-pos/PROPN]() (1; 1% instances), [it-pos/VERB]()-[it-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 vocative	color:blue
1	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
2	No	no	INTJ	I	_	7	discourse	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	cattolici	cattolico	NOUN	S	Gender=Masc|Number=Plur	7	vocative	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	ci	ci	PRON	PC	Number=Plur|Person=1|PronType=Clit	7	dobj	_	_
7	sposa	sposare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	cardinale	cardinale	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
10	Puljic	Puljic	PROPN	SP	_	9	nmod	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	Onorevole	onorevole	ADJ	A	Number=Sing	2	amod	_	_
2	collega	collega	NOUN	S	Number=Sing	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	sarà	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	cura	cura	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
7	verificare	verificare	VERB	V	VerbForm=Inf	6	csubj	_	_
8	tale	tale	DET	DD	Number=Sing|PronType=Dem	9	det	_	_
9	punto	punto	NOUN	S	Gender=Masc|Number=Sing	7	dobj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative	color:blue
1	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No
2	Chirac	Chirac	PROPN	SP	_	4	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	ricorda	ricordare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ti	ti	PRON	PC	Number=Sing|Person=2|PronType=Clit	4	expl	_	_
6	Hiroshima	Hiroshima	PROPN	SP	_	4	dobj	_	SpaceAfter=No
7	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	4	punct	_	_

~~~


