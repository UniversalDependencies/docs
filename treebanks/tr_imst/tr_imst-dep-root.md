---
layout: base
title:  'Statistics of root in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `root`

This relation is universal.

5635 nodes (10%) are attached to their parents as `root`.

5635 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.77320319432121.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3604; 64% instances), -<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (960; 17% instances), -<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (492; 9% instances), -<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (182; 3% instances), -<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (147; 3% instances), -<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (86; 2% instances), -<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (77; 1% instances), -<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (32; 1% instances), -<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (23; 0% instances), -<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (18; 0% instances), -<tt><a href="tr_imst-pos-DET.html">DET</a></tt> (11; 0% instances), -<tt><a href="tr_imst-pos-X.html">X</a></tt> (2; 0% instances), -<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
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
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	(	(	PUNCT	Punc	_	2	punct	_	SpaceAfter=No
2	İzninizle	izin	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	neden	neden	ADV	Ques	_	5	advmod	_	_
5	olmasın	ol	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	2	conj	_	SpaceAfter=No
6	...	...	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Orada	ora	PRON	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


