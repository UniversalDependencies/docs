

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

536 nodes (0%) are attached to their parents as `list`.

534 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.18283582089552.

The following 23 pairs of parts of speech are connected with `list`: [en-pos/PROPN]()-[en-pos/NOUN]() (162; 30% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (117; 22% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (70; 13% instances), [en-pos/PROPN]()-[en-pos/X]() (58; 11% instances), [en-pos/PROPN]()-[en-pos/NUM]() (51; 10% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (12; 2% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (10; 2% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (9; 2% instances), [en-pos/VERB]()-[en-pos/VERB]() (8; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (5; 1% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (5; 1% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (5; 1% instances), [en-pos/PROPN]()-[en-pos/SYM]() (5; 1% instances), [en-pos/NOUN]()-[en-pos/X]() (4; 1% instances), [en-pos/X]()-[en-pos/X]() (3; 1% instances), [en-pos/NOUN]()-[en-pos/NUM]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (2; 0% instances), [en-pos/VERB]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/X]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/PUNCT]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/X]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/VERB]()-[en-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 list	color:blue
1	Vladi	Vladi	PROPN	NNP	Number=Sing	0	root	_	_
2	Pimenov	Pimenov	PROPN	NNP	Number=Sing	1	flat	_	_
3	ext.	ext.	NOUN	NN	Number=Sing	1	list	_	_
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
3	CNN	CNN	PROPN	NNP	Number=Sing	1	list	_	SpaceAfter=No
4	)	)	PUNCT	-RRB-	_	3	punct	_	_
5	--	--	PUNCT	:	_	1	punct	_	_

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
7	Lisa	Lisa	PROPN	NNP	Number=Sing	5	appos	_	_
8	Gilette	Gilette	PROPN	NNP	Number=Sing	7	flat	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

15 nodes (0%) are attached to their parents as `list`.

15 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2.

The following 6 pairs of parts of speech are connected with `list`: [en-pos/NOUN]()-[en-pos/NOUN]() (8; 53% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (2; 13% instances), [en-pos/VERB]()-[en-pos/VERB]() (2; 13% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 7% instances), [en-pos/NOUN]()-[en-pos/PRON]() (1; 7% instances), [en-pos/NOUN]()-[en-pos/X]() (1; 7% instances).


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
6	_	_	PRON	NN	_	5	dobj	_	_
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 19 list	color:blue
1	_	_	NOUN	NNS	_	3	nsubj	_	_
2	_	_	ADV	RB	_	3	advmod	_	_
3	_	_	VERB	VBD	_	0	root	_	_
4	_	_	DET	DT	_	5	det	_	_
5	_	_	NOUN	NN	_	3	dobj	_	_
6	_	_	SCONJ	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	5	acl	_	_
8	_	_	ADP	IN	_	11	case	_	_
9	_	_	ADV	RB	_	10	advmod	_	_
10	_	_	ADJ	JJ	_	11	amod	_	_
11	_	_	NOUN	NNS	_	7	nmod	_	_
12	_	_	SCONJ	IN	_	13	mark	_	_
13	_	_	VERB	VB	_	7	advcl	_	_
14	_	_	DET	PRP$	_	16	det	_	_
15	_	_	NOUN	NN	_	16	compound	_	_
16	_	_	NOUN	NN	_	13	dobj	_	_
17	_	_	PUNCT	,	_	13	punct	_	_
18	_	_	SCONJ	IN	_	19	mark	_	_
19	_	_	VERB	VB	_	13	list	_	_
20	_	_	PUNCT	,	_	13	punct	_	_
21	_	_	CONJ	CC	_	13	cc	_	_
22	_	_	ADV	RB	_	24	advmod	_	_
23	_	_	SCONJ	IN	_	24	mark	_	_
24	_	_	VERB	VB	_	13	conj	_	_
25	_	_	PRON	NN	_	24	dobj	_	_
26	_	_	ADJ	JJ	_	25	amod	_	_
27	_	_	ADP	IN	_	29	case	_	_
28	_	_	DET	PRP$	_	29	det	_	_
29	_	_	NOUN	NN	_	26	nmod	_	_
30	_	_	PUNCT	.	_	3	punct	_	_

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


