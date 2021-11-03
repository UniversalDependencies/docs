---
layout: base
title:  'Statistics of root in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `root`

This relation is universal.

2111 nodes (5%) are attached to their parents as `root`.

2111 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58076740881099.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1428; 68% instances), -<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (428; 20% instances), -<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (169; 8% instances), -<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (38; 2% instances), -<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (17; 1% instances), -<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (15; 1% instances), -<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (10; 0% instances), -<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (5; 0% instances), -<tt><a href="cy_ccg-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Ond	ond	CCONJ	cconj	_	3	cc	_	_
2	nid	ni	PART	neg	_	3	advmod	_	_
3	oes	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	3	nsubj	_	_
5	i	i	ADP	iprep	_	6	case	_	_
6	e	e	PRON	indep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
7	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	4	acl	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	angen	angen	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
3	difrifoli	difrifoli	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	nmod	_	_
4	a	a	CCONJ	cconj	_	5	cc	_	_
5	thyfu	tyfu	NOUN	verbnoun	Mutation=AM|Number=Sing|VerbForm=Vnoun	3	conj	_	_
6	fyny	fyny	ADV	adv	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	Yr	y	PART	aff	_	7	advmod	_	_
2	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
3	yr	y	DET	art	_	4	det	_	_
4	wythnos	wythnos	NOUN	noun	Gender=Fem|Number=Sing	7	nsubj	_	_
5	gyntaf	cynnar	ADJ	ord	Degree=Sup|Mutation=SM|NumType=Ord	4	advmod	_	_
6	yn	yn	PART	pred	_	7	case:pred	_	_
7	ardderchog	ardderchog	ADJ	pos	Degree=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\n

~~~


