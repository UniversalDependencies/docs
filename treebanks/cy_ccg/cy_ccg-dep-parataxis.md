---
layout: base
title:  'Statistics of parataxis in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `parataxis`

This relation is universal.

57 nodes (0%) are attached to their parents as `parataxis`.

57 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.3684210526316.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (11; 19% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (11; 19% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (9; 16% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (9; 16% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (6; 11% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Beth	beth	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
2	am	am	ADP	iprep	_	3	case	_	_
3	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nmod	_	_
4	dere	doc	VERB	verb	Mood=Imp|Number=Sing|Person=2	1	parataxis	_	_
5	i	i	ADP	prep	_	6	mark	_	_
6	ymuno	ymuno	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	4	xcomp	_	_
7	gyda	gyda	ADP	prep	_	8	case	_	_
8	ni	ni	PRON	indep	Number=Plur|Person=1|PronType=Prs	6	obl	_	SpaceAfter=No
9	!	!	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 parataxis	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	croeso	croeso	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	i	i	ADP	prep	_	4	case	_	_
4	bawb	pawb	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	8	punct	_	_
6	nid	ni	PART	neg	_	8	advmod	_	_
7	oes	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
8	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	1	parataxis	_	_
9	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	11	cop	_	_
10	yn	yn	PART	pred	_	11	case:pred	_	_
11	aelod	aelod	NOUN	noun	Gender=Masc|Number=Sing	8	acl	_	_
12	o	o	ADP	prep	_	14	case	_	SpaceAfter=No
13	'r	y	DET	art	_	14	det	_	_
14	Gymdeithas	cymdeithas	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 parataxis	color:blue
1	Byw	byw	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	0	root	_	_
2	yn	yn	PART	pred	_	3	case:pred	_	_
3	ddwyieithog	dwyieithog	ADJ	pos	Degree=Pos|Mutation=SM	1	advmod	_	_
4	am	am	ADP	prep	_	5	case	_	_
5	byth	byth	NOUN	noun	Gender=Masc|Number=Sing	1	obl	_	_
6	-	-	PUNCT	punct	_	8	punct	_	_
7	ar	ar	ADP	prep	_	8	case	_	_
8	ôl	ôl	NOUN	noun	Gender=Masc|Number=Sing	1	parataxis	_	_
9	un	un	NUM	num	_	10	nummod	_	_
10	wythnos	wythnos	NOUN	noun	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


