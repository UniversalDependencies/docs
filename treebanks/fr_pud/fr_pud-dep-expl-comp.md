---
layout: base
title:  'Statistics of expl:comp in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `expl:comp`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="fr_pud-dep-expl-subj.html">expl:subj</a></tt>.

28 nodes (0%) are attached to their parents as `expl:comp`.

28 instances of `expl:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21428571428571.

The following 1 pairs of parts of speech are connected with `expl:comp`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (28; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:comp	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	expl:subj	_	wordform=il
2	y	y	PRON	PRP	Person=3	3	expl:comp	_	_
3	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	encore	encore	ADV	RB	_	3	advmod	_	_
5	des	un	DET	DT	Gender=Fem|Number=Plur	6	det	_	_
6	questions	question	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
7	qui	qui	PRON	WP	Gender=Fem|Number=Plur	8	nsubj	_	_
8	demeurent	demeurer	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
9	sans	sans	ADP	IN	_	10	case	_	_
10	réponse	réponse	NOUN	NN	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


