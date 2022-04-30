---
layout: base
title:  'Statistics of det in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="en_atis-dep-det-predet.html">det:predet</a></tt>.

4738 nodes (8%) are attached to their parents as `det`.

4737 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47298438159561.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (4416; 93% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (219; 5% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (46; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (37; 1% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 det	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	the	the	DET	_	PronType=Art	5	det	_	_
3	tower	tower	PROPN	_	Number=Sing	5	compound	_	_
4	air	air	PROPN	_	Number=Sing	3	flat	_	_
5	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
6	on	on	ADP	_	_	7	case	_	_
7	mondays	monday	PROPN	_	Number=Plur	5	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	limousine	limousine	NOUN	_	Number=Sing	3	compound	_	_
3	rates	rate	NOUN	_	Number=Plur	1	obj	_	_
4	for	for	ADP	_	_	6	case	_	_
5	the	the	DET	_	PronType=Art	6	det	_	_
6	city	city	PROPN	_	Number=Sing	3	nmod	_	_
7	of	of	ADP	_	_	8	case	_	_
8	boston	boston	PROPN	_	Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
2	fare	fare	NOUN	_	Number=Sing	3	compound	_	_
3	code	code	NOUN	_	Number=Sing	6	nsubj	_	_
4	b	b	SYM	_	_	3	nmod	_	_
5	the	the	DET	_	PronType=Art	6	det	_	_
6	same	same	ADJ	_	Degree=Pos	0	root	_	_
7	as	as	ADP	_	_	9	case	_	_
8	business	business	NOUN	_	Number=Sing	9	compound	_	_
9	class	class	NOUN	_	Number=Sing	6	nmod	_	_

~~~


