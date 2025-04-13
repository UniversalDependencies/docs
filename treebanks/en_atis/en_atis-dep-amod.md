---
layout: base
title:  'Statistics of amod in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `amod`

This relation is universal.

1785 nodes (3%) are attached to their parents as `amod`.

1234 instances of `amod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42521008403361.

The following 22 pairs of parts of speech are connected with `amod`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1654; 93% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (25; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (20; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (15; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (8; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (8; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 amod	color:blue
1	i	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	want	want	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	to	to	ADP	_	_	4	case	_	_
4	fly	fly	VERB	_	VerbForm=Inf	2	xcomp	_	_
5	from	from	ADP	_	_	6	case	_	_
6	denver	Denver	PROPN	_	Number=Sing	4	obl	_	_
7	to	to	ADP	_	_	8	case	_	_
8	san	San	PROPN	_	Number=Sing	4	obl	_	_
9	francisco	Francisco	PROPN	_	Number=Sing	8	flat	_	_
10	with	with	ADP	_	_	14	case	_	_
11	at	at	ADP	_	_	12	case	_	_
12	least	least	ADJ	_	Degree=Sup	14	amod	_	_
13	one	one	NUM	_	NumType=Card	14	nummod	_	_
14	stop	stop	NOUN	_	Number=Sing	4	obl	_	_

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


