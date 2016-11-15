

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

50 nodes (1%) are attached to their parents as `appos`.

43 instances of `appos` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.94.

The following 13 pairs of parts of speech are connected with `appos`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (16; 32% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (8; 16% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (7; 14% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (5; 10% instances), [kk-pos/PROPN]()-[kk-pos/NUM]() (4; 8% instances), [kk-pos/PROPN]()-[kk-pos/PROPN]() (3; 6% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 2% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (1; 2% instances), [kk-pos/PRON]()-[kk-pos/NOUN]() (1; 2% instances), [kk-pos/PRON]()-[kk-pos/NUM]() (1; 2% instances), [kk-pos/PRON]()-[kk-pos/PRON]() (1; 2% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (1; 2% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 appos	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 appos	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Қазақстан	Қазақстан	PROPN	np	_	2	nmod:poss	_	top|nom
2	Президенті	президент	NOUN	n	_	14	nsubj	_	px3sp|nom
3	Нұрсұлтан	Нұрсұлтан	PROPN	np	_	4	name	_	ant|m|attr
4	Назарбаев	Назарбаев	PROPN	np	_	2	appos	_	cog|m|nom
5	екі	екі	NUM	num	_	6	nummod	_	_
6	рет	рет	NOUN	n	_	13	nmod	_	nom
7	(	(	PUNCT	lpar	_	10	punct	_	_
8	1992	1992	NUM	num	_	10	conj	_	_
9	;	;	PUNCT	sent	_	10	punct	_	_
10	1996	1996	NUM	num	_	6	appos	_	_
11	)	)	PUNCT	rpar	_	10	punct	_	_
12	Иранда	Иран	PROPN	np	_	13	nmod	_	top|loc
13	болып	бол	VERB	v	_	14	advcl	_	iv|prc_perf
14	қайтты	қайт	VERB	v	_	0	root	_	iv|ifi|p3|sg
15	.	.	PUNCT	sent	_	14	punct	_	_

~~~


