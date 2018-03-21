---
layout: base
title:  'Statistics of nummod in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `nummod`

This relation is universal.

133 nodes (0%) are attached to their parents as `nummod`.

91 instances of `nummod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42105263157895.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (110; 83% instances), <tt><a href="la-pos-NUM.html">NUM</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (12; 9% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (7; 5% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="la-pos-ADV.html">ADV</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Interim	interim1	ADV	d--------	_	7	advmod	_	_
2	proelio	proelium1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	7	advmod	_	_
3	equestri	equester1	ADJ	a-s---nb-	Case=Abl|Gender=Neut|Number=Sing	2	amod	_	_
4	inter	inter1	ADP	r--------	_	6	case	_	_
5	duas	duo	NUM	m-p---fa-	Case=Acc|Gender=Fem|Number=Plur	6	nummod	_	_
6	acies	acies1	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	7	obl	_	_
7	contendebatur	contendo1	VERB	v3siip---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	punc1	PUNCT	u--------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	et	et1	CCONJ	c--------	_	5	cc	_	_
2	numerus	numerus1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
3	eius	is1	PRON	p-s---mg-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	est	sum1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	sescenti	sescenti1	ADJ	a-s---mg-	Case=Gen|Gender=Masc|Number=Sing	0	root	_	_
6	sexaginta	sexa_ginta1	NUM	m--------	_	5	nummod	_	_
7	sex	sex1	NUM	m--------	_	6	nummod	_	SpaceAfter=No
8	.	punc1	PUNCT	u--------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	ex	ex1	ADP	r--------	_	2	case	_	_
2	libris	libra1	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	8	obl	_	_
3	Sibyllinis	Sibyllinus1	ADJ	a-p---fb-	Case=Abl|Gender=Fem|Number=Plur	2	amod	_	_
4	regnum	regnum1	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	8	nsubj	_	_
5	Romae	Roma1	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
6	tribus	tres1	NUM	m--------	_	7	nummod	_	_
7	Corneliis	Cornelius1	ADJ	a-p---md-	Case=Dat|Gender=Masc|Number=Plur	8	iobj	_	_
8	portendi	portendo1	VERB	v--pnp---	Tense=Pres|VerbForm=Inf|Voice=Pass	0	root	_	SpaceAfter=No
9	;	punc1	PUNCT	u--------	_	8	punct	_	_

~~~


