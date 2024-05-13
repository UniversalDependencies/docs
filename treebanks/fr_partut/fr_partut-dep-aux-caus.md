---
layout: base
title:  'Statistics of aux:caus in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `aux:caus`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="fr_partut-dep-aux-pass.html">aux:pass</a></tt>.

13 nodes (0%) are attached to their parents as `aux:caus`.

13 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23076923076923.

The following 1 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (13; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:caus	color:blue
1	Les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	conséquences	conséquence	NOUN	S	Gender=Fem|Number=Plur	7	nsubj:caus	_	_
3	ne	ne	PART	PART	Polarity=Neg	7	advmod	_	_
4	se	se	PRON	P	Person=3|PronType=Prs	7	obj:agent	_	_
5	font	faire	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux:caus	_	_
6	pas	pas	ADV	BN	Polarity=Neg	7	advmod	_	_
7	attendre	attendre	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	7	punct	_	_

~~~


