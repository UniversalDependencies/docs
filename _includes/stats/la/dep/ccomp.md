

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

191 nodes (1%) are attached to their parents as `ccomp`.

114 instances of `ccomp` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.58638743455497.

The following 4 pairs of parts of speech are connected with `ccomp`: [la-pos/VERB]()-[la-pos/VERB]() (187; 98% instances), [la-pos/ADJ]()-[la-pos/VERB]() (2; 1% instances), [la-pos/ADV]()-[la-pos/VERB]() (1; 1% instances), [la-pos/NOUN]()-[la-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 ccomp	color:blue
1	Hanc	hic1	PRON	p-s---fa-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
2	si	si1	SCONJ	c--------	_	4	mark	_	_
3	nostri	noster	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
4	transirent	transeo1	VERB	v3pisa---	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	ccomp	_	_
5	hostes	hostis1	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
6	expectabant	exspecto1	VERB	v3piia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	;	punc1	PUNCT	u--------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 ccomp	color:blue
1	tum	tum1	ADV	d--------	_	15	advmod	_	_
2	tibi	tu1	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing	6	obj	_	_
3	si	si1	SCONJ	c--------	_	6	mark	_	_
4	qua	aliquis1	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	nmod	_	_
5	mei	ego1	PRON	p-s---mg-	Case=Gen|Gender=Masc|Number=Sing	8	obj	_	_
6	veniet	venio1	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	15	advcl	_	_
7	non	non1	ADV	d--------	_	8	advmod	_	_
8	immemor	immemor1	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	amod	_	_
9	hora	hora1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
10	,	comma1	PUNCT	u--------	_	3	punct	_	_
11	vivere	vivo1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	15	ccomp	_	_
12	me	ego1	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	11	nsubj	_	_
13	duro	durus1	ADJ	a-s---nb-	Case=Abl|Gender=Neut|Number=Sing	14	amod	_	_
14	sidere	sidus1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	11	advmod	_	_
15	certus	certus1	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
16	eris	sum1	VERB	v2sfia---	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	15	cop	_	SpaceAfter=No
17	.	punc1	PUNCT	u--------	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 ccomp	color:blue
1	magis	magis1	ADV	d--------	_	15	advmod	_	_
2	quid	quis1	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
3	se	sui1	PRON	p-p---mb-	Case=Abl|Gender=Masc|Number=Plur	4	obj	_	_
4	dignum	dignus1	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	15	obj	_	_
5	foret	sum1	VERB	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	SpaceAfter=No
6	,	comma1	PUNCT	u--------	_	13	punct	_	_
7	quam	quam1	ADV	d--------	_	13	mark	_	_
8	quid	quis1	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing	13	nsubj	_	_
9	in	in1	ADP	r--------	_	10	case	_	_
10	illos	ille1	PRON	p-p---ma-	Case=Acc|Gender=Masc|Number=Plur	12	obl	_	_
11	iure	jus1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	12	advmod	_	_
12	fieri	fio1	VERB	v--pnp---	Tense=Pres|VerbForm=Inf|Voice=Pass	13	xcomp	_	_
13	posset	possum1	VERB	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	_	SpaceAfter=No
14	,	comma1	PUNCT	u--------	_	7	punct	_	_
15	quaerebant	quaero1	VERB	v3piia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
16	.	punc1	PUNCT	u--------	_	15	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

2358 nodes (1%) are attached to their parents as `ccomp`.

1906 instances of `ccomp` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.05894826123834.

The following 21 pairs of parts of speech are connected with `ccomp`: [la-pos/VERB]()-[la-pos/VERB]() (1875; 80% instances), [la-pos/VERB]()-[la-pos/ADJ]() (160; 7% instances), [la-pos/VERB]()-[la-pos/NOUN]() (138; 6% instances), [la-pos/VERB]()-[la-pos/PRON]() (77; 3% instances), [la-pos/ADJ]()-[la-pos/VERB]() (46; 2% instances), [la-pos/PRON]()-[la-pos/VERB]() (15; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (8; 0% instances), [la-pos/CCONJ]()-[la-pos/VERB]() (5; 0% instances), [la-pos/DET]()-[la-pos/VERB]() (5; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (5; 0% instances), [la-pos/VERB]()-[la-pos/PROPN]() (5; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (4; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (4; 0% instances), [la-pos/VERB]()-[la-pos/DET]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/CCONJ]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	ponam	pono	VERB	L3|modA|tem3|gen4|stAV	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
2	universos	universus	ADJ	B1|grn1|casM|gen1|stAN	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	_
3	filios	filius	NOUN	B1|grn1|casM|gen1|stRS	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	1	iobj	_	_
4	tuos	tuus	DET	B1|grn1|casM|gen1|stPV	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	3	det	_	_
5	doctos	doceo	VERB	K2|modM|tem4|grp1|casM|gen1|stAE	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	1	ccomp	_	_
6	a	a	ADP	S4|vgr1|stRL	AdpType=Prep	7	case	_	_
7	domino	dominus	NOUN	B1|grn1|casF|gen1|stRS	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3|stRL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	4	nsubj:pass	_	_
2	apud	apud	ADP	S4|vgr1|stRL	AdpType=Prep	3	case	_	_
3	catholicos	catholicus	ADJ	B1|grn1|casM|gen1|stNP	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	4	obl	_	_
4	supponitur	suppono	VERB	L3|modJ|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	esse	sum	AUX	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	6	cop	_	_
6	falsum	falsus	ADJ	B1|grn1|casA|gen3|stAC	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	et	et	CCONJ	O4|stRL	_	5	cc	_	_
2	alibi	alibi	ADV	O4|stRL	_	5	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	ego	ego	PRON	F1|grn1|casA|gen1|stPD	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Prs	5	nsubj	_	_
5	dixi	dico	VERB	N3|modA|tem4|gen4|stAE	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	dii	deus	NOUN	F1|grn1|casJ|gen1|stNV	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	5	ccomp	_	_
8	estis	sum	AUX	N3|modA|tem1|gen8|stAV	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

3474 nodes (2%) are attached to their parents as `ccomp`.

2617 instances of `ccomp` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.10823258491652.

The following 44 pairs of parts of speech are connected with `ccomp`: [la-pos/VERB]()-[la-pos/VERB]() (2310; 66% instances), [la-pos/VERB]()-[la-pos/NOUN]() (165; 5% instances), [la-pos/VERB]()-[la-pos/ADJ]() (151; 4% instances), [la-pos/ADJ]()-[la-pos/VERB]() (135; 4% instances), [la-pos/ADV]()-[la-pos/VERB]() (134; 4% instances), [la-pos/NOUN]()-[la-pos/VERB]() (118; 3% instances), [la-pos/VERB]()-[la-pos/PRON]() (81; 2% instances), [la-pos/VERB]()-[la-pos/SCONJ]() (76; 2% instances), [la-pos/VERB]()-[la-pos/AUX]() (72; 2% instances), [la-pos/VERB]()-[la-pos/ADV]() (54; 2% instances), [la-pos/VERB]()-[la-pos/PROPN]() (46; 1% instances), [la-pos/AUX]()-[la-pos/VERB]() (21; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (7; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (6; 0% instances), [la-pos/ADV]()-[la-pos/AUX]() (6; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (6; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (5; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (5; 0% instances), [la-pos/ADJ]()-[la-pos/AUX]() (5; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (5; 0% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (5; 0% instances), [la-pos/VERB]()-[la-pos/X]() (5; 0% instances), [la-pos/X]()-[la-pos/X]() (5; 0% instances), [la-pos/ADP]()-[la-pos/VERB]() (4; 0% instances), [la-pos/ADV]()-[la-pos/PROPN]() (4; 0% instances), [la-pos/SCONJ]()-[la-pos/VERB]() (4; 0% instances), [la-pos/VERB]()-[la-pos/CCONJ]() (4; 0% instances), [la-pos/ADV]()-[la-pos/ADV]() (3; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (3; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (3; 0% instances), [la-pos/PROPN]()-[la-pos/VERB]() (3; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/CCONJ]()-[la-pos/VERB]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/CCONJ]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/SCONJ]() (2; 0% instances), [la-pos/SCONJ]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/X]()-[la-pos/VERB]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (1; 0% instances), [la-pos/ADP]()-[la-pos/PRON]() (1; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/AUX]()-[la-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	nolite	nolo	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.17
2	putare	puto	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	1	xcomp	_	ref=MATT_5.17
3	quoniam	quoniam	SCONJ	G-	_	4	mark	_	ref=MATT_5.17
4	veni	venio	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	ref=MATT_5.17
5	solvere	solvo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	4	advcl	_	ref=MATT_5.17
6	legem	lex	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	5	obj:dir	_	ref=MATT_5.17
7	aut	aut	CCONJ	C-	_	6	cc	_	ref=MATT_5.17
8	prophetas	propheta	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	6	conj	_	ref=MATT_5.17

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 ccomp	color:blue
1	mando	mando	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=1.12.2
2	tibi	tu	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	1	iobj	_	ref=1.12.2
3	plane	plane	ADV	Df	_	1	advmod	_	ref=1.12.2
4	totum	totus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	nsubj	_	ref=1.12.2
5	ut	ut	SCONJ	G-	_	6	mark	_	ref=1.12.2
6	videas	video	VERB	V-	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	ref=1.12.2
7	cuius	qui	PRON	Pi	Case=Gen|Number=Sing|PronType=Int	8	det	_	ref=1.12.2
8	modi	modus	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	6	ccomp	_	ref=1.12.2
9	sit	sum	AUX	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	ref=1.12.2

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	dicebat	dico	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MARK_5.28
2	enim	enim	ADV	Df	_	1	discourse	_	ref=MARK_5.28
3	quia	quia	SCONJ	G-	_	9	mark	_	ref=MARK_5.28
4	si	si	SCONJ	G-	_	8	mark	_	ref=MARK_5.28
5	vel	vel	CCONJ	C-	_	8	cc	_	ref=MARK_5.28
6	vestimentum	vestimentum	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	8	obj:dir	_	ref=MARK_5.28
7	eius	is	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	det	_	ref=MARK_5.28
8	tetigero	tango	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	9	advcl	_	ref=MARK_5.28
9	salva	salvus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	ccomp	_	ref=MARK_5.28
10	ero	sum	AUX	V-	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	9	cop	_	ref=MARK_5.28

~~~


