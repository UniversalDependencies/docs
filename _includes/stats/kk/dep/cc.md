

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

124 nodes (2%) are attached to their parents as `cc`.

122 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.41129032258065.

The following 8 pairs of parts of speech are connected with `cc`: [kk-pos/NOUN]()-[kk-pos/CONJ]() (57; 46% instances), [kk-pos/VERB]()-[kk-pos/CONJ]() (26; 21% instances), [kk-pos/ADJ]()-[kk-pos/CONJ]() (21; 17% instances), [kk-pos/PROPN]()-[kk-pos/CONJ]() (12; 10% instances), [kk-pos/VERB]()-[kk-pos/SCONJ]() (5; 4% instances), [kk-pos/ADJ]()-[kk-pos/SCONJ]() (1; 1% instances), [kk-pos/NUM]()-[kk-pos/CONJ]() (1; 1% instances), [kk-pos/PUNCT]()-[kk-pos/CONJ]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 7 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Бірақ	бірақ	CONJ	cnjcoo	_	5	cc	_	_
2	мысығы	мысық	NOUN	n	_	5	nsubj	_	px3sp|nom
3	үйде	үй	NOUN	n	_	5	nmod	_	loc
4	,	,	PUNCT	cm	_	5	punct	_	_
5	ұйықтап	ұйықта	VERB	v	_	0	root	_	iv|prc_perf
6	жатыр	жат	AUX	vaux	_	5	aux	_	pres|p3|sg
7	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Елдегі	ел	NOUN	n	_	5	amod	_	loc|attr
2	саяси	саяси	ADJ	adj	_	4	conj	_	_
3	және	және	CONJ	cnjcoo	_	4	cc	_	_
4	діни	діни	ADJ	adj	_	5	amod	_	_
5	билік	билік	NOUN	n	_	10	nsubj	_	nom
6	аятолла	аятолла	NOUN	n	_	9	compound	_	attr
7	Сейд	Сейд	PROPN	np	_	9	name	_	ant|m|attr
8	Әли	Әли	PROPN	np	_	9	name	_	ant|m|attr
9	Хаменеидің	Хаменеи	PROPN	np	_	10	nmod:poss	_	cog|mf|gen
10	_	қол	NOUN	n	_	0	root	_	px3sp|loc
11	_	е	VERB	cop	_	10	cop	_	aor|p3|sg
12	.	.	PUNCT	sent	_	10	punct	_	_

~~~


