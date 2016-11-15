

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

12 nodes (2%) are attached to their parents as `acl`.

11 instances of `acl` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58333333333333.

The following 6 pairs of parts of speech are connected with `acl`: [swl-pos/NOUN]()-[swl-pos/VERB]() (5; 42% instances), [swl-pos/NOUN]()-[swl-pos/ADJ]() (2; 17% instances), [swl-pos/NOUN]()-[swl-pos/ADV]() (2; 17% instances), [swl-pos/NOUN]()-[swl-pos/X]() (1; 8% instances), [swl-pos/PRON]()-[swl-pos/VERB]() (1; 8% instances), [swl-pos/VERB]()-[swl-pos/VERB]() (1; 8% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 acl	color:blue
1	PI	_	ADV	AB	_	4	advmod	_	_
2	GRODA	_	NOUN	NN	_	4	nsubj	_	_
3	PERF	_	VERB	VB	_	4	aux	_	_
4	VARELSE(Vb)+FÖRFLYTTA@p	_	VERB	VBAV	_	0	root	_	_
5	AVGRÄNS	_	X	BOJ	_	4	nmod	_	_
6	HAND(JJv)+HANTERA@p	_	VERB	VBAV	_	4	conj	_	_
7	HAND(JJv)@p@hd	_	VERB	VBAV	_	4	dep	_	_
8	VARELSE(Vb)+FÖRFLYTTA@p	_	VERB	VBAV	_	4	conj	_	_
9	BEGE-SIG-IVÄG	_	VERB	VB	_	4	conj	_	_
10	BORTA	_	ADV	AB	_	2	acl	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	HUND	_	NOUN	NN	_	2	nsubj	_	_
2	SVANS-VIFTA	_	VERB	VB	_	0	root	_	_
3	GLAD	_	ADJ	JJ	_	1	acl	_	_
4	SVANS-VIFTA	_	VERB	VB	_	2	conj	_	_
5	FORM(YYb)+UTSTRÄCKNING@p	_	VERB	VBAV	_	6	nsubj	_	_
6	TRASIG	_	VERB	VBS	_	2	advcl	_	_
7	DELA-UPP.PL	_	VERB	VB	_	6	conj	_	_
8	SPRIDA	_	VERB	VB	_	6	conj	_	_

~~~


