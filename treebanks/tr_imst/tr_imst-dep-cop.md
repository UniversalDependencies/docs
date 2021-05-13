---
layout: base
title:  'Statistics of cop in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `cop`

This relation is universal.

742 nodes (1%) are attached to their parents as `cop`.

742 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09838274932615.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (309; 42% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (250; 34% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (65; 9% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (54; 7% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (32; 4% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (17; 2% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (11; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (4; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Sanal	sanal	ADJ	Adj	_	2	amod	_	_
2	parçacıklar	parçacık	NOUN	Noun	Case=Nom|Number=Plur|Person=3	6	csubj	_	_
3	sa	i	AUX	Zero	Aspect=Perf|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
4	bunların	bu	PRON	Demons	Case=Gen|Number=Plur|Person=3|PronType=Dem	5	nmod:poss	_	_
5	hiçbirini	hiçbiri	PRON	Quant	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	6	obj	_	_
6	yapamazlar	yap	VERB	Verb	Aspect=Hab|Mood=Pot|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
1	Oğlunun	oğul	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod:poss	_	_
2	neden	neden	ADV	Ques	_	4	advmod	_	_
3	eroinman	eroinman	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	olduğunu	ol	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	5	obj	_	_
5	anlayamaması	anla	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Pot|Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Pres|VerbForm=Vnoun	7	nsubj	_	_
6	çok	çok	ADV	Adverb	_	7	advmod	_	_
7	doğal	doğal	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	dı	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	7	cop	_	_
9	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	-	-	PUNCT	Punc	_	2	punct	_	_
2	Neden	ne	PRON	Ques	Case=Abl|Number=Sing|Person=3	0	root	_	_
3	miş	i	AUX	Zero	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
4	o	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
5	?	?	PUNCT	Punc	_	2	punct	_	_

~~~


