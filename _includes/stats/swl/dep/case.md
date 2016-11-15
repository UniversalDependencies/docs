

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

9 nodes (1%) are attached to their parents as `case`.

6 instances of `case` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `case`: [swl-pos/NOUN]()-[swl-pos/ADP]() (5; 56% instances), [swl-pos/NOUN]()-[swl-pos/VERB]() (2; 22% instances), [swl-pos/VERB]()-[swl-pos/ADP]() (1; 11% instances), [swl-pos/VERB]()-[swl-pos/VERB]() (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	JA@ub@z	_	INTJ	INTERJ	_	2	discourse	_	_
2	FÖRSTÅ(L)	_	VERB	VB	_	0	root	_	_
3	VARFÖR	_	ADV	AB	_	2	mark	_	_
4	SMITA	_	VERB	VB	_	2	xcomp	_	_
5	FRÅN	_	ADP	PP	_	6	case	_	_
6	SKÅL	_	NOUN	NN	_	4	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	HUND	_	NOUN	NN	_	2	nsubj	_	_
2	VARELSE(VVb)+RÖRELSE@p	_	VERB	VBAV	_	0	root	_	_
3	FÖRSTÅ-INTE	_	VERB	VB	_	2	conj	_	_
4	JÄVLAR@z	_	INTJ	INTERJ	_	2	dep	_	_
5	VARELSE(VVb)+FÖRFLYTTA@p	_	VERB	VBAV	_	3	xcomp	_	_
6	INUTI	_	VERB	VBPP	_	7	case	_	_
7	VATTEN	_	NOUN	NN	_	5	nmod	_	_
8	PEK	_	DET	PEK	_	7	det	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 case	color:blue
1	VATTEN	_	NOUN	NN	_	4	nmod	_	_
2	FORM(Yb)+BESKRIVNING+FORM(Yb)@p	_	VERB	VBAV	_	1	compound	_	_
3	POJKE	_	NOUN	NN	_	4	nsubj	_	_
4	STÅ(N)	_	X	?	_	0	root	_	_
5	HUND	_	NOUN	NN	_	6	nsubj	_	_
6	VARELSE(NN)+BEFINNA@p	_	VERB	VBAV	_	4	conj	_	_
7	FORM(YYb)+UTSTRÄCKNING@p	_	VERB	VBAV	_	4	nmod	_	_
8	FORM(Yb)@p@hd	_	VERB	VBAV	_	7	conj	_	_
9	FINNAS	_	VERB	VB	_	7	acl:relcl	_	_
10	BAKOM	_	ADP	PP	_	7	case	_	_
11	NÅGON	_	PRON	PN	_	9	nsubj	_	_
12	PEK	_	DET	PEK	_	11	det	_	_

~~~


