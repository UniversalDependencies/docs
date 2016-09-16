

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

89 nodes (2%) are attached to their parents as `acl`.

87 instances of `acl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74157303370787.

The following 5 pairs of parts of speech are connected with `acl`: [kk-pos/NOUN]()-[kk-pos/VERB]() (79; 89% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (4; 4% instances), [kk-pos/PROPN]()-[kk-pos/VERB]() (3; 3% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (2; 2% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 acl	color:blue
1	Астанаға	Астана	PROPN	np	_	2	nmod	_	top|dat
2	баратын	бар	VERB	v	_	3	acl	_	iv|gpr_impf
3	пойыз	пойыз	NOUN	n	_	4	nsubj	_	nom
4	_	қайда	ADV	adv	_	0	root	_	itg
5	_	е	VERB	cop	_	4	cop	_	aor|p3|sg
6	?	?	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 acl	color:blue
1	9	9	NUM	num	_	3	conj	_	_
2	—	—	PUNCT	guio	_	3	punct	_	_
3	10	10	NUM	num	_	4	amod	_	_
4	ғасырларда	ғасыр	NOUN	n	_	14	nmod	_	pl|loc
5	елде	ел	NOUN	n	_	14	nmod	_	loc
6	Араб	араб	NOUN	n	_	7	nmod:poss	_	nom
7	халифатына	халифат	NOUN	n	_	11	nmod	_	px3sp|dat
8	шартты	шартты	ADJ	adj	_	9	amod	_	_
9	_	түр	NOUN	n	_	11	nmod	_	loc
10	_	ғана	PART	postadv	_	9	advmod	_	_
11	тәуелді	тәуелді	ADJ	adj	_	13	acl	_	_
12	болған	бол	VERB	v	_	11	cop	_	iv|gpr_past
13	әмірліктер	әмірлік	NOUN	n	_	14	nsubj	_	pl|nom
14	құрылды	құр	VERB	v	_	0	root	_	tv|pass|ifi|p3|pl
15	.	.	PUNCT	sent	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl	color:blue
1	Олар	олар	PRON	prn	_	8	nsubj	_	pers|p3|pl|nom
2	елде	ел	NOUN	n	_	8	nmod	_	loc
3	Хулагу	Хулагу	PROPN	np	_	4	nmod:poss	_	al|nom
4	әулетіне	әулет	NOUN	n	_	5	dobj	_	px3sp|dat
5	қарайтын	қара	VERB	v	_	6	acl	_	tv|gpr_impf
6	ильхандар	ильхан	PROPN	np	_	7	nmod:poss	_	al|pl|nom
7	мемлекетін	мемлекет	NOUN	n	_	8	dobj	_	px3sp|acc
8	құрды	құр	VERB	v	_	0	root	_	tv|ifi|p3|sg
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


