---
layout: base
title:  'Statistics of nummod in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nummod`

This relation is universal.

275 nodes (1%) are attached to their parents as `nummod`.

249 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03636363636364.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (235; 85% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (22; 8% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (8; 3% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Dyma	dyma	ADV	adv	_	2	advmod	_	_
2	fersiwn	fersiwn	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
3	Elise	Elise	PROPN	person	Gender=Masc|Number=Sing	2	nmod	_	_
4	o	o	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	gân	cân	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	2	nmod	_	_
7	Un	un	NUM	num	_	8	nummod	_	_
8	Seren	Seren	NOUN	noun	Gender=Masc|Number=Sing	6	appos	_	_
9	gan	gan	ADP	prep	_	10	case	_	_
10	Delwyn	Delwyn	PROPN	person	Gender=Masc|Number=Sing	2	nmod	_	_
11	Siôn	Siôn	PROPN	person	Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Gallwch	gallu	VERB	verb	Mood=Ind|Mutation=SM|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	0	root	_	_
2	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	1	nsubj	_	_
3	ennill	ennill	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
4	£	£	SYM	sym	_	3	obj	_	_
5	150	150	NUM	num	_	4	nummod	_	_
6	drwy	drwy	ADP	prep	_	7	mark	_	_
7	anfon	anfon	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	3	advcl	_	_
8	eich	chi	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	adborth	adborth	NOUN	noun	Gender=Masc|Number=Sing	7	obj	_	_
10	at	at	ADP	iprep	_	11	case	_	_
11	ni	ni	PRON	indep	Number=Plur|Person=1|PronType=Prs	9	nmod	_	_
12	ni	ni	PRON	indep	Number=Plur|Person=1|PronType=Prs	11	compound:redup	_	SpaceAfter=No
13	!	!	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod	color:blue
1	Gall	gallu	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
2	organ	organ	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	hynafol	hynafol	ADJ	pos	Degree=Pos	2	amod	_	_
4	Eglwys	Eglwys	PROPN	person	Gender=Masc|Number=Sing	2	nmod	_	_
5	Dewi	Dewi	PROPN	person	Gender=Masc|Number=Sing	4	flat:name	_	_
6	Sant	Sant	PROPN	person	_	4	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	punct	_	8	punct	_	_
8	Glanadda	Glanadda	PROPN	person	Gender=Fem|Number=Sing	4	appos	_	_
9	fynd	mynd	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
10	i	i	ADP	prep	_	11	case	_	_
11	goleg	coleg	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	9	obl	_	_
12	dri	tri	NUM	num	Gender=Masc|Mutation=SM	13	nummod	_	_
13	chan	cant	NUM	num	Mutation=AM	14	nummod	_	_
14	milltir	milltir	NOUN	noun	Gender=Fem|Number=Sing	9	obl	_	_
15	o	o	ADP	prep	_	16	case	_	_
16	Fangor	Bangor	PROPN	place	Gender=Masc|Mutation=SM|Number=Sing	14	nmod	_	SpaceAfter=No
17	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


