---
layout: base
title:  'Statistics of amod in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `amod`

This relation is universal.

3473 nodes (6%) are attached to their parents as `amod`.

3403 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94010941549093.

The following 17 pairs of parts of speech are connected with `amod`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1909; 55% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1081; 31% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (306; 9% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (43; 1% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (37; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (30; 1% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (21; 1% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (15; 0% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (12; 0% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Sanal	sanal	ADJ	Adj	_	2	amod	_	_
2	parçacıklar	parçacık	NOUN	Noun	Case=Nom|Number=Plur|Person=3	6	csubj	_	_
3	sa	i	AUX	Zero	Aspect=Perf|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
4	bunların	bu	PRON	Demons	Case=Gen|Number=Plur|Person=3|PronType=Dem	5	nmod:poss	_	_
5	hiçbirini	hiçbiri	PRON	Quant	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	6	obj	_	_
6	yapamazlar	yap	VERB	Verb	Aspect=Hab|Mood=Pot|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Rolü	rol	NOUN	Noun	Case=Acc|Number=Sing|Person=3	3	obj	_	_
2	başkasına	başka	ADJ	NAdj	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	amod	_	_
3	vermişlerdi	ver	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	O	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	değişik	değişik	ADJ	Adj	_	4	amod	_	_
4	renkleri	renk	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	8	nmod	_	_
5	ve	ve	CCONJ	Conj	_	7	cc	_	_
6	yandan	yan	ADJ	NAdj	Case=Abl|Number=Sing|Person=3	7	amod	_	_
7	ışıkları	ışık	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	conj	_	_
8	ile	ile	CCONJ	Conj	_	10	nmod	_	_
9	karşımda	karşı	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	10	amod	_	_
10	hazır	hazır	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	dır	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	10	cop	_	_
12	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


