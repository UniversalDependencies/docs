

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

18 nodes (5%) are attached to their parents as `dep`.

17 instances of `dep` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.11111111111111.

The following 4 pairs of parts of speech are connected with `dep`: [sv-pos/VERB]()-[sv-pos/VERB]() (13; 72% instances), [sv-pos/VERB]()-[sv-pos/X]() (3; 17% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1; 6% instances), [sv-pos/X]()-[sv-pos/X]() (1; 6% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	GÅ(N)	_	X	?	_	0	root	_	_
2	TITTA-FRAM	_	X	?	_	1	conj	_	_
3	TITTA-FRAM@hd	_	X	?	_	2	dep	_	_
4	FO	_	VERB	VB	_	1	conj	_	_
5	PEK	_	DET	PEK	_	6	det	_	_
6	GRODA	_	NOUN	NN	_	7	nsubj	_	_
7	ENTITET(GG)+@p	_	VERB	VBAV	_	1	advcl	_	_
8	ENTITET(G)@p@hd	_	VERB	VBAV	_	7	dep	_	_
9	ANNAN(ea)	_	PRON	PN	_	10	nmod	_	_
10	GRODA	_	NOUN	NN	_	7	nmod	_	_
11	ENTITET(GG)+@p	_	VERB	VBAV	_	7	conj	_	_

~~~


