---
layout: base
title:  'Statistics of det:predet in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_atis-dep-det.html">det</a></tt>.

72 nodes (0%) are attached to their parents as `det:predet`.

72 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.29166666666667.

The following 1 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (72; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 det:predet	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	all	all	DET	_	PronType=Art	6	det:predet	_	_
3	of	of	ADP	_	_	6	case	_	_
4	the	the	DET	_	PronType=Art	6	det	_	_
5	daily	daily	ADJ	_	Degree=Pos	6	amod	_	_
6	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
7	arriving	arrive	VERB	_	Tense=Pres|VerbForm=Part	6	acl:relcl	_	_
8	in	in	ADP	_	_	9	case	_	_
9	denver	denver	PROPN	_	Number=Sing	7	obl	_	_
10	from	from	ADP	_	_	11	case	_	_
11	8	8	NUM	_	NumType=Card	14	nummod	_	_
12	to	to	ADP	_	_	13	case	_	_
13	9	9	NUM	_	NumType=Card	11	conj	_	_
14	pm	pm	NOUN	_	Number=Sing	7	obl:tmod	_	_

~~~


