

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

9 nodes (1%) are attached to their parents as `ccomp`.

9 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 3 pairs of parts of speech are connected with `ccomp`: [swl-pos/VERB]()-[swl-pos/VERB]() (5; 56% instances), [swl-pos/VERB]()-[swl-pos/ADV]() (3; 33% instances), [swl-pos/VERB]()-[swl-pos/INTJ]() (1; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	HUND	_	NOUN	NN	_	2	nsubj	_	_
2	SÅG	_	VERB	VB	_	0	root	_	_
3	PEK	_	PRON	PEK	_	2	nmod	_	_
4	FINNAS	_	VERB	VB	_	2	ccomp	_	_
5	BI	_	NOUN	NN	_	6	compound	_	_
6	GLOB@kl	_	NOUN	NNKL	_	4	nsubj	_	_
7	BI	_	NOUN	NN	_	8	nsubj	_	_
8	INUTI	_	VERB	VBPP	_	6	acl	_	_
9	TRE-DIM-FORM	_	NOUN	NNKL	_	8	nmod	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 ccomp	color:blue
1	POJKE	_	NOUN	NN	_	2	nsubj	_	_
2	LETA	_	VERB	VB	_	0	root	_	_
3	ROPA@ca	_	VERB	VBCA	_	2	conj	_	_
4	RÖST-ANVÄNDA	_	VERB	VB	_	2	conj	_	_
5	VAR	_	ADV	AB	_	2	ccomp	_	_
6	GRODA	_	NOUN	NN	_	5	nsubj	_	_
7	VAR	_	ADV	AB	_	5	conj	_	_
8	GRODA	_	NOUN	NN	_	6	conj	_	_
9	HAND(GG)+HANTERA@p	_	VERB	VBAV	_	2	conj	_	_
10	RÖST-ANVÄNDA	_	VERB	VB	_	2	conj	_	_
11	VAR	_	ADV	AB	_	10	ccomp	_	_
12	hund@&	_	X	?	_	13	reparandum	_	_
13	GRODA	_	NOUN	NN	_	11	nsubj	_	_
14	VAR	_	ADV	AB	_	10	conj	_	_
15	GRODA	_	NOUN	NN	_	13	conj	_	_
16	PU@g	_	INTJ	G	_	2	discourse	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	HUND	_	NOUN	NN	_	2	nsubj	_	_
2	VARELSE(VVb)+FÖRFLYTTA@p	_	VERB	VBAV	_	0	root	_	_
3	TILL	_	ADP	PP	_	4	case	_	_
4	POJKE	_	NOUN	NN	_	2	nmod	_	_
5	LITEN-PERSON@kl	_	NOUN	NNKL	_	4	nmod	_	_
6	SVANS-VIFTA	_	VERB	VB	_	2	conj	_	_
7	GLAD	_	ADJ	JJ	_	1	acl	_	_
8	PEK	_	PRON	PEK	_	9	nsubj	_	_
9	OK@b	_	INTJ	INTERJ	_	2	ccomp	_	_
10	PEK	_	PRON	PEK	_	8	conj	_	_
11	SVANS-VIFTA	_	VERB	VB	_	2	conj	_	_

~~~


