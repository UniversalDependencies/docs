

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is a language-specific subtype of [nsubj]().

5682 nodes (2%) are attached to their parents as `nsubj:pass`.

4380 instances of `nsubj:pass` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.74304822245688.

The following 29 pairs of parts of speech are connected with `nsubj:pass`: [la-pos/VERB]()-[la-pos/NOUN]() (3240; 57% instances), [la-pos/VERB]()-[la-pos/PRON]() (1645; 29% instances), [la-pos/VERB]()-[la-pos/ADJ]() (173; 3% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (107; 2% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (106; 2% instances), [la-pos/VERB]()-[la-pos/PROPN]() (101; 2% instances), [la-pos/VERB]()-[la-pos/DET]() (96; 2% instances), [la-pos/VERB]()-[la-pos/NUM]() (64; 1% instances), [la-pos/ADJ]()-[la-pos/PRON]() (54; 1% instances), [la-pos/NOUN]()-[la-pos/PRON]() (54; 1% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (6; 0% instances), [la-pos/PRON]()-[la-pos/NOUN]() (5; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (4; 0% instances), [la-pos/NUM]()-[la-pos/NOUN]() (4; 0% instances), [la-pos/PROPN]()-[la-pos/PRON]() (4; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (3; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (2; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/DET]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/DET]() (1; 0% instances), [la-pos/NUM]()-[la-pos/DET]() (1; 0% instances), [la-pos/NUM]()-[la-pos/PROPN]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (1; 0% instances), [la-pos/VERB]()-[la-pos/ADP]() (1; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj:pass	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	quidam	quidam	PRON	F1|grn1|casJ|gen1|stPV	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|PronType=Ind	3	nsubj:pass	_	_
2	vero	verus	ADJ	B1|grn1|casG|vgr1|stRL	Case=Loc|Degree=Pos|Number=Sing	3	advmod	_	_
3	impediuntur	impedio	VERB	M3|modJ|tem1|gen9|stAV	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	necessitate	necessitas	NOUN	C1|grn1|casF|gen2|stAN	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	3	obl	_	_
5	rei	res	NOUN	E1|grn1|casB|gen2|stRS	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	nmod	_	_
6	familiaris	familiaris	ADJ	C1|grn1|casB|gen2|stAN	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 nsubj:pass	color:blue
1	unde	unde	ADV	O4|stRL	_	9	advmod	_	_
2	et	et	CCONJ	O4|stRL	_	9	cc	_	_
3	in	in	ADP	S4|stRL	AdpType=Prep	4	case	_	_
4	ea	is	PRON	F1|grn1|casF|gen2|stPV	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem,Prs	9	obl	_	_
5	plurima	multus	ADJ	B1|grn3|casJ|gen3|stPV	Case=Nom|Degree=Sup|Gender=Neut|Number=Plur	9	nsubj:pass	_	_
6	humanum	humanus	ADJ	B1|grn1|casD|gen1|stAN	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	sensum	sensus	NOUN	D1|grn1|casD|gen1|stAC	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	8	obj	_	_
8	excedentia	excedo	VERB	L2|modD|tem1|grp1|casJ|gen3|stAV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	5	acl	_	_
9	proponuntur	propono	VERB	L3|modJ|tem1|gen9|stAE	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is a language-specific subtype of [nsubj]().

2949 nodes (2%) are attached to their parents as `nsubj:pass`.

2079 instances of `nsubj:pass` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53950491692099.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: [la-pos/VERB]()-[la-pos/NOUN]() (1665; 56% instances), [la-pos/VERB]()-[la-pos/PRON]() (695; 24% instances), [la-pos/VERB]()-[la-pos/ADJ]() (357; 12% instances), [la-pos/VERB]()-[la-pos/PROPN]() (126; 4% instances), [la-pos/VERB]()-[la-pos/VERB]() (70; 2% instances), [la-pos/VERB]()-[la-pos/NUM]() (16; 1% instances), [la-pos/VERB]()-[la-pos/X]() (10; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (8; 0% instances), [la-pos/VERB]()-[la-pos/AUX]() (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:pass	color:blue
1	et	et	CCONJ	C-	_	3	cc	_	ref=MARK_5.29
2	confestim	confestim	ADV	Df	_	3	advmod	_	ref=MARK_5.29
3	siccatus	sicco	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=MARK_5.29
4	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	ref=MARK_5.29
5	fons	fons	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	ref=MARK_5.29
6	sanguinis	sanguis	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	ref=MARK_5.29
7	eius	is	PRON	Pp	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	det	_	ref=MARK_5.29

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	beati	beatus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	ref=MATT_5.6
2	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	3	nsubj	_	ref=MATT_5.6
3	esuriunt	esurio	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	nsubj	_	ref=MATT_5.6
4	et	et	CCONJ	C-	_	3	cc	_	ref=MATT_5.6
5	sitiunt	sitio	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	ref=MATT_5.6
6	iustitiam	iustitia	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	5	obj:dir	_	ref=MATT_5.6
7	quoniam	quoniam	SCONJ	G-	_	9	mark	_	ref=MATT_5.6
8	ipsi	ipse	PRON	Pp	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	nsubj:pass	_	ref=MATT_5.6
9	saturabuntur	saturo	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	1	advcl	_	ref=MATT_5.6

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj:pass	color:blue
1	et	et	CCONJ	C-	_	8	cc	_	ref=LUKE_5.11
2	subductis	subduco	VERB	V-	Aspect=Perf|Case=Abl|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	8	advcl	_	ref=LUKE_5.11
3	ad	ad	ADP	R-	_	4	case	_	ref=LUKE_5.11
4	terram	terra	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	2	obl	_	ref=LUKE_5.11
5	navibus	navis	NOUN	Nb	Case=Abl|Gender=Fem|Number=Plur	2	nsubj:pass	_	ref=LUKE_5.11
6	relictis	relinquo	VERB	V-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	8	advcl	_	ref=LUKE_5.11
7	omnibus	omnis	ADJ	Px	Case=Abl|Gender=Neut|Number=Plur	6	nsubj:pass	_	ref=LUKE_5.11
8	secuti	sequor	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=LUKE_5.11
9	sunt	sum	AUX	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	ref=LUKE_5.11
10	illum	ille	ADJ	Pd	Case=Acc|Gender=Masc|Number=Sing	8	obj:dir	_	ref=LUKE_5.11

~~~


