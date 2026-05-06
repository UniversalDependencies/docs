---
layout: base
title:  'Statistics of cc in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `cc`

This relation is universal.

870 nodes (2%) are attached to their parents as `cc`.

854 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94137931034483.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (436; 50% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (179; 21% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (168; 19% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (54; 6% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (16; 2% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (8; 1% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="tr_atis-pos-X.html">X</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Oakland	oakland	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	Salt	salt	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
4	Lake	lake	PROPN	_	Case=Nom|Number=Sing	3	flat	_	_
5	City	city	PROPN	_	Case=Nom|Number=Sing	4	flat	_	_
6	arasındaki	ara	NOUN	_	_	10	amod	_	_
7	en	en	ADV	_	Degree=Sup	8	advmod	_	_
8	son	son	ADJ	_	_	10	amod	_	_
9	günlük	gün	NOUN	_	_	10	amod	_	_
10	uçuş	uçuş	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	_
11	nedir	ne	X	_	Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Continental'ın	continental	PROPN	_	Case=Gen|Number=Sing	8	nmod:poss	_	_
2	kaç	kaç	ADJ	_	NumType=Card	8	amod	_	_
3	tane	tane	NOUN	_	Case=Nom|Number=Sing	2	compound	_	_
4	Atlanta'ya	atlanta	PROPN	_	Case=Dat|Number=Sing	8	nmod	_	_
5	gidiş	git	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	nmod	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	dönüş	dön	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	5	conj	_	_
8	uçuşu	uçuş	NOUN	_	Case=Acc|Number=Sing	9	nsubj	_	_
9	var	var	ADJ	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Kansas	kansas	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	City'den	city	PROPN	_	Case=Abl|Number=Sing	1	flat	_	_
3	Cleveland'a	cleveland	PROPN	_	Case=Dat|Number=Sing	4	obl	_	_
4	olan	ol	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	5	acl	_	_
5	uçuşlar	uçuş	NOUN	_	Case=Nom|Number=Plur	0	root	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	fiyatları	fiyat	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	conj	_	_

~~~


