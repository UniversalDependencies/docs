

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

797 nodes (0%) are attached to their parents as `list`.

793 instances of `list` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.07528230865747.

The following 28 pairs of parts of speech are connected with `list`: [en-pos/PROPN]()-[en-pos/NOUN]() (215; 27% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (181; 23% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (106; 13% instances), [en-pos/PROPN]()-[en-pos/NUM]() (99; 12% instances), [en-pos/PROPN]()-[en-pos/X]() (72; 9% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (15; 2% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (14; 2% instances), [en-pos/NOUN]()-[en-pos/SYM]() (14; 2% instances), [en-pos/NOUN]()-[en-pos/NUM]() (13; 2% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (10; 1% instances), [en-pos/VERB]()-[en-pos/VERB]() (9; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (6; 1% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (5; 1% instances), [en-pos/NOUN]()-[en-pos/X]() (5; 1% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (5; 1% instances), [en-pos/PROPN]()-[en-pos/SYM]() (5; 1% instances), [en-pos/X]()-[en-pos/X]() (4; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/X]()-[en-pos/PROPN]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (2; 0% instances), [en-pos/VERB]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/X]() (2; 0% instances), [en-pos/X]()-[en-pos/NUM]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/PUNCT]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/X]() (1; 0% instances), [en-pos/ADV]()-[en-pos/X]() (1; 0% instances), [en-pos/NUM]()-[en-pos/NUM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 list	color:blue
1	Vladi	Vladi	PROPN	NNP	Number=Sing	2	name	_	_
2	Pimenov	Pimenov	PROPN	NNP	Number=Sing	0	root	_	_
3	ext.	ext.	NOUN	NN	Number=Sing	2	list	_	_
4	37625	37625	NUM	CD	NumType=Card	3	nummod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 list	color:blue
1	WASHINGTON	WASHINGTON	PROPN	NNP	Number=Sing	0	root	_	_
2	(	(	PUNCT	-LRB-	_	3	punct	_	SpaceAfter=No
3	Reuters	Reuters	PROPN	NNP	Number=Sing	1	list	_	SpaceAfter=No
4	)	)	PUNCT	-RRB-	_	3	punct	_	_
5	-	-	PUNCT	:	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 list	color:blue
1	Analyst	analyst	NOUN	NN	Number=Sing	2	compound	_	_
2	Team	team	NOUN	NN	Number=Sing	0	root	_	_
3	1	1	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No
4	:	:	PUNCT	:	_	2	punct	_	_
5	Coach	coach	NOUN	NN	Number=Sing	2	list	_	SpaceAfter=No
6	:	:	PUNCT	:	_	2	punct	_	_
7	Lisa	Lisa	PROPN	NNP	Number=Sing	8	name	_	_
8	Gilette	Gilette	PROPN	NNP	Number=Sing	5	appos	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

20 nodes (0%) are attached to their parents as `list`.

20 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.85.

The following 6 pairs of parts of speech are connected with `list`: [en-pos/NOUN]()-[en-pos/NOUN]() (10; 50% instances), [en-pos/VERB]()-[en-pos/VERB]() (4; 20% instances), [en-pos/NOUN]()-[en-pos/VERB]() (2; 10% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (2; 10% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 5% instances), [en-pos/NOUN]()-[en-pos/X]() (1; 5% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 list	color:blue
1	_	_	ADP	IN	_	2	case	_	_
2	_	_	NOUN	NN	_	5	nmod	_	_
3	_	_	NOUN	NN	_	4	compound	_	_
4	_	_	NOUN	NN	_	5	nsubj	_	_
5	_	_	VERB	VB	_	0	root	_	_
6	_	_	NOUN	NN	_	5	dobj	_	_
7	_	_	PART	TO	_	8	mark	_	_
8	_	_	VERB	VB	_	6	acl	_	_
9	_	_	PROPN	NNP	_	8	dobj	_	_
10	_	_	ADJ	JJ	_	12	case	_	_
11	_	_	ADP	IN	_	10	mwe	_	_
12	_	_	NOUN	NN	_	6	nmod	_	_
13	_	_	PUNCT	,	_	12	punct	_	_
14	_	_	NOUN	NN	_	12	list	_	_
15	_	_	PUNCT	,	_	12	punct	_	_
16	_	_	NOUN	NN	_	12	list	_	_
17	_	_	ADV	RB	_	5	advmod	_	_
18	_	_	ADV	RB	_	17	mwe	_	_
19	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 list	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBD	_	0	root	_	_
3	_	_	VERB	VBG	_	2	xcomp	_	_
4	_	_	ADP	RP	_	3	compound:prt	_	_
5	_	_	DET	DT	_	7	det	_	_
6	_	_	NOUN	NN	_	7	compound	_	_
7	_	_	NOUN	NN	_	3	dobj	_	_
8	_	_	PUNCT	,	_	3	punct	_	_
9	_	_	VERB	VBG	_	3	list	_	_
10	_	_	DET	DT	_	12	det	_	_
11	_	_	NOUN	NN	_	12	compound	_	_
12	_	_	NOUN	NN	_	9	dobj	_	_
13	_	_	ADP	IN	_	15	case	_	_
14	_	_	DET	DT	_	15	det	_	_
15	_	_	NOUN	NN	_	9	nmod	_	_
16	_	_	PUNCT	,	_	3	punct	_	_
17	_	_	VERB	VB	_	3	list	_	_
18	_	_	ADP	RP	_	17	compound:prt	_	_
19	_	_	PROPN	NNP	_	21	nmod:poss	_	_
20	_	_	PART	POS	_	19	case	_	_
21	_	_	NOUN	NN	_	17	dobj	_	_
22	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 list	color:blue
1	_	_	DET	DT	_	2	det	_	_
2	_	_	NOUN	NN	_	4	nsubjpass	_	_
3	_	_	AUX	VBZ	_	4	auxpass	_	_
4	_	_	VERB	VBN	_	0	root	_	_
5	_	_	ADP	IN	_	8	case	_	_
6	_	_	PROPN	NNP	_	8	compound	_	_
7	_	_	PROPN	NNP	_	8	compound	_	_
8	_	_	PROPN	NNP	_	4	nmod	_	_
9	_	_	PUNCT	,	_	8	punct	_	_
10	_	_	PROPN	NNP	_	8	list	_	_
11	_	_	ADP	IN	_	12	case	_	_
12	_	_	PROPN	NNP	_	4	nmod	_	_

~~~


