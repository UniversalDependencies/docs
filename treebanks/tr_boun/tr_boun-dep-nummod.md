---
layout: base
title:  'Statistics of nummod in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `nummod`

This relation is universal.

1572 nodes (1%) are attached to their parents as `nummod`.

1567 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53117048346056.

The following 14 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1220; 78% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (140; 9% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (57; 4% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (51; 3% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (49; 3% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (31; 2% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="tr_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	1	1	NUM	ANum	NumType=Card	2	nummod	_	_
2	kutu	kutu	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	obl	_	_
3	kuşkonmaz	kuşkonmaz	VERB	Verb	Case=Nom|Number=Sing|Person=3	4	nmod:poss	_	_
4	konservesi	konserve	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Saddam	Saddam	PROPN	Prop	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
2	Hüseyin	Hüseyin	PROPN	Prop	Case=Nom|Number=Sing|Person=3	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	10	punct	_	_
4	42	42	NUM	ANum	NumType=Card	5	nummod	_	_
5	yaşında	yaş	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	advcl	_	_
6	iken	i	AUX	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	5	cop	_	_
7	bir	bir	DET	ANum	NumType=Card	8	det	_	_
8	darbeyle	darbe	NOUN	Noun	Case=Ins|Number=Sing|Person=3	10	obl	_	_
9	iktidara	iktidar	NOUN	Noun	Case=Dat|Number=Sing|Person=3	10	obj	_	_
10	el	el	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	koydu	koy	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Bakın	bakı	VERB	Verb	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	discourse	_	_
2	hele	hele	ADV	Adverb	_	6	discourse	_	_
3	kaç	kaç	NUM	Adj	NumType=Card	4	nummod	_	_
4	"L	"l	PROPN	Prop	Case=Nom|Number=Sing|Person=3	6	nsubj	_	SpaceAfter=No
5	"	"	PUNCT	Punc	_	4	punct	_	_
6	oldu	ol	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
7	kaşla	kaşla	NOUN	Noun	Mood=Imp|Number=Sing|Person=2|Polarity=Pos	9	nmod:poss	_	_
8	göz	göz	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	conj	_	_
9	arasında	ara	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	6	punct	_	SpacesAfter=\n

~~~


