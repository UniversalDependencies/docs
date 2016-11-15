

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

24 nodes (4%) are attached to their parents as `compound`.

16 instances of `compound` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 5 pairs of parts of speech are connected with `compound`: [swl-pos/NOUN]()-[swl-pos/NOUN]() (11; 46% instances), [swl-pos/VERB]()-[swl-pos/NOUN]() (7; 29% instances), [swl-pos/NOUN]()-[swl-pos/VERB]() (4; 17% instances), [swl-pos/NOUN]()-[swl-pos/X]() (1; 4% instances), [swl-pos/VERB]()-[swl-pos/ADP]() (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	GLAS	_	NOUN	NN	_	2	compound	_	_
2	FORM(YYb)+UTSTRÄCKNING@p	_	VERB	VBAV	_	3	nsubj	_	_
3	TRASIG	_	VERB	VBS	_	0	root	_	_
4	ENTITET(SS)+FÖRFLYTTA@p>huvud	_	VERB	VBAV	_	3	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	STEN	_	NOUN	NN	_	7	nmod	_	_
2	FORM(Yb)+BESKRIVNING+FORM(Yb)@p	_	VERB	VBAV	_	1	compound	_	_
3	TRÄD	_	NOUN	NN	_	1	conj	_	_
4	FORM(LLvt)+BESKRIVNING@p	_	VERB	VBAV	_	3	compound	_	_
5	KANSKE	_	ADV	AB	_	7	advmod	_	_
6	GRODA	_	NOUN	NN	_	7	nsubj	_	_
7	INUTI	_	VERB	VBPP	_	0	root	_	_
8	BAKOM	_	ADP	PP	_	1	case	_	_
9	KANSKE	_	ADV	AB	_	7	advmod	_	_

~~~


