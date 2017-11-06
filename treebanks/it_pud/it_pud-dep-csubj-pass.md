---
layout: base
title:  'Statistics of csubj:pass in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="it_pud-dep-csubj.html">csubj</a></tt>.

6 nodes (0%) are attached to their parents as `csubj:pass`.

6 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.66666666666667.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (6; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 csubj:pass	color:blue
1	Non	non	ADV	RB	Polarity=Neg	3	advmod	_	_
2	si	si	PRON	SE	Number=Sing|Person=3	3	expl	_	_
3	capisce	capire	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	in	in	ADP	IN	_	6	case	_	_
5	che	che	DET	WDT	Gender=Masc|Number=Sing	6	det	_	_
6	modo	modo	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
7	i	il	DET	DT	Gender=Masc|Number=Plur	9	det	_	_
8	due	due	NUM	CD	_	9	nummod	_	_
9	drammaturghi	drammaturgo	NOUN	NN	Gender=Masc|Number=Plur	12	nsubj	_	_
10	abbiano	avere	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Pres|Voice=Act	12	aux	_	_
11	potuto	potere	AUX	VBN	Tense=Past	12	aux	_	_
12	lavorare	lavorare	VERB	VB	Voice=Act	3	csubj:pass	_	_
13	insieme	insieme	ADV	RB	_	12	advmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


