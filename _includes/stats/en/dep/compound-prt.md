

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [compound]().

821 nodes (0%) are attached to their parents as `compound:prt`.

821 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31181485992692.

The following 6 pairs of parts of speech are connected with `compound:prt`: [en-pos/VERB]()-[en-pos/ADP]() (800; 97% instances), [en-pos/VERB]()-[en-pos/ADV]() (16; 2% instances), [en-pos/ADJ]()-[en-pos/ADP]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 0% instances).


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
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ready	ready	ADJ	JJ	Degree=Pos	0	root	_	_
4	to	to	PART	TO	_	5	mark	_	_
5	drop	drop	VERB	VB	VerbForm=Inf	3	xcomp	_	_
6	in	in	ADV	RP	_	5	compound:prt	_	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
8	dollar	dollar	NOUN	NN	Number=Sing	9	compound	_	_
9	amount	amount	NOUN	NN	Number=Sing	5	obj	_	_
10	on	on	ADP	IN	_	12	case	_	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	_	_
12	release	release	NOUN	NN	Number=Sing	5	obl	_	SpaceAfter=No
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
4	hills	hill	NOUN	NNS	Number=Plur	1	obl	_	_
5	...	...	PUNCT	,	_	1	punct	_	_
6	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	SpaceAfter=No
7	'll	will	AUX	MD	VerbForm=Fin	10	aux	_	_
8	be	be	AUX	VB	VerbForm=Inf	10	cop	_	_
9	much	much	ADV	RB	_	10	advmod	_	_
10	better	better	ADJ	JJR	Degree=Cmp	1	parataxis	_	_
11	off	off	ADP	RP	_	10	compound:prt	_	SpaceAfter=No
12	!	!	PUNCT	.	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is a language-specific subtype of [compound]().

177 nodes (0%) are attached to their parents as `compound:prt`.

177 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51977401129944.

The following 6 pairs of parts of speech are connected with `compound:prt`: [en-pos/VERB]()-[en-pos/ADP]() (153; 86% instances), [en-pos/VERB]()-[en-pos/ADV]() (18; 10% instances), [en-pos/VERB]()-[en-pos/PART]() (3; 2% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 1% instances), [en-pos/ADP]()-[en-pos/ADP]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/ADP]() (1; 1% instances).


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
22	_	_	PRON	NN	_	23	nsubj	_	_
23	_	_	VERB	VBP	_	21	ccomp	_	_
24	_	_	PRON	PRP	_	23	iobj	_	_
25	_	_	ADP	RP	_	23	compound:prt	_	_
26	_	_	PRON	NN	_	23	dobj	_	_
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
20	_	_	PRON	WDT	_	22	nsubjpass	_	_
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

288 nodes (0%) are attached to their parents as `compound:prt`.

287 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16666666666667.

The following 6 pairs of parts of speech are connected with `compound:prt`: [en-pos/VERB]()-[en-pos/ADV]() (268; 93% instances), [en-pos/VERB]()-[en-pos/NOUN]() (9; 3% instances), [en-pos/VERB]()-[en-pos/ADP]() (7; 2% instances), [en-pos/VERB]()-[en-pos/ADJ]() (2; 1% instances), [en-pos/NOUN]()-[en-pos/ADV]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound:prt	color:blue
1	If	_	SCONJ	_	_	5	mark	_	_
2	you	_	PRON	PERS-P2	_	5	nsubj	_	_
3	do	_	AUX	PRES-AUX	_	5	aux	_	SpaceAfter=No
4	n't	_	PART	NEG	_	5	advmod	_	_
5	like	_	VERB	INF	_	11	advcl	_	_
6	it	_	PRON	PERS-SG	_	5	obj	_	SpaceAfter=No
7	,	_	PUNCT	Comma	_	5	punct	_	_
8	why	_	ADV	WH	_	11	advmod	_	_
9	do	_	AUX	INF-AUX	_	11	aux	_	_
10	you	_	PRON	PERS-P2	_	11	nsubj	_	_
11	go	_	VERB	PRES	_	0	root	_	_
12	on	_	ADV	_	_	11	compound:prt	_	_
13	reading	_	VERB	ING	_	11	xcomp	_	SpaceAfter=No
14	?	_	PUNCT	QuestionMark	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	You	_	PRON	PERS-P2	_	2	nsubj	_	_
2	mean	_	VERB	PRES	_	0	root	_	_
3	Edward	_	PROPN	SG-NOM	_	8	nsubj	_	SpaceAfter=No
4	's	_	AUX	PRES-AUX	_	8	aux	_	_
5	not	_	PART	NEG	_	8	advmod	_	_
6	going	_	VERB	ING	_	8	aux	_	_
7	to	_	PART	_	_	8	mark	_	_
8	take	_	VERB	INF	_	2	xcomp	_	_
9	part	_	NOUN	SG-NOM	_	8	compound:prt	_	_
10	in	_	ADP	_	_	12	case	_	_
11	the	_	DET	DEF	_	12	det	_	_
12	celebrations	_	NOUN	PL-NOM	_	8	obl	_	SpaceAfter=No
13	?	_	PUNCT	Questionmark	_	2	punct	_	_

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
10	name	_	NOUN	SG-NOM	_	7	obj	_	_
11	of	_	ADP	_	_	13	amod	_	_
12	William	_	PROPN	SG-NOM	_	7	obl	_	_
13	Wilson	_	PROPN	SG-NOM	_	12	flat	_	SpaceAfter=No
14	.	_	PUNCT	Period	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [compound]().

