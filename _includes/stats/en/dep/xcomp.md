

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

3571 nodes (1%) are attached to their parents as `xcomp`.

3560 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41332959955195.

The following 25 pairs of parts of speech are connected with `xcomp`: [en-pos/VERB]()-[en-pos/VERB]() (2341; 66% instances), [en-pos/VERB]()-[en-pos/ADJ]() (655; 18% instances), [en-pos/ADJ]()-[en-pos/VERB]() (235; 7% instances), [en-pos/VERB]()-[en-pos/NOUN]() (187; 5% instances), [en-pos/VERB]()-[en-pos/PROPN]() (66; 2% instances), [en-pos/VERB]()-[en-pos/ADV]() (24; 1% instances), [en-pos/VERB]()-[en-pos/PART]() (13; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (9; 0% instances), [en-pos/VERB]()-[en-pos/PRON]() (7; 0% instances), [en-pos/ADV]()-[en-pos/VERB]() (5; 0% instances), [en-pos/AUX]()-[en-pos/VERB]() (5; 0% instances), [en-pos/ADJ]()-[en-pos/PART]() (4; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (3; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (2; 0% instances), [en-pos/AUX]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (1; 0% instances), [en-pos/NUM]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/X]() (1; 0% instances), [en-pos/SYM]()-[en-pos/VERB]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances), [en-pos/VERB]()-[en-pos/AUX]() (1; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	When	when	ADV	WRB	PronType=Int	3	mark	_	_
2	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
3	saw	see	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	advcl	_	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	_
5	cartoon	cartoon	NOUN	NN	Number=Sing	3	dobj	_	_
6	of	of	ADP	IN	_	8	case	_	_
7	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	prophet	prophet	NOUN	NN	Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	_	_
10	people	people	NOUN	NNS	Number=Plur	11	nsubj	_	_
11	had	have	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
12	to	to	PART	TO	_	13	mark	_	_
13	die	die	VERB	VB	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	going	go	VERB	VBG	VerbForm=Ger	0	root	_	_
4	out	out	ADV	RB	_	3	advmod	_	_
5	tonight	tonight	NOUN	NN	Number=Sing	3	nmod:tmod	_	_
6	to	to	PART	TO	_	8	mark	_	_
7	get	get	VERB	VB	VerbForm=Inf	8	aux	_	_
8	wasted	wasted	ADJ	JJ	Degree=Pos	3	xcomp	_	_
9	if	if	SCONJ	IN	_	12	mark	_	_
10	anyone	anyone	NOUN	NN	Number=Sing	12	nsubj	_	_
11	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	interested	interested	ADJ	JJ	Degree=Pos	3	advcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	the	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
2	following	follow	VERB	VBG	VerbForm=Ger	3	amod	_	_
3	weekend	weekend	NOUN	NN	Number=Sing	7	nmod:tmod	_	_
4	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	will	will	AUX	MD	VerbForm=Fin	7	aux	_	_
6	be	be	VERB	VB	VerbForm=Inf	7	cop	_	_
7	ready	ready	ADJ	JJ	Degree=Pos	0	root	_	_
8	to	to	PART	TO	_	9	mark	_	_
9	rock	rock	VERB	VB	VerbForm=Inf	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

2317 nodes (2%) are attached to their parents as `xcomp`.

2310 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1739318083729.

The following 22 pairs of parts of speech are connected with `xcomp`: [en-pos/VERB]()-[en-pos/VERB]() (1727; 75% instances), [en-pos/VERB]()-[en-pos/ADJ]() (313; 14% instances), [en-pos/ADJ]()-[en-pos/VERB]() (153; 7% instances), [en-pos/VERB]()-[en-pos/NOUN]() (56; 2% instances), [en-pos/NOUN]()-[en-pos/VERB]() (13; 1% instances), [en-pos/VERB]()-[en-pos/PROPN]() (11; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (8; 0% instances), [en-pos/AUX]()-[en-pos/VERB]() (7; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (4; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/ADV]()-[en-pos/VERB]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (3; 0% instances), [en-pos/VERB]()-[en-pos/PART]() (3; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (2; 0% instances), [en-pos/VERB]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/AUX]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NUM]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (1; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 xcomp	color:blue
1	_	_	PRON	EX	_	2	expl	_	_
2	_	_	VERB	VBZ	_	0	root	_	_
3	_	_	DET	DT	_	5	det	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NN	_	2	nsubj	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	5	acl	_	_
8	_	_	ADV	RB	_	7	advmod	_	_
9	_	_	SCONJ	IN	_	12	mark	_	_
10	_	_	DET	DT	_	11	det	_	_
11	_	_	NOUN	NNS	_	12	nsubj	_	_
12	_	_	VERB	VBP	_	2	advcl	_	_
13	_	_	PART	RB	_	12	neg	_	_
14	_	_	VERB	VB	_	12	xcomp	_	_
15	_	_	NOUN	NN	_	14	dobj	_	_
16	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 xcomp	color:blue
1	_	_	DET	DT	_	3	det	_	_
2	_	_	ADJ	JJ	_	3	amod	_	_
3	_	_	NOUN	NN	_	4	nsubj	_	_
4	_	_	VERB	VBD	_	0	root	_	_
5	_	_	ADP	IN	_	8	case	_	_
6	_	_	DET	DT	_	8	det	_	_
7	_	_	NOUN	NN	_	8	compound	_	_
8	_	_	NOUN	NN	_	4	nmod	_	_
9	_	_	SCONJ	IN	_	11	mark	_	_
10	_	_	PRON	EX	_	11	expl	_	_
11	_	_	VERB	VBD	_	4	advcl	_	_
12	_	_	ADV	RB	_	13	advmod	_	_
13	_	_	DET	DT	_	14	neg	_	_
14	_	_	NOUN	NNS	_	11	nsubj	_	_
15	_	_	ADJ	JJ	_	11	xcomp	_	_
16	_	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	_	_	NOUN	NNS	_	4	nsubj	_	_
2	_	_	AUX	MD	_	4	aux	_	_
3	_	_	VERB	VB	_	4	cop	_	_
4	_	_	ADJ	JJ	_	0	root	_	_
5	_	_	PART	TO	_	6	mark	_	_
6	_	_	VERB	VB	_	4	xcomp	_	_
7	_	_	PRON	PRP	_	6	dobj	_	_
8	_	_	ADP	IN	_	10	case	_	_
9	_	_	DET	DT	_	10	det	_	_
10	_	_	NOUN	NN	_	6	nmod	_	_
11	_	_	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is universal.

1276 nodes (2%) are attached to their parents as `xcomp`.

1198 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.32836990595611.

The following 19 pairs of parts of speech are connected with `xcomp`: [en-pos/VERB]()-[en-pos/VERB]() (782; 61% instances), [en-pos/VERB]()-[en-pos/ADJ]() (327; 26% instances), [en-pos/VERB]()-[en-pos/NOUN]() (104; 8% instances), [en-pos/VERB]()-[en-pos/PRON]() (19; 1% instances), [en-pos/AUX]()-[en-pos/VERB]() (14; 1% instances), [en-pos/VERB]()-[en-pos/PROPN]() (9; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (5; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (2; 0% instances), [en-pos/VERB]()-[en-pos/AUX]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PRON]()-[en-pos/AUX]() (1; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Select	_	VERB	IMP	_	0	root	_	_
2	the	_	DET	DEF	_	3	det	_	_
3	line	_	NOUN	SG	_	1	dobj	_	_
4	you	_	PRON	PERS-P2	_	5	nsubj	_	_
5	want	_	VERB	PRES	_	3	acl:relcl	_	_
6	to	_	PART	_	_	7	mark	_	_
7	copy	_	VERB	INF	_	5	xcomp	_	_
8	and	_	CONJ	_	_	7	cc	_	_
9	press	_	VERB	INF	_	7	conj	_	_
10	CTRL	_	PROPN	SG	_	9	dobj	_	_
11	–	_	PUNCT	Dash	_	1	punct	_	_
12	C	_	PROPN	SG	_	10	nmod	_	_
13	.	_	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	But	_	CONJ	_	_	2	cc	_	_
2	no	_	INTJ	_	_	7	discourse	_	_
3	,	_	PUNCT	Comma	_	2	punct	_	_
4	that	_	PRON	DEM-SG	_	7	nsubj	_	_
5	did	_	AUX	PAST-AUX	_	7	aux	_	_
6	not	_	PART	NEG	_	7	neg	_	_
7	seem	_	VERB	INF	_	0	root	_	_
8	possible	_	ADJ	POS	_	7	xcomp	_	_
9	.	_	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Maybe	_	ADV	_	_	3	advmod	_	_
2	I	_	PRON	PERS-P1SG-NOM	_	3	nsubj	_	_
3	make	_	VERB	PRES	_	0	root	_	_
4	you	_	PRON	PERS-P2	_	3	dobj	_	_
5	the	_	DET	DEF	_	6	det	_	_
6	manager	_	NOUN	SG	_	3	xcomp	_	_
7	,	_	PUNCT	Comma	_	3	punct	_	_
8	said	_	VERB	PAST	_	3	parataxis	_	_
9	the	_	DET	DEF	_	10	det	_	_
10	counterman	_	NOUN	SG	_	8	nsubj	_	_
11	.	_	PUNCT	Period	_	3	punct	_	_

~~~


