

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

600 nodes (10%) are attached to their parents as `root`.

600 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.65833333333333.

The following 8 pairs of parts of speech are connected with `root`: [kk-pos/ROOT]()-[kk-pos/VERB]() (434; 72% instances), [kk-pos/ROOT]()-[kk-pos/ADJ]() (71; 12% instances), [kk-pos/ROOT]()-[kk-pos/NOUN]() (67; 11% instances), [kk-pos/ROOT]()-[kk-pos/PRON]() (15; 3% instances), [kk-pos/ROOT]()-[kk-pos/ADV]() (7; 1% instances), [kk-pos/ROOT]()-[kk-pos/INTJ]() (2; 0% instances), [kk-pos/ROOT]()-[kk-pos/NUM]() (2; 0% instances), [kk-pos/ROOT]()-[kk-pos/PROPN]() (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Мен	мен	PRON	prn	_	2	nsubj	_	pers|p1|sg|nom
2	адасып	адас	VERB	v	_	0	root	_	iv|prc_perf
3	кеттім	кет	AUX	vaux	_	2	aux	_	ifi|p1|sg
4	.	.	PUNCT	sent	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Жер	жер	NOUN	n	_	2	nmod:poss	_	nom
2	беті	бет	NOUN	n	_	3	nmod:poss	_	px3sp|nom
3	суы	су	NOUN	n	_	4	nsubj	_	px3sp|nom
4	_	аз	ADJ	adj	_	0	root	_	_
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Иран	Иран	PROPN	np	_	4	nsubj	_	top|nom
2	—	—	PUNCT	guio	_	1	punct	_	_
3	діни	діни	ADJ	adj	_	4	amod	_	_
4	_	мемлекет	NOUN	n	_	0	root	_	nom
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	.	.	PUNCT	sent	_	4	punct	_	_

~~~


