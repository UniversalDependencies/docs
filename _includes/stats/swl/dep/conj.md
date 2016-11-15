

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

230 nodes (34%) are attached to their parents as `conj`.

230 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.77391304347826.

The following 18 pairs of parts of speech are connected with `conj`: [swl-pos/VERB]()-[swl-pos/VERB]() (151; 66% instances), [swl-pos/VERB]()-[swl-pos/X]() (14; 6% instances), [swl-pos/X]()-[swl-pos/VERB]() (13; 6% instances), [swl-pos/NOUN]()-[swl-pos/NOUN]() (12; 5% instances), [swl-pos/PRON]()-[swl-pos/PRON]() (10; 4% instances), [swl-pos/VERB]()-[swl-pos/ADV]() (5; 2% instances), [swl-pos/X]()-[swl-pos/X]() (4; 2% instances), [swl-pos/ADV]()-[swl-pos/ADV]() (3; 1% instances), [swl-pos/NOUN]()-[swl-pos/VERB]() (3; 1% instances), [swl-pos/VERB]()-[swl-pos/PRON]() (3; 1% instances), [swl-pos/ADV]()-[swl-pos/VERB]() (2; 1% instances), [swl-pos/NOUN]()-[swl-pos/X]() (2; 1% instances), [swl-pos/VERB]()-[swl-pos/ADJ]() (2; 1% instances), [swl-pos/X]()-[swl-pos/ADJ]() (2; 1% instances), [swl-pos/ADJ]()-[swl-pos/VERB]() (1; 0% instances), [swl-pos/NOUN]()-[swl-pos/PRON]() (1; 0% instances), [swl-pos/PRON]()-[swl-pos/NOUN]() (1; 0% instances), [swl-pos/X]()-[swl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 conj	color:blue
1	SÄTTA-SIG	_	VERB	VB	_	0	root	_	_
2	ÄTA(Q)	_	VERB	VB	_	1	conj	_	_
3	TITTA-PÅ	_	VERB	VB	_	1	conj	_	_
4	SNÖ^GUBBE	_	NOUN	NN	_	3	dobj	_	_
5	PEK	_	DET	PEK	_	4	det	_	_
6	ÄTA(Q)	_	VERB	VB	_	2	conj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 conj	color:blue
1	EN-ENDA	_	NUM	RG	_	3	nummod	_	_
2	GRODA	_	NOUN	NN	_	5	nsubj	_	_
3	UNGE	_	NOUN	NN	_	2	compound	_	_
4	VILL	_	VERB	VB	_	5	aux	_	_
5	FÖLJAS-ÅT*MED	_	VERB	VB	_	0	root	_	_
6	POJKE	_	NOUN	NN	_	5	dobj	_	_
7	SÄTTA-SIG@z	_	VERB	VB	_	5	conj	_	_
8	HAND(Yb)+@p	_	VERB	VBAV	_	7	nmod	_	_
9	HAND(Yb)@p@hd	_	VERB	VBAV	_	8	dep	_	_
10	GÅ(N)	_	X	?	_	5	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 conj	color:blue
1	POJKE	_	NOUN	NN	_	2	nsubj	_	_
2	VÄNTA@g	_	X	G	_	0	root	_	_
3	VÄNTA	_	VERB	VB	_	2	conj	_	_
4	TYST	_	ADJ	JJ	_	2	conj	_	_
5	HÖRA	_	VERB	VB	_	2	conj	_	_
6	NÅGON	_	PRON	PN	_	5	dobj	_	_
7	LYSSNA	_	VERB	VB	_	2	conj	_	_

~~~


