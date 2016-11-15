

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is universal.

705 nodes (0%) are attached to their parents as `parataxis`.

613 instances of `parataxis` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.46099290780142.

The following 28 pairs of parts of speech are connected with `parataxis`: [la-pos/CONJ]()-[la-pos/VERB]() (393; 56% instances), [la-pos/VERB]()-[la-pos/VERB]() (78; 11% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (58; 8% instances), [la-pos/CONJ]()-[la-pos/ADJ]() (48; 7% instances), [la-pos/NOUN]()-[la-pos/VERB]() (19; 3% instances), [la-pos/VERB]()-[la-pos/NOUN]() (15; 2% instances), [la-pos/ADJ]()-[la-pos/VERB]() (14; 2% instances), [la-pos/CONJ]()-[la-pos/PRON]() (14; 2% instances), [la-pos/VERB]()-[la-pos/ADJ]() (13; 2% instances), [la-pos/PRON]()-[la-pos/VERB]() (10; 1% instances), [la-pos/ADV]()-[la-pos/VERB]() (9; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (6; 1% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (5; 1% instances), [la-pos/PUNCT]()-[la-pos/VERB]() (5; 1% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (4; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (1; 0% instances), [la-pos/INTJ]()-[la-pos/VERB]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/PRON]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (1; 0% instances), [la-pos/PRON]()-[la-pos/PROPN]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/PUNCT]()-[la-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	ens	ens	NOUN	C1|grn1|casA|gen3|stAV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	nsubj	_	_
2	autem	autem	CONJ	O4|stRL	_	0	root	_	_
3	quoddam	quidam	PRON	F1|grn1|casA|gen3|varA|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	1	nmod	_	_
4	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	_
5	in	in	ADP	S4|stRL	AdpType=Prep	6	case	_	_
6	anima	anima	NOUN	F1|grn1|casF|gen2|stNV	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	4	nmod	_	_
7	,	,	PUNCT	Punc	_	4	punct	_	_
8	quoddam	quidam	PRON	F1|grn1|casA|gen3|varA|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	4	conj	_	_
9	in	in	ADP	S4|stRL	AdpType=Prep	10	case	_	_
10	rebus	res	NOUN	E1|grn1|casO|gen2|stRS	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur	4	dep	_	_
11	extra	extra	ADP	S4|stRL	AdpType=Prep	12	case	_	_
12	animam	anima	NOUN	F1|grn1|casD|gen2|stNV	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	nmod	_	_
13	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	erunt	sum	VERB	N3|modA|tem3|gen9|stAV	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	inquit	inquio	VERB	N3|modA|tem1|gen6|stAE	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
4	,	,	PUNCT	Punc	_	7	punct	_	_
5	de	de	ADP	S4|stRL	AdpType=Prep	6	case	_	_
6	hominibus	homo	NOUN	C1|grn1|casO|gen1|stRS	Case=Abl|Degree=Pos|Gender=Masc|Number=Plur	7	dobj	_	_
7	loquens	loquor	VERB	L2|modM|tem1|grp1|casA|gen1|stAE	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	3	advcl	_	_
8	,	,	PUNCT	Punc	_	3	punct	_	_
9	sicut	sicut	SCONJ	O4|vgr1|stRL	_	10	mark	_	_
10	angeli	angelus	PROPN	B1|grn1|casJ|gen1|stNP	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	dep	_	_
11	dei	deus	PROPN	F1|grn1|casB|gen1|stNP	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	nmod	_	_
12	in	in	ADP	S4|stRL	AdpType=Prep	13	case	_	_
13	caelo	caelum	NOUN	B1|grn1|casF|gen3|vgr1|stRS	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	10	dep	_	_
14	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	et	et	CONJ	O4|stRL	_	0	root	_	_
2	sic	sic	ADV	O4|stRL	_	5	advmod	_	_
3	non	non	ADV	O4|stRL	_	5	neg	_	_
4	esset	sum	VERB	N3|modB|tem2|gen6|stAV	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	5	cop	_	_
5	causa	causa	NOUN	A1|grn1|casA|gen2|vgr1|stAN	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	parataxis	_	_
6	prima	primus	ADJ	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	amod	_	_
7	,	,	PUNCT	Punc	_	5	punct	_	_
8	quod	qui	PRON	F1|grn1|casA|gen3|stRL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	10	nsubjpass	_	_
9	supra	supra	ADP	S4|stRL	AdpType=Prep	10	advmod	_	_
10	habitum	habeo	VERB	K2|modM|tem4|grp1|casA|gen3|stAV	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	conj	_	_
11	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	auxpass	_	_
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

392 nodes (0%) are attached to their parents as `parataxis`.

213 instances of `parataxis` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.36479591836735.

The following 16 pairs of parts of speech are connected with `parataxis`: [la-pos/VERB]()-[la-pos/VERB]() (300; 77% instances), [la-pos/ADJ]()-[la-pos/VERB]() (18; 5% instances), [la-pos/NOUN]()-[la-pos/VERB]() (16; 4% instances), [la-pos/VERB]()-[la-pos/NOUN]() (12; 3% instances), [la-pos/ADV]()-[la-pos/VERB]() (11; 3% instances), [la-pos/VERB]()-[la-pos/ADJ]() (10; 3% instances), [la-pos/VERB]()-[la-pos/ADV]() (8; 2% instances), [la-pos/PRON]()-[la-pos/VERB]() (4; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (4; 1% instances), [la-pos/VERB]()-[la-pos/CONJ]() (2; 1% instances), [la-pos/VERB]()-[la-pos/PROPN]() (2; 1% instances), [la-pos/ADV]()-[la-pos/PRON]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/VERB]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/VERB]() (1; 0% instances), [la-pos/X]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis	color:blue
1	quousque	quousque	ADV	Du	PronType=Int	5	advmod	_	_
2	inquit	inquam	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
3	hunc	hic	ADJ	Pd	Case=Acc|Gender=Masc|Number=Sing	4	nmod	_	_
4	regem	rex	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	5	dobj	_	_
5	feremus	fero	VERB	V-	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 parataxis	color:blue
1	multo	multo	ADV	Df	_	6	advmod	_	_
2	haec	hic	ADJ	Pd	Case=Nom|Gender=Fem|Number=Sing	5	nmod	_	_
3	inquam	inquam	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	parataxis	_	_
4	nostra	noster	PRON	Ps	Case=Nom|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod	_	_
5	res	res	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	maior	magnus	ADJ	A-	Case=Nom|Degree=Cmp|Gender=Fem,Masc|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 parataxis	color:blue
1	sic	sic	ADV	Df	_	4	nsubj	_	_
2	inquam	inquam	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	_	_
3	in	in	ADP	R-	_	4	case	_	_
4	animo	animus	NOUN	Nb	Case=Abl|Gender=Masc|Number=Sing	0	root	_	_
5	est	sum	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_

~~~


