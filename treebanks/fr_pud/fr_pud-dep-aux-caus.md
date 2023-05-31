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
1	C'	ce	PRON	PDEM	PronType=Dem	3	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ce	ce	PRON	PDEM	PronType=Dem	0	root	_	_
4	qui	qui	PRON	WP	PronType=Rel	7	nsubj:caus	_	_
5	nous	le	PRON	PRP	Number=Plur|Person=1|PronType=Prs	7	obj:agent	_	_
6	fait	faire	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:caus	_	_
7	revenir	revenir	VERB	VB	VerbForm=Inf	3	acl:relcl	_	_
8	encore	encore	ADV	RB	_	7	advmod	_	_
9	et	et	CCONJ	CC	_	10	cc	_	_
10	encore	encore	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


