---
layout: base
title:  'Statistics of obj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `obj`

This relation is universal.

2667 nodes (5%) are attached to their parents as `obj`.

1347 instances of `obj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.28271466066742.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1836; 69% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (676; 25% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (67; 3% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (28; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (23; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (21; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obj	color:blue
1	onia	Onia	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	fotopoe	foto_pood	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	peded	pede	NOUN	S	Case=Nom|Number=Plur	4	nsubj	4:nsubj	_
4	korrutavad	korrutama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	nagunii	nagu_nii	ADV	D	_	4	advmod	4:advmod	_
6	selle	see	DET	P	Case=Gen|Number=Sing|PronType=Dem	7	det	7:det	_
7	hinna	hind	NOUN	S	Case=Gen|Number=Sing	4	obj	4:obj	_
8	2X	2X	NOUN	Y	Abbr=Yes	4	obl	4:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obj	color:blue
1	paljudel	palju	PRON	P	Case=Ade|Number=Plur|PronType=Ind	2	nmod	2:nmod	_
2	tesitel	teine	PRON	P	Case=Ade|Number=Plur|PronType=Dem|Typo=Yes	6	obl	6:obl	CorrectForm=teistel
3	pead	pidama	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
4	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	6	obj	6:obj	_
5	menüüst	menüü	NOUN	S	Case=Ela|Number=Sing	6	obl	6:obl	_
6	tegema	tegema	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obj	color:blue
1	nt	nt	ADV	Y	Abbr=Yes	5	advmod	5:advmod	_
2	ferrary	Ferrari	PROPN	S	Case=Par|Number=Sing|Typo=Yes	5	obj	5:obj	CorrectForm=Ferrari
3	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	_
4	ei	ei	AUX	V	Polarity=Neg	5	aux	5:aux	_
5	saa	saama	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	10000	10000	NUM	N	NumForm=Digit|NumType=Card	7	nummod	7:nummod	_
7	eekuga	eek	NOUN	S	Case=Com|Number=Sing	5	obl	5:obl	SpaceAfter=No
8	..	..	PUNCT	Z	_	5	punct	5:punct	SpaceAfter=No

~~~


