

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

104 nodes (1%) are attached to their parents as `nummod`.

71 instances of `nummod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45192307692308.

The following 4 pairs of parts of speech are connected with `nummod`: [la-pos/NOUN]()-[la-pos/NUM]() (85; 82% instances), [la-pos/NUM]()-[la-pos/NUM]() (12; 12% instances), [la-pos/ADJ]()-[la-pos/NUM]() (5; 5% instances), [la-pos/PRON]()-[la-pos/NUM]() (2; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Interim	interim1	ADV	d--------	_	7	advmod	_	_
2	proelio	proelium1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	7	advmod	_	_
3	equestri	equester1	ADJ	a-s---nb-	Case=Abl|Gender=Neut|Number=Sing	2	amod	_	_
4	inter	inter1	ADP	r--------	_	6	case	_	_
5	duas	duo	NUM	m-p---fa-	Case=Acc|Gender=Fem|Number=Plur	6	nummod	_	_
6	acies	acies1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	7	obl	_	_
7	contendebatur	contendo1	VERB	v3siip---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	punc1	PUNCT	u--------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	et	et1	CCONJ	c--------	_	5	cc	_	_
2	numerus	numerus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
3	eius	is1	PRON	p-s---mg-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	est	sum1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	sescenti	sescenti1	ADJ	a-s---mg-	Case=Gen|Gender=Masc|Number=Sing	0	root	_	_
6	sexaginta	sexa_ginta1	NUM	m--------	_	5	nummod	_	_
7	sex	sex1	NUM	m--------	_	6	nummod	_	SpaceAfter=No
8	.	punc1	PUNCT	u--------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	ex	ex1	ADP	r--------	_	2	case	_	_
2	libris	libra1	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	8	obl	_	_
3	Sibyllinis	Sibyllinus1	ADJ	a-p---fb-	Case=Abl|Gender=Fem|Number=Plur	2	amod	_	_
4	regnum	regnum1	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	8	nsubj	_	_
5	Romae	Roma1	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
6	tribus	tres1	NUM	m--------	_	7	nummod	_	_
7	Corneliis	Cornelius1	ADJ	a-p---md-	Case=Dat|Gender=Masc|Number=Plur	8	iobj	_	_
8	portendi	portendo1	VERB	v--pnp---	Tense=Pres|VerbForm=Inf|Voice=Pass	0	root	_	SpaceAfter=No
9	;	punc1	PUNCT	u--------	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

1091 nodes (0%) are attached to their parents as `nummod`.

709 instances of `nummod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16406966086159.

