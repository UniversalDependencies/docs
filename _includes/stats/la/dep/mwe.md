

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

220 nodes (0%) are attached to their parents as `mwe`.

220 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.43636363636364.

The following 11 pairs of parts of speech are connected with `mwe`: [la-pos/ADV]()-[la-pos/SCONJ]() (109; 50% instances), [la-pos/ADP]()-[la-pos/ADP]() (44; 20% instances), [la-pos/SCONJ]()-[la-pos/SCONJ]() (22; 10% instances), [la-pos/CONJ]()-[la-pos/SCONJ]() (18; 8% instances), [la-pos/SCONJ]()-[la-pos/ADV]() (17; 8% instances), [la-pos/SCONJ]()-[la-pos/VERB]() (3; 1% instances), [la-pos/VERB]()-[la-pos/SCONJ]() (3; 1% instances), [la-pos/ADP]()-[la-pos/SCONJ]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/CONJ]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 mwe	color:blue
1	scilicet	scilicet	ADV	O4|stRL	_	6	mark	_	_
2	,	,	PUNCT	Punc	_	6	punct	_	_
3	quod	quod	SCONJ	O4|stRL	_	1	mwe	_	_
4	omne	omnis	PRON	C1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	5	nmod	_	_
5	motum	moveo	VERB	K2|modM|tem4|grp1|casA|gen3|stAV	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	csubjpass	_	_
6	movetur	moveo	VERB	K3|modJ|tem1|gen6|vgr1|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	ab	a	ADP	S4|vgr2|stRL	AdpType=Prep	8	case	_	_
8	alio	alius	PRON	F1|grn1|casF|gen3|stPV	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	6	dobj	_	_
9	;	;	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mwe	color:blue
1	hoc	hic	PRON	F1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	11	nsubj	_	_
2	autem	autem	CONJ	O4|stRL	_	11	cc	_	_
3	quod	qui	PRON	F1|grn1|casA|gen3|stRL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	4	nsubj	_	_
4	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
5	per	per	ADP	S4|stRL	AdpType=Prep	7	case	_	_
6	per	per	ADP	S4|stRL	AdpType=Prep	5	mwe	_	_
7	se	sui	PRON	F1|grn1|casD|gen3|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	8	nmod	_	_
8	necesse-esse	sum	VERB	N3|grn8|modH|tem1|comZ|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	4	ccomp	_	_
9	,	,	PUNCT	Punc	_	4	punct	_	_
10	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	deus	deus	PROPN	F1|grn1|casA|gen1|stNP	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 mwe	color:blue
1	constat	consto	VERB	J3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	autem	autem	CONJ	O4|stRL	_	1	cc	_	_
3	quod	quod	SCONJ	O4|stRL	_	7	mark	_	_
4	,	,	PUNCT	Punc	_	7	punct	_	_
5	si	si	SCONJ	O4|stRL	_	7	mark	_	_
6	omnia	omnis	DET	C1|grn1|casJ|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	8	det	_	_
7	deficerent	deficio	VERB	L3|modB|tem2|gen9|stAV	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	1	advcl	_	_
8	particularia	particularis	ADJ	C1|grn1|casJ|gen3|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	7	nsubj	_	_
9	,	,	PUNCT	Punc	_	7	punct	_	_
10	quod	quod	SCONJ	O4|stRL	_	3	mwe	_	_
11	universalia	universalis	ADJ	C1|grn1|casJ|gen3|vgr1|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	15	nsubj	_	_
12	eorum	is	PRON	F1|grn1|casK|gen3|stPV	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem,Prs	11	nmod	_	_
13	remanere	remaneo	VERB	K3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	15	xcomp	_	_
14	non	non	ADV	O4|stRL	_	15	neg	_	_
15	possent	possum	VERB	N3|modB|tem2|gen9|stAV	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|VerbType=Mod|Voice=Act	7	csubj	_	_
16	.	.	PUNCT	Punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

7 nodes (0%) are attached to their parents as `mwe`.

4 instances of `mwe` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `mwe`: [la-pos/SCONJ]()-[la-pos/PRON]() (7; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mwe	color:blue
1	quod	qui	PRON	Pr	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	2	mwe	_	_
2	si	si	SCONJ	G-	_	5	mark	_	_
3	oculus	oculus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	tuus	tuus	PRON	Ps	Case=Nom|Gender=Masc|Number=Sing|Person=2|Poss=Yes|PronType=Prs	3	nmod	_	_
5	scandalizat	scandalizo	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	_
6	te	tu	PRON	Pp	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	5	dobj	_	_
7	eice	eicio	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	eum	is	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	dobj	_	_

~~~


