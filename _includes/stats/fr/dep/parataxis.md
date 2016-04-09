

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

600 nodes (0%) are attached to their parents as `parataxis`.

543 instances of `parataxis` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.8033333333333.

The following 24 pairs of parts of speech are connected with `parataxis`: [fr-pos/VERB]()-[fr-pos/VERB]() (315; 53% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (100; 17% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (54; 9% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (36; 6% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (24; 4% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (16; 3% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (9; 2% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (8; 1% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (8; 1% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (5; 1% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (4; 1% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (3; 1% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (3; 1% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (3; 1% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 parataxis	color:blue
1	La	_	DET	_	_	2	det	_	_
2	question	_	NOUN	_	_	4	nsubj	_	_
3	suivante	_	ADJ	_	_	2	amod	_	_
4	est	_	VERB	_	_	9	parataxis	_	_
5	:	_	PUNCT	_	_	4	punct	_	_
6	Peut	_	AUX	_	_	9	aux	_	_
7	-on	_	PRON	_	_	9	nsubj	_	_
8	y	_	ADV	_	_	9	advmod	_	_
9	prendre	_	VERB	_	_	0	root	_	_
10	épouse	_	NOUN	_	_	9	dobj	_	_
11	?	_	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 parataxis	color:blue
1	Comme	_	ADV	_	_	2	mark	_	_
2	dirait	_	VERB	_	_	10	parataxis	_	_
3	quelqu'un	_	PRON	_	_	2	nsubj	_	_
4	,	_	PUNCT	_	_	10	punct	_	_
5	je	_	PRON	_	_	10	nsubj	_	_
6	ne	_	PART	_	_	10	neg	_	_
7	suis	_	VERB	_	_	10	cop	_	_
8	pas	_	ADV	_	_	10	neg	_	_
9	une	_	DET	_	_	10	det	_	_
10	girouette	_	NOUN	_	_	0	root	_	_
11	!	_	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 parataxis	color:blue
1	En	_	ADP	_	_	2	mwe	_	_
2	outre	_	ADV	_	_	7	advmod	_	_
3	les	_	DET	_	_	4	det	_	_
4	salles	_	NOUN	_	_	7	nsubj	_	_
5	sont	_	VERB	_	_	7	cop	_	_
6	très	_	ADV	_	_	7	advmod	_	_
7	belles	_	ADJ	_	_	0	root	_	_
8	ce	_	PRON	_	_	11	nsubj	_	_
9	qui	_	PRON	_	_	8	mwe	_	_
10	ne	_	PART	_	_	11	neg	_	_
11	gâte	_	VERB	_	_	7	parataxis	_	_
12	rien	_	PRON	_	_	11	dobj	_	_
13	.	_	PUNCT	_	_	7	punct	_	_

~~~


