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
1	Il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	4	expl:subj	_	_
2	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux:tense	_	_
3	été	_	AUX	VBN	Gender=Masc|Number=Sing	4	aux:pass	_	_
4	souligné	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
5	que	_	SCONJ	IN	_	8	mark	_	_
6	nous	_	PRON	PRP	Number=Plur|Person=1	8	nsubj	_	_
7	ne	_	ADV	RB	Polarity=Neg	8	advmod	_	_
8	pouvons	_	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	4	csubj:pass	_	_
9	absolument	_	ADV	RB	_	10	advmod	_	_
10	pas	_	ADV	RB	Polarity=Neg	8	advmod	_	_
11	continuer	_	VERB	VB	_	8	xcomp	_	_
12	avec	_	ADP	IN	_	13	case	_	_
13	ceux	_	PRON	PDEM	Gender=Masc|Number=Plur	11	obl	_	_
14	qui	_	PRON	WP	Gender=Masc|Number=Plur	15	nsubj	_	_
15	sont	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	13	acl:relcl	_	_
16	complètement	_	ADV	RB	_	15	advmod	_	_
17	contre	_	ADP	IN	_	19	case	_	_
18	l'	_	DET	DT	Gender=Fem|Number=Sing	19	det	_	SpaceAfter=No
19	Italie	_	PROPN	NNP	Gender=Fem|Number=Sing	15	obl	_	SpaceAfter=No
20	.	_	PUNCT	.	_	4	punct	_	_

~~~


