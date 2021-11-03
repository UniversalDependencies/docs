---
layout: base
title:  'Statistics of dep in UD_Guajajara-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Guajajara-TuDeT: Relations: `dep`

This relation is universal.

37 nodes (2%) are attached to their parents as `dep`.

30 instances of `dep` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94594594594595.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (26; 70% instances), <tt><a href="gub_tudet-pos-AUX.html">AUX</a></tt>-<tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt> (7; 19% instances), <tt><a href="gub_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="gub_tudet-pos-AUX.html">AUX</a></tt> (4; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep	color:blue
1	Uhem	hem	VERB	v	Person=3	0	root	_	_
2	Zuze	Zuze	PROPN	pn	_	3	nmod	_	_
3	hemireko	eko	NOUN	n	Rel=NCont	1	nsubj	_	_
4	oho	ho	VERB	vi	Person=3	1	dep	_	_
5	ʔɨ	ʔɨ	NOUN	n	_	1	obl	_	_
6	pe	pe	ADP	posp	Case=All	5	case	_	_
7	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep	color:blue
1	Mon	mon	PRON	pro	PronType=Int	4	nsubj	_	_
2	aipo	aipo	PART	pcl	_	1	discourse	_	_
3	ur	ur	VERB	vi	Person=3	4	dep	_	_
4	iko	iko	AUX	aux	Aspect=Prog|Person=3	0	root	_	_
5	aʔe	aʔe	DET	dem	PronType=Dem	1	discourse	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Aʔe	aʔe	PRON	pro	_	4	obl	_	_
2	rupi	upi	ADP	posp	Rel=Cont	1	case	_	_
3	,	,	PUNCT	punct	_	1	punct	_	_
4	ur	zur	VERB	v	Person=3	0	root	_	_
5	iko	iko	AUX	aux	Aspect=Prog|Person=3	4	dep	_	_
6	ko	ko	NOUN	n	_	4	obl	_	_
7	pe	pe	ADP	posp	Rel=Cont	6	case	_	_
8	aʔe	aʔe	PART	pcl	Person=3	4	discourse	_	_
9	kurɨ	kurɨ	PART	pcl	_	4	discourse	_	_
10	.	.	PUNCT	punct	_	4	punct	_	_

~~~


