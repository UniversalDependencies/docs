---
layout: base
title:  'Statistics of aux:q in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `aux:q`

This relation is a language-specific subtype of .

209 nodes (0%) are attached to their parents as `aux:q`.

209 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33492822966507.

The following 9 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (107; 51% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (41; 20% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (34; 16% instances), <tt><a href="tr-pos-PRON.html">PRON</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (12; 6% instances), <tt><a href="tr-pos-ADV.html">ADV</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (10; 5% instances), <tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="tr-pos-DET.html">DET</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:q	color:blue
1	Ne	ne	ADV	Adverb	_	3	advmod	_	_
2	güzel	güzel	ADJ	Adj	_	3	amod	_	_
3	günler	gün	NOUN	Noun	Case=Nom|Number=Plur|Person=3	0	root	_	_
4	di	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	_
5	değil	değil	VERB	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	3	conj	_	_
6	mi	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:q	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	8	punct	_	_
8	Ah	ah	INTJ	Interj	_	3	discourse	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	10	punct	_	_
10	ah	ah	INTJ	Interj	_	3	discourse	_	SpaceAfter=No
11	...	...	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 aux:q	color:blue
1	Yanaşan	yanaş	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	3	obj	_	_
2	ı	_	ADP	Zero	Case=Acc|Number=Sing|Person=3	1	case	_	_
3	haklar	hak	NOUN	Noun	Case=Nom|Number=Plur|Person=3	0	root	_	_
4	ım	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres	3	cop	_	_
5	anladınız	anla	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Past	3	conj	_	_
6	mı	mı	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux:q	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 aux:q	color:blue
1	Yok	yok	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	3	conj	_	_
2	sa	i	AUX	Zero	Aspect=Perf|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	biliyor	bil	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	9	obj	_	_
4	musunuz	mu	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres	1	aux:q	_	_
5	orayı	ora	NOUN	Noun	Case=Acc|Number=Sing|Person=3	3	conj	_	SpaceAfter=No
6	?	?	PUNCT	Punc	_	5	punct	_	_
7	diye	diye	ADP	PCNom	_	9	case	_	_
8	hayretle	hayret	NOUN	Noun	Case=Ins|Number=Sing|Person=3	9	obl	_	_
9	sordu	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


