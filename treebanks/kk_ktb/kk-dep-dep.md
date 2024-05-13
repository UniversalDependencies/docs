---
layout: base
title:  'Statistics of dep in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `dep`

This relation is universal.

127 nodes (1%) are attached to their parents as `dep`.

127 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01574803149606.

The following 18 pairs of parts of speech are connected with `dep`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (77; 61% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (16; 13% instances), <tt><a href="kk-pos-ADV.html">ADV</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (10; 8% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (6; 5% instances), <tt><a href="kk-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (5; 4% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk-pos-ADV.html">ADV</a></tt>-<tt><a href="kk-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kk-pos-ADV.html">ADV</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk-pos-DET.html">DET</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	Шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	3	xcomp	_	_
2	деп	деп	X	x	_	3	dep	_	_
3	атауға	ата	VERB	v	Case=Dat|VerbForm=Ger	4	ccomp	_	_
4	болатын	бол	VERB	v	Aspect=Imp|VerbForm=Part	10	advcl	_	_
5	болса	бол	AUX	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	4	cop	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	5	punct	_	_
7	адамның	адам	NOUN	n	Case=Gen	8	nmod:poss	_	_
8	шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	10	nsubj	_	_
9	жалғыз	жалғыз	ADJ	adj	_	10	amod	_	_
10	өлім	өлім	NOUN	n	Case=Nom	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dep	color:blue
1	Мұның	бұл	PRON	prn	Case=Gen|PronType=Dem	3	nmod:poss	_	_
2	жарқын	жарқын	ADJ	adj	_	3	amod	_	_
3	дәлелі	дәлел	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
4	–	–	PUNCT	guio	_	7	punct	_	_
5	жұмыс	жұмыс	X	x	_	6	dep	_	_
6	берушілердің	беруші	NOUN	n	Case=Gen|Number=Plur	7	nmod:poss	_	_
7	бағасы	баға	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	Жыл	жыл	X	x	_	2	dep	_	_
2	сайын	сайын	ADV	adv	_	5	compound	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	5	punct	_	_
4	ай	ай	X	x	_	5	dep	_	_
5	сайын	сайын	ADV	adv	_	9	advmod	_	_
6	жаңа	жаңа	ADJ	adj	_	7	amod	_	_
7	ғимараттар	ғимарат	NOUN	n	Case=Nom|Number=Plur	9	nsubj	_	_
8	іске	іске	X	x	_	9	dep	_	_
9	қосылып	қос	VERB	v	Aspect=Perf|VerbForm=Cov|Voice=Pass	0	root	_	_
10	жатыр	жат	AUX	vaux	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	9	punct	_	_

~~~


