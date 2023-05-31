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

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (218; 79% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (24; 9% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (11; 4% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	i	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	need	need	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	information	information	NOUN	_	Number=Sing	2	obj	_	_
4	for	for	ADP	_	_	6	case	_	_
5	ground	ground	NOUN	_	Number=Sing	6	compound	_	_
6	transportation	transportation	NOUN	_	Number=Sing	3	nmod	_	_
7	denver	Denver	PROPN	_	Number=Sing	6	list	_	_
8	colorado	Colorado	PROPN	_	Number=Sing	7	appos	_	_

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
5	sb	SB	PROPN	_	Number=Sing	4	appos	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	from	from	ADP	_	_	2	case	_	_
2	denver	Denver	PROPN	_	Number=Sing	0	root	_	_
3	to	to	ADP	_	_	4	case	_	_
4	washington	Washington	PROPN	_	Number=Sing	2	list	_	_
5	dc	DC	PROPN	_	Number=Sing	4	flat	_	_
6	on	on	ADP	_	_	7	case	_	_
7	monday	Monday	NOUN	_	Number=Sing	2	list	_	_
8	november	November	NOUN	_	Number=Sing	7	appos	_	_
9	eleventh	eleven	ADJ	_	Degree=Pos	8	amod	_	_
10	1991	1991	NUM	_	NumType=Card	7	appos	_	_

~~~


