

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

5 nodes (1%) are attached to their parents as `cop`.

4 instances of `cop` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 3 pairs of parts of speech are connected with `cop`: [swl-pos/NOUN]()-[swl-pos/VERB]() (3; 60% instances), [swl-pos/ADJ]()-[swl-pos/VERB]() (1; 20% instances), [swl-pos/VERB]()-[swl-pos/VERB]() (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	VARA*PEK	_	VERB	VB	_	2	cop	_	_
2	SAGA	_	NOUN	NN	_	0	root	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 cop	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 cop	color:blue
1	JA@ub@z	_	INTJ	INTERJ	_	9	discourse	_	_
2	EN	_	NUM	RG	_	3	det	_	_
3	BARN	_	NOUN	NN	_	4	nmod	_	_
4	POJKE	_	NOUN	NN	_	9	nsubj	_	_
5	SYNS	_	VERB	VB	_	9	cop	_	_
6	FEM	_	NUM	RG	_	7	nummod	_	_
7	ÅR@b	_	NOUN	NN	_	9	acl:relcl	_	_
8	PEK	_	DET	PEK	_	4	det	_	_
9	HA	_	VERB	VB	_	0	root	_	_
10	TAX@b	_	NOUN	NN	_	9	dobj	_	_
11	GROVLEK(JJ)	_	X	?	_	10	amod	_	_
12	HEMMA@z	_	ADV	AB	_	9	advmod	_	_
13	PLUS	_	CONJ	KN	_	4	cc	_	_
14	EN	_	NUM	RG	_	15	det	_	_
15	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	4	conj	_	_
16	INUTI	_	VERB	VBPP	_	9	acl:relcl	_	_
17	AVGRÄNS	_	X	BOJ	_	4	conj	_	_
18	GRODA	_	NOUN	NN	_	16	nsubj	_	_
19	GROVLEK(JJv)	_	X	?	_	18	amod	_	_
20	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	4	conj	_	_
21	TITTA-PÅ	_	VERB	VB	_	9	conj	_	_

~~~


