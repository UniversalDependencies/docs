---
layout: base
title:  'Statistics of aux in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="fr_gsd-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_gsd-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_gsd-dep-aux-tense.html">aux:tense</a></tt>.

11 nodes (0%) are attached to their parents as `aux`.

11 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54545454545455.

The following 1 pairs of parts of speech are connected with `aux`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (11; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Ils	eux	PRON	_	Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	wordform=ils
2	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
3	voient	voir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	confier	confier	VERB	_	VerbForm=Inf	0	root	_	Subject=Generic
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	autre	autre	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
7	chargement	chargement	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
8	partant	partir	VERB	_	Tense=Pres|VerbForm=Part	7	acl	_	_
9	de	de	ADP	_	_	10	case	_	_
10	Baranquilla	Baranquilla	PROPN	_	_	8	obl:arg	_	_
11	en	en	ADP	_	_	12	case	_	_
12	Colombie	Colombie	PROPN	_	_	8	obl:mod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


