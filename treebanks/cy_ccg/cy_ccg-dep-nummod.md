---
layout: base
title:  'Statistics of nummod in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nummod`

This relation is universal.

237 nodes (1%) are attached to their parents as `nummod`.

216 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0379746835443.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (204; 86% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (19; 8% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Dirwyon	dirwyo	NOUN	noun	Gender=Masc|Number=Plur	7	nsubj	_	_
2	o	o	ADP	prep	_	4	case	_	_
3	60000	60000	NUM	num	_	4	nummod	_	_
4	ewro	Ewro	PROPN	work	_	1	nmod	_	_
5	fu	bod	AUX	aux	Mood=Ind|Mutation=SM|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	SpaceAfter=No
6	'r	y	DET	art	_	7	det	_	_
7	dyfarniad	dyfarniad	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
8	i	i	ADP	prep	_	11	case	_	SpaceAfter=No
9	'r	y	DET	art	_	11	det	_	_
10	tri	tri	NUM	num	Gender=Masc	11	nummod	_	_
11	arall	arall	ADJ	pos	Degree=Pos	7	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\n

~~~


