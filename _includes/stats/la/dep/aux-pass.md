

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is a language-specific subtype of [aux]().

1318 nodes (0%) are attached to their parents as `aux:pass`.

1025 instances of `aux:pass` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17147192716237.

The following 7 pairs of parts of speech are connected with `aux:pass`: [la-pos/VERB]()-[la-pos/AUX]() (1302; 99% instances), [la-pos/ADJ]()-[la-pos/AUX]() (9; 1% instances), [la-pos/NOUN]()-[la-pos/AUX]() (3; 0% instances), [la-pos/NUM]()-[la-pos/AUX]() (1; 0% instances), [la-pos/PRON]()-[la-pos/AUX]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/AUX]() (1; 0% instances), [la-pos/VERB]()-[la-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 aux:pass	color:blue
1	tum	tum	CCONJ	O4|stRL	_	2	cc	_	_
2	etiam	etiam	ADV	O4|vgr1|stRL	_	0	root	_	_
3	propter	propter	ADP	S4|stRL	AdpType=Prep	4	case	_	_
4	multa	multus	ADJ	B1|grn1|casM|gen3|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	2	conj	_	_
5	quae	qui	PRON	F1|grn1|casJ|gen3|vgr1|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Rel	6	nsubj:pass	_	_
6	praeexiguntur	praeexigo	VERB	L3|modJ|tem1|gen9|stAV	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	9	punct	_	_
8	ut	ut	SCONJ	O4|vgr1|stRL	_	9	mark	_	_
9	dictum	dico	VERB	N2|modM|tem4|grp1|casA|gen3|stAE	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	orphan	_	_
10	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux:pass	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 aux:pass	color:blue
1	mirabilis	mirabilis	ADJ	C1|grn1|casA|gen1|stAM	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
2	facta	facio	AUX	N2|modM|tem4|grp1|casA|gen2|stAV	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	cop	_	_
3	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
4	scientia	scientia	NOUN	A1|grn1|casA|gen2|vgr1|stAC	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	nsubj:pass	_	_
5	tua	tuus	DET	A1|grn1|casA|gen2|stPV	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	_
6	ex	e	ADP	S4|vgr2|stRL	AdpType=Prep	7	case	_	_
7	me	ego	PRON	F1|grn1|casF|gen1|stPD	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing|PronType=Prs	1	obl	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	cognitio	cognitio	NOUN	C1|grn1|casA|gen2|vgr1|stAC	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
2	de	de	ADP	S4|stRL	AdpType=Prep	3	case	_	_
3	deo	deus	PROPN	F1|grn1|casF|gen1|stNP	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	1	nmod	_	_
4	dicta	dico	AUX	N2|modM|tem4|grp1|casA|gen2|stAE	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	cop	_	_
5	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
6	finis	finis	NOUN	C1|grn1|casA|gen1|stRS	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
7	inquantum	in+quantum	SCONJ	O4|grn8|comZ|stRL	_	15	mark	_	_
8	ultimo	ulterior	ADJ	B1|grn3|casC|gen1|stAN	Case=Dat|Degree=Sup|Gender=Masc|Number=Sing	9	amod	_	_
9	fini	finis	NOUN	C1|grn1|casC|gen1|stRS	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	15	obj	_	_
10	rerum	res	NOUN	E1|grn1|casK|gen2|stRS	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	9	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	scilicet	scilicet	ADV	O4|stRL	_	13	cc	_	_
13	deo	deus	PROPN	F1|grn1|casC|gen1|stNP	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	9	appos	_	SpaceAfter=No
14	,	,	PUNCT	Punc	_	13	punct	_	_
15	coniungit	conjungo	VERB	L3|modA|tem1|gen6|vgr2|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is a language-specific subtype of [aux]().

1514 nodes (1%) are attached to their parents as `aux:pass`.

1275 instances of `aux:pass` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13804491413474.

The following 2 pairs of parts of speech are connected with `aux:pass`: [la-pos/VERB]()-[la-pos/AUX]() (1509; 100% instances), [la-pos/VERB]()-[la-pos/VERB]() (5; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:pass	color:blue
1	audistis	audio	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.21
2	quia	quia	SCONJ	G-	_	3	mark	_	ref=MATT_5.21
3	dictum	dico	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	ccomp	_	ref=MATT_5.21
4	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	ref=MATT_5.21
5	antiquis	antiquus	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	3	iobj	_	ref=MATT_5.21

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:pass	color:blue
1	qua	quare	ADV	Dq	PronType=Rel	7	advmod	_	ref=1.18.7
2	re	re	ADV	Dq	PronType=Rel	1	flat	_	ref=1.18.7
3	etiam	etiam	ADV	Df	_	4	discourse	_	ref=1.18.7
4	legationes	legatio	NOUN	Nb	Case=Acc|Gender=Fem|Number=Plur	5	nsubj:pass	_	ref=1.18.7
5	reiectum	reicio	VERB	V-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	ccomp	_	ref=1.18.7
6	iri	eo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	5	aux:pass	_	ref=1.18.7
7	puto	puto	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=1.18.7

~~~


