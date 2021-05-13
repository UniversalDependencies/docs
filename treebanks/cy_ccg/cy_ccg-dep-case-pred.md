---
layout: base
title:  'Statistics of case:pred in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `case:pred`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-case.html">case</a></tt>.

802 nodes (2%) are attached to their parents as `case:pred`.

802 instances of `case:pred` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06608478802993.

The following 10 pairs of parts of speech are connected with `case:pred`: <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (527; 66% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (245; 31% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (11; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (10; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case:pred	color:blue
1	Cytunodd	cytuno	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	nifer	nifer	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	mai	mai	SCONJ	sconj	_	7	mark	_	_
4	merched	merch	NOUN	noun	Gender=Fem|Number=Plur	7	nsubj	_	_
5	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
6	yn	yn	PART	pred	_	7	case:pred	_	_
7	waeth	gwaeth	ADJ	pos	Degree=Pos|Mutation=SM	1	ccomp	_	_
8	na	na	ADP	prep	_	9	case	_	_
9	bechgyn	bachgen	NOUN	noun	Gender=Masc|Number=Plur	7	obl	_	_
10	gyda	gyda	ADP	prep	_	11	case	_	_
11	llanast	llanast	NOUN	noun	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case:pred	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	fab	mab	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	hanesydd	hanesydd	NOUN	noun	Gender=Masc|Number=Sing	3	nmod	_	_
7	Richard	Richard	PROPN	person	_	6	flat	_	_
8	Cyril	Cyril	PROPN	person	_	7	flat:name	_	_
9	Hughes	Hughes	PROPN	person	_	7	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case:pred	color:blue
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


