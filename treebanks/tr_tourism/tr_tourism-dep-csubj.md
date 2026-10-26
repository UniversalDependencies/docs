---
layout: base
title:  'Statistics of csubj in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `csubj`

This relation is universal.

81 nodes (0%) are attached to their parents as `csubj`.

80 instances of `csubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (47; 58% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (14; 17% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj	color:blue
1	Aqua	aqua	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	olması	ol	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun	8	csubj	_	_
3	çocuklar	çocuk	NOUN	_	Case=Nom|Number=Plur	8	advcl	_	_
4	ve	ve	CCONJ	_	_	5	cc	_	_
5	yetişkinler	yetişkin	NOUN	_	Case=Nom|Number=Plur	3	conj	_	_
6	için	için	ADP	_	_	5	case	_	_
7	oldukça	oldukça	ADV	_	_	8	advmod	_	_
8	avantajlı	avantajlı	ADJ	_	_	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 csubj	color:blue
1	Sahil	sahil	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	yakınında	yakın	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	tuvalet	tuvalet	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
4	yok	yok	ADJ	_	Polarity=Neg	9	parataxis	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	metre	metre	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
7	kadar	kadar	NOUN	_	Case=Nom|Number=Sing	6	case	_	_
8	yürümeniz	yürü	VERB	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2|Polarity=Pos|VerbForm=Vnoun	9	csubj	_	_
9	gerekmekte	gerek	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Form|Tense=Pres|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Denize	deniz	NOUN	_	Case=Dat|Number=Sing	2	obl	_	_
2	yakın	yakın	ADJ	_	_	3	nsubj	_	_
3	oluşu	oluş	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	csubj	_	_
4	iyi	iyi	ADJ	_	_	0	root	_	_
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


