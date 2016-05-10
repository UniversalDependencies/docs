

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

39 nodes (1%) are attached to their parents as `discourse`.

27 instances of `discourse` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.48717948717949.

The following 11 pairs of parts of speech are connected with `discourse`: [kk-pos/VERB]()-[kk-pos/PART]() (16; 41% instances), [kk-pos/ADJ]()-[kk-pos/PART]() (7; 18% instances), [kk-pos/VERB]()-[kk-pos/INTJ]() (5; 13% instances), [kk-pos/ADJ]()-[kk-pos/INTJ]() (4; 10% instances), [kk-pos/AUX]()-[kk-pos/INTJ]() (1; 3% instances), [kk-pos/NOUN]()-[kk-pos/ADV]() (1; 3% instances), [kk-pos/NOUN]()-[kk-pos/INTJ]() (1; 3% instances), [kk-pos/NOUN]()-[kk-pos/PART]() (1; 3% instances), [kk-pos/PRON]()-[kk-pos/PRON]() (1; 3% instances), [kk-pos/PROPN]()-[kk-pos/PART]() (1; 3% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 discourse	color:blue
1	Ол	ол	PRON	prn	_	14	nsubj	_	pers|p3|sg|nom
2	"	"	PUNCT	sent	_	9	punct	_	_
3	Азамат	Азамат	PROPN	np	_	6	nsubj	_	ant|m|nom
4	қай	қай	DET	det	_	5	det	_	itg
5	жерге	жер	NOUN	n	_	6	nmod	_	dat
6	кетті	кет	VERB	v	_	9	parataxis	_	iv|ifi|p3|sg
7	?	?	PUNCT	sent	_	6	punct	_	_
8	Оны	ол	PRON	prn	_	9	dobj	_	pers|p3|sg|acc
9	_	көр	VERB	v	_	13	ccomp	_	tv|ifi|p2|pl
10	_	ма	PART	qst	_	9	discourse	_	_
11	?	?	PUNCT	sent	_	9	punct	_	_
12	"	"	PUNCT	sent	_	9	punct	_	_
13	деп	де	VERB	v	_	14	advcl	_	tv|gna_perf
14	іздеп	ізде	VERB	v	_	0	root	_	tv|prc_perf
15	жатыр	жат	AUX	vaux	_	14	aux	_	pres|p3|sg
16	.	.	PUNCT	sent	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 discourse	color:blue
1	Сізде	сіз	PRON	prn	_	4	nmod	_	pers|p2|sg|frm|loc
2	бірдеме	бірдеме	PRON	prn	_	4	nsubj	_	ind|nom
3	тазалау	таза	ADJ	adj	_	2	amod	_	comp
4	_	бар	ADJ	adj	_	0	root	_	_
5	_	е	VERB	cop	_	4	cop	_	aor|p3|sg
6	_	ма	PART	qst	_	4	discourse	_	_
7	?	?	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse	color:blue
1	"	"	PUNCT	sent	_	6	punct	_	_
2	Жоқ	жоқ	INTJ	ij	_	6	discourse	_	_
3	,	,	PUNCT	cm	_	2	punct	_	_
4	Айгүл	Айгүл	PROPN	np	_	6	vocative	_	ant|f|nom
5	,	,	PUNCT	cm	_	4	punct	_	_
6	айта	айт	VERB	v	_	9	ccomp	_	tv|prc_impf
7	алмаймын	ал	AUX	vaux	_	6	aux	_	neg|aor|p1|sg
8	"	"	PUNCT	sent	_	6	punct	_	_
9	деп	де	VERB	v	_	11	advcl	_	tv|gna_perf
10	анасы	ана	NOUN	n	_	11	nsubj	_	px3sp|nom
11	жауап__береді	жауап__бер	VERB	v	_	0	root	_	iv|aor|p3|sg
12	.	.	PUNCT	sent	_	11	punct	_	_

~~~


