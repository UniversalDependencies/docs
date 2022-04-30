---
layout: base
title:  'Statistics of reparandum in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `reparandum`

This relation is universal.

18 nodes (0%) are attached to their parents as `reparandum`.

14 instances of `reparandum` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 7 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (4; 22% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (3; 17% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (3; 17% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (3; 17% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 reparandum	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	the	the	DET	_	PronType=Art	5	det	_	_
3	alaska	alaska	PROPN	_	Number=Sing	5	compound	_	_
4	airlines	airline	PROPN	_	Number=Plur	3	flat	_	_
5	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
6	a	a	DET	_	PronType=Art	7	reparandum	_	_
7	departing	depart	VERB	_	Tense=Pres|VerbForm=Part	5	acl:relcl	_	_
8	from	from	ADP	_	_	9	case	_	_
9	burbank	burbank	PROPN	_	Number=Sing	7	obl	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 reparandum	color:blue
1	what	what	DET	_	PronType=Art	2	det	_	_
2	airline	airline	NOUN	_	Number=Sing	7	nsubj	_	_
3	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
4	as	as	ADP	_	_	5	reparandum	_	_
5	as	as	ADP	_	_	7	case	_	_
6	in	in	ADP	_	_	7	case	_	_
7	sam	sam	PROPN	_	Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 reparandum	color:blue
1	please	please	INTJ	_	_	2	discourse	_	_
2	list	list	VERB	_	VerbForm=Inf	0	root	_	_
3	all	all	DET	_	PronType=Art	4	det	_	_
4	flights	flight	NOUN	_	Number=Plur	2	obj	_	_
5	from	from	ADP	_	_	6	case	_	_
6	new	new	PROPN	_	Number=Sing	4	nmod	_	_
7	york	york	PROPN	_	Number=Sing	6	flat	_	_
8	to	to	ADP	_	_	9	case	_	_
9	miami	miami	PROPN	_	Number=Sing	4	nmod	_	_
10	any	any	DET	_	PronType=Art	11	reparandum	_	_
11	any	any	DET	_	PronType=Art	12	det	_	_
12	type	type	NOUN	_	Number=Sing	4	nmod	_	_
13	of	of	ADP	_	_	14	case	_	_
14	class	class	NOUN	_	Number=Sing	12	nmod	_	_

~~~


