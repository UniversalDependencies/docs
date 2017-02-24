

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

297 nodes (0%) are attached to their parents as `goeswith`.

235 instances of `goeswith` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.41414141414141.

The following 17 pairs of parts of speech are connected with `goeswith`: [en-pos/NOUN]()-[en-pos/X]() (174; 59% instances), [en-pos/X]()-[en-pos/X]() (60; 20% instances), [en-pos/ADJ]()-[en-pos/X]() (15; 5% instances), [en-pos/ADV]()-[en-pos/X]() (15; 5% instances), [en-pos/VERB]()-[en-pos/X]() (11; 4% instances), [en-pos/ADP]()-[en-pos/X]() (5; 2% instances), [en-pos/PRON]()-[en-pos/X]() (4; 1% instances), [en-pos/ADV]()-[en-pos/ADV]() (2; 1% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (2; 1% instances), [en-pos/PUNCT]()-[en-pos/X]() (2; 1% instances), [en-pos/AUX]()-[en-pos/X]() (1; 0% instances), [en-pos/NUM]()-[en-pos/X]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/X]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/X]() (1; 0% instances), [en-pos/SYM]()-[en-pos/SYM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 goeswith	color:blue
1	-	-	PUNCT	NFP	_	7	punct	_	_
2	ENRON-CPS	enron-cps	X	GW	_	7	goeswith	_	_
3	(	(	X	GW	_	7	goeswith	_	SpaceAfter=No
4	GISB	gisb	X	GW	_	7	goeswith	_	_
5	rev1	rev1	X	GW	_	7	goeswith	_	SpaceAfter=No
6	)	)	X	GW	_	7	goeswith	_	SpaceAfter=No
7	.doc	.doc	NOUN	NN	Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Robert	robert	X	GW	_	0	root	_	_
2	Bryngelson@AZURIX	bryngelson@azurix	X	ADD	_	1	goeswith	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 goeswith	color:blue
1	when	when	ADV	WRB	PronType=Int	3	mark	_	_
2	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	_
3	turn	turn	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	7	advcl	_	_
4	21	21	NUM	CD	NumType=Card	3	obj	_	_
5	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	7	nsubj	_	_
6	can	can	AUX	MD	VerbForm=Fin	7	aux	_	_
7	party	party	VERB	VB	VerbForm=Inf	0	root	_	_
8	any	any	X	GW	_	9	goeswith	_	_
9	were	were	ADV	RB	_	7	advmod	_	_
10	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	11	nsubj	_	_
11	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

51 nodes (0%) are attached to their parents as `goeswith`.

29 instances of `goeswith` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03921568627451.

The following 11 pairs of parts of speech are connected with `goeswith`: [en-pos/NOUN]()-[en-pos/X]() (26; 51% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (8; 16% instances), [en-pos/ADV]()-[en-pos/X]() (6; 12% instances), [en-pos/ADJ]()-[en-pos/X]() (2; 4% instances), [en-pos/NUM]()-[en-pos/NUM]() (2; 4% instances), [en-pos/PRON]()-[en-pos/NOUN]() (2; 4% instances), [en-pos/ADJ]()-[en-pos/VERB]() (1; 2% instances), [en-pos/DET]()-[en-pos/X]() (1; 2% instances), [en-pos/NUM]()-[en-pos/X]() (1; 2% instances), [en-pos/SCONJ]()-[en-pos/X]() (1; 2% instances), [en-pos/VERB]()-[en-pos/X]() (1; 2% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 goeswith	color:blue
1	_	_	DET	DT	_	2	det	_	_
2	_	_	NOUN	NN	_	4	nsubj	_	_
3	_	_	AUX	MD	_	4	aux	_	_
4	_	_	VERB	VB	_	0	root	_	_
5	_	_	DET	PDT	_	8	det:predet	_	_
6	_	_	DET	DT	_	8	det	_	_
7	_	_	ADJ	JJS	_	8	amod	_	_
8	_	_	NOUN	NN	_	4	dobj	_	_
9	_	_	ADP	IN	_	13	case	_	_
10	_	_	DET	DT	_	13	det	_	_
11	_	_	ADV	RB	_	12	advmod	_	_
12	_	_	ADJ	JJ	_	13	amod	_	_
13	_	_	NOUN	NN	_	8	nmod	_	_
14	_	_	ADP	IN	_	16	case	_	_
15	_	_	NOUN	NNS	_	16	compound	_	_
16	_	_	NOUN	NN	_	13	nmod	_	_
17	_	_	ADP	IN	_	18	case	_	_
18	_	_	NOUN	NN	_	13	nmod	_	_
19	_	_	X	GW	_	18	goeswith	_	_
20	_	_	CONJ	CC	_	18	cc	_	_
21	_	_	ADJ	JJ	_	22	amod	_	_
22	_	_	NOUN	NNS	_	18	conj	_	_
23	_	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 goeswith	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBP	_	0	root	_	_
3	_	_	DET	PRP$	_	5	nmod:poss	_	_
4	_	_	NOUN	NN	_	5	goeswith	_	_
5	_	_	NOUN	NN	_	2	dobj	_	_
6	_	_	ADV	RB	_	7	advmod	_	_
7	_	_	ADJ	JJ	_	2	xcomp	_	_
8	_	_	ADV	RBR	_	9	advmod	_	_
9	_	_	ADV	RB	_	7	advmod	_	_
10	_	_	SCONJ	IN	_	12	mark	_	_
11	_	_	PRON	PRP	_	12	nsubj	_	_
12	_	_	VERB	VB	_	2	advcl	_	_
13	_	_	PART	TO	_	14	mark	_	_
14	_	_	VERB	VB	_	12	xcomp	_	_
15	_	_	ADP	RP	_	14	compound:prt	_	_
16	_	_	ADP	IN	_	19	case	_	_
17	_	_	DET	DT	_	19	det	_	_
18	_	_	ADJ	JJ	_	19	amod	_	_
19	_	_	NOUN	NNS	_	14	nmod	_	_
20	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 goeswith	color:blue
1	_	_	X	GW	_	2	goeswith	_	_
2	_	_	ADV	RB	_	7	advmod	_	_
3	_	_	PRON	PRP	_	7	expl	_	_
4	_	_	VERB	VBD	_	7	cop	_	_
5	_	_	DET	DT	_	7	det	_	_
6	_	_	ADJ	JJ	_	7	amod	_	_
7	_	_	NOUN	NN	_	0	root	_	_
8	_	_	PART	TO	_	9	mark	_	_
9	_	_	VERB	VB	_	7	csubj	_	_
10	_	_	PRON	PRP	_	9	dobj	_	_
11	_	_	PUNCT	,	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is universal.

51 nodes (0%) are attached to their parents as `goeswith`.

51 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 13 pairs of parts of speech are connected with `goeswith`: [en-pos/NUM]()-[en-pos/ADJ]() (18; 35% instances), [en-pos/X]()-[en-pos/X]() (8; 16% instances), [en-pos/NUM]()-[en-pos/X]() (7; 14% instances), [en-pos/NOUN]()-[en-pos/X]() (5; 10% instances), [en-pos/ADJ]()-[en-pos/X]() (3; 6% instances), [en-pos/NOUN]()-[en-pos/ADP]() (2; 4% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (2; 4% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 2% instances), [en-pos/DET]()-[en-pos/X]() (1; 2% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (1; 2% instances), [en-pos/NOUN]()-[en-pos/VERB]() (1; 2% instances), [en-pos/NUM]()-[en-pos/NUM]() (1; 2% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	In	in	ADP	E	_	8	case	_	_
2	the	the	DET	RD	Definite=Def|PronType=Art	8	det	_	_
3	18	18	NUM	N	NumType=Card	8	nummod	_	SpaceAfter=No
4	th	th	ADJ	A	Degree=Pos	3	goeswith	_	_
5	and	and	CCONJ	CC	_	6	cc	_	_
6	19	19	NUM	N	NumType=Card	3	conj	_	SpaceAfter=No
7	th	th	ADJ	A	Degree=Pos	6	goeswith	_	_
8	centuries	century	NOUN	S	Number=Plur	13	obl	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	8	punct	_	_
10	his	his	DET	AP	Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	reputation	reputation	NOUN	S	Number=Sing	13	nsubj	_	_
12	also	also	ADV	B	_	13	advmod	_	_
13	spread	spread	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
14	abroad	abroad	ADV	B	_	13	advmod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 goeswith	color:blue
1	The	the	DET	RD	Definite=Def|PronType=Art	3	det	_	_
2	deeper	deep	ADJ	A	Degree=Pos	3	amod	_	_
3	problem	problem	NOUN	S	Number=Sing	4	nsubj	_	_
4	lies	lie	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	with	with	ADP	E	_	8	case	_	_
6	the	the	DET	RD	Definite=Def|PronType=Art	8	det	_	_
7	excessive	excessive	ADJ	A	Degree=Pos	8	amod	_	_
8	financialization	financialization	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	_
9	of	of	ADP	E	_	12	case	_	_
10	the	the	DET	RD	Definite=Def|PronType=Art	12	det	_	_
11	global	global	ADJ	A	Degree=Pos	12	amod	_	_
12	economy	economy	NOUN	S	Number=Sing	8	nmod	_	_
13	that	that	PRON	PR	PronType=Rel	15	nsubj	_	_
14	has	have	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	occurred	occur	VERB	V	Tense=Past|VerbForm=Part	12	acl:relcl	_	_
16	since	since	ADP	E	_	18	case	_	_
17	the	the	DET	RD	Definite=Def|PronType=Art	18	det	_	_
18	1990	1990	NUM	N	NumType=Card	15	obl	_	SpaceAfter=No
19	'	'	X	X	_	18	case	_	SpaceAfter=No
20	s	s	X	X	_	19	goeswith	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	This	this	DET	DD	Number=Sing|PronType=Dem	2	det	_	_
2	photograph	photograph	NOUN	S	Number=Sing	4	nsubj:pass	_	SpaceAfter=No
3	's	's	PART	PART	_	2	case	_	_
4	taken	take	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
5	1950	1950	NUM	N	NumType=Card	4	obl	_	SpaceAfter=No
6	s	s	X	X	_	5	goeswith	_	_
7	in	in	ADP	E	_	8	case	_	_
8	Saudi	Saudi	PROPN	SP	_	4	obl	_	_
9	Arabia	Arabia	PROPN	SP	_	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


