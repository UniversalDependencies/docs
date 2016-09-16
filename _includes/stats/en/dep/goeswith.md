

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

314 nodes (0%) are attached to their parents as `goeswith`.

251 instances of `goeswith` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36942675159236.

The following 17 pairs of parts of speech are connected with `goeswith`: [en-pos/NOUN]()-[en-pos/X]() (184; 59% instances), [en-pos/X]()-[en-pos/X]() (62; 20% instances), [en-pos/ADJ]()-[en-pos/X]() (17; 5% instances), [en-pos/ADV]()-[en-pos/X]() (17; 5% instances), [en-pos/VERB]()-[en-pos/X]() (11; 4% instances), [en-pos/ADP]()-[en-pos/X]() (6; 2% instances), [en-pos/PRON]()-[en-pos/X]() (4; 1% instances), [en-pos/ADV]()-[en-pos/ADV]() (2; 1% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (2; 1% instances), [en-pos/PUNCT]()-[en-pos/X]() (2; 1% instances), [en-pos/AUX]()-[en-pos/X]() (1; 0% instances), [en-pos/NUM]()-[en-pos/X]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/X]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/X]() (1; 0% instances), [en-pos/SYM]()-[en-pos/SYM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 0% instances).


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
4	21	21	NUM	CD	NumType=Card	3	dobj	_	_
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

57 nodes (0%) are attached to their parents as `goeswith`.

33 instances of `goeswith` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03508771929825.

The following 11 pairs of parts of speech are connected with `goeswith`: [en-pos/NOUN]()-[en-pos/X]() (32; 56% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (8; 14% instances), [en-pos/ADV]()-[en-pos/X]() (6; 11% instances), [en-pos/ADJ]()-[en-pos/X]() (2; 4% instances), [en-pos/NUM]()-[en-pos/NUM]() (2; 4% instances), [en-pos/PRON]()-[en-pos/NOUN]() (2; 4% instances), [en-pos/ADJ]()-[en-pos/VERB]() (1; 2% instances), [en-pos/DET]()-[en-pos/X]() (1; 2% instances), [en-pos/NUM]()-[en-pos/X]() (1; 2% instances), [en-pos/SCONJ]()-[en-pos/X]() (1; 2% instances), [en-pos/VERB]()-[en-pos/X]() (1; 2% instances).


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


