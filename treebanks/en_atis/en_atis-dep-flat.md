---
layout: base
title:  'Statistics of flat in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `flat`

This relation is universal.

3148 nodes (5%) are attached to their parents as `flat`.

3148 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08449809402795.

The following 11 pairs of parts of speech are connected with `flat`: <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (3053; 97% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (34; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (26; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (22; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	what	what	PRON	_	PronType=Int,Rel	5	obj	_	_
2	does	do	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	d	d	PROPN	_	Number=Sing	5	nsubj	_	_
4	s	s	PROPN	_	Number=Sing	3	flat	_	_
5	stand	stand	VERB	_	VerbForm=Inf	0	root	_	_
6	for	for	ADP	_	_	5	compound:prt	_	_
7	for	for	ADP	_	_	8	case	_	_
8	meals	meal	NOUN	_	Number=Plur	5	obl	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	explain	explain	VERB	_	VerbForm=Inf	0	root	_	_
2	restriction	restriction	NOUN	_	Number=Sing	1	obj	_	_
3	ap	ap	PROPN	_	Number=Sing	2	flat	_	_
4	57	57	NUM	_	NumType=Card	3	flat	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	_	PronType=Art	4	det	_	_
4	type	type	NOUN	_	Number=Sing	1	nsubj	_	_
5	of	of	ADP	_	_	6	case	_	_
6	aircraft	aircraft	NOUN	_	Number=Sing	4	nmod	_	_
7	for	for	ADP	_	_	8	case	_	_
8	united	united	PROPN	_	Number=Sing	4	nmod	_	_
9	flight	flight	NOUN	_	Number=Sing	8	flat	_	_
10	21	21	NUM	_	NumType=Card	8	appos	_	_

~~~


