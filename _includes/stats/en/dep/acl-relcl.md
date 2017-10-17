

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [acl]().

2222 nodes (1%) are attached to their parents as `acl:relcl`.

2221 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.17776777677768.

The following 38 pairs of parts of speech are connected with `acl:relcl`: [en-pos/NOUN]()-[en-pos/VERB]() (1463; 66% instances), [en-pos/PRON]()-[en-pos/VERB]() (250; 11% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (109; 5% instances), [en-pos/PROPN]()-[en-pos/VERB]() (90; 4% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (59; 3% instances), [en-pos/DET]()-[en-pos/VERB]() (45; 2% instances), [en-pos/ADV]()-[en-pos/VERB]() (27; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (26; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (20; 1% instances), [en-pos/NUM]()-[en-pos/VERB]() (15; 1% instances), [en-pos/NOUN]()-[en-pos/ADV]() (14; 1% instances), [en-pos/VERB]()-[en-pos/VERB]() (11; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (10; 0% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (10; 0% instances), [en-pos/NOUN]()-[en-pos/AUX]() (8; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (8; 0% instances), [en-pos/PRON]()-[en-pos/AUX]() (8; 0% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (7; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (5; 0% instances), [en-pos/PRON]()-[en-pos/ADV]() (4; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (4; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/SYM]()-[en-pos/VERB]() (3; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/DET]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/NUM]() (2; 0% instances), [en-pos/NUM]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/PRON]()-[en-pos/ADP]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/ADP]() (1; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/SYM]() (1; 0% instances), [en-pos/NUM]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Every	every	DET	DT	_	2	det	_	_
2	move	move	NOUN	NN	Number=Sing	5	nsubj	_	_
3	Google	Google	PROPN	NNP	Number=Sing	4	nsubj	_	_
4	makes	make	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
5	brings	bring	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	this	this	DET	DT	Number=Sing|PronType=Dem	8	det	_	_
7	particular	particular	ADJ	JJ	Degree=Pos	8	amod	_	_
8	future	future	NOUN	NN	Number=Sing	5	obj	_	_
9	closer	closer	ADV	RBR	Degree=Cmp	5	advmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Malach	Malach	PROPN	NNP	Number=Sing	6	vocative	_	SpaceAfter=No
2	,	,	PUNCT	,	_	6	punct	_	_
3	What	what	PRON	WP	PronType=Int	6	nsubj	_	_
4	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
5	say	say	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
6	makes	make	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	sense	sense	NOUN	NN	Number=Sing	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl:relcl	color:blue
1	Please	please	INTJ	UH	_	2	discourse	_	_
2	let	let	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
3	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	4	obj	_	_
4	know	know	VERB	VB	VerbForm=Inf	2	xcomp	_	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	_
6	date	date	NOUN	NN	Number=Sing	4	obj	_	_
7	and	and	CCONJ	CC	_	8	cc	_	_
8	time	time	NOUN	NN	Number=Sing	6	conj	_	_
9	that	that	PRON	WDT	PronType=Rel	11	nsubj	_	_
10	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	convenient	convenient	ADJ	JJ	Degree=Pos	6	acl:relcl	_	_
12	for	for	ADP	IN	_	13	case	_	_
13	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is a language-specific subtype of [acl]().

877 nodes (1%) are attached to their parents as `acl:relcl`.

877 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.72748004561003.

The following 26 pairs of parts of speech are connected with `acl:relcl`: [en-pos/NOUN]()-[en-pos/VERB]() (632; 72% instances), [en-pos/PRON]()-[en-pos/VERB]() (73; 8% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (59; 7% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (33; 4% instances), [en-pos/PROPN]()-[en-pos/VERB]() (17; 2% instances), [en-pos/DET]()-[en-pos/VERB]() (10; 1% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (8; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (7; 1% instances), [en-pos/NUM]()-[en-pos/VERB]() (5; 1% instances), [en-pos/ADV]()-[en-pos/VERB]() (4; 0% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (4; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/AUX]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/SYM]()-[en-pos/VERB]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/VERB]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/NUM]() (2; 0% instances), [en-pos/ADP]()-[en-pos/VERB]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/SYM]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/ADV]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/NUM]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl:relcl	color:blue
1	_	_	NUM	CD	_	8	nsubj	_	_
2	_	_	ADP	IN	_	4	case	_	_
3	_	_	DET	PRP$	_	4	nmod:poss	_	_
4	_	_	NOUN	NN	_	1	nmod	_	_
5	_	_	PUNCT	,	_	4	punct	_	_
6	_	_	PROPN	NNP	_	4	appos	_	_
7	_	_	PUNCT	,	_	8	punct	_	_
8	_	_	VERB	VBD	_	0	root	_	_
9	_	_	PART	TO	_	10	mark	_	_
10	_	_	VERB	VB	_	8	xcomp	_	_
11	_	_	DET	DT	_	13	det	_	_
12	_	_	ADJ	JJ	_	13	amod	_	_
13	_	_	NOUN	NN	_	10	dobj	_	_
14	_	_	DET	WDT	_	15	nsubj	_	_
15	_	_	VERB	VBZ	_	13	acl:relcl	_	_
16	_	_	SYM	$	_	15	dobj	_	_
17	_	_	NUM	CD	_	16	nummod	_	_
18	_	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 acl:relcl	color:blue
1	_	_	CONJ	CC	_	3	cc	_	_
2	_	_	PRON	PRP	_	3	nsubj	_	_
3	_	_	NOUN	NN	_	0	root	_	_
4	_	_	PRON	DT	_	3	dobj	_	_
5	_	_	PUNCT	,	_	3	punct	_	_
6	_	_	SCONJ	IN	_	9	mark	_	_
7	_	_	PRON	PRP	_	9	expl	_	_
8	_	_	VERB	VBZ	_	9	cop	_	_
9	_	_	ADJ	JJR	_	3	advcl	_	_
10	_	_	PRON	NN	_	11	dobj	_	_
11	_	_	VERB	VBG	_	9	csubj	_	_
12	_	_	SCONJ	IN	_	13	mark	_	_
13	_	_	VERB	VBG	_	9	advcl	_	_
14	_	_	NOUN	NNS	_	13	dobj	_	_
15	_	_	ADP	IN	_	16	case	_	_
16	_	_	PRON	NN	_	13	nmod	_	_
17	_	_	PRON	WDT	_	18	nsubj	_	_
18	_	_	VERB	VB	_	16	acl:relcl	_	_
19	_	_	PRON	PRP	_	18	dobj	_	_
20	_	_	VERB	VB	_	18	xcomp	_	_
21	_	_	PRON	NN	_	20	dobj	_	_
22	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl:relcl	color:blue
1	_	_	PRON	PRP	_	4	nsubj	_	_
2	_	_	ADV	RB	_	4	advmod	_	_
3	_	_	AUX	MD	_	4	aux	_	_
4	_	_	VERB	VB	_	0	root	_	_
5	_	_	PART	TO	_	6	mark	_	_
6	_	_	VERB	VB	_	4	xcomp	_	_
7	_	_	ADP	IN	_	8	case	_	_
8	_	_	NOUN	NNS	_	6	nmod	_	_
9	_	_	DET	WDT	_	12	nsubj	_	_
10	_	_	VERB	VBP	_	12	cop	_	_
11	_	_	ADV	RBR	_	12	advmod	_	_
12	_	_	ADJ	JJ	_	8	acl:relcl	_	_
13	_	_	CONJ	CC	_	4	cc	_	_
14	_	_	PUNCT	,	_	4	punct	_	_
15	_	_	SCONJ	IN	_	19	mark	_	_
16	_	_	PRON	PRP	_	19	nsubj	_	_
17	_	_	AUX	VBP	_	19	aux	_	_
18	_	_	AUX	VBN	_	19	aux	_	_
19	_	_	VERB	VBG	_	27	advcl	_	_
20	_	_	NOUN	NNS	_	19	dobj	_	_
21	_	_	ADP	IN	_	22	case	_	_
22	_	_	NOUN	NNS	_	20	nmod	_	_
23	_	_	PUNCT	,	_	27	punct	_	_
24	_	_	PRON	PRP	_	27	nsubj	_	_
25	_	_	VERB	VBP	_	27	cop	_	_
26	_	_	ADV	RB	_	27	advmod	_	_
27	_	_	ADJ	JJ	_	4	conj	_	_
28	_	_	PART	TO	_	30	mark	_	_
29	_	_	DET	DT	_	30	det	_	_
30	_	_	NOUN	NN	_	27	nmod	_	_
31	_	_	ADP	IN	_	32	case	_	_
32	_	_	NOUN	NN	_	30	nmod	_	_
33	_	_	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is a language-specific subtype of [acl]().

501 nodes (1%) are attached to their parents as `acl:relcl`.

501 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.26546906187625.

The following 16 pairs of parts of speech are connected with `acl:relcl`: [en-pos/NOUN]()-[en-pos/VERB]() (396; 79% instances), [en-pos/PRON]()-[en-pos/VERB]() (43; 9% instances), [en-pos/PROPN]()-[en-pos/VERB]() (18; 4% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (16; 3% instances), [en-pos/NOUN]()-[en-pos/AUX]() (6; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (5; 1% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (5; 1% instances), [en-pos/ADV]()-[en-pos/VERB]() (3; 1% instances), [en-pos/VERB]()-[en-pos/VERB]() (2; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (1; 0% instances), [en-pos/NUM]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/ADV]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Identifying	_	VERB	ING	_	0	root	_	_
2	filters	_	NOUN	PL-NOM	_	1	obj	_	_
3	that	_	SCONJ	REL	_	4	mark	_	_
4	are	_	VERB	PRES	_	2	acl:relcl	_	_
5	currently	_	ADV	_	_	4	advmod	_	_
6	in	_	ADP	_	_	7	case	_	_
7	effect	_	NOUN	SG-NOM	_	4	obl	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl:relcl	color:blue
1	Of	_	ADV	_	_	8	advmod	_	_
2	course	_	ADV	_	_	1	fixed	_	SpaceAfter=No
3	,	_	PUNCT	Comma	_	1	punct	_	_
4	my	_	PRON	P1SG-GEN	_	5	nmod:poss	_	_
5	mind	_	NOUN	SG-NOM	_	8	nsubj	_	_
6	is	_	AUX	PRES	_	8	cop	_	_
7	not	_	PART	NEG	_	8	advmod	_	_
8	all	_	PRON	TOT-SG	_	0	root	_	_
9	it	_	PRON	PERS-SG	_	11	nsubj	_	_
10	should	_	AUX	PAST-AUX	_	11	aux	_	_
11	be	_	VERB	INF	_	8	acl:relcl	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	He	_	PRON	PERS-P3SG-NOM	_	2	nsubj	_	_
2	missed	_	VERB	PAST	_	0	root	_	_
3	Hogwarts	_	PROPN	PL-NOM	_	2	obj	_	_
4	so	_	ADV	_	_	5	advmod	_	_
5	much	_	ADV	_	_	2	advmod	_	_
6	it	_	PRON	PERS-SG	_	7	nsubj	_	_
7	was	_	VERB	PAST	_	3	acl:relcl	_	_
8	like	_	ADP	_	_	9	case	_	_
9	having	_	AUX	ING	_	7	advcl	_	_
10	a	_	DET	IND-SG	_	13	det	_	_
11	constant	_	ADJ	POS	_	12	amod	_	_
12	stomach	_	NOUN	SG-NOM	_	13	compound	_	_
13	ache	_	NOUN	SG-NOM	_	9	obj	_	SpaceAfter=No
14	.	_	PUNCT	Period	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [acl]().

361 nodes (1%) are attached to their parents as `acl:relcl`.

361 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.93351800554017.

The following 14 pairs of parts of speech are connected with `acl:relcl`: [en-pos/NOUN]()-[en-pos/VERB]() (254; 70% instances), [en-pos/PRON]()-[en-pos/VERB]() (33; 9% instances), [en-pos/PROPN]()-[en-pos/VERB]() (26; 7% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (23; 6% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (9; 2% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (4; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (3; 1% instances), [en-pos/NOUN]()-[en-pos/ADV]() (2; 1% instances), [en-pos/VERB]()-[en-pos/VERB]() (2; 1% instances), [en-pos/NOUN]()-[en-pos/PRON]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/PRON]()-[en-pos/AUX]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Subscribers	subscriber	NOUN	S	Number=Plur	3	nsubj	_	_
2	can	can	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	see	see	VERB	V	VerbForm=Inf	0	root	_	_
4	only	only	ADV	B	_	3	advmod	_	_
5	the	the	DET	RD	Definite=Def|PronType=Art	6	det	_	_
6	things	thing	NOUN	S	Number=Plur	3	obj	_	_
7	you	you	PRON	PE	Person=2|PronType=Prs	8	nsubj	_	_
8	share	share	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
9	publicly	publicly	ADV	B	_	8	advmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	3	nsubj	_	_
2	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	what	what	PRON	PR	Number=Sing|PronType=Rel	0	root	_	_
4	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
5	are	be	AUX	VA	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	today	today	ADV	B	_	3	advmod	_	_
7	asking	ask	VERB	V	VerbForm=Ger	3	acl:relcl	_	_
8	the	the	DET	RD	Definite=Def|PronType=Art	9	det	_	_
9	Commissioner	commissioner	NOUN	S	Number=Sing	7	obj	_	_
10	for	for	ADP	E	_	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl:relcl	color:blue
1	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
2	This	this	DET	DD	Number=Sing|PronType=Dem	3	det	_	_
3	reality	reality	NOUN	S	Number=Sing	5	nsubj:pass	_	_
4	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	noted	note	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
6	by	by	ADP	E	_	7	case	_	_
7	playwright	playwright	NOUN	S	Number=Sing	5	obl:agent	_	_
8	Oscar	Oscar	PROPN	SP	_	7	nmod	_	_
9	Wilde	Wilde	PROPN	SP	_	8	flat:name	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	8	punct	_	_
11	who	who	PRON	PR	PronType=Rel	12	nsubj	_	_
12	said	say	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	8	acl:relcl	_	SpaceAfter=No
13	:	:	PUNCT	FC	_	5	punct	_	_

~~~


