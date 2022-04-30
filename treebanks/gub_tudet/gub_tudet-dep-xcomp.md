---
layout: base
title:  'Statistics of xcomp in UD_Guajajara-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Guajajara-TuDeT: Relations: `xcomp`

This relation is universal.

18 nodes (1%) are attached to their parents as `xcomp`.

14 instances of `xcomp` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.55555555555556.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (15; 83% instances), <tt><a href="gub_tudet-pos-AUX.html">AUX</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 xcomp	color:blue
1	Iʔok	ʔok	VERB	vt	Person=3	4	xcomp	_	_
2	ire	re	ADP	posp	Rel=NCont	1	case	_	_
3	,	,	PUNCT	punct	_	1	punct	_	_
4	oho	ho	VERB	vi	Person=3	0	root	_	_
5	hɨru	ɨru	NOUN	n	Rel=NCont	4	obl	_	_
6	ipiar	piar	NOUN	n	Rel=NCont	5	nmod	_	_
7	romo	romo	ADP	posp	_	6	case	_	_
8	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	Oho	ho	VERB	vi	Person=3	3	dep	_	_
2	hoko	hoko	NOUN	n	_	3	nsubj	_	_
3	iko	iko	AUX	aux	Aspect=Prog|Person=3	0	root	_	_
4	ɨrɨhu	ɨrɨk	NOUN	n	Nomzr=DevPass	3	obl	_	_
5	pe	pe	ADP	posp	Case=All	4	case	_	_
6	ipira	pira	NOUN	n	Rel=Abs	7	obj	_	_
7	pɨhɨk	pɨhɨk	VERB	vt	VerbForm=Inf	3	xcomp	_	_
8	pa	pa	ADP	posp	Rel=Cont	7	mark	_	_
9	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 xcomp	color:blue
1	Wapɨk	apɨk	VERB	v	Number=Plur|Person=3	0	root	_	_
2	Zuze	Zuze	PROPN	pn	_	3	nmod	_	_
3	tu	u	NOUN	n	Person=3	1	nsubj	_	_
4	ɨwɨra	ɨwɨra	NOUN	n	_	1	obl	_	_
5	rehe	ehe	ADP	posp	Rel=Cont	4	case	_	_
6	aʔe	aʔe	PART	pcl	Person=3	1	discourse	_	_
7	,	,	PUNCT	punct	_	9	punct	_	_
8	waʔɨr	aʔɨr	NOUN	n	Person=3	9	nmod	_	_
9	haro	aro	NOUN	n	Rel=NCont	1	xcomp	_	_
10	pa	pa	ADP	posp	Rel=Cont	9	case	_	_
11	aʔe	aʔe	PART	pcl	Person=3	9	discourse	_	_
12	,	,	PUNCT	punct	_	9	punct	_	_
13	ko	ko	NOUN	n	_	1	obl	_	_
14	pe	pe	ADP	posp	Rel=Cont	13	case	_	_
15	aʔe	aʔe	PART	pcl	Person=3	13	discourse	_	_
16	.	.	PUNCT	punct	_	1	punct	_	_

~~~


