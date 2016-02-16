

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

192 nodes (0%) are attached to their parents as `nummod`.

119 instances of `nummod` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36979166666667.

The following 5 pairs of parts of speech are connected with `nummod`: [la-pos/NOUN]()-[la-pos/NUM]() (159; 83% instances), [la-pos/NUM]()-[la-pos/NUM]() (21; 11% instances), [la-pos/ADJ]()-[la-pos/NUM]() (8; 4% instances), [la-pos/ADV]()-[la-pos/NUM]() (2; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nummod	color:blue
1	Muli	mulus	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
2	gravati	gravo	VERB	v-prppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	1	amod	_	_
3	sarcinis	sarcina	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	2	dobj	_	_
4	ibant	eo1	VERB	v3piia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	duo	duo	NUM	m-p---mn-	Case=Nom|Gender=Masc|Number=Plur	1	nummod	_	_
6	:	:	PUNCT	u--------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Occisis	occido1	VERB	v-prppmb-	Aspect=Perf|Case=Abl|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	9	advcl	_	_
2	ad	ad1	ADV	d--------	_	5	advmod	_	_
3	hominum	homo1	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	_
4	milibus	mille1	NUM	m--------	_	1	nsubjpass	_	_
5	IIII	NUMERAL1	NUM	m--------	_	4	nummod	_	_
6	reliqui	reliquus1	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	9	nsubjpass	_	_
7	in	in1	ADP	r--------	_	8	case	_	_
8	oppidum	oppidum1	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	9	nmod	_	_
9	reiecti	reicio1	VERB	v-prppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
10	sunt	sum1	VERB	v3ppia---	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	auxpass	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	ex	ex1	ADP	r--------	_	2	case	_	_
2	libris	libra1	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	8	nmod	_	_
3	Sibyllinis	Sibyllinus1	ADJ	a-p---fb-	Case=Abl|Gender=Fem|Number=Plur	2	amod	_	_
4	regnum	regnum1	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	8	nsubjpass	_	_
5	Romae	Roma1	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
6	tribus	tres1	NUM	m--------	_	7	nummod	_	_
7	Corneliis	Cornelius1	ADJ	a-p---md-	Case=Dat|Gender=Masc|Number=Plur	8	iobj	_	_
8	portendi	portendo1	VERB	v--pnp---	Tense=Pres|VerbForm=Inf|Voice=Pass	0	root	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITT)

This relation is universal.

1009 nodes (0%) are attached to their parents as `nummod`.

682 instances of `nummod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16947472745292.

The following 7 pairs of parts of speech are connected with `nummod`: [la-pos/NOUN]()-[la-pos/NUM]() (665; 66% instances), [la-pos/X]()-[la-pos/NUM]() (267; 26% instances), [la-pos/PRON]()-[la-pos/NUM]() (45; 4% instances), [la-pos/ADJ]()-[la-pos/NUM]() (17; 2% instances), [la-pos/VERB]()-[la-pos/NUM]() (11; 1% instances), [la-pos/ADV]()-[la-pos/NUM]() (3; 0% instances), [la-pos/CONJ]()-[la-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	sed	sed	CONJ	O4|vgr1	_	3	cc	_	_
2	omnium	omnis	DET	C1|grn1|casK|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	3	amod	_	_
3	corporum	corpus	NOUN	C1|grn1|casK|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	0	root	_	_
4	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	una	unus	NUM	F1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumType=Card	6	nummod	_	_
6	forma	forma	NOUN	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	nsubj	_	_
7	,	,	PUNCT	Punc	_	9	punct	_	_
8	scilicet	scilicet	ADV	O4	_	9	cc	_	_
9	corporeitas	corporeitas	NOUN	C1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	appos	_	_
10	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	prov.	_	X	5	Abbr=Yes	0	root	_	_
2	8-7	_	NUM	G5	NumForm=Digit	1	nummod	_	_
3	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	haec	hic	PRON	F1|grn1|casM|gen3|vgr1	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem	6	dobj	_	_
2	enim	enim	ADV	O4	_	5	cc	_	_
3	duo	duo	NUM	F1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|NumType=Card	1	nummod	_	_
4	homo	homo	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	nsubj	_	_
5	potest	possum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	_
6	facere	facio	VERB	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	per	per	ADP	S4	AdpType=Prep	8	case	_	_
8	habitum	habitus	NOUN	D1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	nmod	_	_
9	intellectualem	intellectualis	ADJ	C1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
10	.	.	PUNCT	Punc	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

881 nodes (1%) are attached to their parents as `nummod`.

593 instances of `nummod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28149829738933.

The following 8 pairs of parts of speech are connected with `nummod`: [la-pos/NOUN]()-[la-pos/NUM]() (715; 81% instances), [la-pos/NUM]()-[la-pos/NUM]() (105; 12% instances), [la-pos/ADJ]()-[la-pos/NUM]() (36; 4% instances), [la-pos/PRON]()-[la-pos/NUM]() (8; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (8; 1% instances), [la-pos/ADV]()-[la-pos/NUM]() (6; 1% instances), [la-pos/INTJ]()-[la-pos/NUM]() (2; 0% instances), [la-pos/X]()-[la-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	nam	nam	ADV	Df	_	8	discourse	_	_
2	omnis	omnis	PRON	Px	Case=Nom|Gender=Fem|Number=Sing	3	nmod	_	_
3	civitas	civitas	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	8	nsubjpass	_	_
4	Helvetia	Helvetia	PROPN	Ne	Case=Nom|Gender=Fem|Number=Sing	3	appos	_	_
5	in	in	ADP	R-	_	7	case	_	_
6	quattuor	quattuor	NUM	Ma	_	7	nummod	_	_
7	pagos	pagus	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	8	iobj	_	_
8	divisa	divido	VERB	V-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
9	est	sum	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	ex	ex	ADP	R-	_	2	case	_	_
2	his	hic	ADJ	Pd	Case=Abl|Gender=Masc|Number=Plur	8	nsubj	_	_
3	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	6	nsubj	_	_
4	arma	arma	NOUN	Nb	Case=Acc|Gender=Neut|Number=Plur	5	dobj	_	_
5	ferre	fero	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	6	xcomp	_	_
6	possent	possum	VERB	V-	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl	_	_
7	ad	ad	ADV	Df	_	8	advmod	_	_
8	milia	mille	NUM	Ma	Case=Acc|Gender=Neut|Number=Plur	0	root	_	_
9	nonaginta.duo	nonaginta.duo	NUM	Ma	Case=Acc|Gender=Neut|Number=Plur	8	nummod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	sunt	sum	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	praeterea	praeterea	ADV	Df	_	1	advmod	_	_
3	duae	duo	NUM	Ma	Case=Nom|Gender=Fem|Number=Plur	4	nummod	_	_
4	breves	brevis	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	1	nsubj	_	_
5	quasi	quasi	ADV	Df	_	6	advmod	_	_
6	ἀποσπασμάτια	greek.expression	NOUN	Nb	Case=Nom|Gender=Fem|Number=Plur	4	appos	_	_
7	legis	lex	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
8	agrariae	agrarius	ADJ	A-	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_

~~~


