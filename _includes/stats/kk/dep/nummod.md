

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

52 nodes (1%) are attached to their parents as `nummod`.

52 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07692307692308.

The following 5 pairs of parts of speech are connected with `nummod`: [kk-pos/NOUN]()-[kk-pos/NUM]() (40; 77% instances), [kk-pos/NUM]()-[kk-pos/NUM]() (5; 10% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (4; 8% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (2; 4% instances), [kk-pos/ADJ]()-[kk-pos/NUM]() (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Ерназардың	Ерназар	PROPN	np	_	3	nmod:poss	_	ant|m|gen
2	сегіз	сегіз	NUM	num	_	3	nummod	_	_
3	ұлы	ұл	NOUN	n	_	4	nsubj	_	px3sp|nom
4	болыпты	бол	VERB	v	_	0	root	_	iv|ifi|evid|p3|sg
5	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Астанасы	астана	NOUN	n	_	4	nsubj	_	px3sp|nom
2	—	—	PUNCT	guio	_	1	punct	_	_
3	Тегеран	Тегеран	PROPN	np	_	4	nmod:poss	_	top|nom
4	_	қала	NOUN	n	_	0	root	_	px3sp|nom
5	_	е	VERB	cop	_	4	cop	_	aor|p3|sg
6	(	(	PUNCT	lpar	_	10	punct	_	_
7	айналасын	айнала	NOUN	n	_	8	dobj	_	px3sp|acc
8	қосқанда	қос	VERB	v	_	10	advcl	_	tv|ger_past|loc
9	12	12	NUM	num	_	10	nummod	_	_
10	миллионнан	миллион	NUM	num	_	4	appos	_	subst|abl
11	астам	астам	ADP	post	_	10	case	_	_
12	)	)	PUNCT	rpar	_	10	punct	_	_
13	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Жер	жер	NOUN	n	_	2	nmod:poss	_	nom
2	көлемі	көлем	NOUN	n	_	5	nsubj	_	px3sp|nom
3	1,648	1,648	NUM	num	_	4	nummod	_	_
4	млн.	млн.	NOUN	abbr	_	5	nummod	_	_
5	_	км²	NOUN	abbr	_	0	root	_	_
6	_	е	VERB	cop	_	5	cop	_	aor|p3|sg
7	.	.	PUNCT	sent	_	5	punct	_	_

~~~


