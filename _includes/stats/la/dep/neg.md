

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


