---
layout: base
title:  'Statistics of csubj in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `csubj`

This relation is universal.

83 nodes (0%) are attached to their parents as `csubj`.

82 instances of `csubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66265060240964.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (42; 51% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (19; 23% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (9; 11% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 csubj	color:blue
1	SAHİL	sahil	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	YAKININDA	yakın	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	obl	_	_
3	TUVALET	tuvalet	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
4	YOK	yok	ADJ	_	_	9	parataxis	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	METRE	metre	NOUN	_	Case=Nom|Number=Sing|Person=3	8	obj	_	_
7	KADAR	kadar	NOUN	_	Case=Nom|Number=Sing|Person=3	6	case	_	_
8	YÜRÜMENİZ	yürü	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	9	csubj	_	_
9	GEREKMEKTE	gerek	VERB	_	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj	color:blue
1	AQUA	aqua	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	OLMASI	ol	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	csubj	_	_
3	ÇOCUKLAR	çocuk	NOUN	_	Case=Nom|Number=Plur|Person=3	8	advcl	_	_
4	VE	ve	CCONJ	_	_	5	cc	_	_
5	YETİŞKİNLER	yetişkin	NOUN	_	Case=Nom|Number=Plur|Person=3	3	conj	_	_
6	İÇİN	için	ADP	_	_	5	case	_	_
7	OLDUKÇA	oldukça	ADV	_	_	8	advmod	_	_
8	AVANTAJLI	avantajlı	ADJ	_	_	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	SESSİZ	sessiz	ADJ	_	_	2	compound	_	_
2	SAKİN	sakin	ADJ	_	_	3	advmod	_	_
3	OLMASI	ol	ADJ	_	_	4	csubj	_	_
4	GÜZELDİ	güzel	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


