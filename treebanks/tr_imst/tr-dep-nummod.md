---
layout: base
title:  'Statistics of nummod in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `nummod`

This relation is universal.

621 nodes (1%) are attached to their parents as `nummod`.

616 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13526570048309.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (405; 65% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (109; 18% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (75; 12% instances), <tt><a href="tr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (10; 2% instances), <tt><a href="tr-pos-ADP.html">ADP</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="tr-pos-PRON.html">PRON</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="tr-pos-ADV.html">ADV</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Kazada	kaza	NOUN	Noun	Case=Loc|Number=Sing|Person=3	4	nmod	_	_
2	dört	dört	NUM	ANum	NumType=Card	3	nummod	_	_
3	pilot	pilot	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
4	şehit	şehit	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	düştü	düş	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	4	compound	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nummod	color:blue
1	İki	iki	NUM	ANum	NumType=Card	7	nummod	_	_
2	bayram	bayram	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	compound	_	_
3	arası	ara	ADJ	NAdj	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	compound	_	_
4	IMF	Imf	NOUN	Abr	Abbr=Yes|Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
5	CHP	Chp	NOUN	Abr	Abbr=Yes|Case=Nom|Number=Sing|Person=3	7	obl	_	_
6	'li	li	ADP	With	_	5	case	_	_
7	olacak	ol	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	Memura	memur	NOUN	Noun	Case=Dat|Number=Sing|Person=3	4	obl	_	_
2	ikibinüç'te	ikibinüç	NUM	NNum	Case=Loc|Number=Sing|NumType=Card|Person=3	4	nummod	_	_
3	Deppler	Deppler	PROPN	Prop	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	geçmiş	geçmiş	ADJ	Adj	_	0	root	_	_
5	IMF	Imf	NOUN	Abr	Abbr=Yes|Case=Nom|Number=Sing|Person=3	9	obj	_	_
6	enflasyona	enflasyon	NOUN	Noun	Case=Dat|Number=Sing|Person=3	9	nmod	_	_
7	göre	göre	ADP	PCDat	_	8	case	_	_
8	zam	zam	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nmod:poss	_	_
9	sözü	söz	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