The following 8 pairs of parts of speech are connected with `nummod`: [la-pos/NOUN]()-[la-pos/NUM]() (654; 60% instances), [la-pos/X]()-[la-pos/NUM]() (311; 29% instances), [la-pos/PRON]()-[la-pos/NUM]() (51; 5% instances), [la-pos/PROPN]()-[la-pos/NUM]() (43; 4% instances), [la-pos/ADJ]()-[la-pos/NUM]() (17; 2% instances), [la-pos/VERB]()-[la-pos/NUM]() (11; 1% instances), [la-pos/ADV]()-[la-pos/NUM]() (3; 0% instances), [la-pos/CCONJ]()-[la-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	qui	qui	PRON	F1|grn1|casA|gen1|stPV	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Rel	4	nsubj	_	_
2	hoc	hic	PRON	F1|grn1|casD|gen3|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	3	obj	_	_
3	probare	probo	VERB	J3|modH|tem1|stAE	Tense=Pres|VerbForm=Inf|Voice=Act	4	xcomp	_	_
4	intendit	intendo	VERB	L3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	_
5	ex	e	ADP	S4|vgr2|stRL	AdpType=Prep	6	case	_	_
6	parte	pars	NOUN	C1|grn1|casF|gen2|stRS	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	3	obl	_	_
7	motus	motus	NOUN	D1|grn1|casB|gen1|stAN	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	nmod	_	_
8	duabus	duo	NUM	F1|grn1|casO|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur|NumType=Card	9	nummod	_	_
9	viis	via	NOUN	A1|grn1|casO|gen2|stRS	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	prov.	_	X	5|stPS	Abbr=Yes	0	root	_	_
2	8-7	_	NUM	G5	NumForm=Digit	1	nummod	_	SpaceAfter=No
3	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod	color:blue
1	ergo	ergo	ADV	O4|stRL	_	6	advmod	_	_
2	neutrum	neuter	PRON	F1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	6	nsubj	_	_
3	illorum	ille	PRON	F1|grn1|casK|gen3|stPD	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem	4	nmod	_	_
4	duorum	duo	NUM	F1|grn1|casK|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|NumType=Card	2	nummod	_	_
5	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	hoc	hic	PRON	F1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	_
7	quod	qui	PRON	F1|grn1|casD|gen3|stRL	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	8	obj	_	_
8	intelligimus	intelligo	VERB	L3|modA|tem1|gen7|stAC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
9	nomine	nomen	NOUN	C1|grn1|casF|gen3|comH|stAE	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	8	obl	_	_
10	dei	deus	PROPN	F1|grn1|casB|gen1|stNP	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

810 nodes (1%) are attached to their parents as `nummod`.

542 instances of `nummod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28765432098765.

The following 9 pairs of parts of speech are connected with `nummod`: [la-pos/NOUN]()-[la-pos/NUM]() (668; 82% instances), [la-pos/NUM]()-[la-pos/NUM]() (88; 11% instances), [la-pos/ADJ]()-[la-pos/NUM]() (37; 5% instances), [la-pos/VERB]()-[la-pos/NUM]() (7; 1% instances), [la-pos/ADV]()-[la-pos/NUM]() (5; 1% instances), [la-pos/INTJ]()-[la-pos/NUM]() (2; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/NUM]() (1; 0% instances), [la-pos/X]()-[la-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	et	et	CCONJ	C-	_	7	cc	_	ref=MATT_5.41
2	quicumque	quicumque	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	4	nsubj	_	ref=MATT_5.41
3	te	tu	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs	4	obj:dir	_	ref=MATT_5.41
4	angariaverit	angario	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	acl	_	ref=MATT_5.41
5	mille	mille	NUM	Ma	_	6	nummod	_	ref=MATT_5.41
6	passus	passus	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	4	obl	_	ref=MATT_5.41
7	vade	vado	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.41
8	cum	cum	ADP	R-	_	9	case	_	ref=MATT_5.41
9	illo	ille	ADJ	Pd	Case=Abl|Gender=Masc|Number=Sing	7	obl	_	ref=MATT_5.41
10	alia	alius	ADJ	Px	Case=Acc|Gender=Neut|Number=Plur	7	obl	_	ref=MATT_5.41
11	duo	duo	NUM	Ma	Case=Acc|Gender=Neut|Number=Plur	10	nummod	_	ref=MATT_5.41

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Horum	hic	ADJ	Pd	Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	ref=1.31.5
2	primo	primo	ADV	Df	_	7	advmod	_	ref=1.31.5
3	circiter	circiter	ADV	Df	_	4	advmod	_	ref=1.31.5
4	milia	mille	NUM	Ma	Case=Acc|Gender=Neut|Number=Plur	7	nsubj	_	ref=1.31.5
5	quindecim	quindecim	NUM	Ma	_	4	nummod	_	ref=1.31.5
6	Rhenum	Rhenus	PROPN	Ne	Case=Acc|Gender=Masc|Number=Sing	7	obj:dir	_	ref=1.31.5
7	transisse	transeo	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	0	root	_	ref=1.31.5

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nummod	color:blue
1	et	et	CCONJ	C-	_	7	cc	_	ref=MATT_5.41
2	quicumque	quicumque	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	4	nsubj	_	ref=MATT_5.41
3	te	tu	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs	4	obj:dir	_	ref=MATT_5.41
4	angariaverit	angario	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	acl	_	ref=MATT_5.41
5	mille	mille	NUM	Ma	_	6	nummod	_	ref=MATT_5.41
6	passus	passus	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	4	obl	_	ref=MATT_5.41
7	vade	vado	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.41
8	cum	cum	ADP	R-	_	9	case	_	ref=MATT_5.41
9	illo	ille	ADJ	Pd	Case=Abl|Gender=Masc|Number=Sing	7	obl	_	ref=MATT_5.41
10	alia	alius	ADJ	Px	Case=Acc|Gender=Neut|Number=Plur	7	obl	_	ref=MATT_5.41
11	duo	duo	NUM	Ma	Case=Acc|Gender=Neut|Number=Plur	10	nummod	_	ref=MATT_5.41

~~~


