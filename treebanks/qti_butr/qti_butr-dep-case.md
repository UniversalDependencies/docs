---
layout: base
title:  'Statistics of case in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `case`

This relation is universal.

9 nodes (2%) are attached to their parents as `case`.

7 instances of `case` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `case`: <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (4; 44% instances), <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (4; 44% instances), <tt><a href="qti_butr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 case	color:blue
1	Bunda	bu	PRON	_	Case=Loc|Number=Sing|Person=3|PronType=Dem	7	obl	_	Lang=tr
2	da	da	CCONJ	_	_	1	advmod	_	Lang=tr
3	on	on	ADP	_	_	6	case	_	Lang=en
4	the	the	DET	_	PronType=Art	6	det	_	Lang=en
5	same	same	ADJ	_	_	6	amod	_	Lang=en
6	page	page	NOUN	_	Number=Sing	7	obl	_	Lang=en
7	olmayız	ol	VERB	_	Aspect=Imp|Number=Plur|Person=1|Polarity=Neg|Tense=Pres	0	root	_	Lang=tr
8	yani	yani	CCONJ	_	_	7	discourse	_	Lang=tr|SpaceAfter=No
9	!	!	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Bunun	bu	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Dem	5	advcl	_	Lang=tr
2	için	için	ADP	_	_	1	case	_	Lang=tr
3	bir	bir	DET	_	PronType=Art	4	det	_	Lang=tr
4	toplantı	toplantı	NOUN	_	Case=Nom|Number=Sing|Person=3	5	compound	_	Lang=tr
5	alabiliriz	al	VERB	_	Aspect=Imp|Mood=Pot|Number=Plur|Person=1|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|LoanTrans=en:get_a_meeting|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	How	how	ADV	_	_	0	root	_	Lang=en
2	about	about	ADP	_	_	3	case	_	Lang=en
3	Cumartesi	Cumartesi	PROPN	_	Case=Nom|Number=Sing|Person=3	1	obl	_	Lang=tr|SpaceAfter=No
4	?	?	PUNCT	_	_	1	punct	_	_

~~~


