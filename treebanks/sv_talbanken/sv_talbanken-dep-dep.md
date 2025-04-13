---
layout: base
title:  'Statistics of dep in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `dep`

This relation is universal.

1 nodes (0%) are attached to their parents as `dep`.

1 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep`: <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-PART.html">PART</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep	color:blue
1	Lägg	lägga	VERB	VB|IMP|AKT	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	märke	märke	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	compound:prt	1:compound:prt	_
3	till	till	ADP	PP	_	5	case	5:case	SpaceAfter=No
4	:	:	PUNCT	MID	_	5	punct	5:punct	_
5	för	för	ADP	PP	_	1	obl	1:obl:till	_
6	att	att	PART	IE	_	5	dep	5:dep	SpaceAfter=No
7	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


