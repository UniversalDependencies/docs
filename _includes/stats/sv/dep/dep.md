

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

21 nodes (3%) are attached to their parents as `dep`.

20 instances of `dep` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71428571428571.

The following 6 pairs of parts of speech are connected with `dep`: [sv-pos/VERB]()-[sv-pos/VERB]() (13; 62% instances), [sv-pos/VERB]()-[sv-pos/X]() (4; 19% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1; 5% instances), [sv-pos/VERB]()-[sv-pos/CONJ]() (1; 5% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (1; 5% instances), [sv-pos/X]()-[sv-pos/X]() (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep	color:blue
1	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	5	nmod	_	_
2	FORM(Yb)@p@hd	_	VERB	VBAV	_	1	dep	_	_
3	INUTI	_	VERB	VBPP	_	1	case	_	_
4	GRODA	_	NOUN	NN	_	5	nsubj	_	_
5	STANNA-KVAR	_	VERB	VB	_	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dep	color:blue
1	FINNAS*INTE	_	VERB	VB	_	0	root	_	_
2	FINNAS*INTE	_	VERB	VB	_	1	conj	_	_
3	GLOSA:(PD)@z	_	X	?	_	1	dep	_	_
4	PU@g	_	INTJ	G	_	1	discourse	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 dep	color:blue
1	PEK	_	PRON	PEK	_	2	nsubj	_	_
2	LUKTA	_	VERB	VB	_	0	root	_	_
3	PEK	_	PRON	PEK	_	2	nmod	_	_
4	BI	_	NOUN	NN	_	5	nsubj	_	_
5	ENTITET(YYb)+RÖRELSE@p	_	VERB	VBAV	_	2	advcl	_	_
6	IRRITERAD@rd	_	VERB	VB	_	4	acl	_	_
7	ENTITET(YYb)+RÖRELSE@p	_	VERB	VBAV	_	5	conj	_	_
8	VILL	_	VERB	VB	_	9	aux	_	_
9	TA-BORT	_	VERB	VB	_	5	conj	_	_
10	HUND	_	NOUN	NN	_	9	dobj	_	_
11	SOM(S)	_	CONJ	KN	_	6	dep	_	_

~~~


