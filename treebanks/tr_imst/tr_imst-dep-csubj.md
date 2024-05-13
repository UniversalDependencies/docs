---
layout: base
title:  'Statistics of csubj in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `csubj`

This relation is universal.

80 nodes (0%) are attached to their parents as `csubj`.

80 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.3875.

The following 15 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (26; 33% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (16; 20% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (10; 13% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 csubj	color:blue
1	Bunun	bu	PRON	Demons	Case=Gen|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	_
2	değerlendirilmesi	değerlen	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Pres|VerbForm=Vnoun|Voice=CauPass	3	csubj	_	_
3	gerekir	gerek	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 csubj	color:blue
1	Asıl	asıl	ADJ	Adj	_	2	amod	_	_
2	yık	yık	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres	4	nmod	_	_
3	ıcı	ci	ADP	Agt	_	2	case	_	_
4	darbe	darbe	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	csubj	_	_
5	ise	i	CCONJ	Conj	_	4	discourse	_	_
6	sömürgecilikle	sömürgecilik	NOUN	Noun	Case=Ins|Number=Sing|Person=3	7	obl	_	_
7	gelmişti	gel	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	Ne	ne	ADJ	Adj	_	2	amod	_	_
2	zaman	zaman	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	obl	_	_
3	döneceğim	dön	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=1|Polarity=Pos|Tense=Fut|VerbForm=Part	5	csubj	_	_
4	de	de	CCONJ	Conj	_	3	advmod:emph	_	_
5	belli	belli	ADJ	Adj	_	0	root	_	_
6	değildi	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	5	cop	_	SpaceAfter=No
7	...	...	PUNCT	Punc	_	5	punct	_	_

~~~


