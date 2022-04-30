---
layout: base
title:  'Statistics of cc:preconj in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_atis-dep-cc.html">cc</a></tt>.

11 nodes (0%) are attached to their parents as `cc:preconj`.

11 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27272727272727.

The following 1 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (11; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	show	show	VERB	_	VerbForm=Inf	0	root	_	_
2	me	I	PRON	_	PronType=Prs	1	iobj	_	_
3	city	city	PROPN	_	Number=Sing	1	obj	_	_
4	served	serve	VERB	_	Tense=Past|VerbForm=Part	3	acl:relcl	_	_
5	both	both	CCONJ	_	_	7	cc:preconj	_	_
6	by	by	ADP	_	_	7	case	_	_
7	nationair	nationair	PROPN	_	Number=Sing	4	obl	_	_
8	and	and	CCONJ	_	_	9	cc	_	_
9	canadian	canadian	PROPN	_	Number=Sing	7	conj	_	_
10	airlines	airline	PROPN	_	Number=Plur	9	flat	_	_
11	international	international	PROPN	_	Number=Sing	9	flat	_	_

~~~


