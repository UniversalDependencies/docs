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

The following 2 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (7; 64% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (4; 36% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	show	show	VERB	_	VerbForm=Inf	0	root	_	_
2	me	I	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	iobj	_	_
3	city	City	PROPN	_	Number=Sing	1	obj	_	_
4	served	serve	VERB	_	Tense=Past|VerbForm=Part	3	acl:relcl	_	_
5	both	both	CCONJ	_	_	7	cc:preconj	_	_
6	by	by	ADP	_	_	7	case	_	_
7	nationair	Nationair	PROPN	_	Number=Sing	4	obl	_	_
8	and	and	CCONJ	_	_	9	cc	_	_
9	canadian	Canadian	PROPN	_	Number=Sing	7	conj	_	_
10	airlines	airline	PROPN	_	Number=Plur	9	flat	_	_
11	international	International	PROPN	_	Number=Sing	9	flat	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc:preconj	color:blue
1	show	show	VERB	_	VerbForm=Inf	0	root	_	_
2	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
3	from	from	ADP	_	_	4	case	_	_
4	san	San	PROPN	_	Number=Sing	2	nmod	_	_
5	francisco	Francisco	PROPN	_	Number=Sing	4	flat	_	_
6	to	to	ADP	_	_	7	case	_	_
7	denver	Denver	PROPN	_	Number=Sing	2	nmod	_	_
8	on	on	ADP	_	_	10	case	_	_
9	either	either	CCONJ	_	_	10	cc:preconj	_	_
10	wednesday	Wednesday	NOUN	_	Number=Sing	2	nmod:tmod	_	_
11	the	the	DET	_	PronType=Art	13	det	_	_
12	twenty	twenty	NUM	_	NumType=Card	13	compound	_	_
13	third	three	ADJ	_	Degree=Pos|NumType=Ord	10	amod	_	_
14	or	or	CCONJ	_	_	15	cc	_	_
15	thursday	Thursday	NOUN	_	Number=Sing	10	conj	_	_
16	the	the	DET	_	PronType=Art	18	det	_	_
17	twenty	twenty	NUM	_	NumType=Card	18	compound	_	_
18	fourth	four	ADJ	_	Degree=Pos|NumType=Ord	15	amod	_	_

~~~