65 nodes (0%) are attached to their parents as `compound:prt`.

64 instances of `compound:prt` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10769230769231.

The following 5 pairs of parts of speech are connected with `compound:prt`: [en-pos/VERB]()-[en-pos/ADP]() (53; 82% instances), [en-pos/VERB]()-[en-pos/ADV]() (9; 14% instances), [en-pos/ADJ]()-[en-pos/ADP]() (1; 2% instances), [en-pos/PROPN]()-[en-pos/ADP]() (1; 2% instances), [en-pos/SCONJ]()-[en-pos/ADP]() (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	What	what	PRON	PQ	PronType=Int	0	root	_	_
2	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	RD	Definite=Def|PronType=Art	5	det	_	_
4	minimum	minimum	ADJ	A	Degree=Pos	5	amod	_	_
5	age	age	NOUN	S	Number=Sing	1	nsubj	_	_
6	required	require	VERB	V	Tense=Past|VerbForm=Part	5	acl	_	_
7	to	to	PART	PART	_	8	mark	_	_
8	sign	sign	VERB	V	VerbForm=Inf	6	ccomp	_	_
9	up	up	ADP	E	_	8	compound:prt	_	_
10	for	for	ADP	E	_	11	case	_	_
11	Facebook	Facebook	PROPN	SP	_	8	obl	_	SpaceAfter=No
12	?	?	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	As	as	SCONJ	CS	_	3	mark	_	_
2	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	turns	turn	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
4	out	out	ADV	B	_	3	compound:prt	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	there	there	ADV	B	_	7	expl	_	_
7	is	be	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	some	some	DET	DI	PronType=Ind	9	det	_	_
9	truth	truth	NOUN	S	Number=Sing	7	nsubj	_	_
10	in	in	ADP	E	_	12	case	_	_
11	both	both	DET	DI	PronType=Ind	12	det	_	_
12	perspectives	perspective	NOUN	S	Number=Plur	7	obl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound:prt	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	1613	1613	NUM	N	NumType=Card	7	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	Sir	Sir	PROPN	SP	_	7	nsubj	_	_
5	Henry	Henry	PROPN	SP	_	4	flat:name	_	_
6	Wotton	Wotton	PROPN	SP	_	4	flat:name	_	_
7	recorded	record	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	that	that	SCONJ	CS	_	13	mark	_	_
9	Henry	Henry	PROPN	SP	_	13	nsubj:pass	_	_
10	VIII	eigth	ADJ	NO	Degree=Pos|NumType=Ord	9	flat	_	_
11	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
12	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	aux:pass	_	_
13	set	set	ADJ	A	Degree=Pos	7	ccomp	_	_
14	forth	forth	ADP	E	_	13	compound:prt	_	_
15	with	with	ADP	E	_	18	amod	_	_
16	many	many	ADJ	A	Degree=Pos	18	amod	_	_
17	extraordinary	extraordinary	ADJ	A	Degree=Pos	18	amod	_	_
18	circumstances	circumstance	NOUN	S	Number=Plur	13	obl	_	_
19	of	of	ADP	E	_	20	case	_	_
20	pomp	pomp	NOUN	S	Number=Sing	18	nmod	_	_
21	and	and	CCONJ	CC	_	22	cc	_	_
22	ceremony	ceremony	NOUN	S	Number=Sing	20	conj	_	SpaceAfter=No
23	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	7	punct	_	_

~~~


