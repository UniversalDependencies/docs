

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

190 nodes (1%) are attached to their parents as `acl`.

169 instances of `acl` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.53684210526316.

The following 7 pairs of parts of speech are connected with `acl`: [la-pos/NOUN]()-[la-pos/VERB]() (119; 63% instances), [la-pos/PRON]()-[la-pos/VERB]() (51; 27% instances), [la-pos/ADJ]()-[la-pos/VERB]() (12; 6% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (3; 2% instances), [la-pos/VERB]()-[la-pos/VERB]() (3; 2% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (1; 1% instances), [la-pos/X]()-[la-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl	color:blue
1	Loci	locus1	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
2	natura	natura1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	erat	sum1	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	haec	hic1	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	,	comma1	PUNCT	u--------	_	10	punct	_	_
6	quem	qui1	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
7	locum	locus1	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	_
8	nostri	noster	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
9	castris	castrum	NOUN	n-p---nd-	Case=Dat|Gender=Neut|Number=Plur	10	advmod	_	_
10	delegerant	deligo1	VERB	v3plia---	Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	1	acl	_	SpaceAfter=No
11	.	punc1	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 acl	color:blue
1	num	num1	ADV	d--------	_	2	advmod	_	_
2	dubitas	dubito1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	id	is1	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
4	me	ego1	PRON	p-s---mb-	Case=Abl|Gender=Masc|Number=Sing	5	nsubj	_	_
5	imperante	impero	VERB	v-spp-mb-	Case=Abl|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part	2	advcl	_	_
6	facere	facio1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	2	xcomp	_	_
7	quod	qui1	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	11	obj	_	_
8	iam	jam1	ADV	d--------	_	11	advmod	_	_
9	tua	tuus	PRON	p-s---fb-	Case=Abl|Gender=Fem|Number=Sing	10	nmod	_	_
10	sponte	sponte1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	11	advmod	_	_
11	faciebas	facio1	VERB	v2siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	3	acl	_	SpaceAfter=No
12	?	punc1	PUNCT	u--------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 acl	color:blue
1	et	et1	CCONJ	c--------	_	3	advmod	_	_
2	qui	qui1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	fecere	facio1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	acl	_	_
4	et	et1	CCONJ	c--------	_	3	cc	_	_
5	qui	qui1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	_
6	facta	factum1	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	8	obj	_	_
7	aliorum	alius2	ADJ	a-p---mg-	Case=Gen|Gender=Masc|Number=Plur	6	amod	_	_
8	scripsere	scribo1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
9	,	comma1	PUNCT	u--------	_	3	punct	_	_
10	multi	multi1	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	_
11	laudantur	laudo1	VERB	v3ppip---	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
12	.	punc1	PUNCT	u--------	_	11	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

10611 nodes (4%) are attached to their parents as `acl`.

10091 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.60135708227311.

The following 43 pairs of parts of speech are connected with `acl`: [la-pos/NOUN]()-[la-pos/VERB]() (6093; 57% instances), [la-pos/PRON]()-[la-pos/VERB]() (2195; 21% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (520; 5% instances), [la-pos/ADJ]()-[la-pos/VERB]() (250; 2% instances), [la-pos/PRON]()-[la-pos/NOUN]() (237; 2% instances), [la-pos/DET]()-[la-pos/VERB]() (227; 2% instances), [la-pos/VERB]()-[la-pos/VERB]() (182; 2% instances), [la-pos/PRON]()-[la-pos/ADJ]() (179; 2% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (171; 2% instances), [la-pos/PROPN]()-[la-pos/VERB]() (148; 1% instances), [la-pos/NOUN]()-[la-pos/PRON]() (75; 1% instances), [la-pos/NUM]()-[la-pos/VERB]() (46; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (43; 0% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (30; 0% instances), [la-pos/VERB]()-[la-pos/NOUN]() (30; 0% instances), [la-pos/VERB]()-[la-pos/ADJ]() (22; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (18; 0% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (16; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (15; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (12; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (12; 0% instances), [la-pos/DET]()-[la-pos/ADJ]() (11; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (10; 0% instances), [la-pos/PUNCT]()-[la-pos/VERB]() (8; 0% instances), [la-pos/CCONJ]()-[la-pos/VERB]() (7; 0% instances), [la-pos/NUM]()-[la-pos/NOUN]() (7; 0% instances), [la-pos/ADJ]()-[la-pos/PRON]() (6; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (6; 0% instances), [la-pos/PRON]()-[la-pos/PROPN]() (4; 0% instances), [la-pos/PROPN]()-[la-pos/ADJ]() (4; 0% instances), [la-pos/VERB]()-[la-pos/PROPN]() (4; 0% instances), [la-pos/X]()-[la-pos/VERB]() (4; 0% instances), [la-pos/PROPN]()-[la-pos/PRON]() (3; 0% instances), [la-pos/VERB]()-[la-pos/PRON]() (3; 0% instances), [la-pos/CCONJ]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/DET]() (2; 0% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/ADP]()-[la-pos/PRON]() (1; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	quis	qui	PRON	F1|grn1|casA|gen1|varA|stPV	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Rel	2	nmod	_	_
2	modus	modus	NOUN	B1|grn1|casA|gen1|stAN	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	nsubj	_	_
3	sit	sum	AUX	N3|modB|tem1|gen6|stAV	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	possibilis	possibilis	ADJ	C1|grn1|casA|gen1|stAN	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	divinae	divinus	ADJ	A1|grn1|casB|gen2|stAM	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	veritatis	veritas	NOUN	C1|grn1|casB|gen2|vgr1|stAC	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
7	manifestandae	manifesto	VERB	J2|modO|grp1|casB|gen2|stAC	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Gdv|Voice=Pass	2	acl	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	autem	autem	CCONJ	O4|stRL	_	1	cc	_	_
3	in	in	ADP	S4|stRL	AdpType=Prep	4	case	_	_
4	his	hic	PRON	F1|grn1|casO|gen3|vgr1|stPV	Case=Abl|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem	1	obl	_	_
5	quae	qui	PRON	F1|grn1|casM|gen3|vgr1|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|PronType=Rel	8	obj	_	_
6	de	de	ADP	S4|stRL	AdpType=Prep	7	case	_	_
7	deo	deus	PROPN	F1|grn1|casF|gen1|stNP	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	8	obl	_	_
8	confitemur	confiteor	VERB	K3|modJ|tem1|gen7|stAE	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl	_	_
9	duplex	duplex	ADJ	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
10	veritatis	veritas	NOUN	C1|grn1|casB|gen2|vgr1|stAC	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	11	nmod	_	_
11	modus	modus	NOUN	B1|grn1|casA|gen1|stAN	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	ei	is	PRON	F1|grn1|casC|gen3|stPV	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem,Prs	4	obj	_	_
2	enim	enim	ADV	O4|stRL	_	4	advmod	_	_
3	esse	esse	NOUN	G1|casA|gen3|stAV	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
4	deficeret	deficio	VERB	L3|modB|tem2|gen6|stAV	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	7	punct	_	_
6	quod	qui	PRON	F1|grn1|casA|gen3|stRL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	7	nsubj	_	_
7	bonum	bonum	NOUN	B1|grn1|casA|gen3|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	acl	_	_
8	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	11	punct	_	_
10	ut	ut	SCONJ	O4|vgr1|stRL	_	11	mark	_	_
11	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3|stAE	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	advcl	_	_
12	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	_	SpaceAfter=No
13	;	;	PUNCT	Punc	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

3249 nodes (2%) are attached to their parents as `acl`.

2890 instances of `acl` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44721452754694.

The following 31 pairs of parts of speech are connected with `acl`: [la-pos/NOUN]()-[la-pos/VERB]() (1751; 54% instances), [la-pos/ADJ]()-[la-pos/VERB]() (594; 18% instances), [la-pos/PRON]()-[la-pos/VERB]() (422; 13% instances), [la-pos/PROPN]()-[la-pos/VERB]() (199; 6% instances), [la-pos/ADV]()-[la-pos/VERB]() (37; 1% instances), [la-pos/NUM]()-[la-pos/VERB]() (36; 1% instances), [la-pos/ADJ]()-[la-pos/ADV]() (33; 1% instances), [la-pos/NOUN]()-[la-pos/AUX]() (31; 1% instances), [la-pos/NOUN]()-[la-pos/ADV]() (20; 1% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (15; 0% instances), [la-pos/PRON]()-[la-pos/ADV]() (15; 0% instances), [la-pos/DET]()-[la-pos/VERB]() (14; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (12; 0% instances), [la-pos/ADJ]()-[la-pos/AUX]() (12; 0% instances), [la-pos/VERB]()-[la-pos/VERB]() (10; 0% instances), [la-pos/X]()-[la-pos/VERB]() (10; 0% instances), [la-pos/PRON]()-[la-pos/AUX]() (9; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (6; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (3; 0% instances), [la-pos/ADV]()-[la-pos/ADV]() (3; 0% instances), [la-pos/PROPN]()-[la-pos/ADV]() (3; 0% instances), [la-pos/DET]()-[la-pos/ADV]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/PROPN]()-[la-pos/AUX]() (2; 0% instances), [la-pos/VERB]()-[la-pos/AUX]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/ADP]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (1; 0% instances), [la-pos/ADV]()-[la-pos/AUX]() (1; 0% instances), [la-pos/DET]()-[la-pos/AUX]() (1; 0% instances), [la-pos/PRON]()-[la-pos/ADP]() (1; 0% instances), [la-pos/PRON]()-[la-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Iesus	Iesus	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	ref=MARK_5.36
2	autem	autem	ADV	Df	_	7	discourse	_	ref=MARK_5.36
3	verbo	verbum	NOUN	Nb	Case=Abl|Gender=Neut|Number=Sing	6	nsubj:pass	_	ref=MARK_5.36
4	quod	qui	PRON	Pr	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	5	nsubj:pass	_	ref=MARK_5.36
5	dicebatur	dico	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	3	acl	_	ref=MARK_5.36
6	audito	audio	VERB	V-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	advcl	_	ref=MARK_5.36
7	ait	aio	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MARK_5.36
8	archisynagogo	archisynagogus	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	7	iobj	_	ref=MARK_5.36

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	omnis	omnis	ADJ	Px	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	ref=MATT_5.22
2	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	ref=MATT_5.22
3	irascitur	irascor	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	acl	_	ref=MATT_5.22
4	fratri	frater	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	3	iobj	_	ref=MATT_5.22
5	suo	suus	ADJ	Pt	Case=Dat|Gender=Masc|Number=Sing|Person=3|Poss=Yes|Reflex=Yes	4	nmod	_	ref=MATT_5.22
6	reus	reus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	0	root	_	ref=MATT_5.22
7	erit	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	cop	_	ref=MATT_5.22
8	iudicio	iudicium	NOUN	Nb	Case=Dat|Gender=Neut|Number=Sing	6	nmod	_	ref=MATT_5.22

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 acl	color:blue
1	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	_	ref=MATT_5.42
2	petit	peto	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl	_	ref=MATT_5.42
3	a	ab	ADP	R-	_	4	case	_	ref=MATT_5.42
4	te	tu	PRON	Pp	Case=Abl|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	obl	_	ref=MATT_5.42
5	da	do	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.42
6	ei	is	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	iobj	_	ref=MATT_5.42

~~~


