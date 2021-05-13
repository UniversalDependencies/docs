---
layout: base
title:  'Statistics of xcomp in UD_Guajajara-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Guajajara-TuDeT: Relations: `xcomp`

This relation is universal.

5 nodes (1%) are attached to their parents as `xcomp`.

4 instances of `xcomp` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="gub_tudet-pos-AUX.html">AUX</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 xcomp	color:blue
1	Iʔok	ʔok	VERB	vt	Person=3	4	xcomp	4:xcomp	_
2	ire	re	ADP	posp	Rel=NCont	1	case	1:case	_
3	,	,	PUNCT	punct	_	1	punct	1:punct	_
4	oho	ho	VERB	vi	Person=3	0	root	0:root	_
5	hɨru	ɨru	NOUN	n	Rel=NCont	4	obl	4:obl	_
6	ipiar	piar	NOUN	n	Rel=NCont	5	nmod	5:nmod	_
7	romo	romo	ADP	posp	_	6	case	6:case	_
8	.	.	PUNCT	punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	Oho	ho	VERB	vi	Person=3	3	dep	3:dep	_
2	hoko	hoko	NOUN	n	_	3	nsubj	3:nsubj	_
3	iko	iko	AUX	aux	Aspect=Prog|Person=3	0	root	0:root	_
4	ɨrɨhu	ɨrɨk	NOUN	n	Nomzr=DevPass	3	obl	3:obl	_
5	pe	pe	ADP	posp	Case=All	4	case	4:case	_
6	ipira	pira	NOUN	n	Rel=Abs	7	obj	7:obj	_
7	pɨhɨk	pɨhɨk	VERB	vt	VerbForm=Inf	3	xcomp	3:xcomp	_
8	pa	pa	ADP	posp	Rel=Cont	7	mark	7:mark	_
9	.	.	PUNCT	punct	_	3	punct	3:punct	_

~~~


