

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

5326 nodes (11%) are attached to their parents as `nmod`.

2859 instances of `nmod` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.50563274502441.

The following 33 pairs of parts of speech are connected with `nmod`: [la-pos/VERB]()-[la-pos/NOUN]() (2713; 51% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (1638; 31% instances), [la-pos/VERB]()-[la-pos/PRON]() (390; 7% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (203; 4% instances), [la-pos/VERB]()-[la-pos/VERB]() (65; 1% instances), [la-pos/ADV]()-[la-pos/NOUN]() (63; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (43; 1% instances), [la-pos/VERB]()-[la-pos/ADJ]() (41; 1% instances), [la-pos/ADJ]()-[la-pos/PRON]() (36; 1% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (20; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (18; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (13; 0% instances), [la-pos/NUM]()-[la-pos/NOUN]() (10; 0% instances), [la-pos/VERB]()-[la-pos/INTJ]() (10; 0% instances), [la-pos/ADJ]()-[la-pos/VERB]() (9; 0% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (9; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (7; 0% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (6; 0% instances), [la-pos/VERB]()-[la-pos/X]() (6; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (4; 0% instances), [la-pos/CONJ]()-[la-pos/VERB]() (3; 0% instances), [la-pos/INTJ]()-[la-pos/NOUN]() (3; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (3; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (2; 0% instances), [la-pos/SCONJ]()-[la-pos/VERB]() (2; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/VERB]()-[la-pos/CONJ]() (1; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (1; 0% instances), [la-pos/X]()-[la-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 nmod	color:blue
1	Curris	curro1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	comma1	PUNCT	u--------	_	1	punct	_	_
3	stupes	stupeo1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
4	,	comma1	PUNCT	u--------	_	1	punct	_	_
5	satagis	satago1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
6	,	comma1	PUNCT	u--------	_	8	punct	_	_
7	tanquam	tamquam1	ADV	d--------	_	8	mark	_	_
8	mus	mus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
9	in	in1	ADP	r--------	_	10	case	_	_
10	matella	matella1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	Curris	curro1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	comma1	PUNCT	u--------	_	1	punct	_	_
3	stupes	stupeo1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
4	,	comma1	PUNCT	u--------	_	1	punct	_	_
5	satagis	satago1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
6	,	comma1	PUNCT	u--------	_	8	punct	_	_
7	tanquam	tamquam1	ADV	d--------	_	8	mark	_	_
8	mus	mus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
9	in	in1	ADP	r--------	_	10	case	_	_
10	matella	matella1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	Si	si1	SCONJ	c--------	_	5	mark	_	_
2	quid	quis2	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	5	dobj	_	_
3	ab	ab1	ADP	r--------	_	4	case	_	_
4	illa	ille1	PRON	p-s---fb-	Case=Abl|Gender=Fem|Number=Sing	5	nmod	_	_
5	petii	peto1	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	_
6	,	comma1	PUNCT	u--------	_	5	punct	_	_
7	nunquam	numquam1	ADV	d--------	_	9	advmod	_	_
8	mihi	ego1	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing	9	dobj	_	_
9	negatum	nego1	VERB	v-srppnn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITT)

This relation is universal.

39502 nodes (15%) are attached to their parents as `nmod`.

21207 instances of `nmod` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.12103184648879.

The following 54 pairs of parts of speech are connected with `nmod`: [la-pos/VERB]()-[la-pos/NOUN]() (11953; 30% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (11422; 29% instances), [la-pos/NOUN]()-[la-pos/PRON]() (7501; 19% instances), [la-pos/VERB]()-[la-pos/PRON]() (3888; 10% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (1118; 3% instances), [la-pos/ADJ]()-[la-pos/PRON]() (637; 2% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (589; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (445; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (369; 1% instances), [la-pos/ADV]()-[la-pos/NOUN]() (299; 1% instances), [la-pos/NUM]()-[la-pos/NOUN]() (237; 1% instances), [la-pos/CONJ]()-[la-pos/PRON]() (155; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (144; 0% instances), [la-pos/NUM]()-[la-pos/X]() (107; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (84; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (79; 0% instances), [la-pos/VERB]()-[la-pos/VERB]() (65; 0% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (64; 0% instances), [la-pos/X]()-[la-pos/X]() (58; 0% instances), [la-pos/PRON]()-[la-pos/ADV]() (46; 0% instances), [la-pos/VERB]()-[la-pos/ADJ]() (42; 0% instances), [la-pos/NOUN]()-[la-pos/X]() (25; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (19; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (18; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (16; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (13; 0% instances), [la-pos/ADJ]()-[la-pos/VERB]() (10; 0% instances), [la-pos/VERB]()-[la-pos/INTJ]() (10; 0% instances), [la-pos/PUNCT]()-[la-pos/PRON]() (9; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (8; 0% instances), [la-pos/DET]()-[la-pos/ADV]() (7; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (7; 0% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (7; 0% instances), [la-pos/VERB]()-[la-pos/X]() (7; 0% instances), [la-pos/ADP]()-[la-pos/PRON]() (5; 0% instances), [la-pos/PRON]()-[la-pos/X]() (5; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (4; 0% instances), [la-pos/NOUN]()-[la-pos/ADP]() (4; 0% instances), [la-pos/CONJ]()-[la-pos/VERB]() (3; 0% instances), [la-pos/INTJ]()-[la-pos/NOUN]() (3; 0% instances), [la-pos/X]()-[la-pos/PRON]() (3; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (2; 0% instances), [la-pos/SCONJ]()-[la-pos/VERB]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (1; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/X]() (1; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/SCONJ]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/VERB]()-[la-pos/ADP]() (1; 0% instances), [la-pos/VERB]()-[la-pos/CONJ]() (1; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 nmod	color:blue
1	Curris	curro1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	comma1	PUNCT	u--------	_	1	punct	_	_
3	stupes	stupeo1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
4	,	comma1	PUNCT	u--------	_	1	punct	_	_
5	satagis	satago1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
6	,	comma1	PUNCT	u--------	_	8	punct	_	_
7	tanquam	tamquam1	ADV	d--------	_	8	mark	_	_
8	mus	mus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
9	in	in1	ADP	r--------	_	10	case	_	_
10	matella	matella1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	Curris	curro1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	comma1	PUNCT	u--------	_	1	punct	_	_
3	stupes	stupeo1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
4	,	comma1	PUNCT	u--------	_	1	punct	_	_
5	satagis	satago1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
6	,	comma1	PUNCT	u--------	_	8	punct	_	_
7	tanquam	tamquam1	ADV	d--------	_	8	mark	_	_
8	mus	mus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
9	in	in1	ADP	r--------	_	10	case	_	_
10	matella	matella1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nmod	color:blue
1	quibus	qui1	PRON	p-p---md-	Case=Dat|Gender=Masc|Number=Plur	9	nmod	_	_
2	profecto	profecto1	ADV	d--------	_	9	advmod	_	_
3	contra	contra1	ADP	r--------	_	4	case	_	_
4	naturam	natura1	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	9	nmod	_	_
5	corpus	corpus1	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	Ellipsis=conj
6	voluptati	voluptas1	NOUN	n-s---fd-	Case=Dat|Gender=Fem|Number=Sing	5	xcomp	_	_
7	,	comma1	PUNCT	u--------	_	9	punct	_	_
8	anima	anima1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
9	oneri	onus1	NOUN	n-s---nd-	Case=Dat|Gender=Neut|Number=Sing	0	root	_	_
10	fuit	sum1	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

61434 nodes (37%) are attached to their parents as `nmod`.

32926 instances of `nmod` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.09830061529446.

The following 78 pairs of parts of speech are connected with `nmod`: [la-pos/VERB]()-[la-pos/NOUN]() (17079; 28% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (15314; 25% instances), [la-pos/NOUN]()-[la-pos/PRON]() (12783; 21% instances), [la-pos/VERB]()-[la-pos/PRON]() (5063; 8% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (2377; 4% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (1468; 2% instances), [la-pos/ADJ]()-[la-pos/PRON]() (1006; 2% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (948; 2% instances), [la-pos/PRON]()-[la-pos/NOUN]() (655; 1% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (596; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (566; 1% instances), [la-pos/ADV]()-[la-pos/NOUN]() (489; 1% instances), [la-pos/VERB]()-[la-pos/PROPN]() (439; 1% instances), [la-pos/NUM]()-[la-pos/NOUN]() (375; 1% instances), [la-pos/VERB]()-[la-pos/ADJ]() (258; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (213; 0% instances), [la-pos/CONJ]()-[la-pos/PRON]() (160; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (145; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (116; 0% instances), [la-pos/PROPN]()-[la-pos/PRON]() (116; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (115; 0% instances), [la-pos/NUM]()-[la-pos/X]() (107; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (98; 0% instances), [la-pos/PROPN]()-[la-pos/ADJ]() (72; 0% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (69; 0% instances), [la-pos/VERB]()-[la-pos/VERB]() (65; 0% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (64; 0% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (60; 0% instances), [la-pos/X]()-[la-pos/X]() (58; 0% instances), [la-pos/PRON]()-[la-pos/ADV]() (46; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (41; 0% instances), [la-pos/X]()-[la-pos/PRON]() (34; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (33; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (33; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (27; 0% instances), [la-pos/NOUN]()-[la-pos/X]() (25; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (22; 0% instances), [la-pos/NUM]()-[la-pos/NUM]() (21; 0% instances), [la-pos/X]()-[la-pos/ADJ]() (20; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (19; 0% instances), [la-pos/PRON]()-[la-pos/PROPN]() (18; 0% instances), [la-pos/ADV]()-[la-pos/PROPN]() (16; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (16; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (15; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (14; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (13; 0% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (13; 0% instances), [la-pos/ADJ]()-[la-pos/VERB]() (12; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (12; 0% instances), [la-pos/VERB]()-[la-pos/INTJ]() (10; 0% instances), [la-pos/INTJ]()-[la-pos/NOUN]() (9; 0% instances), [la-pos/PUNCT]()-[la-pos/PRON]() (9; 0% instances), [la-pos/X]()-[la-pos/PROPN]() (8; 0% instances), [la-pos/DET]()-[la-pos/ADV]() (7; 0% instances), [la-pos/VERB]()-[la-pos/X]() (7; 0% instances), [la-pos/ADP]()-[la-pos/PRON]() (6; 0% instances), [la-pos/PRON]()-[la-pos/X]() (6; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (5; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (5; 0% instances), [la-pos/NOUN]()-[la-pos/ADP]() (4; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (4; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (4; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (4; 0% instances), [la-pos/ADP]()-[la-pos/PROPN]() (3; 0% instances), [la-pos/CONJ]()-[la-pos/VERB]() (3; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (2; 0% instances), [la-pos/INTJ]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/SCONJ]()-[la-pos/VERB]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/NUM]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (1; 0% instances), [la-pos/ADV]()-[la-pos/NUM]() (1; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/X]() (1; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/SCONJ]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/VERB]()-[la-pos/ADP]() (1; 0% instances), [la-pos/VERB]()-[la-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 nmod	color:blue
1	Curris	curro1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	comma1	PUNCT	u--------	_	1	punct	_	_
3	stupes	stupeo1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
4	,	comma1	PUNCT	u--------	_	1	punct	_	_
5	satagis	satago1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
6	,	comma1	PUNCT	u--------	_	8	punct	_	_
7	tanquam	tamquam1	ADV	d--------	_	8	mark	_	_
8	mus	mus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
9	in	in1	ADP	r--------	_	10	case	_	_
10	matella	matella1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	Curris	curro1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	comma1	PUNCT	u--------	_	1	punct	_	_
3	stupes	stupeo1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
4	,	comma1	PUNCT	u--------	_	1	punct	_	_
5	satagis	satago1	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
6	,	comma1	PUNCT	u--------	_	8	punct	_	_
7	tanquam	tamquam1	ADV	d--------	_	8	mark	_	_
8	mus	mus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	_
9	in	in1	ADP	r--------	_	10	case	_	_
10	matella	matella1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nmod	color:blue
1	quibus	qui1	PRON	p-p---md-	Case=Dat|Gender=Masc|Number=Plur	9	nmod	_	_
2	profecto	profecto1	ADV	d--------	_	9	advmod	_	_
3	contra	contra1	ADP	r--------	_	4	case	_	_
4	naturam	natura1	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	9	nmod	_	_
5	corpus	corpus1	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	Ellipsis=conj
6	voluptati	voluptas1	NOUN	n-s---fd-	Case=Dat|Gender=Fem|Number=Sing	5	xcomp	_	_
7	,	comma1	PUNCT	u--------	_	9	punct	_	_
8	anima	anima1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
9	oneri	onus1	NOUN	n-s---nd-	Case=Dat|Gender=Neut|Number=Sing	0	root	_	_
10	fuit	sum1	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_

~~~


