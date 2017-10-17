

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:tmod]().

4059 nodes (2%) are attached to their parents as `nmod:poss`.

4058 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6449864498645.

The following 18 pairs of parts of speech are connected with `nmod:poss`: [en-pos/NOUN]()-[en-pos/PRON]() (3294; 81% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (377; 9% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (238; 6% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (64; 2% instances), [en-pos/PROPN]()-[en-pos/PRON]() (38; 1% instances), [en-pos/ADJ]()-[en-pos/PRON]() (29; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (4; 0% instances), [en-pos/VERB]()-[en-pos/PRON]() (3; 0% instances), [en-pos/PRON]()-[en-pos/PRON]() (2; 0% instances), [en-pos/SYM]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADP]()-[en-pos/PRON]() (1; 0% instances), [en-pos/DET]()-[en-pos/PRON]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/INTJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/NUM]() (1; 0% instances), [en-pos/NUM]()-[en-pos/PRON]() (1; 0% instances), [en-pos/NUM]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
1	When	when	ADV	WRB	PronType=Int	3	mark	_	_
2	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
3	saw	see	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	advcl	_	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	_
5	cartoon	cartoon	NOUN	NN	Number=Sing	3	obj	_	_
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	_	_
3	meeting	meet	VERB	VBG	VerbForm=Ger	0	root	_	_
4	Rod	Rod	PROPN	NNP	Number=Sing	6	nmod:poss	_	SpaceAfter=No
5	's	's	PART	POS	_	4	case	_	_
6	office	office	NOUN	NN	Number=Sing	3	obj	_	_
7	EB	EB	PROPN	NNP	Number=Sing	6	list	_	SpaceAfter=No
8	4054	4054	NUM	CD	NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	First	first	ADJ	JJ	Degree=Pos|NumType=Ord	2	amod	_	_
2	time	time	NOUN	NN	Number=Sing	12	obl:tmod	_	_
3	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	started	start	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	2	acl:relcl	_	_
5	wearing	wear	VERB	VBG	VerbForm=Ger	4	xcomp	_	_
6	woman	woman	NOUN	NN	Number=Sing	8	nmod:poss	_	SpaceAfter=No
7	's	's	PART	POS	_	6	case	_	_
8	lingerie	lingerie	NOUN	NN	Number=Sing	5	obj	_	_
9	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
10	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	cop	_	_
11	very	very	ADV	RB	_	12	advmod	_	_
12	young	young	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:tmod]().

1865 nodes (2%) are attached to their parents as `nmod:poss`.

1865 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31903485254692.

The following 15 pairs of parts of speech are connected with `nmod:poss`: [en-pos/NOUN]()-[en-pos/DET]() (1687; 90% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (98; 5% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (26; 1% instances), [en-pos/ADJ]()-[en-pos/DET]() (16; 1% instances), [en-pos/NOUN]()-[en-pos/PRON]() (13; 1% instances), [en-pos/VERB]()-[en-pos/DET]() (9; 0% instances), [en-pos/PROPN]()-[en-pos/DET]() (7; 0% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/ADV]()-[en-pos/DET]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/NUM]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 nmod:poss	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod:poss	color:blue
1	_	_	CONJ	CC	_	12	advmod	_	_
2	_	_	ADP	IN	_	5	case	_	_
3	_	_	DET	DT	_	5	det	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NN	_	12	nmod	_	_
6	_	_	PRON	PRP	_	12	nsubj	_	_
7	_	_	VERB	VBD	_	12	cop	_	_
8	_	_	DET	PRP$	_	10	nmod:poss	_	_
9	_	_	ADJ	JJR	_	10	amod	_	_
10	_	_	NOUN	NN	_	12	nmod:poss	_	_
11	_	_	PART	POS	_	10	case	_	_
12	_	_	NOUN	NN	_	0	root	_	_
13	_	_	PUNCT	,	_	12	punct	_	_
14	_	_	PRON	WDT	_	17	nmod	_	_
15	_	_	PRON	PRP	_	17	nsubj	_	_
16	_	_	AUX	MD	_	17	aux	_	_
17	_	_	VERB	VB	_	12	acl:relcl	_	_
18	_	_	ADP	IN	_	14	case	_	_
19	_	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	_	_	ADV	RB	_	9	advmod	_	_
2	_	_	DET	PDT	_	4	det:predet	_	_
3	_	_	DET	DT	_	4	det	_	_
4	_	_	PROPN	NNP	_	6	nmod:poss	_	_
5	_	_	PART	POS	_	4	case	_	_
6	_	_	NOUN	NN	_	9	nsubj	_	_
7	_	_	AUX	VBP	_	9	aux	_	_
8	_	_	PART	RB	_	9	neg	_	_
9	_	_	VERB	VB	_	0	root	_	_
10	_	_	PRON	PRP	_	9	dobj	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	DET	PRP$	_	13	nmod:poss	_	_
13	_	_	NOUN	NNS	_	9	nmod	_	_
14	_	_	SCONJ	IN	_	19	mark	_	_
15	_	_	PROPN	NNP	_	19	nsubj	_	_
16	_	_	VERB	VBZ	_	19	cop	_	_
17	_	_	PART	RB	_	19	neg	_	_
18	_	_	ADV	RB	_	19	advmod	_	_
19	_	_	ADJ	JJ	_	9	advcl	_	_
20	_	_	SCONJ	IN	_	21	mark	_	_
21	_	_	VERB	VBG	_	19	advcl	_	_
22	_	_	NOUN	NNS	_	21	dobj	_	_
23	_	_	PUNCT	.	_	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is a language-specific subtype of [nmod]().

1015 nodes (2%) are attached to their parents as `nmod:poss`.

1014 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23645320197044.

The following 8 pairs of parts of speech are connected with `nmod:poss`: [en-pos/NOUN]()-[en-pos/PRON]() (977; 96% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (13; 1% instances), [en-pos/ADJ]()-[en-pos/PRON]() (10; 1% instances), [en-pos/VERB]()-[en-pos/PRON]() (10; 1% instances), [en-pos/PRON]()-[en-pos/PRON]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/PRON]() (1; 0% instances), [en-pos/VERB]()-[en-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Thank	_	VERB	PRES	_	0	root	_	_
2	you	_	PRON	PERS-P2	_	1	obj	_	_
3	for	_	ADP	_	_	5	case	_	_
4	your	_	PRON	P2-GEN	_	5	nmod:poss	_	_
5	help	_	NOUN	SG-NOM	_	1	obl	_	SpaceAfter=No
6	.	_	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nmod:poss	color:blue
1	Aunt	_	NOUN	SG-NOM	_	2	compound	_	_
2	Petunias	_	PROPN	PL-GEN	_	6	nmod:poss	_	_
3	high	_	ADJ	POS	_	6	amod	_	SpaceAfter=No
4	,	_	PUNCT	Comma	_	3	punct	_	_
5	false	_	ADJ	POS	_	6	amod	_	_
6	laugh	_	NOUN	SG-NOM	_	7	nsubj	_	_
7	sounded	_	VERB	PAST	_	0	root	_	_
8	from	_	ADP	_	_	11	case	_	_
9	the	_	DET	DEF	_	11	det	_	_
10	living	_	NOUN	SG-NOM	_	11	compound	_	_
11	room	_	NOUN	SG-NOM	_	7	obl	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	Perhaps	_	ADV	_	_	4	advmod	_	_
2	he	_	PRON	PERS-P3SG-NOM	_	4	nsubj	_	_
3	simply	_	ADV	_	_	4	advmod	_	_
4	remarked	_	VERB	PAST	_	0	root	_	_
5	upon	_	ADP	_	_	8	case	_	_
6	his	_	PRON	P3SG-GEN	_	8	nmod:poss	_	_
7	own	_	ADJ	POS	_	8	amod	_	_
8	getting	_	VERB	ING	_	4	advcl	_	_
9	older	_	ADJ	CMP	_	8	xcomp	_	SpaceAfter=No
10	;	_	PUNCT	Semicolon	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:tmod]().

515 nodes (1%) are attached to their parents as `nmod:poss`.

512 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5378640776699.

The following 6 pairs of parts of speech are connected with `nmod:poss`: [en-pos/NOUN]()-[en-pos/DET]() (504; 98% instances), [en-pos/PROPN]()-[en-pos/DET]() (5; 1% instances), [en-pos/NOUN]()-[en-pos/PRON]() (2; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/DET]() (1; 0% instances), [en-pos/NUM]()-[en-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	According	accord	VERB	V	VerbForm=Ger	4	case	_	_
2	to	to	ADP	E	_	1	fixed	_	_
3	its	its	DET	AP	Number=Sing|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	President	president	NOUN	S	Number=Sing	10	nmod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
7	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
8	in	in	ADP	E	_	10	case	_	_
9	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	10	det	_	_
10	position	position	NOUN	S	Number=Sing	0	root	_	_
11	to	to	PART	PART	_	12	mark	_	_
12	do	do	VERB	V	VerbForm=Inf	10	acl	_	_
13	so	so	ADV	B	_	12	advmod	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	Promote	promote	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	your	you	DET	AP	Poss=Yes|PronType=Prs	4	nmod:poss	_	_
3	Facebook	Facebook	PROPN	SP	_	4	nmod	_	_
4	Page	Page	PROPN	SP	_	1	obj	_	_
5	or	or	CCONJ	CC	_	6	cc	_	_
6	website	website	NOUN	S	Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 nmod:poss	color:blue
1	Thus	thus	ADV	B	_	2	advmod	_	_
2	began	begin	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	7	det	_	_
4	fifteen	fifteen	NUM	N	NumType=Card	6	nummod	_	SpaceAfter=No
5	-	-	PUNCT	FF	_	6	punct	_	SpaceAfter=No
6	year	year	NOUN	S	Number=Sing	7	nmod	_	_
7	correspondence	correspondence	NOUN	S	Number=Sing	2	nsubj	_	_
8	between	between	ADP	E	_	9	case	_	_
9	Balzac	Balzac	PROPN	SP	_	7	nmod	_	_
10	and	and	CCONJ	CC	_	13	cc	_	_
11	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
12	the	the	DET	RD	Definite=Def|PronType=Art	13	det	_	_
13	object	object	NOUN	S	Number=Sing	9	conj	_	_
14	of	of	ADP	E	_	19	case	_	_
15	[	[	PUNCT	FB	_	16	punct	_	SpaceAfter=No
16	his	his	PRON	PP	Poss=Yes|PronType=Prs	19	nmod:poss	_	SpaceAfter=No
17	]	]	PUNCT	FB	_	16	punct	_	_
18	sweetest	sweetest	ADJ	A	Degree=Sup	19	amod	_	_
19	dreams	dream	NOUN	S	Number=Plur	13	nmod	_	SpaceAfter=No
20	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
21	:	:	PUNCT	FC	_	2	punct	_	_

~~~


