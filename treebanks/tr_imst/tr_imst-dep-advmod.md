---
layout: base
title:  'Statistics of advmod in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="tr_imst-dep-advmod-emph.html">advmod:emph</a></tt>.

1900 nodes (3%) are attached to their parents as `advmod`.

1702 instances of `advmod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.48105263157895.

The following 13 pairs of parts of speech are connected with `advmod`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1039; 55% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (337; 18% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (332; 17% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (95; 5% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (27; 1% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (24; 1% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (19; 1% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (9; 0% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Mebrure	Mebrure	PROPN	Prop	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	birden	birden	ADV	Adverb	_	3	advmod	_	_
3	heyecanlanmıştı	heyecanlan	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Ne	ne	ADV	Adverb	_	3	advmod	_	_
2	güzel	güzel	ADJ	Adj	_	3	amod	_	_
3	günler	gün	NOUN	Noun	Case=Nom|Number=Plur|Person=3	0	root	_	_
4	di	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	_
5	değil	değil	VERB	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	3	conj	_	_
6	mi	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:q	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	3	punct	_	_
8	Ah	ah	INTJ	Interj	_	3	discourse	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	10	punct	_	_
10	ah	ah	INTJ	Interj	_	3	discourse	_	SpaceAfter=No
11	...	...	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Orada	ora	PRON	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


