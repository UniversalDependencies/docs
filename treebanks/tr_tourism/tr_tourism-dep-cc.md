---
layout: base
title:  'Statistics of cc in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `cc`

This relation is universal.

1482 nodes (2%) are attached to their parents as `cc`.

1373 instances of `cc` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55060728744939.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (666; 45% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (577; 39% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (166; 11% instances), <tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (24; 2% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (15; 1% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="tr_tourism-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="tr_tourism-pos-DET.html">DET</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="tr_tourism-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Denizi	deniz	NOUN	_	Case=Acc|Number=Sing	0	root	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	kumsalı	kumsal	NOUN	_	Case=Acc|Number=Sing	1	conj	_	_
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Personel	personel	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	ilgili	ilgili	ADJ	_	_	0	root	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	güleryüzlü	güleryüzlü	ADJ	_	_	2	conj	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Kullanmadım	kullan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past|VerbForm=Fin	5	parataxis	_	_
2	ama	ama	CCONJ	_	_	1	cc	_	_
3	5	5	NUM	_	NumType=Card	4	nummod	_	_
4	puan	puan	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
5	veririm	ver	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


