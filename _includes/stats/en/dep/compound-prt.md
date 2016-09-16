

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [compound]().

910 nodes (0%) are attached to their parents as `compound:prt`.

910 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33076923076923.

The following 6 pairs of parts of speech are connected with `compound:prt`: [en-pos/VERB]()-[en-pos/ADP]() (888; 98% instances), [en-pos/VERB]()-[en-pos/ADV]() (17; 2% instances), [en-pos/ADJ]()-[en-pos/ADP]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	SpaceAfter=No
2	've	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	grown	grow	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	up	up	ADP	RP	_	3	compound:prt	_	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Jacques	Jacques	PROPN	NNP	Number=Sing	3	nsubj	_	_
2	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ready	ready	ADJ	JJ	Degree=Pos	0	root	_	_
4	to	to	PART	TO	_	5	mark	_	_
5	drop	drop	VERB	VB	VerbForm=Inf	3	xcomp	_	_
6	in	in	ADV	RP	_	5	compound:prt	_	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
8	dollar	dollar	NOUN	NN	Number=Sing	9	compound	_	_
9	amount	amount	NOUN	NN	Number=Sing	5	dobj	_	_
10	on	on	ADP	IN	_	12	case	_	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	_	_
12	release	release	NOUN	NN	Number=Sing	5	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound:prt	color:blue
1	Run	run	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	for	for	ADP	IN	_	4	case	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	hills	hill	NOUN	NNS	Number=Plur	1	nmod	_	_
5	...	...	PUNCT	,	_	1	punct	_	_
6	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	SpaceAfter=No
7	'll	will	AUX	MD	VerbForm=Fin	10	aux	_	_
8	be	be	VERB	VB	VerbForm=Inf	10	cop	_	_
9	much	much	ADV	RB	_	10	advmod	_	_
10	better	better	ADJ	JJR	Degree=Cmp	1	parataxis	_	_
11	off	off	ADP	RP	_	10	compound:prt	_	SpaceAfter=No
12	!	!	PUNCT	.	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is a language-specific subtype of [compound]().

196 nodes (0%) are attached to their parents as `compound:prt`.

196 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51020408163265.

