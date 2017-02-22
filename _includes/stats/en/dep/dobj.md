

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

4805 nodes (5%) are attached to their parents as `dobj`.

4504 instances of `dobj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05515088449532.

The following 26 pairs of parts of speech are connected with `dobj`: [en-pos/VERB]()-[en-pos/NOUN]() (3381; 70% instances), [en-pos/VERB]()-[en-pos/PRON]() (1125; 23% instances), [en-pos/VERB]()-[en-pos/DET]() (96; 2% instances), [en-pos/VERB]()-[en-pos/PROPN]() (85; 2% instances), [en-pos/VERB]()-[en-pos/ADJ]() (40; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (20; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (15; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (9; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (7; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (4; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/DET]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (1; 0% instances), [en-pos/CONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PART]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/PRON]()-[en-pos/PRON]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (1; 0% instances), [en-pos/VERB]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 dobj	color:blue
1	_	_	SCONJ	IN	_	4	mark	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	4	nsubj	_	_
4	_	_	VERB	VBD	_	7	advcl	_	_
5	_	_	PUNCT	,	_	7	punct	_	_
6	_	_	PRON	PRP	_	7	nsubj	_	_
7	_	_	VERB	VBD	_	0	root	_	_
8	_	_	DET	DT	_	9	det	_	_
9	_	_	NOUN	NN	_	7	dobj	_	_
10	_	_	ADP	IN	_	11	case	_	_
11	_	_	NOUN	NNS	_	7	nmod	_	_
12	_	_	CONJ	CC	_	7	cc	_	_
13	_	_	PRON	PRP	_	14	nsubj	_	_
14	_	_	VERB	VBD	_	7	conj	_	_
15	_	_	DET	DT	_	16	det	_	_
16	_	_	NOUN	NNS	_	14	dobj	_	_
17	_	_	ADP	IN	_	18	case	_	_
18	_	_	NOUN	NNS	_	14	nmod	_	_
19	_	_	PUNCT	.	_	7	punct	_	_

~~~


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
15	_	_	PRON	NN	_	14	dobj	_	_
16	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 dobj	color:blue
1	_	_	PRON	PRP	_	3	nsubj	_	_
2	_	_	AUX	MD	_	3	aux	_	_
3	_	_	VERB	VB	_	0	root	_	_
4	_	_	PUNCT	,	_	3	punct	_	_
5	_	_	VERB	VB	_	3	conj	_	_
6	_	_	DET	PRP$	_	7	nmod:poss	_	_
7	_	_	NOUN	NN	_	5	dobj	_	_
8	_	_	CONJ	CC	_	3	cc	_	_
9	_	_	PRON	PRP	_	11	nsubj	_	_
10	_	_	VERB	VBZ	_	11	cop	_	_
11	_	_	ADJ	JJ	_	3	conj	_	_
12	_	_	ADV	WRB	_	14	mark	_	_
13	_	_	PRON	PRP	_	14	nsubj	_	_
14	_	_	VERB	VBZ	_	11	advcl	_	_
15	_	_	DET	DT	_	16	det	_	_
16	_	_	NOUN	NN	_	14	dobj	_	_
17	_	_	DET	WDT	_	19	dobj	_	_
18	_	_	PRON	PRP	_	19	nsubj	_	_
19	_	_	VERB	VBD	_	16	acl:relcl	_	_
20	_	_	PUNCT	.	_	3	punct	_	_

~~~


