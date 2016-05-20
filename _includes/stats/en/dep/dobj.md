

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

12451 nodes (5%) are attached to their parents as `dobj`.

11977 instances of `dobj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21644847803389.

The following 28 pairs of parts of speech are connected with `dobj`: [en-pos/VERB]()-[en-pos/NOUN]() (8714; 70% instances), [en-pos/VERB]()-[en-pos/PRON]() (2525; 20% instances), [en-pos/VERB]()-[en-pos/PROPN]() (672; 5% instances), [en-pos/VERB]()-[en-pos/ADJ]() (170; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (103; 1% instances), [en-pos/VERB]()-[en-pos/DET]() (94; 1% instances), [en-pos/VERB]()-[en-pos/SYM]() (65; 1% instances), [en-pos/ADJ]()-[en-pos/PRON]() (21; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (20; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (20; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (11; 0% instances), [en-pos/VERB]()-[en-pos/X]() (9; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (4; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (3; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/AUX]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (2; 0% instances), [en-pos/SCONJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (1; 0% instances), [en-pos/ADP]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/VERB]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SYM]()-[en-pos/NUM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dobj	color:blue
1	Read	read	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
3	entire	entire	ADJ	JJ	Degree=Pos	4	amod	_	_
4	article	article	NOUN	NN	Number=Sing	1	dobj	_	SpaceAfter=No
5	;	;	PUNCT	,	_	1	punct	_	_
6	there	there	PRON	EX	_	7	expl	_	SpaceAfter=No
7	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
9	punchline	punchline	NOUN	NN	Number=Sing	7	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	7	punct	_	_
11	too	too	ADV	RB	_	7	advmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dobj	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	_	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	overstating	overstate	VERB	VBG	VerbForm=Ger	7	ccomp	_	_
4	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	dobj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	know	know	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dobj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	to	to	PART	TO	_	4	mark	_	_
4	use	use	VERB	VB	VerbForm=Inf	2	xcomp	_	_
5	this	this	DET	DT	Number=Sing|PronType=Dem	6	det	_	_
6	opportunity	opportunity	NOUN	NN	Number=Sing	4	dobj	_	_
7	to	to	PART	TO	_	8	mark	_	_
8	welcome	welcome	VERB	VB	VerbForm=Inf	4	xcomp	_	_
9	Brian	Brian	PROPN	NNP	Number=Sing	10	name	_	_
10	Ryner	Ryner	PROPN	NNP	Number=Sing	8	dobj	_	_
11	to	to	ADP	IN	_	12	case	_	_
12	Google	Google	PROPN	NNP	Number=Sing	8	nmod	_	SpaceAfter=No
13	!	!	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

5356 nodes (5%) are attached to their parents as `dobj`.

5018 instances of `dobj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05694548170276.

