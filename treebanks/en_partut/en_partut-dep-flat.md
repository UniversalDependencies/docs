---
layout: base
title:  'Statistics of flat in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="en_partut-dep-flat-foreign.html">flat:foreign</a></tt>.

537 nodes (1%) are attached to their parents as `flat`.

537 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.38919925512104.

The following 12 pairs of parts of speech are connected with `flat`: <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (356; 66% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (63; 12% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (56; 10% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (25; 5% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (13; 2% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="en_partut-pos-X.html">X</a></tt>-<tt><a href="en_partut-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Mr	mister	NOUN	S	Number=Sing	2	nmod:desc	_	_
2	Berenguer	Berenguer	PROPN	SP	_	7	vocative	_	_
3	Fuster	Fuster	PROPN	SP	_	2	flat	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
6	shall	shall	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	check	check	VERB	V	VerbForm=Inf	0	root	_	_
8	all	all	PRON	PE	Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	this	this	PRON	PD	Number=Sing|PronType=Dem	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Five	five	NUM	N	NumType=Card	2	nummod	_	_
2	months	month	NOUN	S	Number=Plur	12	obl	_	_
3	after	after	ADP	E	_	5	case	_	_
4	his	his	DET	AP	Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	wedding	wedding	NOUN	S	Number=Sing	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	2	punct	_	_
7	on	on	ADP	E	_	8	case	_	_
8	18	18	NUM	N	NumType=Card	12	obl	_	_
9	August	August	PROPN	SP	_	8	flat	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	8	punct	_	_
11	Balzac	Balzac	PROPN	SP	_	12	nsubj	_	_
12	died	die	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat	color:blue
1	Shakespeare	Shakespeare	PROPN	SP	_	2	nsubj	_	_
2	signed	sign	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	his	his	DET	AP	Poss=Yes|PronType=Prs	5	nmod:poss	_	_
4	last	last	ADJ	NO	Degree=Pos|NumType=Ord	5	amod	_	_
5	will	will	NOUN	S	Number=Sing	2	obj	_	_
6	and	and	CCONJ	CC	_	7	cc	_	_
7	testament	testament	NOUN	S	Number=Sing	5	conj	_	_
8	on	on	ADP	E	_	9	case	_	_
9	25	25	NUM	N	NumType=Card	2	obl	_	_
10	March	March	PROPN	SP	_	9	flat	_	_
11	1616	1616	NUM	N	NumType=Card	9	flat	_	SpaceAfter=No
12	;	;	PUNCT	FC	_	2	punct	_	_

~~~


