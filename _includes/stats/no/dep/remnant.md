

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

287 nodes (0%) are attached to their parents as `remnant`.

287 instances of `remnant` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.8397212543554.

The following 33 pairs of parts of speech are connected with `remnant`: [no-pos/VERB]()-[no-pos/NOUN]() (91; 32% instances), [no-pos/VERB]()-[no-pos/PROPN]() (28; 10% instances), [no-pos/VERB]()-[no-pos/VERB]() (28; 10% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (25; 9% instances), [no-pos/VERB]()-[no-pos/ADJ]() (23; 8% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (16; 6% instances), [no-pos/VERB]()-[no-pos/NUM]() (15; 5% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (7; 2% instances), [no-pos/NOUN]()-[no-pos/VERB]() (7; 2% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (6; 2% instances), [no-pos/VERB]()-[no-pos/PRON]() (6; 2% instances), [no-pos/VERB]()-[no-pos/ADV]() (5; 2% instances), [no-pos/ADV]()-[no-pos/VERB]() (3; 1% instances), [no-pos/VERB]()-[no-pos/DET]() (3; 1% instances), [no-pos/ADJ]()-[no-pos/PRON]() (2; 1% instances), [no-pos/ADJ]()-[no-pos/VERB]() (2; 1% instances), [no-pos/NOUN]()-[no-pos/PRON]() (2; 1% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (2; 1% instances), [no-pos/PRON]()-[no-pos/NOUN]() (2; 1% instances), [no-pos/ADJ]()-[no-pos/ADV]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADV]() (1; 0% instances), [no-pos/AUX]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/CONJ]()-[no-pos/CONJ]() (1; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/INTJ]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (1; 0% instances), [no-pos/PRON]()-[no-pos/CONJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 remnant	color:blue
1	En	en	DET	_	Gender=Masc|Number=Sing	2	det	_	_
2	prins	prins	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	født	føde	VERB	_	VerbForm=Part	0	root	_	_
5	,	$,	PUNCT	_	_	4	punct	_	_
6	navnet	navn	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	4	remnant	_	_
7	klart	klar	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	6	xcomp	_	_
8	til	til	ADP	_	_	9	case	_	_
9	uken	uke	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	_
10	|	$|	SYM	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 remnant	color:blue
1	Oregon	Oregon	PROPN	_	_	2	nsubj	_	_
2	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	7	7	NUM	_	Number=Plur	2	dobj	_	_
4	,	$,	PUNCT	_	_	2	punct	_	_
5	og	og	CONJ	_	_	7	cc	_	_
6	staten	stat	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	7	appos	_	_
7	Washington	Washington	PROPN	_	_	2	remnant	_	_
8	12	12	NUM	_	Number=Plur	9	nummod	_	_
9	valgmannstemmer	valgmannstemme	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	7	dobj	_	_
10	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 remnant	color:blue
1	Tre	tre	NUM	_	Number=Plur	2	nummod	_	_
2	prester	prest	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	5	nsubjpass	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux	_	_
4	blitt	bli	AUX	_	VerbForm=Part	5	auxpass	_	_
5	drept	drepe	VERB	_	VerbForm=Part	0	root	_	_
6	og	og	CONJ	_	_	9	cc	_	_
7	en	en	DET	_	Gender=Masc|Number=Sing	8	det	_	_
8	misjonærstasjon	misjonærstasjon	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	9	nsubj	_	_
9	brent	brenne	VERB	_	VerbForm=Part	5	remnant	_	_
10	ned	ned	ADP	_	_	9	compound:prt	_	_
11	.	$.	PUNCT	_	_	5	punct	_	_

~~~


