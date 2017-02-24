

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

15 nodes (4%) are attached to their parents as `dobj`.

11 instances of `dobj` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6.

The following 6 pairs of parts of speech are connected with `dobj`: [sv-pos/VERB]()-[sv-pos/NOUN]() (9; 60% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (2; 13% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (1; 7% instances), [sv-pos/VERB]()-[sv-pos/X]() (1; 7% instances), [sv-pos/X]()-[sv-pos/NOUN]() (1; 7% instances), [sv-pos/X]()-[sv-pos/X]() (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dobj	color:blue
1	SÄTTA-SIG	_	VERB	VB	_	0	root	_	_
2	ÄTA(Q)	_	VERB	VB	_	1	conj	_	_
3	TITTA-PÅ	_	VERB	VB	_	1	conj	_	_
4	SNÖ^GUBBE	_	NOUN	NN	_	3	dobj	_	_
5	PEK	_	DET	PEK	_	4	det	_	_
6	ÄTA(Q)	_	VERB	VB	_	2	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dobj	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dobj	color:blue
1	KLÄ-PÅ.HUVUDDEL	_	X	?	_	0	root	_	_
2	HAND(G)+HANTERA@p	_	VERB	VBAV	_	1	conj	_	_
3	SPRINGA(Lb)	_	VERB	VB	_	1	conj	_	_
4	ENTITET(Yb)+FÖRFLYTTA@p	_	VERB	VBAV	_	1	conj	_	_
5	MÖSSA(G)	_	X	?	_	6	dobj	_	_
6	LÅTA-VARA	_	X	G	_	1	conj	_	_

~~~


