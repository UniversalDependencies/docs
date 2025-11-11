---
layout: base
title:  'Statistics of amod in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `amod`

This relation is universal.

1783 nodes (3%) are attached to their parents as `amod`.

1232 instances of `amod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42456533931576.

The following 22 pairs of parts of speech are connected with `amod`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1652; 93% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (25; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (20; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (15; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (8; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (8; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	_	PronType=Art	4	det	_	_
4	number	number	NOUN	_	Number=Sing	1	nsubj	_	_
5	of	of	ADP	_	_	8	case	_	_
6	first	one	ADJ	_	Degree=Pos|NumType=Ord	7	amod	_	_
7	class	class	NOUN	_	Number=Sing	8	compound	_	_
8	flights	flight	NOUN	_	Number=Plur	4	nmod	_	_
9	on	on	ADP	_	_	10	case	_	_
10	american	American	PROPN	_	Number=Sing	8	nmod	_	_
11	airlines	airline	PROPN	_	Number=Plur	10	flat	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	which	which	DET	_	PronType=Int,Rel	2	det	_	_
2	airlines	airline	NOUN	_	Number=Plur	3	nsubj	_	_
3	have	have	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	nonstop	nonstop	NOUN	_	Number=Sing	5	amod	_	_
5	flights	flight	NOUN	_	Number=Plur	3	obj	_	_
6	from	from	ADP	_	_	7	case	_	_
7	kansas	Kansas	PROPN	_	Number=Sing	5	nmod	_	_
8	city	City	PROPN	_	Number=Sing	7	flat	_	_
9	to	to	ADP	_	_	10	case	_	_
10	chicago	Chicago	PROPN	_	Number=Sing	5	nmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 amod	color:blue
1	and	and	CCONJ	_	_	3	cc	_	_
2	from	from	ADP	_	_	3	case	_	_
3	milwaukee	Milwaukee	PROPN	_	Number=Sing	0	root	_	_
4	to	to	ADP	_	_	5	case	_	_
5	atlanta	Atlanta	PROPN	_	Number=Sing	3	nmod	_	_
6	before	before	ADP	_	_	8	case	_	_
7	10	10	NUM	_	NumType=Card	8	nummod	_	_
8	am	am	NOUN	_	Number=Sing	3	nmod:tmod	_	_
9	daily	daily	ADJ	_	Degree=Pos	3	amod	_	_

~~~


