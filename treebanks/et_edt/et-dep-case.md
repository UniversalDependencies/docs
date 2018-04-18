---
layout: base
title:  'Statistics of case in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `case`

This relation is universal.

2588 nodes (2%) are attached to their parents as `case`.

1958 instances of `case` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31916537867079.

The following 6 pairs of parts of speech are connected with `case`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADP.html">ADP</a></tt> (2114; 82% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADP.html">ADP</a></tt> (292; 11% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-ADP.html">ADP</a></tt> (111; 4% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-ADP.html">ADP</a></tt> (40; 2% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADP.html">ADP</a></tt> (28; 1% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-ADP.html">ADP</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Veri	veri	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	niriseb	nirisema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	tatise	tatine	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	4	amod	_	_
4	räbala	räbal	NOUN	S	Case=Gen|Number=Sing	2	obl	_	_
5	alt	alt	ADP	K	AdpType=Post	4	case	_	_
6	T-särgile	T-särk	NOUN	S	Case=All|Number=Sing	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Noh	noh	INTJ	I	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	6	punct	_	_
3	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	6	obl	_	_
4	kohta	kohta	ADP	K	AdpType=Post	3	case	_	_
5	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	ütlesingi	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	_	_
8	et	et	SCONJ	J	_	10	mark	_	_
9	sitt	sitt	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	10	amod	_	_
10	kohv	kohv	NOUN	S	Case=Nom|Number=Sing	6	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Ja	ja	CCONJ	J	_	3	cc	_	_
2	läbi	läbi	ADP	K	AdpType=Prep	3	case	_	_
3	Eesti	Eesti	PROPN	S	Case=Gen|Number=Sing	0	root	_	_
4	ka	ka	ADV	D	_	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	3	punct	_	_
6	"	"	PUNCT	Z	_	3	punct	_	_

~~~


