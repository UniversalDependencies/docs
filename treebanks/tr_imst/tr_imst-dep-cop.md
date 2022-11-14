---
layout: base
title:  'Statistics of cop in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `cop`

This relation is universal.

849 nodes (1%) are attached to their parents as `cop`.

848 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12014134275618.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (355; 42% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (280; 33% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (64; 8% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (61; 7% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (55; 6% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (16; 2% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Alışveriş	alışveriş	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	csubj	_	_
2	ise	i	AUX	Conj	_	1	cop	_	_
3	hayatın	hayat	NOUN	Noun	Case=Gen|Number=Sing|Person=3	4	nmod:poss	_	_
4	temelinde	temel	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	amod	_	_
5	yatar	yat	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
1	Oğlunun	oğul	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
2	neden	ne	PRON	Ques	Case=Abl|Number=Sing|Person=3	4	obl	_	_
3	eroinman	eroinman	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	olduğunu	ol	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	5	ccomp	_	_
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
1	-	-	PUNCT	Punc	_	2	punct	_	SpaceAfter=No
2	?	ne	PRON	Ques	Case=Abl|Number=Sing|Person=3	0	root	_	_
3	edenmiş	i	AUX	Zero	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
4	o	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
5	?	?	PUNCT	Punc	_	2	punct	_	_

~~~


