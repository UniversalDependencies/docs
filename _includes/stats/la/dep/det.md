

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

3134 nodes (1%) are attached to their parents as `det`.

2462 instances of `det` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14613911933631.

The following 4 pairs of parts of speech are connected with `det`: [la-pos/NOUN]()-[la-pos/DET]() (2902; 93% instances), [la-pos/PRON]()-[la-pos/DET]() (129; 4% instances), [la-pos/ADJ]()-[la-pos/DET]() (94; 3% instances), [la-pos/PROPN]()-[la-pos/DET]() (9; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det	color:blue
1	et	et	CONJ	O4|stRL	_	3	cc	_	_
2	in	in	ADP	S4|stRL	AdpType=Prep	3	case	_	_
3	militari	militaris	ADJ	C1|grn1|casF|gen2|stAM	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
4	respectu	respectus	NOUN	D1|grn1|casF|gen1|stAC	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	3	conj	_	_
5	equestris	equester	ADJ	C1|grn1|casB|gen2|stAN	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
6	et	et	CONJ	O4|stRL	_	5	cc	_	_
7	omnis	omnis	DET	C1|grn1|casB|gen1|stPV	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|PronType=Ind	9	det	_	_
8	bellici	bellicus	ADJ	B1|grn1|casB|gen1|stAM	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	apparatus	apparatus	NOUN	D1|grn1|casB|gen1|stRS	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	_
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
3	se	sui	PRON	F1|grn1|casD|gen3|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	4	nmod	_	_
4	notum	nosco	VERB	L2|modM|tem4|grp1|casD|gen3|stAC	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	csubj	_	_
5	oportet	oportet	VERB	K3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	esse	sum	VERB	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	4	cop	_	_
7	quo	qui	PRON	F1|grn1|casF|gen3|stPV	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	10	nmod	_	_
8	omnia	omnis	DET	C1|grn1|casJ|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	9	det	_	_
9	alia	alius	PRON	F1|grn1|casJ|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	10	nsubjpass	_	_
10	cognoscuntur	cognosco	VERB	L3|modJ|tem1|gen9|stAC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	acl	_	_
11	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det	color:blue
1	ergo	ergo	ADV	O4|stRL	_	6	advmod	_	_
2	omnia	omnis	DET	C1|grn1|casJ|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	4	det	_	_
3	ista	iste	PRON	F1|grn1|casJ|gen3|stPD	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem	4	nmod	_	_
4	infinita	infinitus	ADJ	B1|grn1|casJ|gen3|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	6	nsubjpass	_	_
5	simul	simul	ADV	O4|stRL	_	6	advmod	_	_
6	moventur	moveo	VERB	K3|modJ|tem1|gen9|vgr1|stAV	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	dum	dum	SCONJ	O4|stRL	_	10	mark	_	_
8	unum	unus	NUM	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|NumType=Card	10	nsubjpass	_	_
9	eorum	is	PRON	F1|grn1|casK|gen3|stPV	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem,Prs	8	nmod	_	_
10	movetur	moveo	VERB	K3|modJ|tem1|gen6|vgr1|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	advcl	_	_
11	.	.	PUNCT	Punc	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

163 nodes (0%) are attached to their parents as `det`.

105 instances of `det` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1840490797546.

The following 5 pairs of parts of speech are connected with `det`: [la-pos/NOUN]()-[la-pos/DET]() (131; 80% instances), [la-pos/ADJ]()-[la-pos/DET]() (19; 12% instances), [la-pos/VERB]()-[la-pos/PRON]() (10; 6% instances), [la-pos/PRON]()-[la-pos/DET]() (2; 1% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 det	color:blue
1	lectus	lego	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	est	sum	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	auxpass	_	_
3	etiam	etiam	ADV	Df	_	1	discourse	_	_
4	locus	locus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	1	nsubjpass	_	_
5	ipse	ipse	DET	Pd	Case=Nom|Gender=Masc|Number=Sing	4	det	_	_
6	de	de	ADP	R-	_	7	case	_	_
7	libro	liber	NOUN	Nb	Case=Abl|Gender=Masc|Number=Sing	4	nmod	_	_
8	Moysi	Moses	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	iuxta	iuxta	ADP	R-	_	10	case	_	_
10	consuetudinem	consuetudo	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	audivi	audio	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	ex	ex	ADP	R-	_	3	case	_	_
3	Gavio	Gavius	PROPN	Ne	Case=Abl|Gender=Masc|Number=Sing	1	nmod	_	_
4	hoc	hic	DET	Pd	Case=Abl|Gender=Masc,Neut|Number=Sing	5	det	_	_
5	Firmano	Firmanus	ADJ	A-	Case=Abl|Degree=Pos|Gender=Masc,Neut|Number=Sing	3	appos	_	_
6	Romae	Roma	PROPN	Ne	Case=Gen|Gender=Fem|Number=Sing	1	ccomp	_	_
7	esse	sum	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	6	cop	_	_
8	hominem	homo	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	6	nsubj	_	_
9	et	et	CONJ	C-	_	6	cc	_	_
10	fuisse	sum	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	11	cop	_	_
11	adsiduum	assiduus	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	conj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	dixit	dico	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	autem	autem	ADV	Df	_	1	discourse	_	_
3	Spiritus	spiritus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
4	mihi	ego	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	1	iobj	_	_
5	ut	ut	SCONJ	G-	_	6	mark	_	_
6	irem	eo	VERB	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	_	_
7	cum	cum	ADP	R-	_	8	case	_	_
8	illis	ille	ADJ	Pd	Case=Abl|Gender=Masc|Number=Plur	6	nmod	_	_
9	nihil	nihil	PRON	Px	Case=Acc|Gender=Neut|Number=Sing	10	det	_	_
10	haesitans	haesito	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	6	advmod	_	_

~~~


