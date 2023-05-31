---
layout: base
title:  'Statistics of cc in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `cc`

This relation is universal.

885 nodes (2%) are attached to their parents as `cc`.

874 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94011299435028.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (452; 51% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (201; 23% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (106; 12% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (67; 8% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (44; 5% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (8; 1% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
6	arasındaki	ara	ADJ	_	_	10	amod	_	_
7	en	en	ADV	_	Degree=Sup	8	advmod	_	_
8	son	son	ADJ	_	_	10	amod	_	_
9	günlük	gün	ADJ	_	_	10	amod	_	_
10	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	11	nsubj	_	_
11	nedir	ne	VERB	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Continental'ın	continental	PROPN	_	Case=Gen|Number=Sing	8	nmod	_	_
2	kaç	kaç	ADJ	_	NumType=Card	8	amod	_	_
3	tane	tane	NOUN	_	Case=Nom|Number=Sing|Person=3	2	compound	_	_
4	Atlanta'ya	atlanta	PROPN	_	Case=Dat|Number=Sing	8	nmod	_	_
5	gidiş	git	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	dönüş	dön	NOUN	_	Case=Nom|Number=Sing|Person=3	5	conj	_	_
8	uçuşu	uç	NOUN	_	Case=Acc|Number=Sing|Person=3	9	nsubj	_	_
9	var	var	ADJ	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Boston'dan	boston	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	4	obl	_	_
3	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	giden	git	ADJ	_	_	8	acl	_	_
5	ve	ve	CCONJ	_	_	7	cc	_	_
6	Denver'de	denver	PROPN	_	Case=Loc|Number=Sing	7	obl	_	_
7	duran	dur	ADJ	_	_	4	conj	_	_
8	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	var	var	ADJ	_	_	0	root	_	_
10	mı	mi	AUX	_	PronType=Int	9	ccomp	_	_

~~~


