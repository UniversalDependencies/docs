

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

3120 nodes (1%) are attached to their parents as `det`.

2451 instances of `det` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15160256410256.

The following 7 pairs of parts of speech are connected with `det`: [la-pos/NOUN]()-[la-pos/DET]() (2780; 89% instances), [la-pos/PRON]()-[la-pos/DET]() (120; 4% instances), [la-pos/VERB]()-[la-pos/DET]() (113; 4% instances), [la-pos/ADJ]()-[la-pos/DET]() (94; 3% instances), [la-pos/PROPN]()-[la-pos/DET]() (9; 0% instances), [la-pos/ADV]()-[la-pos/DET]() (3; 0% instances), [la-pos/X]()-[la-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det	color:blue
1	et	et	CCONJ	O4|stRL	_	3	cc	_	_
2	in	in	ADP	S4|stRL	AdpType=Prep	3	case	_	_
3	militari	militaris	ADJ	C1|grn1|casF|gen2|stAM	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
4	respectu	respectus	NOUN	D1|grn1|casF|gen1|stAC	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	3	conj	_	_
5	equestris	equester	ADJ	C1|grn1|casB|gen2|stAN	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
6	et	et	CCONJ	O4|stRL	_	9	cc	_	_
7	omnis	omnis	DET	C1|grn1|casB|gen1|stPV	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|PronType=Ind	9	det	_	_
8	bellici	bellicus	ADJ	B1|grn1|casB|gen1|stAM	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	apparatus	apparatus	NOUN	D1|grn1|casB|gen1|stRS	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	illud	ille	PRON	F1|grn1|casD|gen3|stPD	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	per	per	ADP	S4|stRL	AdpType=Prep	3	case	_	_
3	se	sui	PRON	F1|grn1|casD|gen3|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	4	obl	_	_
4	notum	nosco	VERB	L2|modM|tem4|grp1|casD|gen3|stAC	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	csubj	_	_
5	oportet	oportet	VERB	K3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	esse	sum	AUX	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	4	cop	_	_
7	quo	qui	PRON	F1|grn1|casF|gen3|stPV	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	10	obl	_	_
8	omnia	omnis	DET	C1|grn1|casJ|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	9	det	_	_
9	alia	alius	PRON	F1|grn1|casJ|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	10	nsubj:pass	_	_
10	cognoscuntur	cognosco	VERB	L3|modJ|tem1|gen9|stAC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	acl	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	scilicet	scilicet	ADV	O4|stRL	_	6	mark	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	6	punct	_	_
3	quod	quod	SCONJ	O4|stRL	_	1	fixed	_	_
4	omne	omnis	DET	C1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	5	det	_	_
5	motum	moveo	VERB	K2|modM|tem4|grp1|casA|gen3|stAV	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	csubj:pass	_	_
6	movetur	moveo	VERB	K3|modJ|tem1|gen6|vgr1|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	ab	a	ADP	S4|vgr2|stRL	AdpType=Prep	8	case	_	_
8	alio	alius	PRON	F1|grn1|casF|gen3|stPV	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	6	obj	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

4912 nodes (3%) are attached to their parents as `det`.

3053 instances of `det` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37622149837134.

The following 19 pairs of parts of speech are connected with `det`: [la-pos/NOUN]()-[la-pos/DET]() (2751; 56% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1426; 29% instances), [la-pos/ADJ]()-[la-pos/DET]() (241; 5% instances), [la-pos/PRON]()-[la-pos/DET]() (233; 5% instances), [la-pos/PROPN]()-[la-pos/DET]() (83; 2% instances), [la-pos/ADJ]()-[la-pos/PRON]() (63; 1% instances), [la-pos/VERB]()-[la-pos/DET]() (33; 1% instances), [la-pos/X]()-[la-pos/DET]() (28; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (15; 0% instances), [la-pos/NUM]()-[la-pos/DET]() (11; 0% instances), [la-pos/PROPN]()-[la-pos/PRON]() (7; 0% instances), [la-pos/VERB]()-[la-pos/PRON]() (7; 0% instances), [la-pos/ADV]()-[la-pos/DET]() (4; 0% instances), [la-pos/X]()-[la-pos/PRON]() (3; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (2; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (2; 0% instances), [la-pos/CCONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/DET]()-[la-pos/DET]() (1; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	tunc	tunc	ADV	Df	_	2	advmod	_	ref=LUKE_5.35
2	ieiunabunt	ieiuno	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_5.35
3	in	in	ADP	R-	_	5	case	_	ref=LUKE_5.35
4	illis	ille	DET	Pd	Case=Abl|Gender=Fem,Masc|Number=Plur	5	det	_	ref=LUKE_5.35
5	diebus	dies	NOUN	Nb	Case=Abl|Gender=Fem,Masc|Number=Plur	1	appos	_	ref=LUKE_5.35

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 det	color:blue
1	sic	sic	ADV	Df	_	3	advmod	_	ref=MATT_5.12
2	enim	enim	ADV	Df	_	3	discourse	_	ref=MATT_5.12
3	persecuti	persequor	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=MATT_5.12
4	sunt	sum	AUX	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	ref=MATT_5.12
5	prophetas	propheta	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	3	obj:dir	_	ref=MATT_5.12
6	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	9	nsubj	_	ref=MATT_5.12
7	fuerunt	sum	AUX	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	ref=MATT_5.12
8	ante	ante	ADP	R-	_	9	case	_	ref=MATT_5.12
9	vos	vos	PRON	Pp	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	5	det	_	ref=MATT_5.12

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	absit	absum	VERB	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=ACTS_10.14
2	Domine	dominus	NOUN	Nb	Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	ref=ACTS_10.14
3	quia	quia	SCONJ	G-	_	5	mark	_	ref=ACTS_10.14
4	numquam	numquam	ADV	Df	_	5	advmod	_	ref=ACTS_10.14
5	manducavi	manduco	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	ref=ACTS_10.14
6	omne	omnis	DET	Px	Case=Acc|Gender=Neut|Number=Sing	7	det	_	ref=ACTS_10.14
7	commune	communis	ADJ	A-	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	5	obj:dir	_	ref=ACTS_10.14
8	et	et	CCONJ	C-	_	7	cc	_	ref=ACTS_10.14
9	inmundum	immundus	ADJ	A-	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	conj	_	ref=ACTS_10.14

~~~


