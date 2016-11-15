

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

3 nodes (0%) are attached to their parents as `xcomp`.

3 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `xcomp`: [swl-pos/VERB]()-[swl-pos/VERB]() (2; 67% instances), [swl-pos/VERB]()-[swl-pos/NOUN]() (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	JA@ub@z	_	INTJ	INTERJ	_	2	discourse	_	_
2	FÖRSTÅ(L)	_	VERB	VB	_	0	root	_	_
3	VARFÖR	_	ADV	AB	_	2	mark	_	_
4	SMITA	_	VERB	VB	_	2	xcomp	_	_
5	FRÅN	_	ADP	PP	_	6	case	_	_
6	SKÅL	_	NOUN	NN	_	4	nmod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	HUND	_	NOUN	NN	_	2	nsubj	_	_
2	LUKTA	_	VERB	VB	_	0	root	_	_
3	BANSTRÄCKA	_	VERB	VBAV	_	2	conj	_	_
4	POJKE	_	NOUN	NN	_	5	nsubj	_	_
5	SITTA	_	VERB	VB	_	2	conj	_	_
6	HAND(GG)+HANTERA@p	_	VERB	VBAV	_	2	conj	_	_
7	FÖRSTÅ-INTE	_	VERB	VB	_	2	conj	_	_
8	VARELSE(NN)+RÖRELSE@p	_	VERB	VBAV	_	2	conj	_	_
9	VARA	_	VERB	VB	_	10	cop	_	_
10	HJORT@b	_	NOUN	NN	_	8	xcomp	_	_
11	HJORT	_	NOUN	NN	_	10	compound	_	_
12	HAND(GG)+HANTERA@p	_	VERB	VBAV	_	2	conj	_	_
13	HJORT	_	NOUN	NN	_	14	nsubj	_	_
14	IRRITERAD	_	VERB	VB	_	12	ccomp	_	_
15	VARELSE(VVb)+RÖRELSE@p	_	VERB	VBAV	_	14	conj	_	_
16	STANNA-TVÄRT	_	VERB	VB	_	14	conj	_	_
17	FORM(J)+BESKRIVNING+FORM(J)@p	_	VERB	VBAV	_	16	nmod	_	_
18	VARELSE(VVb)+FÖRFLYTTA@p	_	VERB	VBAV	_	16	conj	_	_
19	POJKE	_	NOUN	NN	_	20	nsubj	_	_
20	VARELSE(Vb)+FÖRFLYTTA+ENTITET(N)@p	_	VERB	VBAV	_	18	ccomp	_	_
21	INUTI	_	VERB	VBPP	_	22	case	_	_
22	VATTEN	_	NOUN	NN	_	18	nmod	_	_

~~~


