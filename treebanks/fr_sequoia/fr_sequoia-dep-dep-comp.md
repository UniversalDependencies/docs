---
layout: base
title:  'Statistics of dep:comp in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-dep.html">dep</a></tt>.

5 nodes (0%) are attached to their parents as `dep:comp`.

5 instances of `dep:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (5; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	Ils	eux	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	encourent	encourir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	jusqu'	jusque	ADP	_	_	4	dep:comp	_	SpaceAfter=No
4	à	à	ADP	_	_	6	dep	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	an	an	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
7	de	de	ADP	_	_	8	case	_	_
8	prison	prison	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	15 000	15 000	NUM	_	_	11	nummod	_	_
11	euros	euro	NOUN	_	Gender=Masc|Number=Plur	6	conj	_	_
12	d'	de	ADP	_	_	13	case	_	SpaceAfter=No
13	amende	amende	NOUN	_	Gender=Fem|Number=Sing	11	nmod	_	_
14	et	et	CCONJ	_	_	16	cc	_	_
15	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	peine	peine	NOUN	_	Gender=Fem|Number=Sing	6	conj	_	_
17	d'	de	ADP	_	_	18	case	_	SpaceAfter=No
18	inéligibilité	inéligibilité	NOUN	_	Gender=Fem|Number=Sing	16	nmod	_	SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


