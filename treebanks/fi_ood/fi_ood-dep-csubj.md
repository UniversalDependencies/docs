---
layout: base
title:  'Statistics of csubj in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fi_ood-dep-csubj-cop.html">csubj:cop</a></tt>.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Voi	voida	AUX	_	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	_
2	olla	olla	AUX	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
3	että	että	SCONJ	_	_	4	mark	_	_
4	muistan	muistaa	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
5	väärin	väärin	ADV	_	_	4	advmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	Ja	ja	CCONJ	_	_	3	cc	_	_
2	voipi	voida	AUX	_	Clitic=Pa|Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	aux	_	_
3	olla	olla	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	_
5	että	että	SCONJ	_	_	9	mark	_	_
6	arkihommat	arki#homma	NOUN	_	Case=Nom|Number=Plur	9	nsubj	_	_
7	tässä	tämä	PRON	_	Case=Ine|Number=Sing|PronType=Dem	9	obl	_	_
8	vain	vain	ADV	_	_	9	advmod	_	_
9	lisääntyvät	lisääntyä	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
10	lähiaikoina	lähi#aika	NOUN	_	Case=Ess|Number=Plur	9	obl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	24	punct	_	_
12	kunhan	kunhan	ADV	_	_	24	advmod	_	_
13	tämä	tämä	PRON	_	Case=Nom|Number=Sing|PronType=Dem	14	det	_	_
14	masuasukki	masu#asukki	NOUN	_	Case=Nom|Number=Sing	24	nsubj	_	_
15	(	(	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	pahoittelen	pahoitella	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	parataxis	_	_
17	jos	jos	SCONJ	_	_	19	mark	_	_
18	joku	joku	PRON	_	Case=Nom|Number=Sing|PronType=Ind	19	nsubj	_	_
19	inhoaa	inhota	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	advcl	_	_
20	kyseistä	kyseinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Inen|Number=Sing	21	amod	_	_
21	sanaa	sana	NOUN	_	Case=Par|Number=Sing	19	obj	_	SpaceAfter=No
22	)	)	PUNCT	_	_	16	punct	_	_
23	täältä	täältä	ADV	_	_	24	advmod	_	_
24	päättää	päättää	VERB	_	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
25	tulla	tulla	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	24	xcomp	_	_
26	ulos	ulos	ADV	_	_	25	advmod	_	_
27	:D	:D	SYM	_	_	3	discourse	_	SpaceAfter=No
28	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


