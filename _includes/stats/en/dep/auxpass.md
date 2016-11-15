

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

1605 nodes (1%) are attached to their parents as `auxpass`.

1568 instances of `auxpass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22554517133956.

The following 7 pairs of parts of speech are connected with `auxpass`: [en-pos/VERB]()-[en-pos/AUX]() (1550; 97% instances), [en-pos/VERB]()-[en-pos/VERB]() (24; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (23; 1% instances), [en-pos/ADV]()-[en-pos/AUX]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/AUX]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/AUX]() (1; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 auxpass	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	_	_
2	months	month	NOUN	NNS	Number=Plur	3	nmod:npmod	_	_
3	later	later	ADV	RB	_	7	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubjpass	_	_
6	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	auxpass	_	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 auxpass	color:blue
1	Aplo.	aplo.	NOUN	NN	Number=Sing	2	compound	_	_
2	lineatus	lineatus	NOUN	NN	Number=Sing	6	nsubjpass	_	_
3	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	auxpass	_	_
4	wide	wide	ADJ	JJ	Degree=Pos	6	advmod	_	SpaceAfter=No
5	-	-	PUNCT	HYPH	_	6	punct	_	SpaceAfter=No
6	spread	spread	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	over	over	ADP	IN	_	9	case	_	_
8	southern	southern	ADJ	JJ	Degree=Pos	9	amod	_	_
9	India	India	PROPN	NNP	Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 auxpass	color:blue
1	Try	try	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	googling	google	VERB	VBG	VerbForm=Ger	1	xcomp	_	_
3	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	dobj	_	_
4	or	or	CONJ	CC	_	1	cc	_	_
5	type	type	VERB	VB	Mood=Imp|VerbForm=Fin	1	conj	_	_
6	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
7	into	into	ADP	IN	_	8	case	_	_
8	youtube	youtube	PROPN	NNP	Number=Sing	5	nmod	_	_
9	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	12	nsubjpass	_	_
10	might	might	AUX	MD	VerbForm=Fin	12	aux	_	_
11	get	get	VERB	VB	VerbForm=Inf	12	auxpass	_	_
12	lucky	lucky	ADJ	JJ	Degree=Pos	1	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

495 nodes (1%) are attached to their parents as `auxpass`.

495 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11919191919192.

The following 3 pairs of parts of speech are connected with `auxpass`: [en-pos/VERB]()-[en-pos/AUX]() (490; 99% instances), [en-pos/ADJ]()-[en-pos/AUX]() (3; 1% instances), [en-pos/ADV]()-[en-pos/AUX]() (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 auxpass	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBD	_	0	root	_	_
3	_	_	ADP	IN	_	5	case	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NNS	_	2	nmod	_	_
6	_	_	PUNCT	,	_	5	punct	_	_
7	_	_	NOUN	NN	_	5	conj	_	_
8	_	_	PRON	WDT	_	11	nsubjpass	_	_
9	_	_	AUX	VBD	_	11	auxpass	_	_
10	_	_	ADV	RB	_	11	advmod	_	_
11	_	_	VERB	VBN	_	7	acl:relcl	_	_
12	_	_	ADP	IN	_	11	nmod	_	_
13	_	_	CONJ	CC	_	2	cc	_	_
14	_	_	PRON	PRP	_	15	nsubj	_	_
15	_	_	VERB	VBD	_	2	conj	_	_
16	_	_	ADP	IN	_	17	case	_	_
17	_	_	PRON	NN	_	15	nmod	_	_
18	_	_	PRON	WP	_	21	iobj	_	_
19	_	_	PRON	PRP	_	21	nsubj	_	_
20	_	_	AUX	MD	_	21	aux	_	_
21	_	_	VERB	VB	_	17	acl:relcl	_	_
22	_	_	DET	PRP$	_	24	nmod:poss	_	_
23	_	_	ADJ	JJ	_	24	amod	_	_
24	_	_	NOUN	NNS	_	21	dobj	_	_
25	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 auxpass	color:blue
1	_	_	PRON	PRP	_	3	nsubjpass	_	_
2	_	_	AUX	VBZ	_	3	auxpass	_	_
3	_	_	ADJ	JJ	_	0	root	_	_
4	_	_	ADP	IN	_	5	case	_	_
5	_	_	NUM	CD	_	3	nmod	_	_
6	_	_	ADP	IN	_	7	case	_	_
7	_	_	NUM	CD	_	3	nmod	_	_
8	_	_	CONJ	CC	_	3	cc	_	_
9	_	_	PRON	PRP	_	12	nsubj	_	_
10	_	_	VERB	VBZ	_	12	cop	_	_
11	_	_	ADP	IN	_	12	case	_	_
12	_	_	ADJ	JJ	_	3	conj	_	_
13	_	_	ADP	IN	_	14	case	_	_
14	_	_	NOUN	NN	_	12	nmod	_	_
15	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 auxpass	color:blue
1	_	_	ADV	RB	_	6	advmod	_	_
2	_	_	ADP	IN	_	4	case	_	_
3	_	_	DET	DT	_	4	det	_	_
4	_	_	NOUN	NN	_	5	nmod	_	_
5	_	_	NOUN	NN	_	6	nsubj	_	_
6	_	_	VERB	VBZ	_	0	root	_	_
7	_	_	PUNCT	``	_	8	punct	_	_
8	_	_	NOUN	NNS	_	6	dobj	_	_
9	_	_	ADJ	JJ	_	8	xcomp	_	_
10	_	_	PUNCT	''	_	8	punct	_	_
11	_	_	CONJ	CC	_	6	cc	_	_
12	_	_	DET	DT	_	13	neg	_	_
13	_	_	NOUN	NN	_	15	nmod	_	_
14	_	_	PRON	PRP	_	15	nsubj	_	_
15	_	_	VERB	VBD	_	6	conj	_	_
16	_	_	PART	TO	_	17	mark	_	_
17	_	_	VERB	VBD	_	15	xcomp	_	_
18	_	_	ADJ	JJ	_	19	amod	_	_
19	_	_	SYM	$	_	17	dobj	_	_
20	_	_	NUM	CD	_	19	nummod	_	_
21	_	_	CONJ	CC	_	15	cc	_	_
22	_	_	NOUN	NN	_	24	nsubjpass	_	_
23	_	_	AUX	VBD	_	24	auxpass	_	_
24	_	_	ADV	RB	_	15	conj	_	_
25	_	_	ADP	IN	_	27	case	_	_
26	_	_	ADP	IN	_	25	mwe	_	_
27	_	_	VERB	VBG	_	24	nmod	_	_
28	_	_	PRON	NN	_	27	dobj	_	_
29	_	_	PUNCT	.	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is universal.

503 nodes (1%) are attached to their parents as `auxpass`.

501 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20675944333996.

The following 2 pairs of parts of speech are connected with `auxpass`: [en-pos/VERB]()-[en-pos/AUX]() (501; 100% instances), [en-pos/VERB]()-[en-pos/VERB]() (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 auxpass	color:blue
1	The	_	DET	DEF	_	3	det	_	_
2	converted	_	ADJ	PASS	_	3	amod	_	_
3	data	_	NOUN	PL	_	6	nsubjpass	_	_
4	will	_	AUX	PRES-AUX	_	6	aux	_	_
5	be	_	AUX	INF	_	6	auxpass	_	_
6	displayed	_	VERB	PASS	_	0	root	_	_
7	as	_	ADP	_	_	12	case	_	_
8	Mom	_	NOUN	SG	_	10	amod	_	_
9	's	_	PART	GEN	_	8	case	_	_
10	Boston	_	PROPN	SG	_	12	compound	_	_
11	Crab	_	NOUN	SG	_	10	name	_	_
12	Meat	_	NOUN	SG	_	6	nmod	_	_
13	.	_	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 auxpass	color:blue
1	It	_	PRON	PERS-SG	_	4	nsubjpass	_	_
2	had	_	AUX	PAST-AUX	_	4	aux	_	_
3	got	_	VERB	PERF	_	4	auxpass	_	_
4	filled	_	VERB	PASS	_	0	root	_	_
5	since	_	ADP	_	_	7	case	_	_
6	my	_	PRON	P1SG-GEN	_	7	nmod:poss	_	_
7	boyhood	_	NOUN	SG	_	4	nmod	_	_
8	with	_	ADP	_	_	9	case	_	_
9	rivers	_	NOUN	PL	_	4	nmod	_	_
10	and	_	CONJ	_	_	9	cc	_	_
11	lakes	_	NOUN	PL	_	9	conj	_	_
12	and	_	CONJ	_	_	9	cc	_	_
13	names	_	NOUN	PL	_	9	conj	_	_
14	.	_	PUNCT	Period	_	4	punct	_	_

~~~


