---
layout: base
title:  'Statistics of dep in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `dep`

This relation is universal.

120 nodes (1%) are attached to their parents as `dep`.

120 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01666666666667.

The following 11 pairs of parts of speech are connected with `dep`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (77; 64% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (16; 13% instances), <tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (10; 8% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (6; 5% instances), <tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (5; 4% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-DET.html">DET</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 dep	color:blue
1	Жобаны	жоба	NOUN	n	Case=Acc	9	obj	_	_
2	5	5	NUM	num	NumType=Card	3	nummod	_	_
3	кезеңге	кезең	NOUN	n	Case=Dat	4	obl	_	_
4	бөліп	бөл	VERB	v	Aspect=Perf|VerbForm=Conv	9	advcl	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	12	12	NUM	num	NumType=Ord	7	amod	_	_
7	жылда	жыл	NOUN	n	Case=Loc	9	obl	_	_
8	жүзеге	жүзеге	X	x	_	9	dep	_	_
9	асыру	асыр	VERB	v	Case=Nom|VerbForm=Ger	10	csubj	_	_
10	жоспарланып	жоспарла	VERB	v	Aspect=Perf|VerbForm=Inf|Voice=Pass	0	root	_	_
11	отыр	отыр	AUX	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	10	punct	_	_

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
4	–	–	PUNCT	guio	_	3	punct	_	_
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
3	,	,	PUNCT	cm	_	2	punct	_	_
4	ай	ай	X	x	_	5	dep	_	_
5	сайын	сайын	ADV	adv	_	9	advmod	_	_
6	жаңа	жаңа	ADJ	adj	_	7	amod	_	_
7	ғимараттар	ғимарат	NOUN	n	Case=Nom|Number=Plur	9	nsubj	_	_
8	іске	іске	X	x	_	9	dep	_	_
9	қосылып	қос	VERB	v	Aspect=Perf|VerbForm=Inf|Voice=Pass	0	root	_	_
10	жатыр	жат	AUX	vaux	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	9	punct	_	_

~~~


