---
layout: base
title:  'Statistics of nummod in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `nummod`

This relation is universal.

616 nodes (1%) are attached to their parents as `nummod`.

564 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21915584415584.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (390; 63% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (192; 31% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (33; 5% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	11	11	NUM	_	NumType=Card	2	nummod	_	_
2	Kasım	kasım	PROPN	_	Case=Nom|Number=Sing	4	nmod:tmod	_	_
3	1991	1991	NUM	_	NumType=Card	4	nmod:tmod	_	_
4	Pazartesi	pazartesi	PROPN	_	Case=Nom|Number=Sing	6	nmod:tmod	_	_
5	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	6	nmod	_	_
6	Washington	washington	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
7	DC'ye	dc	PROPN	_	Case=Dat|Number=Sing	6	flat	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	8	obl	_	_
3	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	en	en	ADV	_	Degree=Sup	5	advmod	_	_
5	az	az	ADJ	_	_	6	amod	_	_
6	bir	bir	NUM	_	NumType=Card	7	nummod	_	_
7	durakla	durak	NOUN	_	Case=Ins|Number=Sing	8	obl	_	_
8	uçmak	uç	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	9	xcomp	_	_
9	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	7	obl	_	_
2	486	486	NUM	_	NumType=Card	4	nummod	_	_
3	sefer	sefer	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	sayılı	sayılı	ADJ	_	_	6	amod	_	_
5	Delta	delta	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	uçuşunu	uçuş	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	_
7	göster	göster	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_

~~~


