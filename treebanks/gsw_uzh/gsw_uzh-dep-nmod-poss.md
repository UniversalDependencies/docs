---
layout: base
title:  'Statistics of nmod:poss in UD_Swiss_German-UZH'
udver: '2'
---

## Treebank Statistics: UD_Swiss_German-UZH: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="gsw_uzh-dep-nmod.html">nmod</a></tt>.

12 nodes (1%) are attached to their parents as `nmod:poss`.

12 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08333333333333.

The following 1 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="gsw_uzh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gsw_uzh-pos-DET.html">DET</a></tt> (12; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	Daas	_	DET	PDAT	_	2	det	_	_
2	Buech	_	NOUN	NN	_	3	nsubj	_	_
3	laufft	_	VERB	VVFIN	_	0	root	_	_
4	besser	_	ADV	ADV	_	3	xcomp	_	_
5	als	_	CCONJ	KOKOM	_	6	mark	_	_
6	jede	_	PRON	PIS	_	4	obl	_	_
7	vo	_	ADP	APPR	_	9	case	_	_
8	sine	_	DET	PPOSAT	_	9	nmod:poss	_	_
9	Krimi	_	NOUN	NN	_	6	nmod	_	SpaceAfter=No
10	.	_	PUNCT	$.	_	3	punct	_	_

~~~


