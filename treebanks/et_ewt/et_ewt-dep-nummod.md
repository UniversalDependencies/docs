---
layout: base
title:  'Statistics of nummod in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `nummod`

This relation is universal.

205 nodes (1%) are attached to their parents as `nummod`.

192 instances of `nummod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14634146341463.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (179; 87% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (21; 10% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	lõi	lööma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	12	12	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
4	ässa	äss	NOUN	S	Case=Par|Number=Sing	2	obj	2:obj	_
5	[	[	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
6	...	...	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
7	]	]	PUNCT	Z	_	2	punct	2:punct	_

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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	2:nsubj	_
2	teeb	tegema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	3	3	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
4	kindlat	kindel	ADJ	A	Case=Par|Degree=Pos|Number=Sing	2	obl	2:obl	SpaceAfter=No
5	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


