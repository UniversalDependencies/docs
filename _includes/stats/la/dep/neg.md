

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

75 nodes (0%) are attached to their parents as `neg`.

72 instances of `neg` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01333333333333.

The following 10 pairs of parts of speech are connected with `neg`: [la-pos/VERB]()-[la-pos/ADV]() (36; 48% instances), [la-pos/ADJ]()-[la-pos/ADV]() (7; 9% instances), [la-pos/VERB]()-[la-pos/CONJ]() (7; 9% instances), [la-pos/ADV]()-[la-pos/ADV]() (6; 8% instances), [la-pos/NOUN]()-[la-pos/ADV]() (6; 8% instances), [la-pos/PRON]()-[la-pos/CONJ]() (4; 5% instances), [la-pos/ADJ]()-[la-pos/CONJ]() (3; 4% instances), [la-pos/ADV]()-[la-pos/CONJ]() (3; 4% instances), [la-pos/NOUN]()-[la-pos/CONJ]() (2; 3% instances), [la-pos/NUM]()-[la-pos/CONJ]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 neg	color:blue
1	Equidem	equidem	ADV	d--------	_	2	advmod	_	_
2	natus	nascor	VERB	v-srppmn_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
3	non	non	ADV	d--------	_	2	neg	_	_
4	eram	sum1	VERB	v1siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	auxpass	_	_
5	.	.	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 neg	color:blue
1	Numquam	numquam	ADV	d--------	_	3	neg	_	_
2	est	sum1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	fidelis	fidelis	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	cum	cum	ADP	r--------	_	5	case	_	_
5	potente	potens	ADJ	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing	6	amod	_	_
6	societas	societas	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
7	:	:	PUNCT	u--------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 neg	color:blue
1	Nil	nihil	NOUN	n-s---n_-	Gender=Neut|Number=Sing	2	dobj	_	_
2	spernat	sperno	VERB	v3spsa---	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	auris	auris	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
4	,	,	PUNCT	u--------	_	2	punct	_	_
5	nec	neque	CONJ	c--------	_	7	neg	_	_
6	tamen	tamen	ADV	d--------	_	7	advmod	_	_
7	credat	credo	VERB	v3spsa---	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
8	statim	statim	ADV	d--------	_	7	advmod	_	_
9	.	.	PUNCT	u--------	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITT)

This relation is universal.

5672 nodes (2%) are attached to their parents as `neg`.

5453 instances of `neg` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.99118476727786.

