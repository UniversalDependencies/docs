---
layout: base
title:  'Statistics of nummod in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `nummod`

This relation is universal.

121 nodes (1%) are attached to their parents as `nummod`.

121 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17355371900826.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (102; 84% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (9; 7% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (6; 5% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Қазіргі	қазір	ADV	adv	Case=Nom	2	amod	_	_
2	кезде	кез	NOUN	n	Case=Loc	9	obl	_	_
3	қаланың	қала	NOUN	n	Case=Gen	6	nmod:poss	_	_
4	ішкі	ішкі	ADJ	adj	_	6	amod	_	_
5	өңірлік	өңірлік	ADJ	adj	_	6	amod	_	_
6	өнімі	өнім	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	9	nsubj	_	_
7	20	20	NUM	num	NumType=Card	8	nummod	_	_
8	есе	есе	NOUN	n	Case=Nom	9	obj	_	_
9	өсті	өст	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Зейнетақы	зейнетақы	NOUN	n	Case=Nom	2	nmod:poss	_	_
2	жинақтарының	жинақ	NOUN	n	Case=Gen|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	3	nmod:poss	_	_
3	көлемі	көлем	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
4	2,2	2,2	NUM	num	NumType=Card	5	compound	_	_
5	трлн.	трлн.	NOUN	abbr	_	6	nummod	_	_
6	теңгеге	теңге	NOUN	n	Case=Dat	7	obl	_	_
7	артты	арт	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Бағдардың	бағдар	NOUN	n	Case=Gen	2	nmod:poss	_	_
2	қашықтығы	қашықтық	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
3	4,3	4,3	NUM	num	NumType=Card	4	nummod	_	_
4	мыңнан	мың	NUM	num	Case=Abl|NumType=Card,Ord	6	nmod	_	_
5	астам	астам	ADJ	adj	_	6	amod	_	_
6	шақырымды	шақырым	NOUN	n	Case=Acc	7	obj	_	_
7	құрайды	құра	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


