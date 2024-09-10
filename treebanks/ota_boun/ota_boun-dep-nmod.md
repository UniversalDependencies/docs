---
layout: base
title:  'Statistics of nmod in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="ota_boun-dep-nmod-poss.html">nmod:poss</a></tt>.

138 nodes (2%) are attached to their parents as `nmod`.

120 instances of `nmod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58695652173913.

The following 16 pairs of parts of speech are connected with `nmod`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (47; 34% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (47; 34% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (17; 12% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (5; 4% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nmod	color:blue
1	Kapanık	kapanık	ADJ	Adj	_	2	amod	_	_
2	hava	hava	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
3	,	,	PUNCT	Comma	_	4	punct	_	_
4	derin	derin	ADJ	Adj	_	6	amod	_	_
5	bir	bir	DET	Indef	_	6	det	_	_
6	sükûn-ı	sükûn	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nmod	_	_
7	teşrîn	teşrîn	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
8	ile	ile	CCONJ	_	_	6	case	_	_
9	bî-tâb-ı	bî-tâb	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
10	melâl	melâl	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nmod:poss	_	_
11	idi	y	AUX	Overt	Case=Nom|Number=Sing|Person=3	9	cop	_	_
12	.	.	PUNCT	Stop	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	Artık	artık	ADV	_	_	7	advmod	_	_
2	her	her	DET	Det	_	3	det	_	_
3	şeyi	şey	NOUN	_	Case=Acc|Number=Sing|Person=3	5	obj	_	_
4	sarahatle	sarahat	NOUN	_	Case=Ins|Number=Sing|Person=3	5	nmod	_	_
5	görmek	gör	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	6	nmod:poss	_	_
6	izdirabından	izdirabı	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
7	kurtulmuştuk	kurtul	VERB	_	Aspect=Perf|Evident=Fh|Number=Plur|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Stop	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nmod	color:blue
1	Birer	bir	NUM	ANum	NumType=Dist	2	nummod	_	_
2	vesile	vesile	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
3	ile	ile	CCONJ	_	_	2	case	_	_
4	İtilâf	İtilâf	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	donanmaları	donan	VERB	Vnoun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun	8	nsubj	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	askerleri	asker	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	5	conj	_	_
8	İstanbul’da	İstanbul	PROPN	Place	Case=Loc|Number=Sing|Person=3	0	root	_	_
9	.	.	PUNCT	Stop	_	8	punct	_	_

~~~


