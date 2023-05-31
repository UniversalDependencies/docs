---
layout: base
title:  'Statistics of csubj in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `csubj`

This relation is universal.

80 nodes (0%) are attached to their parents as `csubj`.

80 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.3875.

The following 15 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (26; 33% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (16; 20% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (10; 13% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	ev	ev	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	obj	_	_
2	yapmak	yap	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	6	csubj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	hayatı	hayat	NOUN	Noun	Case=Acc|Number=Sing|Person=3	5	obj	_	_
5	biçimlendirmek	biçimlen	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun|Voice=Cau	6	ccomp	_	_
6	demek	de	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	0	root	_	_
7	tir	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Alışveriş	alışveriş	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	csubj	_	_
2	ise	i	AUX	Conj	_	1	cop	_	_
3	hayatın	hayat	NOUN	Noun	Case=Gen|Number=Sing|Person=3	4	nmod:poss	_	_
4	temelinde	temel	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	amod	_	_
5	yatar	yat	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 csubj	color:blue
1	Bunları	bu	PRON	Demons	Case=Acc|Number=Plur|Person=3|PronType=Dem	2	obj	_	_
2	demek	de	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	3	csubj	_	_
3	yasak	yasak	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
4	değildi	i	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	cop	_	_
5	tabii	tabii	ADJ	Adj	_	3	amod	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


