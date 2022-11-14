---
layout: base
title:  'Statistics of nummod in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `nummod`

This relation is universal.

133 nodes (0%) are attached to their parents as `nummod`.

91 instances of `nummod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42105263157895.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (110; 83% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (12; 9% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (7; 5% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	ea	is	PRON	p-p---nn-	Case=Nom|Gender=Neut|Number=Plur	3	nsubj	_	LId=is1
2	prima	primus	NUM	m-p---fn-	Case=Nom|Gender=Fem|Number=Plur	3	nummod	_	_
3	piacula	piaculum	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	0	root	_	LId=piaculum1
4	sunto	sum	AUX	v3pfma---	Mood=Imp|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	cop	_	SpaceAfter=No|LId=sum1
5	:	:	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	et	et	CCONJ	c--------	_	5	cc	_	LId=et1
2	numerus	numerus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	LId=numerus1
3	eius	is	PRON	p-s---mg-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	LId=is1
4	est	sum	AUX	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	LId=sum1
5	sescenti	sescenti	ADJ	a-s---mg-	Case=Gen|Gender=Masc|Number=Sing	0	root	_	LId=sescenti1
6	sexaginta	sexa_ginta	NUM	m--------	_	5	nummod	_	LId=sexa_ginta1
7	sex	sex	NUM	m--------	_	6	nummod	_	SpaceAfter=No|LId=sex1
8	.	.	PUNCT	u--------	_	5	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	quattuor	quattuor	NUM	m--------	_	2	nummod	_	_
2	principes	princeps	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
3	ferro	ferrum	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	4	obj	_	_
4	interempti	interimo	VERB	v-prppmn-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	:	:	PUNCT	u--------	_	4	punct	_	_

~~~


