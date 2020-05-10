---
layout: base
title:  'Statistics of csubj:pass in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj:pass	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	4	expl:subj	_	wordform=il
2	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	été	être	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	aux:pass	_	_
4	souligné	souligner	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	IN	_	8	mark	_	_
6	nous	il	PRON	PRP	Number=Plur|Person=1	8	nsubj	_	_
7	ne	ne	ADV	RB	Polarity=Neg	8	advmod	_	_
8	pouvons	pouvoir	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	csubj:pass	_	_
9	absolument	absolument	ADV	RB	_	10	advmod	_	_
10	pas	pas	ADV	RB	Polarity=Neg	8	advmod	_	_
11	continuer	continuer	VERB	VB	VerbForm=Inf	8	xcomp	_	_
12	avec	avec	ADP	IN	_	13	case	_	_
13	ceux	celui	PRON	PDEM	Gender=Masc|Number=Plur	11	obl	_	_
14	qui	qui	PRON	WP	Gender=Masc|Number=Plur	15	nsubj	_	_
15	sont	être	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	acl:relcl	_	_
16	complètement	complètement	ADV	RB	_	15	advmod	_	_
17	contre	contre	ADP	IN	_	19	case	_	_
18	l'	le	DET	DT	Gender=Fem|Number=Sing	19	det	_	SpaceAfter=No
19	Italie	Italie	PROPN	NNP	Gender=Fem|Number=Sing	15	obl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	4	punct	_	_

~~~


