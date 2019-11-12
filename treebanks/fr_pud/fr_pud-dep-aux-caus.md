---
layout: base
title:  'Statistics of aux:caus in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `aux:caus`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_pud-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_pud-dep-aux-tense.html">aux:tense</a></tt>.

9 nodes (0%) are attached to their parents as `aux:caus`.

9 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (9; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:caus	color:blue
1	C'	_	PRON	PDEM	_	3	nsubj	_	SpaceAfter=No
2	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	ce	_	PRON	PDEM	_	0	root	_	_
4	qui	_	PRON	WP	_	7	nsubj:caus	_	_
5	nous	_	PRON	PRP	Number=Plur|Person=1	7	obj:agent	_	_
6	fait	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux:caus	_	_
7	revenir	_	VERB	VB	_	3	acl:relcl	_	_
8	encore	_	ADV	RB	_	7	advmod	_	_
9	et	_	CCONJ	CC	_	10	cc	_	_
10	encore	_	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