The following 6 pairs of parts of speech are connected with `compound:prt`: [en-pos/VERB]()-[en-pos/ADP]() (170; 87% instances), [en-pos/VERB]()-[en-pos/ADV]() (20; 10% instances), [en-pos/VERB]()-[en-pos/PART]() (3; 2% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 1% instances), [en-pos/ADP]()-[en-pos/ADP]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/ADP]() (1; 1% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 25 compound:prt	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	6	nmod	_	_
4	_	_	PUNCT	,	_	6	punct	_	_
5	_	_	PRON	PRP	_	6	nsubj	_	_
6	_	_	VERB	VBD	_	0	root	_	_
7	_	_	ADP	IN	_	8	case	_	_
8	_	_	NOUN	NN	_	6	nmod	_	_
9	_	_	ADV	RB	_	8	advmod	_	_
10	_	_	PUNCT	-LRB-	_	11	punct	_	_
11	_	_	CONJ	CC	_	8	cc	_	_
12	_	_	NOUN	NN	_	8	conj	_	_
13	_	_	ADP	IN	_	16	case	_	_
14	_	_	DET	PRP$	_	16	nmod:poss	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	12	nmod	_	_
17	_	_	PUNCT	-RRB-	_	12	punct	_	_
18	_	_	PUNCT	:	_	6	punct	_	_
19	_	_	AUX	VBP	_	21	aux	_	_
20	_	_	PRON	PRP	_	21	nsubj	_	_
21	_	_	VERB	VB	_	6	parataxis	_	_
22	_	_	NOUN	NN	_	23	nsubj	_	_
23	_	_	VERB	VBP	_	21	ccomp	_	_
24	_	_	PRON	PRP	_	23	iobj	_	_
25	_	_	ADP	RP	_	23	compound:prt	_	_
26	_	_	NOUN	NN	_	23	dobj	_	_
27	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 compound:prt	color:blue
1	_	_	SCONJ	IN	_	4	mark	_	_
2	_	_	PRON	PRP	_	4	nsubj	_	_
3	_	_	AUX	VBP	_	4	aux	_	_
4	_	_	VERB	VBG	_	0	root	_	_
5	_	_	PRON	PRP	_	4	dobj	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	4	xcomp	_	_
8	_	_	PRON	PRP	_	7	iobj	_	_
9	_	_	ADV	RB	_	7	compound:prt	_	_
10	_	_	ADV	RB	_	11	case	_	_
11	_	_	ADV	RBS	_	12	nmod	_	_
12	_	_	NOUN	NN	_	7	dobj	_	_
13	_	_	ADP	IN	_	16	case	_	_
14	_	_	DET	DT	_	16	det	_	_
15	_	_	NOUN	NN	_	16	compound	_	_
16	_	_	NOUN	NN	_	12	nmod	_	_
17	_	_	ADP	IN	_	19	case	_	_
18	_	_	DET	DT	_	19	det	_	_
19	_	_	NOUN	NN	_	7	nmod	_	_
20	_	_	DET	WDT	_	22	nsubjpass	_	_
21	_	_	AUX	VBD	_	22	auxpass	_	_
22	_	_	VERB	VBN	_	19	acl:relcl	_	_
23	_	_	ADP	IN	_	24	case	_	_
24	_	_	PRON	PRP	_	22	nmod	_	_
25	_	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 compound:prt	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBP	_	0	root	_	_
3	_	_	PART	TO	_	4	mark	_	_
4	_	_	VERB	VB	_	2	xcomp	_	_
5	_	_	SCONJ	IN	_	8	mark	_	_
6	_	_	PRON	PRP	_	8	expl	_	_
7	_	_	VERB	VBZ	_	8	cop	_	_
8	_	_	ADJ	JJ	_	2	ccomp	_	_
9	_	_	PART	TO	_	10	mark	_	_
10	_	_	VERB	VB	_	8	csubj	_	_
11	_	_	PRON	PRP	_	10	iobj	_	_
12	_	_	NOUN	NN	_	10	dobj	_	_
13	_	_	PART	RP	_	10	compound:prt	_	_
14	_	_	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is a language-specific subtype of [compound]().

358 nodes (0%) are attached to their parents as `compound:prt`.

356 instances of `compound:prt` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17877094972067.

The following 7 pairs of parts of speech are connected with `compound:prt`: [en-pos/VERB]()-[en-pos/ADV]() (334; 93% instances), [en-pos/VERB]()-[en-pos/NOUN]() (10; 3% instances), [en-pos/VERB]()-[en-pos/ADP]() (8; 2% instances), [en-pos/VERB]()-[en-pos/ADJ]() (3; 1% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	It	_	PRON	PERS-SG	_	4	nsubjpass	_	_
2	's	_	AUX	PRES-AUX	_	4	auxpass	_	_
3	even	_	ADV	_	_	4	advmod	_	_
4	made	_	VERB	PASS	_	0	root	_	_
5	out	_	ADV	_	_	4	compound:prt	_	_
6	to	_	ADP	_	_	7	case	_	_
7	you	_	PRON	PERS-P2	_	4	nmod	_	_
8	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	The	_	DET	DEF	_	2	det	_	_
2	vote	_	NOUN	SG	_	4	nsubj	_	_
3	will	_	AUX	PRES-AUX	_	4	aux	_	_
4	take	_	VERB	INF	_	0	root	_	_
5	place	_	NOUN	SG	_	4	compound:prt	_	_
6	tomorrow	_	NOUN	SG	_	4	nmod	_	_
7	at	_	ADP	_	_	8	case	_	_
8	12	_	NUM	ID	_	4	nmod	_	_
9	noon	_	NOUN	SG	_	8	nmod	_	_
10	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:prt	color:blue
1	It	_	PRON	EX-P3SG	_	2	expl	_	_
2	was	_	VERB	PAST	_	0	root	_	_
3	then	_	ADV	_	_	2	advmod	_	_
4	that	_	SCONJ	REL	_	7	mark	_	_
5	he	_	PRON	PERS-P3SG-NOM	_	7	nsubj	_	_
6	had	_	AUX	PAST	_	7	aux	_	_
7	taken	_	VERB	PERF	_	2	csubj	_	_
8	on	_	ADP	_	_	7	compound:prt	_	_
9	the	_	DET	DEF	_	13	det	_	_
10	name	_	NOUN	SG	_	7	dobj	_	_
11	of	_	ADP	_	_	13	amod	_	_
12	William	_	PROPN	SG	_	7	nmod	_	_
13	Wilson	_	PROPN	SG	_	12	name	_	_
14	.	_	PUNCT	Period	_	2	punct	_	_

~~~


