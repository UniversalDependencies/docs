

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

1028 nodes (0%) are attached to their parents as `csubj`.

906 instances of `csubj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.96887159533074.

The following 26 pairs of parts of speech are connected with `csubj`: [no-pos/ADJ]()-[no-pos/VERB]() (510; 50% instances), [no-pos/VERB]()-[no-pos/VERB]() (247; 24% instances), [no-pos/NOUN]()-[no-pos/VERB]() (152; 15% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (21; 2% instances), [no-pos/ADV]()-[no-pos/VERB]() (16; 2% instances), [no-pos/VERB]()-[no-pos/ADJ]() (14; 1% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (13; 1% instances), [no-pos/VERB]()-[no-pos/NOUN]() (12; 1% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (9; 1% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (7; 1% instances), [no-pos/ADJ]()-[no-pos/ADP]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (4; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (3; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (2; 0% instances), [no-pos/PROPN]()-[no-pos/VERB]() (2; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/ADV]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (1; 0% instances), [no-pos/VERB]()-[no-pos/ADV]() (1; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	lange	lang	ADJ	_	Degree=Pos|Number=Plur	4	amod	_	_
4	timer	time	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
5	,	$,	PUNCT	_	_	4	punct	_	_
6	tøft	tøff	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	remnant	_	_
7	å	å	PART	_	_	8	mark	_	_
8	holde	holde	VERB	_	VerbForm=Inf	6	csubj	_	_
9	motet	mot	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	8	dobj	_	_
10	oppe	oppe	ADP	_	_	8	compound:prt	_	SpaceAfter=No
11	,	$,	PUNCT	_	_	8	punct	_	_
12	uten	uten	ADP	_	_	14	mark	_	_
13	å	å	PART	_	_	14	mark	_	_
14	vite	vite	VERB	_	VerbForm=Inf	8	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Men	men	CONJ	_	_	3	cc	_	_
2	snart	snar	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	advmod	_	_
3	blir	bli	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
5	forbudt	forbudt	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	xcomp	_	_
6	å	å	PART	_	_	7	mark	_	_
7	puste	puste	VERB	_	VerbForm=Inf	3	csubj	_	_
8	der	der	ADV	_	_	7	advmod	_	_
9	inne	inne	ADP	_	_	8	nmod	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 csubj	color:blue
1	Hvor	hvor	ADV	_	_	2	advmod	_	_
2	lenge	lenge	ADJ	_	Degree=Pos	7	advmod	_	_
3	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	slik	slik	DET	_	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	regjering	regjering	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	nsubj	_	_
6	kan	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	leve	leve	VERB	_	VerbForm=Inf	13	csubj	_	SpaceAfter=No
8	,	$,	PUNCT	_	_	7	punct	_	_
9	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	13	cop	_	_
10	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
11	helt	hel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	12	advmod	_	_
12	annen	annen	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	13	det	_	_
13	sak	sak	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	13	punct	_	_

~~~


