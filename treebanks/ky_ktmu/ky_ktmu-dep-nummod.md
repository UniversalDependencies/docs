---
layout: base
title:  'Statistics of nummod in UD_Kyrgyz-KTMU'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-KTMU: Relations: `nummod`

This relation is universal.

271 nodes (4%) are attached to their parents as `nummod`.

271 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19188191881919.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt> (231; 85% instances), <tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt> (13; 5% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt> (13; 5% instances), <tt><a href="ky_ktmu-pos-ADV.html">ADV</a></tt>-<tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt>-<tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Бишкектеги	Бишкек	PROPN	PROP	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod:poss	_	_
2	беш	беш	NUM	NUM	NumType=Card	3	nummod	_	_
3	батирдин	батир	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod	_	_
4	акчасын	акча	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obj	_	_
5	алып	ал	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	advcl	_	_
6	качып	кач	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	fixed	_	_
7	кеткен	кет	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	9	ccomp	_	_
8	жаран	жаран	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	nsubj	_	_
9	кармалды	кармал	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
10	.	.	PUNCT	PCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Жалал-Абад	Жалал-Абад	PROPN	PROP	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	шаарынын	шаар	NOUN	NN	Case=Acc,Gen|Number=Sing|Person=3	3	nmod	_	_
3	бир	бир	NUM	NUM	NumType=Card	4	nummod	_	_
4	катар	катар	ADJ	ADJ	_	5	amod	_	_
5	көчөлөрүндө	көчө	NOUN	NN	Case=Loc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	8	obl	_	_
6	электр	электр	NOUN	NN	Case=Nom|Number=Sing|Person=3	7	nmod	_	_
7	жарыгы	жарык	NOUN	NN	Case=Acc|Number=Sing|Person=3	8	nsubj	_	_
8	өчүрүлөт	өчүр	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	PCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Мен	мен	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
2	сага	сен	PRON	PRP	Case=Dat|Number=Sing|Person=2|PronType=Prs	6	nmod	_	_
3	жаңысынан	жаңы	ADJ	ADJ	_	4	amod	_	_
4	төрттү	төрт	NUM	NUM	NumType=Card	5	nummod	_	_
5	таап	тап	VERB	VB	Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Conv	6	ccomp	_	_
6	берем	бер	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PCT	_	6	punct	_	_

~~~


