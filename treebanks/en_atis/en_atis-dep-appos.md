---
layout: base
title:  'Statistics of appos in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `appos`

This relation is universal.

277 nodes (0%) are attached to their parents as `appos`.

277 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25270758122744.

The following 8 pairs of parts of speech are connected with `appos`: <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (234; 84% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (21; 8% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (7; 3% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (7; 3% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	i	i	PRON	_	PronType=Prs	2	nsubj	_	_
2	need	need	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	information	information	NOUN	_	Number=Sing	2	obj	_	_
4	for	for	ADP	_	_	6	case	_	_
5	ground	ground	NOUN	_	Number=Sing	6	compound	_	_
6	transportation	transportation	NOUN	_	Number=Sing	3	nmod	_	_
7	denver	denver	PROPN	_	Number=Sing	6	list	_	_
8	colorado	colorado	PROPN	_	Number=Sing	7	appos	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	meal	meal	NOUN	_	Number=Sing	4	compound	_	_
4	code	code	NOUN	_	Number=Sing	1	nsubj	_	_
5	sb	sb	PROPN	_	Number=Sing	4	appos	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 appos	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	_	PronType=Art	4	det	_	_
4	fare	fare	NOUN	_	Number=Sing	1	nsubj	_	_
5	on	on	ADP	_	_	8	case	_	_
6	american	american	PROPN	_	Number=Sing	8	compound	_	_
7	airlines	airline	PROPN	_	Number=Plur	6	flat	_	_
8	flight	flight	NOUN	_	Number=Sing	4	nmod	_	_
9	928	928	NUM	_	NumType=Card	8	appos	_	_
10	from	from	ADP	_	_	11	case	_	_
11	dallas	dallas	PROPN	_	Number=Sing	8	nmod	_	_
12	fort	fort	PROPN	_	Number=Sing	11	appos	_	_
13	worth	worth	PROPN	_	Number=Sing	12	flat	_	_
14	to	to	ADP	_	_	15	case	_	_
15	boston	boston	PROPN	_	Number=Sing	8	nmod	_	_

~~~


