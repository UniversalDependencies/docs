

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

215 nodes (0%) are attached to their parents as `fixed`.

215 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.46511627906977.

The following 11 pairs of parts of speech are connected with `fixed`: [la-pos/ADV]()-[la-pos/SCONJ]() (107; 50% instances), [la-pos/ADP]()-[la-pos/ADP]() (42; 20% instances), [la-pos/SCONJ]()-[la-pos/SCONJ]() (22; 10% instances), [la-pos/CCONJ]()-[la-pos/SCONJ]() (18; 8% instances), [la-pos/SCONJ]()-[la-pos/ADV]() (17; 8% instances), [la-pos/VERB]()-[la-pos/SCONJ]() (3; 1% instances), [la-pos/SCONJ]()-[la-pos/VERB]() (2; 1% instances), [la-pos/ADP]()-[la-pos/SCONJ]() (1; 0% instances), [la-pos/CCONJ]()-[la-pos/ADV]() (1; 0% instances), [la-pos/CCONJ]()-[la-pos/CCONJ]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	a	a	ADP	S4|vgr1|stRL	AdpType=Prep	2	case	_	_
2	saeculo	saeculum	NOUN	B1|grn1|casF|gen3|vgr1|stAN	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	6	obl	_	_
3	usque	usque	ADP	S4|stRL	AdpType=Prep	5	case	_	_
4	in	in	ADP	S4|stRL	AdpType=Prep	3	fixed	_	_
5	saeculum	saeculum	NOUN	B1|grn1|casD|gen3|vgr1|stAN	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	6	obl	_	_
6	respicit	respicio	VERB	L3|modA|tem1|gen6|stAC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 fixed	color:blue
1	constat	consto	VERB	J3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	autem	autem	CCONJ	O4|stRL	_	1	cc	_	_
3	quod	quod	SCONJ	O4|stRL	_	7	mark	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	7	punct	_	_
5	si	si	SCONJ	O4|stRL	_	7	mark	_	_
6	omnia	omnis	DET	C1|grn1|casJ|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	8	det	_	_
7	deficerent	deficio	VERB	L3|modB|tem2|gen9|stAV	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	1	advcl	_	_
8	particularia	particularis	ADJ	C1|grn1|casJ|gen3|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	7	punct	_	_
10	quod	quod	SCONJ	O4|stRL	_	3	fixed	_	_
11	universalia	universalis	ADJ	C1|grn1|casJ|gen3|vgr1|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	15	nsubj	_	_
12	eorum	is	PRON	F1|grn1|casK|gen3|stPV	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem,Prs	11	nmod	_	_
13	remanere	remaneo	VERB	K3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	15	xcomp	_	_
14	non	non	ADV	O4|stRL	_	15	advmod	_	_
15	possent	possum	VERB	N3|modB|tem2|gen9|stAV	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|VerbType=Mod|Voice=Act	7	csubj	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

8 nodes (0%) are attached to their parents as `fixed`.

5 instances of `fixed` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `fixed`: [la-pos/SCONJ]()-[la-pos/PRON]() (8; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 fixed	color:blue
1	quod	qui	PRON	Pr	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	2	fixed	_	ref=MARK_9.46
2	si	si	SCONJ	G-	_	5	mark	_	ref=MARK_9.46
3	oculus	oculus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	ref=MARK_9.46
4	tuus	tuus	ADJ	Ps	Case=Nom|Gender=Masc|Number=Sing|Person=2|Poss=Yes	3	nmod	_	ref=MARK_9.46
5	scandalizat	scandalizo	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	ref=MARK_9.46
6	te	tu	PRON	Pp	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	5	obj:dir	_	ref=MARK_9.46
7	eice	eicio	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MARK_9.46
8	eum	is	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj:dir	_	ref=MARK_9.46

~~~


