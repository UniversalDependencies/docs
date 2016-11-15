

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

308 nodes (5%) are attached to their parents as `conj`.

308 instances of `conj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.6038961038961.

The following 18 pairs of parts of speech are connected with `conj`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (115; 37% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (83; 27% instances), [kk-pos/PROPN]()-[kk-pos/PROPN]() (40; 13% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (23; 7% instances), [kk-pos/NUM]()-[kk-pos/NUM]() (10; 3% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (8; 3% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (6; 2% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (4; 1% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (4; 1% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (4; 1% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (3; 1% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (2; 1% instances), [kk-pos/AUX]()-[kk-pos/PROPN]() (1; 0% instances), [kk-pos/CONJ]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (1; 0% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 conj	color:blue
1	Орыс	орыс	NOUN	n	_	3	conj	_	nom
2	және	және	CONJ	cnjcoo	_	3	cc	_	_
3	қазақ	қазақ	NOUN	n	_	4	nmod:poss	_	nom
4	тілдерін	тіл	NOUN	n	_	5	dobj	_	pl|px3sp|acc
5	біледі	біл	VERB	v	_	0	root	_	tv|aor|p3|sg
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 conj	color:blue
1	«	«	PUNCT	lquot	_	6	punct	_	_
2	Төрге	төр	NOUN	n	_	3	nmod	_	dat
3	шық	шық	VERB	v	_	6	conj	_	iv|imp|p2|sg
4	,	,	PUNCT	cm	_	6	punct	_	_
5	тамақ	тамақ	NOUN	n	_	6	dobj	_	nom
6	іш	іш	VERB	v	_	10	ccomp	_	tv|imp|p2|sg
7	»	»	PUNCT	rquot	_	6	punct	_	_
8	,	,	PUNCT	cm	_	6	punct	_	_
9	-	-	PUNCT	guio	_	6	punct	_	_
10	демепті	де	VERB	v	_	0	root	_	tv|neg|ifi|evid|p3|pl
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 conj	color:blue
1	Непал	Непал	PROPN	np	_	3	conj	_	top|nom
2	мен	мен	CONJ	cnjcoo	_	3	cc	_	_
3	Тибетке	Тибет	PROPN	np	_	5	nmod	_	top|dat
4	бет	бет	NOUN	n	_	5	dobj	_	nom
5	алды	ал	VERB	v	_	0	root	_	tv|ifi|p3|sg
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


