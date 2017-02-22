

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

1350 nodes (7%) are attached to their parents as `nmod`.

737 instances of `nmod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71851851851852.

The following 22 pairs of parts of speech are connected with `nmod`: [la-pos/NOUN]()-[la-pos/NOUN]() (606; 45% instances), [la-pos/NOUN]()-[la-pos/PRON]() (465; 34% instances), [la-pos/NOUN]()-[la-pos/VERB]() (131; 10% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (39; 3% instances), [la-pos/NOUN]()-[la-pos/X]() (18; 1% instances), [la-pos/ADJ]()-[la-pos/PRON]() (16; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (13; 1% instances), [la-pos/NOUN]()-[la-pos/ADV]() (9; 1% instances), [la-pos/NUM]()-[la-pos/NOUN]() (9; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (9; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (9; 1% instances), [la-pos/PRON]()-[la-pos/VERB]() (6; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (5; 0% instances), [la-pos/ADJ]()-[la-pos/VERB]() (3; 0% instances), [la-pos/VERB]()-[la-pos/NOUN]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/CCONJ]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (1; 0% instances), [la-pos/INTJ]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (1; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (1; 0% instances), [la-pos/VERB]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	qui	qui1	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	_
2	minus	parvus	ADV	d-------c	Degree=Cmp	3	advmod	_	_
3	facile	facilis1	ADV	d--------	_	8	advmod	_	_
4	eam	is1	PRON	p-s---fa-	Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
5	rem	res1	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
6	imperio	imperium1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	8	advmod	_	_
7	nostro	noster	PRON	p-s---nb-	Case=Abl|Gender=Neut|Number=Sing	6	nmod	_	_
8	consequi	consequor	VERB	v--pnd---	Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	_
9	poterant	possum1	VERB	v3piia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	.	punc1	PUNCT	u--------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod	color:blue
1	quem	qui1	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	3	nmod	_	_
2	ad	ad1	ADP	r--------	_	3	case	_	_
3	finem	finis1	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	6	obl	_	_
4	sese	sui1	PRON	p-s---fa-	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
5	effrenata	effreno	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	nmod	_	_
6	iactabit	jacto1	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
7	audacia	audacia1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
8	?	punc1	PUNCT	u--------	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

20033 nodes (7%) are attached to their parents as `nmod`.

11554 instances of `nmod` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40483202715519.

The following 42 pairs of parts of speech are connected with `nmod`: [la-pos/NOUN]()-[la-pos/NOUN]() (9503; 47% instances), [la-pos/NOUN]()-[la-pos/PRON]() (7817; 39% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (699; 3% instances), [la-pos/PRON]()-[la-pos/PRON]() (350; 2% instances), [la-pos/PRON]()-[la-pos/NOUN]() (234; 1% instances), [la-pos/ADJ]()-[la-pos/PRON]() (212; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (208; 1% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (176; 1% instances), [la-pos/NUM]()-[la-pos/NOUN]() (160; 1% instances), [la-pos/NUM]()-[la-pos/X]() (122; 1% instances), [la-pos/VERB]()-[la-pos/NOUN]() (119; 1% instances), [la-pos/PROPN]()-[la-pos/PRON]() (72; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (71; 0% instances), [la-pos/X]()-[la-pos/X]() (64; 0% instances), [la-pos/NUM]()-[la-pos/PROPN]() (38; 0% instances), [la-pos/PRON]()-[la-pos/PROPN]() (24; 0% instances), [la-pos/NOUN]()-[la-pos/X]() (20; 0% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (19; 0% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (19; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (16; 0% instances), [la-pos/VERB]()-[la-pos/PROPN]() (15; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (14; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (11; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (9; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (8; 0% instances), [la-pos/NOUN]()-[la-pos/ADP]() (6; 0% instances), [la-pos/CCONJ]()-[la-pos/NOUN]() (4; 0% instances), [la-pos/PRON]()-[la-pos/X]() (4; 0% instances), [la-pos/X]()-[la-pos/PRON]() (3; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/ADP]()-[la-pos/PRON]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/SCONJ]() (2; 0% instances), [la-pos/CCONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/CCONJ]() (1; 0% instances), [la-pos/PRON]()-[la-pos/CCONJ]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/X]() (1; 0% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/VERB]()-[la-pos/ADP]() (1; 0% instances), [la-pos/VERB]()-[la-pos/X]() (1; 0% instances), [la-pos/X]()-[la-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod	color:blue
1	oportet	oportet	VERB	K3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	igitur	igitur	ADV	O4|stRL	_	1	advmod	_	_
3	ultimum	ulterior	ADJ	B1|grn3|casD|gen1|stAN	Case=Acc|Degree=Sup|Gender=Masc|Number=Sing	4	amod	_	_
4	finem	finis	NOUN	C1|grn1|casD|gen1|stRS	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	_
5	universi	universus	ADJ	B1|grn1|casB|gen1|stAN	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
6	esse	sum	AUX	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	7	cop	_	_
7	bonum	bonum	NOUN	B1|grn1|casD|gen3|stAN	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	1	csubj	_	_
8	intellectus	intellectus	NOUN	D1|grn1|casB|gen1|stAC	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	finis	finis	NOUN	C1|grn1|casA|gen1|stRS	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	nsubj	_	_
2	enim	enim	ADV	O4|stRL	_	4	advmod	_	_
3	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	bonum	bonum	NOUN	B1|grn1|casA|gen3|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	uniuscuiusque	unusquisque	PRON	F1|grn1|casB|gen3|vgr1|stPV	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	4	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	unum	unus	NUM	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|NumType=Card	2	nsubj	_	_
2	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	quod	quod	SCONJ	O4|stRL	_	8	mark	_	_
4	paucis	paucus	ADJ	B1|grn1|casL|gen1|stAN	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	5	amod	_	_
5	hominibus	homo	NOUN	C1|grn1|casL|gen1|stRS	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	8	obj	_	_
6	dei	deus	PROPN	F1|grn1|casB|gen1|stNP	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	nmod	_	_
7	cognitio	cognitio	NOUN	C1|grn1|casA|gen2|vgr1|stAC	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	nsubj	_	_
8	inesset	insum	VERB	N3|modB|tem2|gen6|stAV	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	2	advcl	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

8902 nodes (6%) are attached to their parents as `nmod`.

6874 instances of `nmod` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44888789036172.

The following 49 pairs of parts of speech are connected with `nmod`: [la-pos/NOUN]()-[la-pos/NOUN]() (3916; 44% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (2881; 32% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (827; 9% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (300; 3% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (138; 2% instances), [la-pos/NOUN]()-[la-pos/PRON]() (126; 1% instances), [la-pos/NUM]()-[la-pos/NOUN]() (122; 1% instances), [la-pos/ADJ]()-[la-pos/PRON]() (79; 1% instances), [la-pos/PROPN]()-[la-pos/ADJ]() (69; 1% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (51; 1% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (50; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (47; 1% instances), [la-pos/ADV]()-[la-pos/NOUN]() (45; 1% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (39; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (22; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (18; 0% instances), [la-pos/NUM]()-[la-pos/NUM]() (17; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (16; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (15; 0% instances), [la-pos/X]()-[la-pos/ADJ]() (14; 0% instances), [la-pos/VERB]()-[la-pos/NOUN]() (12; 0% instances), [la-pos/ADJ]()-[la-pos/VERB]() (11; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (11; 0% instances), [la-pos/PRON]()-[la-pos/PROPN]() (11; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (7; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (5; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (5; 0% instances), [la-pos/X]()-[la-pos/PROPN]() (5; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (4; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (4; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (4; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (4; 0% instances), [la-pos/ADP]()-[la-pos/PROPN]() (3; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (3; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (2; 0% instances), [la-pos/DET]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/INTJ]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/VERB]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/VERB]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/X]()-[la-pos/PRON]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (1; 0% instances), [la-pos/ADP]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/ADV]()-[la-pos/PROPN]() (1; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (1; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (1; 0% instances), [la-pos/NUM]()-[la-pos/PROPN]() (1; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod	color:blue
1	beati	beatus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	ref=MATT_5.3
2	pauperes	pauper	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	nsubj	_	ref=MATT_5.3
3	spiritu	spiritus	NOUN	Nb	Case=Abl|Gender=Masc|Number=Sing	2	nmod	_	ref=MATT_5.3
4	quoniam	quoniam	SCONJ	G-	_	5	mark	_	ref=MATT_5.3
5	ipsorum	ipse	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	advcl	_	ref=MATT_5.3
6	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	ref=MATT_5.3
7	regnum	regnum	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	ref=MATT_5.3
8	caelorum	caelum	NOUN	Nb	Case=Gen|Gender=Neut|Number=Plur	7	nmod	_	ref=MATT_5.3

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod	color:blue
1	gaudete	gaudeo	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.12
2	et	et	CCONJ	C-	_	1	cc	_	ref=MATT_5.12
3	exultate	ex(s)ulto	VERB	V-	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	ref=MATT_5.12
4	quoniam	quoniam	SCONJ	G-	_	7	mark	_	ref=MATT_5.12
5	merces	merces	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	ref=MATT_5.12
6	vestra	vester	ADJ	Ps	Case=Nom|Gender=Fem|Number=Sing|Person=2|Poss=Yes	5	nmod	_	ref=MATT_5.12
7	copiosa	copiosus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	advcl	_	ref=MATT_5.12
8	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	ref=MATT_5.12
9	in	in	ADP	R-	_	10	case	_	ref=MATT_5.12
10	caelis	caelum	NOUN	Nb	Case=Abl|Gender=Neut|Number=Plur	5	nmod	_	ref=MATT_5.12

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod	color:blue
1	quod	qui	PRON	Pr	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	3	obj:dir	_	ref=LUKE_5.8
2	cum	cum	SCONJ	G-	_	3	mark	_	ref=LUKE_5.8
3	videret	video	VERB	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	_	ref=LUKE_5.8
4	Simon	Simon	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	ref=LUKE_5.8
5	Petrus	Petrus	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	4	flat:name	_	ref=LUKE_5.8
6	procidit	procido	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_5.8
7	ad	ad	ADP	R-	_	8	case	_	ref=LUKE_5.8
8	genua	genu	NOUN	Nb	Case=Acc|Gender=Neut|Number=Plur	6	obl	_	ref=LUKE_5.8
9	Iesu	Iesus	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	ref=LUKE_5.8
10	dicens	dico	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	6	advcl	_	ref=LUKE_5.8

~~~


