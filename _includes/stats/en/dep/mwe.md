

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

327 nodes (0%) are attached to their parents as `mwe`.

327 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04892966360856.

The following 19 pairs of parts of speech are connected with `mwe`: [en-pos/ADP]()-[en-pos/ADP]() (88; 27% instances), [en-pos/ADV]()-[en-pos/ADV]() (65; 20% instances), [en-pos/ADV]()-[en-pos/ADP]() (51; 16% instances), [en-pos/ADJ]()-[en-pos/ADP]() (31; 9% instances), [en-pos/ADP]()-[en-pos/NOUN]() (26; 8% instances), [en-pos/SCONJ]()-[en-pos/SCONJ]() (26; 8% instances), [en-pos/VERB]()-[en-pos/ADP]() (21; 6% instances), [en-pos/AUX]()-[en-pos/ADV]() (4; 1% instances), [en-pos/SCONJ]()-[en-pos/PART]() (3; 1% instances), [en-pos/SCONJ]()-[en-pos/ADP]() (2; 1% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (2; 1% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 0% instances), [en-pos/ADP]()-[en-pos/ADV]() (1; 0% instances), [en-pos/ADV]()-[en-pos/CONJ]() (1; 0% instances), [en-pos/ADV]()-[en-pos/DET]() (1; 0% instances), [en-pos/DET]()-[en-pos/VERB]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/PRON]() (1; 0% instances), [en-pos/PART]()-[en-pos/PART]() (1; 0% instances), [en-pos/PART]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 mwe	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	5	nmod	_	_
4	_	_	PRON	PRP	_	5	nsubj	_	_
5	_	_	VERB	VBD	_	0	root	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	5	xcomp	_	_
8	_	_	DET	DT	_	9	det	_	_
9	_	_	NOUN	NN	_	7	dobj	_	_
10	_	_	PUNCT	,	_	5	punct	_	_
11	_	_	CONJ	CC	_	5	cc	_	_
12	_	_	PRON	PRP	_	14	nsubj	_	_
13	_	_	VERB	VBD	_	14	cop	_	_
14	_	_	ADJ	JJ	_	5	conj	_	_
15	_	_	ADP	IN	_	17	case	_	_
16	_	_	ADP	IN	_	15	mwe	_	_
17	_	_	NOUN	NNS	_	14	nmod	_	_
18	_	_	ADP	IN	_	20	case	_	_
19	_	_	DET	DT	_	20	det	_	_
20	_	_	NOUN	NN	_	17	nmod	_	_
21	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	_	_	ADV	RB	_	16	advmod	_	_
2	_	_	ADV	RB	_	1	mwe	_	_
3	_	_	PUNCT	,	_	16	punct	_	_
4	_	_	SCONJ	IN	_	6	mark	_	_
5	_	_	PRON	NN	_	6	nsubj	_	_
6	_	_	VERB	VBZ	_	16	advcl	_	_
7	_	_	ADJ	JJ	_	8	amod	_	_
8	_	_	NOUN	NN	_	6	dobj	_	_
9	_	_	CONJ	CC	_	8	cc	_	_
10	_	_	NOUN	NN	_	8	conj	_	_
11	_	_	PUNCT	,	_	16	punct	_	_
12	_	_	DET	DT	_	13	det	_	_
13	_	_	NOUN	NNS	_	16	nsubj	_	_
14	_	_	AUX	MD	_	16	aux	_	_
15	_	_	VERB	VB	_	16	cop	_	_
16	_	_	ADJ	JJR	_	0	root	_	_
17	_	_	PUNCT	.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 mwe	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	7	nmod	_	_
4	_	_	PUNCT	,	_	7	punct	_	_
5	_	_	PRON	PRP	_	7	nsubj	_	_
6	_	_	AUX	MD	_	7	aux	_	_
7	_	_	VERB	VB	_	0	root	_	_
8	_	_	NOUN	NNS	_	7	dobj	_	_
9	_	_	SCONJ	IN	_	11	mark	_	_
10	_	_	PRON	PRP	_	11	nsubj	_	_
11	_	_	VERB	VBP	_	7	advcl	_	_
12	_	_	DET	DT	_	13	det	_	_
13	_	_	NOUN	NN	_	11	dobj	_	_
14	_	_	ADP	IN	_	15	case	_	_
15	_	_	NOUN	NN	_	13	nmod	_	_
16	_	_	ADV	RB	_	13	cc	_	_
17	_	_	ADV	RB	_	16	mwe	_	_
18	_	_	ADP	IN	_	16	mwe	_	_
19	_	_	NOUN	NN	_	20	compound	_	_
20	_	_	NOUN	NNS	_	13	conj	_	_
21	_	_	PUNCT	.	_	7	punct	_	_

~~~


