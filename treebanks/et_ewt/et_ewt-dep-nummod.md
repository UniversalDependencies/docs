---
layout: base
title:  'Statistics of nummod in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `nummod`

This relation is universal.

367 nodes (1%) are attached to their parents as `nummod`.

337 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13896457765668.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (338; 92% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (23; 6% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Ja	ja	CCONJ	J	_	3	cc	5.1:cc	_
2	paari	paar	NUM	N	Case=Gen|Number=Sing|NumType=Card	3	nummod	3:nummod	_
3	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	0	root	5.1:obl	_
4	pärast	pärast	ADP	K	AdpType=Post	3	case	3:case	_
5	rôômalt	rõõmsalt	ADV	D	_	3	advmod	5.1:advmod	Orphan=Yes
6	maasikatele	maasikas	NOUN	S	Case=All|Number=Plur	3	obl	5.1:obl	Orphan=Yes
7	...	...	PUNCT	Z	_	3	punct	5.1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Seoses	seoses	ADP	K	AdpType=Prep	2	case	2:case	_
2	surutisega	surutis	NOUN	S	Case=Com|Number=Sing	5	obl	5:obl	_
3	esilehe	esi_leht	NOUN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	_
4	mahtu	maht	NOUN	S	Case=Par|Number=Sing	5	obj	5:obj	_
5	vähendatud	vähendama	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	8	8	NUM	N	NumForm=Digit|NumType=Card	7	nummod	7:nummod	_
7	%	%	SYM	nominal	Case=Nom|Number=Sing|NumType=Card	5	obl	5:obl	SpaceAfter=No
8	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	enamus	enamus	NOUN	S	Case=Nom|Number=Sing	2	nmod	2:nmod	_
2	ülesanded	üles_anne	NOUN	S	Case=Nom|Number=Plur	4	nsubj:cop	4:nsubj	_
3	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	samasugused	sama_sugune	ADJ	P	Case=Nom|Number=Plur|PronType=Dem	0	root	0:root	_
5	ja	ja	CCONJ	J	_	6	cc	6:cc	_
6	panin	panema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	4:conj	_
7	siia	siia	ADV	D	_	6	advmod	6:advmod	_
8	4	4	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	9	nummod	9:nummod	_
9	tüüpilisemat	tüüpi=lisem	ADJ	A	Case=Par|Degree=Cmp|Number=Sing	6	obj	6:obj	_
10	...	...	PUNCT	Z	_	4	punct	4:punct	_

~~~


