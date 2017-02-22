

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

872 nodes (5%) are attached to their parents as `conj`.

872 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5756880733945.

The following 23 pairs of parts of speech are connected with `conj`: [la-pos/NOUN]()-[la-pos/NOUN]() (337; 39% instances), [la-pos/VERB]()-[la-pos/VERB]() (336; 39% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (60; 7% instances), [la-pos/ADJ]()-[la-pos/VERB]() (21; 2% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (17; 2% instances), [la-pos/NOUN]()-[la-pos/VERB]() (16; 2% instances), [la-pos/VERB]()-[la-pos/ADJ]() (15; 2% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (11; 1% instances), [la-pos/ADV]()-[la-pos/ADV]() (11; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (9; 1% instances), [la-pos/VERB]()-[la-pos/NOUN]() (8; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (7; 1% instances), [la-pos/PRON]()-[la-pos/VERB]() (4; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (3; 0% instances), [la-pos/NUM]()-[la-pos/NUM]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/NUM]() (2; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (2; 0% instances), [la-pos/VERB]()-[la-pos/CCONJ]() (2; 0% instances), [la-pos/VERB]()-[la-pos/PRON]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 conj	color:blue
1	nihil	nihil	NOUN	n-s---n--	Gender=Neut|Number=Sing	2	obj	_	_
2	cogitant	cogito1	VERB	v3ppia---	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	nisi	nisi1	SCONJ	c--------	_	4	advmod	_	_
4	caedem	caedes1	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	comma1	PUNCT	u--------	_	4	punct	_	_
6	nisi	nisi1	SCONJ	c--------	_	7	advmod	_	_
7	incendia	incendium1	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	4	conj	_	SpaceAfter=No
8	,	comma1	PUNCT	u--------	_	4	punct	_	_
9	nisi	nisi1	SCONJ	c--------	_	10	advmod	_	_
10	rapinas	rapina1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	4	conj	_	SpaceAfter=No
11	.	punc1	PUNCT	u--------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 conj	color:blue
1	non	non1	ADV	d--------	_	2	advmod	_	_
2	iubeo	jubeo1	VERB	v1spia---	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	comma1	PUNCT	u--------	_	2	punct	_	_
4	sed	sed1	CCONJ	c--------	_	2	cc	_	SpaceAfter=No
5	,	comma1	PUNCT	u--------	_	6	punct	_	_
6	si	si1	SCONJ	c--------	_	8	mark	_	_
7	me	ego1	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	8	obj	_	_
8	consulis	consulo1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	SpaceAfter=No
9	,	comma1	PUNCT	u--------	_	6	punct	_	_
10	suadeo	suadeo1	VERB	v1spia---	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
11	.	punc1	PUNCT	u--------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj	color:blue
1	quartum	quartus	NUM	m-s---nn-	Case=Nom|Gender=Neut|Number=Sing	2	nummod	_	_
2	genus	genus1	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
3	est	sum1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	sane	sanus1	ADV	d--------	_	5	advmod	_	_
5	varium	varius1	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
6	et	et1	CCONJ	c--------	_	5	advmod	_	_
7	mixtum	misceo1	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	5	conj	_	_
8	et	et1	CCONJ	c--------	_	5	cc	_	_
9	turbulentum	turbulentus1	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	5	conj	_	SpaceAfter=No
10	;	punc1	PUNCT	u--------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

9314 nodes (3%) are attached to their parents as `conj`.

9314 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.43772815117028.

The following 74 pairs of parts of speech are connected with `conj`: [la-pos/NOUN]()-[la-pos/NOUN]() (2978; 32% instances), [la-pos/VERB]()-[la-pos/VERB]() (2018; 22% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (734; 8% instances), [la-pos/VERB]()-[la-pos/NOUN]() (424; 5% instances), [la-pos/NOUN]()-[la-pos/VERB]() (312; 3% instances), [la-pos/VERB]()-[la-pos/ADJ]() (292; 3% instances), [la-pos/ADJ]()-[la-pos/VERB]() (281; 3% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (229; 2% instances), [la-pos/ADV]()-[la-pos/NOUN]() (203; 2% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (192; 2% instances), [la-pos/PRON]()-[la-pos/PRON]() (180; 2% instances), [la-pos/VERB]()-[la-pos/ADV]() (155; 2% instances), [la-pos/NOUN]()-[la-pos/ADV]() (149; 2% instances), [la-pos/NOUN]()-[la-pos/PRON]() (135; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (117; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (106; 1% instances), [la-pos/ADV]()-[la-pos/ADJ]() (85; 1% instances), [la-pos/ADV]()-[la-pos/VERB]() (71; 1% instances), [la-pos/PRON]()-[la-pos/VERB]() (53; 1% instances), [la-pos/ADJ]()-[la-pos/PRON]() (52; 1% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (51; 1% instances), [la-pos/NUM]()-[la-pos/PRON]() (43; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (39; 0% instances), [la-pos/PRON]()-[la-pos/ADV]() (37; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (32; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (32; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (30; 0% instances), [la-pos/ADV]()-[la-pos/ADV]() (29; 0% instances), [la-pos/X]()-[la-pos/X]() (26; 0% instances), [la-pos/NUM]()-[la-pos/NUM]() (23; 0% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (20; 0% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (19; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (13; 0% instances), [la-pos/NUM]()-[la-pos/NOUN]() (12; 0% instances), [la-pos/DET]()-[la-pos/ADJ]() (11; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (11; 0% instances), [la-pos/ADJ]()-[la-pos/NUM]() (10; 0% instances), [la-pos/PROPN]()-[la-pos/ADJ]() (10; 0% instances), [la-pos/VERB]()-[la-pos/PROPN]() (8; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (7; 0% instances), [la-pos/NOUN]()-[la-pos/DET]() (6; 0% instances), [la-pos/PROPN]()-[la-pos/PRON]() (6; 0% instances), [la-pos/NUM]()-[la-pos/X]() (5; 0% instances), [la-pos/ADV]()-[la-pos/NUM]() (4; 0% instances), [la-pos/AUX]()-[la-pos/VERB]() (4; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (4; 0% instances), [la-pos/VERB]()-[la-pos/DET]() (4; 0% instances), [la-pos/ADV]()-[la-pos/DET]() (3; 0% instances), [la-pos/ADV]()-[la-pos/PROPN]() (3; 0% instances), [la-pos/CCONJ]()-[la-pos/VERB]() (3; 0% instances), [la-pos/DET]()-[la-pos/DET]() (3; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (3; 0% instances), [la-pos/PROPN]()-[la-pos/VERB]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/DET]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/ADP]()-[la-pos/ADP]() (2; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/AUX]()-[la-pos/ADV]() (2; 0% instances), [la-pos/AUX]()-[la-pos/AUX]() (2; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/AUX]()-[la-pos/PRON]() (2; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/X]() (2; 0% instances), [la-pos/PRON]()-[la-pos/DET]() (2; 0% instances), [la-pos/PROPN]()-[la-pos/ADV]() (2; 0% instances), [la-pos/VERB]()-[la-pos/ADP]() (2; 0% instances), [la-pos/DET]()-[la-pos/VERB]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADP]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/DET]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/NUM]() (1; 0% instances), [la-pos/VERB]()-[la-pos/PUNCT]() (1; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/X]()-[la-pos/NUM]() (1; 0% instances), [la-pos/X]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 conj	color:blue
1	prope	prope	ADP	S4|stRL	AdpType=Prep	2	advmod	_	_
2	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	verbum	verbum	NOUN	B1|grn1|casA|gen3|vgr1|stAE	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	nsubj	_	_
4	in	in	ADP	S4|stRL	AdpType=Prep	5	case	_	_
5	corde	cor	NOUN	C1|grn1|casF|gen3|stRS	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	2	obl	_	_
6	tuo	tuus	DET	B1|grn1|casF|gen3|stPV	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	_
7	et	et	CCONJ	O4|stRL	_	9	cc	_	_
8	in	in	ADP	S4|stRL	AdpType=Prep	9	case	_	_
9	ore	os	NOUN	C1|grn1|casF|gen3|stRS	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	5	conj	_	_
10	tuo	tuus	DET	B1|grn1|casF|gen3|stPV	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	9	det	_	SpaceAfter=No
11	:	:	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	haec	hic	PRON	F1|grn1|casM|gen3|vgr1|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem	2	obj	_	_
2	credendo	credo	VERB	L2|modE|grp1|casF|stAC	Case=Abl|Degree=Pos|Number=Sing|VerbForm=Ger|Voice=Act	3	advcl	_	_
3	incipe	incipio	VERB	L3|modC|tem1|gen5|stAV	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	procurre	procurro	VERB	L3|modC|tem1|gen5|stAV	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	persiste	persisto	VERB	L3|modC|tem1|gen5|stAV	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
8	:	:	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 conj	color:blue
1	nec	nec	CCONJ	O4|stRL	_	4	cc	_	_
2	iterum	iterum	ADV	O4|stRL	_	4	advmod	_	_
3	quae	qui	PRON	F1|grn1|casJ|gen3|vgr1|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Rel	4	nsubj:pass	_	_
4	moventur	moveo	VERB	K3|modJ|tem1|gen9|vgr1|stAV	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	per	per	ADP	S4|stRL	AdpType=Prep	6	case	_	_
6	naturam	natura	NOUN	A1|grn1|casD|gen2|stAN	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	obl	_	_
7	ut	ut	SCONJ	O4|vgr1|stRL	_	8	mark	_	_
8	gravia	gravis	ADJ	C1|grn1|casJ|gen3|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	4	dep	_	_
9	et	et	CCONJ	O4|stRL	_	10	cc	_	_
10	levia	levis	ADJ	C1|grn1|casJ|gen3|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

8918 nodes (6%) are attached to their parents as `conj`.

8903 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.43967257232563.

The following 81 pairs of parts of speech are connected with `conj`: [la-pos/VERB]()-[la-pos/VERB]() (4067; 46% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (2208; 25% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (370; 4% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (335; 4% instances), [la-pos/NOUN]()-[la-pos/VERB]() (176; 2% instances), [la-pos/VERB]()-[la-pos/NOUN]() (171; 2% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (133; 1% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (128; 1% instances), [la-pos/VERB]()-[la-pos/ADJ]() (126; 1% instances), [la-pos/ADJ]()-[la-pos/VERB]() (124; 1% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (104; 1% instances), [la-pos/SCONJ]()-[la-pos/VERB]() (101; 1% instances), [la-pos/ADV]()-[la-pos/ADV]() (78; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (75; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (46; 1% instances), [la-pos/PRON]()-[la-pos/ADJ]() (45; 1% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (40; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (40; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (36; 0% instances), [la-pos/AUX]()-[la-pos/VERB]() (33; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (32; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (31; 0% instances), [la-pos/VERB]()-[la-pos/AUX]() (30; 0% instances), [la-pos/VERB]()-[la-pos/PRON]() (27; 0% instances), [la-pos/PROPN]()-[la-pos/ADJ]() (26; 0% instances), [la-pos/NUM]()-[la-pos/NUM]() (25; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (22; 0% instances), [la-pos/VERB]()-[la-pos/PROPN]() (21; 0% instances), [la-pos/PRON]()-[la-pos/PROPN]() (20; 0% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (18; 0% instances), [la-pos/ADJ]()-[la-pos/PRON]() (16; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (13; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (13; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (12; 0% instances), [la-pos/AUX]()-[la-pos/AUX]() (12; 0% instances), [la-pos/PROPN]()-[la-pos/VERB]() (12; 0% instances), [la-pos/X]()-[la-pos/X]() (12; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (11; 0% instances), [la-pos/SCONJ]()-[la-pos/ADJ]() (10; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (9; 0% instances), [la-pos/CCONJ]()-[la-pos/VERB]() (8; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (8; 0% instances), [la-pos/NUM]()-[la-pos/NOUN]() (6; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (6; 0% instances), [la-pos/AUX]()-[la-pos/ADV]() (5; 0% instances), [la-pos/NOUN]()-[la-pos/X]() (5; 0% instances), [la-pos/PROPN]()-[la-pos/PRON]() (5; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (4; 0% instances), [la-pos/SCONJ]()-[la-pos/SCONJ]() (4; 0% instances), [la-pos/VERB]()-[la-pos/X]() (4; 0% instances), [la-pos/X]()-[la-pos/VERB]() (4; 0% instances), [la-pos/ADJ]()-[la-pos/AUX]() (3; 0% instances), [la-pos/AUX]()-[la-pos/ADJ]() (3; 0% instances), [la-pos/DET]()-[la-pos/ADJ]() (3; 0% instances), [la-pos/PROPN]()-[la-pos/ADV]() (3; 0% instances), [la-pos/SCONJ]()-[la-pos/ADV]() (3; 0% instances), [la-pos/X]()-[la-pos/ADJ]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (2; 0% instances), [la-pos/ADV]()-[la-pos/AUX]() (2; 0% instances), [la-pos/ADV]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/ADV]()-[la-pos/X]() (2; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/AUX]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (2; 0% instances), [la-pos/PROPN]()-[la-pos/NUM]() (2; 0% instances), [la-pos/VERB]()-[la-pos/CCONJ]() (2; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/AUX]()-[la-pos/PRON]() (1; 0% instances), [la-pos/CCONJ]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/CCONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADP]() (1; 0% instances), [la-pos/NUM]()-[la-pos/AUX]() (1; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PRON]()-[la-pos/ADV]() (1; 0% instances), [la-pos/PRON]()-[la-pos/X]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/X]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/AUX]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/X]() (1; 0% instances), [la-pos/X]()-[la-pos/ADV]() (1; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 conj	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 conj	color:blue
1	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	ref=MATT_5.45
2	solem	sol	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	4	nsubj	_	ref=MATT_5.45
3	suum	suus	ADJ	Pt	Case=Acc|Gender=Masc|Number=Sing|Person=3|Poss=Yes|Reflex=Yes	2	nmod	_	ref=MATT_5.45
4	oriri	orior	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	5	ccomp	_	ref=MATT_5.45
5	facit	facio	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.45
6	super	super	ADP	R-	_	7	case	_	ref=MATT_5.45
7	bonos	bonus	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	4	advmod	_	ref=MATT_5.45
8	et	et	CCONJ	C-	_	7	cc	_	ref=MATT_5.45
9	malos	malus	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	7	conj	_	ref=MATT_5.45

~~~


