---
layout: base
title:  'Statistics of aux:pass in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_atis-dep-aux.html">aux</a></tt>.

10 nodes (0%) are attached to their parents as `aux:pass`.

10 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (10; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	what	what	DET	_	PronType=Int,Rel	2	det	_	_
2	kind	kind	NOUN	_	Number=Sing	6	nsubj	_	_
3	of	of	ADP	_	_	4	case	_	_
4	aircraft	aircraft	NOUN	_	Number=Sing	2	nmod	_	_
5	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
6	used	use	VERB	_	Tense=Past|VerbForm=Part	0	root	_	_
7	on	on	ADP	_	_	9	case	_	_
8	a	a	DET	_	PronType=Art	9	det	_	_
9	flight	flight	NOUN	_	Number=Sing	6	obl	_	_
10	from	from	ADP	_	_	11	case	_	_
11	cleveland	cleveland	PROPN	_	Number=Sing	9	nmod	_	_
12	to	to	ADP	_	_	13	case	_	_
13	dallas	dallas	PROPN	_	Number=Sing	9	nmod	_	_

~~~


