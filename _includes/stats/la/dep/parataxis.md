

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITT)

This relation is universal.

688 nodes (0%) are attached to their parents as `parataxis`.

591 instances of `parataxis` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.55377906976744.

The following 25 pairs of parts of speech are connected with `parataxis`: [la-pos/CONJ]()-[la-pos/VERB]() (378; 55% instances), [la-pos/VERB]()-[la-pos/VERB]() (71; 10% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (62; 9% instances), [la-pos/CONJ]()-[la-pos/ADJ]() (50; 7% instances), [la-pos/NOUN]()-[la-pos/VERB]() (20; 3% instances), [la-pos/CONJ]()-[la-pos/PRON]() (15; 2% instances), [la-pos/VERB]()-[la-pos/ADJ]() (15; 2% instances), [la-pos/VERB]()-[la-pos/NOUN]() (15; 2% instances), [la-pos/ADJ]()-[la-pos/VERB]() (14; 2% instances), [la-pos/PRON]()-[la-pos/VERB]() (10; 1% instances), [la-pos/ADV]()-[la-pos/VERB]() (8; 1% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (5; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (5; 1% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (4; 1% instances), [la-pos/PUNCT]()-[la-pos/VERB]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/PRON]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (2; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (1; 0% instances), [la-pos/INTJ]()-[la-pos/VERB]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (1; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	et	et	CONJ	O4	_	0	root	_	_
2	ita	ita	ADV	O4	_	5	cc	_	_
3	ad	ad	ADP	S4	AdpType=Prep	4	case	_	_
4	finem	finis	NOUN	C1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	dobj	_	_
5	ordinatur	ordino	VERB	J3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	parataxis	_	_
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	et	et	CONJ	O4	_	5	cc	_	_
8	ipsa	ipse	PRON	F1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem,Prs	12	nsubj	_	_
9	non	non	ADV	O4	_	12	neg	_	_
10	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
11	ultimus	ulterior	ADJ	B1|grn3|casA|gen1	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	12	amod	_	_
12	finis	finis	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	_
13	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 parataxis	color:blue
1	non	non	ADV	O4	_	5	neg	_	_
2	quod	quod	SCONJ	O4	_	5	cc	_	_
3	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	nsubj	_	_
4	videri	video	VERB	K3|modQ|tem1	Tense=Pres|VerbForm=Inf|Voice=Pass	5	xcomp	_	_
5	possit	possum	VERB	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	9	parataxis	_	_
6	,	,	PUNCT	Punc	_	9	punct	_	_
7	sed	sed	CONJ	O4|vgr1	_	9	cc	_	_
8	formam	forma	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	dobj	_	_
9	vidit	video	VERB	K3|modA|tem4|gen6|vgr1	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	in	in	ADP	S4	AdpType=Prep	11	case	_	_
11	qua	qui	PRON	F1|grn1|casF|gen2|varA	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing|PronType=Rel	13	nmod	_	_
12	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	nsubjpass	_	_
13	locutus	loquor	VERB	L2|modM|tem4|grp1|casA|gen1|vgr1	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
14	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	auxpass	_	_
15	ei	is	PRON	F1|grn1|casC|gen1	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|PronType=Dem,Prs	13	dobj	_	_
16	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	et	et	CONJ	O4	_	0	root	_	_
2	sic	sic	ADV	O4	_	5	cc	_	_
3	non	non	ADV	O4	_	5	neg	_	_
4	esset	sum	VERB	N3|modB|tem2|gen6	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	5	cop	_	_
5	causa	causa	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	parataxis	_	_
6	prima	primus	ADJ	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	amod	_	_
7	,	,	PUNCT	Punc	_	5	punct	_	_
8	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	10	nsubjpass	_	_
9	supra	supra	ADP	S4	AdpType=Prep	10	advmod	_	_
10	habitum	habeo	VERB	K2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	conj	_	_
11	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	auxpass	_	_
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

1080 nodes (1%) are attached to their parents as `parataxis`.

804 instances of `parataxis` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.84814814814815.

The following 32 pairs of parts of speech are connected with `parataxis`: [la-pos/CONJ]()-[la-pos/VERB]() (379; 35% instances), [la-pos/VERB]()-[la-pos/VERB]() (371; 34% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (62; 6% instances), [la-pos/CONJ]()-[la-pos/ADJ]() (50; 5% instances), [la-pos/NOUN]()-[la-pos/VERB]() (36; 3% instances), [la-pos/ADJ]()-[la-pos/VERB]() (32; 3% instances), [la-pos/VERB]()-[la-pos/NOUN]() (27; 3% instances), [la-pos/VERB]()-[la-pos/ADJ]() (25; 2% instances), [la-pos/ADV]()-[la-pos/VERB]() (19; 2% instances), [la-pos/CONJ]()-[la-pos/PRON]() (15; 1% instances), [la-pos/PRON]()-[la-pos/VERB]() (14; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (9; 1% instances), [la-pos/VERB]()-[la-pos/ADV]() (8; 1% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (5; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (4; 0% instances), [la-pos/PUNCT]()-[la-pos/VERB]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/PRON]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/VERB]()-[la-pos/CONJ]() (2; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (2; 0% instances), [la-pos/VERB]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (1; 0% instances), [la-pos/INTJ]()-[la-pos/VERB]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (1; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PROPN]()-[la-pos/VERB]() (1; 0% instances), [la-pos/X]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	et	et	CONJ	O4	_	0	root	_	_
2	ita	ita	ADV	O4	_	5	cc	_	_
3	ad	ad	ADP	S4	AdpType=Prep	4	case	_	_
4	finem	finis	NOUN	C1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	dobj	_	_
5	ordinatur	ordino	VERB	J3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	parataxis	_	_
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	et	et	CONJ	O4	_	5	cc	_	_
8	ipsa	ipse	PRON	F1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem,Prs	12	nsubj	_	_
9	non	non	ADV	O4	_	12	neg	_	_
10	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
11	ultimus	ulterior	ADJ	B1|grn3|casA|gen1	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	12	amod	_	_
12	finis	finis	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	_
13	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	et	et	CONJ	O4	_	0	root	_	_
2	sic	sic	ADV	O4	_	5	cc	_	_
3	non	non	ADV	O4	_	5	neg	_	_
4	esset	sum	VERB	N3|modB|tem2|gen6	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	5	cop	_	_
5	causa	causa	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	parataxis	_	_
6	prima	primus	ADJ	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	amod	_	_
7	,	,	PUNCT	Punc	_	5	punct	_	_
8	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	10	nsubjpass	_	_
9	supra	supra	ADP	S4	AdpType=Prep	10	advmod	_	_
10	habitum	habeo	VERB	K2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	conj	_	_
11	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	auxpass	_	_
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITT)

This relation is universal.

688 nodes (0%) are attached to their parents as `parataxis`.

591 instances of `parataxis` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.55377906976744.

The following 25 pairs of parts of speech are connected with `parataxis`: [la-pos/CONJ]()-[la-pos/VERB]() (378; 55% instances), [la-pos/VERB]()-[la-pos/VERB]() (71; 10% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (62; 9% instances), [la-pos/CONJ]()-[la-pos/ADJ]() (50; 7% instances), [la-pos/NOUN]()-[la-pos/VERB]() (20; 3% instances), [la-pos/CONJ]()-[la-pos/PRON]() (15; 2% instances), [la-pos/VERB]()-[la-pos/ADJ]() (15; 2% instances), [la-pos/VERB]()-[la-pos/NOUN]() (15; 2% instances), [la-pos/ADJ]()-[la-pos/VERB]() (14; 2% instances), [la-pos/PRON]()-[la-pos/VERB]() (10; 1% instances), [la-pos/ADV]()-[la-pos/VERB]() (8; 1% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (5; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (5; 1% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (4; 1% instances), [la-pos/PUNCT]()-[la-pos/VERB]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/PRON]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (2; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/ADV]() (1; 0% instances), [la-pos/INTJ]()-[la-pos/VERB]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (1; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	et	et	CONJ	O4	_	0	root	_	_
2	ita	ita	ADV	O4	_	5	cc	_	_
3	ad	ad	ADP	S4	AdpType=Prep	4	case	_	_
4	finem	finis	NOUN	C1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	dobj	_	_
5	ordinatur	ordino	VERB	J3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	parataxis	_	_
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	et	et	CONJ	O4	_	5	cc	_	_
8	ipsa	ipse	PRON	F1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem,Prs	12	nsubj	_	_
9	non	non	ADV	O4	_	12	neg	_	_
10	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
11	ultimus	ulterior	ADJ	B1|grn3|casA|gen1	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	12	amod	_	_
12	finis	finis	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	_
13	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 parataxis	color:blue
1	non	non	ADV	O4	_	5	neg	_	_
2	quod	quod	SCONJ	O4	_	5	cc	_	_
3	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	nsubj	_	_
4	videri	video	VERB	K3|modQ|tem1	Tense=Pres|VerbForm=Inf|Voice=Pass	5	xcomp	_	_
5	possit	possum	VERB	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	9	parataxis	_	_
6	,	,	PUNCT	Punc	_	9	punct	_	_
7	sed	sed	CONJ	O4|vgr1	_	9	cc	_	_
8	formam	forma	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	dobj	_	_
9	vidit	video	VERB	K3|modA|tem4|gen6|vgr1	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	in	in	ADP	S4	AdpType=Prep	11	case	_	_
11	qua	qui	PRON	F1|grn1|casF|gen2|varA	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing|PronType=Rel	13	nmod	_	_
12	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	nsubjpass	_	_
13	locutus	loquor	VERB	L2|modM|tem4|grp1|casA|gen1|vgr1	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
14	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	auxpass	_	_
15	ei	is	PRON	F1|grn1|casC|gen1	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|PronType=Dem,Prs	13	dobj	_	_
16	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	et	et	CONJ	O4	_	0	root	_	_
2	sic	sic	ADV	O4	_	5	cc	_	_
3	non	non	ADV	O4	_	5	neg	_	_
4	esset	sum	VERB	N3|modB|tem2|gen6	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	5	cop	_	_
5	causa	causa	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	parataxis	_	_
6	prima	primus	ADJ	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	amod	_	_
7	,	,	PUNCT	Punc	_	5	punct	_	_
8	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	10	nsubjpass	_	_
9	supra	supra	ADP	S4	AdpType=Prep	10	advmod	_	_
10	habitum	habeo	VERB	K2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	conj	_	_
11	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	auxpass	_	_
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


