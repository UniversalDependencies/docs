---
layout: base
title:  'Statistics of nummod in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `nummod`

This relation is universal.

710 nodes (2%) are attached to their parents as `nummod`.

631 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22253521126761.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (428; 60% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (232; 33% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (44; 6% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	11	11	NUM	_	NumType=Card	2	nummod	_	_
2	Kasım	kasım	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
3	1991	1991	NUM	_	NumType=Card	2	list	_	_
4	Pazartesi	pazartesi	PROPN	_	Case=Nom|Number=Sing	2	list	_	_
5	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	6	nmod	_	_
6	Washington	washington	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
7	DC'ye	dc	PROPN	_	Case=Dat|Number=Sing	6	flat	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nummod	color:blue
1	10	10	NUM	_	NumType=Card	4	nummod	_	_
2	-	-	PUNCT	_	_	1	punct	_	_
3	2	2	NUM	_	NumType=Card	1	conj	_	_
4	arası	ara	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nmod	_	_
5	Pittsburgh'tan	pittsburgh	PROPN	_	Case=Abl|Number=Sing	6	nmod	_	_
6	Baltimore'ye	baltimore	PROPN	_	Case=Dat|Number=Sing	7	obl	_	_
7	olan	ol	ADJ	_	_	8	acl	_	_
8	uçuşlar	uç	NOUN	_	Case=Nom|Number=Plur|Person=3	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Bana	ben	PRON	_	PronType=Prs	7	obl	_	_
2	Dallas'tan	dallas	PROPN	_	Case=Abl|Number=Sing	3	nmod	_	_
3	Baltimore'ye	baltimore	PROPN	_	Case=Dat|Number=Sing	6	nmod	_	_
4	415	415	NUM	_	NumType=Card	5	nummod	_	_
5	dolarlık	dolar	ADJ	_	_	6	amod	_	_
6	uçuşları	uç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
7	gösterin	göster	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


