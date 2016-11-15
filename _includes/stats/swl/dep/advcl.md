

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

11 nodes (2%) are attached to their parents as `advcl`.

11 instances of `advcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.81818181818182.

The following 4 pairs of parts of speech are connected with `advcl`: [swl-pos/VERB]()-[swl-pos/VERB]() (8; 73% instances), [swl-pos/VERB]()-[swl-pos/ADV]() (1; 9% instances), [swl-pos/VERB]()-[swl-pos/NOUN]() (1; 9% instances), [swl-pos/X]()-[swl-pos/VERB]() (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advcl	color:blue
1	SOVA(Jv)	_	VERB	VB	_	0	root	_	_
2	TIDEN-GÅR@z	_	VERB	VB	_	1	advcl	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	ENTITET(J)+FÖRFLYTTA+ENTITET(J)@p	_	VERB	VBAV	_	0	root	_	_
2	VARM	_	ADJ	JJ	_	3	amod	_	_
3	LUFTCIRCULATION@z	_	NOUN	NN	_	1	advcl	_	_
4	SKÖN	_	ADJ	JJ	_	3	amod	_	_
5	LUFTCIRCULATION@z	_	NOUN	NN	_	3	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	SCHASA@ca	_	VERB	VBCA	_	0	root	_	_
2	BI	_	NOUN	NN	_	3	nsubj	_	_
3	BORTA	_	ADV	AB	_	1	advcl	_	_
4	FINEMANG	_	ADJ	JJ	_	1	discourse	_	_
5	LÅTA-VARA	_	X	G	_	1	discourse	_	_

~~~


