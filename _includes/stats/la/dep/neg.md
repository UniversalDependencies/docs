

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

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

6056 nodes (2%) are attached to their parents as `neg`.

5851 instances of `neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80663804491413.

The following 10 pairs of parts of speech are connected with `neg`: [la-pos/VERB]()-[la-pos/ADV]() (4234; 70% instances), [la-pos/NOUN]()-[la-pos/ADV]() (759; 13% instances), [la-pos/ADJ]()-[la-pos/ADV]() (677; 11% instances), [la-pos/PRON]()-[la-pos/ADV]() (172; 3% instances), [la-pos/ADV]()-[la-pos/ADV]() (146; 2% instances), [la-pos/NUM]()-[la-pos/ADV]() (37; 1% instances), [la-pos/DET]()-[la-pos/ADV]() (15; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (7; 0% instances), [la-pos/PROPN]()-[la-pos/ADV]() (6; 0% instances), [la-pos/PUNCT]()-[la-pos/ADV]() (3; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 neg	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3|stRL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	7	nsubj	_	_
2	quidem	quidem	ADV	O4|stRL	_	7	advmod	_	_
3	nobis	ego	PRON	F1|grn1|casL|gen1|stPD	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|PronType=Prs	7	dobj	_	_
4	circa	circa	ADP	S4|stRL	AdpType=Prep	5	case	_	_
5	deum	deus	PROPN	F1|grn1|casD|gen1|stNP	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	nmod	_	_
6	non	non	ADV	O4|stRL	_	7	neg	_	_
7	accidit	accido^cado	VERB	L3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 neg	color:blue
1	secundum	secundum	ADP	S4|stRL	AdpType=Prep	2	case	_	_
2	platonem	plato	PROPN	C1|grn1|casD|gen1|stNP	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	8	nmod	_	_
3	autem	autem	CONJ	O4|stRL	_	8	cc	_	_
4	movens	moveo	VERB	K2	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	csubj	_	_
5	seipsum	seipse	PRON	F1|grn1|casD|gen3|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	4	dobj	_	_
6	non	non	ADV	O4|stRL	_	8	neg	_	_
7	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	corpus	corpus	NOUN	C1|grn1|casA|gen3|stRS	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
9	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 neg	color:blue
1	si	si	SCONJ	O4|stRL	_	3	mark	_	_
2	per	per	ADP	S4|stRL	AdpType=Prep	3	case	_	_
3	accidens	accidens	NOUN	C1|grn1|casD|gen3|stAV	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	dep	_	_
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	ergo	ergo	ADV	O4|stRL	_	8	advmod	_	_
6	non	non	ADV	O4|stRL	_	8	neg	_	_
7	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	necessaria	necessarius	ADJ	A1|grn1|casA|gen2|stAN	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
9	:	:	PUNCT	Punc	_	8	punct	_	_

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