The following 27 pairs of parts of speech are connected with `dobj`: [en-pos/VERB]()-[en-pos/NOUN]() (3914; 73% instances), [en-pos/VERB]()-[en-pos/PRON]() (985; 18% instances), [en-pos/VERB]()-[en-pos/DET]() (227; 4% instances), [en-pos/VERB]()-[en-pos/PROPN]() (98; 2% instances), [en-pos/VERB]()-[en-pos/ADJ]() (44; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (22; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (16; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (11; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (7; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (4; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/VERB]()-[en-pos/SCONJ]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/DET]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (2; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (1; 0% instances), [en-pos/CONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PART]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances), [en-pos/VERB]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 dobj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dobj	color:blue
1	_	_	VERB	VBG	_	7	advcl	_	_
2	_	_	PRON	PRP	_	1	dobj	_	_
3	_	_	ADP	IN	_	4	case	_	_
4	_	_	NOUN	NN	_	1	nmod	_	_
5	_	_	PRON	PRP	_	7	nsubj	_	_
6	_	_	AUX	MD	_	7	aux	_	_
7	_	_	VERB	VB	_	0	root	_	_
8	_	_	PART	TO	_	9	mark	_	_
9	_	_	VERB	VB	_	7	xcomp	_	_
10	_	_	SCONJ	IN	_	16	mark	_	_
11	_	_	DET	DT	_	12	det	_	_
12	_	_	NOUN	NN	_	16	nsubj	_	_
13	_	_	VERB	VBZ	_	16	cop	_	_
14	_	_	DET	DT	_	16	det	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	9	ccomp	_	_
17	_	_	ADP	IN	_	19	case	_	_
18	_	_	DET	DT	_	19	det	_	_
19	_	_	NOUN	NNS	_	16	nmod	_	_
20	_	_	PUNCT	,	_	19	punct	_	_
21	_	_	NOUN	NNS	_	19	conj	_	_
22	_	_	PUNCT	,	_	19	punct	_	_
23	_	_	NOUN	NNS	_	19	conj	_	_
24	_	_	CONJ	CC	_	19	cc	_	_
25	_	_	ADV	RB	_	26	advmod	_	_
26	_	_	ADV	RB	_	19	advmod	_	_
27	_	_	CONJ	CC	_	19	cc	_	_
28	_	_	ADV	RB	_	19	advmod	_	_
29	_	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 dobj	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBD	_	0	root	_	_
3	_	_	PROPN	NNP	_	2	dobj	_	_
4	_	_	PART	TO	_	5	mark	_	_
5	_	_	VERB	VB	_	2	xcomp	_	_
6	_	_	ADP	IN	_	7	case	_	_
7	_	_	NOUN	NN	_	5	nmod	_	_
8	_	_	SCONJ	IN	_	14	mark	_	_
9	_	_	DET	PRP$	_	10	nmod:poss	_	_
10	_	_	NOUN	NNS	_	14	nsubj	_	_
11	_	_	AUX	MD	_	14	aux	_	_
12	_	_	VERB	VB	_	14	cop	_	_
13	_	_	ADV	RB	_	14	advmod	_	_
14	_	_	ADJ	JJ	_	5	ccomp	_	_
15	_	_	SCONJ	IN	_	17	mark	_	_
16	_	_	PRON	PRP	_	17	nsubj	_	_
17	_	_	VERB	VBD	_	14	advcl	_	_
18	_	_	PART	TO	_	19	mark	_	_
19	_	_	VERB	VB	_	17	xcomp	_	_
20	_	_	DET	DT	_	19	dobj	_	_
21	_	_	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is universal.

3849 nodes (5%) are attached to their parents as `dobj`.

3664 instances of `dobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.20446869316706.

The following 31 pairs of parts of speech are connected with `dobj`: [en-pos/VERB]()-[en-pos/NOUN]() (2572; 67% instances), [en-pos/VERB]()-[en-pos/PRON]() (903; 23% instances), [en-pos/VERB]()-[en-pos/PROPN]() (193; 5% instances), [en-pos/VERB]()-[en-pos/VERB]() (38; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (36; 1% instances), [en-pos/AUX]()-[en-pos/NOUN]() (21; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (14; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (14; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (10; 0% instances), [en-pos/VERB]()-[en-pos/SCONJ]() (8; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (5; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (4; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (4; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/VERB]()-[en-pos/X]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADP]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/PART]() (2; 0% instances), [en-pos/AUX]()-[en-pos/VERB]() (1; 0% instances), [en-pos/CONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/PRON]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (1; 0% instances), [en-pos/X]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dobj	color:blue
1	Linking	_	VERB	ING	_	0	root	_	_
2	a	_	DET	IND-SG	_	3	det	_	_
3	page	_	NOUN	SG	_	1	dobj	_	_
4	to	_	ADP	_	_	7	case	_	_
5	a	_	DET	IND-SG	_	7	det	_	_
6	connection	_	NOUN	SG	_	7	compound	_	_
7	file	_	NOUN	SG	_	1	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dobj	color:blue
1	You	_	PRON	PERS-P2	_	2	nsubj	_	_
2	sit	_	VERB	PRES	_	0	root	_	_
3	here	_	ADV	_	_	2	advmod	_	_
4	and	_	CONJ	_	_	2	cc	_	_
5	think	_	VERB	PRES	_	2	conj	_	_
6	:	_	PUNCT	Colon	_	2	punct	_	_
7	who	_	PRON	WH-NOM	_	5	dobj	_	_
8	is	_	VERB	PRES	_	7	cop	_	_
9	this	_	DET	DEM-SG	_	10	det	_	_
10	person	_	NOUN	SG	_	7	nsubj	_	_
11	talking	_	VERB	ING	_	10	amod	_	_
12	to	_	ADP	_	_	13	case	_	_
13	me	_	PRON	PERS-P1SG-ACC	_	11	nmod	_	_
14	?	_	PUNCT	QuestionMark	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dobj	color:blue
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


