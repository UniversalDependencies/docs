

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

10 nodes (1%) are attached to their parents as `amod`.

6 instances of `amod` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 5 pairs of parts of speech are connected with `amod`: [swl-pos/NOUN]()-[swl-pos/ADJ]() (4; 40% instances), [swl-pos/NOUN]()-[swl-pos/X]() (3; 30% instances), [swl-pos/ADJ]()-[swl-pos/ADV]() (1; 10% instances), [swl-pos/VERB]()-[swl-pos/ADJ]() (1; 10% instances), [swl-pos/VERB]()-[swl-pos/ADV]() (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	KLÄ-PÅ.NEDERDEL	_	X	?	_	0	root	_	_
2	KLÄ-PÅ.ÖVERDEL	_	X	?	_	1	conj	_	_
3	VARM	_	ADJ	JJ	_	4	amod	_	_
4	KLÄDER	_	NOUN	NN	_	1	dobj	_	_
5	MÖSSA(G)	_	X	?	_	4	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	PRO1	_	PRON	PN	_	2	nsubj	_	_
2	VISUALISERA	_	VERB	VB	_	0	root	_	_
3	EN	_	NUM	RG	_	4	nummod	_	_
4	FILM	_	NOUN	NN	_	2	dobj	_	_
5	KORTVARIG(J)	_	X	?	_	4	amod	_	_
6	FILM	_	NOUN	NN	_	4	conj	_	_
7	HUMOR(Lbs)	_	NOUN	NN	_	1	conj	_	_
8	TILLÄGGA	_	VERB	VB	_	2	conj	_	_
9	PRO1	_	PRON	PN	_	1	conj	_	_
10	SKULLE-VILJA(L)	_	VERB	VB	_	2	conj	_	_
11	NÄR	_	ADV	AB	_	2	advmod	_	_
12	TID-FRAMÅT	_	ADV	AB	_	2	advmod	_	_
13	NÄR	_	ADV	AB	_	11	conj	_	_
14	KAN	_	VERB	VB	_	15	aux	_	_
15	ÅR-FRAMTID+EN	_	ADV	AB	_	2	conj	_	_
16	ÅR-FRAMTID+TVÅ	_	ADV	AB	_	15	conj	_	_
17	PU@g	_	INTJ	G	_	2	discourse	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	HUND	_	NOUN	NN	_	2	nsubj	_	_
2	TITTA-PÅ	_	VERB	VB	_	0	root	_	_
3	ENTITET(YYb)+@p>huvud	_	VERB	VBAV	_	2	conj	_	_
4	FÖR	_	ADV	AB	_	5	advmod	_	_
5	TUNG	_	ADJ	JJ	_	6	amod	_	_
6	ENTITET(YYb)+@p>huvud	_	VERB	VBAV	_	3	conj	_	_
7	VARELSE(VVb)+FÖRFLYTTA@p	_	VERB	VBAV	_	3	conj	_	_
8	MARK	_	NOUN	NN	_	2	nmod	_	_

~~~


