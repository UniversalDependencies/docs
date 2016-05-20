

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

113 nodes (2%) are attached to their parents as `aux`.

113 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07079646017699.

The following 5 pairs of parts of speech are connected with `aux`: [kk-pos/VERB]()-[kk-pos/AUX]() (106; 94% instances), [kk-pos/ADJ]()-[kk-pos/AUX]() (2; 2% instances), [kk-pos/AUX]()-[kk-pos/AUX]() (2; 2% instances), [kk-pos/NOUN]()-[kk-pos/AUX]() (2; 2% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Мен	мен	PRON	prn	_	2	nsubj	_	pers|p1|sg|nom
2	адасып	адас	VERB	v	_	0	root	_	iv|prc_perf
3	кеттім	кет	AUX	vaux	_	2	aux	_	ifi|p1|sg
4	.	.	PUNCT	sent	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 aux	color:blue
1	Кісі	кісі	NOUN	n	_	5	nmod	_	_
2	болғалы	бол	VERB	cop	_	1	cop	_	_
3	,	,	PUNCT	cm	_	1	punct	_	_
4	үйі	үй	NOUN	n	_	5	nsubj	_	_
5	үй	үй	NOUN	n	_	0	root	_	_
6	болып	бол	VERB	cop	_	5	cop	_	_
7	келеді	кел	AUX	vaux	_	5	aux	_	_
8	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 aux	color:blue
1	Қазірде	қазірде	ADV	adv	_	8	advmod	_	_
2	орыстан	орыс	NOUN	n	_	3	nmod	_	abl
3	оқыған	оқы	VERB	v	_	4	acl	_	iv|gpr_past
4	балалардан	бала	NOUN	n	_	8	nmod	_	pl|abl
5	артық	артық	ADV	adv	_	6	advmod	_	_
6	жақсы	жақсы	ADJ	adj	_	7	amod	_	_
7	кісі	кісі	NOUN	n	_	8	nsubj	_	nom
8	шыға	шық	VERB	v	_	0	root	_	iv|prc_impf
9	_	ал	AUX	vaux	_	8	aux	_	neg|prc_perf
10	_	да	PART	postadv	_	8	advmod	_	_
11	тұр	тұр	AUX	vaux	_	9	aux	_	pres|p3|sg
12	.	.	PUNCT	sent	_	8	punct	_	_

~~~


