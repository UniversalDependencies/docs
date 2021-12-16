---
layout: base
title:  'Statistics of nummod in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `nummod`

This relation is universal.

698 nodes (1%) are attached to their parents as `nummod`.

651 instances of `nummod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19770773638968.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (608; 87% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (54; 8% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (20; 3% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Ja	ja	CCONJ	J	_	3	cc	5.1:cc	_
2	paari	paar	NUM	N	Case=Gen|Number=Sing|NumForm=Word|NumType=Card	3	nummod	3:nummod	_
3	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	0	root	5.1:obl	_
4	pärast	pärast	ADP	K	AdpType=Post	3	case	3:case	_
5	rôômalt	rõõmsalt	ADV	D	Typo=Yes	3	advmod	5.1:advmod	Orphan=Yes|CorrectForm=rõõmsalt
6	maasikatele	maasikas	NOUN	S	Case=All|Number=Plur	3	obl	5.1:obl	Orphan=Yes
7	...	...	PUNCT	Z	_	3	punct	5.1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	IMHO	IMHO	NOUN	S	Abbr=Yes	2	discourse	2:discourse	_
2	teeb	tegema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	uazik	uazik	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
4	90	90	NUM	N	NumForm=Digit|NumType=Card	5	nummod	5:nummod	_
5	%	%	SYM	X	_	6	advmod	6:advmod	_
6	autodele	auto	NOUN	S	Case=All|Number=Plur	2	obl	2:obl	_
7	silmad	silm	NOUN	S	Case=Nom|Number=Plur	2	obj	2:obj	_
8	ette	ette	ADV	D	_	2	compound:prt	2:compound	SpaceAfter=No
9	...	...	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod	color:blue
1	jokker	jokker	PROPN	S	Case=Nom|Number=Sing	3	parataxis	3:parataxis	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	Soovitan	soovitama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	20	20	NUM	N	NumForm=Digit|NumType=Card	5	nummod	5:nummod	SpaceAfter=No
5	a.	a.	NOUN	Y	Abbr=Yes	6	obl	6:obl	_
6	vana	vana	ADJ	A	Case=Par|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	audi	Audi	PROPN	S	Case=Par|Number=Sing	3	obj	3:obj	_
8	80	80	NUM	N	NumForm=Digit|NumType=Card	7	nummod	7:nummod	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


