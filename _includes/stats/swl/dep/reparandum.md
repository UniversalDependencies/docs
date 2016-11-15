

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

6 nodes (1%) are attached to their parents as `reparandum`.

6 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `reparandum`: [swl-pos/NOUN]()-[swl-pos/X]() (2; 33% instances), [swl-pos/VERB]()-[swl-pos/X]() (2; 33% instances), [swl-pos/NOUN]()-[swl-pos/VERB]() (1; 17% instances), [swl-pos/VERB]()-[swl-pos/VERB]() (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 reparandum	color:blue
1	tp@&	_	X	?	_	2	reparandum	_	_
2	POJKE	_	NOUN	NN	_	3	nsubj	_	_
3	LÄGGA-SIG	_	VERB	VB	_	0	root	_	_
4	HUND	_	NOUN	NN	_	2	conj	_	_
5	VARELSE(VVb)+BEFINNA@p	_	VERB	VBAV	_	3	conj	_	_
6	SOVA(Jv)	_	VERB	VB	_	3	conj	_	_
7	TIDEN-GÅR@z	_	VERB	VB	_	6	advcl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 reparandum	color:blue
1	TRÖTT	_	VERB	VBS	_	0	root	_	_
2	glosa@&	_	X	?	_	3	reparandum	_	_
3	MÖRK	_	VERB	VBS	_	1	conj	_	_
4	LÅTA-VARA@z	_	X	G	_	1	discourse	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 reparandum	color:blue
1	HA	_	VERB	VB	_	0	root	_	_
2	form(Yb)@p@&	_	VERB	VBAV	_	4	reparandum	_	_
3	GLAS	_	NOUN	NN	_	4	compound	_	_
4	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	1	dobj	_	_
5	FORM(Yb)@p@hd	_	VERB	VBAV	_	4	dep	_	_
6	INUTI	_	VERB	VBPP	_	1	acl:relcl	_	_
7	GRODA	_	NOUN	NN	_	6	nsubj	_	_
8	DJUR(JJv)@ca	_	VERB	VBCA	_	6	conj	_	_
9	AVGRÄNS	_	X	BOJ	_	4	dep	_	_
10	INUTI	_	VERB	VBPP	_	6	conj	_	_
11	TITTA-PÅ	_	VERB	VB	_	1	conj	_	_
12	SAMTALA	_	VERB	VB	_	1	conj	_	_
13	GLOSA:(PD)@z	_	X	?	_	1	conj	_	_

~~~


