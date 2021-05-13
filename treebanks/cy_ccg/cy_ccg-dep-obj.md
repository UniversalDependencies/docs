---
layout: base
title:  'Statistics of obj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `obj`

This relation is universal.

1861 nodes (5%) are attached to their parents as `obj`.

1462 instances of `obj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46211714132187.

The following 20 pairs of parts of speech are connected with `obj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1079; 58% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (355; 19% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (244; 13% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (80; 4% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (38; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (19; 1% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (11; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (6; 0% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Sefydlydd	sefydlydd	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
2	teulu	teulu	NOUN	noun	Gender=Masc|Number=Sing	1	obj	_	_
3	diwylliedig	diwylliedig	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
4	o	o	ADP	prep	_	5	case	_	_
5	sipsiwn	sipsiwn	NOUN	noun	Gender=Masc|Number=Sing	2	nmod	_	_
6	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	cop	_	_
7	Abram	Abram	PROPN	person	_	1	nsubj	_	_
8	Wood	Wood	PROPN	person	_	7	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj	color:blue
1	Faint	maint	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
2	o	o	ADP	prep	_	4	case	_	SpaceAfter=No
3	'r	y	DET	art	_	4	det	_	_
4	rhain	rhain	PRON	dem	Number=Plur|PronType=Dem	1	nmod	_	_
5	allwch	gallu	VERB	verb	Mood=Ind|Mutation=SM|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	1	acl	_	_
6	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	5	nsubj	_	_
7	eu	hwy	PRON	dep	Number=Plur|Person=3|PronType=Prs	8	obj	_	_
8	darganfod	darganfod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	xcomp	_	SpaceAfter=No
9	?	?	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	A	a	CCONJ	cconj	_	3	cc	_	_
2	ble	ble	ADV	adv	_	3	advmod	_	_
3	cewch	cael	VERB	verb	Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	0	root	_	_
4	fynyddoedd	mynydd	NOUN	noun	Gender=Masc|Mutation=SM|Number=Plur	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	7	punct	_	_
6	yn	yn	PART	pred	_	7	case:pred	_	_
7	aml	aml	ADV	adv	_	9	advmod	_	_
8	iawn	iawn	ADV	adv	_	7	advmod	_	_
9	cewch	cael	VERB	verb	Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	3	advcl	_	_
10	raeadrau	rhaeadr	NOUN	noun	Gender=Masc|Mutation=SM|Number=Plur	9	nsubj	_	_
11	hefyd	hefyd	ADV	adv	_	9	advmod	_	SpaceAfter=No
12	!	!	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


