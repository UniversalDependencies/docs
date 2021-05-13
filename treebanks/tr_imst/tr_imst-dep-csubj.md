---
layout: base
title:  'Statistics of csubj in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `csubj`

This relation is universal.

20 nodes (0%) are attached to their parents as `csubj`.

19 instances of `csubj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (6; 30% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (4; 20% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	Benim	ben	PRON	Pers	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
2	gibi	gibi	ADP	PCNom	_	1	case	_	_
3	yüksek	yüksek	ADJ	Adj	_	4	amod	_	_
4	tansiyonu	tansiyon	NOUN	Noun	Case=Acc|Number=Sing|Person=3	5	nsubj	_	_
5	olanlar	ol	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	8	csubj	_	_
6	tuzsuz	tuzsuz	ADJ	Adj	_	8	obj	_	_
7	da	da	CCONJ	Conj	_	6	advmod:emph	_	_
8	yer	yer	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Rafları	raf	NOUN	Noun	Case=Acc|Number=Plur|Person=3	2	obj	_	_
2	araştırdım	araştır	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	artanı	art	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Pres|VerbForm=Part	5	csubj	_	_
5	dibinde	dip	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	conj	_	_
6	kuruyemiş	kuruyemiş	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
7	kavanozunun	kavanoz	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nmod:poss	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	Sanal	sanal	ADJ	Adj	_	2	amod	_	_
2	parçacıklar	parçacık	NOUN	Noun	Case=Nom|Number=Plur|Person=3	6	csubj	_	_
3	sa	i	AUX	Zero	Aspect=Perf|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
4	bunların	bu	PRON	Demons	Case=Gen|Number=Plur|Person=3|PronType=Dem	5	nmod:poss	_	_
5	hiçbirini	hiçbiri	PRON	Quant	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	6	obj	_	_
6	yapamazlar	yap	VERB	Verb	Aspect=Hab|Mood=Pot|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


