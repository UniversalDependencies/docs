---
layout: base
title:  'Statistics of aux:q in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_imst-dep-aux.html">aux</a></tt>.

218 nodes (0%) are attached to their parents as `aux:q`.

218 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19266055045872.

The following 10 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (105; 48% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (46; 21% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (35; 16% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (11; 5% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (11; 5% instances), <tt><a href="tr_imst-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 0% instances).


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
6	mı	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux:q	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:q	color:blue
1	Tonik	tonik	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	yok	yok	ADJ	Adj	_	0	root	_	_
3	mu	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	aux:q	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