The following 11 pairs of parts of speech are connected with `neg`: [la-pos/VERB]()-[la-pos/ADV]() (3639; 64% instances), [la-pos/NOUN]()-[la-pos/ADV]() (725; 13% instances), [la-pos/ADJ]()-[la-pos/ADV]() (616; 11% instances), [la-pos/CONJ]()-[la-pos/ADV]() (261; 5% instances), [la-pos/PRON]()-[la-pos/ADV]() (161; 3% instances), [la-pos/ADV]()-[la-pos/ADV]() (145; 3% instances), [la-pos/PUNCT]()-[la-pos/ADV]() (39; 1% instances), [la-pos/NUM]()-[la-pos/ADV]() (37; 1% instances), [la-pos/SCONJ]()-[la-pos/ADV]() (29; 1% instances), [la-pos/DET]()-[la-pos/ADV]() (19; 0% instances), [la-pos/ADP]()-[la-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 neg	color:blue
1	non	non	ADV	O4	_	6	neg	_	_
2	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
3	igitur	igitur	ADV	O4	_	6	cc	_	_
4	in	in	ADP	S4	AdpType=Prep	5	case	_	_
5	his	hic	PRON	F1|grn1|casO|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur|PronType=Dem	6	nmod	_	_
6	ponenda	pono	VERB	L2|modO|grp1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Gdv|Voice=Pass	0	root	_	_
7	felicitas	felicitas	NOUN	C1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	nsubj	_	_
8	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 neg	color:blue
1	non	non	ADV	O4	_	8	neg	_	_
2	sunt	sum	VERB	N3|modA|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
3	igitur	igitur	ADV	O4	_	8	cc	_	_
4	hae	hic	PRON	F1|grn1|casJ|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|PronType=Dem	5	nmod	_	_
5	delectationes	delectatio	NOUN	C1|grn1|casJ|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	8	nsubj	_	_
6	secundum	secundum	ADP	S4	AdpType=Prep	7	case	_	_
7	se	sui	PRON	F1|grn1|casM|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|PronType=Prs|Reflex=Yes	8	nmod	_	_
8	bonum	bonum	NOUN	B1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
9	hominis	homo	NOUN	C1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	nmod	_	_
10	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 neg	color:blue
1	aliter	alius	PRON	F1|grn1|casG	Case=Loc|Degree=Pos|Number=Sing|PronType=Ind	5	nmod	_	_
2	enim	enim	ADV	O4	_	5	cc	_	_
3	non	non	ADV	O4	_	5	neg	_	_
4	essent	sum	VERB	N3|modB|tem2|gen9	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	5	cop	_	_
5	laudabiles	laudabilis	ADJ	C1|grn1|casJ|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	_
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

2595 nodes (2%) are attached to their parents as `neg`.

2512 instances of `neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86512524084778.

The following 11 pairs of parts of speech are connected with `neg`: [la-pos/VERB]()-[la-pos/ADV]() (1796; 69% instances), [la-pos/ADV]()-[la-pos/ADV]() (237; 9% instances), [la-pos/NOUN]()-[la-pos/ADV]() (199; 8% instances), [la-pos/ADJ]()-[la-pos/ADV]() (192; 7% instances), [la-pos/PRON]()-[la-pos/ADV]() (64; 2% instances), [la-pos/ADP]()-[la-pos/ADV]() (60; 2% instances), [la-pos/PROPN]()-[la-pos/ADV]() (20; 1% instances), [la-pos/SCONJ]()-[la-pos/ADV]() (16; 1% instances), [la-pos/X]()-[la-pos/ADV]() (7; 0% instances), [la-pos/NUM]()-[la-pos/ADV]() (3; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 neg	color:blue
1	Tum	tum	ADV	Df	_	5	advmod	_	_
2	vero	vero	ADV	Df	_	5	discourse	_	_
3	dubitandum	dubito	VERB	V-	Case=Acc|Gender=Neut|Number=Sing|VerbForm=Gdv	5	ccomp	_	_
4	non	non	ADV	Df	_	5	neg	_	_
5	existimavit	existimo	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	quin	quin	SCONJ	G-	_	9	mark	_	_
7	ad	ad	ADP	R-	_	8	case	_	_
8	eos	is	PRON	Pp	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	iobj	_	_
9	proficisceretur	proficiscor	VERB	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	3	ccomp	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	nam	nam	ADV	Df	_	6	discourse	_	_
2	istic	istic	ADV	Df	_	6	advmod	_	_
3	non	non	ADV	Df	_	4	neg	_	_
4	solum	solum	ADV	Df	_	6	advmod	_	_
5	non	non	ADV	Df	_	6	neg	_	_
6	licet	licet	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	sed	sed	CONJ	C-	_	6	cc	_	_
8	etiam	etiam	ADV	Df	_	9	discourse	_	_
9	taedet	taedet	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 neg	color:blue
1	rogatio	rogatio	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
2	Sesti	Sestius	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	ne	ne	ADV	Df	_	5	neg	_	_
4	que	que	CONJ	C-	_	5	cc	_	_
5	dignitatis	dignitas	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
6	satis	satis	ADV	Df	_	7	dobj	_	_
7	habet	habeo	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	ne	ne	ADV	Df	_	10	neg	_	_
9	c	que	CONJ	C-	_	5	cc	_	_
10	cautionis	cautio	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	5	conj	_	_

~~~


