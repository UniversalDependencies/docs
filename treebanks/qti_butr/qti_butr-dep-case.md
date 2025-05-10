---
layout: base
title:  'Statistics of case in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `case`

This relation is universal.

8 nodes (2%) are attached to their parents as `case`.

6 instances of `case` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.875.

The following 3 pairs of parts of speech are connected with `case`: <tt><a href="qti_butr-pos-PRON.html">PRON</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (4; 50% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (3; 38% instances), <tt><a href="qti_butr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qti_butr-pos-ADP.html">ADP</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Bunun	bu	PRON	_	Case=Gen|Number=Sing|Person=3	5	advcl	_	Lang=tr
2	için	için	ADP	_	_	1	case	_	Lang=tr
3	bir	bir	DET	_	_	4	det	_	Lang=tr
4	toplantı	toplantı	NOUN	_	Case=Nom|Number=Sing|Person=3	5	compound	_	Lang=tr
5	alabiliriz	al	VERB	_	Aspect=Imp|Mood=Pot|Number=Plur|Person=1|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|LoanTrans=en:get_a_meeting|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 case	color:blue
1	Biraz	biraz	ADV	_	_	2	advmod	_	Lang=tr
2	geniş	geniş	ADJ	_	_	0	root	_	Lang=tr
3	for	for	ADP	_	_	5	case	_	Lang=en
4	my	my	DET	_	_	5	det	_	Lang=en
5	taste	taste	NOUN	_	Number=Sing	2	obl	_	Lang=en|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

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


