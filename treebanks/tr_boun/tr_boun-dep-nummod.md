---
layout: base
title:  'Statistics of nummod in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `nummod`

This relation is universal.

1554 nodes (1%) are attached to their parents as `nummod`.

1547 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5006435006435.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1299; 84% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (73; 5% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (53; 3% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (53; 3% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (38; 2% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (26; 2% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	1	1	NUM	ANum	NumType=Card	2	nummod	_	_
2	kutu	kutu	NOUN	_	Case=Nom|Number=Sing|Person=3	4	obl	_	_
3	kuşkonmaz	kuşkonmaz	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nmod:poss	_	_
4	konservesi	konserve	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Saddam	Saddam	PROPN	_	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
2	Hüseyin	Hüseyin	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	10	punct	_	_
4	42	42	NUM	ANum	NumType=Card	5	nummod	_	_
5	yaşında	yaş	ADJ	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	advcl	_	_
6	iken	i	AUX	_	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	5	cop	_	_
7	bir	bir	DET	Indef	_	8	det	_	_
8	darbeyle	darbe	NOUN	_	Case=Ins|Number=Sing|Person=3	10	obl	_	_
9	iktidara	iktidar	NOUN	_	Case=Dat|Number=Sing|Person=3	10	obj	_	_
10	el	el	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	koydu	koy	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	Stop	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Alan	alan	NOUN	Ptcp	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
2	bir	bir	NUM	ANum	NumType=Card	3	nummod	_	_
3	milyon	milyon	NUM	ANum	NumType=Card	4	nummod	_	_
4	insan	insan	NOUN	_	Case=Acc|Number=Sing|Person=3	5	obj	_	_
5	alıyor	al	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Stop	_	5	punct	_	SpacesAfter=\n

~~~


