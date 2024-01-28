---
layout: base
title:  'Statistics of cc in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="tr_imst-dep-cc-preconj.html">cc:preconj</a></tt>.

1072 nodes (2%) are attached to their parents as `cc`.

1036 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.76399253731343.

The following 19 pairs of parts of speech are connected with `cc`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (433; 40% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (359; 33% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (160; 15% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (45; 4% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (13; 1% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (12; 1% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (12; 1% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	İçim	iç	ADJ	NAdj	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	9	nsubj	_	_
2	kıskançlık	kıskançlık	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	obj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	4	punct	_	_
4	acı	acı	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	2	conj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	kin	kin	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	conj	_	_
7	ve	ve	CCONJ	Conj	_	8	cc	_	_
8	nefretle	nefret	NOUN	Noun	Case=Ins|Number=Sing|Person=3	2	conj	_	_
9	dolu	dolu	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
10	ydu	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Ama	ama	CCONJ	Conj	_	3	cc	_	_
2	orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
3	bulundum	bulun	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Heyecanlı	heyecanlı	ADJ	Adj	_	4	amod	_	_
2	ve	ve	CCONJ	Conj	_	3	cc	_	_
3	yorgun	yorgun	ADJ	Adj	_	1	conj	_	_
4	görünüyorsunuz	görün	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Polite=Infm|Tense=Pres	6	ccomp	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	4	punct	_	_
6	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


