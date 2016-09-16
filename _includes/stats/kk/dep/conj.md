

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

265 nodes (5%) are attached to their parents as `conj`.

265 instances of `conj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.30188679245283.

The following 18 pairs of parts of speech are connected with `conj`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (100; 38% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (60; 23% instances), [kk-pos/PROPN]()-[kk-pos/PROPN]() (37; 14% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (23; 9% instances), [kk-pos/NUM]()-[kk-pos/NUM]() (9; 3% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (8; 3% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (6; 2% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (4; 2% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (4; 2% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (4; 2% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (2; 1% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (2; 1% instances), [kk-pos/CONJ]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (1; 0% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 conj	color:blue
1	Орысша	орысша	NOUN	n	_	2	dobj	_	nom
2	оқу	оқы	VERB	v	_	3	csubj	_	tv|ger|nom
3	_	керек	ADJ	adj	_	20	parataxis	_	_
4	_	е	VERB	cop	_	3	cop	_	aor|p3|sg
5	,	,	PUNCT	cm	_	20	punct	_	_
6	_	хикмет	NOUN	n	_	15	conj	_	nom
7	_	да	CONJ	cnjcoo	_	15	cc	_	_
8	,	,	PUNCT	cm	_	15	punct	_	_
9	_	мал	NOUN	n	_	15	conj	_	nom
10	_	да	CONJ	cnjcoo	_	15	cc	_	_
11	,	,	PUNCT	cm	_	15	punct	_	_
12	_	өнер	NOUN	n	_	15	conj	_	nom
13	_	да	CONJ	cnjcoo	_	15	cc	_	_
14	,	,	PUNCT	cm	_	15	punct	_	_
15	_	ғылым	NOUN	n	_	18	appos	_	nom
16	_	да	CONJ	cnjcoo	_	15	cc	_	_
17	—	—	PUNCT	guio	_	15	punct	_	_
18	бәрі	бәрі	PRON	prn	_	20	nsubj	_	qnt|px3sp|nom
19	орыста	орыс	NOUN	n	_	20	nmod	_	loc
20	тұр	тұр	VERB	v	_	0	root	_	iv|pres|p3|sg
21	.	.	PUNCT	sent	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 conj	color:blue
1	Ерназардың	Ерназар	PROPN	np	_	2	nmod:poss	_	ant|m|gen
2	азығы	азық	NOUN	n	_	3	nsubj	_	px3sp|nom
3	таусылады	тауыс	VERB	v	_	9	parataxis	_	tv|pass|aor|p3|sg
4	,	,	PUNCT	cm	_	3	punct	_	_
5	ашығады	ашық	VERB	v	_	9	conj	_	iv|aor|p3|sg
6	,	,	PUNCT	cm	_	9	punct	_	_
7	жейтін	же	VERB	v	_	8	acl	_	tv|gpr_impf
8	тамақ	тамақ	NOUN	n	_	9	dobj	_	nom
9	таппайды	тап	VERB	v	_	0	root	_	tv|neg|aor|p3|sg
10	.	.	PUNCT	sent	_	9	punct	_	_

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


