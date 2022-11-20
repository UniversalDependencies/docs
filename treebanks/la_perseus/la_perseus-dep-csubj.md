---
layout: base
title:  'Statistics of csubj in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `csubj`

This relation is universal.

140 nodes (0%) are attached to their parents as `csubj`.

71 instances of `csubj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.14285714285714.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (110; 79% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (19; 14% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-X.html">X</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Sed	sed	CCONJ	c--------	_	4	cc	_	LId=sed1
2	quid	quis	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	LId=quis1
3	temptare	tento	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	4	csubj	_	LId=tento1
4	nocebit	noceo	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=noceo1
5	?	?	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	Longum	longus	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	LId=longus1
2	erat	sum	AUX	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	_	LId=sum1
3	singula	singulus	ADJ	a-p---na-	Case=Acc|Gender=Neut|Number=Plur	4	obj	_	LId=singulus1
4	excipere	excipio	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	1	csubj	_	SpaceAfter=No|LId=excipio1
5	.	.	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	pretium	pretium	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	est	sum	AUX	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	LId=sum1
3	operae	opera	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	attendere	attendo	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	1	csubj	_	SpaceAfter=No
5	.	.	PUNCT	u--------	_	1	punct	_	_

~~~


