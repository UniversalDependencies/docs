

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

2935 nodes (1%) are attached to their parents as `advcl`.

2296 instances of `advcl` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.803066439523.

The following 36 pairs of parts of speech are connected with `advcl`: [fr-pos/VERB]()-[fr-pos/VERB]() (2297; 78% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (213; 7% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (130; 4% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (93; 3% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (57; 2% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (21; 1% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (19; 1% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (16; 1% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (14; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (14; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (10; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (10; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (7; 0% instances), [fr-pos/AUX]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/ADP]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/SCONJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/AUX]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advcl	color:blue
1	Elle	_	PRON	_	_	2	nsubj	_	_
2	lutte	_	VERB	_	_	0	root	_	_
3	pour	_	ADP	_	_	4	mark	_	_
4	échapper	_	VERB	_	_	2	advcl	_	_
5	à	_	ADP	_	_	7	case	_	_
6	les	_	DET	_	_	7	det	_	_
7	tueurs	_	NOUN	_	_	4	nmod	_	_
8	à	_	ADP	_	_	10	case	_	_
9	ses	_	DET	_	_	10	nmod:poss	_	_
10	trousses	_	NOUN	_	_	4	nmod	_	_
11	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Une	_	DET	_	_	3	det	_	_
2	bonne	_	ADJ	_	_	3	amod	_	_
3	raison	_	NOUN	_	_	0	root	_	_
4	pour	_	ADP	_	_	5	mark	_	_
5	faire	_	VERB	_	_	3	advcl	_	_
6	un	_	DET	_	_	7	det	_	_
7	détour	_	NOUN	_	_	5	dobj	_	_
8	à	_	ADP	_	_	9	case	_	_
9	saint	_	NOUN	_	_	7	nmod	_	_
10	Jean	_	PROPN	_	_	9	name	_	_
11	de	_	ADP	_	_	9	compound	_	_
12	Maurienne	_	PROPN	_	_	9	name	_	_
13	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl	color:blue
1	Il	_	PRON	_	_	6	nsubj	_	_
2	n'	_	PART	_	_	6	neg	_	_
3	est	_	VERB	_	_	6	cop	_	_
4	pas	_	ADV	_	_	6	neg	_	_
5	aussi	_	ADV	_	_	6	advmod	_	_
6	anxieux	_	ADJ	_	_	0	root	_	_
7	qu'	_	SCONJ	_	_	10	mark	_	_
8	il	_	PRON	_	_	10	nsubj	_	_
9	y	_	PRON	_	_	10	expl	_	_
10	paraît	_	VERB	_	_	6	advcl	_	_
11	.	_	PUNCT	_	_	6	punct	_	_

~~~


