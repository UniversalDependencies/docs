

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

57 nodes (1%) are attached to their parents as `nummod`.

57 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07017543859649.

The following 5 pairs of parts of speech are connected with `nummod`: [kk-pos/NOUN]()-[kk-pos/NUM]() (45; 79% instances), [kk-pos/NUM]()-[kk-pos/NUM]() (5; 9% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (4; 7% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (2; 4% instances), [kk-pos/ADJ]()-[kk-pos/NUM]() (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Ұлттық	ұлттық	ADJ	adj	_	2	amod	_	_
2	мейрамы	мейрам	NOUN	n	_	4	nsubj	_	px3sp|nom
3	11	11	NUM	num	_	4	nummod	_	_
4	_	ақпан	NOUN	n	_	0	root	_	nom
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	—	—	PUNCT	guio	_	4	punct	_	_
7	Революция	революция	NOUN	n	_	8	nmod:poss	_	nom
8	күні	күн	NOUN	n	_	4	appos	_	px3sp|nom
9	(	(	PUNCT	lpar	_	10	punct	_	_
10	1979	1979	NUM	num	_	4	appos	_	_
11	)	)	PUNCT	rpar	_	10	punct	_	_
12	.	.	PUNCT	sent	_	4	punct	_	_

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
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
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
6	_	е	AUX	cop	_	5	cop	_	aor|p3|sg
7	.	.	PUNCT	sent	_	5	punct	_	_

~~~


