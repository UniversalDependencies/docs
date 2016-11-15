

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is a language-specific subtype of [acl]().

7 nodes (1%) are attached to their parents as `acl:relcl`.

6 instances of `acl:relcl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.57142857142857.

The following 5 pairs of parts of speech are connected with `acl:relcl`: [swl-pos/VERB]()-[swl-pos/VERB]() (3; 43% instances), [swl-pos/NOUN]()-[swl-pos/ADJ]() (1; 14% instances), [swl-pos/NOUN]()-[swl-pos/NOUN]() (1; 14% instances), [swl-pos/NOUN]()-[swl-pos/VERB]() (1; 14% instances), [swl-pos/VERB]()-[swl-pos/NOUN]() (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl:relcl	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl:relcl	color:blue
1	GRODA	_	NOUN	NN	_	2	nmod:pass	_	_
2	MAMMA*PAPPA	_	NOUN	NN	_	3	nsubj	_	_
3	SITTA(VVb)	_	VERB	VBAV?/VB?	_	0	root	_	_
4	SITTA(Vb)@hd	_	VERB	VBAV	_	3	dep	_	_
5	UNGE	_	NOUN	NN	_	6	nsubj	_	_
6	SITTA(Vb).FL	_	X	?	_	3	conj	_	_
7	HEJ-DÅ@g@z	_	X	G	_	3	conj	_	_
8	EN-TILL	_	NUM	RG	_	9	nummod	_	_
9	UNGE	_	NOUN	NN	_	11	nsubj	_	_
10	BAKOM	_	ADP	PP	_	11	advmod	_	_
11	SITTA(Vb)	_	VERB	VBAV/VB?	_	3	conj	_	_
12	SYNS	_	VERB	VB	_	13	cop	_	_
13	TJOCK	_	ADJ	JJ	_	9	acl:relcl	_	_
14	OMÖJLIG	_	ADV	AB	_	16	aux	_	_
15	SITTA(Vb)@hd	_	VERB	VBAV	_	3	dep	_	_
16	VARELSE(Vb)+HOPPA-UPP@p	_	VERB	VBAV	_	3	conj	_	_
17	PASSIVERAD@z	_	ADJ	JJ	_	3	conj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	JA@ub@z	_	INTJ	INTERJ	_	9	discourse	_	_
2	POJKE	_	NOUN	NN	_	9	nsubj	_	_
3	LITEN-PERSON@kl	_	NOUN	NNKL	_	2	compound	_	_
4	SE-UT	_	VERB	VB	_	2	cop	_	_
5	SJU_ÅTTA	_	NUM	RG	_	6	nummod	_	_
6	ÅR@b	_	NOUN	NN	_	2	acl:relcl	_	_
7	HUND	_	NOUN	NN	_	2	conj	_	_
8	SITTA(VVb)	_	VERB	VBAV?/VB?	_	7	acl:relcl	_	_
9	TITTA-PÅ@z	_	VERB	VB	_	0	root	_	_
10	TITTA-PÅ	_	VERB	VB	_	9	conj	_	_

~~~


