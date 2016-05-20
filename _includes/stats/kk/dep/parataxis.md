

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

38 nodes (1%) are attached to their parents as `parataxis`.

25 instances of `parataxis` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.68421052631579.

The following 11 pairs of parts of speech are connected with `parataxis`: [kk-pos/VERB]()-[kk-pos/VERB]() (19; 50% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (6; 16% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (4; 11% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (2; 5% instances), [kk-pos/ADV]()-[kk-pos/ADJ]() (1; 3% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (1; 3% instances), [kk-pos/NOUN]()-[kk-pos/ADV]() (1; 3% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (1; 3% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (1; 3% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (1; 3% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 parataxis	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 parataxis	color:blue
1	Қыз	қыз	NOUN	n	_	3	nsubj	_	nom
2	оның	ол	PRON	prn	_	3	nmod:poss	_	pers|p3|sg|gen
3	_	қарындас	NOUN	n	_	8	parataxis	_	px3sp|nom
4	_	е	VERB	cop	_	3	cop	_	aor|p3|sg
5	,	,	PUNCT	cm	_	8	punct	_	_
6	ол	ол	PRON	prn	_	8	nsubj	_	pers|p3|sg|nom
7	бес	бес	NUM	num	_	8	nummod	_	_
8	_	жас	NOUN	n	_	0	root	_	loc
9	_	е	VERB	cop	_	8	cop	_	aor|p3|sg
10	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 parataxis	color:blue
1	Кірді	кір	VERB	v	_	13	parataxis	_	iv|ifi|p3|sg
2	,	,	PUNCT	cm	_	1	punct	_	_
3	шықты	шық	VERB	v	_	13	parataxis	_	iv|ifi|p3|sg
4	,	,	PUNCT	cm	_	3	punct	_	_
5	ілді	іл	VERB	v	_	13	parataxis	_	tv|ifi|p3|sg
6	,	,	PUNCT	cm	_	5	punct	_	_
7	қайтты	қайт	VERB	v	_	13	parataxis	_	iv|ifi|p3|sg
8	,	,	PUNCT	cm	_	7	punct	_	_
9	түбегейлеп	түбегейлеп	ADV	adv	_	10	advmod	_	_
10	қуған	қу	VERB	v	_	11	acl	_	tv|gpr_past
11	_	бала	NOUN	n	_	13	nsubj	_	nom
12	_	да	PART	postadv	_	11	advmod	_	_
13	_	жоқ	ADJ	adj	_	0	root	_	subst|nom
14	_	е	VERB	cop	_	13	cop	_	aor|p3|sg
15	.	.	PUNCT	sent	_	13	punct	_	_

~~~


