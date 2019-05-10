---
layout: base
title:  'Statistics of parataxis in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `parataxis`

This relation is universal.

17 nodes (0%) are attached to their parents as `parataxis`.

17 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.8823529411765.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 29% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (3; 18% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (3; 18% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (3; 18% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 12% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 parataxis	color:blue
1	Mae	bod	VERB	verb	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	croeso	croeso	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	i	i	ADP	prep	_	4	case	_	_
4	bawb	bawb	NOUN	noun	Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	8	punct	_	_
6	nid	ni	PART	neg	_	8	advmod	_	_
7	oes	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	8	cop	_	_
8	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	1	parataxis	_	_
9	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	11	cop	_	_
10	yn	yn	PART	pred	_	11	case:pred	_	_
11	aelod	aelod	NOUN	noun	Gender=Masc|Number=Sing	8	acl	_	_
12	o	o	ADP	prep	_	14	case	_	SpaceAfter=No
13	'r	y	DET	art	_	14	det	_	_
14	Gymdeithas	cymdeithas	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	8	punct	_	SpacesAfter=\s\n

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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 parataxis	color:blue
1	Mae	bod	VERB	verb	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
2	'n	yn	AUX	impf	_	3	aux	_	_
3	helpu	helpu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
4	os	os	SCONJ	sconj	_	5	mark	_	_
5	tynnwch	tynnu	VERB	verb	Number=Plur|Person=2|Tense=Fut	3	advcl	_	_
6	eich	eich	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	7	nmod:poss	_	_
7	clustffonau	clustffon	NOUN	noun	Number=Plur	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	9	punct	_	_
9	wyddoch	gwybod	VERB	verb	Mutation=SM|Number=Plur|Person=3|Tense=Past	3	parataxis	_	_
10	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	9	nsubj	_	_
11	-	-	PUNCT	punct	_	13	punct	_	_
12	nid	ni	PART	neg	_	13	advmod	_	_
13	ydych	bod	VERB	verb	Number=Plur|Person=2|Tense=Pres	9	ccomp	_	_
14	yn	yn	AUX	impf	_	15	aux	_	_
15	clywed	clywed	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	13	xcomp	_	_
16	eich	eich	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	17	nmod:poss	_	_
17	hun	hun	PRON	refl	PronType=Rcp	15	obj	_	SpaceAfter=No
18	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


